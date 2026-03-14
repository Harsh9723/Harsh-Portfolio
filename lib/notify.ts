import nodemailer from "nodemailer"

type ContactData = {
  name: string
  email: string
  message: string
}

export async function notifyNewContact(data: ContactData) {
  const tasks: Promise<unknown>[] = []
  const to = process.env.NOTIFY_EMAIL_TO
  const from = process.env.NOTIFY_EMAIL_FROM || "no-reply@example.com"
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (to && host && port && user && pass) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })
    try {
      await transporter.verify()
    } catch (e) {
      console.error("nodemailer verify failed", (e as Error)?.message)
    }
    tasks.push(
      transporter.sendMail({
        from: from || user,
        to,
        subject: `New contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      })
    )
  }
  const tgToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChat = process.env.TELEGRAM_CHAT_ID
  if (tgToken && tgChat) {
    const text = `New contact\n\nName: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    tasks.push(
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text }),
      }).then(async (r) => {
        if (!r.ok) throw new Error(`telegram ${r.status}`)
        return r.json()
      })
    )
  }
  if (tasks.length === 0) return
  await Promise.allSettled(tasks)
}

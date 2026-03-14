import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/firebaseAdmin"
import { notifyNewContact } from "@/lib/notify"

type Payload = {
  name: string
  email: string
  message: string
  company?: string // honeypot
}

export async function GET() {
  try {
    // Minimal diagnostics without leaking secrets
    const projectSet = Boolean(process.env.FIREBASE_PROJECT_ID)
    const emailSet = Boolean(process.env.FIREBASE_CLIENT_EMAIL)
    const keySet = Boolean(process.env.FIREBASE_PRIVATE_KEY)
    return NextResponse.json({
      ok: true,
      config: {
        projectSet,
        emailSet,
        keySet,
      },
      time: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Payload>
    const name = (body.name ?? "").toString().trim()
    const email = (body.email ?? "").toString().trim().toLowerCase()
    const message = (body.message ?? "").toString().trim()
    const honeypot = (body.company ?? "").toString().trim()

    if (honeypot) {
      // silently accept to confuse bots
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const db = getDb()
    await db.collection("contacts").add({
      name,
      email,
      message,
      createdAt: new Date(),
      userAgent: req.headers.get("user-agent") ?? "",
      ip: req.headers.get("x-forwarded-for") ?? "",
    })

    notifyNewContact({ name, email, message }).catch((err) => {
      const e = err as Error
      console.error("notify error", e.message)
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const e = err as { message?: string; code?: string | number }
    console.error("contact POST error", e?.code ?? "", e?.message ?? "")
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}

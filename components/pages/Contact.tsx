"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const payload = Object.fromEntries(formData) as Record<string, string>
        setStatus("loading")
        setError(null)
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: payload.name,
                    email: payload.email,
                    message: payload.message,
                    company: payload.company, // honeypot
                }),
            })
            if (!res.ok) throw new Error((await res.json()).error || "Failed to send")
            setStatus("success")
            form.reset()
        } catch (err) {
            const e = err as Error
            setStatus("error")
            setError(e.message || "Something went wrong")
        }
    }

    return (
        <section id="contact" className="py-24 px-6 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/40">

            <h2 className="text-4xl font-bold text-center mb-16">
                Contact Me
            </h2>

            <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-6">

                <Input name="name" placeholder="Your Name" required />

                <Input name="email" type="email" placeholder="Email Address" required />

                <Textarea name="message" placeholder="Your Message" required />

                {/* Honeypot */}
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <Button className="w-full" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                    <p className="text-sm text-emerald-600 text-center">Thanks! I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                    <p className="text-sm text-red-600 text-center">{error}</p>
                )}

            </form>

        </section>
    )
}

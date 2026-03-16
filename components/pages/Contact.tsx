"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Send, User, CheckCircle2, AlertCircle, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"

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
            setTimeout(() => setStatus("idle"), 5000)
        } catch (err) {
            const e = err as Error
            setStatus("error")
            setError(e.message || "Something went wrong")
        }
    }

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            value: "harshsheladiya8@gmail.com",
            href: "mailto:harsh1sheladiya@gmail.com"
        },
        {
            icon: <Phone className="h-5 w-5" />,
            label: "Phone",
            value: "+91 97230 87097", // Placeholder, adjust as needed
            href: "tel:+918238123456"
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: "Location",
            value: "Ahmedabad, Gujarat, India",
            href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India"
        }
    ]

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/", label: "GitHub" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/", label: "LinkedIn" },
    ]

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Let&apos;s Connect
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1.5 bg-primary mx-auto rounded-full" 
                    />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border/50 hover:border-primary/40 hover:bg-card/60 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                {info.label}
                                            </p>
                                            <p className="text-foreground font-medium">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-4 rounded-xl bg-card/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <Card className="p-8 md:p-10 bg-card/40 backdrop-blur-md border border-border/50 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                                <Send className="h-32 w-32 -rotate-12" />
                            </div>

                            <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                                            <User className="h-4 w-4 text-primary" />
                                            Full Name
                                        </label>
                                        <Input 
                                            name="name" 
                                            placeholder="John Doe" 
                                            required 
                                            className="bg-background/50 border-border/50 focus:border-primary/50 transition-all h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-primary" />
                                            Email Address
                                        </label>
                                        <Input 
                                            name="email" 
                                            type="email" 
                                            placeholder="john@example.com" 
                                            required 
                                            className="bg-background/50 border-border/50 focus:border-primary/50 transition-all h-12"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4 text-primary" />
                                        Your Message
                                    </label>
                                    <Textarea 
                                        name="message" 
                                        placeholder="Tell me about your project..." 
                                        required 
                                        className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 transition-all resize-none"
                                    />
                                </div>

                                {/* Honeypot */}
                                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                                <Button 
                                    className="w-full h-12 text-base font-bold transition-all shadow-lg hover:shadow-primary/20 active:scale-[0.98]" 
                                    type="submit" 
                                    disabled={status === "loading" || status === "success"}
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center gap-2">
                                            <motion.div 
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                className="h-4 w-4 border-2 border-background border-t-transparent rounded-full"
                                            />
                                            Sending...
                                        </span>
                                    ) : status === "success" ? (
                                        <span className="flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5" />
                                            Message Sent!
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>

                                <AnimatePresence mode="wait">
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium"
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                            Thanks! Your message has been received successfully.
                                        </motion.div>
                                    )}
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Zap, Cpu } from "lucide-react"

export default function About() {
    const coreFocus = [
        {
            title: "Scalable Architecture",
            desc: "Designing robust systems that grow with your business needs.",
            icon: <Cpu className="h-6 w-6" />,
            color: "text-blue-500"
        },
        {
            title: "Performance First",
            desc: "Optimizing every line of code for lightning-fast user experiences.",
            icon: <Zap className="h-6 w-6" />,
            color: "text-yellow-500"
        },
        {
            title: "Clean & Secure",
            desc: "Writing maintainable, secure code following industry best practices.",
            icon: <ShieldCheck className="h-6 w-6" />,
            color: "text-emerald-500"
        }
    ]

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        About Me
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1.5 bg-primary mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Professional Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <Badge variant="outline" className="px-3 py-1 text-primary border-primary/20 bg-primary/5">
                                My Professional Journey
                            </Badge>
                            <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                                <span className="text-primary">Software Engineer</span> with a passion for building impactful solutions.
                            </h3>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
                                <p>
                                    I am a <span className="font-semibold text-foreground">Software Engineer with 1.5+ years of experience</span> in full-stack web development using the <span className="font-semibold text-primary">MERN stack</span> (MongoDB, Express.js, React, Node.js).
                                </p>
                                <p>
                                    Experienced in building scalable frontend applications using <span className="font-semibold text-foreground">React, TypeScript, and Redux</span>, and developing secure backend APIs with <span className="font-semibold text-foreground">Node.js and Express.js</span>.
                                </p>
                                <p>
                                    Skilled in REST API development, role-based systems, third-party integrations, and production deployment. Passionate about building efficient, scalable, and user-focused applications in fast-paced product environments.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Core Focus Grid */}
                    <div className="grid gap-6">
                        {coreFocus.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className={`p-3 rounded-xl bg-card border border-border shadow-sm ${item.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

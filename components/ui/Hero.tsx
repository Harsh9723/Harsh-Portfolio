"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {

    return (
        <section className="relative flex items-center justify-center min-h-[85vh] px-6 overflow-hidden">
            <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                {/* Left: Text */}
                <div className="md:col-span-7 text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <Badge variant="secondary" className="px-3 py-1">
                            Available for work
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                            MERN • React • Next.js
                        </Badge>
                    </div>
                    <motion.h1
                        className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Harsh</span>
                    </motion.h1>

                    <motion.div
                        className="mt-3 md:mt-5 text-lg md:text-2xl font-semibold text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <TypeAnimation
                            sequence={[
                                "React • Next.js • Node.js • MongoDB",
                                2500,
                                "MERN Stack Developer",
                                2000,
                                "Building Scalable Web Apps",
                                2000,
                                "Full Stack JavaScript Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </motion.div>

                    <motion.p
                        className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl md:max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I build scalable web applications using React, Next.js,
                        Node.js and MongoDB with modern UI and smooth animations.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <Link href="#projects">
                            <Button className="gap-2">
                                View Projects
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href="#contact">
                            <Button size="default" variant="outline" className="gap-2">
                                Contact Me
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/Harsh-Sheladiya-CV.pdf" target="_blank" rel="noopener noreferrer">
                            <Button size="default" variant="ghost" className="gap-2">
                                Resume
                                <Download className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Photo */}
                <motion.div className="md:col-span-5">
                    <motion.div
                        className="relative mx-auto md:mx-0"
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-foreground/30 to-muted-foreground/20 shadow-2xl">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card/70 border border-border">
                                <Image
                                    src="/profile.png"
                                    alt="Harsh portrait"
                                    fill
                                    sizes="(max-width: 768px) 240px, 320px"
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -inset-6 -z-10 blur-3xl opacity-30 bg-[radial-gradient(600px_200px_at_50%_100%,var(--color-chart-2),transparent)]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

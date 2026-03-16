import Link from "next/link"
import { Github, Linkedin, Mail, X } from "lucide-react"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-24 border-t border-border/50">
            <div className="relative h-px w-full bg-border/60 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-chart-2),var(--color-chart-4),var(--color-chart-3))] bg-[length:200%_100%] opacity-25 animate-[gradientSlide_16s_linear_infinite]" />
                <div className="absolute -top-1 left-0 right-0 h-2 bg-[linear-gradient(90deg,var(--color-chart-2),transparent,var(--color-chart-3))] opacity-10 blur-sm pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                            Harsh.dev
                        </div>

                        <p className="mt-3 text-sm text-muted-foreground max-w-sm">
                            Building fast, accessible web experiences with React, Next.js, and a modern stack.
                        </p>

                        <div className="mt-4 text-sm text-muted-foreground">
                            <a
                                className="hover:text-foreground"
                                href="mailto:harsh1sheladiya@gmail.com"
                            >
                                harsh1sheladiya@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-4">
                        <div className="text-sm font-semibold text-foreground">
                            Navigation
                        </div>

                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="text-muted-foreground hover:text-foreground">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-3">
                        <div className="text-sm font-semibold text-foreground">
                            Connect
                        </div>

                        <div className="mt-3 flex items-center gap-3">

                            <a
                                href="https://github.com/Harsh9723"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/harsh-sheladiya-a20456225/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>


                            <a
                                href="mailto:harsh1sheladiya@gmail.com"
                                className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/50 pt-6">
                    <p className="text-xs text-muted-foreground">
                        © {year} Harsh Sheladiya. All rights reserved.
                    </p>

                   
                </div>
            </div>
        </footer>
    )
}

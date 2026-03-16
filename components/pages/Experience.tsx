"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building2, MapPin } from "lucide-react"

const experiences = [
    {
        year: "July 2024 — March 2026",
        role: "MERN Stack Developer",
        company: "Dharvee Infotech",
        location: "Ahmedabad, India • On-site",
        desc: "Building and scaling modern web apps with React, Next.js, Node.js and MongoDB. Led UI modernization and performance efforts.",
        tech: ["React", "Node.js", "MongoDB", "TypeScript", "Context API", "Redux"],
    },
    {
        year: "Feb 2024 — July 2024",
        role: "MERN Stack Developer",
        company: "Raidlayer Webhost Private Limited",
        location: "Ahmedabad, India • On-site",
        desc: "Delivered responsive UI, animations and component libraries with strong accessibility and theme support.",
        tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    },
]

export default function Experience() {
    return (
        <section className="py-24 px-6">

            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
                Experience
            </h2>

            <div className="relative max-w-4xl mx-auto">
                <span className="pointer-events-none absolute left-1 top-0 bottom-0 w-px bg-border/60" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="relative pl-6 md:pl-8 mb-10"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="absolute left-0 top-1 size-2 rounded-full bg-primary ring-2 ring-background" />

                        <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-card/70 backdrop-blur border border-border p-5 shadow-sm">
                            <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{exp.role}</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{exp.year}</span>
                                </div>
                            </div>

                            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Building2 className="h-4 w-4" />
                                    <span>{exp.company}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{exp.location}</span>
                                </div>

                                <span className="sm:hidden">• {exp.year}</span>
                            </div>

                            <h3 className="mt-2 text-lg font-semibold text-foreground">
                                {exp.role}
                            </h3>
                            <p className="text-muted-foreground mt-1">
                                {exp.desc}
                            </p>
                            {Array.isArray(exp.tech) && exp.tech.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <Badge key={t} variant="outline">{t}</Badge>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

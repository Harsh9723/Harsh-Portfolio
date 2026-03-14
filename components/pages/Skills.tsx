"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "Express.js"
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">

            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-6 text-center text-base md:text-lg font-medium bg-card/70 backdrop-blur border border-border hover:border-primary/60 transition-transform hover:scale-105">
                            {skill}
                        </Card>
                    </motion.div>
                ))}

            </div>

        </section>
    )
}

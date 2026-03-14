"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">

            <h2 className="text-4xl font-bold text-center mb-16">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {projects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >

                        <Card className="p-6 hover:shadow-xl transition">

                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {project.description}
                            </p>

                            <Button size="sm" asChild>
                                <Link href={`/projects/${project.slug}`}>View Project</Link>
                            </Button>

                        </Card>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

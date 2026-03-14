"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { ArrowRight, Code2, Layout } from "lucide-react"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Featured Projects
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1.5 bg-primary mx-auto rounded-full"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.slug}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="h-full"
                        >
                            <Card className="flex flex-col h-full overflow-hidden bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all duration-500 group relative">
                                {/* Decorative Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            <Layout className="h-5 w-5" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 group-hover:text-primary/70 transition-colors">
                                            {project.year || "2024"}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.stack.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary/50 text-secondary-foreground border border-border/50">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.stack.length > 3 && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary/30 text-muted-foreground">
                                                +{project.stack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <Button
                                        size="sm"
                                        asChild
                                        variant="outline"
                                        className="w-full group/btn hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-300 py-6"
                                    >
                                        <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2 font-bold tracking-wide uppercase text-xs">
                                            View Project Details
                                            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

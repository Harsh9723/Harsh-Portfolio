"use client"

import { motion, Variants } from "framer-motion"    
import { Card } from "@/components/ui/card"
import { Code2, Server, Database, Settings2, ShieldCheck } from "lucide-react"

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 className="h-5 w-5" />,
        skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "Backend",
        icon: <Server className="h-5 w-5" />,
        skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
        title: "Database",
        icon: <Database className="h-5 w-5" />,
        skills: ["MongoDB", "PostgreSQL"]
    },
    {
        title: "State Management",
        icon: <ShieldCheck className="h-5 w-5" />,
        skills: ["Redux", "Redux Toolkit", "Context API"]
    },
    {
        title: "Tools & Others",
        icon: <Settings2 className="h-5 w-5" />,
        skills: ["GitHub", "PM2", "Socket.IO", "Postman"]
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-muted)_0%,transparent_70%)] opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Technical Skills
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="h-full"
                        >
                            <Card className="p-8 h-full bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md hover:shadow-primary/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-[360deg]">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill, idx) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + (idx * 0.05) }}
                                            whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                                            className="px-4 py-1.5 rounded-lg text-sm font-medium bg-secondary/30 text-secondary-foreground border border-border/40 hover:border-primary/50 transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

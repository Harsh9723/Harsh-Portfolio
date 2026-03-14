"use client"

import { motion } from "framer-motion"

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

            <motion.h2
                className="text-4xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-lg text-gray-600 text-center leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                I&apos;m Harsh, a MERN Stack Developer with 1.5 years of experience
                building scalable web applications. I specialize in React,
                Next.js, Node.js and MongoDB. I love building modern
                user interfaces with smooth animations and high performance.
            </motion.p>

        </section>
    )
}

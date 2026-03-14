"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiMongodb, SiNextdotjs, SiRedux, SiPostgresql, SiExpress, SiTailwindcss } from "react-icons/si"

export default function FloatingIcons() {

    const icons = [
        { Icon: FaReact, className: "top-10 left-10 text-blue-500" },
        { Icon: FaNodeJs, className: "top-20 right-24 text-green-500" },
        { Icon: SiMongodb, className: "bottom-32 left-24 text-green-700" },
        { Icon: SiNextdotjs, className: "bottom-20 right-20 text-black" },
        { Icon: SiRedux, className: "top-40 left-10 text-purple-500" },
        { Icon: SiPostgresql, className: "bottom-44 right-10 text-blue-700" },
        { Icon: SiExpress, className: "top-32 right-44 text-gray-800" },
        { Icon: SiTailwindcss, className: "top-6 left-1/2 text-sky-400" },
        { Icon: FaGithub, className: "bottom-10 left-1/2 text-black" }
    ]

    return (
        <div className="absolute inset-0 top-20 pointer-events-none">

            {icons.map(({ Icon, className }, i) => (
                <motion.div
                    key={i}
                    className={`absolute text-5xl opacity-80 ${className}`}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Icon />
                </motion.div>
            ))}

        </div>
    )
}
"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron, Html } from "@react-three/drei"
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiJavascript,
    SiFramer,
    SiGithub,
    SiSocketdotio,
    SiPostman,
    SiMui
} from "react-icons/si"

interface TechObjectProps {
    type: string
    index: number
    isDark: boolean
}

function TechObject({ type, index, isDark }: TechObjectProps) {
    // Determine shape, color, and icon based on tech type
    const getProps = () => {
        const lowerType = type.toLowerCase()
        const brandColor = (color: string) => isDark ? color : color // Adjust if needed, but usually brand colors are okay

        if (lowerType.includes("react")) return { color: "#61dafb", shape: "torus", speed: 2, icon: <SiReact /> }
        if (lowerType.includes("next")) return { color: isDark ? "#ffffff" : "#000000", shape: "sphere", speed: 2.1, icon: <SiNextdotjs /> }
        if (lowerType.includes("typescript")) return { color: "#3178c6", shape: "icosahedron", speed: 2.2, icon: <SiTypescript /> }
        if (lowerType.includes("tailwind")) return { color: "#38bdf8", shape: "torus", speed: 1.6, icon: <SiTailwindcss /> }
        if (lowerType.includes("node")) return { color: "#68a063", shape: "sphere", speed: 1.5, icon: <SiNodedotjs /> }
        if (lowerType.includes("express")) return { color: isDark ? "#ffffff" : "#000000", shape: "octahedron", speed: 1.7, icon: <SiExpress /> }
        if (lowerType.includes("mongo")) return { color: "#47a248", shape: "octahedron", speed: 1.8, icon: <SiMongodb /> }
        if (lowerType.includes("postgres")) return { color: "#336791", shape: "sphere", speed: 1.9, icon: <SiPostgresql /> }
        if (lowerType.includes("redux")) return { color: "#764abc", shape: "icosahedron", speed: 2.3, icon: <SiRedux /> }
        if (lowerType.includes("javascript") || lowerType === "js") return { color: "#f7df1e", shape: "sphere", speed: 1.5, icon: <SiJavascript /> }
        if (lowerType.includes("framer")) return { color: "#0055ff", shape: "torus", speed: 2.4, icon: <SiFramer /> }
        if (lowerType.includes("github")) return { color: isDark ? "#ffffff" : "#000000", shape: "sphere", speed: 1.4, icon: <SiGithub /> }
        if (lowerType.includes("socket")) return { color: isDark ? "#ffffff" : "#000000", shape: "octahedron", speed: 1.6, icon: <SiSocketdotio /> }
        if (lowerType.includes("postman")) return { color: "#ff6c37", shape: "sphere", speed: 1.8, icon: <SiPostman /> }
        if (lowerType.includes("material ui")) return { color: "#0073E6", shape: "sphere", speed: 1.8, icon: <SiMui /> }

        return { color: isDark ? "#8b5cf6" : "#6d28d9", shape: "sphere", speed: 1.5, icon: null }
    }

    const { color, shape, speed, icon } = getProps()

    // Spread objects across the full screen background
    const position: [number, number, number] = [
        (index % 2 === 0 ? 1 : -1) * (4 + Math.random() * 4),
        (index - 2) * 3,
        -5 - Math.random() * 5
    ]

    return (
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
            {shape === "torus" && (
                <Torus args={[1, 0.2, 16, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={isDark ? 0.6 : 0.4} />
                </Torus>
            )}
            {shape === "sphere" && (
                <Sphere args={[1, 32, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.4} transparent opacity={isDark ? 0.6 : 0.4} />
                </Sphere>
            )}
            {shape === "octahedron" && (
                <Octahedron args={[1.2]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.2} transparent opacity={isDark ? 0.6 : 0.4} />
                </Octahedron>
            )}
            {shape === "icosahedron" && (
                <Icosahedron args={[1.2]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={isDark ? 0.6 : 0.4} />
                </Icosahedron>
            )}

            {/* Overlay Icon */}
            {icon && (
                <Html
                    position={position}
                    center
                    distanceFactor={10}
                    className="pointer-events-none select-none"
                >
                    <div
                        className={`text-4xl sm:text-5xl lg:text-6xl transition-all duration-500 hover:scale-125 ${isDark ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] opacity-90"}`}
                        style={{ color }}
                    >
                        {icon}
                    </div>
                </Html>
            )}
        </Float>
    )
}

export default function ProjectTech3D({ stack }: { stack: string[] }) {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // Track the "dark" class on the html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDark(document.documentElement.classList.contains("dark"))
                }
            })
        })

        observer.observe(document.documentElement, { attributes: true })
        setIsDark(document.documentElement.classList.contains("dark"))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={isDark ? 0.4 : 0.7} />
                <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 1.5} />
                <spotLight position={[-10, -10, 10]} angle={0.15} penumbra={1} intensity={isDark ? 0.5 : 0.8} />

                {/* Render more objects for background coverage */}
                {stack.map((tech, idx) => (
                    <TechObject key={`${tech}-${idx}`} type={tech} index={idx} isDark={isDark} />
                ))}

                {/* Depth fog to blend with background */}
                <fog attach="fog" args={[isDark ? "#0f172a" : "#ffffff", 15, 35]} />
            </Canvas>
        </div>
    )
}

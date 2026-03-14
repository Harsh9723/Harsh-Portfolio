"use client"

import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron } from "@react-three/drei"

interface TechObjectProps {
    type: string
    index: number
}

function TechObject({ type, index }: TechObjectProps) {
    // Determine shape and color based on tech type
    const getProps = () => {
        const lowerType = type.toLowerCase()
        if (lowerType.includes("react") || lowerType.includes("next")) {
            return { color: "#61dafb", shape: "torus", speed: 2 }
        }
        if (lowerType.includes("node") || lowerType.includes("express")) {
            return { color: "#68a063", shape: "sphere", speed: 1.5 }
        }
        if (lowerType.includes("mongo") || lowerType.includes("sql")) {
            return { color: "#47a248", shape: "octahedron", speed: 1.8 }
        }
        if (lowerType.includes("typescript") || lowerType.includes("js")) {
            return { color: "#3178c6", shape: "icosahedron", speed: 2.2 }
        }
        if (lowerType.includes("tailwind") || lowerType.includes("css")) {
            return { color: "#38bdf8", shape: "torus", speed: 1.6 }
        }
        return { color: "#8b5cf6", shape: "sphere", speed: 1.5 }
    }

    const { color, shape, speed } = getProps()

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
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={0.6} />
                </Torus>
            )}
            {shape === "sphere" && (
                <Sphere args={[1, 32, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.4} transparent opacity={0.6} />
                </Sphere>
            )}
            {shape === "octahedron" && (
                <Octahedron args={[1.2]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.2} transparent opacity={0.6} />
                </Octahedron>
            )}
            {shape === "icosahedron" && (
                <Icosahedron args={[1.2]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={0.6} />
                </Icosahedron>
            )}
        </Float>
    )
}

export default function ProjectTech3D({ stack }: { stack: string[] }) {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, 10]} angle={0.15} penumbra={1} intensity={0.5} />

                {/* Render more objects for background coverage */}
                {stack.map((tech, idx) => (
                    <TechObject key={`${tech}-${idx}`} type={tech} index={idx} />
                ))}

                {/* Depth fog to blend with background */}
                <fog attach="fog" args={["#0f172a", 15, 35]} />
            </Canvas>
        </div>
    )
}

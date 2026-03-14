"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Icosahedron, Torus } from "@react-three/drei"

export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.35} />
                <directionalLight position={[4, 6, 8]} intensity={0.6} />
                <directionalLight position={[-6, -4, 5]} intensity={0.2} />
                
                {/* Depth fog to blend with gradient */}
                <fog attach="fog" args={["#0f172a", 22, 38]} />

                {/* Left floating crystal */}
                <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
                    <Icosahedron args={[2, 0]} position={[-4, 1, -8]}>
                        <meshStandardMaterial
                            color={"#60a5fa"}
                            metalness={0.4}
                            roughness={0.2}
                            emissive={"#1e3a8a"}
                            emissiveIntensity={0.15}
                            transparent
                            opacity={0.4}
                        />
                    </Icosahedron>
                </Float>

                {/* Right torus accent */}
                <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1}>
                    <Torus args={[1.6, 0.35, 32, 100]} position={[5, -2, -10]} rotation={[0.6, 0.2, 0]}>
                        <meshStandardMaterial
                            color={"#a78bfa"}
                            metalness={0.6}
                            roughness={0.25}
                            emissive={"#4c1d95"}
                            emissiveIntensity={0.12}
                            transparent
                            opacity={0.35}
                        />
                    </Torus>
                </Float>

                {/* Center back crystal */}
                <Float speed={1.2} rotationIntensity={0.9} floatIntensity={1.1}>
                    <Icosahedron args={[1.2, 0]} position={[0, -1, -14]}>
                        <meshStandardMaterial
                            color={"#22d3ee"}
                            metalness={0.5}
                            roughness={0.3}
                            emissive={"#0e7490"}
                            emissiveIntensity={0.1}
                            transparent
                            opacity={0.3}
                        />
                    </Icosahedron>
                </Float>
            </Canvas>
        </div>
    )
}

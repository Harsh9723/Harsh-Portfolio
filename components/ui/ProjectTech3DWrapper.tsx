"use client"

import dynamic from "next/dynamic"

// Move the dynamic import to a Client Component as per Next.js requirements
const ProjectTech3D = dynamic(() => import("./ProjectTech3D"), { 
    ssr: false,
    loading: () => <div className="w-full h-[300px] md:h-[400px] animate-pulse bg-muted/20 rounded-3xl" />
})

export default function ProjectTech3DWrapper({ stack }: { stack: string[] }) {
    return <ProjectTech3D stack={stack} />
}

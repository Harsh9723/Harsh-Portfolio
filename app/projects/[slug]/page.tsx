import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Code2, Info } from "lucide-react"
import ProjectTech3DWrapper from "@/components/ui/ProjectTech3DWrapper"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) notFound()

    return (
        <div className="px-6 py-12 md:py-24 min-h-screen relative overflow-hidden">
            {/* Background Tech Stack Visualizer */}
            <ProjectTech3DWrapper stack={project.stack} />

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="mx-auto max-w-4xl space-y-12 relative z-10">
                {/* Header Section */}
                <div className="space-y-6">
                    <Button variant="ghost" size="sm" asChild className="hover:bg-accent -ml-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Link href="/#projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                    </Button>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {project.year && (
                                <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1.5">
                                    <Calendar className="h-3 w-3" />
                                    {project.year}
                                </Badge>
                            )}
                            <div className="flex flex-wrap gap-2">
                                {project.stack.slice(0, 3).map((t) => (
                                    <Badge key={t} variant="outline" className="px-2.5 py-0.5 text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-6">
                            {project.links?.demo && project.links.demo !== "#" && (
                                <Button asChild className="shadow-xl shadow-primary/20 h-14 px-10 text-lg">
                                    <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                        <ExternalLink className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                            {project.links?.source && project.links.source !== "#" && (
                                <Button variant="outline" asChild className="h-14 px-10 text-lg">
                                    <Link href={project.links.source} target="_blank" rel="noopener noreferrer">
                                        Source Code
                                        <Github className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-12 pt-12">
                    {/* Left Column: Detailed Overview */}
                    <div className="md:col-span-3 space-y-8">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-foreground font-bold text-2xl border-b border-border/50 pb-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Info className="h-6 w-6" />
                                </div>
                                <h2>Project Overview</h2>
                            </div>
                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg bg-card/20 backdrop-blur-md p-8 rounded-3xl border border-border/30">
                                {project.long ?? project.description}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Key Highlights & Tech */}
                    <div className="md:col-span-2 space-y-12">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-foreground font-bold text-2xl border-b border-border/50 pb-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Layers className="h-6 w-6" />
                                </div>
                                <h2>Key Highlights</h2>
                            </div>
                            <ul className="space-y-6">
                                {(project.highlights ?? []).map((h) => (
                                    <li key={h} className="flex items-start gap-4 group">
                                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0 transition-transform group-hover:scale-150 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                                        <span className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors">
                                            {h}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-foreground font-bold text-2xl border-b border-border/50 pb-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Code2 className="h-6 w-6" />
                                </div>
                                <h2>Technologies Used</h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-secondary/40 backdrop-blur-md text-secondary-foreground px-5 py-2.5 rounded-2xl text-sm font-bold border border-border/50 hover:border-primary/50 hover:bg-secondary/60 transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

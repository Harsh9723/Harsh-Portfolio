import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug)
    if (!project) notFound()
    return (
        <div className="px-6 py-10 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8">
                <div className="flex items-center justify-between gap-4">
                    <Button variant="outline" asChild>
                        <Link href="/#projects">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                    {project.year && (
                        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{project.year}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        {project.title}
                    </h1>
                    <p className="text-muted-foreground max-w-3xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                            <Badge key={t} variant="outline">
                                {t}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {project.links?.demo && (
                            <Button asChild>
                                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                    Live
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                        {project.links?.source && (
                            <Button variant="outline" asChild>
                                <Link href={project.links.source} target="_blank" rel="noopener noreferrer">
                                    Source
                                    <Github className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                {project.images && project.images.length > 0 && (
                    <div className="rounded-2xl border border-border bg-card/70 p-1 shadow-md">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 rounded-xl border border-border bg-card/70 p-5">
                        <h2 className="text-lg font-semibold text-foreground">Overview</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {project.long ?? project.description}
                        </p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/70 p-5">
                        <h2 className="text-lg font-semibold text-foreground">Highlights</h2>
                        <ul className="mt-2 space-y-2">
                            {(project.highlights ?? []).map((h) => (
                                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Layers className="mt-0.5 h-4 w-4 text-foreground/70" />
                                    <span>{h}</span>
                                </li>
                            ))}
                            {(!project.highlights || project.highlights.length === 0) && (
                                <li className="text-sm text-muted-foreground">Details coming soon.</li>
                            )}
                        </ul>
                    </div>
                </div>

                {project.images && project.images.length > 1 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.images.slice(1).map((img) => (
                            <div key={img} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
                                <Image src={img} alt={project.title} fill className="object-cover" sizes="50vw" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}


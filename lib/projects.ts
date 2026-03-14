export type Project = {
  slug: string
  title: string
  description: string
  long?: string
  year?: string
  stack: string[]
  links?: { demo?: string; source?: string }
  images?: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "device-library-tree-system",
    title: "Device Library Tree System",
    description:
      "Dynamic tree with API loading, drag & drop shapes and Office.js integration.",
    long:
      "Built an interactive device library with hierarchical navigation, lazy-loaded nodes, and shape manipulation. Integrated with Office.js to sync selections with Excel, enabling end-to-end workflows.",
    year: "2024",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Office.js"],
    links: { demo: "#", source: "#" },
    images: ["/projects/device-library-1.png", "/projects/device-library-2.png"],
    highlights: [
      "Lazy data loading and virtualization",
      "Drag & drop with snap-to-grid",
      "Excel integration via Office.js",
    ],
  },
  {
    slug: "gift-dashboard",
    title: "Gift Dashboard",
    description:
      "Data-rich dashboard with filtering, pagination and unified APIs for gift management.",
    long:
      "Delivered a performant dashboard with advanced filtering, server pagination, and role-driven access. Consolidated disparate APIs into a single typed gateway.",
    year: "2023",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    links: { demo: "#", source: "#" },
    images: ["/projects/gift-1.png", "/projects/gift-2.png"],
    highlights: ["Server pagination", "RBAC", "Unified API layer"],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built using Next.js, Tailwind and Framer Motion.",
    long:
      "A theme-aware, animated portfolio with dynamic sections, contact integrations, and optimized assets. Focused on accessibility and performance.",
    year: "2026",
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    links: { demo: "/", source: "#" },
    images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
    highlights: ["Dark/light theming", "Framer Motion", "Contact integrations"],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}


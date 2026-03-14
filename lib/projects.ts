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
    slug: "netzoom-dcim-platform",
    title: "NetZoom (DCIM Platform)",
    description:
      "Enterprise DCIM application to virtually manage and visualize data center devices for multiple companies.",
    long:
      "Enterprise DCIM application designed to virtually manage and visualize data center devices for multiple companies, providing a comprehensive view of infrastructure and assets.",
    year: "2025",
    stack: ["React", "TypeScript", "Context API"],
    links: { demo: "#", source: "#" },
    images: ["/projects/device-library-1.png", "/projects/device-library-2.png"],
    highlights: [
      "Enterprise DCIM application to virtually manage and visualize data center devices for multiple companies",
      "Developed a Microsoft Office Add-in to visualize devices and their properties directly within Office applications",
    ],
  },
  {
    slug: "comtech-gold",
    title: "Comtech Gold",
    description:
      "Gold trading platform supporting buy, sell, and SIP management.",
    long:
      "A comprehensive gold trading platform that supports various transactions including buying, selling, and Systematic Investment Plan (SIP) management for gold assets.",
    year: "2026",
    stack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    links: { demo: "#", source: "#" },
    images: ["/projects/gift-1.png", "/projects/gift-2.png"],
    highlights: [
      "Gold trading platform supporting buy, sell, and SIP management",
      "Integrated external payment gateway (UrbanLedger)",
    ],
  },
  {
    slug: "nilkanth-attendance-management-system",
    title: "Nilkanth Attendance Management System",
    description:
      "Role-based attendance system with Super Admin, Admin, Manager, and Employee access.",
    long:
      "A robust attendance management system featuring multi-level role-based access control and advanced tracking features to streamline workforce management.",
    year: "2025",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    links: { demo: "#", source: "#" },
    images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
    highlights: [
      "Role-based attendance system with Super Admin, Admin, Manager, and Employee access",
      "Implemented geo-location based attendance to restrict punch-in/out within assigned work areas",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

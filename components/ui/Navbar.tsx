"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [elevated, setElevated] = useState(false)
    const [lastY, setLastY] = useState(0)

    useMotionValueEvent(scrollY, "change", (y) => {
        const current = y ?? 0
        setElevated(current > 8)
        setHidden(current > lastY && current > 80)
        setLastY(current)
    })

    return (
        <motion.nav
            initial={{ y: -72, opacity: 0 }}
            animate={{ y: hidden ? -72 : 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={cn(
                "fixed top-0 w-full z-50 border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50",
                elevated ? "border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]" : "border-transparent"
            )}
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                {/* Logo */}
                <Link href="#" className="select-none">
                    <span className={cn(
                        "text-lg sm:text-xl font-extrabold tracking-tight",
                        "bg-gradient-to-r from-primary via-foreground to-muted-foreground bg-clip-text text-transparent"
                    )}>
                        Harsh.dev
                    </span>
                </Link>

                {/* Navigation Menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-2 md:gap-4">

                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name}>

                                <NavigationMenuLink asChild className="rounded-md">
                                    <Link
                                        href={item.href}
                                        className="relative px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:scale-x-0 after:bg-gradient-to-r after:from-primary after:to-foreground after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100"
                                    >
                                        {item.name}
                                    </Link>
                                </NavigationMenuLink>

                            </NavigationMenuItem>
                        ))}

                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="icon" variant="ghost" aria-label="Open menu">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="px-4 py-2 space-y-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-foreground/80 hover:bg-muted hover:text-foreground transition"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <SheetFooter>
                                    <div className="flex items-center gap-2">
                                        <ThemeToggle />
                                        <Button variant="outline" asChild>
                                            <Link href="/Harsh-Sheladiya-CV.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
                                        </Button>
                                    </div>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:inline-flex">
                        <ThemeToggle />
                    </div>
                    {/* Resume Button */}
                    <Button size="sm" variant="outline" className="hidden sm:inline-flex" asChild>
                        <Link href="/Harsh-Sheladiya-CV.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
                    </Button>
                </div>

            </div>
            <motion.div
                className="h-[2px] w-full origin-left bg-[linear-gradient(90deg,var(--color-chart-2),var(--color-chart-4),var(--color-chart-3))] bg-[length:200%_100%] animate-[gradientSlide_12s_linear_infinite]"
                style={{ scaleX: 0.0 }}
                aria-hidden
            />

        </motion.nav>
    )
}

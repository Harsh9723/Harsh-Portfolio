"use client"

import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {

    const getInitial = () => {
        if (typeof window === "undefined") return false
        const stored = localStorage.getItem("theme")
        if (stored) return stored === "dark"
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    const [dark, setDark] = useState(getInitial)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", dark ? "dark" : "light")
        }
    }, [dark])

    return (

        <Button
            onClick={() => setDark((d) => !d)}
            size="icon"
            variant="ghost"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="relative"
        >

            <SunIcon className={`h-5 w-5 transition-all ${dark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 absolute"}`} />
            <MoonIcon className={`h-5 w-5 transition-all ${dark ? "opacity-0 rotate-90 absolute" : "opacity-100 rotate-0"}`} />

        </Button>

    )

}

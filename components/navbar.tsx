"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">PK</span>
          <div className="flex items-center gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
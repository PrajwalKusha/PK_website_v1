"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Link from "next/link"

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
    } ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <HoverBorderGradient
            as="button"
            onClick={() => scrollToSection("top")}
            containerClassName="rounded-full"
            className="dark:bg-black bg-white text-black dark:text-white font-bold font-mono text-lg px-4 py-1"
            duration={1.5}
          >
            PK
          </HoverBorderGradient>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
            <Link
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Prajwal_Kusha_Resume.pdf"
              className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Resume <Download className="h-3 w-3" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Button variant="ghost" onClick={() => scrollToSection("about")}>
                About
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("skills")}>
                Skills
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("projects")}>
                Projects
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
              <Link
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Prajwal_Kusha_Resume.pdf"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Resume <Download className="h-3 w-3" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
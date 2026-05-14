"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Experience",   href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education",    href: "#education" },
  { name: "Contact",      href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled]             = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection]       = useState<string>("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll-position based tracking — finds whichever section top is closest
  // to (but not past) 30% down the viewport. Much more reliable than
  // IntersectionObserver for pages where sections vary in height.
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""))

    const onScroll = () => {
      const scrollY = window.scrollY
      const trigger = scrollY + window.innerHeight * 0.3 // 30% from top

      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= trigger) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold gradient-text shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          SZ
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = activeSection === id
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors relative group whitespace-nowrap ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block shrink-0">
          <Button asChild size="sm" className="glow-purple">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile/tablet Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass"
          >
            <ul className="max-w-7xl mx-auto px-8 md:px-12 py-4 flex flex-col gap-4">
              {navItems.map((item) => {
                const id = item.href.replace("#", "")
                const isActive = activeSection === id
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`block py-2 transition-colors ${
                        isActive
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              })}
              <li>
                <Button asChild size="sm" className="w-full">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
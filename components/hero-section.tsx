"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "UI/UX Designer",
  "NLP Enthusiast",
  "Team Leader",
]

// ─── Particle Network (covers the entire page, rendered once globally) ────────
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Brand colors
    const BLUE   = "#0089E9"
    const PURPLE = "#783FF5"

    let animId: number
    let particles: {
      x: number; y: number
      vx: number; vy: number
      color: string; r: number
      opacity: number
    }[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 14000)
      particles = Array.from({ length: Math.max(count, 60) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: Math.random() > 0.48 ? BLUE : PURPLE,
        r: 1.8 + Math.random() * 1.8,
        // ↑ Increased base opacity so dots are clearly visible on white
        opacity: 0.65 + Math.random() * 0.35,
      }))
    }

    const MAX_DIST = 130

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            // ↑ Alpha raised from 0.18 → 0.55 so lines show clearly on white
            const alpha = (1 - dist / MAX_DIST) * 0.55
            const grad  = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            grad.addColorStop(0, particles[i].color + toHex(alpha))
            grad.addColorStop(1, particles[j].color + toHex(alpha))
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = grad
            // ↑ Line width raised from 0.7 → 1.2 for better visibility
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + toHex(p.opacity)
        ctx.fill()

        // Soft glow ring — slightly more visible on white
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = p.color + toHex(p.opacity * 0.18)
        ctx.fill()

        // Move
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  )
}

// Convert 0–1 float to 2-char hex for color alpha
function toHex(alpha: number) {
  return Math.round(Math.max(0, Math.min(1, alpha)) * 255)
    .toString(16)
    .padStart(2, "0")
}
// ─────────────────────────────────────────────────────────────────────────────

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <>
      {/* Global particle canvas — fixed, covers every section */}
      <ParticleNetwork />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground mb-4 text-sm tracking-widest uppercase"
            >
              
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              {"Hi, I'm "}
              <span className="gradient-text">Sonam Zangmo</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 h-8"
            >
              <span style={{ color: "#783FF5", fontWeight: 600 }}>{displayText}</span>
              <span className="animate-pulse" style={{ color: "#0089E9" }}>|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Building intelligent systems, modern web applications, and seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="gap-2 text-white font-semibold shadow-md"
                asChild
                style={{
                  background: "linear-gradient(135deg, #783FF5, #0089E9)",
                  border: "none",
                }}
              >
                {/* 
                  Make sure your file is named 'cv.pdf' 
                  and is inside the 'public' folder.
                */}
                <a href="/Sonam_Zangmo_CV.pdf" download="Sonam_Zangmo_CV.pdf">
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                style={{
                  borderColor: "#783FF5",
                  color: "#783FF5",
                }}
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-6"
            >
              {[
                {
                  href: "https://github.com/Somo203",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/sonam-zangmo",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:zangmo2003s@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="transition-all duration-200"
                  style={{ color: "#888" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#783FF5")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#888")
                  }
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ color: "#0089E9" }}
            >
              <ArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
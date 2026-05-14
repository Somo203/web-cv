"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Experience",   href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education",    href: "#education" },
  { name: "Contact",      href: "#contact" },
]

const socialLinks = [
  { icon: Github,   href: "https://github.com/sonamzangmo",       label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sonam-zangmo", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:zangmo2003s@gmail.com",          label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand + Quote */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Sonam Zangmo</div>

            {/* Quote block */}
            <div className="relative pl-4">
              {/* Accent bar */}
              <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-primary to-accent" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Building with purpose — every line of code is a step toward something meaningful."
              </p>
              <p className="text-xs text-primary mt-2 font-medium">— Sonam Zangmo</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group inline-flex items-center gap-1"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Get in Touch</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
         
          <p className="text-xs text-muted-foreground">
            © {currentYear} Sonam Zangmo. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
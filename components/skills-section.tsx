"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Layout,
  Server,
  Database,
  BarChart3,
  Cloud,
  Palette,
} from "lucide-react"

/* ─── Devicon helper ─────────────────────────────────────────────────── */
// Hardcoded fallbacks for icons with non-standard devicon paths
const ICON_OVERRIDES: Record<string, string> = {
  amazonwebservices:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
}

function DevIcon({
  name,
  variant = "original",
  className = "w-5 h-5",
}: {
  name: string
  variant?: string
  className?: string
}) {
  const override = ICON_OVERRIDES[name]
  const base = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`
  const primary   = `${base}/${name}-${variant}.svg`
  const fallback1 = `${base}/${name}-plain.svg`
  const fallback2 = `${base}/${name}-wordmark.svg`

  return (
    <img
      src={override ?? primary}
      alt={name}
      className={className}
      onError={(e) => {
        const t = e.currentTarget
        if (override) return // already using the best known URL
        if (t.src === primary)   { t.src = fallback1; return }
        if (t.src === fallback1) { t.src = fallback2; return }
      }}
    />
  )
}

function ringColors(level: number): { start: string; end: string } {
  if (level >= 90) return { start: "#783FF5", end: "#0089E9" }
  if (level >= 80) return { start: "#0089E9", end: "#06b6d4" }
  if (level >= 70) return { start: "#06b6d4", end: "#14b8a6" }
  return { start: "#a78bfa", end: "#818cf8" }
}

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning",   level: 85, devicon: "python",     variant: "original" },
      { name: "Deep Learning",      level: 80, devicon: "pytorch",    variant: "original" },
      { name: "NLP",                level: 85, devicon: "tensorflow", variant: "original" },
      { name: "Data Preprocessing", level: 90, devicon: "pandas",     variant: "original" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React.js",     level: 90, devicon: "react",        variant: "original" },
      { name: "Vue.js",       level: 85, devicon: "vuejs",        variant: "original" },
      { name: "Tailwind CSS", level: 92, devicon: "tailwindcss",  variant: "original"    },
      { name: "HTML/CSS",     level: 95, devicon: "html5",        variant: "original" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85, devicon: "nodejs", variant: "original" },
      { name: "Flask",   level: 80, devicon: "flask",  variant: "original" },
      { name: "Go",      level: 70, devicon: "go",     variant: "original" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 88, devicon: "mongodb", variant: "original" },
      { name: "MySQL",   level: 85, devicon: "mysql",   variant: "original" },
    ],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    skills: [
      { name: "Data Cleaning",      level: 90, devicon: "python",  variant: "original" },
      { name: "EDA",                level: 85, devicon: "jupyter", variant: "original" },
      { name: "Data Visualization", level: 88, devicon: "plotly",  variant: "original" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    skills: [
      { name: "Git/GitHub", level: 90, devicon: "github",   variant: "original" },
      { name: "Linux",      level: 80, devicon: "linux",    variant: "plain"    },
      { name: "AWS",        level: 75, devicon: "amazonwebservices", variant: "wordmark" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 85, devicon: "figma", variant: "original" },
      { name: "Canva", level: 90, devicon: "canva", variant: "original" },
    ],
  },
]

const softSkills = [
  { name: "Project Management", level: 95 },
  { name: "Problem-solving",    level: 85 },
  { name: "Critical Thinking",  level: 85 },
  { name: "Teamwork",           level: 95 },
  { name: "Communication",      level: 88 },
  { name: "Adaptability",       level: 93 },
  { name: "Leadership",         level: 90 },
]

const RADIUS = 36
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function SoftSkillRing({
  skill,
  delay,
}: {
  skill: (typeof softSkills)[0]
  delay: number
}) {
  const offset = CIRCUMFERENCE * (1 - skill.level / 100)
  const gradId = `grad-${skill.name.replace(/[\s-]/g, "")}`
  const { start, end } = ringColors(skill.level)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3 group"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   style={{ stopColor: start }} />
              <stop offset="100%" style={{ stopColor: end }} />
            </linearGradient>
          </defs>
          <circle cx="44" cy="44" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="6" className="text-muted/30" />
          <motion.circle
            cx="44" cy="44" r={RADIUS}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-sm font-bold text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.6 }}
            viewport={{ once: true }}
          >
            {skill.level}%
          </motion.span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and design
          </p>
        </motion.div>

        {/* Technical skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 flex-shrink-0">
                          <DevIcon name={skill.devicon} variant={skill.variant} className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold mb-10 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {softSkills.map((skill, i) => (
              <SoftSkillRing key={skill.name} skill={skill} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
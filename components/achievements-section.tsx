"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Medal, X, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const certifications = [
  {
    title: "Google UX Design Certificate",
    issuer: "Google (Coursera)",
    date: "October 2026",
    description:
      "Comprehensive training in user research, wireframing, prototyping, and building dynamic interfaces following the full UX design process.",
    icon: Award,
    color: "primary",
    image: "/ui.jpeg",
    courses: [
      "Foundations of User Experience (UX) Design",
      "Build Wireframes and Low-Fidelity Prototypes",
      "Create High-Fidelity Designs in Figma",
    ],
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google (Coursera)",
    date: "2026",
    description:
      "Skills in data cleaning, analysis, visualization, and statistical analysis using spreadsheets, SQL, and R.",
    icon: Award,
    color: "accent",
    image: "/data_analysis.png",
    courses: [
      "Foundations: Data, Data, Everywhere",
      "Process Data from Dirty to Clean",
      "Share Data Through Visualization",
    ],
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "October 2024",
    description:
      "Cloud computing fundamentals, AWS core services, and best practices for deploying cloud-based applications.",
    icon: Award,
    color: "primary",
    image: "/aws.jpeg",
    courses: [],
  },
]

const competitions = [
  {
    title: "Top 3 Team",
    event: "National Startup Weekend 2025",
    issuer: "Department of Employment & Entrepreneurship, MoICE / Supported by Government of India",
    date: "2025",
    description: "3-day national startup competition. Achieved top 3 position among all competing teams.",
    icon: Trophy,
    color: "accent",
    image: "/startup-weekend.jpeg",
  },
  {
    title: "Finalist",
    event: "Dragon's Lair Start-Pitching",
    issuer: "DevForge, Gyalpozhing College of Information Technology",
    date: "November 2024",
    description: "Selected as finalist in the college startup pitching competition.",
    icon: Medal,
    color: "primary",
    image: "/dragons-lair.jpeg",
  },
  {
    title: "Participant",
    event: "Women's Hackathon",
    issuer: "Department of Employment & Entrepreneurship (DoEE), MoICE in collaboration with UNDP Bhutan",
    date: "April 2026",
    description: "3-day hackathon focused on women in tech and entrepreneurship.",
    icon: Award,
    color: "accent",
    image: "/womens-hackathon.jpeg",
  },
]

const workshops = [
  {
    title: "Women's Hackathon 2026",
    organizer: "DoEE, MoICE & UNDP Bhutan",
    date: "April 2026",
    image: "/team.jpeg",
    description:
      "Participated in a 3-day women-focused hackathon with hands-on sessions on Design Thinking, Lean Model Canvas, and the Art of Pitching. Built SkillHub Bhutan — a platform connecting children with trusted local women mentors, featuring real-time parent alerts and a gamified badge system.",
    highlights: [
      "Design Thinking & Lean Model Canvas sessions",
      "Art of Pitching workshop",
      "Built SkillHub Bhutan as team project",
      "Mentorship from industry experts",
    ],
  },
  {
    title: "National Startup Weekend 2025",
    organizer: "DoEE, MoICE / Government of India",
    date: "2025",
    image: "/nactional.jpeg",
    description:
      "3-day national startup competition where our team placed Top 3. Developed Zhidhay — a rental property management platform with online rent payments, automated reminders, e-lease agreements, and financial dashboards.",
    highlights: [
      "Top 3 finish out of all competing teams",
      "Built Zhidhay rental management platform",
      "Rapid prototyping & product development",
      "Innovation, teamwork & pitching experience",
    ],
  },
  {
    title: "TEDxThimphu 2025",
    organizer: "TEDx",
    date: "March 20, 2025",
    image: "tedx.jpeg",
    description:
      "Attended the first TEDxThimphu in a decade, featuring 11 global speakers on compassion, courage, and self-worth under the theme Gross Global Inspiration.",
    highlights: [
      "11 inspiring global speakers",
      "Theme: Gross Global Inspiration",
      "First TEDxThimphu edition in a decade",
      "Insights on compassion & human connection",
    ],
  },
  {
    title: "Vue.js & Pinia Workshop",
    organizer: "DrukSmart Pvt. Ltd.",
    date: "December 2023",
    image: "v.jpg",
    description:
      "Hands-on training in component-based frontend development using Vue.js and Pinia state management, applied directly to the Pema Secretariat project in an Agile team environment.",
    highlights: [
      "Component-based UI with Vue.js",
      "Pinia state management in practice",
      "Agile workflow & team collaboration",
      "Real-world project: Pema Secretariat",
    ],
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
  const [selectedComp, setSelectedComp] = useState<typeof competitions[0] | null>(null)

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and recognition for excellence
          </p>
        </motion.div>

        {/* Counter stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          {[
            { label: "Certifications", value: "3+" },
            { label: "Hackathons",     value: "2+" },
            { label: "Workshops",      value: "6+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 text-center border border-border/50 transition-all duration-300 hover:border-[#783FF5] hover:shadow-[0_0_20px_rgba(120,63,245,0.25)] hover:outline hover:outline-1 hover:outline-[#783FF5]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group border border-border/50 hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <cert.icon
                      className={`w-6 h-6 ${
                        cert.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <Badge variant="secondary">{cert.date}</Badge>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                {cert.courses.length > 0 && (
                  <div className="space-y-1 mb-4">
                    {cert.courses.map((course, i) => (
                      <p key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {course}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-border/40">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competitions & Recognition */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Competitions & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={comp.title + comp.event}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl border border-border/50 hover:border-primary/50 transition-colors overflow-hidden group flex flex-col"
              >
                <div
                  className="relative w-full aspect-[4/3] bg-secondary/50 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedComp(comp)}
                >
                  <Image
                    src={comp.image}
                    alt={`${comp.event} certificate`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-md backdrop-blur-sm ${
                        comp.color === "accent"
                          ? "bg-accent/80 text-accent-foreground"
                          : "bg-primary/80 text-primary-foreground"
                      }`}
                    >
                      {comp.title}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-lg bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border/40">
                      <comp.icon
                        className={`w-4 h-4 ${comp.color === "accent" ? "text-accent" : "text-primary"}`}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/70 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-foreground border border-border/40">
                      View
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                    {comp.event}
                  </h4>
                  <p className="text-xs text-primary mb-2">{comp.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3 flex-1">{comp.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{comp.date}</span>
                    <button
                      onClick={() => setSelectedComp(comp)}
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshops & Seminars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Workshops & Seminars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass rounded-2xl border border-border/50 hover:border-primary/50 transition-colors overflow-hidden group flex flex-col"
              >
                <div className="relative w-full h-48 bg-secondary/50 overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-background/70 backdrop-blur-sm text-foreground border border-border/40">
                      {workshop.date}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h4 className="text-white font-semibold text-base leading-tight">
                      {workshop.title}
                    </h4>
                    <p className="text-white/70 text-xs mt-0.5">{workshop.organizer}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Key Highlights
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {workshop.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certification Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-2xl w-full rounded-2xl border border-border/50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedCert.title}</h3>
                  <p className="text-sm text-primary">{selectedCert.issuer} · {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full p-1.5"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative w-full aspect-[4/3] bg-secondary/50">
                <Image
                  src={selectedCert.image}
                  alt={`${selectedCert.title} certificate`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competition Certificate Modal */}
      <AnimatePresence>
        {selectedComp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedComp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-2xl w-full rounded-2xl border border-border/50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedComp.title} · {selectedComp.event}</h3>
                  <p className="text-sm text-primary">{selectedComp.issuer} · {selectedComp.date}</p>
                </div>
                <button
                  onClick={() => setSelectedComp(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full p-1.5"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative w-full aspect-[4/3] bg-secondary/50">
                <Image
                  src={selectedComp.image}
                  alt={`${selectedComp.event} certificate`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
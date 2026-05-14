"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Data Annotation & Project Intern",
    company: "DrukSmart Pvt. Ltd.",
    location: "Thimphu",
    period: "Jun 2025 - Jul 2025",
    description:
      "Annotated and labelled datasets to support machine learning model training and evaluation.",
    responsibilities: [
      "Annotated and labelled datasets to support ML model training",
      "Developed attention to detail through large-scale data annotation",
      "Gained exposure to real-world AI/ML project workflows",
    ],
    tech: ["Data Annotation", "Machine Learning", "Python", "Data Preprocessing"],
  },
  {
    title: "UI/UX & Project Intern",
    company: "DrukSmart Pvt. Ltd.",
    location: "Thimphu",
    period: "Dec 2023 - Jan 2024",
    description:
      "Trained in component-based frontend development using Vue.js and Pinia state management for the Pema Secretariat project.",
    responsibilities: [
      "Developed reusable and scalable UI components with Vue.js",
      "Implemented frontend features using Pinia state management",
      "Collaborated in Agile-based teamwork environment",
      "Received recommendation letter for performance",
    ],
    tech: ["Vue.js", "Pinia", "UI/UX Design", "Agile"],
  },
]

const leadership = [
  {
    title: "PRJ303 Semester Project Team Lead",
    organization: "GCIT",
    period: "Feb 2025 - Jun 2025",
    description:
      "Managed a team working on an AI-based application, overseeing project planning, milestone tracking, and technical discussions.",
  },
  {
    title: "PRJ202 Semester Project Team Lead",
    organization: "GCIT",
    period: "Feb 2024 - Jun 2024",
    description:
      "Led the development team in building a machine learning-based application for image analysis.",
  },
  {
    title: "PRJ101 Semester Project Team Lead",
    organization: "GCIT",
    period: "Feb 2023 - Jun 2023",
    description:
      "Led a team developing a web-based institutional system as part of the semester project.",
  },
  {
    title: "Executive Lead - Content Creation",
    organization: "GCIT Literary & Interactive Club",
    period: "Mar 2023 - Nov 2024",
    description:
      "Managed digital content for club's social media platforms. Co-hosted GCIT Seniors' Night 2024.",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and leadership roles that shaped my career
          </p>
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Internships</h3>
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-purple ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:-right-2"
                      : "left-0 md:-left-2"
                  } -translate-x-1/2 md:translate-x-0`}
                />

                <div className="ml-8 md:ml-0 glass rounded-2xl p-6 hover:glow-purple transition-shadow border border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="mx-2">|</span>
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h4>

                  {/* Company name + logo inline — swap src with your actual logo path */}
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <img
                      src="/druksmart_logo.png"
                      alt="DrukSmart"
                      width={35}
                      height={35}
                      className="rounded-sm object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none"
                      }}
                    />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Leadership Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadership.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-6 border border-border/50 transition-all duration-300 hover:border-[#783FF5] hover:shadow-[0_0_20px_rgba(120,63,245,0.25)] hover:outline hover:outline-1 hover:outline-[#783FF5]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{role.title}</h4>
                    <p className="text-sm text-accent">{role.organization}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{role.period}</p>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
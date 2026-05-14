"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar, Languages } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Gyalpozhing College of Information Technology (GCIT)",
    period: "August 2022 - June 2026",
    status: "Current",
    courses: [
      "Artificial Intelligence and Machine Learning (CSA203)",
      "Deep Learning (CSA301)",
      "Natural Language Processing (CSA402)",
      "Data Analytics and Visualization (CSA202)",
      "Applied Data Structures and Algorithms (CSA201)",
    ],
  },
  {
    degree: "Pure Science (Class XII)",
    institution: "Motithang Higher Secondary School",
    period: "2020 - 2022",
    status: "Completed",
    courses: [],
  },
]

const languages = [
  { name: "Dzongkha", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Sherpa", level: "Mother Tongue" },
  { name: "Nepali", level: "Elementary" },
  { name: "Hindi", level: "Elementary" },
]

function getLangVariant(level: string): "default" | "secondary" | "outline" {
  if (level === "Native" || level === "Mother Tongue") return "default"
  if (level === "Professional") return "secondary"
  return "outline"
}

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="max-w-6xl mx-auto px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Languages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and linguistic proficiency
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-sm text-primary">{edu.institution}</p>
                    </div>
                    <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                      {edu.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>

                  {edu.courses.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        Major Courses
                      </p>
                      <ul className="space-y-1">
                        {edu.courses.map((course) => (
                          <li
                            key={course}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-border/50"
            >
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant={getLangVariant(lang.level)}>
                      {lang.level}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
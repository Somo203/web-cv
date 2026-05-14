"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Sparkles, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Code,
    title: "Focus",
    description: "AI/ML • Full-Stack Development • UI/UX Design",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description: "Driving AI innovation to solve meaningful real-world challenges",
  },
  {
    icon: Heart,
    title: "Hobbies",
    description: "Reading books, playing basketball & going on hikes",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 max-w-5xl mx-auto">

          {/* Left column: description + cards */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Bio description */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curious and motivated Computer Science undergraduate with skills in
                Artificial Intelligence, Machine Learning, and Full-Stack
                Development. Experienced in data annotation, dataset preparation,
                and building AI-driven applications through academic projects and
                internships. Passionate about applying AI solutions to real-world
                problems while demonstrating strong problem-solving, teamwork, and
                communication skills.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-border/50 h-full group hover:border-primary/50 transition-colors card-lift">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right column: photo pushed down to sit between description and cards visually */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex justify-center md:justify-start md:mt-16"
          >
            <div
              className="relative w-80 h-80 md:w-85 md:h-85 rounded-3xl overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(135deg, #783FF5 0%, #0089E9 100%)",
                padding: "3px",
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/sonam.jpeg"
                  alt="Sonam Zangmo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 400px, 512px"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
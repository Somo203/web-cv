"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Brain, Code, Database, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Dyslexia-Friendly Rewriter",
    role: "AI/ML Engineer & NLP Model Developer",
    period: "Aug 2025 - Nov 2025",
    description:
      "AI-powered text simplification system using transformer models to rewrite complex sentences into clearer text for readers with dyslexia.",
    fullDescription:
      "Developed an AI-powered text simplification system using transformer models (T5-small, BERT, and BART) to rewrite complex sentences into clearer and more accessible text for readers with dyslexia. Trained and evaluated models using datasets such as WikiLarge and WordNet, achieving ~85% accuracy.",
    tech: ["T5-small", "BERT", "BART", "NLP", "Python"],
    category: "AI/ML",
    accuracy: "85%",
    icon: Brain,
    image: "/project-1.png",
    github: "https://github.com/12220089/Dyslexic-",
    demo: "https://dyslexic-198o.onrender.com",
    features: [
      "Transformer-based text simplification",
      "Multiple model evaluation (T5, BERT, BART)",
      "Plain-language word explanations",
      "Reading accessibility improvements",
    ],
  },
  {
    title: "SmartSort",
    role: "Project Lead & AI Developer",
    period: "Feb 2025 - Jun 2025",
    description:
      "AI-powered waste classification system using object detection to identify recyclable waste categories through real-time webcam detection.",
    fullDescription:
      "Developed an AI-powered waste classification system using object detection to identify recyclable waste categories through real-time webcam detection or image input. Achieved ~90% detection accuracy in identifying different plastic types and non-waste items.",
    tech: ["Object Detection", "Deep Learning", "Python", "OpenCV"],
    category: "AI/ML",
    accuracy: "90%",
    icon: Brain,
    image: "/project-2.png",
    github: "https://github.com/12220089/Waste_Sorting",
    demo: "https://smartsort-1.onrender.com/",
    features: [
      "Real-time webcam waste detection",
      "7 recycling category classification",
      "Audio-based recycling recommendations",
      "Sustainable waste management promotion",
    ],
  },
  {
    title: "MovieRank",
    role: "Full-Stack Developer",
    period: "Jun 2025 - Jul 2025",
    description:
      "Full-stack web application for discovering, rating, and reviewing movies using OMDb API integration.",
    fullDescription:
      "Built a full-stack web application that allows users to discover, rate, and review movies by integrating movie data from the OMDb API. Implemented a MongoDB database to store user ratings, reviews, and movie metadata.",
    tech: ["Next.js", "Node.js", "MongoDB", "OMDb API"],
    category: "Full-Stack",
    icon: Code,
    image: "/project-3.png",
    github: "https://github.com/Somo203/Movie-Rank",
    demo: "https://movie-rank-19q4.vercel.app/",
    features: [
      "OMDb API integration",
      "User ratings and reviews",
      "Dynamic data retrieval",
      "Movie discovery platform",
    ],
  },
  {
    title: "Facial Age Analyzer",
    role: "Deep Learning Model Trainer",
    period: "Feb 2024 - Jun 2024",
    description:
      "Deep learning system using CNNs to estimate human age ranges from facial images and live camera input.",
    fullDescription:
      "Developed a deep learning system using Convolutional Neural Networks (CNNs) to estimate human age ranges from facial images and live camera input. Achieved approximately 80% prediction accuracy during testing.",
    tech: ["CNN", "Deep Learning", "Python", "OpenCV"],
    category: "AI/ML",
    accuracy: "80%",
    icon: Brain,
    image: "/project-7.png",
    github: "https://github.com/Somo203/facial-age-analyzer",
    demo: "",
    features: [
      "CNN-based age estimation",
      "Live camera input support",
      "Age verification applications",
      "Facial dataset training",
    ],
  },
  {
    title: "YouTube Comment Sentiment Analysis",
    role: "Machine Learning Developer",
    period: "Jun 2024 - Nov 2024",
    description:
      "ML system that analyzes YouTube video comments and classifies them into positive, negative, or neutral sentiments.",
    fullDescription:
      "Developed a machine learning system that analyzes comments from a YouTube video link and classifies them into positive, negative, or neutral sentiments using Natural Language Processing techniques. Achieved ~90% accuracy in sentiment prediction.",
    tech: ["NLP", "Machine Learning", "Python", "Text Classification"],
    category: "AI/ML",
    accuracy: "90%",
    icon: Brain,
    image: "/project-4.png",
    github: "https://github.com/Somo203/yt-sentiment",
    demo: "",
    features: [
      "YouTube API integration",
      "NLP preprocessing pipeline",
      "Sentiment classification model",
      "Public opinion trend analysis",
    ],
  },
  {
    title: "GCIT No-Due System",
    role: "Project Lead & Frontend Developer",
    period: "Feb 2023 - Jun 2023",
    description:
      "Web-based system to automate student clearance process across multiple departments at GCIT.",
    fullDescription:
      "Developed a web-based system to automate the student clearance process across multiple departments at GCIT. Implemented a database-backed workflow using MySQL and web technologies to manage clearance requests and approvals digitally.",
    tech: ["React", "JavaScript", "MySQL"],
    category: "Full-Stack",
    icon: Database,
    image: "/project-6.png",
    github: "https://github.com/grey300/No-Due",
    demo: "",
    features: [
      "Multi-department clearance workflow",
      "Digital approval system",
      "Reduced manual paperwork",
      "Database-backed tracking",
    ],
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of AI/ML applications and full-stack development projects
          </p>

          {/* Filter */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {["all", "AI/ML", "Full-Stack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card
                className="glass border-border/50 h-full group cursor-pointer hover:border-primary/50 transition-all duration-300 overflow-hidden p-0"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-52 w-full overflow-hidden rounded-t-[inherit]">
                  {/* Brighter image: removed dark mid overlay, boosted via CSS filters */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-105 contrast-105 saturate-110"
                  />
                  {/* Much lighter gradient — only enough to make badge/icon readable */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />

                  {project.accuracy && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-primary/80 text-primary-foreground backdrop-blur-sm">
                        {project.accuracy} Accuracy
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-xl bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border/40">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 pt-2">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {project.role} | {project.period}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass max-w-2xl w-full rounded-2xl border border-border/50 max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal hero image — also brightened */}
                <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover brightness-105 contrast-105 saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50" />

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm rounded-full p-1.5"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border/40">
                      <selectedProject.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                      <p className="text-sm text-white/70">{selectedProject.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {selectedProject.demo && (
                      <Button className="gap-2" asChild>
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button variant="outline" className="gap-2" asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
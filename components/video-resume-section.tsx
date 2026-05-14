"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Award, Code, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Code, value: "6+", label: "Projects Completed" },
  { icon: Award, value: "3+", label: "Certifications" },
  { icon: Users, value: "4+", label: "Leadership Roles" },
  { icon: Briefcase, value: "2+", label: "Internships" },
];

const badges = [
  "AI/ML",
  "NLP",
  "Web-Development",
  "UX/UI",
  "Python",
  "Team Work",
  "Team Lead",
];

export function VideoResumeSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="video-resume" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-balance">
            Get to Know Me Better
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden glass glow-purple relative bg-muted">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                // 1. PLACE YOUR PHOTO FILENAME HERE:
                poster="/cover.jpg" 
                playsInline
              >
                <source src="/12220073_video_resume.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* 2. Custom Play Overlay - disappears when playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* We removed the gradient background so your 'poster' image is fully visible */}
                  <Button
                    onClick={handlePlayVideo}
                    size="lg"
                    className="rounded-full w-20 h-20 group-hover:scale-110 transition-transform bg-primary/90 hover:bg-primary shadow-xl"
                    aria-label="Play video resume"
                  >
                    <Play className="w-8 h-8 ml-1 text-white fill-white" />
                  </Button>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Why Hire Me?
            </h4>
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                Strong foundation in AI/ML with hands-on project experience
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                Full-stack development skills with modern technologies
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                Proven leadership and team collaboration abilities
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                Passionate about solving real-world problems through technology
              </li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
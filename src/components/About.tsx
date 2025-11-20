"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVsco,
  SiPostman,
  SiFigma,
  SiVercel,
  SiDocker,
  SiPython,
  SiSpring,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, hoverColor: "#3b82f6" },
  { name: "Next.js", icon: SiNextdotjs, hoverColor: "#000000" },
  { name: "TypeScript", icon: SiTypescript, hoverColor: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, hoverColor: "#f7df1e" },
  { name: "Tailwind CSS", icon: SiTailwindcss, hoverColor: "#06b6d4" },
  { name: "Framer Motion", icon: SiFramer, hoverColor: "#0055ff" },
  { name: "HTML5", icon: SiHtml5, hoverColor: "#e34f26" },
  { name: "CSS3", icon: SiCss3, hoverColor: "#1572b6" },
  { name: "Node.js", icon: SiNodedotjs, hoverColor: "#339933" },
  { name: "Express", icon: SiExpress, hoverColor: "#000000" },
  { name: "MongoDB", icon: SiMongodb, hoverColor: "#47a248" },
  { name: "PostgreSQL", icon: SiPostgresql, hoverColor: "#336791" },
  { name: "GraphQL", icon: SiGraphql, hoverColor: "#e10098" },
  { name: "Firebase", icon: SiFirebase, hoverColor: "#ffca28" },
  { name: "Git", icon: SiGit, hoverColor: "#f05032" },
  { name: "GitHub", icon: SiGithub, hoverColor: "#181717" },
  { name: "VS Code", icon: SiVsco, hoverColor: "#007acc" },
  { name: "Postman", icon: SiPostman, hoverColor: "#ff6c37" },
  { name: "Figma", icon: SiFigma, hoverColor: "#f24e1e" },
  { name: "Vercel", icon: SiVercel, hoverColor: "#000000" },
  { name: "Docker", icon: SiDocker, hoverColor: "#2496ed" },
  { name: "Python", icon: SiPython, hoverColor: "#3776ab" },
  { name: "Java", icon: SiSpring, hoverColor: "#6db33f" },
  { name: "C++", icon: SiCplusplus, hoverColor: "#00599c" },
  { name: "MySQL", icon: SiMysql, hoverColor: "#4479a1" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center relative overflow-hidden w-full z-10 isolate"
    >
      <div className="w-full flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-6xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 font-[var(--font-bruno)] text-center">
              <span className="text-foreground">About Me</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-foreground/60 leading-relaxed sm:leading-loose">
              <p>
                I'm <strong className="text-foreground">Siddhant Manna</strong>, a final-year IT student at{" "}
                <strong className="text-foreground">Meghnad Saha Institute of Technology</strong>, specializing in full-stack development. 
                I build scalable solutions using <strong className="text-foreground">Node.js</strong>, <strong className="text-foreground">React</strong>, and{" "}
                <strong className="text-foreground">Next.js</strong>, transforming complex ideas into elegant digital experiences.
              </p>
              <p>
                From architecting robust backends to crafting pixel-perfect interfaces, I approach every project with precision and passion.{" "}
                <strong className="text-foreground">Open to opportunities</strong> where I can contribute to meaningful projects and grow as a developer.
              </p>
              <p>
                Beyond coding, I'm also a passionate <strong className="text-foreground">wildlife photographer</strong>, 
                capturing the beauty of nature and wildlife through my lens. This hobby has taught me patience, attention to detail, 
                and the importance of seeing things from different perspectives—skills that translate seamlessly into my development work.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Infinite Logo Carousel - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
        <style dangerouslySetInnerHTML={{__html: `
          .tech-icon-group .tech-icon {
            color: #4b5563;
            transition: color 0.7s ease, transform 0.7s ease;
          }
          .tech-icon-group:hover .tech-icon {
            color: var(--hover-color) !important;
          }
        `}} />
        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8 z-0" style={{ contain: 'layout style paint' }}>
          {/* First row - Forward direction */}
          <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 animate-scroll mb-8 sm:mb-12 md:mb-16" style={{ willChange: 'transform' }}>
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`forward-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 sm:gap-3 tech-icon-group group"
                  style={{ '--hover-color': tech.hoverColor } as React.CSSProperties}
                >
                  <Icon 
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 tech-icon group-hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap hidden sm:inline">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Second row - Reverse direction */}
          <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 animate-scroll-reverse" style={{ willChange: 'transform' }}>
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`reverse-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 sm:gap-3 tech-icon-group group"
                  style={{ '--hover-color': tech.hoverColor } as React.CSSProperties}
                >
                  <Icon 
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 tech-icon group-hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap hidden sm:inline">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

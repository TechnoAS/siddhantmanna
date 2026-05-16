"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineEntry {
    type: "work" | "education";
    title: string;
    organization: string;
    period: string;
    description: string;
    technologies?: string[];
}

const timeline: TimelineEntry[] = [
    {
        type: "work",
        title: "Full Stack Developer",
        organization: "Freelance / Open Source",
        period: "2024 — Present",
        description:
            "Building production-grade web applications and contributing to open-source projects. Developed Architecx, an interactive system-design learning platform used by students and professionals.",
        technologies: ["React", "Next.js", "Node.js", "MongoDB", "Firebase"],
    },
    {
        type: "education",
        title: "B.Tech in Information Technology",
        organization: "Meghnad Saha Institute of Technology",
        period: "2021 — 2025",
        description:
            "Final-year IT student with a strong focus on web technologies, data structures, and software engineering. Active participant in hackathons and technical communities.",
        technologies: ["DSA", "DBMS", "OS", "Computer Networks"],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24 relative overflow-hidden z-10 isolate bg-background"
        >
            <div className="container mx-auto max-w-5xl w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 sm:mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                        <span className="text-foreground">Experience</span>
                    </h2>
                    <p className="text-sm sm:text-base text-foreground/40 max-w-2xl mx-auto">
                        My professional journey and education
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-6 sm:space-y-14">
                        {timeline.map((entry, index) => {
                            const isLeft = index % 2 === 0;
                            const Icon = entry.type === "work" ? FaBriefcase : FaGraduationCap;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot on timeline */}
                                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-foreground/20 flex items-center justify-center z-10">
                                        <Icon className="h-3.5 w-3.5 text-foreground/50" />
                                        {/* Glow pulse */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full border border-foreground/10"
                                            initial={{ scale: 1, opacity: 0 }}
                                            whileInView={{ scale: [1, 1.6, 1.6], opacity: [0, 0.4, 0] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                                        />
                                    </div>

                                    {/* Content card */}
                                    <div
                                        className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
                                            }`}
                                    >
                                        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                                            <span className="text-xs font-medium text-foreground/40 uppercase tracking-wider">
                                                {entry.period}
                                            </span>
                                            <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
                                                {entry.title}
                                            </h3>
                                            <p className="text-sm text-foreground/50 mt-0.5">
                                                {entry.organization}
                                            </p>
                                            <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
                                                {entry.description}
                                            </p>

                                            {entry.technologies && (
                                                <div
                                                    className={`flex flex-wrap gap-1.5 mt-4 ${isLeft ? "sm:justify-end" : "sm:justify-start"
                                                        }`}
                                                >
                                                    {entry.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 text-xs font-medium bg-muted/50 border border-border/30 rounded-md text-foreground/50"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

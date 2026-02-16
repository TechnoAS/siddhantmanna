"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    relationship: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "Siddhant has an exceptional ability to translate complex requirements into clean, scalable code. His work on Architecx demonstrated both technical depth and creative problem-solving.",
        name: "Prof. Ananya Das",
        role: "Associate Professor, IT Dept.",
        relationship: "Academic Mentor",
    },
    {
        quote:
            "Working with Siddhant was a fantastic experience. He delivered a polished, production-quality web app ahead of schedule. His attention to detail and proactive communication set him apart.",
        name: "Rahul Verma",
        role: "Startup Founder",
        relationship: "Freelance Client",
    },
    {
        quote:
            "One of the most dedicated developers I've collaborated with. Siddhant doesn't just write code — he thinks about the user experience, performance, and maintainability from day one.",
        name: "Priya Chatterjee",
        role: "Senior Developer",
        relationship: "Team Lead / Hackathon",
    },
];

export default function Testimonials() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden z-10 isolate bg-background">
            <div className="container mx-auto max-w-5xl w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-[var(--font-bruno)]">
                        <span className="text-foreground">Testimonials</span>
                    </h2>
                    <p className="text-sm sm:text-base text-foreground/40 max-w-2xl mx-auto">
                        What people say about working with me
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group"
                        >
                            <div className="h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg flex flex-col">
                                <FaQuoteLeft className="h-5 w-5 text-foreground/10 mb-4 group-hover:text-foreground/20 transition-colors" />

                                <p className="text-sm sm:text-base text-foreground/60 leading-relaxed flex-1 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                <div className="mt-6 pt-4 border-t border-border/30">
                                    <p className="text-sm font-semibold text-foreground">
                                        {t.name}
                                    </p>
                                    <p className="text-xs text-foreground/40 mt-0.5">
                                        {t.role}
                                    </p>
                                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/30 bg-muted/50 border border-border/30 rounded-full">
                                        {t.relationship}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

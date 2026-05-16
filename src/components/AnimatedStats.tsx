"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaCode, FaProjectDiagram, FaClock, FaCamera } from "react-icons/fa";

interface Stat {
    icon: React.ComponentType<{ className?: string }>;
    value: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    { icon: FaProjectDiagram, value: 10, suffix: "+", label: "Projects Built" },
    { icon: FaCode, value: 5000, suffix: "+", label: "Lines of Code" },
    { icon: FaClock, value: 3, suffix: "+", label: "Years Coding" },
    { icon: FaCamera, value: 500, suffix: "+", label: "Photos Captured" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * value);
            setDisplay(start);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [inView, value]);

    return (
        <span className="tabular-nums">
            {display.toLocaleString()}{suffix}
        </span>
    );
}

export default function AnimatedStats() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="px-4 sm:px-10 lg:px-12 py-16 sm:py-20 relative overflow-hidden z-10 isolate bg-background">
            <div ref={ref} className="container mx-auto max-w-5xl w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted/50 border border-border/30 mb-3 group-hover:border-foreground/20 transition-colors">
                                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/40 group-hover:text-foreground/60 transition-colors" />
                                </div>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                                </p>
                                <p className="text-xs sm:text-sm text-foreground/40 mt-1">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

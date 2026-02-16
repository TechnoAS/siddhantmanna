"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-foreground blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-foreground blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-xl"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-8xl sm:text-9xl font-bold font-[var(--font-bruno)] text-foreground/10 select-none"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl font-medium text-foreground mt-2 mb-2"
                >
                    Page not found
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-foreground/50 mb-8"
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                        ← Back to {PERSONAL.name.split(" ")[0]}&apos;s Portfolio
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

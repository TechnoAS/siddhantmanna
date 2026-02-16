"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Only show on desktop
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const mouse = { x: 0, y: 0 };
        const ring = { x: 0, y: 0 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            if (!isVisible) setIsVisible(true);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Smooth ring follow
        let raf: number;
        const animateRing = () => {
            ring.x += (mouse.x - ring.x) * 0.15;
            ring.y += (mouse.y - ring.y) * 0.15;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.x - 20}px, ${ring.y - 20}px)`;
            }
            raf = requestAnimationFrame(animateRing);
        };

        // Detect hoverable elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverable = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
            setIsHovering(!!hoverable);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousemove", handleElementHover);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);
        raf = requestAnimationFrame(animateRing);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousemove", handleElementHover);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", checkMobile);
            cancelAnimationFrame(raf);
        };
    }, [isVisible]);

    if (isMobile) return null;

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 12 : 8,
                        height: isHovering ? 12 : 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="rounded-full bg-white"
                />
            </div>

            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-difference transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 56 : 40,
                        height: isHovering ? 56 : 40,
                        borderWidth: isHovering ? 1 : 1.5,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="rounded-full border-white/60"
                    style={{
                        marginLeft: isHovering ? -8 : 0,
                        marginTop: isHovering ? -8 : 0,
                    }}
                />
            </div>
        </>
    );
}

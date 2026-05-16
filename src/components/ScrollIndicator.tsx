"use client";

import { useEffect } from "react";

export default function ScrollIndicator() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      try {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        const progressBar = document.getElementById("scroll-indicator");
        if (progressBar) {
          progressBar.style.height = `${scrollPercent}%`;
        }
      } catch (error) {
        console.error("Scroll indicator error:", error);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="scroll-indicator"
      className="fixed right-0 top-0 w-1 bg-primary/30 z-50 transition-all duration-150"
      style={{ height: "0%" }}
    />
  );
}


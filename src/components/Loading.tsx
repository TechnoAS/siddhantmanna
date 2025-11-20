"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = "hidden";

    const letters = document.querySelectorAll(".loading-text span");

    // Animate each letter with stagger
    gsap.to(letters, {
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      onStart: function () {
        letters.forEach((el, i) => {
          const letterEl = el as HTMLElement;
          
          // Animate: dark → lit → dark
          gsap.to(letterEl, {
            color: "#ffffff",
            duration: 0.2,
            delay: i * 0.15,
          });
          
          // Then back to dark
          gsap.to(letterEl, {
            color: "rgba(255,255,255,0.1)",
            duration: 0.2,
            delay: i * 0.15 + 0.4,
          });
        });
      },
      onComplete: () => {
        // At the end, make all letters fully lit
        gsap.to(letters, {
          color: "#ffffff",
          duration: 0.3,
        });
        
        // Then fade out the loading screen
        gsap.to("#loading", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          onComplete: () => {
            const loadingElement = document.getElementById("loading");
            if (loadingElement) {
              loadingElement.style.display = "none";
            }
            // Re-enable body scroll
            document.body.style.overflow = "";
          },
        });
      },
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const letters = ["S", "I", "D", "D", "H", "A", "N", "T"];

  return (
    <div
      id="loading"
      ref={loadingRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <div className="loading-text" id="name-loader">
        {letters.map((letter, index) => (
          <span
            key={index}
            data-text={letter}
            className="loading-letter"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}


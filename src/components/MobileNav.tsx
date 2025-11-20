"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaHome, FaUser, FaFolderOpen, FaCamera, FaEnvelope } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Projects", href: "#projects", icon: FaFolderOpen },
  { name: "Photography", href: "#photography", icon: FaCamera },
  { name: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 100;
      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        return { id, element, href: item.href };
      }).filter(item => item.element);
      
      let current = "";
      
      // If at top of page, set home as active
      if (window.scrollY < 50) {
        current = "home";
      } else {
        // Find the section that is currently most visible in viewport
        for (let i = sections.length - 1; i >= 0; i--) {
          const { id, element } = sections[i];
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            
            // Section is active if:
            // 1. Top of section is above or near the header offset
            // 2. Section is visible in viewport (bottom is below top of viewport)
            if (sectionTop <= headerOffset + 50 && sectionBottom > headerOffset) {
              current = id;
              break;
            }
          }
        }
        
        // Fallback: if no section found, find the one closest to viewport top
        if (!current && sections.length > 0) {
          let closestSection = sections[0];
          let closestDistance = Math.abs(sections[0].element!.getBoundingClientRect().top - headerOffset);
          
          for (const section of sections) {
            if (section.element) {
              const distance = Math.abs(section.element.getBoundingClientRect().top - headerOffset);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
              }
            }
          }
          current = closestSection.id;
        }
      }
      
      if (current) setActiveSection(`#${current}`);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    // Also check on resize
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Glass morphism background with blur */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl border-t border-border/50 shadow-[0_-4px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.3)]" />
      
      {/* Safe area for iOS */}
      <div className="container mx-auto px-2 sm:px-4 pb-safe">
        <div className="flex items-center justify-around h-18 sm:h-20">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setActiveSection(item.href);
                  }
                }}
                className="flex flex-col items-center justify-center gap-1.5 flex-1 h-full transition-all duration-300 relative group min-w-0"
              >
                {/* Active indicator with smooth animation */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-foreground rounded-full"
                    />
                  )}
                </AnimatePresence>

                {/* Icon container with advanced hover effects */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2.5 sm:p-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-foreground/40 group-active:text-foreground group-active:bg-muted"
                  }`}
                >
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`} />
                  
                  {/* Ripple effect on active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-primary/20"
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                </motion.div>

                {/* Label with better typography */}
                <span
                  className={`text-[9px] sm:text-[10px] font-semibold transition-all duration-300 leading-tight text-center ${
                    isActive
                      ? "text-foreground scale-105"
                      : "text-foreground/40 group-hover:text-foreground/60"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

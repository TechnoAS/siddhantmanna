"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaCamera,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import iconLight from "@/app/iconLightMode.png";
import iconDark from "@/app/iconDarkMode.png";

const navItems = [
  { name: "Home", href: "#home", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Projects", href: "#projects", icon: FaFolderOpen },
  { name: "Photography", href: "#photography", icon: FaCamera },
  { name: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Initialize dark mode from system preference or localStorage
  // Force dark mode on mobile screens
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    
    if (isMobile) {
      // Force dark mode on mobile
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // Desktop: use stored preference or system preference
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = stored ? stored === "dark" : prefersDark;
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    // Listen for window resize to handle mobile/desktop switching
    const handleResize = () => {
      const isMobileNow = window.matchMedia("(max-width: 640px)").matches;
      if (isMobileNow) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
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
            const viewportHeight = window.innerHeight;
            
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
    handleScroll(); // Initial check
    
    // Also check on resize
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Close menu when clicking outside or on link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Glassmorphism background - enhanced on scroll with gradient fade */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl border-b border-border/20 shadow-lg"
            : "bg-background/95 backdrop-blur-sm"
        }`}
        style={{
          ...(isScrolled ? {
            background: "linear-gradient(to bottom, color-mix(in srgb, var(--background) 95%, transparent) 0%, color-mix(in srgb, var(--background) 90%, transparent) 15%, color-mix(in srgb, var(--background) 80%, transparent) 35%, color-mix(in srgb, var(--background) 65%, transparent) 55%, color-mix(in srgb, var(--background) 45%, transparent) 75%, color-mix(in srgb, var(--background) 25%, transparent) 90%, transparent 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 20%, color-mix(in srgb, black 95%, transparent) 40%, color-mix(in srgb, black 85%, transparent) 60%, color-mix(in srgb, black 70%, transparent) 75%, color-mix(in srgb, black 50%, transparent) 85%, color-mix(in srgb, black 30%, transparent) 92%, color-mix(in srgb, black 15%, transparent) 96%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 20%, color-mix(in srgb, black 95%, transparent) 40%, color-mix(in srgb, black 85%, transparent) 60%, color-mix(in srgb, black 70%, transparent) 75%, color-mix(in srgb, black 50%, transparent) 85%, color-mix(in srgb, black 30%, transparent) 92%, color-mix(in srgb, black 15%, transparent) 96%, transparent 100%)"
          } : {
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, color-mix(in srgb, black 85%, transparent) 80%, color-mix(in srgb, black 65%, transparent) 88%, color-mix(in srgb, black 40%, transparent) 93%, color-mix(in srgb, black 20%, transparent) 96%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, color-mix(in srgb, black 85%, transparent) 80%, color-mix(in srgb, black 65%, transparent) 88%, color-mix(in srgb, black 40%, transparent) 93%, color-mix(in srgb, black 20%, transparent) 96%, transparent 100%)"
          })
        }}
      />
      
      <nav className="w-full relative">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4 w-full">
          {/* Logo and Name Container - Left side with padding */}
          <div className="flex items-center flex-shrink-0 pl-6 sm:pl-8 lg:pl-12">
            <Link
              href="#home"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("#home");
              }}
              className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-bold text-foreground hover:opacity-70 transition-opacity font-[var(--font-bruno)] group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <Image
                  src={isDark ? iconDark : iconLight}
                  alt="Logo"
                  fill
                  className="object-contain transition-opacity duration-300"
                  priority
                />
              </motion.div>
              <span className="hidden sm:inline">Siddhant Manna</span>
            </Link>
          </div>

          {/* Navigation Items and Controls Container - Right side with padding */}
          <div className="flex items-center gap-2 flex-shrink-0 pr-6 sm:pr-8 lg:pr-12">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
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
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 group ${
                      activeSection === item.href
                        ? "text-foreground"
                        : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-200 ${
                      activeSection === item.href ? "scale-110" : "group-hover:scale-110"
                    }`} />
                    <span>{item.name}</span>
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-foreground rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle Button - Hidden on mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const isMobile = window.matchMedia("(max-width: 640px)").matches;
                if (isMobile) return; // Prevent theme toggle on mobile
                
                const newDarkState = !isDark;
                setIsDark(newDarkState);
                if (newDarkState) {
                  document.documentElement.classList.add("dark");
                  localStorage.setItem("theme", "dark");
                } else {
                  document.documentElement.classList.remove("dark");
                  localStorage.setItem("theme", "light");
                }
                // Dispatch custom event for favicon update
                window.dispatchEvent(new Event("themechange"));
              }}
              className="hidden sm:flex hover:bg-muted/50 dark:hover:bg-muted/30 rounded-lg"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FaMoon className="h-5 w-5" />
              ) : (
                <FaSun className="h-5 w-5" />
              )}
            </Button>

            {/* Tablet/Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-muted/50 dark:hover:bg-muted/30 relative lg:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Advanced Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-16 md:top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-background/98 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, black 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 95%, transparent 100%)"
              }}
              >
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
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
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                            isActive
                              ? "text-foreground bg-muted font-semibold"
                              : "text-foreground/50 hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <Icon className={`h-5 w-5 transition-transform duration-200 ${
                            isActive ? "scale-110" : "group-hover:scale-110"
                          }`} />
                          <span className="text-base font-medium">{item.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="ml-auto w-2 h-2 rounded-full bg-foreground"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

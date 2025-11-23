"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/siddhant-manna/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/TechnoAS", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:official.siddhantmanna@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen h-screen flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 mt-8 sm:mt-24 relative overflow-hidden z-0"
    >
      {/* Hero Image - Mobile: Top, Desktop: Left side */}
      {/* Mobile Hero Image - Above text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute sm:hidden top-4 left-0 right-0 h-[42vh] pointer-events-none z-0 w-screen"
      >
        <div className="relative h-full w-full">
          {/* Bottom edge blending for mobile */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Bottom edge - smooth fade to text */}
            <div
              className="absolute inset-x-0 bottom-0 h-[20vh]"
              style={{
                background: "linear-gradient(to top, var(--background) 0%, var(--background) 25%, color-mix(in srgb, var(--background) 90%, transparent) 35%, color-mix(in srgb, var(--background) 75%, transparent) 45%, color-mix(in srgb, var(--background) 55%, transparent) 55%, color-mix(in srgb, var(--background) 35%, transparent) 65%, color-mix(in srgb, var(--background) 18%, transparent) 75%, color-mix(in srgb, var(--background) 8%, transparent) 85%, transparent 100%)"
              }}
            />
            {/* Extended bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-[30vh] opacity-70"
              style={{
                background: "linear-gradient(to top, var(--background) 0%, color-mix(in srgb, var(--background) 40%, transparent) 30%, color-mix(in srgb, var(--background) 20%, transparent) 50%, color-mix(in srgb, var(--background) 10%, transparent) 70%, transparent 100%)"
              }}
            />
            {/* Side edge blending */}
            <div
              className="absolute inset-y-0 left-0 w-[15vw]"
              style={{
                background: "linear-gradient(to right, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 30%, color-mix(in srgb, var(--background) 30%, transparent) 60%, transparent 100%)"
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[15vw]"
              style={{
                background: "linear-gradient(to left, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 30%, color-mix(in srgb, var(--background) 30%, transparent) 60%, transparent 100%)"
              }}
            />
          </div>

          <div className="absolute inset-0">
            <Image
              src="/portfolio.png"
              alt="Hero illustration"
              fill
              className="object-contain object-top opacity-[0.35] mix-blend-normal dark:mix-blend-screen"
              priority
              quality={95}
              sizes="100vw"
              style={{
                objectPosition: "50% 12%",
                transform: "scale(0.98)",
                transformOrigin: "50% 10%",
                filter: "brightness(1.5) saturate(1.15) contrast(1.1)"
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Desktop Hero Image - Left side, zoomed, with enhanced edge blending */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="hidden sm:flex absolute left-0 top-0 bottom-0 items-center justify-start pointer-events-none z-0 w-screen"
      >
        <div
          className="relative h-full w-full sm:w-[70vw] md:w-[65vw] lg:w-[60vw]"
        >
          {/* Ultra-smooth edge blending gradients */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Right edge - ultra-smooth multi-layer fade */}
            <div
              className="absolute inset-y-0 right-0 w-[45vw] sm:w-[40vw] md:w-[38vw] lg:w-[35vw]"
              style={{
                background: "linear-gradient(to left, var(--background) 0%, var(--background) 12%, color-mix(in srgb, var(--background) 95%, transparent) 22%, color-mix(in srgb, var(--background) 85%, transparent) 32%, color-mix(in srgb, var(--background) 70%, transparent) 42%, color-mix(in srgb, var(--background) 50%, transparent) 52%, color-mix(in srgb, var(--background) 30%, transparent) 62%, color-mix(in srgb, var(--background) 15%, transparent) 72%, color-mix(in srgb, var(--background) 8%, transparent) 82%, transparent 100%)"
              }}
            />
            {/* Right edge - extended soft fade */}
            <div
              className="absolute inset-y-0 right-0 w-[75vw] sm:w-[70vw] md:w-[68vw] lg:w-[65vw] opacity-60"
              style={{
                background: "linear-gradient(to left, transparent 0%, color-mix(in srgb, var(--background) 25%, transparent) 38%, color-mix(in srgb, var(--background) 10%, transparent) 58%, transparent 100%)"
              }}
            />
            {/* Top edge - smooth fade */}
            <div
              className="absolute inset-x-0 top-0 h-[35vh] sm:h-[30vh] md:h-[28vh] lg:h-[25vh]"
              style={{
                background: "linear-gradient(to bottom, var(--background) 0%, var(--background) 18%, color-mix(in srgb, var(--background) 90%, transparent) 28%, color-mix(in srgb, var(--background) 75%, transparent) 38%, color-mix(in srgb, var(--background) 55%, transparent) 48%, color-mix(in srgb, var(--background) 35%, transparent) 58%, color-mix(in srgb, var(--background) 18%, transparent) 68%, color-mix(in srgb, var(--background) 8%, transparent) 78%, transparent 100%)"
              }}
            />
            {/* Top edge - extended soft fade */}
            <div
              className="absolute inset-x-0 top-0 h-[50vh] sm:h-[45vh] md:h-[42vh] lg:h-[40vh] opacity-50"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--background) 20%, transparent) 48%, color-mix(in srgb, var(--background) 8%, transparent) 68%, transparent 100%)"
              }}
            />
            {/* Bottom edge - smooth fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-[35vh] sm:h-[30vh] md:h-[28vh] lg:h-[25vh]"
              style={{
                background: "linear-gradient(to top, var(--background) 0%, var(--background) 18%, color-mix(in srgb, var(--background) 90%, transparent) 28%, color-mix(in srgb, var(--background) 75%, transparent) 38%, color-mix(in srgb, var(--background) 55%, transparent) 48%, color-mix(in srgb, var(--background) 35%, transparent) 58%, color-mix(in srgb, var(--background) 18%, transparent) 68%, color-mix(in srgb, var(--background) 8%, transparent) 78%, transparent 100%)"
              }}
            />
            {/* Bottom edge - extended soft fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-[50vh] sm:h-[45vh] md:h-[42vh] lg:h-[40vh] opacity-50"
              style={{
                background: "linear-gradient(to top, transparent 0%, color-mix(in srgb, var(--background) 20%, transparent) 48%, color-mix(in srgb, var(--background) 8%, transparent) 68%, transparent 100%)"
              }}
            />
            {/* Left edge - subtle smooth fade */}
            <div
              className="absolute inset-y-0 left-0 w-[30vw] sm:w-[25vw] md:w-[22vw] lg:w-[18vw]"
              style={{
                background: "linear-gradient(to right, color-mix(in srgb, var(--background) 50%, transparent) 0%, color-mix(in srgb, var(--background) 35%, transparent) 18%, color-mix(in srgb, var(--background) 20%, transparent) 38%, color-mix(in srgb, var(--background) 10%, transparent) 58%, color-mix(in srgb, var(--background) 5%, transparent) 78%, transparent 100%)"
              }}
            />
            {/* Corner blending - top right (smooth radial) */}
            <div
              className="absolute top-0 right-0 w-[50vw] h-[40vh] sm:w-[45vw] sm:h-[35vh] md:w-[42vw] md:h-[32vh] lg:w-[40vw] lg:h-[30vh]"
              style={{
                background: "radial-gradient(ellipse at top right, var(--background) 0%, color-mix(in srgb, var(--background) 85%, transparent) 18%, color-mix(in srgb, var(--background) 65%, transparent) 33%, color-mix(in srgb, var(--background) 40%, transparent) 48%, color-mix(in srgb, var(--background) 20%, transparent) 63%, color-mix(in srgb, var(--background) 8%, transparent) 78%, transparent 100%)"
              }}
            />
            {/* Corner blending - bottom right (smooth radial) */}
            <div
              className="absolute bottom-0 right-0 w-[50vw] h-[40vh] sm:w-[45vw] sm:h-[35vh] md:w-[42vw] md:h-[32vh] lg:w-[40vw] lg:h-[30vh]"
              style={{
                background: "radial-gradient(ellipse at bottom right, var(--background) 0%, color-mix(in srgb, var(--background) 85%, transparent) 18%, color-mix(in srgb, var(--background) 65%, transparent) 33%, color-mix(in srgb, var(--background) 40%, transparent) 48%, color-mix(in srgb, var(--background) 20%, transparent) 63%, color-mix(in srgb, var(--background) 8%, transparent) 78%, transparent 100%)"
              }}
            />
            {/* Primary radial gradient overlay - ultra-smooth */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 72% 102% at 18% center, transparent 0%, transparent 33%, color-mix(in srgb, var(--background) 15%, transparent) 43%, color-mix(in srgb, var(--background) 40%, transparent) 53%, color-mix(in srgb, var(--background) 70%, transparent) 68%, color-mix(in srgb, var(--background) 90%, transparent) 83%, var(--background) 100%)"
              }}
            />
            {/* Secondary radial overlay - extra smooth transition */}
            <div
              className="absolute inset-0 opacity-75"
              style={{
                background: "radial-gradient(ellipse 88% 108% at 16% center, transparent 0%, transparent 48%, color-mix(in srgb, var(--background) 10%, transparent) 58%, color-mix(in srgb, var(--background) 30%, transparent) 68%, color-mix(in srgb, var(--background) 60%, transparent) 83%, var(--background) 100%)"
              }}
            />
          </div>

          <div className="absolute inset-0 hero-image-container">
            <Image
              src="/portfolio.png"
              alt="Hero illustration"
              fill
              className="object-contain object-top opacity-[0.12] sm:opacity-[0.22] md:opacity-[0.30] lg:opacity-[0.36] xl:opacity-[0.44] mix-blend-soft-light dark:mix-blend-screen"
              priority
              quality={95}
              sizes="100vw"
              style={{
                filter: "blur(0.3px) brightness(1.15)",
                maskImage: "md:radial-gradient(ellipse 80% 100% at 20% center, black 30%, color-mix(in srgb, black 80%, transparent) 40%, color-mix(in srgb, black 55%, transparent) 50%, color-mix(in srgb, black 30%, transparent) 60%, color-mix(in srgb, black 15%, transparent) 70%, color-mix(in srgb, black 6%, transparent) 80%, transparent 98%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 20% center, black 30%, color-mix(in srgb, black 80%, transparent) 40%, color-mix(in srgb, black 55%, transparent) 50%, color-mix(in srgb, black 30%, transparent) 60%, color-mix(in srgb, black 15%, transparent) 70%, color-mix(in srgb, black 6%, transparent) 80%, transparent 98%)",
                objectPosition: "20% 6%",
                transform: "scale(0.98)",
                transformOrigin: "20% 6%"
              }}
            />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-[38vh] sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto sm:ml-auto sm:mr-0 max-w-2xl text-center sm:text-right"
        >
          {/* Large Name */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 font-[var(--font-bruno)] tracking-tight"
          >
            <span className="block text-foreground">Siddhant Manna</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/50 mb-6 sm:mb-8 font-normal"
          >
            Web Developer
          </motion.h2>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-end gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/90"
              >
                <Link
                  href="/Siddhant Manna Java Dev.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  My Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium border-2 hover:bg-muted/50 hover:border-primary/50 transition-all duration-300"
              >
                <Link
                  href="#contact"
                  className="no-underline"
                >
                  Hire Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center sm:justify-end gap-5 sm:gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/40 hover:text-foreground transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

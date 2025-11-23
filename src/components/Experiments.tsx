"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const galleryShots = [
  {
    id: "g1",
    title: "Urban Canvas",
    location: "City Streets",
    year: "2024",
    description:
      "Capturing the rhythm of urban life through candid moments and architectural details.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/abc.jpg",
  },
  {
    id: "g2",
    title: "Natural Harmony",
    location: "Nature Reserve",
    year: "2024",
    description:
      "Exploring the vibrant greens and textures found in natural landscapes and foliage.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/green.jpg",
  },
  {
    id: "g3",
    title: "Portrait Essence",
    location: "Studio Session",
    year: "2024",
    description:
      "A study in expression and light, revealing character through subtle details and composition.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/ig3.jpg",
  },
  {
    id: "g4",
    title: "Social Moments",
    location: "Event Photography",
    year: "2024",
    description:
      "Documenting authentic interactions and the energy of shared experiences.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/insta 1.jpg",
  },
  {
    id: "g5",
    title: "Creative Vision",
    location: "Artistic Project",
    year: "2024",
    description:
      "An experimental approach to composition, color, and visual storytelling.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/prenia.jpg",
  },
  {
    id: "g6",
    title: "Street Narrative",
    location: "Urban Exploration",
    year: "2024",
    description:
      "Finding beauty in everyday scenes and the stories that unfold in public spaces.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/scally 2.jpg",
  },
  {
    id: "g7",
    title: "Hoopie Portrait",
    location: "Portrait Session",
    year: "2024",
    description:
      "A compelling portrait that captures personality and emotion through careful composition and lighting.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/hoopie main.jpg",
  },
  {
    id: "g8",
    title: "Identity Frame",
    location: "Studio Work",
    year: "2024",
    description:
      "Exploring identity and expression through thoughtful portraiture and visual narrative.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/id.jpg",
  },
  {
    id: "g9",
    title: "Nocturnal Hunter",
    location: "Wildlife Photography",
    year: "2024",
    description:
      "Capturing the majesty of nocturnal wildlife in their natural habitat with precision and patience.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/OWL4.jpg",
  },
  {
    id: "g10",
    title: "Desert Dweller",
    location: "Nature Photography",
    year: "2024",
    description:
      "A close encounter with one of nature's most fascinating creatures, showcasing intricate details and natural beauty.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/SCORPION.jpg",
  },
  {
    id: "g11",
    title: "Avian Grace",
    location: "Bird Photography",
    year: "2024",
    description:
      "Freezing a moment of natural elegance as birds interact with their environment in perfect harmony.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/subirdaa.jpg",
  },
  {
    id: "g12",
    title: "Sun Bird",
    location: "Wildlife Reserve",
    year: "2024",
    description:
      "A vibrant capture of avian beauty, highlighting the brilliant colors and dynamic movement of nature's winged wonders.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/Sun Bird.jpg",
  },
];

export default function Experiments() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryShots.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const activeShot = galleryShots[activeIndex];

  return (
    <section
      id="photography"
      className="relative w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white min-h-screen lg:h-screen"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShot.image}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeShot.image}
              alt={activeShot.title}
              fill
              priority
              sizes="100vw"
              className="object-contain sm:object-cover object-center"
            />
            {/* Edge fading gradients - top and bottom only */}
            <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex h-full min-h-screen lg:h-screen flex-col overflow-hidden gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-4 sm:py-6 lg:py-0">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.35em] lg:tracking-[0.45em] text-[0.55rem] sm:text-[0.6rem] lg:text-xs text-black/60 dark:text-white/60">
            photography
          </p>
          <h2 className="mt-2 sm:mt-3 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-[var(--font-bruno)] text-black dark:text-white">
            Living Archives
          </h2>
          <p className="mt-3 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-black/80 dark:text-white/80 leading-relaxed sm:leading-relaxed">
            A curated collection of moments captured through the lens. Each frame
            represents a unique perspective, technical precision, and the creative
            vision that drives my photographic work.
          </p>
        </div>

        <div className="mt-auto flex items-end justify-start pb-3 sm:pb-6 lg:pb-0">
          <div className="flex flex-col justify-between gap-2 sm:gap-4 lg:gap-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/70 p-2.5 sm:p-5 lg:p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)] w-full max-w-[85%] sm:max-w-sm lg:max-w-md">
            <div>
              <div className="flex items-center justify-between text-[0.5rem] sm:text-[0.6rem] lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black/50 dark:text-white/50">
                <span className="whitespace-nowrap">{activeShot.year}</span>
                <span className="text-right text-[0.5rem] sm:text-[0.6rem] lg:text-xs">{activeShot.location}</span>
              </div>
              <h3 className="mt-1.5 sm:mt-4 lg:mt-5 text-sm sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black dark:text-white">{activeShot.title}</h3>
              <p className="mt-1.5 sm:mt-3 lg:mt-4 text-[0.65rem] sm:text-sm lg:text-base leading-tight sm:leading-relaxed text-black/80 dark:text-white/80 line-clamp-2 sm:line-clamp-none">
                {activeShot.description}
              </p>
            </div>
            <div>
              <p className="text-[0.6rem] sm:text-xs font-mono text-black/60 dark:text-white/60">{activeShot.gear}</p>
              <div className="hidden sm:flex mt-2.5 sm:mt-5 lg:mt-6 flex-wrap gap-1 sm:gap-2 lg:gap-3">
                {galleryShots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-6 w-6 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white ${
                      idx === activeIndex
                        ? "border-black dark:border-white bg-black/10 dark:bg-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
                        : "border-black/30 dark:border-white/30 hover:border-black/60 dark:hover:border-white/60"
                    }`}
                    aria-label={`Show ${shot.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


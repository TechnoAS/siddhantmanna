"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const galleryShots = [
  {
    id: "g1",
    title: "Edge of Monsoon",
    location: "Kaziranga, Assam",
    year: "2024",
    description:
      "A tusker cuts through the mist as monsoon light breaks over the floodplains.",
    gear: "Sony A1 · 200mm · ƒ2.8 · 1/640 · ISO 500",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "g2",
    title: "Nocturne Patrol",
    location: "Ranthambore, Rajasthan",
    year: "2023",
    description:
      "A dominant tigress emerging from the ravines under sodium vapor spill.",
    gear: "Canon R5 · 85mm · ƒ1.2 · 1/200 · ISO 1600",
    image:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "g3",
    title: "Sarus Dawn",
    location: "Keoladeo, Bharatpur",
    year: "2022",
    description:
      "Cranes pairing rituals against evaporating winter fog at daybreak.",
    gear: "Nikon Z8 · 400mm · ƒ4 · 1/1250 · ISO 320",
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e08e4b9db0?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "g4",
    title: "Canopy Vigil",
    location: "Anamalai Tiger Reserve",
    year: "2024",
    description:
      "Lion-tailed macaque scouts the monsoon valley from strangler fig roots.",
    gear: "Fujifilm GFX100S · 120mm · ƒ4 · 1/500 · ISO 800",
    image:
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "g5",
    title: "Desert Mirage",
    location: "Little Rann of Kutch",
    year: "2021",
    description:
      "Wild asses sprint through heat trails reflecting the burnt gold horizon.",
    gear: "Sony A7R V · 70mm · ƒ2.8 · 1/3200 · ISO 200",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "g6",
    title: "Rainforest Chorus",
    location: "Sharavathi Valley",
    year: "2023",
    description:
      "Bioluminescence from night fungi framing a Malabar gliding frog.",
    gear: "Canon R6 II · 35mm · ƒ1.4 · 1/50 · ISO 1250",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
  },
];

const marqueeDuration = 32;

export default function Experiments() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryShots.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const activeShot = galleryShots[activeIndex];
  const marqueeShots = useMemo(
    () =>
      [...galleryShots, ...galleryShots].map((shot, idx) => ({
        ...shot,
        duplicatedId: `${shot.id}-${idx}`,
        baseIndex: idx % galleryShots.length,
      })),
    []
  );

  return (
    <section
      id="photography"
      className="relative w-full overflow-hidden bg-black text-white pt-14 pb-28 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-24 min-h-[75vh] sm:min-h-[80vh] lg:min-h-[640px]"
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
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex h-full flex-col overflow-hidden gap-10 px-4 sm:px-8 lg:px-20">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[0.6rem] sm:text-xs text-white/60">
            photography
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[var(--font-bruno)]">
            Living Archives
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed sm:leading-relaxed">
            A fluid reel of wildlife narratives photographed across India’s
            biomes. Each frame holds field notes, light obsessions, and the craft
            muscle that informs my commissions.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 lg:mt-auto grid min-h-[280px] items-stretch gap-5 sm:gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/20 bg-black/60 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
            <div>
              <div className="flex items-center justify-between text-[0.6rem] sm:text-xs uppercase tracking-[0.25em] text-white/50">
                <span className="whitespace-nowrap">{activeShot.year}</span>
                <span className="text-right">{activeShot.location}</span>
              </div>
              <h3 className="mt-5 text-2xl sm:text-3xl font-semibold">{activeShot.title}</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
                {activeShot.description}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-white/60">{activeShot.gear}</p>
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] text-white/60">
                {galleryShots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-10 w-10 rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      idx === activeIndex
                        ? "border-white bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
                        : "border-white/30 hover:border-white/60"
                    }`}
                    aria-label={`Show ${shot.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/40 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

            <div className="h-full overflow-hidden">
              <motion.div
                className="flex h-full gap-3 sm:gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: marqueeDuration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {marqueeShots.map((shot) => (
                  <button
                    key={shot.duplicatedId}
                    onClick={() => setActiveIndex(shot.baseIndex)}
                    className="group relative h-full min-h-[220px] sm:min-h-[240px] w-40 sm:w-48 overflow-hidden rounded-2xl border border-white/15 bg-white/5"
                    aria-label={`Open ${shot.title}`}
                  >
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      sizes="192px"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute inset-x-3 bottom-3 text-left text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                        {shot.location}
                      </p>
                      <p className="text-base font-semibold">{shot.title}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


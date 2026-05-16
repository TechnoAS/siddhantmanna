"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  GiEagleEmblem,
  GiHummingbird,
  GiOwl,
  GiParrotHead,
  GiFlamingo,
  GiSparrow,
  GiDove,
  GiHawkEmblem,
  GiRaven,
  GiDuck,
} from "react-icons/gi";

const galleryShots = [
  {
    id: "g1",
    title: "Asian Green Bee Eater",
    location: "Paschim Medinipur, West Bengal",
    year: "2024",
    description:
      "A vibrant capture of the Asian Green Bee Eater in its natural habitat, showcasing the brilliant emerald plumage and graceful hunting posture of this aerial acrobat.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/asian-green-bee-eater-paschim-medinipur-west-bengal.webp",
    iconIndex: 1, // Hummingbird - for small, agile birds
  },
  {
    id: "g2",
    title: "Hoopoe Portrait",
    location: "West Bengal",
    year: "2024",
    description:
      "An intimate portrait of the distinctive Hoopoe, capturing its unique crown of feathers and intricate patterns that make it one of nature's most elegant birds.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/hoopie-west-bengal.webp",
    iconIndex: 4, // Flamingo - for distinctive, elegant birds
  },
  {
    id: "g3",
    title: "Kalimpong Landscape",
    location: "Kalimpong, West Bengal",
    year: "2024",
    description:
      "A breathtaking vista of Kalimpong's rolling hills and misty valleys, capturing the serene beauty of the Eastern Himalayas in perfect harmony.",
    gear: "Nikon D500 · 24-70mm · ƒ8",
    image: "/images/optimized/landscape-kalingpong.webp",
    iconIndex: 6, // Dove - for peaceful landscapes
  },
  {
    id: "g4",
    title: "Tista River Valley",
    location: "Sikkim Valley",
    year: "2024",
    description:
      "The majestic Tista River winding through the Sikkim Valley, framed by lush mountains and dramatic cloud formations that define this Himalayan region.",
    gear: "Nikon D500 · 24-70mm · ƒ8",
    image: "/images/optimized/landscape-tista-river-and-sikkim-vally.webp",
    iconIndex: 6, // Dove - for peaceful landscapes
  },
  {
    id: "g5",
    title: "Prenia Portrait",
    location: "West Bengal",
    year: "2024",
    description:
      "A compelling portrait session capturing emotion and character through careful composition, natural lighting, and authentic expression.",
    gear: "Nikon D500 · 85mm · ƒ2.8",
    image: "/images/optimized/prenia-west-bengal.webp",
    iconIndex: 3, // Parrot - for colorful portraits
  },
  {
    id: "g6",
    title: "Purple Sunbird",
    location: "West Bengal",
    year: "2024",
    description:
      "The iridescent beauty of the Purple Sunbird captured in stunning detail, showcasing its vibrant plumage that shimmers like liquid amethyst in the sunlight.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/purple-snbird-westbengal.webp",
    iconIndex: 1, // Hummingbird - for sunbirds
  },
  {
    id: "g7",
    title: "Scaly-breasted Munia",
    location: "West Bengal",
    year: "2024",
    description:
      "A detailed study of the Scaly-breasted Munia, highlighting the intricate scale-like patterns on its breast and the delicate beauty of this small finch.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/scally-brested-munia.webp",
    iconIndex: 5, // Sparrow - for small finches
  },
  {
    id: "g8",
    title: "Scorpion in Motion",
    location: "West Bengal",
    year: "2024",
    description:
      "An experimental slow-shutter capture revealing the scorpion's movement through time, creating an ethereal trail that showcases both technical skill and creative vision.",
    gear: "Nikon D500 · 105mm Macro · ƒ11 · 1/4s",
    image: "/images/optimized/scorpion-slow-shutter.webp",
    iconIndex: 9, // Duck - for unique/experimental shots
  },
  {
    id: "g9",
    title: "Shrike Perched",
    location: "West Bengal",
    year: "2024",
    description:
      "The formidable Shrike captured in its characteristic hunting pose, showcasing the fierce beauty and predatory elegance of this small but powerful bird of prey.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/shrike.webp",
    iconIndex: 7, // Hawk - for birds of prey
  },
  {
    id: "g10",
    title: "Spotted Owl",
    location: "Paschim Medinipur, West Bengal",
    year: "2024",
    description:
      "The enigmatic Spotted Owl in its natural habitat, with piercing eyes and intricate feather patterns that speak to the mystery and wisdom of nocturnal hunters.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/spotted-owl-paschimmedinipur-west-bengal.webp",
    iconIndex: 2, // Owl - perfect match
  },
  {
    id: "g11",
    title: "Sun Bird",
    location: "West Bengal",
    year: "2024",
    description:
      "A radiant capture of the Sun Bird, its brilliant colors reflecting the warmth of daylight as it hovers near nectar-rich blossoms in perfect balance.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/sun-bird.webp",
    iconIndex: 1, // Hummingbird - for sunbirds
  },
  {
    id: "g12",
    title: "Sunbird in Bloom",
    location: "West Bengal",
    year: "2024",
    description:
      "The delicate Sunbird suspended in mid-air, its vibrant plumage creating a living jewel against the soft backdrop of tropical flowers and foliage.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/sunbird-west-bengal.webp",
    iconIndex: 1, // Hummingbird - for sunbirds
  },
  {
    id: "g13",
    title: "Taiga Flycatcher",
    location: "West Bengal",
    year: "2024",
    description:
      "A migratory beauty, the Taiga Flycatcher captured during its seasonal journey, showcasing the subtle elegance and refined colors of this forest-dwelling songbird.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/taiga-flycatcher-westbengal.webp",
    iconIndex: 5, // Sparrow - for small songbirds
  },
  {
    id: "g14",
    title: "Whiskered Yuhina",
    location: "Kalimpong, West Bengal",
    year: "2024",
    description:
      "The charming Whiskered Yuhina in the misty forests of Kalimpong, its distinctive facial markings and social nature captured in a moment of natural behavior.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/optimized/whiskered-yuhina-kalimpong.webp",
    iconIndex: 5, // Sparrow - for small social birds
  },
];

const birdIcons = [
  { icon: GiEagleEmblem, name: "Eagle" },
  { icon: GiHummingbird, name: "Hummingbird" },
  { icon: GiOwl, name: "Owl" },
  { icon: GiParrotHead, name: "Parrot" },
  { icon: GiFlamingo, name: "Flamingo" },
  { icon: GiSparrow, name: "Sparrow" },
  { icon: GiDove, name: "Dove" },
  { icon: GiHawkEmblem, name: "Hawk" },
  { icon: GiRaven, name: "Raven" },
  { icon: GiDuck, name: "Duck" },
];

// Dynamic color palette with light, vibrant colors
const dynamicColors = [
  "rgba(255, 182, 193, 0.3)", // Light Pink
  "rgba(173, 216, 230, 0.3)", // Light Blue
  "rgba(255, 228, 196, 0.3)", // Bisque
  "rgba(221, 160, 221, 0.3)", // Plum
  "rgba(152, 251, 152, 0.3)", // Pale Green
  "rgba(255, 218, 185, 0.3)", // Peach
  "rgba(176, 224, 230, 0.3)", // Powder Blue
  "rgba(255, 192, 203, 0.3)", // Pink
  "rgba(230, 230, 250, 0.3)", // Lavender
  "rgba(255, 250, 205, 0.3)", // Lemon Chiffon
];

export default function Experiments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [birdColors, setBirdColors] = useState<number[]>([]);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isPaused, setIsPaused] = useState(false);
  const carouselTimerRef = useRef<NodeJS.Timeout | null>(null);
  const imageCacheRef = useRef<Set<string>>(new Set());

  // Preload all images
  useEffect(() => {
    galleryShots.forEach((shot) => {
      if (!imageCacheRef.current.has(shot.image)) {
        const img = new window.Image();
        img.src = shot.image;
        imageCacheRef.current.add(shot.image);
      }
    });
  }, []);

  // Carousel auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const startCarousel = () => {
      // Clear any existing timer
      if (carouselTimerRef.current) {
        clearInterval(carouselTimerRef.current);
      }

      // Start new timer
      carouselTimerRef.current = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % galleryShots.length);
      }, 4000); // 4 seconds display time
    };

    startCarousel();

    return () => {
      if (carouselTimerRef.current) {
        clearInterval(carouselTimerRef.current);
      }
    };
  }, [isPaused]);

  const handleIndexChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);

    // Preload adjacent images
    const nextIndex = (newIndex + 1) % galleryShots.length;
    const prevIndex = (newIndex - 1 + galleryShots.length) % galleryShots.length;
    [nextIndex, prevIndex].forEach((idx) => {
      const shot = galleryShots[idx];
      if (!imageCacheRef.current.has(shot.image)) {
        const img = new window.Image();
        img.src = shot.image;
        imageCacheRef.current.add(shot.image);
      }
    });

    // Restart carousel timer after manual interaction
    if (!isPaused && carouselTimerRef.current) {
      clearInterval(carouselTimerRef.current);
    }
    if (!isPaused) {
      carouselTimerRef.current = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % galleryShots.length);
      }, 4000);
    }
  };

  // Initialize and animate bird colors with smooth transitions
  useEffect(() => {
    // Initialize random colors for each bird
    const initialColors = birdIcons.map(() => Math.floor(Math.random() * dynamicColors.length));
    setBirdColors(initialColors);

    // Animate colors periodically with smooth transitions
    const colorTimer = setInterval(() => {
      setBirdColors((prev) =>
        prev.map(() => Math.floor(Math.random() * dynamicColors.length))
      );
    }, 3500); // Smooth interval for color transitions

    return () => clearInterval(colorTimer);
  }, []);

  // Preload next image when active index changes
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % galleryShots.length;
    const nextShot = galleryShots[nextIndex];
    if (!imageCacheRef.current.has(nextShot.image)) {
      const img = new window.Image();
      img.src = nextShot.image;
      imageCacheRef.current.add(nextShot.image);
    }
  }, [activeIndex]);

  const activeShot = galleryShots[activeIndex];

  return (
    <section
      id="photography"
      className="relative w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white min-h-screen lg:h-screen"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={activeShot.image}
            initial={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(4px) brightness(0.9)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px) brightness(1)",
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(3px) brightness(0.95)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              opacity: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              },
              scale: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              },
              filter: {
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Image
                src={activeShot.image}
                alt={activeShot.title}
                fill
                priority
                sizes="100vw"
                className="object-contain sm:object-cover object-center"
                quality={95}
                loading="eager"
              />
            </motion.div>

            {/* Enhanced edge fading gradients with smooth transitions */}
            <motion.div
              className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />

            {/* Subtle overlay for depth */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5 dark:to-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex h-full min-h-screen lg:h-screen flex-col overflow-hidden gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-4 sm:py-6 lg:py-0">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.35em] lg:tracking-[0.45em] text-[0.55rem] sm:text-[0.6rem] lg:text-xs text-black/60 dark:text-white/60">
            photography
          </p>
          <h2 className="mt-2 sm:mt-3 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white">
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="flex items-center justify-between text-[0.5rem] sm:text-[0.6rem] lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black/50 dark:text-white/50">
                  <motion.span
                    className="whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {activeShot.year}
                  </motion.span>
                  <motion.span
                    className="text-right text-[0.5rem] sm:text-[0.6rem] lg:text-xs"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {activeShot.location}
                  </motion.span>
                </div>
                <motion.h3
                  className="mt-1.5 sm:mt-4 lg:mt-5 text-sm sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black dark:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  {activeShot.title}
                </motion.h3>
                <motion.p
                  className="mt-1.5 sm:mt-3 lg:mt-4 text-[0.65rem] sm:text-sm lg:text-base leading-tight sm:leading-relaxed text-black/80 dark:text-white/80 line-clamp-2 sm:line-clamp-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  {activeShot.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <div>
              <p className="text-[0.6rem] sm:text-xs font-mono text-black/60 dark:text-white/60">{activeShot.gear}</p>
              <div className="hidden sm:flex mt-2.5 sm:mt-5 lg:mt-6 flex-wrap gap-1 sm:gap-2 lg:gap-3">
                {galleryShots.map((shot, idx) => {
                  const birdIndex = shot.iconIndex !== undefined ? shot.iconIndex : (idx % birdIcons.length);
                  const BirdIcon = birdIcons[birdIndex].icon;
                  const colorIndex = birdColors[birdIndex] ?? birdIndex;
                  const bgColor = dynamicColors[colorIndex];
                  const isActive = idx === activeIndex;

                  return (
                    <motion.button
                      key={shot.id}
                      onClick={() => handleIndexChange(idx)}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isActive ? bgColor : "rgba(0, 0, 0, 0)",
                        borderColor: isActive
                          ? "rgba(0, 0, 0, 1)"
                          : "rgba(0, 0, 0, 0.2)",
                        rotate: isActive ? [0, -5, 5, -5, 0] : 0,
                      }}
                      whileHover={{
                        scale: isActive ? 1.2 : 1.1,
                        rotate: isActive ? 0 : [0, -8, 8, -8, 0],
                        transition: {
                          scale: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          rotate: {
                            type: "keyframes",
                            duration: 0.6,
                            ease: "easeInOut",
                          },
                        },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        },
                      }}
                      transition={{
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        },
                        backgroundColor: {
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        borderColor: {
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        rotate: {
                          type: "keyframes",
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                      }}
                      className={`relative h-6 w-6 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full border-2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white overflow-hidden backdrop-blur-sm ${isActive
                          ? "border-black dark:border-white shadow-xl dark:shadow-white/20"
                          : "border-black/30 dark:border-white/30 hover:border-black/60 dark:hover:border-white/60"
                        }`}
                      aria-label={`Show ${shot.title}`}
                    >
                      {/* Animated background with smooth color transition */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          backgroundColor: isActive ? bgColor : "transparent",
                          scale: isActive ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          backgroundColor: {
                            duration: 1.2,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          scale: {
                            duration: 2,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                          },
                        }}
                      />

                      {/* Icon with smooth transitions */}
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{
                          scale: {
                            duration: 1.5,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                          },
                          rotate: {
                            type: "keyframes",
                            duration: 2,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                          },
                        }}
                        className="relative z-10"
                      >
                        <BirdIcon
                          className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-all duration-500 ${isActive
                              ? "text-black/90 dark:text-white/95 drop-shadow-sm"
                              : "text-black/50 dark:text-white/50"
                            }`}
                        />
                      </motion.div>

                      {/* Enhanced glow effect for active state */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          animate={{
                            boxShadow: [
                              `0 0 12px ${bgColor}, 0 0 24px ${bgColor}, inset 0 0 8px ${bgColor}`,
                              `0 0 20px ${bgColor}, 0 0 40px ${bgColor}, inset 0 0 12px ${bgColor}`,
                              `0 0 12px ${bgColor}, 0 0 24px ${bgColor}, inset 0 0 8px ${bgColor}`,
                            ],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}

                      {/* Subtle shimmer effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{
                            background: `linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)`,
                          }}
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


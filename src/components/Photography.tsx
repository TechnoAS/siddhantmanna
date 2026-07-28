"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface PhotoItem {
  id: number;
  title: string;
  category: string;
  aspect: string;
}

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Sample wildlife photography data
  const photos: PhotoItem[] = [
    { id: 1, title: "Golden Hour Hunt", category: "predators", aspect: "landscape" },
    { id: 2, title: "Forest Canopy", category: "birds", aspect: "portrait" },
    { id: 3, title: "Savanna Grace", category: "mammals", aspect: "landscape" },
    { id: 4, title: "Wing Span", category: "birds", aspect: "square" },
    { id: 5, title: "Desert Explorer", category: "reptiles", aspect: "portrait" },
    { id: 6, title: "Water's Edge", category: "mammals", aspect: "landscape" },
  ];

  const categories = ["all", "mammals", "birds", "predators", "reptiles"];

  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="photography"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden z-20 isolate bg-background"
    >
      <div className="container mx-auto max-w-7xl w-full flex flex-col gap-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center shrink-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-foreground">
            Wildlife Photography
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
            Capturing the beauty and majesty of nature through the lens
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize border ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-muted/30 text-foreground/60 border-border/50 hover:border-foreground/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl bg-muted/30 border border-border/50 hover:border-foreground/30 transition-all duration-500 cursor-pointer hover:shadow-xl ${
                photo.aspect === "landscape" ? "lg:col-span-1" : ""
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Photo Placeholder with Gradient */}
              <div
                className={`relative w-full overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 ${
                  photo.aspect === "landscape"
                    ? "aspect-video"
                    : photo.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-square"
                }`}
              >
                {/* Placeholder image - would be replaced with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-center px-4">
                  <div>
                    <div className="text-sm font-medium mb-2">{photo.title}</div>
                    <div className="text-xs opacity-70">Wildlife Photo</div>
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 sm:p-6">
                  <h3 className="text-foreground text-sm sm:text-base font-semibold text-center">
                    {photo.title}
                  </h3>
                  <p className="text-foreground/70 text-xs sm:text-sm mt-1 capitalize">
                    {photo.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-foreground/60 mb-4 text-sm">
            Explore more wildlife photography on my gallery
          </p>
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}

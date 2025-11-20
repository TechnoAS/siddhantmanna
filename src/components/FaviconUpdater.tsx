"use client";

import { useEffect } from "react";

export default function FaviconUpdater() {
  useEffect(() => {
    const updateFavicon = () => {
      // Check if dark mode is active
      const isDark = document.documentElement.classList.contains("dark");
      
      // Light mode → iconLightMode.png
      // Dark mode → iconDarkMode.png
      const iconPath = isDark ? "/iconDarkMode.png" : "/iconLightMode.png";
      
      // Remove all existing favicon links
      const existingLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
      existingLinks.forEach(link => link.remove());
      
      // Create new favicon link
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = iconPath;
      document.head.appendChild(link);
    };

    // Initial update
    updateFavicon();

    // Watch for class changes on html element (when theme toggles)
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen to custom event for theme changes
    window.addEventListener("themechange", updateFavicon);

    return () => {
      observer.disconnect();
      window.removeEventListener("themechange", updateFavicon);
    };
  }, []);

  return null;
}


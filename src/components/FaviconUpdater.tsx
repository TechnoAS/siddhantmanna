"use client";

import { useEffect } from "react";

export default function FaviconUpdater() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const updateFavicon = () => {
      try {
        // Use system preference for favicon, consistent across all devices
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = prefersDark;

        const lightIcon = "/iconLightMode.ico";
        const darkIcon = "/iconDark.ico";

        // Remove all existing favicon links (including those from Next.js metadata)
        const existingFavicons = document.querySelectorAll(
          "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
        );
        existingFavicons.forEach((link) => {
          const rel = link.getAttribute("rel");
          if (rel === "icon" || rel === "shortcut icon") {
            link.remove();
          }
        });

        // Create new favicon link with proper attributes
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/x-icon";
        favicon.href = isDark ? darkIcon : lightIcon;
        
        // Also add shortcut icon for better browser compatibility
        const shortcutIcon = document.createElement("link");
        shortcutIcon.rel = "shortcut icon";
        shortcutIcon.type = "image/x-icon";
        shortcutIcon.href = isDark ? darkIcon : lightIcon;
        
        if (document.head) {
          document.head.appendChild(favicon);
          document.head.appendChild(shortcutIcon);
        }
      } catch (error) {
        console.error("Favicon update error:", error);
      }
    };

    // Initial update - run immediately and also after a short delay
    updateFavicon();
    const timeoutId = setTimeout(updateFavicon, 100);

    // System theme change
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      updateFavicon();
    };
    mq.addEventListener("change", handleMediaChange);

    // Also listen for resize to handle mobile/desktop switching
    const handleResize = () => {
      updateFavicon();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      mq.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}


"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Enhanced smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Add smooth scroll to all anchor links
    document.addEventListener('click', handleSmoothScroll, true);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.removeEventListener('click', handleSmoothScroll, true);
    };
  }, [pathname]);

  useEffect(() => {
    // Add momentum scrolling for better mobile experience
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // Add momentum effect
          if (Math.abs(scrollTop - lastScrollTop) > 5) {
            document.documentElement.style.setProperty(
              '--scroll-velocity',
              `${Math.min(Math.abs(scrollTop - lastScrollTop) / 10, 1)}`
            );
          }
          
          lastScrollTop = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}


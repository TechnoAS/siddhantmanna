"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 border-t border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto max-w-7xl w-full py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-lg font-semibold text-foreground">Siddhant Manna</p>
              <p className="text-sm text-foreground/50 mt-1">
                Designing & building impactful web experiences.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-foreground/50">
              <Link
                href="mailto:official.siddhantmanna@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                Email
              </Link>
              <Link
                href="https://github.com/TechnoAS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/siddhant-manna/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <Link href="#home" className="hover:text-foreground transition-colors">
                Back to top
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-foreground/40">
            <p>© {new Date().getFullYear()} Siddhant Manna. All rights reserved.</p>
            <p>Crafted with passion and precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

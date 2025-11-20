"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-36 lg:pb-24 relative overflow-hidden z-40"
    >
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[var(--font-bruno)]">
              <span className="text-foreground">Let's talk</span>
            </h2>
            <p className="text-lg text-foreground/40 mb-8">
              New projects, freelance inquiry or even a coffee.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/50 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/50 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/50 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all resize-none"
                placeholder="Your message"
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto px-8 py-5 text-base font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
              <a
                href="https://www.linkedin.com/in/siddhant-manna/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/TechnoAS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:official.siddhantmanna@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

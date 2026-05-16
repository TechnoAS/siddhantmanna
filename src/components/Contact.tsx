"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { PERSONAL, SOCIAL } from "@/lib/constants";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    try {
      // Formspree endpoint — uses NEXT_PUBLIC_FORMSPREE_ID from environment
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Let&apos;s talk</span>
            </h2>
            <p className="text-lg text-foreground/40 mb-8">
              New projects, freelance inquiry or even a coffee.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/50 mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/50 mb-2">
                  E-mail <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
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
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all resize-none"
                placeholder="Your message"
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3"
              >
                <FaCheck className="h-4 w-4 shrink-0" />
                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
              >
                <FaExclamationTriangle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto px-8 py-5 text-base font-medium bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Social Links */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
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

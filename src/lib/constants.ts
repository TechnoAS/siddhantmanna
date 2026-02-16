// Centralized personal data — update here, reflected everywhere
export const PERSONAL = {
  name: "Siddhant Manna",
  jobTitle: "Full Stack Developer",
  email: "official.siddhantmanna@gmail.com",
  description:
    "Full stack developer and final-year IT student specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Also a passionate wildlife photographer.",
  university: "Meghnad Saha Institute of Technology",
  resumePath: "/siddhant-manna-resume.pdf",
  tagline: "Designing & building impactful web experiences.",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/siddhant-manna/",
  github: "https://github.com/TechnoAS",
  githubUsername: "TechnoAS",
} as const;

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://siddhantmanna.dev",
  name: `${PERSONAL.name} - ${PERSONAL.jobTitle}`,
  ogImage: "/portfolio.png",
} as const;

// Roles that cycle in the hero typing animation
export const HERO_ROLES = [
  "Full Stack Developer",
  "Wildlife Photographer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
] as const;

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Firebase",
  "Tailwind CSS",
  "Framer Motion",
  "Web Development",
  "Full Stack Development",
  "Software Engineering",
] as const;

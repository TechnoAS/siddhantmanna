"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb, 
  SiFirebase, 
  SiRedux,
  SiVite,
  SiAuth0
} from "react-icons/si";
import { useEffect, useState } from "react";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface TechIcon {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface FeaturedProject {
  name: string;
  description: string;
  homepage: string;
  github?: string;
  technologies: TechIcon[];
  featured: boolean;
}

// Technology icons mapping
const techIcons: Record<string, TechIcon> = {
  React: { name: "React", icon: SiReact, color: "#61dafb" },
  Vite: { name: "Vite", icon: SiVite, color: "#646cff" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  "Node.js": { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  MongoDB: { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  Firebase: { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  OAuth: { name: "OAuth", icon: SiAuth0, color: "#eb5424" },
  Redux: { name: "Redux", icon: SiRedux, color: "#764abc" },
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Featured project - Architecx
  const featuredProject: FeaturedProject = {
    name: "Architecx",
    description: "An educational tool that bridges the gap between system design theory and practice, enabling users to visualize architectures interactively and learn through hands-on diagram creation.",
    homepage: "https://www.architecx.in",
    technologies: [
      techIcons.React,
      techIcons.Vite,
      techIcons.JavaScript,
      techIcons["Node.js"],
      techIcons.MongoDB,
      techIcons.Firebase,
      techIcons.OAuth,
      techIcons.Redux,
    ],
    featured: true,
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/TechnoAS/repos?sort=updated&per_page=5&type=all");
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data: GitHubRepo[] = await response.json();
        const filteredRepos = data
          .filter((repo) => 
            !repo.name.includes("fork") && 
            repo.description && 
            repo.name.toLowerCase() !== "architecx" &&
            !repo.name.toLowerCase().includes("portfolio")
          )
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 3);
        
        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      Python: "#3776ab",
      Java: "#ed8b00",
      "C++": "#00599c",
      React: "#61dafb",
      "Next.js": "#000000",
      HTML: "#e34f26",
      CSS: "#1572b6",
      Vue: "#4fc08d",
      Go: "#00add8",
      Rust: "#000000",
    };
    return colors[language || ""] || "#6b7280";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-32 lg:pb-24 flex items-center justify-center relative overflow-hidden z-20 isolate bg-background"
      >
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="mt-4 text-foreground/60">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-32 lg:pb-24 flex items-center justify-center relative overflow-hidden z-20 isolate bg-background"
      >
        <div className="text-center">
          <p className="text-foreground/60">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-32 lg:pb-24 relative overflow-hidden z-20 isolate bg-background"
    >
      <div className="container mx-auto max-w-7xl w-full flex flex-col gap-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 text-center flex-shrink-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-[var(--font-bruno)]">
            <span className="text-foreground">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/40 max-w-2xl mx-auto">
            Featured work and open-source contributions
          </p>
        </motion.div>

        {/* Content Container - Scrollable */}
        <div className="space-y-8">
          {/* Featured Project - Architecx */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
          <Link
            href={featuredProject.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 border border-border/50 hover:border-foreground/30 transition-all duration-500 hover:shadow-2xl">
              <div className="p-3 sm:p-4 md:p-8">
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                  <div className="flex-1">
                    <div className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 mb-1 sm:mb-2 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                      Featured
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2 font-[var(--font-bruno)] group-hover:text-foreground/80 transition-colors">
                      {featuredProject.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/60 leading-relaxed max-w-3xl mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="ml-2 sm:ml-4 flex-shrink-0 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                      <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4 text-foreground/60" />
                    </div>
                  </div>
                </div>

                {/* Tech icons - hidden on mobile, shown on larger screens */}
                <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-4">
                  {featuredProject.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg text-foreground/70 hover:border-foreground/50 transition-all duration-300 group/tech"
                      >
                        <div style={{ color: tech.color }}>
                          <Icon 
                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover/tech:scale-110 transition-transform"
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                  <span className="font-medium">Visit Project</span>
                  <FaArrowRight className="h-3 w-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative projects-container">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group project-card-alternate project-card-${index}`}
              data-card-index={index}
            >
              <div className="h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-3 sm:p-4 md:p-5 hover:border-foreground/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-1.5 font-[var(--font-bruno)] truncate group-hover:text-foreground/80 transition-colors">
                      {repo.name}
                    </h3>
                    {/* Language - hidden on mobile */}
                    {repo.language && (
                      <div className="hidden sm:flex items-center gap-2 mb-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="text-xs text-foreground/50">{repo.language}</span>
                      </div>
                    )}
                  </div>
                  {/* GitHub icon - hidden on mobile */}
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block text-foreground/30 hover:text-foreground transition-colors ml-2 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="h-4 w-4" />
                  </Link>
                </div>

                {/* Description - compact on mobile */}
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-2 sm:mb-3 flex-1 line-clamp-1 sm:line-clamp-2">
                  {repo.description || "No description available"}
                </p>

                {/* Topics/Tags - hidden on mobile */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="hidden sm:flex flex-wrap gap-1.5 mb-3">
                    {repo.topics.slice(0, 2).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 text-xs font-medium bg-muted/50 border border-border/30 rounded-md text-foreground/50"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 2 && (
                      <span className="px-2 py-0.5 text-xs text-foreground/40">
                        +{repo.topics.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* Footer Stats - hidden on mobile */}
                <div className="hidden sm:flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex items-center gap-3 text-xs text-foreground/40">
                    <div className="flex items-center gap-1">
                      <FaStar className="h-3 w-3" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="h-3 w-3" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <div className="text-xs text-foreground/40">
                    {formatDate(repo.updated_at)}
                  </div>
                </div>

                {/* Links - hidden on mobile */}
                <div className="hidden sm:flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground transition-colors group/link"
                  >
                    <FaGithub className="h-3 w-3" />
                    <span>Code</span>
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground transition-colors group/link ml-auto"
                    >
                      <FaExternalLinkAlt className="h-3 w-3" />
                      <span>Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          {/* View All Link - hidden on mobile */}
          {repos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block mt-4 sm:mt-6 text-center"
            >
              <Link
                href="https://github.com/TechnoAS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-foreground/60 hover:text-foreground border border-border/50 hover:border-foreground/30 rounded-lg transition-all duration-300 group"
              >
                <span>View all repositories</span>
                <FaExternalLinkAlt className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


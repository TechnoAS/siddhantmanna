import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Experience from "@/components/Experience";
import AnimatedStats from "@/components/AnimatedStats";
import Testimonials from "@/components/Testimonials";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PERSONAL, SOCIAL, SITE, SKILLS } from "@/lib/constants";
import { fetchGitHubRepos } from "@/lib/github";

const siteUrl = SITE.url;

export default async function Home() {
  // Server-side data fetching with ISR (revalidates every hour)
  const repos = await fetchGitHubRepos();

  // JSON-LD Structured Data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL.name,
    jobTitle: PERSONAL.jobTitle,
    description: PERSONAL.description,
    url: siteUrl,
    image: `${siteUrl}${SITE.ogImage}`,
    email: PERSONAL.email,
    sameAs: [
      SOCIAL.linkedin,
      SOCIAL.github,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PERSONAL.university,
    },
    knowsAbout: [...SKILLS],
    hasOccupation: {
      "@type": "Occupation",
      name: PERSONAL.jobTitle,
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${PERSONAL.name} - ${PERSONAL.jobTitle} Portfolio`,
    url: siteUrl,
    description: "Professional portfolio showcasing projects, skills, and experience as a full stack developer",
    author: { "@type": "Person", name: PERSONAL.name },
    publisher: { "@type": "Person", name: PERSONAL.name },
    inLanguage: "en-US",
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/#portfolio`,
    name: `${PERSONAL.name} Portfolio`,
    description: "Professional portfolio website showcasing full stack development projects and skills",
    creator: { "@type": "Person", name: PERSONAL.name },
    about: { "@type": "Thing", name: "Web Development" },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <main id="main-content" className="min-h-screen pb-20 sm:pb-24 lg:pb-0 relative">
        <SmoothScroll />
        <Header />
        <ErrorBoundary><Hero /></ErrorBoundary>
        <ErrorBoundary><About /></ErrorBoundary>
        <ErrorBoundary><AnimatedStats /></ErrorBoundary>
        <ErrorBoundary><Experience /></ErrorBoundary>
        <ErrorBoundary><Projects repos={repos} /></ErrorBoundary>
        <ErrorBoundary><Experiments /></ErrorBoundary>
        <ErrorBoundary><Testimonials /></ErrorBoundary>
        <ErrorBoundary><Contact /></ErrorBoundary>
        <Footer />
        <MobileNav />
      </main>
    </>
  );
}

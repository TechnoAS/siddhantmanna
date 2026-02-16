import type { Metadata } from "next";
import { Bruno_Ace_SC } from "next/font/google";
// Import global styles (Next.js global CSS); TypeScript may complain about side-effect CSS imports
// @ts-ignore: Module declaration for '*.css' is missing
import "./globals.css";
import FaviconUpdater from "@/components/FaviconUpdater";
import Loading from "@/components/Loading";
import ScrollIndicator from "@/components/ScrollIndicator";
import SkipToContent from "@/components/SkipToContent";

import { Analytics } from "@vercel/analytics/next";
import { PERSONAL, SOCIAL, SITE } from "@/lib/constants";

const brunoAceSC = Bruno_Ace_SC({
  variable: "--font-bruno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = SITE.url;
const siteName = SITE.name;
const siteDescription = `Professional portfolio of ${PERSONAL.name}, a full stack developer and final-year IT student specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Explore innovative projects, technical skills, and development experience.`;
const authorName = PERSONAL.name;
const authorLinkedIn = SOCIAL.linkedin;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Portfolio`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Siddhant Manna",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Software Engineer",
    "IT Student",
    "Meghnad Saha Institute of Technology",
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
    "Software Development",
    "Wildlife Photographer",
  ],
  authors: [
    {
      name: authorName,
      url: authorLinkedIn,
    },
  ],
  creator: authorName,
  publisher: authorName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/iconLightMode.ico", type: "image/x-icon" },
      { url: "/iconDark.ico", type: "image/x-icon", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/iconLightMode.ico",
    apple: "/iconLightMode.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Professional Portfolio`,
    description: siteDescription,
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} - ${PERSONAL.jobTitle} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Professional Portfolio`,
    description: siteDescription,
    images: [SITE.ogImage],
    creator: `@${PERSONAL.name.replace(/\s+/g, "").toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Portfolio",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  verification: {
    // Add your verification codes when you register:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "theme-color": "#0C2B4E",
    "color-scheme": "dark light",
    "google": "nositelinkssearchbox",
    "msapplication-TileColor": "#0C2B4E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${brunoAceSC.variable} antialiased`}
      >
        <SkipToContent />
        <Loading />
        <ScrollIndicator />
        <FaviconUpdater />

        {/* Noise texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

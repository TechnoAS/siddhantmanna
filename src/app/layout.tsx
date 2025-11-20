import type { Metadata } from "next";
import { Bruno_Ace_SC } from "next/font/google";
import "./globals.css";
import FaviconUpdater from "@/components/FaviconUpdater";
import Loading from "@/components/Loading";
import ScrollIndicator from "@/components/ScrollIndicator";

const brunoAceSC = Bruno_Ace_SC({
  variable: "--font-bruno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer | Siddhant Manna",
  description: "Professional portfolio of Siddhant Manna, a full stack developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Portfolio", "Siddhant Manna"],
  authors: [{ name: "Siddhant Manna" }],
  creator: "Siddhant Manna",
  icons: {
    icon: "/iconLightMode.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio | Full Stack Developer | Siddhant Manna",
    description: "Professional portfolio showcasing projects, skills, and experience as a full stack developer",
    siteName: "Siddhant Manna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full Stack Developer | Siddhant Manna",
    description: "Professional portfolio showcasing projects, skills, and experience",
    creator: "@yourusername",
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
        <Loading />
        <ScrollIndicator />
        <FaviconUpdater />
        {children}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 sm:pb-24 lg:pb-0 relative">
      <SmoothScroll />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiments />
      <Contact />
      <Footer />
      <MobileNav />
    </main>
  );
}

import CinematicIntro from "@/components/CinematicIntro";
import HeroSection from "@/components/HeroSection";
import StatsRibbon from "@/components/StatsRibbon";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import WhySponsorUs from "@/components/WhySponsorUs";
import { Sponsors } from "@/components/Sponsors";
import { Testimonials } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-[#07131F] text-[#AEBCC7] selection:bg-[#D6B56C]/30 selection:text-[#F4F1E8] overflow-x-hidden">
      <CinematicIntro />
      <HeroSection />
      <StatsRibbon />
      <AboutSection />
      <HowItWorks />
      <Projects />
      <WhySponsorUs />
      <Sponsors />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

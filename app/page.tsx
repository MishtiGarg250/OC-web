import CinematicIntro from "@/components/CinematicIntro";
import HeroSection from "@/components/HeroSection";
import StatsRibbon from "@/components/StatsRibbon";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import GlobalJourney from "@/components/GlobalJourney";
import Projects from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-[#07131F] text-[#AEBCC7] selection:bg-[#B8E5D5]/30 selection:text-[#F4F1E8] overflow-x-hidden">
      <CinematicIntro />
      <GlobalJourney />
      <HeroSection />
      <StatsRibbon />
      <AboutSection />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

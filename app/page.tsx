import LoadingOverlay from "@/components/LoadingOverlay";
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
    <main className="min-h-screen antialiased bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.24),rgba(18,12,27,0.92)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#130b26_0%,#0d071f_55%,#090512_100%)] overflow-x-hidden">
      <LoadingOverlay />
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

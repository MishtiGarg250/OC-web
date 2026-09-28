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
    <main className="min-h-screen antialiased bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.25),rgba(41,25,32,0.95)_40%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] overflow-x-hidden">
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

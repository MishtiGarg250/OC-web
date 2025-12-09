import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhySponsorUs from "@/components/WhySponsorUs";
import { Testimonials } from "@/components/Testimonials";
import { Sponsors } from "@/components/Sponsors";
import Projects from "@/components/Projects";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.24),rgba(18,12,27,0.92)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#130b26_0%,#0d071f_55%,#090512_100%)]">
      <LoadingOverlay />
      <HeroSection />
      <Sponsors />
      <HowItWorks />
      <Projects />
      <WhySponsorUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

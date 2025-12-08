
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhySponsorUs from "@/components/WhySponsorUs";
import { Testimonials } from "@/components/Testimonials";
import { Sponsors } from "@/components/Sponsors";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased">
      <HeroSection />
      <Sponsors/>
      <HowItWorks />
      <Projects />
      <WhySponsorUs />
      <Footer />
    </main>
  );
}
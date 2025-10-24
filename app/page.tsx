
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhySponsorUs from "@/components/WhySponsorUs";
import PastEvents from "@/components/PastEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] antialiased">
      <HeroSection />
      <HowItWorks />
      <WhySponsorUs />
      <PastEvents />
      <Footer />
    </main>
  );
}
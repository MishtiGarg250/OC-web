"use client";
import { useEffect, useRef, useState } from "react";
import DownloadBrochureButton from "./DownloadBrochureButton";
import { motion } from "framer-motion";
import Link from "next/link";
import SakuraCanvas from "./SakuraCanvas";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [, setIsFrozen] = useState(false);

  useEffect(() => {
    const handleLandingEntered = () => {
      if (heroVideoRef.current) {
        heroVideoRef.current.currentTime = 0;
        heroVideoRef.current.play().catch(() => {});
        setIsFrozen(false);
      }
    };

    window.addEventListener("landing-page-entered", handleLandingEntered);

    const checkAndPlay = () => {
      const landingElem = document.getElementById("cinematic-landing-portal");
      if (!landingElem && heroVideoRef.current) {
        heroVideoRef.current.play().catch(() => {});
      }
    };

    const timer = setTimeout(checkAndPlay, 400);

    return () => {
      window.removeEventListener("landing-page-entered", handleLandingEntered);
      clearTimeout(timer);
    };
  }, []);

  const handleVideoEnded = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.pause();
      // Lock precisely on the final frame/scene
      if (heroVideoRef.current.duration) {
        heroVideoRef.current.currentTime = heroVideoRef.current.duration;
      }
    }
    setIsFrozen(true);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[52rem] items-center justify-center overflow-hidden bg-[#07131F] pt-32 pb-24 sm:pt-36 sm:pb-32 lg:pb-40"
    >
      {/* Cinematic Japanese Hero Entry Video Background with Smooth Organic Dissolve */}
      <div 
        className="absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.85) 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.85) 75%, transparent 100%)",
        }}
      >
        <video
          ref={heroVideoRef}
          poster="/images/hero-japanese-bg.jpg"
          playsInline
          muted
          autoPlay
          preload="auto"
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/videos/ENTRY.mp4" type="video/mp4" />
          <source src="/videos/ENTRY.mov" type="video/quicktime" />
        </video>
        {/* Subtle dark tint to ensure headline text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Deep, seamless multi-stop gradient transition into the section below */}
        <div 
          className="absolute inset-x-0 bottom-0 h-72 sm:h-96 md:h-[32rem] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #07131F 0%, rgba(7, 19, 31, 0.95) 25%, rgba(7, 19, 31, 0.65) 55%, rgba(7, 19, 31, 0.2) 80%, transparent 100%)"
          }}
        />

        {/* Ambient night mist layer */}
        <div 
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(143, 175, 196, 0.08), transparent 75%)"
          }}
        />
      </div>

      {/* Floating Cherry Blossom Petals in Hero Background - continues flowing at all times */}
      <SakuraCanvas
        active={true}
        petalCount={48}
        position="absolute"
        className="z-10 pointer-events-none"
      />

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Registration & Event Status Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-[#AEBCC7]/15 bg-[#102535]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9E2E8] backdrop-blur-md shadow-lg shadow-[#07131F]/70">
            <Sparkles className="h-3.5 w-3.5 text-[#D6B56C] animate-pulse" />
            <span>OpenCode 2026 • GeekHaven IIITA</span>
            <span className="hidden sm:inline text-[#718394]">•</span>
            <span className="hidden sm:inline text-[#D6B56C] font-bold">Registration Live</span>
          </div>
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight text-[#F4F1E8] drop-shadow-[0_4px_30px_rgba(7,19,31,0.95)]"
        >
          Start Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#D6B56C]">
            Open Source Odyssey
          </span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#D9E2E8]">
            Fueling the Next Wave of Open Tech
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-[#AEBCC7] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_14px_rgba(7,19,31,0.9)]"
        >
          A month-long open source celebration by{" "}
          <span className="font-semibold text-[#F4F1E8]">GeekHaven, IIITA</span> bringing together{" "}
          <span className="font-semibold text-[#D6B56C]">1,000+ student developers</span>, 
          seasoned maintainers, and leading industry sponsors.
        </motion.p>

        {/* Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5"
        >
          <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8FAFC4] drop-shadow-[0_2px_12px_rgba(7,19,31,0.9)] select-none">
            Open Source <span className="text-[#D6B56C] mx-1.5">•</span> Open Minds
          </h3>
        </motion.div>

        {/* Dual Persona CTAs & Brochure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-14 sm:mt-18 md:mt-20 flex flex-col items-center justify-center gap-4 sm:gap-5 w-full"
        >
          {/* Line 1: Contributor & Sponsor in a single line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary CTA: Contributor */}
            <a
              href="https://discord.gg/SxBATvUPnC"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#D6B56C] hover:bg-[#E5C982] px-7 py-3.5 text-sm sm:text-base font-semibold text-[#08131D] shadow-lg shadow-[#D6B56C]/25 transition hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Terminal className="w-4 h-4 text-[#08131D]" />
              Join as Contributor
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA: Sponsor */}
            <Link
              href="/sponsor-registration"
              className="inline-flex items-center gap-2 rounded-full border border-[#D6B56C]/45 bg-[#102535]/55 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#F4F1E8] backdrop-blur-md transition hover:bg-[#102535]/80 hover:border-[#E5C982] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Become a Sponsor
            </Link>
          </div>

          {/* Line 2: Brochure symmetrically centered between top two */}
          <div className="flex items-center justify-center scale-100 hover:scale-105 active:scale-95 transition-transform">
            <DownloadBrochureButton />
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default HeroSection;

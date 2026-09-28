"use client";
import DownloadBrochureButton from "./DownloadBrochureButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/hero-japanese-bg.jpg";
import SakuraCanvas from "./SakuraCanvas";
import { LineShadowText } from "./ui/line-shadow-text";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[50rem] items-center justify-center overflow-hidden bg-[#1B1620] pt-32 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Cinematic Japanese Hero Artwork Background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <Image
          src={heroBg}
          alt="OpenCode Japanese Moonlit Landscape"
          fill
          priority
          quality={100}
          className="object-cover object-center pointer-events-none"
        />
        {/* Seamless gradient transition from hero artwork into solid background */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#1B1620] via-[#1B1620]/60 to-transparent pointer-events-none" />
      </div>

      {/* Floating Cherry Blossom Petals in Hero Background */}
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
          <div className="flex items-center gap-2.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md shadow-lg shadow-[#291920]/50">
            <Sparkles className="h-3.5 w-3.5 text-[#CF9690] animate-pulse" />
            <span>OpenCode 2026 • GeekHaven IIITA</span>
            <span className="hidden sm:inline text-[#9D767E]/60">•</span>
            <span className="hidden sm:inline text-[#CF9690]">Registration Live</span>
          </div>
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight text-[#FEF3ED] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
        >
          Start Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB]">
            Open Source Odyssey
          </span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FEF3ED] via-[#E6D8DB] to-[#C9BCC4]">
            Fueling the Next Wave of Open Tech
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-[#FEF3ED] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
        >
          A month-long open source celebration by{" "}
          <span className="font-semibold text-[#FEF3ED]">GeekHaven, IIITA</span> bringing together{" "}
          <span className="font-semibold text-[#CF9690]">1,000+ student developers</span>, 
          seasoned maintainers, and leading industry sponsors.
        </motion.p>

        {/* Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4"
        >
          <LineShadowText
            as="h3"
            shadowColor="#9D767E"
            className="text-base sm:text-lg font-black uppercase tracking-[0.28em] text-[#CF9690]/90"
          >
            Open Source • Open Minds
          </LineShadowText>
        </motion.div>

        {/* Dual Persona CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA: Contributor */}
          <a
            href="https://discord.gg/SxBATvUPnC"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FEF3ED] border border-[#CF9690]/30 shadow-xl shadow-[#60434A]/40 transition hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            Join as Contributor
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: Sponsor */}
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center gap-2 rounded-full border border-[#9D767E]/40 bg-[#291920]/60 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FEF3ED] backdrop-blur-md transition hover:bg-[#312C34]/80 hover:border-[#CF9690] hover:text-[#FEF3ED] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Become a Sponsor
          </Link>

          {/* Tertiary CTA: Brochure */}
          <div className="scale-100 hover:scale-105 active:scale-95 transition-transform">
            <DownloadBrochureButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

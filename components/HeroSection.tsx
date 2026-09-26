"use client";
import DownloadBrochureButton from "./DownloadBrochureButton";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";
import { LineShadowText } from "./ui/line-shadow-text";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[50rem] items-center justify-center overflow-hidden border-b border-purple-500/15 bg-[radial-gradient(circle_at_50%_20%,rgba(149,117,205,0.28),rgba(18,12,27,0.94)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#130b26_0%,#0d071f_55%,#080512_100%)] pt-32 pb-16 sm:pt-36 sm:pb-24"
    >
      <Hyperspeed
        className="absolute inset-0 z-0 opacity-80"
        effectOptions={hyperspeedPresets.one}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.22),transparent_50%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(192,132,252,0.18),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0615] via-[#0a0615]/85 to-transparent" />
      </div>

      <Spotlight className="z-20 -top-40 left-0 md:left-60 md:-top-20" fill="purple" />

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Registration & Event Status Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-purple-400/30 bg-purple-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 backdrop-blur-md shadow-lg shadow-purple-900/30">
            <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
            <span>OpenCode 2026 • GeekHaven IIITA</span>
            <span className="hidden sm:inline text-purple-400/60">•</span>
            <span className="hidden sm:inline text-purple-300">Registration Live</span>
          </div>
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight text-white drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
        >
          Start Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
            Open Source Odyssey
          </span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-gray-400">
            Fueling the Next Wave of Open Tech
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-purple-100/90 max-w-3xl mx-auto leading-relaxed"
        >
          A month-long open source celebration by{" "}
          <span className="font-semibold text-white">GeekHaven, IIITA</span> bringing together{" "}
          <span className="font-semibold text-purple-300">2,500+ student developers</span>, 
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
            shadowColor="#a855f7"
            className="text-base sm:text-lg font-black uppercase tracking-[0.28em] text-purple-300/90"
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
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-xl shadow-purple-600/30 transition hover:brightness-110 hover:scale-105 active:scale-95"
          >
            <Terminal className="w-4 h-4" />
            Join as Contributor
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: Sponsor */}
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-950/40 px-7 py-3.5 text-sm sm:text-base font-semibold text-purple-100 backdrop-blur-md transition hover:bg-purple-900/60 hover:border-purple-300 hover:text-white hover:scale-105 active:scale-95"
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

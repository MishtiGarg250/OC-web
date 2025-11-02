"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";

function HeroSection() {
  return (
    <section className="relative flex min-h-[42rem] items-center justify-center overflow-hidden border-b border-blue-500/10 bg-[#030712]">
      <Hyperspeed
        className="absolute inset-0 z-0"
        effectOptions={hyperspeedPresets.one}
      />

      <Spotlight className="z-20 -top-40 left-0 md:left-60 md:-top-20" fill="black" />

      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-[linear-gradient(90deg,#3b82f6,#06b6d4,#2563eb)] bg-[length:200%_auto] animate-[shine_6s_linear_infinite] drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          Fuel Open Source Innovation
        </motion.h1>
        {/*here are more changes */}
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Join the movement shaping the future of technology. Sponsor our
          open-source events and connect with the brightest developers,
          contribute to meaningful projects, and build lasting partnerships in
          the tech community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
          >
            Become a Sponsor
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

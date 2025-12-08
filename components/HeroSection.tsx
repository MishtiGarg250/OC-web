"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import Hyperspeed, { hyperspeedPresets } from "./Hyperspeed";
import CountUp from "./CountUp";
import { LineShadowText } from "./ui/line-shadow-text";

function HeroSection() {
  const handleHowItWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-[48rem] items-center justify-center overflow-hidden border-b border-blue-500/10 bg-[#030712] pt-28 pb-12 sm:pt-32">
      <Hyperspeed
        className="absolute inset-0 z-0"
        effectOptions={hyperspeedPresets.one}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.1),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />
      </div>

      <Spotlight className="z-20 -top-40 left-0 md:left-60 md:-top-20" fill="black" />

      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            OpenCode Sponsorship Program 2025
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">Headline slots closing soon</span>
          </div>
        </div>

        <motion.h1
          initial={false}
          className="mt-6 text-4xl md:text-6xl font-black leading-[1.05] bg-clip-text text-transparent bg-[linear-gradient(110deg,#8b5cf6_0%,#3b82f6_25%,#06b6d4_55%,#60a5fa_75%,#2563eb_100%)] bg-[length:200%_auto] animate-[shine_8s_linear_infinite] drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]"
        >
          Back the builders shaping the next wave of open tech.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Partner with OpenCode to reach high-intent developers, champion real open-source breakthroughs, and showcase your brand across our national flagship event.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-6"
        >
          <LineShadowText
            as="h3"
            shadowColor="#3b82f6"
            className="text-lg sm:text-xl font-black uppercase tracking-[0.28em] text-blue-300"
          >
            OpenSource&apos;25
          </LineShadowText>
        </motion.div>

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
            onClick={handleHowItWorksClick}
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            See How It Works
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Developers engaged", value: 2000, suffix: "+" },
            { label: "Tracks & workshops", value: 12 },
            { label: "Avg. brand recall lift", value: 36, suffix: "%" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_20px_70px_-45px_rgba(56,189,248,0.8)] backdrop-blur transition hover:border-cyan-400/60 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.16),transparent_25%)]" />
              <span className="text-2xl font-extrabold text-white">
                <CountUp to={item.value} duration={1.6} separator="," className="inline-block" />
                {item.suffix}
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-xs text-gray-300 backdrop-blur"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.16em] text-gray-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-blue-100/90">
              Trusted by
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.16)]" />
            </span>
            <span className="text-gray-300">GitHub</span>
            <span className="text-gray-300">DigitalOcean</span>
            <span className="text-gray-300">Solana</span>
            <span className="text-gray-300">Filecoin</span>
            <span className="text-gray-300">Replit</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

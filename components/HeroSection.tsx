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
    <section className="relative flex min-h-[48rem] items-center justify-center overflow-hidden border-b border-purple-500/15 bg-[radial-gradient(circle_at_50%_20%,rgba(149,117,205,0.28),rgba(18,12,27,0.94)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#130b26_0%,#0d071f_55%,#080512_100%)] pt-28 pb-12 sm:pt-32">
      <Hyperspeed
        className="absolute inset-0 z-0"
        effectOptions={hyperspeedPresets.one}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(192,132,252,0.12),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0615] via-[#0a0615]/80 to-transparent" />
      </div>

      <Spotlight className="z-20 -top-40 left-0 md:left-60 md:-top-20" fill="black" />

      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-100/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-300 animate-pulse" />
            OpenCode Sponsorship Program 2025
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">Headline slots closing soon</span>
          </div>
        </div>

        <motion.h1
          initial={false}
          className="mt-6 text-4xl md:text-6xl font-black leading-[1.05] bg-clip-text text-transparent bg-[linear-gradient(110deg,#c084fc_0%,#a855f7_35%,#7c3aed_65%,#6366f1_100%)] bg-[length:200%_auto] animate-[shine_8s_linear_infinite] drop-shadow-[0_0_35px_rgba(124,58,237,0.5)]"
        >
          Back the builders shaping the next wave of open tech.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="mt-4 text-base md:text-lg text-purple-100/90 max-w-2xl mx-auto leading-relaxed"
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
            shadowColor="#a855f7"
            className="text-lg sm:text-xl font-black uppercase tracking-[0.28em] text-purple-200"
          >
            OpenCode&apos;25
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
            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
          >
            Become a Sponsor
          </Link>
          <Link
            href="#how-it-works"
            onClick={handleHowItWorksClick}
            className="inline-flex items-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-purple-100/90 transition hover:border-white/40 hover:text-white"
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
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_20px_70px_-45px_rgba(168,85,247,0.6)] backdrop-blur transition hover:border-purple-300/60 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_25%)]" />
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
          className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-xs text-purple-100/90 backdrop-blur"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.16em] text-gray-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-purple-100/90">
              Trusted by
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.16)]" />
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

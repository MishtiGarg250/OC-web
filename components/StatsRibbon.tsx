"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import Image from "next/image";

const stats = [
  { label: "Active Participants", value: 1000, suffix: "+" },
  { label: "PRs Merged", value: 3700, suffix: "+" },
  { label: "Projects & Tracks", value: 25, suffix: "+" },
 
];

const ecosystemLogos = [
  { name: "GitHub", src: "/logos_github.svg", width: 110, height: 35 },
  { name: "DigitalOcean", src: "/logos_digital-ocean.svg", width: 140, height: 35 },
  { name: "Solana", src: "/logos_solana.svg", width: 110, height: 35 },
  { name: "Filecoin", src: "/logos_filecoin.svg", width: 110, height: 35 },
  { name: "Replit", src: "/logos_replit.svg", width: 110, height: 35 },
  { name: "Polygon Labs", src: "/logos_polygon.svg", width: 110, height: 35 },
  { name: "Taskade", src: "/logos_taskade.svg", width: 110, height: 35 },
  { name: "JetBrains", src: "/images/jetbrains.png", width: 110, height: 35 },
];

export default function StatsRibbon() {
  return (
    <section id="stats" className="relative z-20 py-16 bg-[#1B1620] border-b border-[#665B6D]/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#665B6D]/30 bg-gradient-to-b from-[#291920]/80 via-[#312C34]/50 to-[#1B1620]/90 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-[#CF9690]/60 hover:-translate-y-1 hover:shadow-[0_15px_45px_-20px_rgba(207,150,144,0.35)]"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(207,150,144,0.18),transparent_70%)] pointer-events-none" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FEF3ED] tracking-tight">
                <CountUp to={item.value} duration={1.8} separator="," className="inline-block" />
                <span className="text-[#CF9690] ml-0.5">{item.suffix}</span>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#E6D8DB]/85">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-6xl mx-auto rounded-2xl border border-[#665B6D]/30 bg-[#291920]/40 px-6 py-6 backdrop-blur-md"
        >
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FEF3ED]">
              <span className="h-2 w-2 rounded-full bg-[#CF9690] animate-pulse" />
              Supported &amp; Trusted by Developer Ecosystems
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-85">
            {ecosystemLogos.map((logo) => (
              <div
                key={logo.name}
                className="h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

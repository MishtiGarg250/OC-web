"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import SplitText from "./SplitText";
import SpotlightCard from "./SpotlightCard";

const sponsors = [
  {
    name: "Taskade",
    tier: "Title Partner",
    logo: "/logos_taskade.svg",
    width: 170,
    height: 65,
    highlight: true,
    description: "Collaborative AI workspace powering student builders and hack teams."
  },
  
  {
    name: "DigitalOcean",
    tier: "Cloud Partner",
    logo: "/logos_digital-ocean.svg",
    width: 200,
    height: 60,
    description: "Developer-loved cloud infrastructure for rapid shipping."
  },
  {
    name: "Filecoin",
    tier: "Innovation Partner",
    logo: "/logos_filecoin.svg",
    width: 170,
    height: 65,
    description: "Decentralized storage powering open internet experiences."
  },
  {
    name: "Solana",
    tier: "Ecosystem Partner",
    logo: "/logos_solana.svg",
    width: 170,
    height: 65,
    description: "High-throughput blockchain backing our web3 build track."
  },
  {
    name: "UpCloud",
    tier: "Cloud Partner",
    logo: "/logos_upcloud.svg",
    width: 170,
    height: 65,
    description: "High-performance compute for rapid prototyping."
  },
  
  {
    name: "GitHub",
    tier: "Productivity Partner",
    logo: "/logos_github.svg",
    width: 170,
    height: 65,
    description: "The collaboration platform where every OpenCode repo lives."
  },
  {
    name: "Replit",
    tier: "DevTools Partner",
    logo: "/logos_replit.svg",
    width: 170,
    height: 65,
    description: "Browser-first IDE for instant demos and hands-on workshops."
  },
  
  
  {
    name: "Polygon Labs",
    tier: "Innovation Partner",
    logo: "/logos_polygon.svg",
    width: 170,
    height: 65,
    description: "Scaling web3 apps for the next billion users."
  },

];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative w-full py-20 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <SplitText
            text="Trusted by developer-first leaders"
            tag="h2"
            splitType="words"
            delay={60}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 via-cyan-300 to-blue-500 drop-shadow-[0_0_22px_rgba(59,130,246,0.45)]"
          />
          <p className="text-lg text-neutral-300/90 max-w-3xl mx-auto leading-relaxed">
            We partner with companies that champion builders. Here are a few of the brands already showing up for the OpenCode community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.2)"
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_70px_-35px_rgba(14,165,233,0.6)]",
                  sponsor.highlight && "border-cyan-400/60 bg-gradient-to-b from-cyan-500/10 via-white/5 to-white/0"
                )}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.2),transparent_25%)]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                    {sponsor.tier}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                    {index < 2 ? "New for 2025" : "Returning"}
                  </span>
                </div>

                <div className="relative mt-6 flex h-16 items-center justify-start">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="object-contain h-full w-auto max-w-[70%] grayscale-0"
                  />
                </div>

                <p className="relative mt-4 text-sm text-gray-300 leading-relaxed">
                  {sponsor.description}
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-xs text-cyan-200/80">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]" />
                  Engaged in: workshops, product demos, and challenge prizes
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-2xl text-neutral-300/90">
            Ready to join them? Tell us about your goals and we&apos;ll shape a sponsor package that fits your brand, from headline visibility to hands-on workshops.
          </p>
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition hover:brightness-110"
          >
            Get in Touch
          </Link>
          <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Limited headline slots left for this season
          </span>
        </motion.div>
      </div>
    </section>
  );
}

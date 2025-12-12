"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import SpotlightCard from "./SpotlightCard";

const sponsors = [
  {
    name: "Taskade",
    tier: "Title Partner",
    logo: "/logos_taskade.svg",
    width: 170,
    height: 65,
    highlight: true,
    description: "Collaborative AI workspace powering student builders and hack teams.",
    engagement: "Sponsored keynote + live AI build-along"
  },
  
  {
    name: "DigitalOcean",
    tier: "Cloud Partner",
    logo: "/logos_digital-ocean.svg",
    width: 200,
    height: 60,
    description: "Developer-loved cloud infrastructure for rapid shipping.",
    engagement: "Cloud credits, scale workshops, and migration clinics"
  },
  {
    name: "Filecoin",
    tier: "Innovation Partner",
    logo: "/logos_filecoin.svg",
    width: 170,
    height: 65,
    description: "Decentralized storage powering open internet experiences.",
    engagement: "On-chain data lab + decentralized storage challenge"
  },
  {
    name: "Solana",
    tier: "Ecosystem Partner",
    logo: "/logos_solana.svg",
    width: 170,
    height: 65,
    description: "High-throughput blockchain backing our web3 build track.",
    engagement: "Web3 starter kits and ecosystem mentor hours"
  },
  {
    name: "UpCloud",
    tier: "Cloud Partner",
    logo: "/logos_upcloud.svg",
    width: 170,
    height: 65,
    description: "High-performance compute for rapid prototyping.",
    engagement: "Bare-metal sprint track and performance clinic"
  },
  
  {
    name: "GitHub",
    tier: "Productivity Partner",
    logo: "/logos_github.svg",
    width: 170,
    height: 65,
    description: "The collaboration platform where every OpenCode repo lives.",
    engagement: "Maintainer AMAs + Actions security deep-dives"
  },
  {
    name: "Replit",
    tier: "DevTools Partner",
    logo: "/logos_replit.svg",
    width: 170,
    height: 65,
    description: "Browser-first IDE for instant demos and hands-on workshops.",
    engagement: "Hands-on labs with starter templates and coach time"
  },
  
  
  {
    name: "Polygon Labs",
    tier: "Innovation Partner",
    logo: "/logos_polygon.svg",
    width: 170,
    height: 65,
    description: "Scaling web3 apps for the next billion users.",
    engagement: "Zero-knowledge demos + grants office hours"
  },

];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative w-full py-20  bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.24),rgba(18,12,27,0.92)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#0c061a_0%,#0a0516_50%,#080414_100%)] border-t border-purple-900/30">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 via-fuchsia-200 to-purple-400 drop-shadow-[0_0_22px_rgba(168,85,247,0.35)]">
            Trusted by developer-first leaders
          </h2>
          <p className="text-lg text-purple-100/90 max-w-3xl mx-auto leading-relaxed">
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
                  "transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:shadow-[0_20px_70px_-35px_rgba(168,85,247,0.55)]",
                  sponsor.highlight && "border-purple-300/70 bg-gradient-to-b from-purple-500/10 via-white/5 to-white/0"
                )}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.2),transparent_25%)]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-100/80">
                    {sponsor.tier}
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
                <div className="relative mt-4 flex items-center gap-2 text-xs text-purple-200/80">
                  <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]" />
                  {sponsor.engagement}
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
          <p className="max-w-2xl text-purple-100/90">
            Ready to join them? Tell us about your goals and we&apos;ll shape a sponsor package that fits your brand, from headline visibility to hands-on workshops.
          </p>
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg shadow-purple-500/30 transition hover:brightness-110"
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

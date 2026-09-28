"use client";
import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";
import { Users2, Megaphone, Globe2, Trophy, Presentation, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import BlurText from "./BlurText";

const valuePillars = [
  {
    icon: Users2,
    title: "Direct Access to Top Student Talent",
    description:
      "Engage directly with skilled contributors, maintainers, and students from premier institutions nationwide. Build an authentic hiring pipeline with developers whose code quality you can inspect firsthand.",
  },
  {
    icon: Megaphone,
    title: "Developer Advocacy & Tool Adoption",
    description:
      "Drive real developer adoption by getting thousands of developers to build directly with your APIs, SDKs, dev tools, and cloud platforms during intense sprint cycles.",
  },
  {
    icon: Globe2,
    title: "National Brand Visibility",
    description:
      "Showcase your engineering brand across university campuses, our high-traffic digital portals, event collateral, and prominent open-source GitHub repositories.",
  },
  {
    icon: Trophy,
    title: "Custom Tracks & Challenges",
    description:
      "Propose custom hack challenges, specialized bounties, and domain tracks centered on your tech stack with tailored judging criteria and dedicated awards.",
  },
  {
    icon: Presentation,
    title: "Keynotes, Workshops & AMAs",
    description:
      "Host live technical masterclasses, maintainer fireside chats, and architecture deep-dives with enthusiastic developers ready to learn directly from your engineering team.",
  },
  {
    icon: Sparkles,
    title: "Long-term Open Source Impact",
    description:
      "Demonstrate your company's commitment to open technology by funding public-good software, open protocols, and community-maintained codebases.",
  },
];

export default function WhySponsorUs() {
  return (
    <section
      id="why-sponsor"
      className="relative py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.22),rgba(41,25,32,0.95)_45%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] border-b border-[#665B6D]/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#CF9690]" />
            <span>Value For Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] drop-shadow-[0_0_20px_rgba(207,150,144,0.35)]"
          >
            Why Sponsor OpenCode?
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Join industry leaders who are championing open-source innovation, engaging with high-velocity developers, and securing premier technical talent."
              className="text-base sm:text-lg text-[#E6D8DB]/85 leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <SpotlightCard
                  spotlightColor="rgba(207, 150, 144, 0.2)"
                  className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#291920]/90 to-[#1B1620]/95 border border-[#665B6D]/30 p-7 shadow-[0_20px_50px_-30px_rgba(207,150,144,0.3)] hover:border-[#CF9690]/60 hover:-translate-y-1.5 transition-all duration-300 w-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#60434A]/40 border border-[#9D767E]/35 flex items-center justify-center text-[#CF9690] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FEF3ED] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#E6D8DB]/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#665B6D]/20 flex items-center text-xs font-semibold text-[#B88784]">
                    Pillar #{index + 1}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-[#9D767E]/40 bg-gradient-to-r from-[#60434A]/25 via-[#785255]/20 to-[#291920]/30 p-8 sm:p-10 shadow-[0_20px_60px_-30px_rgba(207,150,144,0.3)] backdrop-blur-md">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FEF3ED] mb-3">
              Co-create the next flagship track
            </h3>
            <p className="text-[#E6D8DB]/90 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              We tailor deliverables around your technical goals—keynotes, challenge prizes, workshops, or talent pipelining. Tell us what outcomes matter most to your brand.
            </p>
            <Link
              href="/sponsor-registration"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] px-8 py-3.5 text-sm sm:text-base font-semibold text-[#FEF3ED] border border-[#CF9690]/30 shadow-xl shadow-[#60434A]/40 hover:brightness-110 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Craft a Custom Package
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

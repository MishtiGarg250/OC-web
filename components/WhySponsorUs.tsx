"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Users2,
  Megaphone,
  Globe2,
  Trophy,
  Presentation,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import BlurText from "./BlurText";
import SpecularButton from "./SpecularButton";
import "./WhySponsorUs.css";

interface ValuePillar {
  id: string;
  index: string;
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  deliverables: string[];
}

const sponsorPillars: ValuePillar[] = [
  {
    id: "talent",
    index: "01",
    categoryLabel: "TALENT PIPELINE",
    icon: Users2,
    title: "Direct Access to Top Student Talent",
    description:
      "Engage directly with skilled contributors, maintainers, and students from premier institutions nationwide. Build an authentic hiring pipeline with developers whose code quality you can inspect firsthand.",
    deliverables: [
      "Verified Code Quality Inspection",
      "Premier National Engineering Campuses",
      "Direct Hiring & Internship Pipeline",
      "1,000+ Pre-screened Contributors",
    ],
  },
  {
    id: "advocacy",
    index: "02",
    categoryLabel: "ADVOCACY & TOOL ADOPTION",
    icon: Megaphone,
    title: "Developer Advocacy & Tool Adoption",
    description:
      "Drive real developer adoption by getting thousands of developers to build directly with your APIs, SDKs, dev tools, and cloud platforms during intense sprint cycles.",
    deliverables: [
      "Production SDK & API Sprint Trials",
      "Direct DevRel Developer Feedback",
    ],
  },
  {
    id: "visibility",
    index: "03",
    categoryLabel: "PRESENCE & REPUTATION",
    icon: Globe2,
    title: "National Brand Visibility",
    description:
      "Showcase your engineering brand across university campuses, our high-traffic digital portals, event collateral, and prominent open-source GitHub repositories.",
    deliverables: [
      "National Campus Footprint",
      "GitHub & Portal Placement",
    ],
  },
  {
    id: "challenges",
    index: "04",
    categoryLabel: "BOUNTIES & TAILORED TRACKS",
    icon: Trophy,
    title: "Custom Tracks & Challenges",
    description:
      "Propose custom hack challenges, specialized bounties, and domain tracks centered on your tech stack with tailored judging criteria and dedicated awards.",
    deliverables: [
      "Tech Stack Problem Statements",
      "Tailored Judging Criteria",
      "Dedicated Domain Bounties",
    ],
  },
  {
    id: "workshops",
    index: "05",
    categoryLabel: "KNOWLEDGE EXCHANGE",
    icon: Presentation,
    title: "Keynotes, Workshops & AMAs",
    description:
      "Host live technical masterclasses, maintainer fireside chats, and architecture deep-dives with enthusiastic developers ready to learn directly from your engineering team.",
    deliverables: [
      "Live Technical Masterclasses",
      "Maintainer Fireside AMAs",
    ],
  },
  {
    id: "impact",
    index: "06",
    categoryLabel: "ECOSYSTEM STEWARDSHIP",
    icon: Sparkles,
    title: "Long-term Open Source Impact",
    description:
      "Demonstrate your company's commitment to open technology by funding public-good software, open protocols, and community-maintained codebases.",
    deliverables: [
      "Public-Good Software Stewardship",
      "Community-Maintained Codebases",
    ],
  },
];

export default function WhySponsorUs() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="why-sponsor"
      className="relative w-full py-20 sm:py-28 bg-[#07131F] border-b border-[#AEBCC7]/15 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Environmental Ambient Radial Glow (Midnight Navy & Indigo) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_25%,rgba(16,37,53,0.5)_0%,#07131F_85%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07131F] via-[#07131F]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07131F] via-[#07131F]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* =========================================================================
            1. SECTION HEADER
            Minimalist editorial eyebrow + Cormorant Garamond serif display
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-[#0A1A28]/80 text-xs tracking-wider text-[#D9E2E8] backdrop-blur-md mb-4 font-zen shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[10px] text-[#8FAFC4] uppercase tracking-[0.25em] font-mono">
              PARTNERSHIP ARCHITECTURE • 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F1E8] tracking-wide font-cormorant"
          >
            Why Sponsor{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#B8E5D5]">
              OpenCode?
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Join industry leaders who are championing open-source innovation, engaging with high-velocity developers, and securing premier technical talent."
              className="text-sm sm:text-base text-[#AEBCC7] font-zen max-w-2xl mx-auto leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* =========================================================================
            2. BALANCED 3-COLUMN × 2-ROW (2*3) GRID WITH SCROLL-TRIGGERED ENTRANCE
            Row 1: Pillars 1–3 • Row 2: Pillars 4–6
            ========================================================================= */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-7xl mx-auto md:auto-rows-fr"
        >
          {sponsorPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const rowIndex = Math.floor(i / 3);
            const colIndex = i % 3;
            // Coordinated 2*3 entrance stagger across columns & rows
            const delay = shouldReduceMotion ? 0 : 0.06 + colIndex * 0.08 + rowIndex * 0.12;
            const offset = shouldReduceMotion ? 0 : isMobile ? 25 : 35;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: offset }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: offset }
                }
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.65,
                  delay: shouldReduceMotion ? 0 : delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.25 } }
                }
                className="relative flex flex-col justify-between h-full sponsor-editorial-panel p-5 sm:p-6 group select-none overflow-hidden"
              >
                {/* Subtle Electric Blue Accent Line on Top of Card */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent z-20 pointer-events-none" />

                {/* Traditional Japanese Architectural Hairline Corner Accents */}
                <div className="sponsor-corner-tl" aria-hidden="true" />
                <div className="sponsor-corner-br" aria-hidden="true" />

                {/* Top Content Area */}
                <div>
                  {/* Category Label & Understated Numerical Index */}
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58B99A]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#58B99A] font-medium">
                        {pillar.categoryLabel}
                      </span>
                    </div>
                    <span className="font-mono text-2xl sm:text-3xl font-light text-white/15 group-hover:text-[#38BDF8]/40 transition-colors duration-300 select-none">
                      {pillar.index}
                    </span>
                  </div>

                  {/* Title with Icon Box & Radiant Blue Ink-Line Reveal */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#07131F]/90 border border-white/10 flex items-center justify-center text-[#58B99A] shrink-0 group-hover:border-[#38BDF8]/40 transition-colors duration-300 shadow-inner">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F1E8] font-cormorant tracking-wide leading-snug">
                      <span className="relative inline-block pb-0.5">
                        {pillar.title}
                        <span className="sponsor-ink-line" aria-hidden="true" />
                      </span>
                    </h3>
                  </div>

                  {/* Compact Description */}
                  <p className="text-xs sm:text-[13px] text-[#AEBCC7] font-zen leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables Badges Footer */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {pillar.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded bg-[#07131F]/70 border border-white/10 text-[11px] text-[#D9E2E8] font-zen"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#58B99A]/80 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            3. CUSTOM PACKAGE FINALE CTA
            Expansive Japanese editorial finale panel with refined typography & routing
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#102535]/85 via-[#0B1E2E]/70 to-[#07131F]/95 p-8 sm:p-12 lg:p-14 overflow-hidden backdrop-blur-xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)]">
            {/* Architectural joinery accents */}
            <div className="sponsor-corner-tl" aria-hidden="true" />
            <div className="sponsor-corner-br" aria-hidden="true" />

            {/* Subtle radial ambient highlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(88,185,154,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
              <div className="max-w-2xl space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#07131F]/80 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8FAFC4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58B99A]" />
                  <span>BESPOKE COLLABORATION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4F1E8] font-cormorant tracking-wide">
                  Co-create the next flagship track
                </h3>

                <p className="text-[#AEBCC7] text-sm sm:text-base leading-relaxed font-zen">
                  We tailor deliverables around your technical goals—keynotes, challenge prizes, workshops, or talent pipelining. Tell us what outcomes matter most to your brand.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <SpecularButton
                  size="lg"
                  radius={28}
                  tint="#ffffff"
                  tintOpacity={0.06}
                  textColor="#07131F"
                  lineColor="#58B99A"
                  baseColor="#F4F1E8"
                  intensity={1}
                  idleIntensity={0.35}
                  shineSize={10}
                  shineFade={34}
                  thickness={1.2}
                  glow={1}
                  followMouse
                  proximity={250}
                  href="/sponsor-registration"
                  className="!bg-[#F4F1E8] hover:!bg-[#B8E5D5] !text-[#07131F] font-zen font-semibold text-sm sm:text-base tracking-wide shadow-[0_12px_32px_-10px_rgba(88,185,154,0.35)] w-full sm:w-auto px-8 py-4"
                >
                  <span>Craft a Custom Package</span>
                  <ArrowRight className="w-4 h-4 text-[#07131F] group-hover:translate-x-1 transition-transform duration-300" />
                </SpecularButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

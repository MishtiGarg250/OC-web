/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Shuffle, Play, Pause } from "lucide-react";
import SpecularButton from "./SpecularButton";
import "./Sponsors.css";

interface SponsorItem {
  id: string;
  name: string;
  tier: string;
  logo: string;
  link?: string;
  category: string;
  description?: string;
}

// Exactly 1 Title Sponsor (Anchored static in the middle)
const TITLE_SPONSOR: SponsorItem = {
  id: "taskade",
  name: "Taskade",
  tier: "Title Partner",
  logo: "/logos_taskade.svg",
  link: "https://www.taskade.com",
  category: "Lead Organization & AI Workspace",
  description: "Collaborative AI workspace powering student builders, hackathon squads, and project workspaces.",
};

// Exactly 12 Other Past Sponsors & Partners to revolve in random order across 2 rows (6 per row)
const OTHER_SPONSORS_POOL: SponsorItem[] = [
  {
    id: "digitalocean",
    name: "DigitalOcean",
    tier: "Cloud Partner",
    logo: "/logos_digital-ocean.svg",
    link: "https://www.digitalocean.com",
    category: "Cloud Infrastructure",
    description: "Developer-loved cloud infrastructure for instant container and VM deployment.",
  },
  {
    id: "github",
    name: "GitHub",
    tier: "Productivity Partner",
    logo: "/logos_github.svg",
    link: "https://github.com",
    category: "Developer Platform",
    description: "The world's leading developer and AI-powered collaboration platform.",
  },
  {
    id: "solana",
    name: "Solana",
    tier: "Ecosystem Partner",
    logo: "/logos_solana.svg",
    link: "https://solana.com",
    category: "Web3 & Blockchain",
    description: "High-throughput blockchain engine powering fast decentralized applications.",
  },
  {
    id: "upcloud",
    name: "UpCloud",
    tier: "Cloud Partner",
    logo: "/logos_upcloud.svg",
    link: "https://upcloud.com",
    category: "High-Performance Compute",
    description: "High-performance compute clusters and low-latency storage for rapid prototyping.",
  },
  {
    id: "replit",
    name: "Replit",
    tier: "DevTools Partner",
    logo: "/logos_replit.svg",
    link: "https://replit.com",
    category: "Interactive Environment",
    description: "Browser-first collaborative software creation and instant application hosting.",
  },
  {
    id: "polygon",
    name: "Polygon Labs",
    tier: "Innovation Partner",
    logo: "/logos_polygon.svg",
    link: "https://polygon.technology",
    category: "Zero-Knowledge Scaling",
    description: "Zero-knowledge scaling protocols and Layer 2 Ethereum rollups.",
  },
  {
    id: "jetbrains",
    name: "JetBrains",
    tier: "Tooling Partner",
    logo: "/images/jetbrains.png",
    link: "https://www.jetbrains.com",
    category: "IDE Ecosystem",
    description: "Smart IDEs and developer tools for polyglot software engineering.",
  },
  {
    id: "filecoin",
    name: "Filecoin",
    tier: "Innovation Partner",
    logo: "/logos_filecoin.svg",
    link: "https://filecoin.io",
    category: "Decentralized Storage",
    description: "Decentralized data storage and preservation layer powering open web applications.",
  },
  {
    id: "1password",
    name: "1Password",
    tier: "Security Partner",
    logo: "/images/1password.svg",
    link: "https://1password.com",
    category: "Secrets Management",
    description: "Enterprise-grade credential and secrets management for engineering teams.",
  },
  {
    id: "edii",
    name: "EDII",
    tier: "Academic Patron",
    logo: "/images/EDII.png",
    category: "National Entrepreneurship",
    description: "Entrepreneurship Development Institute of India fostering student ventures.",
  },
  {
    id: "dst",
    name: "DST",
    tier: "National Patron",
    logo: "/images/DST.png",
    category: "Government Research",
    description: "Department of Science and Technology, Government of India.",
  },
  {
    id: "nstedb",
    name: "NSTEDB",
    tier: "Innovation Patron",
    logo: "/images/NSTEDB.png",
    category: "Technology Board",
    description: "National Science & Technology Entrepreneurship Development Board.",
  },
];

// Fisher-Yates array shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Standard Revolving Sponsor Tile (Enlarged with prominent branding)
 */
function RevolvingTile({
  sponsor,
  className = "",
}: {
  sponsor: SponsorItem;
  className?: string;
}) {
  const isDst = sponsor.id === "dst";
  const isOnePassword = sponsor.id === "1password";

  const content = (
    <div
      className={`revolving-sponsor-tile group relative w-[270px] sm:w-[320px] lg:w-[350px] h-[92px] sm:h-[102px] lg:h-[108px] rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4 shrink-0 cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-3.5 overflow-hidden">
        {isOnePassword ? (
          <div className="flex items-center gap-2.5 shrink-0">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              decoding="async"
              className="object-contain h-7 w-7 sm:h-8 sm:w-8 shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-zen text-sm sm:text-base font-semibold text-[#F4F1E8] tracking-wide">
              1Password
            </span>
          </div>
        ) : (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            loading="lazy"
            decoding="async"
            className={`object-contain max-h-9 sm:max-h-11 lg:max-h-12 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] transition-transform duration-200 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${
              isDst ? "brightness-0 invert" : ""
            }`}
          />
        )}
      </div>

      <div className="flex flex-col items-end shrink-0">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/10 text-[10px] sm:text-[11px] font-mono text-[#B8E5D5] uppercase tracking-wider font-semibold group-hover:border-[#58B99A]/50 transition-colors">
          {sponsor.tier}
        </span>
        <span className="text-[10px] sm:text-[11px] font-mono text-[#8FAFC4]/65 uppercase tracking-tight mt-1.5 truncate max-w-[110px]">
          {sponsor.category.split(" ")[0]}
        </span>
      </div>

      {sponsor.link && (
        <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity text-[#8FAFC4]">
          <ExternalLink className="w-3 h-3" />
        </span>
      )}
    </div>
  );

  if (sponsor.link) {
    return (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58B99A] rounded-2xl shrink-0"
        aria-label={`Visit ${sponsor.name} website`}
      >
        {content}
      </a>
    );
  }

  return content;
}

/**
 * Center Static Title Sponsor Card
 * Firmly anchored in the middle, never rotates or shuffles
 */
function StaticTitleSponsorTile() {
  return (
    <div className="static-title-sponsor-card relative group w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[490px] rounded-2xl border-2 border-[#58B99A]/50 bg-[#0B1E30]/95 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-between gap-3 text-left backdrop-blur-xl shrink-0 z-20">
      {/* Top Accent Ribbon */}
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-[#58B99A]/40 bg-[#58B99A]/15 text-[11px] font-mono text-[#B8E5D5] uppercase tracking-wider font-bold shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#58B99A] animate-pulse" />
          TITLE PARTNER
        </span>
      </div>

      {/* Center Logo Showcase */}
      <div className="flex items-center justify-between gap-4 my-1">
        <img
          src={TITLE_SPONSOR.logo}
          alt={TITLE_SPONSOR.name}
          className="object-contain max-h-11 sm:max-h-13 lg:max-h-14 w-auto max-w-[190px] sm:max-w-[240px] transition-transform duration-300 group-hover:scale-105"
        />

        {TITLE_SPONSOR.link && (
          <a
            href={TITLE_SPONSOR.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Taskade"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#07131F] bg-[#F4F1E8] hover:bg-[#B8E5D5] transition-colors rounded-lg px-3.5 py-2 shadow-md"
          >
            <span>VISIT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Subtitle / Description */}
      <p className="text-xs sm:text-[13px] text-[#D9E2E8]/85 font-zen leading-relaxed line-clamp-2">
        {TITLE_SPONSOR.description}
      </p>
    </div>
  );
}

/**
 * 3D Flip Card Component for the 3D Grid Mode
 */
function FlipTile({
  primarySponsor,
  alternateSponsor,
  isFlipped,
}: {
  primarySponsor: SponsorItem;
  alternateSponsor: SponsorItem;
  isFlipped: boolean;
}) {
  return (
    <div className="tile-3d-wrapper w-full h-[95px] sm:h-[105px] lg:h-[110px]">
      <div className={`tile-3d-card w-full h-full relative ${isFlipped ? "is-flipped" : ""}`}>
        {/* Front Face */}
        <div className="tile-3d-face">
          <RevolvingTile sponsor={primarySponsor} className="w-full h-full" />
        </div>
        {/* Back Face */}
        <div className="tile-3d-face tile-3d-back">
          <RevolvingTile sponsor={alternateSponsor} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export function Sponsors() {
  // Mode selection: "stream" (2 revolving conveyor rows) or "grid" (3D revolving flip grid)
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [shuffleCount, setShuffleCount] = useState<number>(0);

  // Split the 12 other sponsors into 2 randomized rows (6 in Row 1, 6 in Row 2)
  const [row1Sponsors, setRow1Sponsors] = useState<SponsorItem[]>(() =>
    OTHER_SPONSORS_POOL.slice(0, 6)
  );
  const [row2Sponsors, setRow2Sponsors] = useState<SponsorItem[]>(() =>
    OTHER_SPONSORS_POOL.slice(6, 12)
  );

  // Flip states for the 3D grid mode (6 slots in Row 1, 6 slots in Row 2)
  const [flippedSlots, setFlippedSlots] = useState<boolean[]>(() =>
    new Array(12).fill(false)
  );

  // Handle randomized re-shuffle
  const handleShuffle = useCallback(() => {
    const shuffled = shuffleArray(OTHER_SPONSORS_POOL);
    setRow1Sponsors(shuffled.slice(0, 6));
    setRow2Sponsors(shuffled.slice(6, 12));
    setShuffleCount((prev) => prev + 1);
  }, []);

  // Periodic random revolving flip for Grid Mode
  useEffect(() => {
    if (viewMode !== "grid" || isPaused) return;

    const interval = setInterval(() => {
      // Pick a random slot between 0 and 11
      const randomSlot = Math.floor(Math.random() * 12);
      setFlippedSlots((prev) => {
        const next = [...prev];
        next[randomSlot] = !next[randomSlot];
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [viewMode, isPaused]);

  // Repeated arrays to produce seamless continuous revolving marquee without gaps
  const row1Repeated = useMemo(() => {
    return [...row1Sponsors, ...row1Sponsors, ...row1Sponsors];
  }, [row1Sponsors]);

  const row2Repeated = useMemo(() => {
    return [...row2Sponsors, ...row2Sponsors, ...row2Sponsors];
  }, [row2Sponsors]);

  return (
    <section
      id="sponsors"
      className="relative w-full py-16 sm:py-24 bg-[#07131F] scroll-mt-20 overflow-hidden select-none border-b border-[#AEBCC7]/15"
    >
      {/* Environmental Ambient Night Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(11,27,41,0.95)_0%,#07131F_85%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07131F] via-[#07131F]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07131F] via-[#07131F]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* =========================================================================
            1. SECTION HEADER
            Minimalist Cormorant Garamond serif display
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F1E8] tracking-wide font-cormorant"
          >
            Past Sponsors &amp;{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#B8E5D5]">
              Partners
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-xs sm:text-sm text-[#AEBCC7] font-zen max-w-2xl mx-auto leading-relaxed mt-2"
          >
            13 distinguished industry leaders, compute clouds, and national institutions. Featuring our static Title Sponsor anchored in the center while other partners revolve across 2 dynamic rows.
          </motion.p>

          {/* =======================================================================
              INTERACTIVE CONTROLS BAR: Mode Toggle & Shuffle Button
              ======================================================================= */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mt-5">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center rounded-lg bg-[#0A1A28]/80 border border-white/10 p-0.5">
              <button
                onClick={() => setViewMode("stream")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider transition-all cursor-pointer ${
                  viewMode === "stream"
                    ? "bg-[#58B99A]/20 text-[#B8E5D5] border border-[#58B99A]/40 shadow-xs"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Revolving Stream
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#58B99A]/20 text-[#B8E5D5] border border-[#58B99A]/40 shadow-xs"
                    : "text-white/50 hover:text-white"
                }`}
              >
                3D Flip Grid
              </button>
            </div>

            {/* Randomize / Shuffle Button */}
            <button
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1A28]/80 hover:bg-[#12273B] border border-white/10 hover:border-[#58B99A]/40 text-xs font-mono text-[#D9E2E8] hover:text-[#B8E5D5] transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Randomize sponsor order across 2 rows"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#58B99A]" />
              <span>Shuffle Order</span>
            </button>

            {/* Pause/Play Stream Toggle (Applicable in stream mode) */}
            {viewMode === "stream" && (
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1A28]/80 hover:bg-[#12273B] border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label={isPaused ? "Resume revolving stream" : "Pause revolving stream"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#58B99A]" />
                    <span>Play</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#8FAFC4]" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* =========================================================================
            2. REVOLVING TILE SHOWCASE
            - Static Title Sponsor in the middle
            - Other sponsors revolving in random order of 2 rows
            ========================================================================= */}
        <div className="relative w-full my-6 sm:my-8 overflow-visible">
          {/* -----------------------------------------------------------------------
              LAYOUT OPTION A: REVOLVING STREAM (2 Smooth Horizontal Conveyor Rows)
              ----------------------------------------------------------------------- */}
          {viewMode === "stream" && (
            <div className="revolving-container flex flex-col items-center gap-5 sm:gap-7 relative overflow-hidden py-3">
              {/* Row 1: Top Revolving Track (Translates Left in random order) */}
              <div className="w-full revolving-mask overflow-hidden">
                <div
                  key={`row1-${shuffleCount}`}
                  className="revolving-track-left gap-3 sm:gap-4 py-1"
                  style={{
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {row1Repeated.map((sponsor, idx) => (
                    <RevolvingTile key={`r1-${sponsor.id}-${idx}`} sponsor={sponsor} />
                  ))}
                </div>
              </div>

              {/* Centerpiece: The Single Static Title Sponsor (Never Revolves) */}
              <div className="relative z-20 my-1 sm:my-2 flex justify-center w-full px-4">
                <StaticTitleSponsorTile />
              </div>

              {/* Row 2: Bottom Revolving Track (Translates Right in random order) */}
              <div className="w-full revolving-mask overflow-hidden">
                <div
                  key={`row2-${shuffleCount}`}
                  className="revolving-track-right gap-3 sm:gap-4 py-1"
                  style={{
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {row2Repeated.map((sponsor, idx) => (
                    <RevolvingTile key={`r2-${sponsor.id}-${idx}`} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* -----------------------------------------------------------------------
              LAYOUT OPTION B: 3D FLIP REVOLVING GRID (Interactive 2-Row Grid)
              ----------------------------------------------------------------------- */}
          {viewMode === "grid" && (
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:gap-8 py-2">
              {/* Centerpiece Hero Static Title Sponsor */}
              <div className="w-full flex justify-center">
                <StaticTitleSponsorTile />
              </div>

              {/* 2 Rows of 3D Revolving Tiles in Random Order */}
              <div className="w-full space-y-4">
                {/* Row 1: 6 Revolving Flip Slots */}
                <div>
                  <div className="flex items-center gap-2 mb-2 px-1">
                    <span className="w-1.5 h-3 bg-[#58B99A] rounded-full" />
                    <span className="font-mono text-[11px] text-[#B8E5D5] uppercase tracking-wider font-semibold">
                      Row 1 • Revolving Partners
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    {row1Sponsors.map((sponsor, idx) => (
                      <FlipTile
                        key={`flip-r1-${sponsor.id}-${idx}`}
                        primarySponsor={sponsor}
                        alternateSponsor={row2Sponsors[idx] || sponsor}
                        isFlipped={flippedSlots[idx]}
                      />
                    ))}
                  </div>
                </div>

                {/* Row 2: 6 Revolving Flip Slots */}
                <div>
                  <div className="flex items-center gap-2 mb-2 px-1">
                    <span className="w-1.5 h-3 bg-[#C83E34] rounded-full" />
                    <span className="font-mono text-[11px] text-[#D9E2E8] uppercase tracking-wider font-semibold">
                      Row 2 • Revolving Partners
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    {row2Sponsors.map((sponsor, idx) => (
                      <FlipTile
                        key={`flip-r2-${sponsor.id}-${idx}`}
                        primarySponsor={sponsor}
                        alternateSponsor={row1Sponsors[idx] || sponsor}
                        isFlipped={flippedSlots[idx + 6]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            3. PARTNERSHIP CALL-TO-ACTION
            Refined Japanese exhibition invitation panel with SpecularButton
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0B1A28]/40 p-6 sm:p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F1E8] font-cormorant tracking-wide mb-2.5">
            Partner with OpenCode &apos;26
          </h3>

          <p className="text-xs sm:text-sm text-[#AEBCC7] font-zen leading-relaxed max-w-lg mx-auto mb-5">
            Connect your engineering brand with 1,000+ top student developers, sponsor specialized technical tracks, and foster the open-source software ecosystem.
          </p>

          <SpecularButton
            size="lg"
            radius={24}
            tint="#ffffff"
            tintOpacity={0.06}
            textColor="#07131F"
            lineColor="#58B99A"
            baseColor="#FAF7F2"
            intensity={1}
            idleIntensity={0.35}
            shineSize={10}
            shineFade={34}
            thickness={1.2}
            glow={1}
            followMouse
            proximity={250}
            href="/sponsor-registration"
            className="!bg-[#FAF7F2] hover:!bg-[#EDE8DC] !text-[#07131F] font-mono text-xs uppercase tracking-wider font-bold shadow-md px-7 py-3 justify-center"
          >
            <span>Become a Sponsor Partner</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#07131F] transition-transform group-hover:translate-x-1" />
          </SpecularButton>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsors;

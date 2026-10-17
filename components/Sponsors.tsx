"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import SpecularButton from "./SpecularButton";

interface SponsorItem {
  id: string;
  name: string;
  tier: string;
  logo: string;
  link?: string;
  description?: string;
}

interface SponsorCategory {
  id: string;
  title: string;
  subtitle: string;
  sponsors: SponsorItem[];
}

/**
 * Exactly 13 sponsors across the 5 preserved categories:
 * 1. Title Sponsors (1)
 * 2. Cloud and Compute (2)
 * 3. Developer Tools (4)
 * 4. Web3 and Innovation (3)
 * 5. Government and Academic (3)
 */
const SPONSOR_CATEGORIES: SponsorCategory[] = [
  // 1. Title Sponsors (1)
  {
    id: "title",
    title: "Title Sponsors",
    subtitle: "Lead organization anchoring OpenCode '26 engineering initiatives.",
    sponsors: [
      {
        id: "taskade",
        name: "Taskade",
        tier: "Title Partner",
        logo: "/logos_taskade.svg",
        link: "https://www.taskade.com",
        description: "Collaborative AI workspace powering student builders, hackathon squads, and project workspaces.",
      },
    ],
  },
  // 2. Cloud and Compute (2)
  {
    id: "cloud",
    title: "Cloud and Compute",
    subtitle: "High-performance compute clusters and low-latency storage providers.",
    sponsors: [
      {
        id: "digitalocean",
        name: "DigitalOcean",
        tier: "Cloud Partner",
        logo: "/logos_digital-ocean.svg",
        link: "https://www.digitalocean.com",
        description: "Developer-loved cloud infrastructure for instant container and VM deployment.",
      },
      {
        id: "upcloud",
        name: "UpCloud",
        tier: "Cloud Partner",
        logo: "/logos_upcloud.svg",
        link: "https://upcloud.com",
        description: "High-performance compute clusters and low-latency storage for rapid prototyping.",
      },
    ],
  },
  // 3. Developer Tools (4)
  {
    id: "devtools",
    title: "Developer Tools",
    subtitle: "Industry-standard IDEs, code collaboration suites, and secrets management.",
    sponsors: [
      {
        id: "github",
        name: "GitHub",
        tier: "Productivity Partner",
        logo: "/logos_github.svg",
        link: "https://github.com",
        description: "The world's leading developer and AI-powered collaboration platform.",
      },
      {
        id: "replit",
        name: "Replit",
        tier: "DevTools Partner",
        logo: "/logos_replit.svg",
        link: "https://replit.com",
        description: "Browser-first collaborative software creation and instant application hosting.",
      },
      {
        id: "jetbrains",
        name: "JetBrains",
        tier: "Tooling Partner",
        logo: "/images/jetbrains.png",
        link: "https://www.jetbrains.com",
        description: "Smart IDEs and developer tools for polyglot software engineering.",
      },
      {
        id: "1password",
        name: "1Password",
        tier: "Security Partner",
        logo: "/images/1password.svg",
        link: "https://1password.com",
        description: "Enterprise-grade credential and secrets management for engineering teams.",
      },
    ],
  },
  // 4. Web3 and Innovation (3)
  {
    id: "web3",
    title: "Web3 and Innovation",
    subtitle: "Scalable blockchains, zero-knowledge ecosystems, and decentralized data storage.",
    sponsors: [
      {
        id: "solana",
        name: "Solana",
        tier: "Ecosystem Partner",
        logo: "/logos_solana.svg",
        link: "https://solana.com",
        description: "High-throughput blockchain engine powering fast, censorship-resistant decentralized apps.",
      },
      {
        id: "polygon",
        name: "Polygon Labs",
        tier: "Innovation Partner",
        logo: "/logos_polygon.svg",
        link: "https://polygon.technology",
        description: "Zero-knowledge scaling protocols and Layer 2 Ethereum rollups.",
      },
      {
        id: "filecoin",
        name: "Filecoin",
        tier: "Innovation Partner",
        logo: "/logos_filecoin.svg",
        link: "https://filecoin.io",
        description: "Decentralized data storage and preservation layer powering open web applications.",
      },
    ],
  },
  // 5. Government and Academic (3)
  {
    id: "government-academic",
    title: "Government and Academic",
    subtitle: "National research bodies and entrepreneurship institutes backing student ventures.",
    sponsors: [
      {
        id: "edii",
        name: "EDII",
        tier: "Academic Patron",
        logo: "/images/EDII.png",
        description: "Entrepreneurship Development Institute of India fostering student ventures.",
      },
      {
        id: "dst",
        name: "DST",
        tier: "National Patron",
        logo: "/images/DST.png",
        description: "Department of Science and Technology, Government of India.",
      },
      {
        id: "nstedb",
        name: "NSTEDB",
        tier: "Innovation Patron",
        logo: "/images/NSTEDB.png",
        description: "National Science & Technology Entrepreneurship Development Board.",
      },
    ],
  },
];

/**
 * Standard compact logo tile
 * - Consistent height and comfortable padding
 * - Preserves natural aspect ratios with object-contain
 * - Centers logos horizontally and vertically
 * - Balanced visual weight (1Password paired with wordmark, DST inverted for dark background legibility)
 */
function SponsorTile({ sponsor }: { sponsor: SponsorItem }) {
  const isDst = sponsor.id === "dst";
  const isOnePassword = sponsor.id === "1password";

  const content = (
    <div className="relative group w-full min-w-[140px] sm:min-w-0 h-16 sm:h-18 lg:h-20 rounded-xl border border-white/10 hover:border-white/25 bg-[#0A1A28]/60 hover:bg-[#0E2236]/80 px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] shrink-0 sm:shrink">
      {isOnePassword ? (
        <div className="flex items-center gap-2 sm:gap-2.5">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            loading="lazy"
            decoding="async"
            className="object-contain h-6 w-6 sm:h-7 sm:w-7 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-zen text-xs sm:text-sm font-semibold text-[#F4F1E8] tracking-wide">
            1Password
          </span>
        </div>
      ) : (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          loading="lazy"
          decoding="async"
          className={`object-contain max-h-7 sm:max-h-8 lg:max-h-9 w-auto max-w-[125px] sm:max-w-[145px] transition-all duration-200 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${
            isDst ? "brightness-0 invert" : ""
          }`}
        />
      )}

      {sponsor.link && (
        <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-60 transition-opacity text-[#8FAFC4]">
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
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58B99A] rounded-xl shrink-0 sm:shrink flex-1"
        aria-label={`Visit ${sponsor.name} website (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return <div className="shrink-0 sm:shrink flex-1">{content}</div>;
}

/**
 * Modest prominent presentation for Title Sponsors (Taskade)
 * - Compact height (h-18 sm:h-22), neatly left-aligned, avoiding disproportionate height
 */
function TitleSponsorTile({ sponsor }: { sponsor: SponsorItem }) {
  const content = (
    <div className="relative group w-full max-w-md h-18 sm:h-22 rounded-xl border border-white/15 hover:border-[#58B99A]/50 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.01] px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_25px_rgba(88,185,154,0.06)] hover:shadow-[0_0_35px_rgba(88,185,154,0.15)]">
      <div className="flex items-center gap-3.5 sm:gap-4">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          loading="lazy"
          decoding="async"
          className="object-contain max-h-9 sm:max-h-11 w-auto max-w-[160px] sm:max-w-[190px] transition-transform duration-200 group-hover:scale-105"
        />
        <div className="hidden sm:block">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#58B99A]/30 bg-[#58B99A]/10 text-[10px] font-mono text-[#58B99A] uppercase tracking-wider font-semibold">
            <span className="w-1 h-1 rounded-full bg-[#58B99A]" />
            Title Partner
          </span>
        </div>
      </div>

      {sponsor.link && (
        <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono text-[#8FAFC4] group-hover:text-white transition-colors border border-white/10 group-hover:border-white/30 rounded-lg px-2.5 py-1.5 bg-white/[0.02] group-hover:bg-white/[0.06]">
          <span>VISIT</span>
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58B99A] rounded-xl"
        aria-label={`Visit ${sponsor.name} website (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return content;
}

export function Sponsors() {
  const titleCategory = SPONSOR_CATEGORIES[0]; // Title Sponsors (1)
  const cloudCategory = SPONSOR_CATEGORIES[1]; // Cloud and Compute (2)
  const devtoolsCategory = SPONSOR_CATEGORIES[2]; // Developer Tools (4)
  const web3Category = SPONSOR_CATEGORIES[3]; // Web3 and Innovation (3)
  const patronsCategory = SPONSOR_CATEGORIES[4]; // Government and Academic (3)

  return (
    <section
      id="sponsors"
      className="relative w-full py-16 sm:py-20 bg-[#07131F] scroll-mt-20 overflow-hidden select-none border-b border-[#AEBCC7]/15"
    >
      {/* Subtle Environmental Ambient Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(11,27,41,0.9)_0%,#07131F_85%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07131F] via-[#07131F]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07131F] via-[#07131F]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* =========================================================================
            1. SECTION HEADER
            Minimalist editorial eyebrow + Cormorant Garamond serif display
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-[#0A1A28]/80 text-xs tracking-wider text-[#D9E2E8] backdrop-blur-md mb-2.5 font-zen shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C83E34]" />
            <span className="text-[10px] text-[#8FAFC4] uppercase tracking-[0.25em] font-mono">
              PARTNERSHIP &amp; PATRONAGE • 2026
            </span>
          </motion.div>

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
            className="text-sm text-[#AEBCC7] font-zen max-w-2xl mx-auto leading-relaxed mt-2.5"
          >
            Distinguished industry leaders, cloud infrastructure providers, and foundational institutions supporting 1,000+ open-source student builders.
          </motion.p>
        </div>

        {/* =========================================================================
            2. COHESIVE FIVE-CATEGORY SHOWCASE
            - Exactly 13 sponsors total across all 5 categories
            - Left-aligned anchors with consistent headings and spacing
            - Balanced horizontal distribution without empty page voids
            ========================================================================= */}
        <div className="space-y-8 sm:space-y-10">
          {/* -----------------------------------------------------------------------
              CATEGORY 1: Title Sponsors (1 sponsor)
              ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#C83E34] rounded-full shrink-0" />
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F4F1E8] tracking-wide">
                  {titleCategory.title}
                </h3>
                <span className="text-[11px] font-mono text-[#8FAFC4]/50">
                  ({titleCategory.sponsors.length})
                </span>
              </div>
              <p className="text-xs text-[#8FAFC4]/75 font-zen sm:text-right">
                {titleCategory.subtitle}
              </p>
            </div>

            <div>
              {titleCategory.sponsors.map((sponsor) => (
                <TitleSponsorTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CATEGORY 2: Cloud and Compute (2 sponsors)
              ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#C83E34] rounded-full shrink-0" />
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F4F1E8] tracking-wide">
                  {cloudCategory.title}
                </h3>
                <span className="text-[11px] font-mono text-[#8FAFC4]/50">
                  ({cloudCategory.sponsors.length})
                </span>
              </div>
              <p className="text-xs text-[#8FAFC4]/75 font-zen sm:text-right">
                {cloudCategory.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
              {cloudCategory.sponsors.map((sponsor) => (
                <SponsorTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CATEGORY 3: Developer Tools (4 sponsors: evenly fills full-width grid)
              ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#C83E34] rounded-full shrink-0" />
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F4F1E8] tracking-wide">
                  {devtoolsCategory.title}
                </h3>
                <span className="text-[11px] font-mono text-[#8FAFC4]/50">
                  ({devtoolsCategory.sponsors.length})
                </span>
              </div>
              <p className="text-xs text-[#8FAFC4]/75 font-zen sm:text-right">
                {devtoolsCategory.subtitle}
              </p>
            </div>

            <div className="flex sm:grid sm:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar pb-1 w-full">
              {devtoolsCategory.sponsors.map((sponsor) => (
                <SponsorTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CATEGORY 4: Web3 and Innovation (3 sponsors: evenly fills full-width grid)
              ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#C83E34] rounded-full shrink-0" />
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F4F1E8] tracking-wide">
                  {web3Category.title}
                </h3>
                <span className="text-[11px] font-mono text-[#8FAFC4]/50">
                  ({web3Category.sponsors.length})
                </span>
              </div>
              <p className="text-xs text-[#8FAFC4]/75 font-zen sm:text-right">
                {web3Category.subtitle}
              </p>
            </div>

            <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar pb-1 w-full">
              {web3Category.sponsors.map((sponsor) => (
                <SponsorTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CATEGORY 5: Government and Academic (3 sponsors: evenly fills full-width grid)
              ----------------------------------------------------------------------- */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#C83E34] rounded-full shrink-0" />
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-[#F4F1E8] tracking-wide">
                  {patronsCategory.title}
                </h3>
                <span className="text-[11px] font-mono text-[#8FAFC4]/50">
                  ({patronsCategory.sponsors.length})
                </span>
              </div>
              <p className="text-xs text-[#8FAFC4]/75 font-zen sm:text-right">
                {patronsCategory.subtitle}
              </p>
            </div>

            <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar pb-1 w-full">
              {patronsCategory.sponsors.map((sponsor) => (
                <SponsorTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
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
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-[0.2em] text-[#8FAFC4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C83E34]" />
            <span>Partnership Cohort 2026</span>
          </div>

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

"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";
import {
  FolderGit2,
  Github,
  User,
  Layers,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";
import BlurText from "./BlurText";
import SpecularButton from "./SpecularButton";
import SakuraCanvas from "./SakuraCanvas";
import "./ProjectsGallery.css";

// Exactly 3 curated exhibition chapters with 5 projects each = 15 total projects
interface ExhibitionChapter {
  id: string;
  chapterNumber: string;
  romanNumeral: string;
  title: string;
  rangeLabel: string;
  subtitle: string;
  startIndex: number;
  endIndex: number;
}

const EXHIBITION_CHAPTERS: ExhibitionChapter[] = [
  {
    id: "chapter-1",
    chapterNumber: "01",
    romanNumeral: "I",
    title: "Interactive Platforms & AI",
    rangeLabel: "01–05",
    subtitle:
      "Automated NLP resume intelligence, high-concurrency websocket forums, and Solana generative token launchpads.",
    startIndex: 0,
    endIndex: 5,
  },
  {
    id: "chapter-2",
    chapterNumber: "02",
    romanNumeral: "II",
    title: "Systems, Security & Community",
    rangeLabel: "06–10",
    subtitle:
      "Hands-on offensive/defensive CTF playgrounds, WebRTC peer spaces, alumni networks, and deep sentiment analysis.",
    startIndex: 5,
    endIndex: 10,
  },
  {
    id: "chapter-3",
    chapterNumber: "03",
    romanNumeral: "III",
    title: "Emerging Protocols & Frameworks",
    rangeLabel: "11–15",
    subtitle:
      "Production-audited Solidity DeFi primitives, kernel forensics analysis drills, mobile trivia, and fluid animation UI.",
    startIndex: 10,
    endIndex: 15,
  },
];

export default function Projects() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const lastActiveElementRef = React.useRef<HTMLElement | null>(null);

  const currentChapter = EXHIBITION_CHAPTERS[activeChapterIndex];

  // Exactly 5 unique projects for the active exhibition chapter
  const currentProjects = useMemo(() => {
    return projectsData.slice(currentChapter.startIndex, currentChapter.endIndex);
  }, [currentChapter]);

  const handleSelectChapter = (index: number) => {
    if (index === activeChapterIndex) return;
    setActiveChapterIndex(index);
    setSelectedProject(null);
  };

  // Open detailed card, recording the card's screen position so it pops out from that spot
  const handleOpenDetail = useCallback(
    (project: ProjectItem, e?: React.MouseEvent | React.KeyboardEvent) => {
      if (e && "currentTarget" in e && e.currentTarget) {
        lastActiveElementRef.current = e.currentTarget as HTMLElement;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setOrigin({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      } else {
        setOrigin(null);
      }
      setSelectedProject(project);
    },
    []
  );

  const handleCloseDetail = useCallback(() => {
    setSelectedProject(null);
    if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    }
  }, []);

  // Keyboard navigation & body scroll lock while detailed modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseDetail();
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, handleCloseDetail]);

  return (
    <div
      id="projects"
      className="min-h-screen py-16 sm:py-24 scroll-mt-20 bg-[#07131F] border-b border-[#AEBCC7]/15 overflow-hidden relative select-none"
    >
      {/* Background Photographic Art: Mystical Torii Gate & Mount Fuji Night Sky */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/tracks-projects-bg.jpg"
          alt="Torii Gate and Mount Fuji Night Landscape"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-85 scale-105 pointer-events-none transition-opacity"
        />
        {/* Soft atmospheric night tint: allows Mount Fuji, starry galaxy, and glowing Torii horizon to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07131F]/60 via-transparent to-[#07131F]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[#07131F]/15 pointer-events-none" />
      </div>

      {/* Top & Bottom Seamless Edge Transitions */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07131F] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07131F] to-transparent pointer-events-none z-10" />

      {/* Drifting Ethereal Petals & Spirit Lights in the Background */}
      <SakuraCanvas
        active={true}
        position="absolute"
        petalCount={45}
        className="pointer-events-none z-10 opacity-75"
        colors={[
          "rgba(184, 229, 213, 0.85)", // Glowing Mint (#B8E5D5)
          "rgba(88, 185, 154, 0.80)",  // Luminous Emerald (#58B99A)
          "rgba(255, 183, 197, 0.75)", // Sakura Pink
          "rgba(56, 189, 248, 0.70)",  // Ethereal Spirit Cyan
          "rgba(244, 241, 232, 0.80)", // Soft Moonlit Ivory
        ]}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 overflow-visible">
        {/* =========================================================================
            1. SECTION HEADER
            Minimalist exhibition ribbon + Cormorant Garamond serif headline
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Exhibition Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#58B99A]/25 bg-[#0A1A28]/80 text-xs tracking-wider text-[#D9E2E8] backdrop-blur-md mb-3 font-zen shadow-sm"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#58B99A]" />
            <span className="text-[11px] text-[#58B99A] uppercase tracking-[0.2em] font-mono font-medium">
              EXHIBITION ARCHIVE
            </span>
            <span className="w-1 h-1 rounded-full bg-[#8FAFC4]/40" />
            <span className="text-[10px] text-[#8FAFC4]/75 uppercase tracking-[0.2em] font-mono">
              15 REPOSITORIES • 3 CHAPTERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F1E8] tracking-wide font-cormorant"
          >
            Tracks &amp; Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#B8E5D5]">
              Projects
            </span>
          </motion.h2>

          <div className="mt-2.5">
            <BlurText
              text="15 open-source initiatives curated across three exhibition chapters. Select a chapter below to explore repositories and inspect technical specifications."
              className="text-sm sm:text-base text-[#AEBCC7] leading-relaxed font-zen justify-center text-center max-w-2xl mx-auto"
              delay={20}
            />
          </div>
        </div>

        {/* =========================================================================
            2. MINIMALIST JAPANESE CHAPTER SELECTORS
            Clean horizontal editorial tabs anchored with fine dividers & active underline
            ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-7 sm:mb-9">
          <div
            className="border-b border-white/10"
            role="tablist"
            aria-label="Exhibition Chapters"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
              {EXHIBITION_CHAPTERS.map((chapter, index) => {
                const isActive = index === activeChapterIndex;
                return (
                  <button
                    key={chapter.id}
                    role="tab"
                    id={`chapter-tab-${chapter.id}`}
                    aria-selected={isActive}
                    aria-controls={`chapter-panel-${chapter.id}`}
                    tabIndex={0}
                    onClick={() => handleSelectChapter(index)}
                    className="group relative text-left py-3.5 sm:py-4 px-3 sm:px-4 transition-colors duration-300 cursor-pointer focus:outline-none rounded-t-lg hover:bg-white/[0.02]"
                  >
                    {/* Top Row: Chapter Numeral + Range Badge */}
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span
                        className={`tracking-widest uppercase transition-colors text-[11px] ${
                          isActive
                            ? "text-[#58B99A] font-semibold"
                            : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        CHAPTER {chapter.chapterNumber}
                      </span>
                      <span
                        className={`tracking-wider px-2 py-0.5 rounded-full text-[10px] transition-colors ${
                          isActive
                            ? "bg-[#58B99A]/15 text-[#B8E5D5] border border-[#58B99A]/30 font-semibold"
                            : "bg-white/5 text-white/40 border border-white/10 group-hover:text-white/60"
                        }`}
                      >
                        {chapter.rangeLabel}
                      </span>
                    </div>

                    {/* Chapter Title */}
                    <h3
                      className={`font-cormorant text-base sm:text-lg lg:text-[19px] font-bold tracking-wide transition-colors leading-snug ${
                        isActive
                          ? "text-[#F4F1E8]"
                          : "text-white/60 group-hover:text-white/90"
                      }`}
                    >
                      {chapter.title}
                    </h3>

                    {/* Restrained active mint underline indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeExhibitionLine"
                        className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#58B99A] via-[#B8E5D5] to-[#58B99A]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 34,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. ASYMMETRICAL FIVE-PROJECT ART WALL GALLERY
            Desktop: All 5 projects visible simultaneously in a balanced 12-col grid
            ========================================================================= */}
        <div className="max-w-7xl mx-auto overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              id={`chapter-panel-${currentChapter.id}`}
              role="tabpanel"
              aria-labelledby={`chapter-tab-${currentChapter.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full overflow-visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 overflow-visible">
                {currentProjects.map((project, index) => {
                  const isHero = index === 0;

                  // Responsive Column Spans
                  let spanClass = "col-span-1 md:col-span-12 lg:col-span-4";
                  let heightClass = "h-[390px] sm:h-[400px] lg:h-[350px]";

                  if (index === 0) {
                    spanClass = "col-span-1 md:col-span-7 lg:col-span-7";
                    heightClass = "h-[400px] sm:h-[420px] lg:h-[420px]";
                  } else if (index === 1) {
                    spanClass = "col-span-1 md:col-span-5 lg:col-span-5";
                    heightClass = "h-[400px] sm:h-[420px] lg:h-[420px]";
                  } else if (index === 2) {
                    spanClass = "col-span-1 md:col-span-6 lg:col-span-4";
                    heightClass = "h-[380px] sm:h-[390px] lg:h-[350px]";
                  } else if (index === 3) {
                    spanClass = "col-span-1 md:col-span-6 lg:col-span-4";
                    heightClass = "h-[380px] sm:h-[390px] lg:h-[350px]";
                  } else if (index === 4) {
                    spanClass = "col-span-1 md:col-span-12 lg:col-span-4";
                    heightClass = "h-[380px] sm:h-[390px] lg:h-[350px]";
                  }

                  const isSelected = selectedProject?.id === project.id;

                  return (
                    <div
                      key={project.id}
                      onClick={(e) => handleOpenDetail(project, e)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleOpenDetail(project, e);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Inspect ${project.title} (${project.domainLabel})`}
                      aria-pressed={isSelected}
                      className={`group exhibition-project-card ${spanClass} ${heightClass} cursor-pointer ${
                        isSelected ? "exhibition-project-card--active" : ""
                      }`}
                    >
                      {/* Full-bleed Photographic Artwork */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="exhibition-project-card__bg"
                        loading="lazy"
                      />

                      {/* Ambient Base Night Tint */}
                      <div className="exhibition-project-card__tint" />

                      {/* Layered Contrast Gradient: 100% Text Legibility */}
                      <div className="exhibition-project-card__gradient" />

                      {/* Content Container (Guaranteed 100% Opacity) */}
                      <div className="exhibition-project-card__content p-4 sm:p-5 lg:p-6">
                        {/* Top Metadata Header */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            {/* Catalog Serial Number */}
                            <span className="font-mono text-xs font-semibold text-white/60 tracking-wider">
                              #{String(project.id).padStart(2, "0")}
                            </span>

                            <span className="w-1 h-1 rounded-full bg-white/20" />

                            {/* Category / Track Badge */}
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[10px] sm:text-[11px] font-mono text-white/90 backdrop-blur-sm shadow-sm transition-colors">
                              <Layers className="w-3 h-3 text-[#58B99A]" />
                              <span>{project.domainLabel}</span>
                            </span>
                          </div>

                          {/* GitHub Quick Link Button */}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`View ${project.title} on GitHub`}
                            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white/80 hover:text-white backdrop-blur-sm transition-all duration-200 cursor-pointer shrink-0"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Bottom Information Stack */}
                        <div className="mt-auto pt-4">
                          {/* Title with Vertical Mint / Vermilion Accent Bar */}
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <span
                              className={`w-1 rounded-full shrink-0 ${
                                isHero
                                  ? "h-6 sm:h-7 bg-[#C83E34]"
                                  : "h-5 sm:h-6 bg-[#58B99A]"
                              }`}
                            />
                            <h4
                              className={`font-cormorant font-bold text-[#F4F1E8] tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                                isHero
                                  ? "text-2xl sm:text-3xl lg:text-[32px]"
                                  : "text-xl sm:text-2xl lg:text-[25px]"
                              }`}
                            >
                              {project.title}
                            </h4>
                          </div>

                          {/* Short Concise Description */}
                          <p className="font-zen text-xs sm:text-[13px] text-white/85 line-clamp-2 leading-relaxed mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            {project.description}
                          </p>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-3.5">
                            {project.tags.slice(0, isHero ? 5 : 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] font-mono text-white/85 backdrop-blur-sm shadow-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Bottom Action Row: Mentor & View Specification */}
                          <div className="pt-2.5 border-t border-white/15 flex items-center justify-between gap-2.5">
                            <div className="flex items-center gap-1.5 text-[11px] font-zen text-white/60">
                              <User className="w-3 h-3 text-white/50 shrink-0" />
                              <span className="truncate max-w-[130px] sm:max-w-[170px]">
                                {project.mentor}
                              </span>
                            </div>

                            <SpecularButton
                              size="sm"
                              radius={16}
                              tint="#ffffff"
                              tintOpacity={0.06}
                              textColor="#ffffff"
                              lineColor="#58B99A"
                              baseColor="#102535"
                              intensity={1}
                              idleIntensity={0.35}
                              shineSize={10}
                              shineFade={34}
                              thickness={1.2}
                              glow={1}
                              followMouse
                              proximity={200}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenDetail(project, e);
                              }}
                              className="!bg-white/10 hover:!bg-white/20 border border-white/20 hover:border-white/35 font-mono text-[10px] sm:text-[11px] tracking-wider px-3 py-1"
                            >
                              <span>SPECIFICATION</span>
                              <ArrowRight className="w-3 h-3 text-white transition-transform group-hover:translate-x-0.5" />
                            </SpecularButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            4. ARCHIVE FOOTER
            Minimalist link to explore all organization repositories
            ========================================================================= */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#718394] font-zen">
            Looking for all repositories?{" "}
            <a
              href="https://github.com/orgs/opencodeiiita/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#B8E5D5] hover:text-[#A3DAC7] font-semibold underline underline-offset-4 transition-colors"
            >
              Explore all OpenCode repos on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </section>

      {/* =========================================================================
          5. DETAILED PROJECT CARD POP-OUT
          Gradually pops out from the exact position of the clicked gallery card.
          Rendered with translucent glassy-blue styling, backdrop blur, and full specification.
          ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-project-title"
          >
            {/* Backdrop: Subtle transparent dark overlay so the background art & petals shine through */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={handleCloseDetail}
              className="absolute inset-0 bg-black/40 backdrop-blur-[3px] cursor-pointer"
              aria-hidden="true"
            />

            {/* Detailed Project Card: Frosted Glassmorphism pop-out */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.52,
                x: origin && typeof window !== "undefined" ? origin.x - window.innerWidth / 2 : 0,
                y: origin && typeof window !== "undefined" ? origin.y - window.innerHeight / 2 : 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.52,
                x: origin && typeof window !== "undefined" ? origin.x - window.innerWidth / 2 : 0,
                y: origin && typeof window !== "undefined" ? origin.y - window.innerHeight / 2 : 0,
              }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-[620px] max-h-[85vh] flex flex-col rounded-2xl bg-[#0B1E30]/45 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.35),0_0_40px_rgba(88,185,154,0.12)] overflow-hidden text-[#F4F1E8]"
            >
              {/* Prismatic Diagonal Light Sheen Across Glass */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.02] to-transparent pointer-events-none z-10" />

              {/* Delicate Top Mint Hairline Accent */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#58B99A]/80 to-transparent z-20 pointer-events-none" />

              {/* Close Button Top-Right */}
              <button
                onClick={handleCloseDetail}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-[#F4F1E8] hover:text-[#B8E5D5] backdrop-blur-md transition-all cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#58B99A]"
                aria-label="Close project specification"
              >
                <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Header: Track & Project Title */}
              <div className="p-4 sm:p-6 pb-3 sm:pb-4 pr-12 border-b border-white/10 bg-white/[0.04] backdrop-blur-md shrink-0 relative z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#58B99A] tracking-wider">
                    #{String(selectedProject.id).padStart(2, "0")} / 15
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#58B99A] uppercase">
                    {selectedProject.domainLabel}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider hidden sm:inline-block">
                    OpenCode '26 Archive
                  </span>
                </div>
                <h3
                  id="detail-project-title"
                  className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F4F1E8] tracking-wide leading-tight drop-shadow-sm"
                >
                  {selectedProject.title}
                </h3>
              </div>

              {/* Scrollable Body with Detailed Specifications */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 overscroll-contain relative z-20">
                {/* Banner Artwork */}
                {selectedProject.image && (
                  <div className="relative h-36 sm:h-44 w-full rounded-xl overflow-hidden border border-white/20 shadow-lg shrink-0 bg-black/20">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                {/* Problem / Overview */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs">
                  <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F4F1E8] uppercase mb-1.5">
                    PROBLEM &amp; OBJECTIVE
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D9E2E8] font-zen leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Solution & Engineering */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs">
                  <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#58B99A] uppercase mb-1.5">
                    SOLUTION &amp; ARCHITECTURE
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D9E2E8] font-zen leading-relaxed">
                    Engineered during OpenCode 2026 as a modular, production-ready system utilizing{" "}
                    {selectedProject.tags.slice(0, 3).join(", ")}. Architected with strict code quality
                    guidelines, automated testing workflows, and verified open-source maintainer
                    reviews.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs">
                  <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#58B99A] uppercase mb-1.5">
                    KEY HIGHLIGHTS
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#D9E2E8] font-zen leading-relaxed space-y-1.5 list-disc list-inside">
                    <li>Production-ready CI/CD automation &amp; unit test suites</li>
                    <li>Extensible modular codebase with documented contribution guidelines</li>
                    <li>Scalable architecture tailored for community collaboration</li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs">
                  <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#8FAFC4] uppercase mb-2">
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 rounded-md bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-xs font-mono font-medium text-[#F4F1E8] backdrop-blur-md shadow-xs transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentorship */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs">
                  <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#8FAFC4] uppercase mb-1.5">
                    PROJECT LEAD &amp; MENTORSHIP
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AEBCC7] font-zen">
                    {selectedProject.mentor}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-between gap-3 shrink-0 relative z-20">
                <span className="text-[11px] font-mono text-[#8FAFC4] hidden sm:inline">
                  OpenCode 2026 • Verified Repository
                </span>

                <SpecularButton
                  size="sm"
                  radius={20}
                  tint="#ffffff"
                  tintOpacity={0.12}
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
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!bg-[#F4F1E8] hover:!bg-[#B8E5D5] !text-[#07131F] font-mono text-xs font-bold tracking-wider shadow-lg px-5 py-2.5 ml-auto flex items-center gap-1.5"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </SpecularButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

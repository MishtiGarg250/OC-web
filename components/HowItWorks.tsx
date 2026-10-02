"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, GitPullRequest, Trophy, Building2, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import BlurText from "./BlurText";
import FlipCard from "./FlipCard";

const japaneseThemePhotos = [
  {
    src: "/images/japanese-theme-1.jpg",
    alt: "Japanese night landscape neon lights",
  },
  {
    src: "/images/japanese-theme-2.jpg",
    alt: "Traditional Japanese temple street at dusk",
  },
  {
    src: "/images/japanese-theme-3.jpg",
    alt: "Cherry blossom branch against nighttime pagoda",
  },
  {
    src: "/images/japanese-theme-4.jpg",
    alt: "Atmospheric Japanese night mountain and moon",
  },
];

const contributorSteps = [
  {
    number: "01",
    icon: Search,
    title: "Claim Issue",
    description:
      "Browse our curated repositories and find an issue that excites you. From starter-friendly 'good-first-issue' tags to complex architectural features, pick what challenges you most.",
  },
  {
    number: "02",
    icon: Code,
    title: "Solve & Collaborate",
    description:
      "Dive into the codebase with confidence. Maintainers and peers are actively available in dedicated Discord channels to brainstorm approaches, troubleshoot blockers, and review logic.",
  },
  {
    number: "03",
    icon: GitPullRequest,
    title: "Submit PR",
    description:
      "Push clean commits and open your Pull Request. Experience professional code review, learn automated CI/CD practices, and refine your code to meet production repository standards.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Climb Leaderboard",
    description:
      "Watch your PR get merged! Points are automatically allocated to your profile on the live leaderboard. Compete with builders nationwide for cash prizes, swag kits, and certificates.",
  },
];

const sponsorSteps = [
  {
    number: "01",
    icon: Building2,
    title: "Partner Registration",
    description:
      "Choose from our tiered sponsorship packages or design a custom partnership. Complete the quick onboarding to align event deliverables with your company's hiring and developer relations goals.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Track & Bounty Creation",
    description:
      "Introduce a dedicated challenge track or developer bounty around your API, cloud platform, SDK, or protocol. Incentivize developers to build real-world applications on your stack.",
  },
  {
    number: "03",
    icon: Users,
    title: "Direct Mentorship",
    description:
      "Host technical workshops, keynote sessions, and maintainer AMAs. Connect directly with high-intent developers, answer technical questions, and position your team as thought leaders.",
  },
  {
    number: "04",
    icon: Award,
    title: "Talent Acquisition",
    description:
      "Gain direct visibility into contributors' git commits, problem-solving speed, and code quality. Fast-track top performers directly into your internship and full-time hiring pipeline.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"contributors" | "sponsors">("contributors");

  const steps = activeTab === "contributors" ? contributorSteps : sponsorSteps;

  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-[#0B1C2A] border-b border-[#AEBCC7]/15 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#AEBCC7]/15 bg-[#102535]/55 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9E2E8] backdrop-blur-md mb-4"
          >
            <GitPullRequest className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>Process &amp; Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4F1E8] tracking-tight"
          >
            How{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#D6B56C]">
              OpenCode Works
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Whether you are an aspiring developer looking to contribute or a company seeking elite engineering talent, OpenCode is structured for maximum impact."
              className="text-base sm:text-lg text-[#AEBCC7] leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#102535]/55 border border-[#AEBCC7]/15 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setActiveTab("contributors")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "contributors"
                  ? "text-[#08131D]"
                  : "text-[#AEBCC7] hover:text-[#F4F1E8]"
              }`}
            >
              {activeTab === "contributors" && (
                <motion.div
                  layoutId="howItWorksTab"
                  className="absolute inset-0 rounded-full bg-[#D6B56C] shadow-md shadow-[#D6B56C]/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-4 h-4" />
                For Contributors
              </span>
            </button>

            <button
              onClick={() => setActiveTab("sponsors")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "sponsors"
                  ? "text-[#08131D]"
                  : "text-[#AEBCC7] hover:text-[#F4F1E8]"
              }`}
            >
              {activeTab === "sponsors" && (
                <motion.div
                  layoutId="howItWorksTab"
                  className="absolute inset-0 rounded-full bg-[#D6B56C] shadow-md shadow-[#D6B56C]/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                For Sponsors &amp; Mentors
              </span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const photo = japaneseThemePhotos[index % japaneseThemePhotos.length];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex justify-center w-full"
                >
                  <FlipCard
                    front={
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/90 via-[#07131F]/20 to-transparent pointer-events-none" />

                        {/* Step Pill */}
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1C2A]/90 border border-[#8FAFC4]/30 backdrop-blur-md text-[11px] font-bold text-[#D6B56C] shadow-md">
                          <span>Step {step.number}</span>
                        </div>

                        {/* Bottom Overlay with Title & Flip Prompt */}
                        <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0B1C2A]/85 border border-[#8FAFC4]/25 backdrop-blur-md flex items-center justify-between">
                          <div>
                            <p className="text-xs text-[#AEBCC7]">Step {step.number}</p>
                            <h4 className="text-sm sm:text-base font-bold text-[#F4F1E8] line-clamp-1">
                              {step.title}
                            </h4>
                          </div>
                          <span className="text-[11px] font-semibold text-[#D6B56C] px-2.5 py-1 rounded-full bg-[#D6B56C]/10 border border-[#D6B56C]/30 flex items-center gap-1 whitespace-nowrap">
                            Flip ↻
                          </span>
                        </div>
                      </div>
                    }
                    back={
                      <div className="relative flex flex-col justify-between h-full p-6 sm:p-7 select-text">
                        <div className="absolute top-3 right-4 text-6xl font-black text-[#8FAFC4]/10 pointer-events-none select-none font-mono">
                          {step.number}
                        </div>

                        <div>
                          <div className="w-12 h-12 rounded-xl bg-[#0B1C2A]/90 border border-[#8FAFC4]/25 flex items-center justify-center text-[#D6B56C] mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                            <Icon className="w-6 h-6" />
                          </div>

                          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0B1C2A]/90 border border-[#8FAFC4]/25 text-[11px] font-bold text-[#D6B56C] uppercase tracking-wider mb-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                            Step {step.number}
                          </div>

                          <h3 className="text-xl font-bold text-[#F4F1E8] mb-2.5">
                            {step.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#AEBCC7] leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-3.5 border-t border-[#8FAFC4]/15 flex items-center justify-between text-xs text-[#8FAFC4] font-medium">
                          <span>
                            {activeTab === "contributors" ? "Participant Track" : "Sponsor Track"}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D6B56C]" />
                        </div>
                      </div>
                    }
                    axis="y"
                    flipOnClick
                    draggable
                    dragDistance={0}
                    tilt
                    tiltMax={12}
                    glare
                    glareOpacity={0.22}
                    hoverScale={1.03}
                    perspective={1100}
                    stiffness={170}
                    damping={20}
                    width="100%"
                    height={410}
                    radius={22}
                    background="linear-gradient(180deg, #102535 0%, #0D2233 50%, #0A1A28 100%)"
                    color="#f5f5f5"
                    shadow
                    shadowColor="#000000"
                    shadowOpacity={0.45}
                    onFlipChange={flipped => console.log(flipped)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Contextual CTA under tabs */}
        <div className="mt-14 text-center">
          {activeTab === "contributors" ? (
            <a
              href="https://discord.gg/SxBATvUPnC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#D6B56C] hover:bg-[#E5C982] px-7 py-3 text-sm font-semibold text-[#08131D] shadow-lg shadow-[#D6B56C]/20 transition-all cursor-pointer"
            >
              Get Started on Discord
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href="/sponsor-registration"
              className="inline-flex items-center gap-2 rounded-full bg-[#D6B56C] hover:bg-[#E5C982] px-7 py-3 text-sm font-semibold text-[#08131D] shadow-lg shadow-[#D6B56C]/20 transition-all cursor-pointer"
            >
              Register as Sponsor / Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

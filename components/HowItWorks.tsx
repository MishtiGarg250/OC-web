"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, GitPullRequest, Trophy, Building2, Lightbulb, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import BlurText from "./BlurText";

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
      className="relative py-24 bg-[radial-gradient(circle_at_50%_10%,rgba(149,117,205,0.22),rgba(15,8,25,0.95)45%,rgba(9,5,16,1)),linear-gradient(180deg,#090514_0%,#0c061a_50%,#090514_100%)] border-b border-purple-900/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md mb-4"
          >
            <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />
            <span>Process &amp; Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            How{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
              OpenCode Works
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Whether you are an aspiring developer looking to contribute or a company seeking elite engineering talent, OpenCode is structured for maximum impact."
              className="text-base sm:text-lg text-purple-100/85 leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setActiveTab("contributors")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "contributors"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "contributors" && (
                <motion.div
                  layoutId="howItWorksTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/40"
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
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === "sponsors" && (
                <motion.div
                  layoutId="howItWorksTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/40"
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
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-7 backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_-25px_rgba(168,85,247,0.4)] overflow-hidden"
                >
                  <div className="absolute top-3 right-4 text-6xl font-black text-white/5 group-hover:text-purple-400/10 transition-colors pointer-events-none select-none">
                    {step.number}
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-bold text-purple-300 uppercase tracking-wider mb-2">
                      Step {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-purple-300/80 font-medium">
                    <span>
                      {activeTab === "contributors" ? "Participant Track" : "Sponsor Track"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition-all"
            >
              Get Started on Discord
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href="/sponsor-registration"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition-all"
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

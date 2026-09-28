"use client";
import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Users, Trophy, Rocket, Terminal, HeartHandshake } from "lucide-react";
import BlurText from "./BlurText";

const highlights = [
  {
    icon: GitPullRequest,
    title: "Hands-on Production Git",
    description:
      "Move beyond toy tutorials. Participants clone real-world repositories, resolve authentic maintainer issues, and learn industrial git rebase and review workflows.",
  },
  {
    icon: Users,
    title: "1-on-1 Senior Mentorship",
    description:
      "Every project is led by experienced maintainers, GSoC scholars, and IIITA alumni who provide line-by-line feedback on every submitted PR.",
  },
  {
    icon: Trophy,
    title: "Gamified Leaderboard",
    description:
      "Real-time point scoring for merged contributions encourages consistent shipping while keeping the environment collaborative, supportive, and fun.",
  },
  {
    icon: HeartHandshake,
    title: "Sponsor & Hiring Pipeline",
    description:
      "Industry sponsors engage directly with developers through dedicated bounties, technical workshops, and early talent discovery for summer internships.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.22),rgba(41,25,32,0.95)_45%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] border-b border-[#665B6D]/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md mb-4"
          >
            <Rocket className="w-3.5 h-3.5 text-[#CF9690]" />
            <span>The Movement</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FEF3ED] tracking-tight"
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB]">
              OpenCode
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="OpenCode is the annual month-long open source festival organized by GeekHaven, the official technical society of IIIT Allahabad. We bridge the gap between enthusiastic learners and production software engineering."
              className="text-base sm:text-lg text-[#E6D8DB]/85 leading-relaxed"
              delay={30}
            />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#665B6D]/30 bg-gradient-to-b from-[#291920]/80 via-[#312C34]/50 to-[#1B1620]/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#CF9690]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-20px_rgba(207,150,144,0.3)]"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(207,150,144,0.16),transparent_50%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#60434A]/40 border border-[#9D767E]/35 flex items-center justify-center text-[#CF9690] mb-5 group-hover:scale-110 group-hover:bg-[#785255]/50 group-hover:border-[#CF9690]/60 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FEF3ED] mb-2.5 group-hover:text-[#CF9690] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#E6D8DB]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#665B6D]/20 flex items-center text-xs font-semibold text-[#B88784] uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5 mr-1.5" />
                  GeekHaven IIITA
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

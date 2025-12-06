"use client";
import React from "react";
import SpotlightCard from "./SpotlightCard";
const benefits = [
  {
    title: "Amplify Your Brand Presence",
    description:
      "Showcase your brand to a global audience of passionate developers, innovators, and creators. Gain long-term visibility across our website, event platforms, and open-source repositories.",
  },
  {
    title: "Connect with Top Talent",
    description:
      "Engage directly with skilled contributors, mentors, and students from premier institutions. Build meaningful relationships with the next generation of developers and tech leaders.",
  },
  {
    title: "Champion Open Source",
    description:
      "Demonstrate your commitment to open-source values by supporting projects that solve real-world challenges and empower the global tech community.",
  },
  {
    title: "Foster Diversity and Inclusion",
    description:
      "Be part of an initiative that encourages participation from all backgrounds. Support an environment where every contributor feels welcome and inspired to learn.",
  },
  {
    title: "Strengthen Community Engagement",
    description:
      "Collaborate with developers who share your passion for innovation. Create a lasting impact by being part of a community that values collaboration and shared growth.",
  },
  {
    title: "Collaborative Marketing Opportunities",
    description:
      "Co-create campaigns, workshops, and challenges that align with your brand values. Experience organic outreach through our engaged open-source ecosystem.",
  },
];


function WhySponsorUs() {
  return (
    <div className="py-20 bg-[#0a0a0a] border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-3">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                    Value for partners
                </span>
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">
                    Why Sponsor Us?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Join industry leaders who are already making a difference in the open-source community
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex justify-center">
                        <SpotlightCard className="flex flex-col rounded-xl bg-gradient-to-br from-[#111827] to-[#0b1220] border border-gray-800 overflow-hidden h-full max-w-sm p-6 shadow-[0_20px_70px_-50px_rgba(59,130,246,0.6)] hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300" spotlightColor="rgba(59, 130, 246, 0.25)">
                            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {benefit.description}
                                </p>
                                
                            </div>
                        </SpotlightCard>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="mx-auto max-w-3xl rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 px-6 py-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.6)]">
                    <h3 className="text-2xl font-semibold text-white mb-3">Co-create the next flagship track</h3>
                    <p className="text-gray-300 mb-6">
                        We tailor deliverables around your goals—keynotes, challenge prizes, workshops, or talent pipelining. Tell us what outcomes matter most.
                    </p>
                    <a
                        href="/sponsor-registration"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
                    >
                        Craft a custom package
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WhySponsorUs

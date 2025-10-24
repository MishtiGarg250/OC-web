"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const benefits = [
    {
        title: "Massive Developer Reach",
        description: "Connect with 50,000+ developers, students, and tech professionals across 100+ countries",
        stats: "50K+ Developers"
    },
    {
        title: "Top Talent Pipeline",
        description: "Access the next generation of tech leaders from top universities and coding bootcamps",
        stats: "500+ Universities"
    },
    {
        title: "Global Brand Visibility",
        description: "Get featured across our events, social media, and community platforms worldwide",
        stats: "100+ Countries"
    },
    {
        title: "Open Source Impact",
        description: "Support meaningful projects that are shaping the future of technology and innovation",
        stats: "1000+ Projects"
    },
    {
        title: "Community Engagement",
        description: "Build authentic relationships with passionate developers who value your contribution",
        stats: "95% Satisfaction"
    },
    {
        title: "Measurable ROI",
        description: "Track your impact with detailed analytics and engagement metrics from our events",
        stats: "Real-time Analytics"
    }
];

function WhySponsorUs() {
  return (
    <div className="py-20 bg-[#0a0a0a] border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
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
                        <div className="flex flex-col rounded-lg bg-[#1a1a1a] border border-gray-800 overflow-hidden h-full max-w-sm p-6 hover:border-blue-500/30 transition-all duration-300">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {benefit.description}
                                </p>
                                <div className="text-2xl font-bold text-blue-400">
                                    {benefit.stats}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-white mb-4">Ready to Make an Impact?</h3>
                    <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                        Join companies like GitHub, Google, Microsoft, and Amazon in supporting the open-source community
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                        Start Sponsoring Today
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhySponsorUs

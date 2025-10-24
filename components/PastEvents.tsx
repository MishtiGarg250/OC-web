"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const pastEvents = [
    {
        title: "Hacktoberfest 2024",
        description: "10,000+ participants, 5,000+ PRs merged, 500+ projects contributed to",
        participants: "10,000+",
        projects: "500+",
        year: "2024"
    },
    {
        title: "Open Source Summer",
        description: "Global coding challenge with 8,000 developers from 50+ countries",
        participants: "8,000+",
        projects: "300+",
        year: "2024"
    },
    {
        title: "Women in Tech Hackathon",
        description: "Empowering 3,000+ women developers with mentorship and networking",
        participants: "3,000+",
        projects: "150+",
        year: "2024"
    },
    {
        title: "Student Developer Challenge",
        description: "University students created 200+ innovative open source solutions",
        participants: "5,000+",
        projects: "200+",
        year: "2023"
    },
    {
        title: "AI for Good Hackathon",
        description: "Developers built AI solutions for social impact and sustainability",
        participants: "4,500+",
        projects: "180+",
        year: "2023"
    },
    {
        title: "Blockchain Innovation Summit",
        description: "Leading blockchain developers showcased cutting-edge Web3 solutions",
        participants: "2,500+",
        projects: "120+",
        year: "2023"
    },
    {
        title: "Mobile App Development Contest",
        description: "Cross-platform mobile apps solving real-world problems",
        participants: "6,000+",
        projects: "400+",
        year: "2023"
    },
    {
        title: "DevOps & Cloud Challenge",
        description: "Infrastructure and deployment automation for modern applications",
        participants: "3,200+",
        projects: "250+",
        year: "2022"
    }
];

function PastEvents() {
  return (
    <div className="py-20 bg-[#0a0a0a] border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">
                    Our Impact
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Join the companies that have already made a difference in the open-source community
                </p>
            </div>
            
            <div className="mb-16">
                <InfiniteMovingCards
                    items={pastEvents}
                    direction="right"
                    speed="slow"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl border border-blue-400/20 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className="text-4xl font-bold mb-2">50,000+</div>
                    <div className="text-xl opacity-90">Total Participants</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl border border-cyan-400/20 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                    <div className="text-4xl font-bold mb-2">2,000+</div>
                    <div className="text-xl opacity-90">Open Source Projects</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl border border-blue-400/20 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-xl opacity-90">Countries Reached</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastEvents

"use client";
import Link from "next/link";

import BlurText from "./BlurText";

import {
  ShieldCheck,
  Brain,
  Store,
  HandHeart,
  MessageCircle,
  Users,
  Dumbbell,
  Workflow,
  Skull,
} from "lucide-react";

/* ---------------- ICON MAP ---------------- */

const iconMap = {
  shieldCheck: ShieldCheck,        // FreshHat - Cybersecurity
  brain: Brain,                    // EmotionAnalysis - ML / NLP
  store: Store,                    // CampusOLX - Marketplace
  handHeart: HandHeart,            // Donation App - Charity
  messageCircle: MessageCircle,    // GeekChat - Chat App
  users: Users,                    // Hitch - Community
  dumbbell: Dumbbell,              // Fitezo - Fitness
  workflow: Workflow,              // Huddle - Team Collaboration
  skull: Skull,                    // ZoombieMania - Zombie Game
};

type IconKey = keyof typeof iconMap;

type Project = {
  id: number;
  name: string;
  description: string;
  icon: IconKey;
  color: string;
  span: string;
  link: string;
};

/* ---------------- PROJECT DATA ---------------- */

const projects: Project[] = [
  {
    id: 1,
    name: "FreshHat-Learning-Repository",
    description: "Welcome to the World of Cybersecurity Learning!",
    icon: "shieldCheck",
    color: "from-cyan-400/20 to-cyan-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/FreshHat-Learning-Repository",
  },
  {
    id: 2,
    name: "EmotionAnalysis",
    description:
      "We'll be working on a dataset with text and emotion labels extracted from those texts.",
    icon: "brain",
    color: "from-purple-400/20 to-purple-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/EmotionAnalysis",
  },
  {
    id: 3,
    name: "CampusOLX",
    description: "Local online marketplace specifically designed for students.",
    icon: "store",
    color: "from-blue-400/20 to-blue-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Aloha",
  },
  {
    id: 4,
    name: "Donation App",
    description:
      "A centralized hub for managing donations and specifying the beneficiary organizations.",
    icon: "handHeart",
    color: "from-green-400/20 to-green-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Donation-App",
  },
  {
    id: 5,
    name: "GeekChat",
    description: "A bi-directional chat application for the geeks of IIITA.",
    icon: "messageCircle",
    color: "from-pink-400/20 to-pink-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Geek-Chat",
  },
  {
    id: 6,
    name: "Hitch",
    description: "Bridging conversations, building communities.",
    icon: "users",
    color: "from-orange-400/20 to-orange-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Hitch-Frontend",
  },
  {
    id: 7,
    name: "Fitezo",
    description: "Flutter-based fitness app.",
    icon: "dumbbell",
    color: "from-green-500/20 to-green-700/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/fitezo",
  },
  {
    id: 8,
    name: "Huddle",
    description:
      "A comprehensive space for teams to discuss ideas and explore ongoing projects.",
    icon: "workflow",
    color: "from-red-400/20 to-red-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Huddle",
  },
  {
    id: 9,
    name: "ZoombieMania",
    description:
      "A 3D zombie survival shooter made with Unity. Use Unity Version 2021.3.11f1.",
    icon: "skull",
    color: "from-blue-500/20 to-blue-700/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/ZoombieMania-",
  },
];


function Projects() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.24),rgba(18,12,27,0.92)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#0c061a_0%,#0a0516_50%,#080414_100%)] border-t border-purple-900/30">
      <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/3 -left-1/3 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/3 -right-1/3 w-full h-full bg-gradient-to-tl from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
              Past Projects
            </h2>
            <BlurText
              text="Explore our portfolio of innovative solutions and successful implementations"
              className="text-purple-100/80 text-lg max-w-2xl mx-auto"
              delay={40}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
            {projects.map((project) => {
              const Icon = iconMap[project.icon];

              return (
                <div
                  key={project.id}
                  className={`${project.span} group relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-white/0 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:from-white/8 group-hover:via-white/5 group-hover:shadow-lg group-hover:shadow-purple-500/15"></div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Icon className="w-10 h-10 text-white/80 group-hover:text-purple-200 transition-colors" />

                      <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={project.link}>
                          <svg
                            className="w-4 h-4 text-white/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;

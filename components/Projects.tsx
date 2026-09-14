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
    name: "CareerCraft",
    description: "AI-powered resume intelligence engine and student career preparation platform.",
    icon: "brain",
    color: "from-purple-400/20 to-purple-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/CareerCraft",
  },
  {
    id: 2,
    name: "CampusOR",
    description: "Campus operations and resource management system powered by Redis token queues.",
    icon: "workflow",
    color: "from-blue-400/20 to-blue-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/CampusOR",
  },
  {
    id: 3,
    name: "Alum-X",
    description: "Full-stack networking platform connecting students with IIITA alumni for mentorship.",
    icon: "users",
    color: "from-cyan-400/20 to-cyan-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Alum-X-Frontend",
  },
  {
    id: 4,
    name: "SpaceChat",
    description: "High-performance, bi-directional real-time chat application for developers.",
    icon: "messageCircle",
    color: "from-pink-400/20 to-pink-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/SpaceChat",
  },
  {
    id: 5,
    name: "SnapMap",
    description: "Location-aware campus mapping and interactive student social discovery.",
    icon: "store",
    color: "from-emerald-400/20 to-emerald-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/SnapMap",
  },
  {
    id: 6,
    name: "Learn_To_Hack",
    description: "Hands-on cybersecurity challenges, OSINT exercises, and digital forensics.",
    icon: "shieldCheck",
    color: "from-red-400/20 to-red-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Learn_To_Hack",
  },
  {
    id: 7,
    name: "Fem-care",
    description: "Healthcare, menstrual hygiene tracking, and wellness platform.",
    icon: "handHeart",
    color: "from-rose-400/20 to-rose-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Fem-care",
  },
  {
    id: 8,
    name: "Blob",
    description: "Cross-platform mobile file sharing and cloud storage management app.",
    icon: "workflow",
    color: "from-amber-400/20 to-amber-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Blob",
  },
  {
    id: 9,
    name: "MotionKit",
    description: "Modular animations, transitions, and component library for modern web builders.",
    icon: "dumbbell",
    color: "from-indigo-400/20 to-indigo-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/MotionKit",
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

"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Code-Digger",
    description: "Cool code debugging stuff",
    icon: "🚀",
    color: "from-cyan-400/20 to-cyan-600/20",
    span: "col-span-2 row-span-1",
    link: "https://github.com/opencodeiiita/CodeDigger",
  },
  {
    id: 2,
    name: "EmotionAnalysis",
    description:
      "we'll be working on dataset with text and the emotions detected in those texts.",
    icon: "📊",
    color: "from-purple-400/20 to-purple-600/20",
    span: "col-span-1 row-span-2",
    link: "https://github.com/opencodeiiita/EmotionAnalysis",
  },
  {
    id: 3,
    name: "Aloha",
    description:
      "An Opencode22 Repository with some tasks only for Freshies at IIITA",
    icon: "🎨",
    color: "from-blue-400/20 to-blue-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/Aloha",
  },
  {
    id: 4,
    name: "SolMintNFT",
    description:
      "SolMintNFT is a project under OpenCode'22, that will be building an NFT marketplace using the Solana blockchain.",
    icon: "🦧",
    color: "from-green-400/20 to-green-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/SolMintNFT",
  },
  {
    id: 4,
    name: "CampusOLX",
    description: "local online marketplace specifically designed for students",
    icon: "🛒",
    color: "from-green-400/20 to-green-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/CampusOLX",
  },
  {
    id: 4,
    name: "Fitezo",
    description: "Flutter based app",
    icon: "💪🏻",
    color: "from-green-400/20 to-green-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/fitezo",
  },
  {
    id: 5,
    name: "Cyber-War",
    description: "Contains weekly cybersec related tasks",
    icon: "⚠️",
    color: "from-orange-400/20 to-orange-600/20",
    span: "col-span-2 row-span-1",
    link: "https://github.com/opencodeiiita/Cyber-War",
  },
  {
    id: 6,
    name: "Go Git",
    description:
      "GoGit is a repository to help you learn the basics as well as the intricacies of git and github through some fun tasks",
    icon: "🧑🏻‍💻",
    color: "from-red-400/20 to-red-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/GoGit-4.0",
  },
  {
    id: 3,
    name: "ZoombieMania",
    description:
      "A 3d platformer zombie survival shooter made with Unity Engine. To contribute use Unity Version 2021.3.11f1",
    icon: "👾",
    color: "from-blue-400/20 to-blue-600/20",
    span: "col-span-1 row-span-1",
    link: "https://github.com/opencodeiiita/ZoombieMania-",
  },
];

function Projects() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] border-t border-gray-800/50">
      <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Past Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions and successful
              implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.span} group relative`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 via-white/3 to-white/0 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:from-white/8 group-hover:via-white/5 group-hover:shadow-lg group-hover:shadow-cyan-500/10"></div>

                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{project.icon}</span>
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
                    <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;

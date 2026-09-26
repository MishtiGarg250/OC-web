"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { ExternalLink, Github, FolderGit2, User, Layers } from "lucide-react";
import Image from "next/image";
import BlurText from "./BlurText";

const filterTabs = [
  { id: "all", label: "All Tracks" },
  { id: "web", label: "Web & Fullstack" },
  { id: "mobile", label: "Mobile App" },
  { id: "ai", label: "Machine Learning / AI" },
  { id: "web3", label: "Web3 & Blockchain" },
  { id: "cybersecurity", label: "Cybersecurity & Systems" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(projectsData.length);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    return projectsData.filter((p) => p.domain === activeFilter);
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div
      id="projects"
      className="min-h-screen py-24 scroll-mt-20 bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.22),rgba(14,8,22,0.95)45%,rgba(9,5,16,1)),linear-gradient(180deg,#090514_0%,#0c061a_50%,#090514_100%)] border-b border-purple-900/30 overflow-hidden"
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Open Source Repositories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Tracks &amp; Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
              Projects
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Explore our active repositories spanning enterprise web platforms, smart contracts, decentralized systems, AI pipelines, and mobile apps."
              className="text-base sm:text-lg text-purple-100/85 leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setVisibleCount(projectsData.length);
                }}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white bg-white/5 border border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectFilterTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/40"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {displayedProjects.map((project: ProjectItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#130b26]/90 to-[#0d071a]/90 backdrop-blur-xl overflow-hidden hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-25px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                {/* Image Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130b26] via-[#130b26]/40 to-transparent" />
                  
                  {/* Domain Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[11px] font-semibold text-purple-200 backdrop-blur-md">
                      <Layers className="w-3 h-3 text-purple-400" />
                      {project.domainLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {project.title}
                      </h3>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-purple-600 transition-all shadow-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Mentor Credit */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-purple-300/90 font-medium">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>Mentor: {project.mentor}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-[11px] font-medium text-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-purple-400/30 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 hover:bg-purple-600 hover:border-purple-500 transition-all cursor-pointer"
            >
              Load More Projects ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* GitHub Org Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Looking for all repositories?{" "}
            <a
              href="https://github.com/orgs/opencodeiiita/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-300 hover:text-white font-semibold underline underline-offset-4"
            >
              Explore all OpenCode repos on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

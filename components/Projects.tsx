"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { ExternalLink, Github, FolderGit2, User, Layers, ChevronDown } from "lucide-react";
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
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    return projectsData.filter((p) => p.domain === activeFilter);
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div
      id="projects"
      className="min-h-screen py-24 scroll-mt-20 bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.22),rgba(41,25,32,0.95)_45%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] border-b border-[#665B6D]/30 overflow-hidden"
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#CF9690]" />
            <span>Open Source Repositories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FEF3ED] tracking-tight"
          >
            Tracks &amp; Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB]">
              Projects
            </span>
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Explore our active repositories spanning enterprise web platforms, smart contracts, decentralized systems, AI pipelines, and mobile apps."
              className="text-base sm:text-lg text-[#E6D8DB]/85 leading-relaxed"
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
                  setVisibleCount(6);
                }}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#FEF3ED]"
                    : "text-[#C9BCC4] hover:text-[#FEF3ED] bg-[#291920]/50 border border-[#665B6D]/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectFilterTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] shadow-md shadow-[#60434A]/40"
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
                className="group relative flex flex-col justify-between rounded-2xl border border-[#665B6D]/30 bg-gradient-to-b from-[#291920]/90 to-[#1B1620]/90 backdrop-blur-xl overflow-hidden hover:border-[#CF9690]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-25px_rgba(207,150,144,0.35)] transition-all duration-300"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Top Header Row: Domain Tag & GitHub Link */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3E3843]/60 border border-[#9D767E]/30 px-3 py-1 text-xs font-semibold text-[#CF9690]">
                        <Layers className="w-3.5 h-3.5 text-[#CF9690]" />
                        {project.domainLabel}
                      </span>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#3E3843]/40 border border-[#665B6D]/30 text-[#C9BCC4] hover:text-[#FEF3ED] hover:bg-[#785255] hover:border-[#CF9690]/50 transition-all shadow-sm cursor-pointer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-[#FEF3ED] group-hover:text-[#CF9690] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#E6D8DB]/80 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Mentor Credit */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-[#CF9690]/90 font-medium">
                      <User className="w-3.5 h-3.5 text-[#CF9690]" />
                      <span>Mentor: {project.mentor}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#665B6D]/20">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#3E3843]/60 border border-[#665B6D]/30 text-[11px] font-medium text-[#E8C0BB]"
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

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] border border-[#CF9690]/40 px-8 py-3.5 text-sm font-semibold text-[#FEF3ED] shadow-lg shadow-[#60434A]/30 hover:brightness-110 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Show More Projects</span>
              <span className="text-xs bg-[#1B1620]/60 px-2 py-0.5 rounded-full border border-[#CF9690]/30 text-[#CF9690]">
                +{filteredProjects.length - visibleCount}
              </span>
              <ChevronDown className="w-4 h-4 text-[#CF9690] animate-bounce" />
            </button>
          </div>
        )}

        {/* GitHub Org Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#C9BCC4]">
            Looking for all repositories?{" "}
            <a
              href="https://github.com/orgs/opencodeiiita/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#CF9690] hover:text-[#FEF3ED] font-semibold underline underline-offset-4"
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

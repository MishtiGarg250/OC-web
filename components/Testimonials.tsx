"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData, TestimonialItem } from "@/data/testimonialsData";
import { Quote, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import BlurText from "./BlurText";

const filterCategories = ["All Stories", "Winner", "Internship", "Mentor", "Partner"] as const;

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredStories = testimonialsData.filter((item) => {
    if (selectedCategory === "All Stories") return true;
    return item.tag === selectedCategory;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.22),rgba(14,8,22,0.95)45%,rgba(9,5,16,1)),linear-gradient(180deg,#090514_0%,#0c061a_50%,#090514_100%)] border-b border-purple-900/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md"
          >
            <Heart className="w-3.5 h-3.5 text-purple-400" />
            <span>Wall of Love</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Community Stories
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Hear from our top leaderboard finishers, alumni who translated OpenCode PRs into internships, and corporate mentors."
              className="text-base sm:text-lg text-purple-100/85 max-w-2xl mx-auto leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white bg-white/5 border border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="testimonialFilterTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/40"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid / Featured Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {filteredStories.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#160c2b]/80 to-[#0e071c]/90 p-7 backdrop-blur-md hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-25px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <div>
                {/* Header with avatar & quote mark */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-md">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-purple-300/80 font-medium">
                        {item.company || item.role}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-purple-500/20 rotate-180 shrink-0" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Tag / Metrics Badge */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 font-semibold text-[11px]">
                  <Sparkles className="w-3 h-3" />
                  {item.prsOrPoints || item.tag}
                </span>

                <span className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

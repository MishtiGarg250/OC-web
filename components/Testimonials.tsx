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
      className="relative w-full py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.22),rgba(41,25,32,0.95)_45%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] border-b border-[#665B6D]/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md"
          >
            <Heart className="w-3.5 h-3.5 text-[#CF9690]" />
            <span>Wall of Love</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] drop-shadow-[0_0_20px_rgba(207,150,144,0.35)]"
          >
            Community Stories
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Hear from our top leaderboard finishers, alumni who translated OpenCode PRs into internships, and corporate mentors."
              className="text-base sm:text-lg text-[#E6D8DB]/85 max-w-2xl mx-auto leading-relaxed"
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
                    ? "text-[#FEF3ED]"
                    : "text-[#C9BCC4] hover:text-[#FEF3ED] bg-[#291920]/50 border border-[#665B6D]/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="testimonialFilterTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] shadow-md shadow-[#60434A]/40"
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
              className="group relative flex flex-col justify-between rounded-2xl border border-[#665B6D]/30 bg-gradient-to-b from-[#291920]/90 via-[#312C34]/60 to-[#1B1620]/95 p-7 backdrop-blur-md hover:border-[#CF9690]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-25px_rgba(207,150,144,0.35)] transition-all duration-300"
            >
              <div>
                {/* Header with avatar & quote mark */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#CF9690]/60 shadow-md">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#FEF3ED] group-hover:text-[#CF9690] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#CF9690]/90 font-medium">
                        {item.company || item.role}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-[#9D767E]/30 rotate-180 shrink-0" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#E6D8DB]/90 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Tag / Metrics Badge */}
              <div className="pt-4 border-t border-[#665B6D]/20 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60434A]/40 border border-[#9D767E]/40 text-[#CF9690] font-semibold text-[11px]">
                  <Sparkles className="w-3 h-3 text-[#CF9690]" />
                  {item.prsOrPoints || item.tag}
                </span>

                <span className="text-[#C9BCC4] text-[11px] uppercase tracking-wider font-semibold">
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

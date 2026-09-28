"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData, FAQItem } from "@/data/faqData";
import { HelpCircle, ChevronDown, Code, Building2 } from "lucide-react";
import BlurText from "./BlurText";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<"contributor" | "sponsor">("contributor");
  const [openId, setOpenId] = useState<string | null>("eligibility");

  const filteredFaqs = faqData.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#07131F] border-b border-[#AEBCC7]/15 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#AEBCC7]/20 bg-[#102535]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9E2E8] backdrop-blur-md"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D6B56C]" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#F4F1E8] via-[#D9E2E8] to-[#D6B56C]"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Quick answers to common questions about participating, submitting pull requests, and corporate sponsorship."
              className="text-base sm:text-lg text-[#AEBCC7] max-w-2xl mx-auto leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#0B1C2A] border border-[#AEBCC7]/15 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => {
                setActiveCategory("contributor");
                setOpenId("eligibility");
              }}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === "contributor"
                  ? "text-[#08131D]"
                  : "text-[#AEBCC7] hover:text-[#F4F1E8]"
              }`}
            >
              {activeCategory === "contributor" && (
                <motion.div
                  layoutId="faqCategoryTab"
                  className="absolute inset-0 rounded-full bg-[#D6B56C] shadow-md shadow-[#D6B56C]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Contributor FAQs
              </span>
            </button>

            <button
              onClick={() => {
                setActiveCategory("sponsor");
                setOpenId("sponsor-benefits");
              }}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === "sponsor"
                  ? "text-[#08131D]"
                  : "text-[#AEBCC7] hover:text-[#F4F1E8]"
              }`}
            >
              {activeCategory === "sponsor" && (
                <motion.div
                  layoutId="faqCategoryTab"
                  className="absolute inset-0 rounded-full bg-[#D6B56C] shadow-md shadow-[#D6B56C]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Sponsor FAQs
              </span>
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq: FAQItem) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-[#AEBCC7]/15 bg-[#102535] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#D6B56C]/45 hover:shadow-[0_10px_35px_-15px_rgba(7,19,31,0.8)]"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#F4F1E8] pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-1 rounded-full bg-[#0B1C2A] text-[#D6B56C] border border-[#AEBCC7]/15 shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#AEBCC7] leading-relaxed border-t border-[#AEBCC7]/10">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

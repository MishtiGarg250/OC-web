"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { sponsorTiers } from "@/data/sponsorsData";
import SpotlightCard from "./SpotlightCard";
import { Award, ArrowRight, Sparkles } from "lucide-react";
import BlurText from "./BlurText";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full py-24 bg-[radial-gradient(circle_at_50%_0%,rgba(102,91,109,0.22),rgba(41,25,32,0.95)_45%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] border-b border-[#665B6D]/30 scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D767E]/40 bg-[#291920]/70 text-xs font-semibold uppercase tracking-[0.2em] text-[#FEF3ED] backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5 text-[#CF9690]" />
            <span>Ecosystem Leaders</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] drop-shadow-[0_0_22px_rgba(207,150,144,0.35)]"
          >
            Sponsors &amp; Partners
          </motion.h2>

          <div className="mt-4">
            <BlurText
              text="Backed by the most influential developer platforms, cloud providers, and innovation boards worldwide."
              className="text-base sm:text-lg text-[#E6D8DB]/85 max-w-2xl mx-auto leading-relaxed"
              delay={25}
            />
          </div>
        </div>

        {/* Tier Groups */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {sponsorTiers.map((tierGroup, groupIdx) => (
            <div key={tierGroup.category} className="space-y-6">
              {/* Category Subheading */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#665B6D]/30 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FEF3ED] flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#CF9690]" />
                    {tierGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9BCC4] mt-1">
                    {tierGroup.description}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#60434A]/40 text-[#FEF3ED] border border-[#9D767E]/40">
                  {tierGroup.badge}
                </span>
              </div>

              {/* Sponsor Cards Grid */}
              <div
                className={`grid gap-6 ${
                  tierGroup.sponsors.length === 1
                    ? "grid-cols-1 max-w-2xl mx-auto"
                    : tierGroup.sponsors.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {tierGroup.sponsors.map((sponsor, idx) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (groupIdx * 2 + idx) * 0.08 }}
                  >
                    <SpotlightCard
                      spotlightColor="rgba(207, 150, 144, 0.2)"
                      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#CF9690]/60 hover:shadow-[0_20px_50px_-25px_rgba(207,150,144,0.35)] ${
                        sponsor.highlight
                          ? "border-[#CF9690]/60 bg-gradient-to-b from-[#60434A]/40 via-[#291920] to-[#1B1620]"
                          : "border-[#665B6D]/30 bg-gradient-to-b from-[#291920]/80 via-[#312C34]/40 to-[#1B1620]/90"
                      }`}
                    >
                      <div>
                        {/* Tier Badge */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="rounded-full bg-[#3E3843]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E8C0BB]">
                            {sponsor.tier}
                          </span>
                          {sponsor.link && (
                            <a
                              href={sponsor.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#CF9690]/80 hover:text-[#FEF3ED] transition-colors"
                            >
                              Visit website &rarr;
                            </a>
                          )}
                        </div>

                        {/* Logo Container */}
                        <div className="relative my-4 flex h-16 items-center justify-start">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={sponsor.width}
                            height={sponsor.height}
                            className="object-contain max-h-12 w-auto max-w-[80%]"
                          />
                        </div>

                        <p className="mt-3 text-sm text-[#E6D8DB]/80 leading-relaxed">
                          {sponsor.description}
                        </p>
                      </div>

                      {/* Engagement note */}
                      <div className="mt-5 pt-3 border-t border-[#665B6D]/20 flex items-center gap-2 text-xs text-[#CF9690]/90 font-medium">
                        <span className="h-2 w-2 rounded-full bg-[#CF9690] shadow-[0_0_0_3px_rgba(207,150,144,0.25)] shrink-0" />
                        <span>{sponsor.engagement}</span>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center max-w-2xl mx-auto rounded-2xl border border-[#9D767E]/40 bg-[#291920]/60 p-8 backdrop-blur-md shadow-lg shadow-[#291920]/40"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-[#FEF3ED] mb-2">
            Want to see your company here?
          </h4>
          <p className="text-[#E6D8DB]/85 text-sm sm:text-base mb-6 leading-relaxed">
            Join our 2026 sponsorship cohort. Connect with 1,000+ student developers and champion open source innovation.
          </p>
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] px-8 py-3 text-sm sm:text-base font-semibold text-[#FEF3ED] border border-[#CF9690]/30 shadow-lg shadow-[#60434A]/40 hover:shadow-[#785255]/50 hover:brightness-110 transition-all cursor-pointer"
          >
            Become a Sponsor Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsors;

"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import BlurText from "./BlurText";
const testimonials = [
  {
    quote: "Hit 72/100 issues this season—OpenCode made the climb addictive. ",
    name: "Aanya Gupta",
    title: "Full-stack contributor",
    align: "left",
  },
  {
    quote:
      "Mentor reviews were gold. My PR velocity doubled and that gnarly refactor finally merged.",
    name: "Rahul Menon",
    title: "Open source maintainer",
    align: "center",
    featured: true,
  },
  {
    quote:
      "From first PR jitters to 40+ commits: OpenCode kept shipping fun and structured.",
    name: "Irene Park",
    title: "Frontend engineer",
    align: "right",
  },
  {
    quote: "Docs, tests, infra—88/100 tasks done and learned a ton. ",
    name: "Dev Jain",
    title: "Docs & QA",
    align: "left",
  },
  {
    quote:
      "Pairing with sponsor engineers felt like a mini residency. Career-changing vibes. ",
    name: "Sarika Bose",
    title: "Backend contributor",
    align: "right",
  },
  {
    quote: "Stayed for the code reviews and crew. Leaderboard run next!",
    name: "Leo Martins",
    title: "Mobile dev",
    align: "center",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: (i: number = 0) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    y: 30,
    scale: 0.9,
  }),

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};


export function Testimonials() {
  return (
    <section className="relative w-full py-20 overflow-hidden  bg-[radial-gradient(circle_at_50%_0%,rgba(149,117,205,0.24),rgba(18,12,27,0.92)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#0c061a_0%,#0a0516_50%,#080414_100%)] border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-purple-400">
            Wall of Love
          </h2>
          <BlurText
            text="Hear from the community of developers who have been part of our journey"
            className="mt-4 text-lg text-purple-100/80 max-w-2xl mx-auto"
            delay={50}
          />
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-6xl grid gap-6 sm:gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name + i}
              custom={i}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur shadow-[0_20px_70px_-50px_rgba(168,85,247,0.5)] 
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.16),transparent_25%)]" />
              <div className="relative">
                <div className="absolute top-4 right-4 text-purple-300/40 text-3xl sm:text-4xl">
                  &rdquo;
                </div>
                <p className="text-lg text-white leading-relaxed">
                  {item.quote}
                </p>
                <div className="mt-5 flex flex-col">
                  <span className="text-base font-semibold text-purple-100">
                    {item.name}
                  </span>
                  {item.title ? (
                    <span className="text-sm text-purple-200/80">{item.title}</span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

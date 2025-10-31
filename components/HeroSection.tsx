"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[42rem] overflow-hidden border-b border-blue-500/10 bg-[#030712]">
    
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-32 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-[25rem] h-[25rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* 🔳 Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

    
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="black" />


      <div className="relative z-10 text-center px-6">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-[linear-gradient(90deg,#3b82f6,#06b6d4,#2563eb)] bg-[length:200%_auto] animate-[shine_6s_linear_infinite] drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          Fuel Open Source Innovation
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Join the movement shaping the future of technology. Sponsor our
          open-source events and connect with the brightest developers,
          contribute to meaningful projects, and build lasting partnerships in
          the tech community.
        </motion.p>

        
      </div>

    
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

export default HeroSection;


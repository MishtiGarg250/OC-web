"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/logos_taskade.svg",
    width: 170,
    height: 65,
  },
  
  {
    name: "Sponsor 3",
    logo: "/logos_digital-ocean.svg",
    width: 200,
    height: 60,
  },
  {
    name: "Sponsor 4",
    logo: "/logos_filecoin.svg",
    width: 170,
    height: 65,
  },
  {
    name: "Sponsor 7",
    logo: "/logos_solana.svg",
    width: 170,
    height: 65,
  },
  {
    name: "Sponsor 8",
    logo: "/logos_upcloud.svg",
    width: 170,
    height: 65,
  },
  
  {
    name: "Sponsor 6",
    logo: "/logos_github.svg",
    width: 170,
    height: 65,
  },
  {
    name: "Sponsor 5",
    logo: "/logos_replit.svg",
    width: 170,
    height: 65,
  },
  
  
  {
    name: "Sponsor 2",
    logo: "/logos_polygon.svg",
    width: 170,
    height: 65,
  },

];

export function Sponsors() {
  return (
    <section id="sponsors" className="relative w-full py-20 bg-[#0a0a0a">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">
            Past Sponsors
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who make this event possible
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative w-full h-32 flex items-center justify-center",
                "bg-white/5 backdrop-blur-sm rounded-xl p-6",
                "transition-all duration-300 hover:scale-105 hover:bg-white/10"
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-6">
            Interested in becoming a sponsor?
          </p>
          <Link
            href="/sponsor-registration"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

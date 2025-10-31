"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-6 inset-x-0 z-50 flex justify-center px-4",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-3 transition-all duration-300",
          "backdrop-blur-md bg-black/30 border border-white/10",
          scrolled ? "shadow-[0_0_25px_rgba(0,0,0,0.3)] bg-black/50" : ""
        )}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400 p-[2px] group-hover:scale-105 transition-transform">
            <div className="bg-black/90 rounded-full flex items-center justify-center w-full h-full">
              <Image
                src="/openCode.svg"
                width={28}
                height={28}
                alt="OpenCode Logo"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
            OpenCode
          </span>
        </Link>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-5 py-2 text-sm transition-all"
            asChild
          >
            <Link href="/sponsor-registration">Sponsor Us</Link>
          </Button>

          <Button
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium text-sm px-5 py-2 shadow-md hover:shadow-lg hover:brightness-110 transition-all"
            asChild
          >
            <Link
              href="https://discord.gg/SxBATvUPnC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

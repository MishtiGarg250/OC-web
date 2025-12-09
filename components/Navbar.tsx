"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCompact = scrolled;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-4 pt-2 sm:pt-6",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full mx-auto transition-all duration-500",
          "backdrop-blur-md bg-black/30 border border-white/10",
          isCompact
            ? "max-w-5xl rounded-full px-4 sm:px-6 py-2 shadow-[0_0_25px_rgba(0,0,0,0.3)] bg-black/60"
            : "max-w-6xl rounded-[2.75rem] px-6 sm:px-8 py-4 shadow-[0_20px_80px_-60px_rgba(59,130,246,0.45)] bg-black/40"
        )}
      >
        {/* Left: Logo - Hide text on mobile */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-400 p-[2px] group-hover:scale-105 transition-transform">
            <div className="bg-black/90 rounded-full flex items-center justify-center w-full h-full">
              <Image
                src="/logo_rb-min.png"
                width={32}
                height={32}
                alt="OpenCode Logo"
                className="opacity-90 group-hover:opacity-100 transition-opacity w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
          </div>
          <span className="hidden sm:inline-block text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
            OpenCode'25
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-sm transition-all"
            asChild
          >
            <Link href="/sponsor-registration">Sponsor Us</Link>
          </Button>

          <Button
            className="rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 text-white font-medium text-sm px-4 py-1.5 sm:px-5 sm:py-2 shadow-md hover:shadow-lg hover:brightness-110 transition-all"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-3 w-full max-w-5xl mx-auto rounded-2xl backdrop-blur-md bg-black/50 border border-white/10 p-4 space-y-3"
          >
            <Button
              variant="ghost"
              className="w-full text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 py-3 text-base transition-all justify-start"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/sponsor-registration">Sponsor Us</Link>
            </Button>
            <Button
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium text-base px-4 py-3 shadow-md hover:shadow-lg hover:brightness-110 transition-all justify-start"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                href="https://discord.gg/SxBATvUPnC"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

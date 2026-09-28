"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX, Film } from "lucide-react";
import { openCinematicLanding } from "./CinematicIntro";

interface NavItem {
  name: string;
  href: string;
  isSection?: boolean;
}

const navItems: NavItem[] = [
  { name: "How it works", href: "#how-it-works", isSection: true },
  { name: "Projects", href: "#projects", isSection: true },
  { name: "Sponsors", href: "#sponsors", isSection: true },
  { name: "Testimonials", href: "#testimonials", isSection: true },
  { name: "FAQ", href: "#faq", isSection: true },
];

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [heroMuted, setHeroMuted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleSoundState = (e: Event) => {
      const customEvent = e as CustomEvent<{ isMuted: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.isMuted === "boolean") {
        setHeroMuted(customEvent.detail.isMuted);
      }
    };

    window.addEventListener("hero-sound-state", handleSoundState);
    window.dispatchEvent(new CustomEvent("query-hero-sound"));

    return () => {
      window.removeEventListener("hero-sound-state", handleSoundState);
    };
  }, []);

  const toggleHeroSound = () => {
    setHeroMuted((prev) => !prev);
    window.dispatchEvent(new CustomEvent("toggle-hero-sound"));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.isSection) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(item.href.replace("#", ""));
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        e.preventDefault();
        router.push(`/${item.href}`);
      }
    }
    setIsMenuOpen(false);
  };

  const isCompact = scrolled;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-2 sm:pt-6 pointer-events-none",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3.5 w-full mx-auto max-w-7xl">
        {/* Main Navbar Capsule */}
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between transition-all duration-500",
            "backdrop-blur-md bg-[#07131F]/80 border border-[#AEBCC7]/15",
            isCompact
              ? "flex-1 max-w-5xl rounded-full px-4 sm:px-6 py-2 shadow-[0_0_30px_rgba(7,19,31,0.8)] bg-[#07131F]/90 border border-[#AEBCC7]/20"
              : "flex-1 max-w-6xl rounded-[2.75rem] px-5 sm:px-8 py-3.5 shadow-[0_20px_80px_-50px_rgba(7,19,31,0.7)] bg-[#07131F]/80 border border-[#AEBCC7]/15"
          )}
        >
          {/* Left: Brand Title */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center group shrink-0"
          >
            <span className="text-lg sm:text-xl font-bold text-[#F4F1E8] tracking-tight group-hover:opacity-90 transition-opacity">
              OpenCode<span className="text-[#D6B56C]">&apos;26</span>
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 backdrop-blur-xl px-2 py-1.5 rounded-full border border-[#AEBCC7]/15 bg-[#0B1C2A]/60 shadow-inner">
            {navItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div key={item.name} className="relative">
                  {item.isSection ? (
                    <button
                      onClick={(e) => handleNavClick(e, item)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative z-10 px-3 py-1.5 text-xs xl:text-sm font-medium text-[#AEBCC7] hover:text-[#F4F1E8] transition-colors cursor-pointer"
                    >
                      {isHovered && (
                        <motion.div
                          layoutId="navbar-hover"
                          className="absolute inset-0 z-[-1] rounded-full bg-[#102535] border border-[#D6B56C]/30 shadow-md shadow-[#102535]/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative z-10 block px-3 py-1.5 text-xs xl:text-sm font-medium text-[#AEBCC7] hover:text-[#F4F1E8] transition-colors"
                    >
                      {isHovered && (
                        <motion.div
                          layoutId="navbar-hover"
                          className="absolute inset-0 z-[-1] rounded-full bg-[#102535] border border-[#D6B56C]/30 shadow-md shadow-[#102535]/50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Sponsor Us CTA Button */}
          <div className="hidden sm:flex items-center">
            <Button
              className="rounded-full bg-[#D6B56C] hover:bg-[#E5C982] text-[#08131D] font-semibold text-sm px-4 py-1.5 sm:px-5 sm:py-2 shadow-md shadow-[#D6B56C]/20 transition-all cursor-pointer border-none"
              asChild
            >
              <Link href="/sponsor-registration">
                Sponsor Us
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className="text-[#AEBCC7] hover:text-[#F4F1E8] p-2 rounded-full bg-[#102535]/55 border border-[#AEBCC7]/15 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Standalone Control Capsules: Play Trailer & Sound */}
        <div className="pointer-events-auto shrink-0 flex items-center gap-2 sm:gap-2.5">
          {/* Play Trailer Button */}
          <button
            type="button"
            onClick={() => openCinematicLanding()}
            className={cn(
              "group flex items-center gap-2 rounded-full border border-[#AEBCC7]/20 bg-[#102535]/70 hover:bg-[#102535]/95 text-xs sm:text-sm font-semibold text-[#F4F1E8] backdrop-blur-md shadow-lg shadow-[#07131F]/80 hover:border-[#D6B56C]/45 transition-all duration-300 cursor-pointer",
              isCompact
                ? "px-3 sm:px-3.5 py-2.5"
                : "px-3.5 sm:px-4 py-3 sm:py-3.5"
            )}
            title="Play cinematic trailer"
          >
            <Film className="w-4 h-4 text-[#D6B56C] transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden md:inline text-[#F4F1E8]">Play Trailer</span>
          </button>

          {/* Sound Switch Button */}
          <button
            type="button"
            onClick={toggleHeroSound}
            className={cn(
              "group flex items-center gap-2 rounded-full border border-[#AEBCC7]/20 bg-[#102535]/70 hover:bg-[#102535]/95 text-xs sm:text-sm font-semibold text-[#F4F1E8] backdrop-blur-md shadow-lg shadow-[#07131F]/80 hover:border-[#D6B56C]/45 transition-all duration-300 cursor-pointer",
              isCompact
                ? "px-3 sm:px-3.5 py-2.5"
                : "px-3.5 sm:px-4 py-3 sm:py-3.5"
            )}
            title={heroMuted ? "Turn background audio on" : "Turn background audio off"}
          >
            {heroMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#718394] transition-colors group-hover:text-[#D6B56C]" />
                <span className="hidden md:inline text-[#AEBCC7] group-hover:text-[#F4F1E8] transition-colors">
                  Sound Off
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#D6B56C] animate-pulse" />
                <span className="hidden md:inline text-[#F4F1E8]">Sound On</span>
                <span className="hidden md:flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 bg-[#D6B56C] animate-pulse h-2.5" />
                  <span className="w-0.5 bg-[#D6B56C] animate-pulse h-1.5" />
                  <span className="w-0.5 bg-[#D6B56C] animate-pulse h-3" />
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto lg:hidden mt-3 w-full max-w-5xl mx-auto rounded-2xl backdrop-blur-2xl bg-[#0B1C2A]/95 border border-[#AEBCC7]/15 p-4 space-y-2 shadow-2xl"
          >
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className="w-full text-left text-[#AEBCC7] hover:text-[#F4F1E8] hover:bg-[#102535] rounded-xl px-4 py-2.5 text-base font-medium transition-all"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left text-[#AEBCC7] hover:text-[#F4F1E8] hover:bg-[#102535] rounded-xl px-4 py-2.5 text-base font-medium transition-all block"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-2 border-t border-[#AEBCC7]/15">
              <Button
                className="w-full rounded-full bg-[#D6B56C] hover:bg-[#E5C982] text-[#08131D] font-semibold text-base px-4 py-2.5 shadow-md shadow-[#D6B56C]/20 transition-all justify-center cursor-pointer border-none"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/sponsor-registration">
                  Sponsor Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

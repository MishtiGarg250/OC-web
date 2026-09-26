"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  { name: "Sponsor us", href: "/sponsor-registration", isSection: false },
];

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

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
          "backdrop-blur-md bg-black/40 border border-white/10",
          isCompact
            ? "max-w-5xl rounded-full px-4 sm:px-6 py-2 shadow-[0_0_30px_rgba(0,0,0,0.4)] bg-black/75"
            : "max-w-6xl rounded-[2.75rem] px-6 sm:px-8 py-3.5 shadow-[0_20px_80px_-50px_rgba(168,85,247,0.4)] bg-black/50"
        )}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center space-x-2.5 group shrink-0"
        >
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
          <span className="hidden sm:inline-block text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-gray-300 tracking-tight">
            OpenCode&apos;26
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-inner">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div key={item.name} className="relative">
                {item.isSection ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative z-10 px-3 py-1.5 text-xs xl:text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80 shadow-md shadow-purple-500/40"
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
                    className="relative z-10 block px-3 py-1.5 text-xs xl:text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80 shadow-md shadow-purple-500/40"
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

        {/* Right: Join Discord CTA Button */}
        <div className="hidden sm:flex items-center">
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

        {/* Mobile Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
            className="lg:hidden mt-3 w-full max-w-5xl mx-auto rounded-2xl backdrop-blur-2xl bg-black/85 border border-white/10 p-4 space-y-2 shadow-2xl"
          >
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className="w-full text-left text-gray-200 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2.5 text-base font-medium transition-all"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left text-gray-200 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2.5 text-base font-medium transition-all block"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-2 border-t border-white/10">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 text-white font-medium text-base px-4 py-2.5 shadow-md hover:shadow-lg hover:brightness-110 transition-all justify-center"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

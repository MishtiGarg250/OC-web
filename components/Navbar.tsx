"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
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
          "backdrop-blur-md bg-[#1B1620]/75 border border-[#665B6D]/30",
          isCompact
            ? "max-w-5xl rounded-full px-4 sm:px-6 py-2 shadow-[0_0_30px_rgba(27,22,32,0.7)] bg-[#1B1620]/90 border border-[#665B6D]/35"
            : "max-w-6xl rounded-[2.75rem] px-6 sm:px-8 py-3.5 shadow-[0_20px_80px_-50px_rgba(120,82,85,0.4)] bg-[#1B1620]/75 border border-[#665B6D]/30"
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
          <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] tracking-tight group-hover:opacity-90 transition-opacity">
            OpenCode&apos;26
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 backdrop-blur-xl px-2 py-1.5 rounded-full border border-[#665B6D]/30 bg-[#291920]/40 shadow-inner">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div key={item.name} className="relative">
                {item.isSection ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative z-10 px-3 py-1.5 text-xs xl:text-sm font-medium text-[#C9BCC4] hover:text-[#FEF3ED] transition-colors cursor-pointer"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-[#665B6D]/90 via-[#785255]/90 to-[#9D767E]/90 shadow-md shadow-[#785255]/30"
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
                    className="relative z-10 block px-3 py-1.5 text-xs xl:text-sm font-medium text-[#C9BCC4] hover:text-[#FEF3ED] transition-colors"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-[#665B6D]/90 via-[#785255]/90 to-[#9D767E]/90 shadow-md shadow-[#785255]/30"
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
            className="rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] text-[#FEF3ED] border border-[#CF9690]/30 font-medium text-sm px-4 py-1.5 sm:px-5 sm:py-2 shadow-md shadow-[#60434A]/40 hover:shadow-[#785255]/50 hover:brightness-110 transition-all cursor-pointer"
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
            className="text-[#C9BCC4] hover:text-[#FEF3ED] p-2 rounded-full bg-[#291920]/50 border border-[#665B6D]/30 focus:outline-none"
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
            className="lg:hidden mt-3 w-full max-w-5xl mx-auto rounded-2xl backdrop-blur-2xl bg-[#1B1620]/95 border border-[#665B6D]/30 p-4 space-y-2 shadow-2xl"
          >
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item)}
                  className="w-full text-left text-[#E6D8DB] hover:text-[#FEF3ED] hover:bg-[#60434A]/30 rounded-xl px-4 py-2.5 text-base font-medium transition-all"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left text-[#E6D8DB] hover:text-[#FEF3ED] hover:bg-[#60434A]/30 rounded-xl px-4 py-2.5 text-base font-medium transition-all block"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-2 border-t border-[#665B6D]/20">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-[#60434A] via-[#785255] to-[#9D767E] text-[#FEF3ED] border border-[#CF9690]/30 font-medium text-base px-4 py-2.5 shadow-md shadow-[#60434A]/40 hover:shadow-[#785255]/50 hover:brightness-110 transition-all justify-center cursor-pointer"
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

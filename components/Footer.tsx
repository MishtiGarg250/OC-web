"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, ExternalLink } from "lucide-react";
import DownloadBrochureButton from "./DownloadBrochureButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative bg-[radial-gradient(circle_at_50%_10%,rgba(149,117,205,0.18),rgba(12,7,20,0.96)40%,rgba(8,4,16,1)),linear-gradient(180deg,#090514_0%,#0c061a_50%,#070312_100%)] text-gray-300 pt-20 pb-12 border-t border-purple-900/40 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: About OpenCode & GeekHaven */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-400 p-[2px]">
                <div className="bg-black/90 rounded-full flex items-center justify-center w-full h-full">
                  <Image
                    src="/logo_rb-min.png"
                    width={28}
                    height={28}
                    alt="OpenCode Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 tracking-tight">
                OpenCode 2026
              </span>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed">
              Organized by <span className="text-white font-medium">GeekHaven</span>, the official technical society of IIIT Allahabad. Empowering student developers to master production open source and connect with world-class engineering teams.
            </p>

            <div className="pt-2">
              <DownloadBrochureButton />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-purple-200">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About OpenCode
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-purple-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-300 transition-colors">
                  Tracks &amp; Repositories
                </a>
              </li>
              <li>
                <a href="#why-sponsor" className="hover:text-purple-300 transition-colors">
                  Why Sponsor Us
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-purple-300 transition-colors">
                  Sponsors &amp; Partners
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1LQJai-gcyf6AvzlW06aw7WJ8qZUpwN4P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                >
                  Code of Conduct
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: For Sponsors & Contacts */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-purple-200">
              Sponsor Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Abdul Azeem</p>
                  <a href="tel:+917217492629" className="text-xs text-gray-400 hover:text-purple-300">
                    +91 721 749 2629
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Adith Reganti</p>
                  <a href="tel:+918618275578" className="text-xs text-gray-400 hover:text-purple-300">
                    +91 861 827 5578
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Anubhav Sharma</p>
                  <a href="tel:+919855488413" className="text-xs text-gray-400 hover:text-purple-300">
                    +91 98554 88413
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-2 border-t border-white/5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:geekhaven@iiita.ac.in" className="text-xs text-purple-200 hover:underline">
                  geekhaven@iiita.ac.in
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/sponsor-registration"
                  className="inline-block text-xs font-semibold text-purple-300 hover:text-white underline underline-offset-4"
                >
                  Online Sponsor Registration Form &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Socials */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-purple-200">
              Community &amp; Socials
            </h3>

            <div className="space-y-2.5 text-sm">
              <a
                href="https://discord.gg/SxBATvUPnC"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
              >
                Discord Community
              </a>
              <a
                href="https://github.com/opencodeiiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
              >
                GitHub Organizations
              </a>
              <a
                href="https://twitter.com/geekhaveniiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://www.linkedin.com/company/geekhaven-iiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/geekhaven_iiita/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition-colors"
              >
                Instagram
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white pt-2 border-t border-white/5 cursor-pointer transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 OpenCode • Built with passion by Team GeekHaven, IIIT Allahabad.</p>
          <p className="text-gray-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

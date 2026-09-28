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
      className="relative bg-[radial-gradient(circle_at_50%_10%,rgba(102,91,109,0.2),rgba(41,25,32,0.96)_40%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] text-[#E6D8DB] pt-20 pb-12 border-t border-[#665B6D]/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#665B6D]/20">
          {/* Col 1: About OpenCode & GeekHaven */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-[#CF9690] via-[#9D767E] to-[#60434A] p-[2px]">
                <div className="bg-[#1B1620] rounded-full flex items-center justify-center w-full h-full">
                  <Image
                    src="/logo_rb-min.png"
                    width={28}
                    height={28}
                    alt="OpenCode Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] tracking-tight">
                OpenCode 2026
              </span>
            </Link>

            <p className="text-sm text-[#C9BCC4] leading-relaxed">
              Organized by <span className="text-[#FEF3ED] font-medium">GeekHaven</span>, the official technical society of IIIT Allahabad. Empowering student developers to master production open source and connect with world-class engineering teams.
            </p>

            <div className="pt-2">
              <DownloadBrochureButton />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#FEF3ED] mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-[#C9BCC4]">
              <li>
                <a href="#about" className="hover:text-[#CF9690] transition-colors">
                  About OpenCode
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#CF9690] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#CF9690] transition-colors">
                  Tracks &amp; Repositories
                </a>
              </li>
              <li>
                <a href="#why-sponsor" className="hover:text-[#CF9690] transition-colors">
                  Why Sponsor Us
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-[#CF9690] transition-colors">
                  Sponsors &amp; Partners
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#CF9690] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1LQJai-gcyf6AvzlW06aw7WJ8qZUpwN4P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CF9690] transition-colors inline-flex items-center gap-1"
                >
                  Code of Conduct
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: For Sponsors & Contacts */}
          <div>
            <h3 className="text-base font-bold text-[#FEF3ED] mb-5 uppercase tracking-wider">
              Sponsor Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-[#C9BCC4]">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#CF9690] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#FEF3ED]">Abdul Azeem</p>
                  <a href="tel:+917217492629" className="text-xs text-[#8E8391] hover:text-[#CF9690]">
                    +91 721 749 2629
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#CF9690] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#FEF3ED]">Adith Reganti</p>
                  <a href="tel:+918618275578" className="text-xs text-[#8E8391] hover:text-[#CF9690]">
                    +91 861 827 5578
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#CF9690] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#FEF3ED]">Anubhav Sharma</p>
                  <a href="tel:+919855488413" className="text-xs text-[#8E8391] hover:text-[#CF9690]">
                    +91 98554 88413
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-2 border-t border-[#665B6D]/20">
                <Mail className="w-4 h-4 text-[#CF9690] shrink-0" />
                <a href="mailto:geekhaven@iiita.ac.in" className="text-xs text-[#E8C0BB] hover:underline">
                  geekhaven@iiita.ac.in
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/sponsor-registration"
                  className="inline-block text-xs font-semibold text-[#CF9690] hover:text-[#FEF3ED] underline underline-offset-4"
                >
                  Online Sponsor Registration Form &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Socials */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-[#FEF3ED] uppercase tracking-wider">
              Community &amp; Socials
            </h3>

            <div className="space-y-2.5 text-sm text-[#C9BCC4]">
              <a
                href="https://discord.gg/SxBATvUPnC"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#CF9690] transition-colors"
              >
                Discord Community
              </a>
              <a
                href="https://github.com/opencodeiiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#CF9690] transition-colors"
              >
                GitHub Organizations
              </a>
              <a
                href="https://twitter.com/geekhaveniiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#CF9690] transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://www.linkedin.com/company/geekhaven-iiita"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#CF9690] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/geekhaven_iiita/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#CF9690] transition-colors"
              >
                Instagram
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#CF9690] hover:text-[#FEF3ED] pt-2 border-t border-[#665B6D]/20 cursor-pointer transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8391] gap-4">
          <p>© 2026 OpenCode • Built with passion by Team GeekHaven, IIIT Allahabad.</p>
          <p className="text-[#8E8391]/80">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

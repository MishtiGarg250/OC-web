"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Film, Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import SpecularButton from "./SpecularButton";

export function openCinematicLanding() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cinematic-landing"));
  }
}

export default function CinematicIntro() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play with sound by default, with seamless gesture fallback for browser autoplay policy
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().then(() => {
      setIsMuted(false);
    }).catch(() => {
      // If browser blocks unmuted autoplay without prior gesture, start muted
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });

    const handleFirstGesture = () => {
      if (video && video.muted) {
        video.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };
  }, []);

  // Listen for replay requests from Hero / Navbar
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsPlaying(true);
      setIsMuted(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("open-cinematic-landing", handleOpen);
    return () => window.removeEventListener("open-cinematic-landing", handleOpen);
  }, []);

  // Lock body scroll while cinematic portal is active
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo(0, 0);
      }
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow || "unset";
      };
    }
  }, [isOpen]);

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      window.dispatchEvent(new CustomEvent("landing-page-entered"));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.15) {
        handleEnter();
      }
    }
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cinematic-landing-portal"
          key="cinematic-landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden bg-[#07131F]"
        >
          {/* Background Video (Auto-enters website as soon as the video ends) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/beginning.mp4"
              poster="/images/hero-japanese-bg.jpg"
              autoPlay
              playsInline
              muted={isMuted}
              onEnded={handleEnter}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover object-center select-none"
              style={{
                filter: "contrast(1.04) saturate(1.04)",
                transform: "scale(1.20) translateZ(0)",
                transformOrigin: "20% 20%",
              }}
            />
            {/* Soft, Transparent Ambient Vignette (Keeps the full video bright and clear) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07131F]/30 via-transparent to-[#07131F]/50 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(7,19,31,0.3)_100%)] pointer-events-none" />
          </div>

          {/* Top Header Bar */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-7"
          >
            {/* Logo / Brand badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#AEBCC7]/15 bg-[#102535]/55 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#D9E2E8] backdrop-blur-md shadow-lg shadow-[#07131F]/70">
                <Sparkles className="h-3.5 w-3.5 text-[#58B99A] animate-pulse" />
                <span>OpenCode 2026</span>
                <span className="text-[#718394]">•</span>
                <span className="text-[#B8E5D5] tracking-widest font-serif">オープンコード</span>
              </div>
            </div>

            {/* Right Controls: Play/Pause, Sound Toggle & Skip */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="flex items-center justify-center rounded-full border border-[#AEBCC7]/15 bg-[#102535]/55 p-2 text-[#F4F1E8] hover:text-[#B8E5D5] hover:border-[#58B99A]/45 transition cursor-pointer backdrop-blur-md"
                title={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                )}
              </button>

              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={toggleAudio}
                className="group relative flex items-center gap-2 rounded-full border border-[#AEBCC7]/15 bg-[#102535]/55 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#F4F1E8] backdrop-blur-md shadow-lg transition hover:bg-[#102535]/80 hover:border-[#58B99A]/45 cursor-pointer"
                title={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-4 w-4 text-[#58B99A] transition-transform group-hover:scale-110" />
                    <span className="hidden sm:inline">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4 text-[#58B99A] animate-pulse transition-transform group-hover:scale-110" />
                    <span className="hidden sm:inline">Sound On</span>
                  </>
                )}
              </button>

              {/* Skip / Enter Site Button */}
              <SpecularButton
                type="button"
                size="sm"
                radius={20}
                tint="#ffffff"
                tintOpacity={0.06}
                textColor="#F4F1E8"
                lineColor="#58B99A"
                baseColor="#102535"
                intensity={1}
                idleIntensity={0.35}
                shineSize={10}
                shineFade={34}
                thickness={1.2}
                glow={1}
                followMouse
                proximity={200}
                onClick={handleEnter}
                className="border border-[#58B99A]/50 !bg-[#102535]/80 hover:!bg-[#102535] !text-[#F4F1E8] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 backdrop-blur-md shadow-lg"
              >
                <span>Skip</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#58B99A]" />
              </SpecularButton>
            </div>
          </motion.header>

          {/* Flexible spacer to keep center clear and push Enter button lower */}
          <div className="flex-1 pointer-events-none" />

          {/* Lower-Third Enter Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-20 mx-auto flex flex-col items-center px-6 text-center pb-12 sm:pb-16"
          >
            <button
              type="button"
              onClick={handleEnter}
              className="font-harry group inline-flex items-center gap-3 sm:gap-4.5 bg-transparent border-none p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] sm:tracking-[0.08em] text-[#F4F1E8] drop-shadow-[0_0_25px_rgba(88,185,154,0.65)] hover:text-[#B8E5D5] hover:drop-shadow-[0_0_40px_rgba(88,185,154,1)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
            >
              <span>Enter OpenCode World</span>
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-[#B8E5D5] drop-shadow-[0_0_15px_rgba(88,185,154,0.9)] transition-transform duration-300 group-hover:translate-x-2.5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
);

export default function LoadingOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1. Disable browser's automatic scroll restoration (prevents jumping back to previous scroll position)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // 2. Clear any hash (like #sponsors) from previous navigation
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      // 3. Immediately reset scroll to the top hero section
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      setShow(false);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      return () => {
        document.body.style.overflow = original || "unset";
        window.scrollTo(0, 0);
      };
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#07131F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(214,181,108,0.15),rgba(143,175,196,0.08)_40%,transparent_70%)]" />
          </div>
          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            <Player
              autoplay
              loop
              src="/code-dark.json"
              style={{ height: "380px", width: "380px" }}
              className="drop-shadow-[0_20px_60px_rgba(214,181,108,0.25)]"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-[#D9E2E8]/85 font-medium">
              Loading OpenCode experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

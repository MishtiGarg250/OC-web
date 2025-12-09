"use client";

import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // hold for at least 2.5s to avoid flash
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(149,117,205,0.22),rgba(18,12,27,0.94)38%,rgba(10,6,20,0.98)),linear-gradient(180deg,#130b26_0%,#0d071f_55%,#080512_100%)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.16),transparent_55%)]" />
          </div>
          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            <Player
              autoplay
              loop
              src="/code-dark.json"
              style={{ height: "380px", width: "380px" }}
              className="drop-shadow-[0_20px_60px_rgba(168,85,247,0.35)]"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-purple-100/80">
              Loading OpenCode experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

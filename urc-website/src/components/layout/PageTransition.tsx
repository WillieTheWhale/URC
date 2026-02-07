"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="loading-overlay"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {/* Logo Text - Part 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="--text"
              style={{ "--delay": "0ms" } as React.CSSProperties}
            >
              <span className="font-serif text-4xl md:text-6xl tracking-tight">
                URC
              </span>
            </motion.div>

            {/* Logo Text - Part 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="--text"
              style={{ "--delay": "100ms" } as React.CSSProperties}
            >
              <span className="font-serif text-4xl md:text-6xl tracking-tight">
                <span className="italic text-[var(--accent-cyan)]">@</span>UNC
              </span>
            </motion.div>
          </div>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1.2, ease: "linear", delay: 0.6 }}
                className="w-24 h-px bg-black origin-left"
              />
              <span className="type-label-sm text-black/40">Loading</span>
            </div>
          </motion.div>

          {/* Conference date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute top-12 right-12 hidden md:block"
          >
            <div className="text-right">
              <span className="type-label text-[var(--accent-cyan)] block">Vol. 01</span>
              <span className="type-label text-black/40">Oct 2-3, 2026</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EXPO_IN_OUT = [0.87, 0, 0.13, 1] as const;

interface LoadingScreenProps {
  onComplete?: () => void;
  minimumDuration?: number;
}

export default function LoadingScreen({ 
  onComplete, 
  minimumDuration = 2400 
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / minimumDuration, 1);
      
      // Eased progress for smoother animation
      const easedProgress = 1 - Math.pow(1 - newProgress, 3);
      setProgress(easedProgress);
      
      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete?.();
          }, 800);
        }, 400);
      }
    };
    
    animationFrame = requestAnimationFrame(updateProgress);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [minimumDuration, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: EASE_EXPO_OUT }
          }}
        >
          {/* Background Grid Pattern */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo / Brand Mark */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {/* Main Title */}
              <motion.div 
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1 
                  className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
                >
                  URC<span className="text-[var(--accent-cyan)] italic">@</span>UNC
                </motion.h1>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="hidden md:block w-px h-12 bg-black/20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: EASE_EXPO_OUT }}
              />

              {/* Subtitle */}
              <motion.div 
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.p 
                  className="font-serif text-lg md:text-xl text-black/60"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.6, ease: EASE_EXPO_OUT }}
                >
                  Undergraduate Research Conference
                </motion.p>
              </motion.div>
            </div>

            {/* Loading Progress */}
            <div className="flex flex-col items-center gap-4 mt-4">
              {/* Progress Bar */}
              <motion.div 
                className="relative w-48 md:w-64 h-px bg-black/10 overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: EASE_EXPO_OUT }}
              >
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-black"
                  style={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>

              {/* Progress Text */}
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span className="type-label text-black/40">
                  {Math.round(progress * 100)}%
                </span>
                <motion.span 
                  className="type-label text-black/40"
                  animate={{ opacity: isComplete ? 1 : [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: isComplete ? 0 : Infinity }}
                >
                  {isComplete ? "Welcome" : "Loading"}
                </motion.span>
              </motion.div>
            </div>

            {/* Date Badge */}
            <motion.div 
              className="absolute -bottom-20 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label-sm text-[var(--accent-cyan)]">OCT 2-3</span>
              <span className="type-label-sm text-black/30">•</span>
              <span className="type-label-sm text-black/40">2026</span>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div 
            className="absolute top-8 left-8 w-12 h-12 border-t border-l border-black/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_EXPO_OUT }}
          />
          <motion.div 
            className="absolute top-8 right-8 w-12 h-12 border-t border-r border-black/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_EXPO_OUT }}
          />
          <motion.div 
            className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-black/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE_EXPO_OUT }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-black/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE_EXPO_OUT }}
          />

          {/* Exit Overlay */}
          <motion.div 
            className="absolute inset-0 bg-white pointer-events-none"
            initial={{ scaleY: 0 }}
            animate={isComplete ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_EXPO_IN_OUT }}
            style={{ transformOrigin: "bottom" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ImageDividerProps {
  src: string;
  alt: string;
  overlayText?: string;
  overlaySubtext?: string;
  tint?: "carolina" | "navy" | "none";
  height?: string;
  clipTop?: boolean;
  clipBottom?: boolean;
}

export default function ImageDivider({
  src,
  alt,
  overlayText,
  overlaySubtext,
  tint = "carolina",
  height = "60vh",
  clipTop = false,
  clipBottom = false,
}: ImageDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  const clipClasses = [
    clipTop ? "clip-angled-top" : "",
    clipBottom ? "clip-angled-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={`image-divider ${clipClasses}`}
      style={{ height }}
    >
      {/* Parallax Image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Tint Overlay */}
      {tint !== "none" && (
        <div
          className={`absolute inset-0 z-1 ${
            tint === "carolina"
              ? "image-divider-carolina"
              : ""
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                tint === "carolina"
                  ? "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(19,41,75,0.3) 50%, rgba(0,0,0,0.5) 100%)"
                  : "linear-gradient(180deg, rgba(19,41,75,0.5) 0%, rgba(19,41,75,0.3) 50%, rgba(19,41,75,0.6) 100%)",
            }}
          />
          {tint === "carolina" && (
            <div
              className="absolute inset-0"
              style={{
                background: "var(--carolina-blue)",
                mixBlendMode: "multiply",
                opacity: 0.2,
              }}
            />
          )}
        </div>
      )}

      {/* Content Overlay */}
      {overlayText && (
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="image-divider-overlay"
        >
          <div className="relative z-10 text-center px-8">
            <motion.p
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] italic max-w-4xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {overlayText}
            </motion.p>

            {overlaySubtext && (
              <motion.p
                className="mt-6 text-white/50 text-sm tracking-[0.2em] uppercase"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {overlaySubtext}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}

      {/* Edge Gradients for smooth section blending */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-2 pointer-events-none" />

      {/* Editorial corner decoration */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20 pointer-events-none z-3 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20 pointer-events-none z-3 hidden lg:block" />
    </div>
  );
}

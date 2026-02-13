"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  accent?: boolean;
}

export default function PullQuote({ quote, attribution, accent = true }: PullQuoteProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const quoteX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative py-24 md:py-36 lg:py-44 bg-white overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Editorial grid lines */}
      <div className="editorial-grid-lines" />

      <div className="container-nippori relative z-10">
        {/* Horizontal rules flanking the quote */}
        <motion.div
          className="w-full h-px bg-black/10 mb-16 md:mb-20"
          style={{ scaleX: lineScale, transformOrigin: "left" }}
        />

        <motion.div
          style={{ x: quoteX }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Quote mark */}
          <span className="block font-serif text-[120px] md:text-[180px] leading-[0.5] text-[var(--carolina-blue)]/[0.08] select-none pointer-events-none mb-4">
            &ldquo;
          </span>

          <motion.blockquote
            className="pull-quote"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {quote.split(" ").map((word, i) => {
              // Highlight certain words in accent color
              const accentWords = ["question", "voice", "moment", "discovery", "excellence", "research"];
              const isAccent = accent && accentWords.some(aw => word.toLowerCase().replace(/[.,!?]/g, "") === aw);

              return (
                <span key={i}>
                  {isAccent ? (
                    <span className="text-[var(--carolina-blue)]">{word}</span>
                  ) : (
                    word
                  )}
                  {" "}
                </span>
              );
            })}
          </motion.blockquote>

          {attribution && (
            <motion.p
              className="mt-10 type-label text-black/30 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              — {attribution}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="w-full h-px bg-black/10 mt-16 md:mt-20"
          style={{ scaleX: lineScale, transformOrigin: "right" }}
        />
      </div>
    </div>
  );
}

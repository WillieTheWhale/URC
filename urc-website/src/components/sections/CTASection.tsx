"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08]);
  const orbOneY = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], ["-10%", "25%"]);

  useEffect(() => {
    if (isInView) setIsActive(true);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative py-40 md:py-56 lg:py-72 bg-black text-white overflow-hidden"
    >
      {/* Background Image — event-stage with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <Image
          src="/images/event-stage.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Blue tint overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "var(--navy)",
            mixBlendMode: "multiply",
            opacity: 0.5,
          }}
        />
      </motion.div>

      {/* Abstract paint texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/abstract-paint.jpg"
          alt=""
          fill
          className="object-cover blend-overlay opacity-[0.06]"
          sizes="100vw"
        />
      </div>

      {/* Editorial grid lines — dark variant */}
      <div className="editorial-grid-lines editorial-grid-lines-dark" />

      {/* Atmospheric gradient orbs */}
      <motion.div
        style={{ y: orbOneY }}
        className="gradient-orb gradient-orb-carolina w-[600px] h-[600px] -top-[200px] -left-[200px] opacity-[0.08]"
      />
      <motion.div
        style={{ y: orbTwoY }}
        className="gradient-orb gradient-orb-carolina w-[500px] h-[500px] -bottom-[150px] -right-[150px] opacity-[0.06]"
      />

      {/* Large background text — scaling */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          style={{ scale: textScale }}
          className={`transition-opacity duration-[2500ms] ${
            isActive ? "opacity-[0.03]" : "opacity-0"
          }`}
        >
          <span className="font-serif text-[25vw] md:text-[20vw] lg:text-[18vw] leading-none text-white whitespace-nowrap">
            SUBMIT
          </span>
        </motion.div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/4 left-[8%] hidden lg:block"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isActive ? { opacity: 0.25, scaleY: 1 } : {}}
        transition={{ duration: 1.8, delay: 1, ease: EASE_EXPO_OUT }}
        style={{ transformOrigin: "top" }}
      >
        <div className="w-px h-32 bg-[var(--carolina-blue)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--carolina-blue)] -translate-x-[3px] mt-2" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-[12%] hidden lg:block"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isActive ? { opacity: 0.2, scaleX: 1 } : {}}
        transition={{ duration: 1.8, delay: 1.2, ease: EASE_EXPO_OUT }}
        style={{ transformOrigin: "right" }}
      >
        <div className="h-px w-24 bg-[var(--carolina-blue)]" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/[0.06] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/[0.06] pointer-events-none hidden lg:block" />

      <div className="container-nippori relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO_OUT }}
          >
            <span className="w-8 h-px bg-[var(--carolina-blue)]/40" />
            <span className="type-label text-[var(--carolina-blue)]">
              Call For Papers
            </span>
            <span className="type-label text-white/25">&bull;</span>
            <span className="type-label text-white/40">April 2026</span>
            <span className="w-8 h-px bg-[var(--carolina-blue)]/40" />
          </motion.div>

          {/* Main Heading — split reveal */}
          <h2 className="mb-14">
            <span className="block overflow-hidden">
              <motion.span
                className="block type-display-lg text-white"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{
                  duration: 1.4,
                  delay: 0.1,
                  ease: EASE_EXPO_OUT,
                }}
              >
                Share Your
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block type-display-lg italic text-glow-carolina"
                style={{ color: "var(--carolina-blue)" }}
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{
                  duration: 1.4,
                  delay: 0.2,
                  ease: EASE_EXPO_OUT,
                }}
              >
                Discovery.
              </motion.span>
            </span>
          </h2>

          {/* Description */}
          <motion.p
            className="type-body-lg text-white/55 mb-14 max-w-2xl mx-auto leading-[1.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: EASE_EXPO_OUT }}
          >
            Join the inaugural Undergraduate Research Conference at UNC Chapel
            Hill. Present your work, connect with peers, and contribute to a new
            tradition of undergraduate scholarship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: EASE_EXPO_OUT }}
          >
            <Link
              href="/get-involved#abstracts"
              className="group inline-flex items-center gap-5 bg-white text-black px-7 py-5 md:px-10 md:py-6 hover:bg-[var(--carolina-blue)] hover:text-white transition-colors duration-500"
            >
              <span className="font-serif text-sm tracking-wide uppercase">
                Submit Your Abstract
              </span>
              <span className="relative w-5 h-5 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </Link>

            <Link
              href="/conference"
              className="group inline-flex items-center gap-4 border border-white/25 text-white px-7 py-5 md:px-10 md:py-6 hover:border-white hover:bg-white hover:text-black transition-all duration-500"
            >
              <span className="font-serif text-sm tracking-wide uppercase">
                Learn More
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Deadline Badge */}
          <motion.div
            className="mt-14 inline-flex items-center gap-4 px-7 py-4 border border-white/8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: EASE_EXPO_OUT }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--carolina-blue)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--carolina-blue)]" />
            </span>
            <span className="type-label text-white/40">
              Submissions open April 1, 2026
            </span>
            <span className="text-white/15">&bull;</span>
            <span className="type-label text-white/40">
              Deadline July 1, 2026
            </span>
          </motion.div>
        </div>

        {/* Bottom Stats Band */}
        <motion.div
          className="flex flex-wrap justify-center gap-16 md:gap-24 mt-28 pt-14 border-t border-white/8"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: EASE_EXPO_OUT }}
        >
          {[
            { value: "200", label: "Planned Attendees" },
            { value: "03", label: "Research Tracks" },
            { value: "02", label: "Conference Days" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <span className="block font-serif text-5xl md:text-6xl text-white mb-3 group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
                {stat.value}
              </span>
              <span className="type-label-sm text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          className="py-5 border-t border-white/6"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ "--duration": "30s" } as React.CSSProperties}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex-shrink-0 animate-marquee">
                <span className="font-serif text-sm text-white/15 tracking-[0.3em] px-10">
                  URC@UNC &nbsp;&bull;&nbsp; OCT 2–3, 2026 &nbsp;&bull;&nbsp; CHAPEL HILL
                  &nbsp;&bull;&nbsp; UNDERGRADUATE RESEARCH &nbsp;&bull;&nbsp;
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

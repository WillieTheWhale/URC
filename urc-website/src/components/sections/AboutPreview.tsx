"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

export default function AboutPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, margin: "-12%" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-8%" });
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const secondaryImageY = useTransform(scrollYProgress, [0, 1], ["35%", "-15%"]);
  const quoteX = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden noise-bg"
    >
      {/* Editorial Grid Lines */}
      <div className="editorial-grid-lines" />

      {/* Large drifting background text */}
      <div className="absolute top-[10%] left-0 w-full pointer-events-none select-none overflow-hidden">
        <motion.span
          style={{ x: quoteX }}
          className="block font-serif text-[clamp(180px,30vw,500px)] leading-[0.75] text-black/[0.012] whitespace-nowrap"
        >
          ABOUT — MISSION — PURPOSE
        </motion.span>
      </div>

      <div className="container-nippori relative z-10">
        {/* Section Header — editorial asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-32">
          <div className="lg:col-span-5">
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label text-[var(--carolina-blue)]">01</span>
              <span className="w-8 h-px bg-[var(--carolina-blue)]" />
              <span className="type-label text-black/40">About</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="type-display-lg text-black"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{ duration: 1.4, delay: 0.1, ease: EASE_EXPO_OUT }}
              >
                Our Mission
              </motion.h2>
            </div>
          </div>

          <div className="lg:col-span-7 lg:flex lg:items-end lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
            >
              <Link
                href="/"
                className="group hover-light-to-dark inline-flex items-center gap-5 border-2 border-black rounded-full px-7 py-4 hover:bg-black hover:text-white transition-all duration-500"
              >
                <span className="font-serif text-sm">Read Full Story</span>
                <span className="w-5 h-5 relative overflow-hidden">
                  <span className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Content — editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">

          {/* Left Column — Large pull quote + philosophy */}
          <div className="lg:col-span-6 lg:pr-16">
            <motion.blockquote
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE_EXPO_OUT }}
            >
              {/* Dramatic quote mark */}
              <span className="absolute -top-12 -left-6 font-serif text-[120px] md:text-[160px] text-[var(--carolina-blue)]/10 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <p className="type-display-sm leading-[1.15] text-black relative z-10">
                We believe every question{" "}
                <span className="italic text-[var(--carolina-blue)]">deserves an audience.</span>
              </p>

              <motion.div
                className="w-16 h-px bg-[var(--carolina-blue)] mt-8"
                initial={{ scaleX: 0 }}
                animate={isActive ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8, ease: EASE_EXPO_OUT }}
                style={{ transformOrigin: "left" }}
              />

              <p className="type-body-lg text-black/50 mt-8 max-w-lg leading-[1.8] drop-cap">
                Recognizing a disparity in professional development opportunities for
                Southern students, we founded this conference to provide avenues for
                undergraduate research presentation and career growth.
              </p>
            </motion.blockquote>

            {/* Two Column Philosophy */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-black/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: EASE_EXPO_OUT }}
            >
              <div>
                <h4 className="type-label mb-5 text-[var(--carolina-blue)]">The Goal</h4>
                <p className="type-body text-black/60 leading-[1.8]">
                  To democratize access to academic feedback and professional networking
                  for undergraduate researchers across all disciplines.
                </p>
              </div>
              <div>
                <h4 className="type-label mb-5 text-[var(--carolina-blue)]">The Scope</h4>
                <p className="type-body text-black/60 leading-[1.8]">
                  From biochemistry to art history, our multi-track format ensures
                  specialized feedback for every presenter.
                </p>
              </div>
            </motion.div>

            {/* Arrow link */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: EASE_EXPO_OUT }}
            >
              <Link href="/" className="group inline-flex items-center gap-4">
                <span className="font-serif text-sm text-black/60 group-hover:text-[var(--carolina-blue)] transition-colors duration-300">Learn more about URC</span>
                <span className="relative w-8 h-px bg-black/30 group-hover:bg-[var(--carolina-blue)] transition-colors duration-300 overflow-visible">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-current rotate-45 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Images stacked with editorial framing */}
          <div className="lg:col-span-6 relative">
            {/* Main Image — with corner brackets */}
            <motion.div
              className="relative w-full md:w-[88%] lg:w-[85%] ml-auto"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className={`corner-brackets relative aspect-[4/5] overflow-hidden img-hover-zoom ${isActive ? 'effect-image is-active' : 'effect-image'}`}>
                <motion.div
                  style={{ y: imageY }}
                  className="absolute inset-0 w-full h-[150%] -top-[25%]"
                >
                  <Image
                    src="/images/university-library.jpg"
                    alt="University library"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 88vw, 40vw"
                  />
                </motion.div>
              </div>

              {/* Floating Badge — established year */}
              <motion.div
                className="absolute -bottom-7 -left-7 md:-left-14 bg-black text-white p-6 md:p-8 z-30"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 1, delay: 1.1, ease: EASE_EXPO_OUT }}
              >
                <span className="type-label-sm text-[var(--carolina-blue)] block mb-2 tracking-widest">Est.</span>
                <span className="font-serif text-4xl md:text-5xl leading-none">2026</span>
              </motion.div>

              {/* Editorial annotation */}
              <motion.div
                className="absolute -right-3 top-1/3 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-px bg-black/20" />
                  <span className="type-label-sm text-black/25 whitespace-nowrap" style={{ writingMode: 'vertical-lr' }}>
                    UNC Chapel Hill
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary floating image — diagonal reveal */}
            <motion.div
              className="absolute -top-16 -left-10 w-[38%] aspect-square hidden lg:block"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: EASE_EXPO_OUT }}
            >
              <div className={`img-blend-carolina relative w-full h-full overflow-hidden ${isActive ? 'effect-diagonal-reveal is-active' : 'effect-diagonal-reveal'}`}
                style={{ transitionDelay: '700ms' }}
              >
                <motion.div
                  style={{ y: secondaryImageY }}
                  className="absolute inset-0 w-full h-[140%] -top-[20%]"
                >
                  <Image
                    src="/images/campus-aerial.jpg"
                    alt="Aerial view of campus"
                    fill
                    className="object-cover"
                    sizes="15vw"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section — Full width with animated reveals */}
        <motion.div
          ref={statsRef}
          className="mt-28 md:mt-40 pt-16 border-t-2 border-black"
          initial={{ opacity: 0 }}
          animate={isStatsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: EASE_EXPO_OUT }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black">
            {[
              { value: "200", label: "Planned Attendees", description: "Students and faculty" },
              { value: "03", label: "Research Tracks", description: "STEM, Social Sciences, Humanities" },
              { value: "02", label: "Conference Days", description: "October 2–3, 2026" },
              { value: "03", label: "PD Workshops", description: "Career-focused sessions" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group hover-light-to-dark relative bg-white p-8 md:p-10 cursor-default hover:bg-black transition-colors duration-700"
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.12 * index, ease: EASE_EXPO_OUT }}
              >
                <span className="block font-serif text-4xl md:text-5xl lg:text-6xl leading-none group-hover:text-[var(--carolina-blue)] transition-[color] duration-300 delay-100">
                  {stat.value}
                </span>
                <span className="type-label text-black/40 mt-5 block group-hover:text-white/50 transition-[color] duration-300 delay-100">
                  {stat.label}
                </span>
                <p className="type-body-xs text-black/25 mt-3 group-hover:text-white/30 transition-[color] duration-300 delay-100">
                  {stat.description}
                </p>

                <span className="absolute top-5 right-5 type-label-sm text-black/8 group-hover:text-white/15 transition-[color] duration-300 delay-100">
                  0{index + 1}
                </span>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--carolina-blue)] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

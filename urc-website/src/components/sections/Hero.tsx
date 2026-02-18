"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [charRevealed, setCharRevealed] = useState(false);

  // Mouse-tracked parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  // Scroll-based transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const secondaryImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.3]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.6], [0.12, 0]);

  useEffect(() => {
    const t1 = setTimeout(() => setIsLoaded(true), 200);
    const t2 = setTimeout(() => setCharRevealed(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY, view } = e;
    if (!view) return;
    mouseX.set((clientX / view.innerWidth - 0.5) * 30);
    mouseY.set((clientY / view.innerHeight - 0.5) * 30);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Split "URC" into individual characters for staggered reveal
  const titleChars = "URC".split("");
  const subtitleChars = "@UNC".split("");

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[110vh] md:min-h-[150vh] bg-white overflow-hidden"
    >
      {/* Film Grain Overlay */}
      <div className="grain-overlay" />

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Atmospheric Gradient Orbs */}
        <motion.div
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="gradient-orb gradient-orb-carolina absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw]"
        />
        <motion.div
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="gradient-orb gradient-orb-navy absolute -bottom-[30%] -left-[20%] w-[50vw] h-[50vw]"
        />

        {/* Editorial Grid Lines */}
        <div className="editorial-grid-lines" />

        {/* Background Grid Pattern — ultra subtle */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 transition-opacity duration-[3000ms] ${isLoaded ? 'opacity-[0.018]' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        {/* Floating Accent Elements — mouse-tracked */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-[12%] left-[6%] hidden lg:block pointer-events-none"
        >
          <motion.div
            className="w-px h-40 bg-[var(--carolina-blue)]"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isLoaded ? { scaleY: 1, opacity: 0.4 } : {}}
            transition={{ duration: 2, delay: 1.5, ease: EASE_EXPO_OUT }}
          />
        </motion.div>
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute bottom-[18%] right-[10%] hidden lg:block pointer-events-none"
        >
          <motion.div
            className="w-32 h-px bg-[var(--carolina-blue)]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isLoaded ? { scaleX: 1, opacity: 0.4 } : {}}
            transition={{ duration: 2, delay: 1.7, ease: EASE_EXPO_OUT }}
          />
          {/* Cross accent */}
          <motion.div
            className="absolute top-0 right-0 w-px h-8 bg-[var(--carolina-blue)] origin-top"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isLoaded ? { scaleY: 1, opacity: 0.3 } : {}}
            transition={{ duration: 1.5, delay: 2, ease: EASE_EXPO_OUT }}
          />
        </motion.div>

        {/* Floating vertical label — editorial annotation */}
        <motion.div
          className="floating-label left-6 top-1/2 hidden xl:block"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5, delay: 2.2 }}
        >
          Inaugural Edition — 2026
        </motion.div>

        {/* Main Content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10 h-full flex flex-col"
        >
          {/* Top Bar — volume info and date */}
          <div className="container-nippori pt-24 md:pt-28">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-6">
                <motion.span
                  className="type-label text-[var(--carolina-blue)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.5, ease: EASE_EXPO_OUT }}
                >
                  Vol. 01
                </motion.span>
                <motion.div
                  className="w-8 h-px bg-black/20"
                  initial={{ scaleX: 0 }}
                  animate={isLoaded ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.6, ease: EASE_EXPO_OUT }}
                />
                <motion.span
                  className="type-label text-black/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.7, ease: EASE_EXPO_OUT }}
                >
                  Inaugural Edition
                </motion.span>
              </div>

              <div className="text-right flex items-baseline gap-2">
                <motion.span
                  className="type-label"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.8, ease: EASE_EXPO_OUT }}
                >
                  October 02—03
                </motion.span>
                <motion.span
                  className="font-serif text-2xl md:text-3xl text-black/20 leading-none"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: EASE_EXPO_OUT }}
                >
                  '26
                </motion.span>
              </div>
            </div>
          </div>

          {/* Hero Typography — Character-by-character reveal */}
          <div className="flex-1 flex items-center container-nippori">
            <div className="w-full relative">
              <h1 className="relative">
                {/* Line 1: U R C — massive character reveal */}
                <span className="block relative">
                  <span className="flex">
                    {titleChars.map((char, i) => (
                      <span key={i} className="inline-block overflow-hidden">
                        <motion.span
                          className="inline-block font-serif text-ultra"
                          initial={{ y: "120%" }}
                          animate={charRevealed ? { y: "0%" } : {}}
                          transition={{
                            duration: 1.6,
                            delay: 0.15 + i * 0.08,
                            ease: EASE_EXPO_OUT,
                          }}
                        >
                          {char}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                </span>

                {/* Line 2: @UNC — indented, staggered after line 1 */}
                <span className="block ml-[8%] md:ml-[18%] lg:ml-[22%] relative">
                  <span className="flex">
                    {subtitleChars.map((char, i) => (
                      <span key={i} className="inline-block overflow-hidden">
                        <motion.span
                          className={`inline-block font-serif text-ultra ${
                            char === "@" ? "italic text-[var(--carolina-blue)]" : ""
                          }`}
                          initial={{ y: "120%" }}
                          animate={charRevealed ? { y: "0%" } : {}}
                          transition={{
                            duration: 1.6,
                            delay: 0.5 + i * 0.07,
                            ease: EASE_EXPO_OUT,
                          }}
                        >
                          {char}
                        </motion.span>
                      </span>
                    ))}
                  </span>

                  {/* Editorial bracket annotation */}
                  <motion.div
                    className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2, delay: 1.5, ease: EASE_EXPO_OUT }}
                  >
                    <span className="w-6 h-px bg-black/20" />
                    <span className="type-label-sm text-black/30 whitespace-nowrap">
                      Chapel Hill, NC
                    </span>
                  </motion.div>
                </span>

                {/* Background decorative number */}
                <motion.div
                  className="absolute -top-[15%] right-0 hidden xl:block pointer-events-none select-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 2, delay: 1.2, ease: EASE_EXPO_OUT }}
                >
                  <span className="font-serif text-[clamp(200px,28vw,450px)] leading-none text-black/[0.015]">
                    01
                  </span>
                </motion.div>
              </h1>

              {/* Subtitle Row — tagline + CTA */}
              <motion.div
                className="flex flex-col md:flex-row md:items-end justify-between mt-10 md:mt-16 gap-8"
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 1.1, ease: EASE_EXPO_OUT }}
              >
                <div className="max-w-lg">
                  <p className="type-body-lg text-black/50 leading-relaxed">
                    The inaugural{" "}
                    <span className="text-black font-medium italic">Undergraduate Research Conference</span>
                    {" "}at UNC Chapel Hill — a platform celebrating
                  </p>
                  <p className="type-body-lg text-black/50 leading-relaxed mt-1">
                    <span className="text-[var(--carolina-blue)] font-medium">student discovery</span>
                    {" "}and{" "}
                    <span className="text-[var(--carolina-blue)] font-medium">academic excellence</span>.
                  </p>
                </div>

                {/* CTA — magnetic button feel */}
                <Link
                  href="/get-involved#abstracts"
                  className="group hover-light-to-dark relative inline-flex items-center gap-5 border-2 border-black px-8 py-5 hover:bg-black hover:text-white transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <span className="font-serif text-sm tracking-wide uppercase">Submit Abstract</span>
                  <span className="relative w-8 h-px bg-current overflow-visible">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                  {/* Corner accents on button */}
                  <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--carolina-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--carolina-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="container-nippori pb-10 md:pb-14">
            <motion.div
              className="flex flex-wrap items-end gap-10 md:gap-20 pt-8 border-t border-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 1.4, ease: EASE_EXPO_OUT }}
            >
              {[
                { value: "200", label: "Planned Attendees" },
                { value: "03", label: "Research Tracks" },
                { value: "02", label: "Conference Days" },
                { value: "03", label: "PD Workshops" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: EASE_EXPO_OUT }}
                >
                  <span className="block font-serif text-3xl md:text-4xl lg:text-5xl leading-none group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
                    {stat.value}
                  </span>
                  <span className="type-label-sm text-black/30 mt-2 block uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Images — Absolute positioned */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main Image — corner-bracketed with parallax */}
          <motion.div
            className="absolute bottom-[8%] right-[3%] md:right-[7%] w-[38%] md:w-[36%] lg:w-[28%] aspect-[3/4] z-20"
          >
            <motion.div
              className={`corner-brackets relative w-full h-full overflow-hidden ${isLoaded ? 'effect-image is-active' : 'effect-image'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <motion.div
                style={{ y: heroImageY, scale: heroImageScale }}
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
              >
                <Image
                  src="/images/students-collaborating.jpg"
                  alt="Students collaborating on research"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 48vw, (max-width: 1024px) 36vw, 28vw"
                />
              </motion.div>
            </motion.div>

            {/* Image Badge — floating label */}
            <motion.div
              className="absolute -bottom-5 -left-5 md:-left-8 bg-white border-2 border-black p-4 md:p-5 z-30"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.8, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label-sm text-[var(--carolina-blue)] block">Featured</span>
              <span className="font-serif text-lg md:text-xl italic leading-tight">STEM</span>
            </motion.div>
          </motion.div>

          {/* Secondary Image — smaller, offset, grayscale */}
          <motion.div
            className="absolute top-[22%] left-[3%] w-[22%] md:w-[16%] lg:w-[13%] aspect-square z-10 hidden md:block"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.6, ease: EASE_EXPO_OUT }}
          >
            <motion.div
              className={`img-duotone relative w-full h-full overflow-hidden ${isLoaded ? 'effect-diagonal-reveal is-active' : 'effect-diagonal-reveal'}`}
              style={{ transitionDelay: '1400ms' }}
            >
              <motion.div
                style={{ y: secondaryImageY }}
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
              >
                <Image
                  src="/images/campus-building.jpg"
                  alt="UNC campus building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 16vw, 13vw"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tertiary decorative image — tiny, adds depth */}
          <motion.div
            className="absolute top-[60%] left-[38%] w-[8%] aspect-[4/5] z-5 hidden xl:block"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.6 } : {}}
            transition={{ duration: 2, delay: 2, ease: EASE_EXPO_OUT }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/lab-equipment.jpg"
                alt=""
                fill
                className="object-cover img-grayscale opacity-50"
                sizes="8vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator — pulsing line */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.5, ease: EASE_EXPO_OUT }}
        >
          <span className="type-label-sm text-black/25 tracking-[0.3em]">SCROLL</span>
          <div className="relative w-px h-10 bg-black/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--carolina-blue)]"
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Section — Scrolls over sticky hero */}
      <div className="relative z-30 bg-white">
        {/* Divider Band */}
        <div className="bg-black py-1" />
      </div>
    </section>
  );
}

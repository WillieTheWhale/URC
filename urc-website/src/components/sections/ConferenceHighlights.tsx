"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const highlights = [
  {
    num: "01",
    title: "Poster Sessions",
    description: "Present your research visually in our main atrium alongside peers from across the Southeast. Engage directly with faculty and fellow researchers.",
    longDescription: "Three dedicated sessions provide an intimate setting for detailed discussion of your methodology, findings, and implications with expert reviewers.",
    image: "/images/conference-audience.jpg",
  },
  {
    num: "02",
    title: "Oral Presentations",
    description: "Selected top abstracts deliver 15-minute talks to faculty and student audiences in specialized track sessions.",
    longDescription: "Develop your public speaking skills and receive real-time feedback from domain experts in purpose-built presentation rooms.",
    image: "/images/speaker-podium.jpg",
  },
  {
    num: "03",
    title: "Professional Development",
    description: "Three career-focused workshops led by industry professionals and academic mentors across both conference days.",
    longDescription: "From research communication to graduate school applications, gain practical skills that extend far beyond the conference.",
    image: "/images/working-laptop.jpg",
  },
  {
    num: "04",
    title: "Awards Ceremony",
    description: "Compete for merit-based awards recognizing outstanding undergraduate research across all disciplines and tracks.",
    longDescription: "Winners receive financial merit awards and recognition, judged by faculty, graduate students, and undergraduate seniors.",
    image: "/images/celebration.jpg",
  },
];

export default function ConferenceHighlights() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-12%" });
  const [isActive, setIsActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Track horizontal scroll progress
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(el.scrollLeft / maxScroll);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="highlights"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-white overflow-hidden"
    >
      {/* Background text — slow drift */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-[5%] left-0 w-full pointer-events-none select-none overflow-hidden"
      >
        <motion.span
          className="block font-serif text-[clamp(120px,20vw,350px)] leading-[0.8] text-black/[0.012] whitespace-nowrap"
          initial={{ x: "-5%" }}
          animate={isActive ? { x: "5%" } : {}}
          transition={{ duration: 50, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          CONFERENCE — HIGHLIGHTS — 2026
        </motion.span>
      </motion.div>

      <div className="container-nippori relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label text-[var(--carolina-blue)]">03</span>
              <span className="w-8 h-px bg-[var(--carolina-blue)]" />
              <span className="type-label text-black/40">Conference Highlights</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="type-display-md text-black"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{ duration: 1.3, delay: 0.1, ease: EASE_EXPO_OUT }}
              >
                What to <span className="italic text-[var(--carolina-blue)]">expect</span>
              </motion.h2>
            </div>

            <motion.p
              className="type-body text-black/50 mt-6 max-w-lg leading-[1.8]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
            >
              Two days of presentations, workshops, and networking opportunities
              designed to showcase undergraduate research excellence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: EASE_EXPO_OUT }}
          >
            <Link href="/conference" className="btn-pill">
              View Full Schedule
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll — with grab cursor and progress tracking */}
      <motion.div
        className="relative mt-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: EASE_EXPO_OUT }}
      >
        <div
          ref={scrollRef}
          className="horizontal-scroll-container py-8 gap-7 md:gap-10 cursor-grab-area"
        >
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.num}
              item={item}
              index={index}
              isActive={isActive}
            />
          ))}

          {/* End CTA Card */}
          <motion.div
            className="horizontal-scroll-item w-[280px] md:w-[340px] flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.2, ease: EASE_EXPO_OUT }}
          >
            <Link
              href="/conference"
              className="group hover-light-to-dark flex flex-col items-center text-center p-10 border-2 border-black/10 hover:border-black hover:bg-black transition-all duration-600 w-full"
            >
              <span className="w-16 h-16 rounded-full border-2 border-black/15 flex items-center justify-center mb-8 group-hover:bg-[var(--carolina-blue)] group-hover:border-[var(--carolina-blue)] transition-all duration-500">
                <svg className="w-6 h-6 text-black/40 group-hover:text-white transition-[color] duration-300 delay-100" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-serif text-xl text-black group-hover:text-white transition-[color] duration-300 delay-100">
                Explore All Events
              </span>
              <span className="type-body-sm text-black/40 mt-3 group-hover:text-white/50 transition-[color] duration-300 delay-100">
                View the complete schedule
              </span>
            </Link>
          </motion.div>

          <div className="flex-shrink-0 w-[var(--container-padding-mobile)] md:w-[var(--container-padding-desktop)]" />
        </div>

        {/* Scroll Progress Track — actually tracks scroll position */}
        <div className="container-nippori mt-10">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <div className="scroll-track">
                <div
                  className="scroll-track-fill"
                  style={{ transform: `scaleX(${scrollProgress})` }}
                />
              </div>
            </div>
            <span className="type-label-sm text-black/30 flex-shrink-0">
              Drag to explore →
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats Band */}
      <div className="container-nippori mt-24 md:mt-36">
        <motion.div
          className="flex flex-wrap justify-between items-center gap-10 py-10 border-t-2 border-b-2 border-black/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: EASE_EXPO_OUT }}
        >
          {[
            { value: "2", label: "Days", sublabel: "of Programming" },
            { value: "3", label: "Poster", sublabel: "Sessions" },
            { value: "3", label: "Professional", sublabel: "Workshops" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-5">
              <span className="font-serif text-5xl md:text-6xl leading-none">{stat.value}</span>
              <div>
                <span className="type-label text-black/35 block">{stat.label}</span>
                <span className="type-label text-black">{stat.sublabel}</span>
              </div>
            </div>
          ))}

          <Link
            href="/get-involved#abstracts"
            className="group inline-flex items-center gap-4 bg-black text-white px-8 py-5 hover:bg-[var(--carolina-blue)] transition-colors duration-500"
          >
            <span className="font-serif text-sm uppercase tracking-wide">Register Now</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface HighlightCardProps {
  item: (typeof highlights)[0];
  index: number;
  isActive: boolean;
}

function HighlightCard({ item, index, isActive }: HighlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageActive, setImageActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setImageActive(true), 600 + index * 180);
      return () => clearTimeout(timer);
    }
  }, [isActive, index]);

  return (
    <motion.div
      ref={cardRef}
      className="horizontal-scroll-item w-[280px] md:w-[420px] lg:w-[480px] flex-shrink-0 group"
      initial={{ opacity: 0, x: 80 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, delay: 0.4 + index * 0.12, ease: EASE_EXPO_OUT }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image — with corner brackets and dramatic hover */}
      <div className={`corner-brackets relative aspect-[4/5] mb-7 overflow-hidden ${imageActive ? 'effect-image is-active' : 'effect-image'}`}>
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover transition-all duration-1000 img-grayscale ${isHovered ? '!filter-none !grayscale-0' : ''}`}
            style={isHovered ? { filter: 'grayscale(0)' } : undefined}
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 480px"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-600 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Large number watermark */}
        <div className="absolute top-4 right-6">
          <span className="font-serif text-6xl md:text-7xl text-white/10 leading-none">{item.num}</span>
        </div>

        {/* Hover content — slides up */}
        <div className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-600 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="type-body-sm text-white/85 leading-[1.7]">
            {item.longDescription}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-[var(--carolina-blue)] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: isHovered ? '100%' : '0%' }}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-black mb-4 group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
          {item.title}
        </h3>
        <p className="type-body-sm text-black/50 leading-[1.7] line-clamp-2">
          {item.description}
        </p>

        <Link
          href="/conference"
          className="inline-flex items-center gap-3 mt-5 type-label text-black/35 hover:text-[var(--carolina-blue)] transition-colors duration-300"
        >
          <span>Learn more</span>
          <span className="w-4 h-px bg-current" />
        </Link>
      </div>
    </motion.div>
  );
}

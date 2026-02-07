"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const researchAreas = [
  {
    id: "01",
    title: "STEM",
    subtitle: "Biology • Chemistry • Physics • Engineering • Computer Science",
    description: "Present research across the natural and applied sciences — from molecular biology to environmental science — with specialized feedback from faculty reviewers.",
    image: "/images/research-microscope.jpg",
  },
  {
    id: "02",
    title: "Social Sciences",
    subtitle: "Psychology • Sociology • Economics • Political Science",
    description: "Share insights into human behavior, social structures, economic systems, and public policy with peers and mentors from across the region.",
    image: "/images/students-collaborating.jpg",
  },
  {
    id: "03",
    title: "Humanities & Arts",
    subtitle: "History • Literature • Philosophy • Visual Arts",
    description: "Present creative scholarship spanning historical analysis, literary criticism, philosophical inquiry, and artistic expression.",
    image: "/images/graduation.jpg",
  },
];

export default function FeaturedResearch() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="research"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[var(--color-cream)] overflow-hidden noise-bg"
    >
      {/* Dot Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Floating Section Number */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-20 right-[var(--container-padding-desktop)] hidden xl:block pointer-events-none select-none"
      >
        <span className="font-serif text-[clamp(200px,22vw,380px)] leading-none text-black/[0.018]">
          02
        </span>
      </motion.div>

      <div className="container-nippori relative z-10">
        {/* Section Header — with editorial divider */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label text-[var(--carolina-blue)]">02</span>
              <span className="w-8 h-px bg-[var(--carolina-blue)]" />
              <span className="type-label text-black/40">Research Tracks</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="type-display-md text-black"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{ duration: 1.3, delay: 0.1, ease: EASE_EXPO_OUT }}
              >
                Featured{" "}
                <span className="italic text-[var(--carolina-blue)]">Areas</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            className="type-body text-black/50 max-w-md leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
          >
            Our multi-track format ensures specialized feedback and
            networking opportunities for researchers across all disciplines.
          </motion.p>
        </div>

        {/* Research Areas Grid — with dramatic hover effects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black">
          {researchAreas.map((area, index) => (
            <ResearchAreaCard
              key={area.id}
              area={area}
              index={index}
              isActive={isActive}
              isHovered={hoveredIndex === index}
              otherHovered={hoveredIndex !== null && hoveredIndex !== index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Bottom CTA — editorial style */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-10 mt-20 md:mt-28 pt-14 border-t border-black/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: EASE_EXPO_OUT }}
        >
          <div>
            <p className="type-body-lg text-black mb-2">
              Ready to share your research?
            </p>
            <p className="type-body text-black/40">
              Abstract submissions open April 1, 2026
            </p>
          </div>

          <Link
            href="/get-involved#abstracts"
            className="group inline-flex items-center gap-5 bg-black text-white px-10 py-6 hover:bg-[var(--carolina-blue)] transition-colors duration-600"
          >
            <span className="font-serif text-sm tracking-wide uppercase">Submit Your Research</span>
            <span className="relative w-8 h-px bg-current overflow-visible">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface ResearchAreaCardProps {
  area: (typeof researchAreas)[0];
  index: number;
  isActive: boolean;
  isHovered: boolean;
  otherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ResearchAreaCard({ area, index, isActive, isHovered, otherHovered, onHover, onLeave }: ResearchAreaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageRevealed, setImageRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setImageRevealed(true), 500 + index * 250);
      return () => clearTimeout(timer);
    }
  }, [isActive, index]);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative bg-white overflow-hidden transition-opacity duration-500 ${
        otherHovered ? 'opacity-60' : 'opacity-100'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: otherHovered ? 0.6 : 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: 0.2 + index * 0.15, ease: EASE_EXPO_OUT }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href="/conference" className="block">
        {/* Image Container — with zoom on hover */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className={`absolute inset-0 ${imageRevealed ? 'effect-image is-active' : 'effect-image'}`}>
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 w-full h-[140%] -top-[20%]"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className={`object-cover transition-all duration-1000 img-grayscale ${
                  isHovered ? '!filter-none !grayscale-0' : ''
                }`}
                style={isHovered ? { filter: 'grayscale(0)' } : undefined}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </div>

          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

          {/* ID Badge */}
          <div className="absolute top-5 left-5 bg-white px-3 py-2">
            <span className="type-label text-[var(--carolina-blue)]">{area.id}</span>
          </div>

          {/* Track Label */}
          <div className="absolute top-5 right-5 bg-black text-white px-3 py-2">
            <span className="type-label">Track {area.id}</span>
          </div>

          {/* Bottom accent line — draws on hover */}
          <div
            className="absolute bottom-0 left-0 h-[3px] bg-[var(--carolina-blue)] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: isHovered ? '100%' : '0%' }}
          />
        </div>

        {/* Content */}
        <div className="p-7 md:p-9">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-black group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
                {area.title}
              </h3>
              <p className="type-label text-black/35 mt-3">{area.subtitle}</p>
            </div>

            <span className="w-10 h-10 rounded-full border-2 border-black/15 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all duration-500">
              <svg
                className="w-4 h-4 text-black/30 group-hover:text-white transition-[color] duration-300 delay-100"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <p className="type-body-sm text-black/50 leading-[1.8]">
            {area.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

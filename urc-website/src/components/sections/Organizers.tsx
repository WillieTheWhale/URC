"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const committeePositions = [
  {
    role: "Director",
    name: "Ryan P.",
    division: "Leadership",
    description: "Overall leadership, vision, and accountability for the conference.",
    filled: true,
    image: "/images/scientist-portrait.jpg",
  },
  {
    role: "Finance Chair",
    name: "Open Position",
    division: "Internal Operations",
    description: "Develop and manage the conference budget, track expenses and sponsorship funds.",
    filled: false,
    image: "/images/working-laptop.jpg",
  },
  {
    role: "Logistics Lead",
    name: "Open Position",
    division: "Internal Operations",
    description: "Coordinate university venues, room assignments, signage, and AV requirements.",
    filled: false,
    image: "/images/students-collaborating.jpg",
  },
];

const openPositions = [
  { role: "Conference Experience Lead", division: "Internal Operations" },
  { role: "Grant Writing Lead", division: "External Operations" },
  { role: "Public Relations Director", division: "External Operations" },
  { role: "Web Development Lead", division: "External Operations" },
  { role: "Speaker Recruitment", division: "Recruitment" },
  { role: "Attendee Recruitment", division: "Recruitment" },
];

export default function Organizers() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  useEffect(() => {
    if (isInView) setIsActive(true);
  }, [isInView]);

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[var(--color-cream)] overflow-hidden noise-bg"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating section number */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -top-10 left-[var(--container-padding-desktop)] hidden xl:block pointer-events-none select-none"
      >
        <span className="font-serif text-[clamp(180px,20vw,320px)] leading-none text-black/[0.018]">
          05
        </span>
      </motion.div>

      <div className="container-nippori relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label text-[var(--carolina-blue)]">05</span>
              <span className="w-8 h-px bg-[var(--carolina-blue)]" />
              <span className="type-label text-black/40">The Team</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="type-display-md text-black"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{
                  duration: 1.3,
                  delay: 0.1,
                  ease: EASE_EXPO_OUT,
                }}
              >
                Meet the{" "}
                <span className="italic text-[var(--carolina-blue)]">
                  organizers
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            className="type-body text-black/50 max-w-md leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
          >
            A passionate team of undergraduate researchers dedicated to creating
            opportunities for academic growth and professional development.
          </motion.p>
        </div>

        {/* Committee — Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mb-20">
          {committeePositions.map((person, index) => (
            <OrganizerCard
              key={person.role}
              person={person}
              index={index}
              isActive={isActive}
            />
          ))}
        </div>

        {/* Open Positions — Editorial List */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: EASE_EXPO_OUT }}
        >
          <div className="flex items-center gap-6 mb-10">
            <h3 className="font-serif text-2xl text-black whitespace-nowrap">
              Open Positions
            </h3>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.role}
                className="group relative bg-[var(--color-cream)] p-7 md:p-9 hover:bg-black transition-colors duration-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.08,
                  ease: EASE_EXPO_OUT,
                }}
              >
                {/* Index */}
                <span className="absolute top-5 right-5 type-label-sm text-black/8 group-hover:text-white/15 transition-[color] duration-300 delay-100">
                  0{index + 1}
                </span>

                <span className="type-label text-[var(--carolina-blue)] block mb-3">
                  {position.division}
                </span>
                <h4 className="font-serif text-xl md:text-2xl text-black group-hover:text-white transition-[color] duration-300 delay-100">
                  {position.role}
                </h4>
                <Link
                  href="/get-involved#exec"
                  className="inline-flex items-center gap-2 mt-4 type-label text-[var(--carolina-blue)] group-hover:text-[var(--carolina-blue)] transition-[color] duration-300 delay-100"
                >
                  <span>Apply Now</span>
                  <span className="w-3 h-px bg-current" />
                </Link>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--carolina-blue)] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join CTA — Editorial banner */}
        <motion.div
          className="mt-24 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: EASE_EXPO_OUT }}
        >
          <div className="relative bg-black text-white overflow-hidden">
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-10 md:p-14">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">
                  Join the organizing committee
                </h3>
                <p className="type-body text-white/50 max-w-lg leading-[1.8]">
                  We&apos;re looking for passionate students to help shape the
                  future of undergraduate research conferences at UNC.
                </p>
              </div>

              <Link
                href="/get-involved#volunteer"
                className="group inline-flex items-center gap-5 bg-white text-black px-7 py-5 md:px-10 md:py-6 hover:bg-[var(--carolina-blue)] hover:text-white transition-colors duration-500 flex-shrink-0"
              >
                <span className="font-serif text-sm uppercase tracking-wide">
                  Get Involved
                </span>
                <span className="relative w-8 h-px bg-current overflow-visible">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface OrganizerCardProps {
  person: (typeof committeePositions)[0];
  index: number;
  isActive: boolean;
}

function OrganizerCard({ person, index, isActive }: OrganizerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(
        () => setImageRevealed(true),
        200 + index * 100,
      );
      return () => clearTimeout(timer);
    }
  }, [isActive, index]);

  // Asymmetric column spans — first card larger, staggered heights
  const colSpan =
    index === 0
      ? "md:col-span-5"
      : index === 1
        ? "md:col-span-4"
        : "md:col-span-3";

  const aspectRatio =
    index === 0
      ? "aspect-[3/4]"
      : index === 1
        ? "aspect-[4/5]"
        : "aspect-square";

  const topOffset =
    index === 1
      ? "md:mt-16"
      : index === 2
        ? "md:mt-8"
        : "";

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${colSpan} ${topOffset}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: 0.3 + index * 0.15,
        ease: EASE_EXPO_OUT,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image — with corner brackets */}
      <div
        className={`corner-brackets relative ${aspectRatio} overflow-hidden ${
          imageRevealed ? "effect-image is-active" : "effect-image"
        }`}
      >
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
        >
          <Image
            src={person.image}
            alt={person.name}
            fill
            className={`object-cover transition-all duration-1000 img-grayscale ${
              isHovered ? "!filter-none !grayscale-0" : ""
            }`}
            style={isHovered ? { filter: "grayscale(0)" } : undefined}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-600 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Role badge */}
        <div className="absolute top-5 left-5 bg-white px-3 py-2">
          <span className="type-label text-[var(--carolina-blue)]">
            {person.role}
          </span>
        </div>

        {/* Status badge */}
        {!person.filled && (
          <div className="absolute top-5 right-5 bg-[var(--carolina-blue)] text-white px-3 py-2">
            <span className="type-label-sm">Open</span>
          </div>
        )}

        {/* Hover description */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-600 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="type-body-sm text-white/90 leading-[1.7]">
            {person.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-[var(--carolina-blue)] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: isHovered ? "100%" : "0%" }}
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-serif text-2xl md:text-3xl text-black group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
          {person.name}
        </h3>
        <p className="type-body-sm text-black/40 mt-2">{person.division}</p>
        {!person.filled && (
          <Link
            href="/get-involved#exec"
            className="inline-flex items-center gap-2 mt-3 type-label text-[var(--carolina-blue)] hover:text-black transition-colors duration-300"
          >
            <span>Apply</span>
            <span className="w-3 h-px bg-current" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const audiences = [
  {
    num: "01",
    title: "For Students",
    href: "/get-involved#abstracts",
    image: "/images/networking.jpg",
    points: [
      "Present your research to peers and faculty",
      "Network with students from across the region",
      "Develop professional communication skills",
      "Compete for merit-based awards",
    ],
  },
  {
    num: "02",
    title: "For Faculty",
    href: "/get-involved#volunteer",
    image: "/images/studying-notes.jpg",
    points: [
      "Support your students' professional development",
      "Connect with fellow research mentors",
      "Judge presentations and identify emerging talent",
      "Contribute to the undergraduate research community",
    ],
  },
  {
    num: "03",
    title: "For Sponsors",
    href: "/sponsors",
    image: "/images/working-laptop.jpg",
    points: [
      "Access to 200+ undergraduate researchers",
      "Brand visibility across all conference materials",
      "Recruitment opportunities with emerging talent",
      "Support equitable access to professional development",
    ],
  },
];

export default function WhyAttend() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-12%" });
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 bg-white overflow-hidden"
    >
      {/* Editorial Grid Lines */}
      <div className="editorial-grid-lines" />

      {/* Floating background number */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-20 right-[var(--container-padding-desktop)] hidden xl:block pointer-events-none select-none"
      >
        <span className="font-serif text-[clamp(200px,22vw,380px)] leading-none text-black/[0.015]">
          06
        </span>
      </motion.div>

      <div className="container-nippori relative z-10">
        {/* Header — editorial centered */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO_OUT }}
          >
            <span className="w-8 h-px bg-[var(--carolina-blue)]/40" />
            <span className="type-label text-[var(--carolina-blue)]">06</span>
            <span className="w-8 h-px bg-[var(--carolina-blue)]" />
            <span className="type-label text-black/40">Why URC@UNC</span>
            <span className="w-8 h-px bg-[var(--carolina-blue)]/40" />
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
              Something for{" "}
              <span className="italic text-[var(--carolina-blue)]">
                everyone
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="type-body text-black/45 mt-6 max-w-lg mx-auto leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
          >
            Whether you&apos;re presenting research, mentoring students, or
            building partnerships — URC@UNC has a place for you.
          </motion.p>
        </div>

        {/* Cards Grid — with images and hover effects */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE_EXPO_OUT }}
        >
          {audiences.map((audience, index) => {
            const isHovered = hoveredIndex === index;
            const otherHovered =
              hoveredIndex !== null && hoveredIndex !== index;

            return (
              <Link
                key={audience.title}
                href={audience.href}
                className={`group relative overflow-hidden transition-all duration-600 ${
                  otherHovered ? "opacity-60 scale-[0.98]" : "opacity-100 scale-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      isHovered ? "scale-110 filter-none" : "scale-100 grayscale"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  {/* Dark overlay — always present, lightens on hover */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      isHovered
                        ? "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
                        : "bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                    }`}
                  />

                  {/* Carolina blue accent line at top */}
                  <div
                    className="absolute top-0 left-0 h-[3px] bg-[var(--carolina-blue)] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: isHovered ? "100%" : "0%" }}
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    {/* Number */}
                    <span className="absolute top-6 left-8 font-serif text-6xl md:text-7xl text-white/[0.08] leading-none">
                      {audience.num}
                    </span>

                    {/* Corner bracket — top right */}
                    <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-white/15 pointer-events-none" />

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 group-hover:text-[var(--carolina-blue)] transition-colors duration-500">
                      {audience.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3 mb-8">
                      {audience.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 type-body-sm text-white/55 group-hover:text-white/70 transition-colors duration-300"
                        >
                          <span className="text-[var(--carolina-blue)] mt-0.5 flex-shrink-0">
                            —
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="flex items-center gap-3 type-label text-white/40 group-hover:text-[var(--carolina-blue)] transition-colors duration-300">
                      <span>Learn more</span>
                      <span className="relative w-6 h-px bg-current overflow-visible">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-current rotate-45 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Every question deserves an audience.",
    author: "URC Mission",
    field: "Founding Principle",
  },
  {
    quote: "A research conference for undergraduates, by undergraduates.",
    author: "URC@UNC",
    field: "Our Identity",
  },
  {
    quote: "Expanding access to professional research presentation opportunities for Southern undergraduates.",
    author: "URC Goal",
    field: "Access & Equity",
  },
  {
    quote: "Strengthening students' scientific communication and career readiness.",
    author: "URC Goal",
    field: "Professional Development",
  },
  {
    quote: "Building a sustainable, student-led model for interdisciplinary collaboration.",
    author: "URC Goal",
    field: "Long-Term Vision",
  },
  {
    quote: "Equitable opportunities to share and celebrate undergraduate research.",
    author: "URC@UNC",
    field: "Core Value",
  },
];

export default function TestimonialMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });

  // Double the testimonials for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      ref={containerRef}
      className="relative py-16 md:py-20 bg-black overflow-hidden"
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top label */}
      <motion.div
        className="container-nippori mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-[var(--carolina-blue)]/50" />
          <span className="type-label-sm text-[var(--carolina-blue)] tracking-widest">
            What People Are Saying
          </span>
        </div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="marquee-quote">
          {doubledTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-start gap-8 px-8 md:px-12 border-r border-white/8"
              style={{ minWidth: "420px", maxWidth: "520px" }}
            >
              <span className="font-serif text-4xl text-[var(--carolina-blue)]/20 leading-none flex-shrink-0 mt-1">
                &ldquo;
              </span>
              <div>
                <p className="font-serif text-lg md:text-xl text-white/70 leading-[1.5] italic">
                  {testimonial.quote}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-3 h-px bg-[var(--carolina-blue)]" />
                  <span className="type-label-sm text-white/30">
                    {testimonial.author}
                  </span>
                  <span className="text-white/15">&bull;</span>
                  <span className="type-label-sm text-[var(--carolina-blue)]/40">
                    {testimonial.field}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Edge fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}

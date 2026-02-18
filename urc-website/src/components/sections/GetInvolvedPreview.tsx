"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const involvementOptions = [
  {
    num: "01",
    title: "Submit Abstract",
    href: "/get-involved#abstracts",
    description: "Share your research with peers and faculty",
  },
  {
    num: "02",
    title: "Volunteer",
    href: "/get-involved#volunteer",
    description: "Judge presentations or help with logistics",
  },
  {
    num: "03",
    title: "Join Executive Team",
    href: "/get-involved#exec",
    description: "Help build the conference from the ground up",
  },
];

export default function GetInvolvedPreview() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    if (isInView) {
      setIsActive(true);
    }
  }, [isInView]);

  return (
    <section 
      id="involvement"
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[var(--accent-navy)] overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className={`font-serif text-[25vw] md:text-[20vw] leading-none text-white/[0.02] whitespace-nowrap transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          JOIN US
        </span>
      </div>

      <div className="container-nippori relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className={`type-label text-[var(--accent-cyan)] block mb-4 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            03 / Get Involved
          </span>
          <h2 className="type-display-md text-white overflow-hidden">
            <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
              Be part of something{" "}
              <span className="italic text-[var(--accent-cyan)]">new</span>
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Options List */}
          <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border-t border-white/20">
              {involvementOptions.map((option, index) => (
                <Link
                  key={option.num}
                  href={option.href}
                  className="group block py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 -mx-4 px-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="type-label text-[var(--accent-cyan)] pt-1">{option.num}</span>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 group-hover:italic transition-all duration-300">
                        {option.title}
                      </h3>
                      <p className="type-body-sm text-white/50 group-hover:text-white/70 transition-colors">
                        {option.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 pt-2">
                      <svg 
                        className="w-4 h-4 text-white/30 group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1 transition-all duration-300" 
                        viewBox="0 0 36 30" 
                        fill="none"
                      >
                        <path fill="currentColor" d="M19.8574.8572c.781-.781 2.0481-.781 2.8291 0l12.7276 12.7285c.781.7811.781 2.0471 0 2.8282L22.6865 29.1424c-.781.7809-2.0481.781-2.8291 0-.781-.781-.7809-2.0481 0-2.8291l9.3145-9.3135H0v-4h29.1719l-9.3145-9.3135c-.7809-.781-.781-2.048 0-2.829Z"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link href="/get-involved" className="btn-square bg-[var(--accent-cyan)] text-black border-[var(--accent-cyan)] hover:bg-white hover:border-white">
                <span>Explore All Options</span>
                <svg className="w-4 h-4" viewBox="0 0 36 30" fill="none">
                  <path fill="currentColor" d="M19.8574.8572c.781-.781 2.0481-.781 2.8291 0l12.7276 12.7285c.781.7811.781 2.0471 0 2.8282L22.6865 29.1424c-.781.7809-2.0481.781-2.8291 0-.781-.781-.7809-2.0481 0-2.8291l9.3145-9.3135H0v-4h29.1719l-9.3145-9.3135c-.7809-.781-.781-2.048 0-2.829Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div 
            ref={imageRef}
            className={`relative aspect-[4/5] lg:aspect-auto lg:min-h-[500px] overflow-hidden ${isActive ? 'effect-image is-active' : 'effect-image'}`}
          >
            <motion.div 
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <Image
                src="/get-involved.png"
                alt="Get Involved"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Crosshair Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Horizontal line */}
              <motion.div 
                className="absolute left-0 right-0 h-px bg-[var(--accent-cyan)]"
                style={{ 
                  top: hoveredIndex !== null ? `${33 + hoveredIndex * 33}%` : '50%',
                  opacity: hoveredIndex !== null ? 0.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Vertical line */}
              <motion.div 
                className="absolute top-0 bottom-0 w-px bg-[var(--accent-cyan)]"
                style={{ 
                  left: '50%',
                  opacity: hoveredIndex !== null ? 0.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Corner Badge */}
            <div className={`absolute bottom-4 right-4 bg-black px-4 py-3 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="type-label text-[var(--accent-cyan)] block mb-1">Deadline</span>
              <span className="font-serif text-xl text-white">July 1, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

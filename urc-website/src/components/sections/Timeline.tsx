"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const timelineEvents = [
  {
    date: "Apr 1",
    year: "2026",
    title: "Applications Open",
    description:
      "Abstract submissions begin. Start preparing your research for presentation.",
    status: "upcoming" as const,
    details: [
      "Online portal opens",
      "Submission guidelines available",
      "All undergraduates eligible",
    ],
  },
  {
    date: "Jul 1",
    year: "2026",
    title: "Submission Deadline",
    description:
      "Final day to submit your research abstract. All submissions undergo review.",
    status: "upcoming" as const,
    details: [
      "11:59 PM EST deadline",
      "Faculty advisor info required",
      "Choose your track",
    ],
  },
  {
    date: "Summer",
    year: "2026",
    title: "Review & Notifications",
    description:
      "Abstracts are reviewed and accepted presenters are announced. Registration opens for all attendees.",
    status: "upcoming" as const,
    details: [
      "Email notifications",
      "Presentation assignments",
      "Registration opens",
    ],
  },
  {
    date: "Oct 2–3",
    year: "2026",
    title: "Conference",
    description:
      "Two days of poster sessions, oral presentations, professional development, and awards at UNC Chapel Hill.",
    status: "highlight" as const,
    details: ["Poster & oral sessions", "PD workshops", "Awards ceremony"],
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-12%" });
  const [isActive, setIsActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-white overflow-hidden"
    >
      {/* Editorial Grid Lines */}
      <div className="editorial-grid-lines" />

      {/* Floating section number */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-16 right-[var(--container-padding-desktop)] hidden xl:block pointer-events-none select-none"
      >
        <span className="font-serif text-[clamp(200px,22vw,380px)] leading-none text-black/[0.018]">
          04
        </span>
      </motion.div>

      <div className="container-nippori relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 md:mb-32">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_EXPO_OUT }}
            >
              <span className="type-label text-[var(--carolina-blue)]">04</span>
              <span className="w-8 h-px bg-[var(--carolina-blue)]" />
              <span className="type-label text-black/40">Important Dates</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="type-display-md text-black"
                initial={{ y: "100%" }}
                animate={isActive ? { y: "0%" } : {}}
                transition={{ duration: 1.3, delay: 0.1, ease: EASE_EXPO_OUT }}
              >
                Mark your{" "}
                <span className="italic text-[var(--carolina-blue)]">
                  calendar
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            className="flex flex-col justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: EASE_EXPO_OUT }}
          >
            <p className="type-body text-black/50 max-w-md mb-8 leading-[1.8]">
              From abstract submission to the conference itself, here are the key
              milestones to keep in mind as you prepare your research.
            </p>
            <Link
              href="/get-involved#abstracts"
              className="btn-pill self-start"
            >
              Set a Reminder
            </Link>
          </motion.div>
        </div>

        {/* Vertical Timeline — Editorial Style */}
        <div className="relative">
          {/* Central vertical line — desktop only */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/8 hidden lg:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--carolina-blue)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-6 w-px bg-black/8 lg:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--carolina-blue)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.date}
                event={event}
                index={index}
                isActive={isActive}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom Countdown CTA */}
        <motion.div
          className="mt-24 md:mt-36"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: EASE_EXPO_OUT }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 p-10 md:p-14 border-2 border-black">
            <div className="flex items-center gap-7">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--carolina-blue)] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[var(--carolina-blue)]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full border border-[var(--carolina-blue)]/30 animate-ping" />
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-black leading-none">
                  October 2026
                </p>
                <p className="type-body text-black/40 mt-2">
                  Inaugural conference at UNC Chapel Hill
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#abstracts"
                className="group inline-flex items-center gap-4 bg-black text-white px-8 py-5 hover:bg-[var(--carolina-blue)] transition-colors duration-500"
              >
                <span className="font-serif text-sm uppercase tracking-wide">
                  Get Notified
                </span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/conference"
                className="group inline-flex items-center gap-4 border-2 border-black px-8 py-5 hover:bg-black hover:text-white transition-all duration-500"
              >
                <span className="font-serif text-sm uppercase tracking-wide">
                  View Full Schedule
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  event: (typeof timelineEvents)[0];
  index: number;
  isActive: boolean;
  isEven: boolean;
}

function TimelineItem({ event, index, isActive, isEven }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHighlight = event.status === "highlight";

  return (
    <motion.div
      ref={itemRef}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 py-10 md:py-16 ${
        index < timelineEvents.length - 1 ? "" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: 0.3 + index * 0.15,
        ease: EASE_EXPO_OUT,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline node — desktop */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2 hidden lg:flex flex-col items-center z-20">
        <motion.div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
            isHighlight
              ? "bg-[var(--carolina-blue)] border-[var(--carolina-blue)] shadow-[0_0_20px_rgba(75,156,211,0.4)]"
              : isHovered
                ? "bg-black border-black scale-125"
                : "bg-white border-black/25"
          }`}
          initial={{ scale: 0 }}
          animate={isActive ? { scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5 + index * 0.15,
            ease: EASE_EXPO_OUT,
          }}
        />
      </div>

      {/* Timeline node — mobile */}
      <div className="absolute left-4 md:left-6 top-12 -translate-x-1/2 lg:hidden z-20">
        <motion.div
          className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
            isHighlight
              ? "bg-[var(--carolina-blue)] border-[var(--carolina-blue)]"
              : isHovered
                ? "bg-black border-black"
                : "bg-white border-black/25"
          }`}
          initial={{ scale: 0 }}
          animate={isActive ? { scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5 + index * 0.15,
            ease: EASE_EXPO_OUT,
          }}
        />
      </div>

      {/* Date Column — alternates sides on desktop */}
      <div
        className={`pl-10 md:pl-14 lg:pl-0 ${
          isEven
            ? "lg:pr-20 lg:text-right lg:order-1"
            : "lg:pl-20 lg:text-left lg:order-2"
        }`}
      >
        <div className="flex items-baseline gap-3 lg:justify-end flex-wrap">
          {isEven ? (
            <>
              <span
                className={`font-serif text-5xl md:text-6xl lg:text-7xl leading-none transition-colors duration-500 ${
                  isHighlight || isHovered
                    ? "text-[var(--carolina-blue)]"
                    : "text-black"
                }`}
              >
                {event.date}
              </span>
              <span className="type-label text-black/30">{event.year}</span>
            </>
          ) : (
            <>
              <span className="type-label text-black/30 lg:hidden">
                {event.year}
              </span>
              <span
                className={`font-serif text-5xl md:text-6xl lg:text-7xl leading-none transition-colors duration-500 ${
                  isHighlight || isHovered
                    ? "text-[var(--carolina-blue)]"
                    : "text-black"
                }`}
              >
                {event.date}
              </span>
              <span className="type-label text-black/30 hidden lg:inline">
                {event.year}
              </span>
            </>
          )}
        </div>

        {/* Decorative line on desktop — points toward center */}
        <div
          className={`hidden lg:block mt-6 ${isEven ? "ml-auto" : ""}`}
          style={{ width: isHovered ? "80px" : "40px" }}
        >
          <div
            className={`h-px transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHighlight || isHovered
                ? "bg-[var(--carolina-blue)]"
                : "bg-black/15"
            }`}
          />
        </div>
      </div>

      {/* Content Column */}
      <div
        className={`pl-10 md:pl-14 lg:pl-0 ${
          isEven
            ? "lg:pl-20 lg:text-left lg:order-2"
            : "lg:pr-20 lg:text-right lg:order-1"
        }`}
      >
        <div
          className={`relative p-7 md:p-9 border transition-all duration-600 ${
            isHighlight
              ? "bg-black text-white border-black"
              : isHovered
                ? "bg-black text-white border-black"
                : "bg-white border-black/10 hover:border-black/20"
          }`}
        >
          {/* Corner index */}
          <span
            className={`absolute top-4 type-label-sm transition-colors duration-500 ${
              isEven ? "right-4" : "lg:left-4 right-4 lg:right-auto"
            } ${
              isHighlight || isHovered ? "text-white/15" : "text-black/8"
            }`}
          >
            0{index + 1}
          </span>

          {/* Highlight badge */}
          {isHighlight && (
            <div
              className={`absolute -top-3 bg-[var(--carolina-blue)] text-white px-4 py-1.5 ${
                isEven ? "-right-2" : "lg:-left-2 -right-2 lg:right-auto"
              }`}
            >
              <span className="type-label-sm tracking-wider">Main Event</span>
            </div>
          )}

          <h3
            className={`font-serif text-xl md:text-2xl mb-4 transition-colors duration-500 ${
              isHighlight || isHovered
                ? "text-white"
                : "text-black"
            }`}
          >
            {event.title}
          </h3>

          <p
            className={`type-body-sm leading-[1.8] transition-colors duration-500 ${
              isHighlight || isHovered
                ? "text-white/60"
                : "text-black/50"
            }`}
          >
            {event.description}
          </p>

          {/* Details */}
          <ul
            className={`mt-5 pt-4 border-t space-y-2 transition-colors duration-500 ${
              isHighlight || isHovered
                ? "border-white/15"
                : "border-black/8"
            }`}
          >
            {event.details.map((detail, i) => (
              <li
                key={i}
                className={`type-label-sm flex items-center gap-2.5 transition-colors duration-500 ${
                  isEven ? "" : "lg:flex-row-reverse lg:justify-end"
                } ${
                  isHighlight || isHovered
                    ? "text-white/45"
                    : "text-black/35"
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full flex-shrink-0 ${
                    isHighlight || isHovered
                      ? "bg-[var(--carolina-blue)]"
                      : "bg-black/25"
                  }`}
                />
                {detail}
              </li>
            ))}
          </ul>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-[var(--carolina-blue)] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: isHovered || isHighlight ? "100%" : "0%" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

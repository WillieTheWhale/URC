"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence, type MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================================================================
   DATA
   ============================================================================= */

const fridaySchedule = [
  { time: "5:00 PM", event: "Registration Opens", location: "Main Lobby", highlight: false },
  { time: "5:30 PM", event: "Welcome Remarks", location: "Auditorium", highlight: true },
  { time: "6:00 PM", event: "Networking Dinner", location: "Dining Hall", highlight: false },
  { time: "7:00 PM", event: "Workshop Session", location: "Breakout Rooms", highlight: false },
];

const saturdaySchedule = [
  { time: "9:30 AM", event: "Breakfast", location: "Dining Hall", highlight: false },
  { time: "10:00 AM", event: "Poster Session 1", location: "Atrium + Classrooms", highlight: true },
  { time: "11:00 AM", event: "Poster Session 2", location: "Atrium + Classrooms", highlight: true },
  { time: "12:00 PM", event: "Lunch Break", location: "Dining Hall", highlight: false },
  { time: "1:00 PM", event: "Professional Development #2", location: "Breakout Rooms", highlight: false },
  { time: "2:30 PM", event: "Poster Session 3", location: "Atrium + Classrooms", highlight: true },
  { time: "3:30 PM", event: "Professional Development #3", location: "Breakout Rooms", highlight: false },
  { time: "4:30 PM", event: "Awards Ceremony", location: "Auditorium", highlight: true },
];

const tracks = [
  { id: "01", title: "STEM", description: "Biology, Chemistry, Physics, Engineering, Computer Science", color: "#4B9CD3" },
  { id: "02", title: "Social Sciences", description: "Psychology, Sociology, Political Science, Economics", color: "#000" },
  { id: "03", title: "Humanities", description: "History, Literature, Philosophy, Art History", color: "#4B9CD3" },
];

const conferenceImages = [
  "/research-lab.png",
  "/poster-session.png",
  "/award-ceremony.png",
  "/urc-hero.png",
];

/* =============================================================================
   CUSTOM HOOKS
   ============================================================================= */

function useParallax(rate: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100 * rate, 100 * rate]);
  return { ref, y };
}

/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function ConferencePage() {
  const [loaded, setLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  
  // InView states
  const heroInView = useInView(heroRef, { once: true });
  const scheduleInView = useInView(scheduleRef, { once: true, margin: "-5%" });
  const tracksInView = useInView(tracksRef, { once: true, margin: "-5%" });
  const visualInView = useInView(visualRef, { once: true, margin: "-5%" });
  
  // Active states
  const [heroActive, setHeroActive] = useState(false);
  const [scheduleActive, setScheduleActive] = useState(false);
  const [tracksActive, setTracksActive] = useState(false);
  const [visualActive, setVisualActive] = useState(false);
  
  // Parallax
  const card1 = useParallax(-0.15);
  const card2 = useParallax(0.1);
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Trigger animations
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (heroInView) setTimeout(() => setHeroActive(true), 200);
  }, [heroInView]);
  
  useEffect(() => {
    if (scheduleInView) setScheduleActive(true);
  }, [scheduleInView]);
  
  useEffect(() => {
    if (tracksInView) setTracksActive(true);
  }, [tracksInView]);
  
  useEffect(() => {
    if (visualInView) setVisualActive(true);
  }, [visualInView]);

  // Image carousel
  useEffect(() => {
    if (!heroActive) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % conferenceImages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [heroActive]);

  // Mouse tracking handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x * 30);
    mouseY.set(y * 30);
  }, [mouseX, mouseY]);

  return (
    <>
      <Header />
      <main className="bg-white overflow-x-hidden" onMouseMove={handleMouseMove}>
        
        {/* =====================================================================
            HERO - Nippori-style massive typography with date
        ===================================================================== */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-screen pt-[calc(120/375*100vw)] md:pt-[calc(200/1440*100vw)] pb-[calc(60/375*100vw)] md:pb-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(121/1440*100vw)] overflow-hidden"
        >
          {/* Background year */}
          <div className="absolute top-[10%] right-[5%] hidden lg:block pointer-events-none select-none">
            <span 
              className={`font-serif text-[calc(400/1440*100vw)] leading-none text-black/[0.02] transition-all duration-[1500ms] ${heroActive ? 'opacity-100' : 'opacity-0'}`}
            >
              26
            </span>
          </div>

          {/* Main headline */}
          <div className="relative z-10">
            <h1 className="font-serif uppercase tracking-[-0.02em]">
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <span 
                  className={`block text-[calc(48/375*100vw)] md:text-[calc(160/1440*100vw)] leading-[0.9] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '0ms' }}
                >
                  URC@UNC
                </span>
              </span>
              
              {/* Line 2 - With image inline */}
              <span className="flex items-center gap-[calc(10/375*100vw)] md:gap-[calc(30/1440*100vw)] overflow-hidden">
                <span 
                  className={`block text-[calc(48/375*100vw)] md:text-[calc(160/1440*100vw)] leading-[0.9] italic text-[#4B9CD3] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '100ms' }}
                >
                  2026
                </span>
                
                {/* Inline image carousel */}
                <span 
                  className={`relative w-[calc(120/375*100vw)] md:w-[calc(240/1440*100vw)] min-w-[80px] aspect-[240/130] overflow-hidden border-[2px] md:border-[6px] border-black transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] ${heroActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={conferenceImages[currentImageIndex]}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
          </div>

          {/* Info row */}
          <div 
            className={`flex flex-col md:flex-row md:items-center gap-[calc(16/375*100vw)] md:gap-[calc(60/1440*100vw)] mt-[calc(40/375*100vw)] md:mt-[calc(80/1440*100vw)] transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)]">
              <span className="w-[calc(8/375*100vw)] md:w-[calc(12/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(12/1440*100vw)] bg-[#4B9CD3]" />
              <span className="font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60">October 2-3, 2026</span>
            </div>
            <div className="flex items-center gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)]">
              <span className="w-[calc(8/375*100vw)] md:w-[calc(12/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(12/1440*100vw)] bg-black" />
              <span className="font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60">UNC Chapel Hill</span>
            </div>
            <div className="flex items-center gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)]">
              <span className="w-[calc(8/375*100vw)] md:w-[calc(12/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(12/1440*100vw)] bg-[#4B9CD3]" />
              <span className="font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60">Friday Evening — Saturday</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div 
            className={`flex flex-wrap gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)] mt-[calc(32/375*100vw)] md:mt-[calc(60/1440*100vw)] transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Link 
              href="/get-involved#abstracts"
              className="hover-dark-to-accent-direct inline-flex items-center gap-3 px-[calc(24/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] bg-black text-white font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-[#4B9CD3] hover:text-black transition-colors duration-300"
            >
              <span>Register Now</span>
              <span>→</span>
            </Link>
            <a 
              href="#schedule"
              className="hover-light-to-dark-direct inline-flex items-center gap-3 px-[calc(24/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
            >
              <span>View Schedule</span>
            </a>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute right-[8%] bottom-[25%] hidden lg:block pointer-events-none"
            style={{ x: springX, y: springY }}
          >
            <div className="w-4 h-4 border-2 border-[#4B9CD3] rotate-45" />
          </motion.div>
        </section>

        {/* =====================================================================
            SCHEDULE SECTION - Nippori stacked cards
        ===================================================================== */}
        <section 
          ref={scheduleRef}
          id="schedule"
          className="relative w-full mt-[calc(20/375*100vw)] md:mt-[calc(60/1440*100vw)] py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(70/1440*100vw)] bg-[#FAFAF8]"
        >
          {/* Section header */}
          <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
            <span 
              className={`font-serif text-[calc(14/375*100vw)] md:text-[calc(20/1440*100vw)] text-[#4B9CD3] block mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-[1000ms] ${scheduleActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              #01 — Schedule
            </span>
            <h2 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(80/1440*100vw)] leading-[0.95] tracking-[-0.02em]">
              <span className="block overflow-hidden">
                <span 
                  className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${scheduleActive ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Two days of
                </span>
              </span>
              <span className="block overflow-hidden">
                <span 
                  className={`block italic text-[#4B9CD3] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${scheduleActive ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '200ms' }}
                >
                  discovery.
                </span>
              </span>
            </h2>
          </div>

          {/* Schedule cards - stacked Nippori style */}
          <ScheduleCards
            fridaySchedule={fridaySchedule}
            saturdaySchedule={saturdaySchedule}
            scheduleActive={scheduleActive}
            card1Ref={card1.ref}
            card1Y={card1.y}
            card2Ref={card2.ref}
            card2Y={card2.y}
          />
        </section>

        {/* =====================================================================
            TRACKS SECTION - Grid with thick borders
        ===================================================================== */}
        <section 
          ref={tracksRef}
          id="tracks"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(160/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(121/1440*100vw)]"
        >
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-[calc(20/375*100vw)] md:gap-0 mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
            <div>
              <span 
                className={`font-serif text-[calc(14/375*100vw)] md:text-[calc(20/1440*100vw)] text-[#4B9CD3] block mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-[1000ms] ${tracksActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                #02 — Research Tracks
              </span>
              <h2 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(80/1440*100vw)] leading-[0.95] tracking-[-0.02em]">
                <span className="block overflow-hidden">
                  <span 
                    className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${tracksActive ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{ transitionDelay: '100ms' }}
                  >
                    Three disciplines,
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span 
                    className={`block italic text-[#4B9CD3] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${tracksActive ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    one conference.
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Tracks grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-[2px] md:border-[6px] border-black">
            {tracks.map((track, i) => (
              <div
                key={track.id}
                className={`group bg-white p-[calc(24/375*100vw)] md:p-[calc(50/1440*100vw)] min-h-[calc(200/375*100vw)] md:min-h-[calc(350/1440*100vw)] flex flex-col hover:bg-black ${tracksActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transition: `background-color 0.35s cubic-bezier(.16,1,.3,1), opacity 0.8s cubic-bezier(.22,1,.36,1) ${300 + i * 100}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${300 + i * 100}ms`,
                }}
              >
                <span className="font-serif text-[calc(60/375*100vw)] md:text-[calc(100/1440*100vw)] leading-none text-black/10 group-hover:text-[#4B9CD3] transition-[color] duration-200">
                  {track.id}
                </span>

                <div className="mt-auto">
                  <h3 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(42/1440*100vw)] text-black group-hover:text-white group-hover:translate-x-2 transition-[color,transform] duration-300 mb-[calc(8/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                    {track.title}
                  </h3>
                  <p className="font-sans text-[calc(12/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50 group-hover:text-white/60 transition-[color] duration-300">
                    {track.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            VISUAL BREAK - Full bleed image with overlay text
        ===================================================================== */}
        <section 
          ref={visualRef}
          className="relative w-full h-[calc(400/375*100vw)] md:h-[calc(700/1440*100vw)] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/poster-session.png"
              alt="Conference atmosphere"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-serif text-[calc(48/375*100vw)] md:text-[calc(140/1440*100vw)] text-white leading-[0.9] text-center tracking-[-0.02em]">
              <span className="block overflow-hidden">
                <span 
                  className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${visualActive ? 'translate-y-0' : 'translate-y-full'}`}
                >
                  Beyond
                </span>
              </span>
              <span className="block overflow-hidden">
                <span 
                  className={`block italic text-[#4B9CD3] transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${visualActive ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '100ms' }}
                >
                  presentations.
                </span>
              </span>
            </h2>
          </div>
          
          {/* Thick border overlay */}
          <div className="absolute inset-[calc(20/375*100vw)] md:inset-[calc(60/1440*100vw)] border-[3px] md:border-[6px] border-white/20 pointer-events-none" />
        </section>

        {/* =====================================================================
            CTA SECTION - Full bleed with thick border
        ===================================================================== */}
        <section className="relative w-full border-t-[5px] md:border-t-[10px] border-black bg-black">
          <div className="px-[calc(20/375*100vw)] md:px-[calc(121/1440*100vw)] py-[calc(80/375*100vw)] md:py-[calc(160/1440*100vw)]">
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="font-serif text-[calc(200/375*100vw)] md:text-[calc(500/1440*100vw)] leading-none text-white/[0.02] whitespace-nowrap">
                2026
              </span>
            </div>
            
            <div className="relative z-10 max-w-[calc(800/1440*100vw)] mx-auto text-center">
              <span className="font-serif text-[calc(14/375*100vw)] md:text-[calc(20/1440*100vw)] text-[#4B9CD3] block mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
                Call For Papers
              </span>
              
              <h2 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(72/1440*100vw)] text-white leading-[1.1] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                Ready to present your{" "}
                <span className="italic text-[#4B9CD3]">research?</span>
              </h2>
              
              <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white/50 mb-[calc(40/375*100vw)] md:mb-[calc(60/1440*100vw)]">
                Submit your abstract by July 1, 2026
              </p>
              
              <Link 
                href="/get-involved#abstracts"
                className="inline-flex items-center justify-center gap-3 px-[calc(32/375*100vw)] md:px-[calc(48/1440*100vw)] py-[calc(16/375*100vw)] md:py-[calc(20/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] hover:bg-white transition-colors duration-300"
              >
                <span>Submit Abstract</span>
                <span>→</span>
              </Link>
            </div>
          </div>
          
          {/* Bottom marquee */}
          <div className="border-t border-white/10 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-[calc(12/375*100vw)] md:py-[calc(16/1440*100vw)]">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-white/20 mx-[calc(20/375*100vw)] md:mx-[calc(40/1440*100vw)]">
                  October 2-3, 2026 • UNC Chapel Hill • Submit by July 1 • Inaugural Edition
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

/* =============================================================================
   SCHEDULE CARDS - Exact original stacked layout with smooth hover depth swap
   ============================================================================= */

type ScheduleItem = { time: string; event: string; location: string; highlight: boolean };

interface ScheduleCardsProps {
  fridaySchedule: ScheduleItem[];
  saturdaySchedule: ScheduleItem[];
  scheduleActive: boolean;
  card1Ref: React.RefObject<HTMLDivElement | null>;
  card1Y: MotionValue<number>;
  card2Ref: React.RefObject<HTMLDivElement | null>;
  card2Y: MotionValue<number>;
}

function ScheduleCards({ fridaySchedule, saturdaySchedule, scheduleActive, card1Ref, card1Y, card2Ref, card2Y }: ScheduleCardsProps) {
  const [topCard, setTopCard] = useState<"friday" | "saturday" | null>(null);

  // Inline transition: entrance (opacity+transform) = 1200ms with delay, shadow = 400ms no delay
  const fridayTransition = 'opacity 1200ms cubic-bezier(.22,1,.36,1) 300ms, transform 1200ms cubic-bezier(.22,1,.36,1) 300ms, box-shadow 400ms cubic-bezier(.22,1,.36,1) 0ms';
  const saturdayTransition = 'opacity 1200ms cubic-bezier(.22,1,.36,1) 400ms, transform 1200ms cubic-bezier(.22,1,.36,1) 400ms, box-shadow 400ms cubic-bezier(.22,1,.36,1) 0ms';

  return (
    <div className="relative">
      {/* Friday Card */}
      <motion.div
        ref={card1Ref}
        onMouseEnter={() => setTopCard("friday")}
        style={{
          y: card1Y,
          zIndex: topCard === "saturday" ? 10 : 20,
          transition: fridayTransition,
        }}
        className={`relative w-full md:w-[calc(700/1440*100vw)] overflow-hidden border-[3px] md:border-[8px] border-solid border-black bg-white ${
          scheduleActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${
          topCard === "friday" ? 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : 'shadow-[0_0px_0px_rgba(0,0,0,0)]'
        }`}
      >
        <div className="p-[calc(20/375*100vw)] md:p-[calc(50/1440*100vw)]">
          <div className="flex items-center gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)] mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
            <span className="px-[calc(12/375*100vw)] md:px-[calc(20/1440*100vw)] py-[calc(6/375*100vw)] md:py-[calc(10/1440*100vw)] border-[2px] border-black font-sans text-[calc(11/375*100vw)] md:text-[calc(14/1440*100vw)] uppercase tracking-wider">
              Friday, Oct 2
            </span>
          </div>

          <div className="border-t-[2px] border-black">
            {fridaySchedule.map((item, i) => (
              <div
                key={i}
                className={`group hover-light-to-dark flex gap-[calc(12/375*100vw)] md:gap-[calc(24/1440*100vw)] py-[calc(16/375*100vw)] md:py-[calc(24/1440*100vw)] border-b border-black/10 ${item.highlight ? 'bg-[#4B9CD3]/5' : ''} hover:bg-black -mx-[calc(20/375*100vw)] md:-mx-[calc(50/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(50/1440*100vw)]`}
              >
                <div className="flex-shrink-0 w-[calc(60/375*100vw)] md:w-[calc(100/1440*100vw)]">
                  <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(16/1440*100vw)] text-[#4B9CD3]">{item.time}</span>
                </div>
                <div>
                  <h4 className="font-serif text-[calc(16/375*100vw)] md:text-[calc(22/1440*100vw)] text-black group-hover:text-white transition-[color] duration-200 delay-100">{item.event}</h4>
                  <p className="font-sans text-[calc(11/375*100vw)] md:text-[calc(14/1440*100vw)] text-black/50 group-hover:text-white/50 transition-[color] duration-200 delay-100">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Saturday Card - offset and overlapping */}
      <motion.div
        ref={card2Ref}
        onMouseEnter={() => setTopCard("saturday")}
        style={{
          y: card2Y,
          zIndex: topCard === "saturday" ? 30 : 10,
          transition: saturdayTransition,
        }}
        className={`relative md:absolute md:top-[calc(40/1440*100vw)] md:right-0 w-full md:w-[calc(700/1440*100vw)] mt-[calc(20/375*100vw)] md:mt-0 overflow-hidden border-[3px] md:border-[8px] border-solid border-black bg-black ${
          scheduleActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${
          topCard === "saturday" ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'shadow-[0_0px_0px_rgba(0,0,0,0)]'
        }`}
      >
        <div className="p-[calc(20/375*100vw)] md:p-[calc(50/1440*100vw)]">
          <div className="flex items-center gap-[calc(12/375*100vw)] md:gap-[calc(20/1440*100vw)] mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
            <span className="px-[calc(12/375*100vw)] md:px-[calc(20/1440*100vw)] py-[calc(6/375*100vw)] md:py-[calc(10/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(14/1440*100vw)] uppercase tracking-wider">
              Saturday, Oct 3
            </span>
          </div>

          <div className="border-t border-white/20">
            {saturdaySchedule.map((item, i) => (
              <div
                key={i}
                className={`group hover-dark-to-light flex gap-[calc(12/375*100vw)] md:gap-[calc(24/1440*100vw)] py-[calc(16/375*100vw)] md:py-[calc(24/1440*100vw)] border-b border-white/10 ${item.highlight ? 'bg-white/5' : ''} hover:bg-[#4B9CD3] -mx-[calc(20/375*100vw)] md:-mx-[calc(50/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(50/1440*100vw)]`}
              >
                <div className="flex-shrink-0 w-[calc(60/375*100vw)] md:w-[calc(100/1440*100vw)]">
                  <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(16/1440*100vw)] text-[#4B9CD3] group-hover:text-black transition-[color] duration-100">{item.time}</span>
                </div>
                <div>
                  <h4 className="font-serif text-[calc(16/375*100vw)] md:text-[calc(22/1440*100vw)] text-white group-hover:text-black transition-[color] duration-100">{item.event}</h4>
                  <p className="font-sans text-[calc(11/375*100vw)] md:text-[calc(14/1440*100vw)] text-white/50 group-hover:text-black/60 transition-[color] duration-100">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

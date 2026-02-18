"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================================================================
   DATA
   ============================================================================= */

const submissionTimeline = [
  { date: "April 1, 2026", event: "Submissions Open", description: "Abstract portal opens for all undergraduate researchers", active: true },
  { date: "July 1, 2026", event: "Submission Deadline", description: "All abstracts must be submitted by 11:59 PM EST", active: false },
  { date: "Summer 2026", event: "Review & Notifications", description: "Abstracts reviewed and acceptance decisions sent via email", active: false },
  { date: "October 2–3, 2026", event: "Conference", description: "Two days of presentations, workshops, and awards at UNC Chapel Hill", active: false },
];

const abstractRequirements = [
  { title: "Deadline", value: "July 1, 2026", icon: "document" },
  { title: "Format", value: "Structured abstract", icon: "format" },
  { title: "Tracks", value: "STEM, Social Sciences, Humanities", icon: "category" },
  { title: "Eligibility", value: "Current undergraduates", icon: "student" },
];

const volunteerRoles = [
  {
    title: "Day-of Volunteers",
    commitment: "October 2-3, 2026",
    description: "Help with registration, wayfinding, session support, and attendee assistance during the conference.",
    slots: "Accepting applications"
  },
  {
    title: "Marketing Committee",
    commitment: "Spring-Fall 2026",
    description: "Create social media content, design promotional materials, and spread the word across campus.",
    slots: "Accepting applications"
  },
  {
    title: "Review Committee",
    commitment: "Summer 2026",
    description: "Evaluate submitted abstracts and provide constructive feedback to applicants.",
    slots: "Accepting applications"
  },
  {
    title: "Logistics Team",
    commitment: "Summer-Fall 2026",
    description: "Coordinate venues, catering, materials, and technical requirements for the event.",
    slots: "Accepting applications"
  },
];

const execPositions = [
  { title: "Finance Chair", department: "Internal Operations" },
  { title: "Logistics Lead", department: "Internal Operations" },
  { title: "Conference Experience Lead", department: "Internal Operations" },
  { title: "Grant Writing Lead", department: "External Operations" },
  { title: "Public Relations Director", department: "External Operations" },
  { title: "Web Development Lead", department: "External Operations" },
];

const faqs = [
  {
    q: "Who can submit an abstract?",
    a: "Any undergraduate student currently enrolled at an accredited institution who has conducted research under faculty supervision."
  },
  {
    q: "Can I present research from a previous semester?",
    a: "Yes, as long as the research was conducted during your undergraduate studies and you are still an undergraduate at the time of the conference."
  },
  {
    q: "What presentation formats are available?",
    a: "We offer poster presentations (all tracks) and oral presentations (limited slots, competitive selection)."
  },
  {
    q: "Is there a submission fee?",
    a: "No, abstract submission is completely free. There is a nominal registration fee for accepted presenters."
  },
  {
    q: "Can I submit to multiple tracks?",
    a: "You may only submit one abstract per person. Choose the track that best fits your research."
  },
];

/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function GetInvolvedPage() {
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const abstractRef = useRef<HTMLDivElement>(null);
  const volunteerRef = useRef<HTMLDivElement>(null);
  const execRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  // InView states
  const heroInView = useInView(heroRef, { once: true });
  const abstractInView = useInView(abstractRef, { once: true, margin: "-5%" });
  const volunteerInView = useInView(volunteerRef, { once: true, margin: "-5%" });
  const execInView = useInView(execRef, { once: true, margin: "-5%" });
  const faqInView = useInView(faqRef, { once: true, margin: "-5%" });
  
  // Active states for animations
  const [heroActive, setHeroActive] = useState(false);
  const [abstractActive, setAbstractActive] = useState(false);
  const [volunteerActive, setVolunteerActive] = useState(false);
  const [execActive, setExecActive] = useState(false);
  const [faqActive, setFaqActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroInView) setTimeout(() => setHeroActive(true), 200);
  }, [heroInView]);

  useEffect(() => {
    if (abstractInView) setAbstractActive(true);
  }, [abstractInView]);

  useEffect(() => {
    if (volunteerInView) setVolunteerActive(true);
  }, [volunteerInView]);

  useEffect(() => {
    if (execInView) setExecActive(true);
  }, [execInView]);

  useEffect(() => {
    if (faqInView) setFaqActive(true);
  }, [faqInView]);

  return (
    <>
      <Header />
      <main className="bg-white overflow-x-hidden">
        
        {/* =====================================================================
            HERO SECTION
        ===================================================================== */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-end pt-[120px] md:pt-[160px] pb-[calc(40/375*100vw)] md:pb-[calc(80/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)]"
        >
          {/* Background number */}
          <div className="absolute top-[15%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${heroActive ? 'opacity-100' : 'opacity-0'}`}>
              01
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1200px]">
            {/* Label */}
            <span className={`inline-block font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Get Involved
            </span>
            
            {/* Main heading */}
            <h1 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(72/1440*100vw)] leading-[1.05] tracking-[-0.02em] text-black mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  Your research
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] delay-100 ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  deserves an <span className="italic text-[#4B9CD3]">audience.</span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60 max-w-[600px] leading-relaxed mb-[calc(32/375*100vw)] md:mb-[calc(48/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-200 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Whether you're presenting groundbreaking research, volunteering your time, or joining our leadership team—there's a place for you at URC@UNC.
            </p>

            {/* Quick nav buttons */}
            <div className={`flex flex-wrap gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-300 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#abstracts"
                className="hover-dark-to-accent-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-black text-white font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-[#4B9CD3] hover:text-black transition-colors duration-300"
              >
                Submit Abstract
                <span>→</span>
              </a>
              <a 
                href="#volunteer"
                className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Volunteer
              </a>
              <a 
                href="#exec"
                className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Join Exec Team
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            ABSTRACT SUBMISSION SECTION
        ===================================================================== */}
        <section 
          ref={abstractRef}
          id="abstracts"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-[#FAFAF8] border-t-[3px] border-black"
        >
          {/* Section header */}
          <div className="max-w-[1200px] mx-auto mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
            <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${abstractActive ? 'opacity-100' : 'opacity-0'}`}>
              #01 — Abstract Submission
            </span>
            <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${abstractActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  Share your <span className="italic text-[#4B9CD3]">discovery.</span>
                </span>
              </span>
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto">
            {/* Requirements Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-[2px] border-black mb-[calc(40/375*100vw)] md:mb-[calc(60/1440*100vw)] transition-all duration-1000 delay-200 ${abstractActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {abstractRequirements.map((req, i) => (
                <div 
                  key={req.title}
                  className="bg-white p-[calc(16/375*100vw)] md:p-[calc(32/1440*100vw)] flex flex-col"
                >
                  <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black/40 uppercase tracking-wider mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {req.title}
                  </span>
                  <span className="font-serif text-[calc(14/375*100vw)] md:text-[calc(20/1440*100vw)] text-black leading-tight">
                    {req.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[calc(24/375*100vw)] md:gap-[calc(60/1440*100vw)]">
              
              {/* Timeline */}
              <div className={`transition-all duration-1000 delay-300 ${abstractActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-serif text-[calc(18/375*100vw)] md:text-[calc(24/1440*100vw)] text-black mb-[calc(20/375*100vw)] md:mb-[calc(32/1440*100vw)]">
                  Important Dates
                </h3>
                <div className="border-l-[2px] border-black pl-[calc(16/375*100vw)] md:pl-[calc(24/1440*100vw)]">
                  {submissionTimeline.map((item, i) => (
                    <div 
                      key={item.date}
                      className={`relative pb-[calc(20/375*100vw)] md:pb-[calc(28/1440*100vw)] ${i === submissionTimeline.length - 1 ? '' : 'border-b border-black/10 mb-[calc(20/375*100vw)] md:mb-[calc(28/1440*100vw)]'}`}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-[calc(-21/375*100vw)] md:left-[calc(-31/1440*100vw)] top-[2px] w-[calc(8/375*100vw)] md:w-[calc(10/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(10/1440*100vw)] rounded-full ${item.active ? 'bg-[#4B9CD3]' : 'bg-black/20'}`} />
                      
                      <span className={`font-sans text-[calc(11/375*100vw)] md:text-[calc(12/1440*100vw)] uppercase tracking-wider ${item.active ? 'text-[#4B9CD3]' : 'text-black/40'} block mb-1`}>
                        {item.date}
                      </span>
                      <h4 className="font-serif text-[calc(16/375*100vw)] md:text-[calc(20/1440*100vw)] text-black mb-1">
                        {item.event}
                      </h4>
                      <p className="font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-black/50">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submission CTA Box */}
              <div className={`transition-all duration-1000 delay-400 ${abstractActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-black p-[calc(24/375*100vw)] md:p-[calc(48/1440*100vw)] h-full flex flex-col">
                  <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-white/40 uppercase tracking-wider mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                    Ready to Submit?
                  </span>
                  
                  <h3 className="font-serif text-[calc(24/375*100vw)] md:text-[calc(36/1440*100vw)] text-white leading-[1.1] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                    The submission portal opens <span className="text-[#4B9CD3]">April 1, 2026</span>
                  </h3>
                  
                  <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-white/60 mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)] flex-grow">
                    Prepare your abstract now. Include your research question, methodology, key findings, and significance. Faculty advisor information required.
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="#"
                      className="flex items-center justify-between w-full px-[calc(16/375*100vw)] md:px-[calc(24/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(16/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white transition-colors duration-300"
                    >
                      <span>Start Your Submission</span>
                      <span>→</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center justify-between w-full px-[calc(16/375*100vw)] md:px-[calc(24/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(16/1440*100vw)] border border-white/20 text-white font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white/10 transition-colors duration-300"
                    >
                      <span>Download Guidelines (PDF)</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            VOLUNTEER SECTION
        ===================================================================== */}
        <section 
          ref={volunteerRef}
          id="volunteer"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          {/* Background number */}
          <div className="absolute top-[10%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${volunteerActive ? 'opacity-100' : 'opacity-0'}`}>
              02
            </span>
          </div>

          <div className="max-w-[1200px] mx-auto">
            {/* Section header */}
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${volunteerActive ? 'opacity-100' : 'opacity-0'}`}>
                #02 — Volunteer
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${volunteerActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Be part of <span className="italic text-[#4B9CD3]">something.</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Volunteer roles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-[2px] border-black">
              {volunteerRoles.map((role, i) => (
                <div 
                  key={role.title}
                  className={`group hover-light-to-dark bg-white p-[calc(20/375*100vw)] md:p-[calc(40/1440*100vw)] hover:bg-black transition-[background-color] duration-300 ${volunteerActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-[calc(12/375*100vw)] md:mb-[calc(20/1440*100vw)]">
                    <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-[#4B9CD3] uppercase tracking-wider">
                      {role.slots}
                    </span>
                    <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black/40 group-hover:text-white/40 transition-[color] duration-200 delay-100">
                      {role.commitment}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[calc(20/375*100vw)] md:text-[calc(28/1440*100vw)] text-black group-hover:text-white transition-[color] duration-200 delay-100 mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {role.title}
                  </h3>
                  
                  <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/60 group-hover:text-white/60 transition-[color] duration-200 delay-100">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Volunteer CTA */}
            <div className={`mt-[calc(24/375*100vw)] md:mt-[calc(40/1440*100vw)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-1000 delay-500 ${volunteerActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50">
                Volunteer applications open <span className="text-black">August 2026</span>
              </p>
              <a 
                href="#"
                className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Get Notified
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            EXECUTIVE TEAM SECTION
        ===================================================================== */}
        <section 
          ref={execRef}
          id="exec"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section header */}
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${execActive ? 'opacity-100' : 'opacity-0'}`}>
                #03 — Executive Team
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-white">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${execActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Lead the <span className="italic text-[#4B9CD3]">future.</span>
                  </span>
                </span>
              </h2>
              <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white/50 max-w-[600px] mt-[calc(16/375*100vw)] md:mt-[calc(24/1440*100vw)] transition-all duration-1000 delay-200 ${execActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Join our executive team and help shape the inaugural Undergraduate Research Conference at UNC. Applications for the founding committee are open now.
              </p>
            </div>

            {/* Positions grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)] mb-[calc(40/375*100vw)] md:mb-[calc(60/1440*100vw)] transition-all duration-1000 delay-300 ${execActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {execPositions.map((pos, i) => (
                <div 
                  key={pos.title}
                  className="group p-[calc(16/375*100vw)] md:p-[calc(28/1440*100vw)] border border-white/10 hover:border-[#4B9CD3] hover:bg-[#4B9CD3]/5 transition-all duration-300"
                >
                  <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-white/30 uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {pos.department}
                  </span>
                  <h4 className="font-serif text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white group-hover:text-[#4B9CD3] transition-colors">
                    {pos.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Apply CTA */}
            <div className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 transition-all duration-1000 delay-400 ${execActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 px-[calc(24/375*100vw)] md:px-[calc(32/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(16/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white transition-colors duration-300"
              >
                Apply for Exec Team
                <span>→</span>
              </a>
              <a 
                href="mailto:exec@urc.unc.edu"
                className="font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-white/50 hover:text-[#4B9CD3] transition-colors"
              >
                Questions? Email exec@urc.unc.edu
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FAQ SECTION
        ===================================================================== */}
        <section 
          ref={faqRef}
          id="faq"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="max-w-[800px] mx-auto">
            {/* Section header */}
            <div className="text-center mb-[calc(40/375*100vw)] md:mb-[calc(60/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${faqActive ? 'opacity-100' : 'opacity-0'}`}>
                #04 — FAQ
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(48/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${faqActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Common <span className="italic text-[#4B9CD3]">questions.</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* FAQ accordion */}
            <div className={`border-t-[2px] border-black transition-all duration-1000 delay-200 ${faqActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between py-[calc(16/375*100vw)] md:py-[calc(24/1440*100vw)] text-left group"
                  >
                    <h3 className="font-serif text-[calc(16/375*100vw)] md:text-[calc(20/1440*100vw)] text-black pr-4 group-hover:text-[#4B9CD3] transition-colors">
                      {faq.q}
                    </h3>
                    <span className={`flex-shrink-0 w-[calc(20/375*100vw)] md:w-[calc(24/1440*100vw)] h-[calc(20/375*100vw)] md:h-[calc(24/1440*100vw)] flex items-center justify-center border border-black/20 transition-all duration-300 ${openFaq === i ? 'bg-black rotate-45' : 'bg-transparent'}`}>
                      <span className={`font-sans text-[calc(16/375*100vw)] md:text-[calc(20/1440*100vw)] leading-none ${openFaq === i ? 'text-white' : 'text-black'}`}>+</span>
                    </span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/60 pb-[calc(16/375*100vw)] md:pb-[calc(24/1440*100vw)] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* More questions CTA */}
            <div className={`text-center mt-[calc(32/375*100vw)] md:mt-[calc(48/1440*100vw)] transition-all duration-1000 delay-400 ${faqActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50 mb-4">
                Still have questions?
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 font-serif text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-black hover:text-[#4B9CD3] transition-colors"
              >
                Contact Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

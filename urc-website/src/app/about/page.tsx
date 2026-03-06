"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================================================================
   DATA
   ============================================================================= */

const goals = [
  {
    number: "01",
    title: "Expand Access",
    description:
      "Expand access to professional research presentation opportunities for Southern undergraduates who face a disparity in professional development avenues.",
  },
  {
    number: "02",
    title: "Strengthen Communication",
    description:
      "Strengthen students\u2019 scientific communication skills and career readiness through poster sessions, oral presentations, and professional development workshops.",
  },
  {
    number: "03",
    title: "Build a Sustainable Model",
    description:
      "Build a sustainable, student-led model for interdisciplinary collaboration that enhances UNC\u2019s reputation as a hub for undergraduate research excellence.",
  },
];

const timelineMilestones = [
  {
    period: "January \u2013 March 2026",
    title: "Foundation",
    items: [
      "Form the organizing committee and assign roles",
      "Reserve University venues",
      "Launch social media presence and website design",
      "Prepare sponsorship and funding applications",
      "Meet with other conferences for reference",
    ],
  },
  {
    period: "April \u2013 June 2026",
    title: "Outreach",
    items: [
      "Open call for abstracts (April 1, deadline July 1)",
      "Conduct outreach to universities across North Carolina",
      "Secure initial sponsors and confirm professional development speakers",
      "Finalize list of materials for venue",
    ],
  },
  {
    period: "July \u2013 August 2026",
    title: "Preparation",
    items: [
      "Review abstract submissions and finalize accepted presentations",
      "Order logistical materials: signage, supplies, poster boards",
      "Confirm catering arrangements and publish preliminary schedule",
    ],
  },
  {
    period: "September 2026",
    title: "Final Push",
    items: [
      "Finalize program booklet and confirm award judges",
      "Train volunteers for conference operations",
      "Complete marketing through campus and digital platforms",
      "Conduct audiovisual and room setup tests",
    ],
  },
  {
    period: "October 2\u20133, 2026",
    title: "Conference",
    items: [
      "Host the inaugural Undergraduate Research Conference",
      "Collect participation data and feedback from attendees",
    ],
  },
  {
    period: "October \u2013 November 2026",
    title: "Evaluation",
    items: [
      "Compile internal and external operations evaluation report",
      "Distribute outcomes to sponsors and stakeholders",
      "Initiate planning for the following year\u2019s conference",
    ],
  },
];

const affiliations = [
  {
    name: "Campus Y",
    description:
      "The URC is a Campus Y affiliated organization, providing access to university venues, fiscal sponsorship, and institutional support.",
    href: "https://campusy.unc.edu",
  },
  {
    name: "Office of Undergraduate Research",
    description:
      "Partnering with OUR to support undergraduate researchers and promote research opportunities across campus.",
    href: "https://our.unc.edu",
  },
  {
    name: "UNC Chapel Hill",
    description:
      "Housed at the University of North Carolina at Chapel Hill, one of the nation\u2019s leading public research universities.",
    href: "https://unc.edu",
  },
];

const fundingSources = [
  { name: "Bryan Fellowship", amount: "$1,500", status: "Secured" },
  { name: "Y-Fund (Campus Y)", amount: "$1,000", status: "Secured" },
  { name: "Student Senate Appropriations", amount: "TBD", status: "Pending" },
  { name: "Corporate Sponsorships", amount: "TBD", status: "Seeking" },
];

/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const fundingRef = useRef<HTMLDivElement>(null);
  const affiliationsRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const missionInView = useInView(missionRef, { once: true, margin: "-5%" });
  const goalsInView = useInView(goalsRef, { once: true, margin: "-5%" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-5%" });
  const fundingInView = useInView(fundingRef, { once: true, margin: "-5%" });
  const affiliationsInView = useInView(affiliationsRef, { once: true, margin: "-5%" });

  const [heroActive, setHeroActive] = useState(false);
  const [missionActive, setMissionActive] = useState(false);
  const [goalsActive, setGoalsActive] = useState(false);
  const [timelineActive, setTimelineActive] = useState(false);
  const [fundingActive, setFundingActive] = useState(false);
  const [affiliationsActive, setAffiliationsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => { if (heroInView) { const t = setTimeout(() => setHeroActive(true), 200); return () => clearTimeout(t); } }, [heroInView]);
  useEffect(() => { if (missionInView) setMissionActive(true); }, [missionInView]);
  useEffect(() => { if (goalsInView) setGoalsActive(true); }, [goalsInView]);
  useEffect(() => { if (timelineInView) setTimelineActive(true); }, [timelineInView]);
  useEffect(() => { if (fundingInView) setFundingActive(true); }, [fundingInView]);
  useEffect(() => { if (affiliationsInView) setAffiliationsActive(true); }, [affiliationsInView]);

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
          <div className="absolute top-[15%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${heroActive ? 'opacity-100' : 'opacity-0'}`}>
              URC
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1200px]">
            <span className={`inline-block font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Who We Are
            </span>

            <h1 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(72/1440*100vw)] leading-[1.05] tracking-[-0.02em] text-black mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  For undergraduates,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] delay-100 ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  by <span className="italic text-[#4B9CD3]">undergraduates.</span>
                </span>
              </span>
            </h1>

            <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60 max-w-[650px] leading-relaxed transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-200 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Undergraduate Research Conference at UNC is a research conference for undergraduates, by undergraduates. Recognizing a disparity in professional development opportunities for Southern students, we founded this conference to provide avenues for research presentation and career growth in North Carolina and beyond.
            </p>

            <div className={`flex flex-wrap gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)] mt-[calc(24/375*100vw)] md:mt-[calc(40/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-300 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="#goals"
                className="hover-dark-to-accent-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-black text-white font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-[#4B9CD3] hover:text-black transition-colors duration-300"
              >
                Our Goals <span>&darr;</span>
              </a>
              <a
                href="#timeline"
                className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Timeline
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            MISSION / WHAT IS URC
        ===================================================================== */}
        <section
          ref={missionRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-[#FAFAF8] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[calc(32/375*100vw)] md:gap-[calc(80/1440*100vw)]">

              <div className={`transition-all duration-1000 ${missionActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                  #01 &mdash; The Conference
                </span>
                <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                  <span className="block overflow-hidden">
                    <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${missionActive ? 'translate-y-0' : 'translate-y-full'}`}>
                      What is <span className="italic text-[#4B9CD3]">URC@UNC?</span>
                    </span>
                  </span>
                </h2>
              </div>

              <div className={`transition-all duration-1000 delay-200 ${missionActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-black/70 leading-relaxed mb-[calc(20/375*100vw)] md:mb-[calc(32/1440*100vw)]">
                  The URC will take place from <strong>October 2&ndash;3, 2026</strong> on the University of North Carolina at Chapel Hill campus with a planned <strong>200 attendees</strong>.
                </p>
                <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-black/70 leading-relaxed mb-[calc(20/375*100vw)] md:mb-[calc(32/1440*100vw)]">
                  Undergraduates with accepted abstracts will present their research at poster sessions organized by broad disciplines including <strong>STEM, social sciences, and the humanities</strong>. About 20&ndash;30 selected undergraduates will present 15-minute oral talks throughout the event.
                </p>
                <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-black/70 leading-relaxed mb-[calc(20/375*100vw)] md:mb-[calc(32/1440*100vw)]">
                  We plan to provide financial merit awards to the best poster and oral presentations, judged by faculty, graduate students, and undergraduate seniors pursuing honors theses.
                </p>
                <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-black/70 leading-relaxed">
                  Beyond research presentations, the conference includes professional development seminars and competitive research communication awards prioritizing federally threatened research fields&mdash;public health, social sciences, and minoritized-disparity focused work.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-[2px] border-black mt-[calc(40/375*100vw)] md:mt-[calc(80/1440*100vw)] transition-all duration-1000 delay-300 ${missionActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { value: "200+", label: "Planned Attendees" },
                { value: "3", label: "Research Tracks" },
                { value: "20\u201330", label: "Oral Presentations" },
                { value: "2", label: "Conference Days" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-[calc(20/375*100vw)] md:p-[calc(40/1440*100vw)] text-center">
                  <span className="block font-serif text-[calc(28/375*100vw)] md:text-[calc(48/1440*100vw)] text-[#4B9CD3] leading-none mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] text-black/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            GOALS SECTION
        ===================================================================== */}
        <section
          ref={goalsRef}
          id="goals"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="absolute top-[10%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${goalsActive ? 'opacity-100' : 'opacity-0'}`}>
              03
            </span>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${goalsActive ? 'opacity-100' : 'opacity-0'}`}>
                #02 &mdash; Our Goals
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${goalsActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Why we <span className="italic text-[#4B9CD3]">exist.</span>
                  </span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-[2px] md:border-[6px] border-black">
              {goals.map((goal, i) => (
                <div
                  key={goal.number}
                  className={`group bg-white p-[calc(24/375*100vw)] md:p-[calc(50/1440*100vw)] min-h-[calc(200/375*100vw)] md:min-h-[calc(300/1440*100vw)] flex flex-col hover:bg-black ${goalsActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{
                    transition: `background-color 0.35s cubic-bezier(.16,1,.3,1), opacity 0.8s cubic-bezier(.22,1,.36,1) ${300 + i * 100}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${300 + i * 100}ms`,
                  }}
                >
                  <span className="font-serif text-[calc(48/375*100vw)] md:text-[calc(80/1440*100vw)] leading-none text-black/10 group-hover:text-[#4B9CD3] transition-[color] duration-200">
                    {goal.number}
                  </span>
                  <div className="mt-auto">
                    <h3 className="font-serif text-[calc(24/375*100vw)] md:text-[calc(36/1440*100vw)] text-black group-hover:text-white group-hover:translate-x-2 transition-[color,transform] duration-300 mb-[calc(8/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                      {goal.title}
                    </h3>
                    <p className="font-sans text-[calc(12/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50 group-hover:text-white/60 transition-[color] duration-300 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            TIMELINE SECTION
        ===================================================================== */}
        <section
          ref={timelineRef}
          id="timeline"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${timelineActive ? 'opacity-100' : 'opacity-0'}`}>
                #03 &mdash; Planning Timeline
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-white">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${timelineActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    The road to <span className="italic text-[#4B9CD3]">October.</span>
                  </span>
                </span>
              </h2>
            </div>

            <div className={`space-y-0 transition-all duration-1000 delay-200 ${timelineActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {timelineMilestones.map((milestone, i) => (
                <div
                  key={milestone.period}
                  className="group border-t border-white/10 py-[calc(20/375*100vw)] md:py-[calc(32/1440*100vw)] hover:bg-white/5 transition-colors duration-300 px-[calc(8/375*100vw)] md:px-[calc(16/1440*100vw)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-[calc(12/375*100vw)] md:gap-[calc(24/1440*100vw)]">
                    <div className="md:col-span-3">
                      <span className="font-sans text-[max(11px,calc(10/375*100vw))] md:text-[calc(11/1440*100vw)] text-[#4B9CD3] uppercase tracking-wider block mb-1">
                        {milestone.period}
                      </span>
                      <h3 className="font-serif text-[calc(20/375*100vw)] md:text-[calc(28/1440*100vw)] text-white">
                        {milestone.title}
                      </h3>
                    </div>
                    <div className="md:col-span-9">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-[calc(6/375*100vw)] md:gap-[calc(10/1440*100vw)]">
                        {milestone.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-[calc(8/375*100vw)] md:gap-[calc(12/1440*100vw)]"
                          >
                            <span className="flex-shrink-0 w-[calc(6/375*100vw)] md:w-[calc(8/1440*100vw)] h-[calc(6/375*100vw)] md:h-[calc(8/1440*100vw)] mt-[6px] bg-[#4B9CD3]" />
                            <span className="font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-white/60 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            FUNDING SECTION
        ===================================================================== */}
        <section
          ref={fundingRef}
          id="funding"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${fundingActive ? 'opacity-100' : 'opacity-0'}`}>
                #04 &mdash; Funding
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${fundingActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    How we&rsquo;re <span className="italic text-[#4B9CD3]">funded.</span>
                  </span>
                </span>
              </h2>
              <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60 max-w-[600px] mt-[calc(16/375*100vw)] md:mt-[calc(24/1440*100vw)] transition-all duration-1000 delay-200 ${fundingActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                The URC is funded through a combination of university grants, student government allocations, and corporate sponsorships from the Research Triangle. Our total projected budget is <strong>$7,230</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-[2px] border-black">
              {fundingSources.map((source, i) => (
                <div
                  key={source.name}
                  className={`group hover-light-to-dark bg-white p-[calc(20/375*100vw)] md:p-[calc(32/1440*100vw)] hover:bg-black transition-[background-color,opacity] duration-300 ${fundingActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <span className={`inline-block font-sans text-[max(11px,calc(10/375*100vw))] md:text-[calc(11/1440*100vw)] uppercase tracking-wider mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)] px-2 py-1 ${
                    source.status === "Secured"
                      ? "text-green-700 bg-green-50 group-hover:bg-green-900/30 group-hover:text-green-300"
                      : source.status === "Pending"
                        ? "text-amber-700 bg-amber-50 group-hover:bg-amber-900/30 group-hover:text-amber-300"
                        : "text-blue-700 bg-blue-50 group-hover:bg-blue-900/30 group-hover:text-blue-300"
                  } transition-[color,background-color] duration-200 delay-100`}>
                    {source.status}
                  </span>
                  <h4 className="font-serif text-[calc(18/375*100vw)] md:text-[calc(24/1440*100vw)] text-black group-hover:text-white transition-[color] duration-200 delay-100 mb-[calc(4/375*100vw)] md:mb-[calc(8/1440*100vw)]">
                    {source.name}
                  </h4>
                  <span className="font-serif text-[calc(24/375*100vw)] md:text-[calc(32/1440*100vw)] text-[#4B9CD3]">
                    {source.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            AFFILIATIONS SECTION
        ===================================================================== */}
        <section
          ref={affiliationsRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-[#FAFAF8] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${affiliationsActive ? 'opacity-100' : 'opacity-0'}`}>
                #05 &mdash; Affiliations
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${affiliationsActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Our <span className="italic text-[#4B9CD3]">partners.</span>
                  </span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[calc(16/375*100vw)] md:gap-[calc(24/1440*100vw)]">
              {affiliations.map((aff, i) => (
                <a
                  key={aff.name}
                  href={aff.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group hover-light-to-dark p-[calc(24/375*100vw)] md:p-[calc(40/1440*100vw)] border-[2px] border-black hover:bg-black transition-[background-color,transform,opacity] duration-300 ${affiliationsActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <h3 className="font-serif text-[calc(20/375*100vw)] md:text-[calc(28/1440*100vw)] text-black group-hover:text-white transition-[color] duration-200 delay-100 mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {aff.name}
                  </h3>
                  <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/60 group-hover:text-white/60 transition-[color] duration-200 delay-100 leading-relaxed">
                    {aff.description}
                  </p>
                  <div className="flex items-center gap-2 mt-[calc(16/375*100vw)] md:mt-[calc(24/1440*100vw)]">
                    <span className="font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] text-[#4B9CD3]">
                      Visit
                    </span>
                    <svg className="w-3 h-3 text-[#4B9CD3]" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            CTA SECTION
        ===================================================================== */}
        <section className="relative w-full py-[calc(80/375*100vw)] md:py-[calc(160/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
              Be Part of It
            </span>
            <h2 className="font-serif text-[calc(32/375*100vw)] md:text-[calc(64/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-white mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
              Ready to share your{" "}
              <span className="italic text-[#4B9CD3]">research?</span>
            </h2>
            <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white/50 mb-[calc(32/375*100vw)] md:mb-[calc(48/1440*100vw)]">
              Submit your abstract by July 1, 2026 and join 200 fellow undergraduates at UNC Chapel Hill.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)]">
              <Link
                href="/get-involved#abstracts"
                className="inline-flex items-center gap-2 px-[calc(28/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white transition-colors duration-300"
              >
                Submit Abstract <span>&rarr;</span>
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-[calc(28/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] border border-white/20 text-white font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white/10 transition-colors duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

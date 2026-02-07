"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================================================================
   DATA
   ============================================================================= */

const impactStats = [
  { value: "200", label: "Planned Attendees", description: "Students, faculty, and industry professionals" },
  { value: "03", label: "Research Tracks", description: "STEM, Social Sciences, Humanities" },
  { value: "02", label: "Conference Days", description: "October 2–3, 2026" },
  { value: "03", label: "PD Workshops", description: "Career-focused development sessions" },
];

const sponsorshipTiers = [
  {
    name: "Presenting Partner",
    price: "Contact Us",
    color: "#4B9CD3",
    featured: true,
    benefits: [
      "Premier logo placement on all materials",
      "Dedicated booth space at the conference",
      "Speaking opportunity at opening ceremony",
      "Social media feature campaign",
      "Complimentary registrations",
    ]
  },
  {
    name: "Supporting Partner",
    price: "Contact Us",
    color: "#000",
    featured: false,
    benefits: [
      "Logo on conference signage and website",
      "Booth space in exhibition area",
      "Social media recognition",
      "Complimentary registrations",
    ]
  },
  {
    name: "Contributing Partner",
    price: "Contact Us",
    color: "#000",
    featured: false,
    benefits: [
      "Logo on website and select materials",
      "Social media recognition",
      "Complimentary registrations",
    ]
  },
  {
    name: "Community Partner",
    price: "Contact Us",
    color: "#000",
    featured: false,
    benefits: [
      "Logo on conference website",
      "Name listing in program",
      "Social media mention",
    ]
  },
];

const whySponsor = [
  {
    title: "Recruit Top Talent",
    description: "Connect directly with motivated undergraduate researchers across STEM, Social Sciences, and Humanities.",
  },
  {
    title: "Build Brand Awareness",
    description: "Position your organization in front of UNC's brightest students and faculty mentors.",
  },
  {
    title: "Support Education",
    description: "Demonstrate commitment to undergraduate research and academic excellence.",
  },
  {
    title: "Network with Academia",
    description: "Forge relationships with faculty advisors and university departments.",
  },
];

const currentSponsors: { name: string; tier: string }[] = [];

/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function SponsorsPage() {
  const [loaded, setLoaded] = useState(false);
  
  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // InView states
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: "-10%" });
  const whyInView = useInView(whyRef, { once: true, margin: "-10%" });
  const tiersInView = useInView(tiersRef, { once: true, margin: "-10%" });
  const currentInView = useInView(currentRef, { once: true, margin: "-10%" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });
  
  // Active states
  const [heroActive, setHeroActive] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const [whyActive, setWhyActive] = useState(false);
  const [tiersActive, setTiersActive] = useState(false);
  const [currentActive, setCurrentActive] = useState(false);
  const [ctaActive, setCtaActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroInView) setTimeout(() => setHeroActive(true), 200);
  }, [heroInView]);

  useEffect(() => {
    if (statsInView) setTimeout(() => setStatsActive(true), 100);
  }, [statsInView]);

  useEffect(() => {
    if (whyInView) setTimeout(() => setWhyActive(true), 100);
  }, [whyInView]);

  useEffect(() => {
    if (tiersInView) setTimeout(() => setTiersActive(true), 100);
  }, [tiersInView]);

  useEffect(() => {
    if (currentInView) setTimeout(() => setCurrentActive(true), 100);
  }, [currentInView]);

  useEffect(() => {
    if (ctaInView) setTimeout(() => setCtaActive(true), 100);
  }, [ctaInView]);

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
          {/* Background text */}
          <div className="absolute top-[20%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(250/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${heroActive ? 'opacity-100' : 'opacity-0'}`}>
              $
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1200px]">
            {/* Label */}
            <span className={`inline-block font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Partner With Us
            </span>
            
            {/* Main heading */}
            <h1 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(72/1440*100vw)] leading-[1.05] tracking-[-0.02em] text-black mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  Invest in the
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] delay-100 ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  next <span className="italic text-[#4B9CD3]">generation.</span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60 max-w-[600px] leading-relaxed mb-[calc(32/375*100vw)] md:mb-[calc(48/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-200 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Support undergraduate research at UNC Chapel Hill. Your sponsorship directly enables students to share their discoveries with the academic community.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-wrap gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-300 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#tiers"
                className="hover-dark-to-accent-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-black text-white font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-[#4B9CD3] hover:text-black transition-colors duration-300"
              >
                View Packages
                <span>→</span>
              </a>
              <a 
                href="mailto:sponsors@urc.unc.edu"
                className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            IMPACT STATS SECTION
        ===================================================================== */}
        <section 
          ref={statsRef}
          className="relative w-full py-[calc(40/375*100vw)] md:py-[calc(80/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[calc(16/375*100vw)] md:gap-[calc(24/1440*100vw)]">
              {impactStats.map((stat, i) => (
                <div 
                  key={stat.label}
                  className={`text-center md:text-left transition-all duration-1000 ${statsActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="block font-serif text-[calc(36/375*100vw)] md:text-[calc(56/1440*100vw)] text-[#4B9CD3] leading-none mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-white mb-1">
                    {stat.label}
                  </span>
                  <span className="block font-sans text-[calc(10/375*100vw)] md:text-[calc(12/1440*100vw)] text-white/40">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            WHY SPONSOR SECTION
        ===================================================================== */}
        <section 
          ref={whyRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section header */}
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${whyActive ? 'opacity-100' : 'opacity-0'}`}>
                #01 — Why Sponsor
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${whyActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    More than <span className="italic text-[#4B9CD3]">visibility.</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[calc(16/375*100vw)] md:gap-[calc(24/1440*100vw)]">
              {whySponsor.map((item, i) => (
                <div 
                  key={item.title}
                  className={`group hover-light-to-dark p-[calc(24/375*100vw)] md:p-[calc(40/1440*100vw)] border-[2px] border-black hover:bg-black transition-[background-color,transform,opacity] duration-300 ${whyActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <span className="font-serif text-[calc(32/375*100vw)] md:text-[calc(48/1440*100vw)] text-black/10 group-hover:text-[#4B9CD3] transition-[color] duration-200 block mb-[calc(12/375*100vw)] md:mb-[calc(20/1440*100vw)]">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-[calc(20/375*100vw)] md:text-[calc(28/1440*100vw)] text-black group-hover:text-white transition-[color] duration-200 delay-100 mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/60 group-hover:text-white/60 transition-[color] duration-200 delay-100">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SPONSORSHIP TIERS SECTION
        ===================================================================== */}
        <section 
          ref={tiersRef}
          id="tiers"
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-[#FAFAF8] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section header */}
            <div className="mb-[calc(40/375*100vw)] md:mb-[calc(80/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${tiersActive ? 'opacity-100' : 'opacity-0'}`}>
                #02 — Sponsorship Tiers
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(56/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${tiersActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Choose your <span className="italic text-[#4B9CD3]">level.</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Tiers grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[calc(16/375*100vw)] md:gap-[calc(20/1440*100vw)]">
              {sponsorshipTiers.map((tier, i) => (
                <div 
                  key={tier.name}
                  className={`relative flex flex-col border-[2px] ${tier.featured ? 'border-[#4B9CD3] bg-white' : 'border-black bg-white'} transition-all duration-1000 ${tiersActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Featured badge */}
                  {tier.featured && (
                    <div className="absolute -top-[1px] left-0 right-0 h-[calc(4/375*100vw)] md:h-[calc(6/1440*100vw)] bg-[#4B9CD3]" />
                  )}
                  
                  {/* Header */}
                  <div className={`p-[calc(20/375*100vw)] md:p-[calc(28/1440*100vw)] ${tier.featured ? 'bg-[#4B9CD3]' : 'bg-black'}`}>
                    <h3 className={`font-serif text-[calc(20/375*100vw)] md:text-[calc(24/1440*100vw)] ${tier.featured ? 'text-black' : 'text-white'} mb-1`}>
                      {tier.name}
                    </h3>
                    <span className={`font-sans text-[calc(24/375*100vw)] md:text-[calc(32/1440*100vw)] font-semibold ${tier.featured ? 'text-black' : 'text-white'}`}>
                      {tier.price}
                    </span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="flex-grow p-[calc(20/375*100vw)] md:p-[calc(28/1440*100vw)]">
                    <ul className="space-y-[calc(10/375*100vw)] md:space-y-[calc(14/1440*100vw)]">
                      {tier.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-[calc(8/375*100vw)] md:gap-[calc(12/1440*100vw)]">
                          <span className="flex-shrink-0 w-[calc(6/375*100vw)] md:w-[calc(8/1440*100vw)] h-[calc(6/375*100vw)] md:h-[calc(8/1440*100vw)] mt-[6px] bg-[#4B9CD3]" />
                          <span className="font-sans text-[calc(12/375*100vw)] md:text-[calc(13/1440*100vw)] text-black/70">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <div className="p-[calc(20/375*100vw)] md:p-[calc(28/1440*100vw)] pt-0">
                    <a 
                      href="mailto:sponsors@urc.unc.edu"
                      className={`flex items-center justify-center w-full py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] transition-colors duration-300 ${
                        tier.featured 
                          ? 'hover-dark-to-accent-direct bg-black text-white hover:bg-[#4B9CD3] hover:text-black' 
                          : 'border-[2px] border-black text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom packages note */}
            <p className={`text-center font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50 mt-[calc(32/375*100vw)] md:mt-[calc(48/1440*100vw)] transition-all duration-1000 delay-500 ${tiersActive ? 'opacity-100' : 'opacity-0'}`}>
              Custom sponsorship packages available. <a href="mailto:sponsors@urc.unc.edu" className="text-[#4B9CD3] hover:underline">Contact us</a> to discuss your goals.
            </p>
          </div>
        </section>

        {/* =====================================================================
            CURRENT SPONSORS SECTION
        ===================================================================== */}
        <section 
          ref={currentRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(100/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section header */}
            <div className="text-center mb-[calc(32/375*100vw)] md:mb-[calc(60/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${currentActive ? 'opacity-100' : 'opacity-0'}`}>
                #03 — Our Partners
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(48/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${currentActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    2026 <span className="italic text-[#4B9CD3]">Partners</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Coming Soon */}
            <div className={`border-t-[2px] border-black py-[calc(40/375*100vw)] md:py-[calc(80/1440*100vw)] text-center transition-all duration-1000 delay-200 ${currentActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="font-serif text-[calc(24/375*100vw)] md:text-[calc(36/1440*100vw)] text-black/20 block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                Coming Soon
              </span>
              <p className="font-sans text-[calc(13/375*100vw)] md:text-[calc(15/1440*100vw)] text-black/50 max-w-[500px] mx-auto">
                We are currently seeking sponsors and partners for our inaugural conference.
                Contact us to learn about partnership opportunities.
              </p>
              <a
                href="mailto:sponsors@urc.unc.edu"
                className="inline-flex items-center gap-2 mt-[calc(20/375*100vw)] md:mt-[calc(32/1440*100vw)] font-serif text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-[#4B9CD3] hover:text-black transition-colors"
              >
                sponsors@urc.unc.edu
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            CTA SECTION
        ===================================================================== */}
        <section 
          ref={ctaRef}
          className="relative w-full py-[calc(80/375*100vw)] md:py-[calc(160/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black"
        >
          <div className="max-w-[800px] mx-auto text-center">
            <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-1000 ${ctaActive ? 'opacity-100' : 'opacity-0'}`}>
              Ready to Partner?
            </span>
            
            <h2 className="font-serif text-[calc(32/375*100vw)] md:text-[calc(64/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-white mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${ctaActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  Let's make an <span className="italic text-[#4B9CD3]">impact</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] delay-100 ${ctaActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  together.
                </span>
              </span>
            </h2>
            
            <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white/50 mb-[calc(32/375*100vw)] md:mb-[calc(48/1440*100vw)] transition-all duration-1000 delay-200 ${ctaActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Contact our sponsorship team to discuss how we can create a partnership that meets your organization's goals.
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)] transition-all duration-1000 delay-300 ${ctaActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="mailto:sponsors@urc.unc.edu"
                className="inline-flex items-center gap-2 px-[calc(28/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] bg-[#4B9CD3] text-black font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white transition-colors duration-300"
              >
                Email sponsors@urc.unc.edu
                <span>→</span>
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-[calc(28/375*100vw)] md:px-[calc(40/1440*100vw)] py-[calc(14/375*100vw)] md:py-[calc(18/1440*100vw)] border border-white/20 text-white font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] hover:bg-white/10 transition-colors duration-300"
              >
                Download Prospectus
                <span>↓</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

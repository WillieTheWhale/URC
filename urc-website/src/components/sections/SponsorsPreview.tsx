"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const tiers = [
  { name: "Founding Partner", price: "$10,000+" },
  { name: "Gold Sponsor", price: "$5,000" },
  { name: "Silver Sponsor", price: "$2,500" },
  { name: "Bronze Sponsor", price: "$1,000" },
];

export default function SponsorsPreview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isInView) setIsActive(true);
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[var(--accent-navy)] overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className={`font-serif text-[30vw] leading-none text-white/[0.02] whitespace-nowrap transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          SPONSOR
        </span>
      </div>

      <div className="container-nippori relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className={`type-label text-[var(--accent-cyan)] block mb-4 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              05 / Sponsors
            </span>

            <h2 className="type-display-sm text-white mb-6 overflow-hidden">
              <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                Invest in the next generation of{" "}
                <span className="italic text-[var(--accent-cyan)]">researchers</span>
              </span>
            </h2>

            <p className={`type-body-lg text-white/50 mb-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Partner with URC@UNC to support undergraduate research excellence
              and connect with future leaders in STEM, Social Sciences, and
              Humanities.
            </p>

            <Link 
              href="/sponsors" 
              className={`btn-square transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span>Become a Sponsor</span>
              <svg className="w-4 h-4" viewBox="0 0 36 30" fill="none">
                <path fill="currentColor" d="M19.8574.8572c.781-.781 2.0481-.781 2.8291 0l12.7276 12.7285c.781.7811.781 2.0471 0 2.8282L22.6865 29.1424c-.781.7809-2.0481.781-2.8291 0-.781-.781-.7809-2.0481 0-2.8291l9.3145-9.3135H0v-4h29.1719l-9.3145-9.3135c-.7809-.781-.781-2.048 0-2.829Z"/>
              </svg>
            </Link>
          </div>

          {/* Right - Tier Cards */}
          <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border-t border-white/20">
              {tiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 -mx-4 px-4"
                >
                  <span className="font-serif text-xl text-white group-hover:text-[var(--accent-cyan)] transition-colors">
                    {tier.name}
                  </span>
                  <span className="type-label text-white/40">{tier.price}</span>
                </div>
              ))}
            </div>

            <p className="text-center type-body-sm text-white/30 pt-6">
              In-kind support also available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

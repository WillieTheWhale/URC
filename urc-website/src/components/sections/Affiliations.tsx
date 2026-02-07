"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";

const partners = [
  {
    name: "The Campus Y",
    shortName: "Campus Y",
  },
  {
    name: "Carolina Center for Public Service",
    shortName: "CCPS",
  },
  {
    name: "Office of Undergraduate Research",
    shortName: "OUR",
  },
  {
    name: "UNC Chapel Hill",
    shortName: "UNC",
  },
];

export default function Affiliations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-[var(--slate-100)]">
      <div ref={ref} className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--slate-400)]">
              Proudly affiliated with
            </span>
          </motion.div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group cursor-default"
                title={partner.name}
              >
                <div className="px-6 py-3 rounded-lg bg-[var(--cream)] border border-[var(--slate-100)] group-hover:border-[var(--carolina-blue)]/30 group-hover:bg-[var(--carolina-blue)]/5 transition-all duration-300">
                  <span
                    className="text-sm font-medium text-[var(--slate-500)] group-hover:text-[var(--deep-navy)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {partner.shortName}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

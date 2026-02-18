"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "navy";
  borderTop?: boolean;
}

export default function Section({
  children,
  sidebar,
  className = "",
  id,
  background = "primary",
  borderTop = true,
}: SectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5%" });

  const bgClasses = {
    primary: "bg-[var(--bg-primary)]",
    secondary: "bg-[var(--bg-secondary)]",
    navy: "bg-[var(--brand-navy)] text-white",
  };

  const borderClass = background === "navy" ? "border-white/10" : "border-[var(--border-color)]";

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative ${bgClasses[background]} ${
        borderTop ? "border-t" : ""
      } ${borderClass} ${className}`}
    >
      {/* 
        Grid Layout:
        Mobile: Stacked
        Desktop: Sidebar (Fixed Width) | Content (Flexible)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] min-h-[80vh]">
        
        {/* Sidebar Area */}
        {sidebar && (
          <div className={`
            p-6 lg:p-12 
            lg:border-r ${borderClass}
            lg:sticky lg:top-[var(--header-height)] lg:h-[calc(100vh-var(--header-height))]
            flex flex-col justify-between
          `}>
            {sidebar}
          </div>
        )}

        {/* Main Content Area */}
        <div className={`p-6 lg:p-16 ${sidebar ? '' : 'lg:col-span-2'}`}>
          <div className={`reveal-mask ${isInView ? "is-in-view" : ""}`}>
             {children}
          </div>
        </div>
      </div>
    </section>
  );
}

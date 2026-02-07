"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  sitemap: [
    { label: "About", href: "/" },
    { label: "Conference", href: "/conference" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/urc_unc" },
    { label: "LinkedIn", href: "https://linkedin.com/company/urc-unc" },
    { label: "Twitter", href: "https://twitter.com/urc_unc" },
  ],
};

export default function Footer() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <footer
      ref={containerRef}
      className="relative bg-[var(--color-cream)] pb-8 overflow-hidden border-t border-black/10"
    >
      {/* Image Mosaic Strip */}
      <div className={`grid grid-cols-4 md:grid-cols-6 gap-px bg-black/10 transition-opacity duration-[1500ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {[
          { src: "/images/students-collaborating.jpg", alt: "Students collaborating" },
          { src: "/images/campus-aerial.jpg", alt: "Campus aerial" },
          { src: "/images/conference-audience.jpg", alt: "Conference audience" },
          { src: "/images/lab-equipment.jpg", alt: "Lab equipment" },
          { src: "/images/speaker-podium.jpg", alt: "Speaker" },
          { src: "/images/celebration.jpg", alt: "Celebration" },
        ].map((img, i) => (
          <div key={i} className={`relative aspect-[3/2] overflow-hidden ${i >= 4 ? 'hidden md:block' : ''}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
              sizes="(max-width: 768px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>

      <div className="container-nippori relative z-10 pt-24 md:pt-40">
        
        {/* Top Section: Large CTA */}
        <div className={`mb-20 md:mb-32 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <span className="type-label text-[var(--carolina-blue)] block mb-6">Join Us</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-black leading-[0.95] mb-8">
              Ready to share your{" "}
              <span className="italic text-[var(--carolina-blue)]">research</span> with the world?
            </h2>
            <Link href="/get-involved#abstracts" className="btn-square">
              <span>Submit Your Abstract</span>
              <svg className="w-4 h-4" viewBox="0 0 36 30" fill="none">
                <path fill="currentColor" d="M19.8574.8572c.781-.781 2.0481-.781 2.8291 0l12.7276 12.7285c.781.7811.781 2.0471 0 2.8282L22.6865 29.1424c-.781.7809-2.0481.781-2.8291 0-.781-.781-.7809-2.0481 0-2.8291l9.3145-9.3135H0v-4h29.1719l-9.3145-9.3135c-.7809-.781-.781-2.048 0-2.829Z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 md:mb-32 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl md:text-4xl">
                URC<span className="italic text-[var(--carolina-blue)]">@</span>UNC
              </span>
            </Link>
            <p className="type-body text-black/60 max-w-xs mb-8">
              The inaugural Undergraduate Research Conference at the University of North Carolina at Chapel Hill.
            </p>
            <div className="flex gap-6">
              <span className="type-label text-black/40">Oct 2-3, 2026</span>
              <span className="type-label text-black/40">Chapel Hill, NC</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Sitemap */}
            <div>
              <h4 className="type-label text-black/40 mb-6">Sitemap</h4>
              <ul className="space-y-3">
                {footerLinks.sitemap.map((item, index) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="link group inline-flex items-center gap-2"
                    >
                      <span className="font-serif italic text-lg md:text-xl group-hover:text-[var(--carolina-blue)] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="type-label text-black/40 mb-6">Follow</h4>
              <ul className="space-y-3">
                {footerLinks.socials.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link group inline-flex items-center gap-2"
                    >
                      <span className="font-serif italic text-lg md:text-xl group-hover:text-[var(--carolina-blue)] transition-colors">
                        {item.label}
                      </span>
                      <svg 
                        className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        viewBox="0 0 8 8" 
                        fill="none"
                      >
                        <path fill="currentColor" d="m7.248.5.3526.3535L.707 7.7354l-.3535-.3545L0 7.0273 6.8945.1465z"/>
                        <path fill="currentColor" d="M7.748 0v6.497h-1V1H1.251V0z"/>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="type-label text-black/40 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:urc@unc.edu" 
                    className="link font-serif italic text-lg md:text-xl hover:text-[var(--carolina-blue)] transition-colors"
                  >
                    urc@unc.edu
                  </a>
                </li>
                <li>
                  <a 
                    href="https://unc.edu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link group inline-flex items-center gap-2"
                  >
                    <span className="font-serif italic text-lg md:text-xl group-hover:text-[var(--carolina-blue)] transition-colors">
                      UNC Chapel Hill
                    </span>
                    <svg 
                      className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                      viewBox="0 0 8 8" 
                      fill="none"
                    >
                      <path fill="currentColor" d="m7.248.5.3526.3535L.707 7.7354l-.3535-.3545L0 7.0273 6.8945.1465z"/>
                      <path fill="currentColor" d="M7.748 0v6.497h-1V1H1.251V0z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="type-label-sm text-black/40">&copy; 2026 URC@UNC. All rights reserved.</span>
          <span className="type-label-sm text-black/40">Designed & Built in Chapel Hill</span>
          <span className="type-label-sm text-[var(--carolina-blue)]">Vol. 01</span>
        </div>
      </div>

      {/* Massive Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h1 
          className={`font-serif text-[22vw] md:text-[30vw] leading-[0.7] text-center whitespace-nowrap text-black/[0.02] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20%]'}`}
        >
          URC@UNC
        </h1>
      </div>
    </footer>
  );
}

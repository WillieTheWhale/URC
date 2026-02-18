"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

/* =============================================================================
   CONSTANTS & DATA
   ============================================================================= */

const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EXPO_IN_OUT = [0.87, 0, 0.13, 1] as const;

// Full navigation items for bottom nav
const navItems = [
  { label: "ABOUT", href: "/", dataText: "ABOUT" },
  { label: "CONFERENCE", href: "/conference", dataText: "CONFERENCE" },
  { label: "GET INVOLVED", href: "/get-involved", dataText: "GET INVOLVED" },
  { label: "SPONSORS", href: "/sponsors", dataText: "SPONSORS" },
  { label: "CONTACT", href: "/contact", dataText: "CONTACT" },
];

// Social links
const socialLinks = [
  { label: "INSTAGRAM", short: "IG", href: "https://instagram.com/urc_unc" },
  { label: "LINKEDIN", short: "LI", href: "https://linkedin.com/company/urc-unc" },
  { label: "EMAIL", short: "EM", href: "mailto:urc@unc.edu" },
];


/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  // Handle scroll direction for header hide/show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (latest > 150 && direction === "down" && latest - lastScrollY.current > 15) {
      setHidden(true);
    } else if (direction === "up" && lastScrollY.current - latest > 15) {
      setHidden(false);
    }
    setScrolled(latest > 80);
    lastScrollY.current = latest;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================================
          MAIN HEADER BAR - Full Width Scrolling Marquee
          ===================================================================== */}
      <motion.header
        className="fixed top-0 left-0 w-full z-[100]"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: EASE_EXPO_OUT }}
      >
        {/* Top Bar Container */}
        <div 
          className={`relative w-full bg-white border-b-[3px] md:border-b-[4px] border-black transition-all duration-500 ${
            scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]' : ''
          }`}
        >
          {/* Main Header Row */}
          <div className="relative flex items-stretch w-full h-[calc(44/375*100vw)] md:h-[calc(56/1440*100vw)] min-h-[44px] md:min-h-[52px] max-h-[60px]">
            
            {/* Left: Logo - Fixed Position */}
            <motion.div
              className="relative z-20 flex items-center flex-shrink-0 px-[calc(12/375*100vw)] md:px-[calc(24/1440*100vw)] border-r-[2px] md:border-r-[3px] border-black bg-white"
              initial={{ opacity: 0, x: -30 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_EXPO_OUT }}
            >
              <Link
                href="/"
                className="group flex items-center gap-[calc(6/375*100vw)] md:gap-[calc(10/1440*100vw)]"
              >
                {/* Logo Mark */}
                <div className="relative w-[calc(24/375*100vw)] md:w-[calc(32/1440*100vw)] min-w-[22px] max-w-[32px] aspect-square flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/urc-logo.png"
                    alt="URC Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Logo Text */}
                <span className="font-serif text-fluid-header-logo leading-none tracking-tight whitespace-nowrap">
                  URC<span className="italic text-[#4B9CD3]">@</span>UNC
                </span>
              </Link>
            </motion.div>

            {/* Center: Static Navigation Menu */}
            <motion.div
              className="relative flex-1 overflow-hidden bg-white"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: EASE_EXPO_OUT }}
            >
              <nav className="hidden md:flex items-center justify-center h-full gap-[calc(4/1440*100vw)]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      relative px-[calc(16/1440*100vw)] py-2
                      font-serif text-fluid-nav leading-none tracking-wide
                      transition-colors duration-300
                      ${pathname === item.href ? 'text-[#4B9CD3]' : 'text-black hover:text-[#4B9CD3]'}
                    `}
                  >
                    <span className="relative">
                      {item.label}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#4B9CD3]" />
                      )}
                    </span>
                  </Link>
                ))}
              </nav>
              {/* Mobile: Show event info instead of nav (nav is in mobile menu) */}
              <div className="flex md:hidden items-center justify-center h-full">
                <span className="font-serif text-fluid-marquee leading-none tracking-wide text-black/60">
                  Undergraduate Research Conference
                </span>
              </div>
            </motion.div>

            {/* Right: Submit Abstract CTA */}
            <motion.div
              className="relative z-20 flex items-center flex-shrink-0 border-l-[2px] md:border-l-[3px] border-black"
              initial={{ opacity: 0, x: 30 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_EXPO_OUT }}
            >
              <Link
                href="/get-involved#abstracts"
                className="group hover-dark-to-light flex items-center h-full px-[calc(12/375*100vw)] md:px-[calc(24/1440*100vw)] bg-black hover:bg-[#4B9CD3]"
              >
                <span className="font-serif text-fluid-cta text-white group-hover:text-black leading-none tracking-wide whitespace-nowrap transition-[color] duration-100">
                  <span className="hidden md:inline">Submit Abstract</span>
                  <span className="md:hidden">Submit</span>
                </span>
                <svg 
                  className="hidden md:block w-[calc(12/1440*100vw)] min-w-[10px] h-auto ml-[calc(10/1440*100vw)] text-white group-hover:text-black transition-[color] duration-100" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Secondary Info Bar - Visible on scroll */}
          <AnimatePresence>
            {scrolled && !hidden && (
              <motion.div
                className="hidden md:flex items-center justify-between w-full h-[calc(28/1440*100vw)] min-h-[24px] max-h-[28px] px-[calc(24/1440*100vw)] bg-[#FAFAF8] border-t border-black/10"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_EXPO_OUT }}
              >
                <div className="flex items-center gap-[calc(24/1440*100vw)]">
                  <span className="font-sans text-fluid-info text-black/50 leading-none">
                    Oct 2-3, 2026
                  </span>
                  <span className="font-sans text-fluid-info text-black/50 leading-none">
                    UNC Chapel Hill
                  </span>
                </div>
                <div className="flex items-center gap-[calc(16/1440*100vw)]">
                  <span className="font-sans text-fluid-info text-[#4B9CD3] leading-none">
                    Deadline: July 1, 2026
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* =====================================================================
          BOTTOM FIXED NAVIGATION
          ===================================================================== */}
      <motion.div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100]"
        initial={{ y: 100, opacity: 0 }}
        animate={loaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: EASE_EXPO_OUT }}
      >
        {/* Desktop Nav */}
        <nav className="hidden lg:block bg-black border-[2px] border-black">
          <ul className="flex justify-center items-center">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <NavLink item={item} index={index} currentPath={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden block bg-black/90 backdrop-blur-sm px-8 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.3)] safe-bottom"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="font-serif text-xs leading-none text-white tracking-wider">
            {menuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </motion.div>

      {/* =====================================================================
          BOTTOM CORNERS - Credits & Social Links
          ===================================================================== */}
      
      {/* Bottom Left: Credits */}
      <motion.div
        className="fixed bottom-4 left-5 z-[90] mix-blend-difference hidden md:block"
        initial={{ opacity: 0 }}
        animate={scrolled ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://unc.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="link flex items-center gap-1"
        >
          <span className="font-serif text-[10px] md:text-sm leading-none text-white">
            UNC Chapel Hill
          </span>
          <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>

      {/* Bottom Right: Social Links */}
      <motion.div
        className="fixed bottom-5 right-5 z-[90] mix-blend-difference hidden md:block"
        initial={{ opacity: 0 }}
        animate={scrolled ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex items-center">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link block px-1.5 md:px-2.5 py-1 md:py-2.5"
              >
                <span className="hidden md:block font-serif text-sm leading-none tracking-tight text-white">
                  {social.label}
                </span>
                <span className="md:hidden font-serif text-[10px] text-white">{social.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* =====================================================================
          MOBILE MENU OVERLAY
          ===================================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_EXPO_OUT }}
            className="lg:hidden fixed inset-0 z-[90] bg-white overflow-y-auto"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>

            <nav className="relative w-full h-full py-32 px-8 flex flex-col justify-center">
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: EASE_EXPO_OUT }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group block w-full p-5 transition-colors duration-300 ${
                        pathname === item.href 
                          ? 'bg-[#4B9CD3] text-black' 
                          : 'bg-black hover:bg-[#4B9CD3] text-white hover:text-black hover-dark-to-accent-direct'
                      }`}
                    >
                      <span className="font-serif text-2xl md:text-3xl leading-none">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE_EXPO_OUT }}
              >
                <Link
                  href="/get-involved#abstracts"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-4 border-[3px] border-black px-8 py-5 hover:bg-black hover:text-white transition-all duration-300 hover-light-to-dark-direct"
                >
                  <span className="font-serif text-lg">Submit Abstract</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>

              {/* Mobile Social Links */}
              <motion.div
                className="mt-auto pt-12 border-t border-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="font-sans text-xs text-black/40 uppercase tracking-wider mb-4">Follow Us</p>
                <ul className="flex gap-6">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-base text-black hover:text-[#4B9CD3] transition-colors"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =============================================================================
   NAV LINK COMPONENT - Sophisticated hover effect
   ============================================================================= */

interface NavLinkProps {
  item: typeof navItems[0];
  index: number;
  currentPath: string;
}

function NavLink({ item, index, currentPath }: NavLinkProps) {
  const [isHover, setIsHover] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isActive = currentPath === item.href;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsHover(false), 100);
  };

  return (
    <Link
      href={item.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative block py-3 px-4 text-nowrap transition-colors duration-300 ${
        isActive ? 'bg-[#4B9CD3]' : ''
      }`}
    >
      <span className="link-nav relative block overflow-hidden">
        <span
          className={`--line block font-serif text-sm leading-none transition-colors duration-300 ${
            isActive ? 'text-black' : 'text-white'
          }`}
          data-text={item.dataText}
        >
          <span className={`word inline-block transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isHover && !isActive ? '-translate-y-full' : 'translate-y-0'}`}>
            {item.label}
          </span>
        </span>
        {!isActive && (
          <span className={`absolute inset-0 font-serif text-sm leading-none text-[#4B9CD3] transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isHover ? 'translate-y-0' : 'translate-y-full'}`}>
            {item.label}
          </span>
        )}
      </span>
    </Link>
  );
}

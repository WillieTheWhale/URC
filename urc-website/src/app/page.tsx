"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import PullQuote from "@/components/sections/PullQuote";
import ImageDivider from "@/components/sections/ImageDivider";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import ConferenceHighlights from "@/components/sections/ConferenceHighlights";
import Timeline from "@/components/sections/Timeline";
import Organizers from "@/components/sections/Organizers";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import WhyAttend from "@/components/sections/WhyAttend";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload critical images
    const images = [
      '/images/students-collaborating.jpg',
      '/images/campus-building.jpg',
      '/images/university-library.jpg',
      '/images/event-stage.jpg',
    ];

    const preloadImages = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Still resolve even if image fails
      });
    });

    // Wait for minimum time OR images to load, whichever takes longer
    Promise.all([
      ...preloadImages,
      new Promise(resolve => setTimeout(resolve, 2000)) // Minimum 2s for effect
    ]).then(() => {
      // Images are loaded, loading screen will handle its own exit
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          minimumDuration={2800}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ visibility: showContent ? 'visible' : 'hidden' }}
      >
        {/* Global Scroll Progress Bar */}
        <ScrollProgress />

        <Header />
        <main className="bg-white">
          {/* Hero - Full viewport sticky section */}
          <Hero />

          {/* About Preview - Editorial asymmetric layout */}
          <AboutPreview />

          {/* Pull Quote — editorial break */}
          <PullQuote
            quote="Your research. Your voice. Your moment."
            attribution="URC@UNC — Inaugural Edition, 2026"
          />

          {/* Image Divider — campus atmosphere */}
          <ImageDivider
            src="/images/chapel-hill-campus.jpg"
            alt="UNC Chapel Hill campus"
            overlayText="Where discovery meets opportunity"
            overlaySubtext="Chapel Hill, North Carolina"
            tint="carolina"
          />

          {/* Featured Research Tracks - Grid with sophisticated reveals */}
          <FeaturedResearch />

          {/* Conference Highlights - Horizontal scroll cards */}
          <ConferenceHighlights />

          {/* Timeline - Important dates with editorial design */}
          <Timeline />

          {/* Image Divider — conference atmosphere */}
          <ImageDivider
            src="/images/conference-hall.jpg"
            alt="Conference venue"
            overlayText="Two days of excellence"
            overlaySubtext="October 2–3, 2026"
            tint="navy"
            height="50vh"
          />

          {/* Organizers/Team - Personality section */}
          <Organizers />

          {/* Testimonial Marquee — social proof */}
          <TestimonialMarquee />

          {/* Why Attend - Audience-specific value props */}
          <WhyAttend />

          {/* Final CTA */}
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================================================================
   DATA
   ============================================================================= */

const contactMethods = [
  {
    label: "General Inquiries",
    value: "urc@unc.edu",
    href: "mailto:urc@unc.edu",
    description: "Questions about the conference, registration, or general information",
  },
  {
    label: "Sponsorship",
    value: "sponsors@urc.unc.edu",
    href: "mailto:sponsors@urc.unc.edu",
    description: "Partnership opportunities and sponsorship packages",
  },
  {
    label: "Abstract Submissions",
    value: "abstracts@urc.unc.edu",
    href: "mailto:abstracts@urc.unc.edu",
    description: "Questions about submitting or reviewing abstracts",
  },
  {
    label: "Executive Team",
    value: "exec@urc.unc.edu",
    href: "mailto:exec@urc.unc.edu",
    description: "Leadership positions and organizational matters",
  },
];

const socialLinks = [
  { platform: "Instagram", handle: "@urc_unc", href: "https://instagram.com/urc_unc" },
  { platform: "LinkedIn", handle: "URC at UNC", href: "https://linkedin.com/company/urc-unc" },
  { platform: "Twitter", handle: "@urc_unc", href: "https://twitter.com/urc_unc" },
];

const faqs = [
  {
    q: "When does the conference take place?",
    a: "URC@UNC 2026 will be held October 2-3, 2026 at UNC Chapel Hill. Friday evening features registration and networking, with the main conference programming on Saturday."
  },
  {
    q: "How do I register to attend?",
    a: "Registration opens in August 2026. All attendees—presenters, volunteers, and general attendees—must register through our online portal. Accepted presenters will receive registration instructions with their acceptance notification."
  },
  {
    q: "Is there a cost to attend?",
    a: "There is a nominal registration fee to cover materials, catering, and venue costs. Fee details will be announced when registration opens. Fee waivers are available for students with demonstrated financial need."
  },
  {
    q: "Can faculty or graduate students attend?",
    a: "Yes! Faculty advisors are encouraged to attend to support their mentees. Graduate students may attend as guests. However, only current undergraduates may submit abstracts and present."
  },
  {
    q: "Where is the conference held?",
    a: "The conference takes place on UNC Chapel Hill's main campus. Specific venue information will be provided to registered attendees closer to the event date."
  },
  {
    q: "Is parking available?",
    a: "Yes, visitor parking is available in campus parking decks. We'll provide detailed parking and transportation information to all registered attendees."
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "abstract", label: "Abstract Submission" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "volunteer", label: "Volunteering" },
  { value: "media", label: "Media / Press" },
  { value: "other", label: "Other" },
];

/* =============================================================================
   COMPONENT
   ============================================================================= */

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  // InView states
  const heroInView = useInView(heroRef, { once: true });
  const contactInView = useInView(contactRef, { once: true, margin: "-10%" });
  const formInView = useInView(formRef, { once: true, margin: "-10%" });
  const faqInView = useInView(faqRef, { once: true, margin: "-10%" });
  
  // Active states
  const [heroActive, setHeroActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [faqActive, setFaqActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroInView) setTimeout(() => setHeroActive(true), 200);
  }, [heroInView]);

  useEffect(() => {
    if (contactInView) setTimeout(() => setContactActive(true), 100);
  }, [contactInView]);

  useEffect(() => {
    if (formInView) setTimeout(() => setFormActive(true), 100);
  }, [formInView]);

  useEffect(() => {
    if (faqInView) setTimeout(() => setFaqActive(true), 100);
  }, [faqInView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <>
      <Header />
      <main className="bg-white overflow-x-hidden">
        
        {/* =====================================================================
            HERO SECTION
        ===================================================================== */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-end pt-[120px] md:pt-[160px] pb-[calc(40/375*100vw)] md:pb-[calc(80/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)]"
        >
          {/* Background symbol */}
          <div className="absolute top-[15%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${heroActive ? 'opacity-100' : 'opacity-0'}`}>
              @
            </span>
          </div>

          <div className="relative z-10 w-full max-w-[1200px]">
            {/* Label */}
            <span className={`inline-block font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Get in Touch
            </span>
            
            {/* Main heading */}
            <h1 className="font-serif text-[calc(36/375*100vw)] md:text-[calc(72/1440*100vw)] leading-[1.05] tracking-[-0.02em] text-black mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  We'd love to
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] delay-100 ${heroActive ? 'translate-y-0' : 'translate-y-full'}`}>
                  <span className="italic text-[#4B9CD3]">hear</span> from you.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className={`font-sans text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-black/60 max-w-[550px] leading-relaxed transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] delay-200 ${heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Have questions about the conference, sponsorship opportunities, or how to get involved? Reach out—we typically respond within 2-3 business days.
            </p>
          </div>
        </section>

        {/* =====================================================================
            CONTACT METHODS SECTION
        ===================================================================== */}
        <section 
          ref={contactRef}
          className="relative w-full py-[calc(40/375*100vw)] md:py-[calc(80/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black">
              {contactMethods.map((method, i) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={`group hover-light-to-dark bg-white p-[calc(20/375*100vw)] md:p-[calc(32/1440*100vw)] hover:bg-black transition-[background-color] duration-300 ${contactActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black/40 group-hover:text-white/40 uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)] transition-[color] duration-200 delay-100">
                    {method.label}
                  </span>
                  <span className="font-serif text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-[#4B9CD3] block mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                    {method.value}
                  </span>
                  <span className="font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] text-black/50 group-hover:text-white/50 transition-[color] duration-200 delay-100">
                    {method.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            CONTACT FORM SECTION
        ===================================================================== */}
        <section 
          ref={formRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-[#FAFAF8] border-t-[3px] border-black"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[calc(40/375*100vw)] md:gap-[calc(80/1440*100vw)]">
              
              {/* Left column - Info */}
              <div className="lg:col-span-4">
                <div className={`transition-all duration-1000 ${formActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                    #01 — Send a Message
                  </span>
                  <h2 className="font-serif text-[calc(24/375*100vw)] md:text-[calc(36/1440*100vw)] leading-[1.1] text-black mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                    Contact <span className="italic text-[#4B9CD3]">form</span>
                  </h2>
                  <p className="font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black/50 mb-[calc(32/375*100vw)] md:mb-[calc(48/1440*100vw)]">
                    Fill out the form and we'll get back to you within 2-3 business days.
                  </p>

                  {/* Social links */}
                  <div>
                    <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black/40 uppercase tracking-wider block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                      Follow Us
                    </span>
                    <div className="space-y-[calc(8/375*100vw)] md:space-y-[calc(12/1440*100vw)]">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-[calc(8/375*100vw)] md:py-[calc(12/1440*100vw)] border-b border-black/10 hover:border-[#4B9CD3] group transition-colors"
                        >
                          <span className="font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-black/60 group-hover:text-black transition-colors">
                            {social.platform}
                          </span>
                          <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3]">
                            {social.handle}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="lg:col-span-8">
                <div className={`bg-white border-[2px] border-black p-[calc(24/375*100vw)] md:p-[calc(48/1440*100vw)] transition-all duration-1000 delay-200 ${formActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {isSubmitted ? (
                    <div className="text-center py-[calc(40/375*100vw)] md:py-[calc(60/1440*100vw)]">
                      <span className="inline-block w-[calc(48/375*100vw)] md:w-[calc(64/1440*100vw)] h-[calc(48/375*100vw)] md:h-[calc(64/1440*100vw)] bg-[#4B9CD3] flex items-center justify-center mb-[calc(20/375*100vw)] md:mb-[calc(32/1440*100vw)] mx-auto">
                        <svg className="w-1/2 h-1/2 text-black" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <h3 className="font-serif text-[calc(24/375*100vw)] md:text-[calc(32/1440*100vw)] text-black mb-[calc(8/375*100vw)] md:mb-[calc(12/1440*100vw)]">
                        Message Sent!
                      </h3>
                      <p className="font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black/50 mb-[calc(24/375*100vw)] md:mb-[calc(32/1440*100vw)]">
                        Thank you for reaching out. We'll get back to you within 2-3 business days.
                      </p>
                      <button
                        onClick={resetForm}
                        className="hover-light-to-dark-direct inline-flex items-center gap-2 px-[calc(20/375*100vw)] md:px-[calc(28/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] border-[2px] border-black text-black font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-[calc(20/375*100vw)] md:space-y-[calc(28/1440*100vw)]">
                      {/* Name & Email row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[calc(16/375*100vw)] md:gap-[calc(24/1440*100vw)]">
                        <div>
                          <label 
                            htmlFor="name"
                            className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(10/1440*100vw)]"
                          >
                            Name <span className="text-[#4B9CD3]">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-[calc(14/375*100vw)] md:px-[calc(18/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-white border border-black/20 focus:border-black focus:outline-none font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black placeholder:text-black/30 transition-colors"
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="email"
                            className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(10/1440*100vw)]"
                          >
                            Email <span className="text-[#4B9CD3]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-[calc(14/375*100vw)] md:px-[calc(18/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-white border border-black/20 focus:border-black focus:outline-none font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black placeholder:text-black/30 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Inquiry type */}
                      <div>
                        <label 
                          htmlFor="inquiryType"
                          className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(10/1440*100vw)]"
                        >
                          Inquiry Type <span className="text-[#4B9CD3]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full px-[calc(14/375*100vw)] md:px-[calc(18/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-white border border-black/20 focus:border-black focus:outline-none appearance-none font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black cursor-pointer transition-colors"
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                          <svg 
                            className="absolute right-[calc(14/375*100vw)] md:right-[calc(18/1440*100vw)] top-1/2 -translate-y-1/2 w-[calc(12/375*100vw)] md:w-[calc(16/1440*100vw)] h-auto pointer-events-none text-black/40" 
                            viewBox="0 0 24 24" 
                            fill="none"
                          >
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label 
                          htmlFor="message"
                          className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-black uppercase tracking-wider block mb-[calc(8/375*100vw)] md:mb-[calc(10/1440*100vw)]"
                        >
                          Message <span className="text-[#4B9CD3]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="w-full px-[calc(14/375*100vw)] md:px-[calc(18/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-white border border-black/20 focus:border-black focus:outline-none resize-none font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black placeholder:text-black/30 transition-colors"
                        />
                      </div>

                      {/* Submit row */}
                      <div className="flex items-center justify-between pt-[calc(8/375*100vw)] md:pt-[calc(12/1440*100vw)]">
                        <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(12/1440*100vw)] text-black/40">
                          <span className="text-[#4B9CD3]">*</span> Required fields
                        </span>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center gap-2 px-[calc(24/375*100vw)] md:px-[calc(32/1440*100vw)] py-[calc(12/375*100vw)] md:py-[calc(14/1440*100vw)] bg-black text-white font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] hover:bg-[#4B9CD3] hover:text-black transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                          {isSubmitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <span>→</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FAQ SECTION
        ===================================================================== */}
        <section 
          ref={faqRef}
          className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(120/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] border-t-[3px] border-black"
        >
          {/* Background number */}
          <div className="absolute top-[10%] right-[5%] pointer-events-none select-none hidden lg:block">
            <span className={`font-serif text-[calc(300/1440*100vw)] leading-none text-black/[0.02] transition-opacity duration-1000 ${faqActive ? 'opacity-100' : 'opacity-0'}`}>
              ?
            </span>
          </div>

          <div className="max-w-[900px] mx-auto">
            {/* Section header */}
            <div className="text-center mb-[calc(40/375*100vw)] md:mb-[calc(60/1440*100vw)]">
              <span className={`font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)] transition-all duration-1000 ${faqActive ? 'opacity-100' : 'opacity-0'}`}>
                #02 — FAQ
              </span>
              <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(48/1440*100vw)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="block overflow-hidden">
                  <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] ${faqActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    Frequently <span className="italic text-[#4B9CD3]">asked</span>
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
                    <span className={`flex-shrink-0 w-[calc(28/375*100vw)] md:w-[calc(24/1440*100vw)] h-[calc(28/375*100vw)] md:h-[calc(24/1440*100vw)] min-w-[28px] min-h-[28px] flex items-center justify-center border border-black/20 transition-all duration-300 ${openFaq === i ? 'bg-black rotate-45' : 'bg-transparent'}`}>
                      <span className={`font-sans text-[calc(16/375*100vw)] md:text-[calc(20/1440*100vw)] leading-none ${openFaq === i ? 'text-white' : 'text-black'}`}>+</span>
                    </span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-[max(16px,calc(13/375*100vw))] md:text-[calc(15/1440*100vw)] text-black/60 pb-[calc(16/375*100vw)] md:pb-[calc(24/1440*100vw)] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            LOCATION / MAP SECTION
        ===================================================================== */}
        <section className="relative w-full py-[calc(60/375*100vw)] md:py-[calc(100/1440*100vw)] px-[calc(20/375*100vw)] md:px-[calc(80/1440*100vw)] bg-black border-t-[3px] border-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[calc(40/375*100vw)] md:gap-[calc(80/1440*100vw)] items-center">
              
              {/* Left - Info */}
              <div>
                <span className="font-serif text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] block mb-[calc(12/375*100vw)] md:mb-[calc(16/1440*100vw)]">
                  #03 — Location
                </span>
                <h2 className="font-serif text-[calc(28/375*100vw)] md:text-[calc(48/1440*100vw)] leading-[1.1] text-white mb-[calc(16/375*100vw)] md:mb-[calc(24/1440*100vw)]">
                  UNC <span className="italic text-[#4B9CD3]">Chapel Hill</span>
                </h2>
                <p className="font-sans text-[calc(14/375*100vw)] md:text-[calc(16/1440*100vw)] text-white/50 mb-[calc(24/375*100vw)] md:mb-[calc(40/1440*100vw)]">
                  The conference takes place on UNC's beautiful main campus in Chapel Hill, North Carolina. Specific venue details will be shared with registered attendees.
                </p>
                
                <div className="space-y-[calc(12/375*100vw)] md:space-y-[calc(16/1440*100vw)]">
                  <div className="flex items-start gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)]">
                    <span className="w-[calc(8/375*100vw)] md:w-[calc(10/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(10/1440*100vw)] mt-[6px] bg-[#4B9CD3] flex-shrink-0" />
                    <div>
                      <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-white/40 uppercase tracking-wider block mb-1">Address</span>
                      <span className="font-serif text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white">Chapel Hill, NC 27599</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-[calc(12/375*100vw)] md:gap-[calc(16/1440*100vw)]">
                    <span className="w-[calc(8/375*100vw)] md:w-[calc(10/1440*100vw)] h-[calc(8/375*100vw)] md:h-[calc(10/1440*100vw)] mt-[6px] bg-[#4B9CD3] flex-shrink-0" />
                    <div>
                      <span className="font-sans text-[calc(10/375*100vw)] md:text-[calc(11/1440*100vw)] text-white/40 uppercase tracking-wider block mb-1">Date</span>
                      <span className="font-serif text-[calc(14/375*100vw)] md:text-[calc(18/1440*100vw)] text-white">October 2-3, 2026</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://maps.google.com/?q=UNC+Chapel+Hill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-[calc(24/375*100vw)] md:mt-[calc(40/1440*100vw)] font-sans text-[calc(12/375*100vw)] md:text-[calc(14/1440*100vw)] text-[#4B9CD3] hover:text-white transition-colors"
                >
                  View on Google Maps
                  <svg className="w-[calc(12/375*100vw)] md:w-[calc(14/1440*100vw)] h-auto" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Right - Map placeholder */}
              <div className="relative aspect-[4/3] bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-[calc(48/375*100vw)] md:text-[calc(80/1440*100vw)] text-white/10 block mb-2">
                    UNC
                  </span>
                  <span className="font-sans text-[calc(11/375*100vw)] md:text-[calc(13/1440*100vw)] text-white/30">
                    Interactive map coming soon
                  </span>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-[calc(12/375*100vw)] md:top-[calc(20/1440*100vw)] left-[calc(12/375*100vw)] md:left-[calc(20/1440*100vw)] w-[calc(24/375*100vw)] md:w-[calc(40/1440*100vw)] h-[calc(24/375*100vw)] md:h-[calc(40/1440*100vw)] border-t-[2px] border-l-[2px] border-[#4B9CD3]" />
                <div className="absolute bottom-[calc(12/375*100vw)] md:bottom-[calc(20/1440*100vw)] right-[calc(12/375*100vw)] md:right-[calc(20/1440*100vw)] w-[calc(24/375*100vw)] md:w-[calc(40/1440*100vw)] h-[calc(24/375*100vw)] md:h-[calc(40/1440*100vw)] border-b-[2px] border-r-[2px] border-[#4B9CD3]" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

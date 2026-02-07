"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: "default" | "bordered" | "dark" | "carolina" | "elevated";
  className?: string;
  children?: React.ReactNode;
  number?: string;
}

const variantClasses = {
  default: "bg-white border border-[var(--navy)]/10 hover:border-[var(--carolina-blue)] hover:bg-[var(--cream)]",
  bordered: "bg-white border-2 border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white group hover-light-to-dark",
  dark: "bg-[var(--navy)] text-white border border-[var(--navy-light)] hover:bg-[var(--navy-light)]",
  carolina: "bg-[var(--carolina-blue)] text-white border border-[var(--carolina-blue)] hover:bg-[var(--carolina-blue-light)]",
  elevated: "bg-white border border-[var(--gray-200)] shadow-sm hover:shadow-md hover:border-[var(--carolina-blue)]",
};

export default function Card({
  title,
  description,
  icon,
  href,
  variant = "default",
  className = "",
  children,
  number,
}: CardProps) {
  const isDark = variant === "dark" || variant === "carolina";
  const isBordered = variant === "bordered";

  const content = (
    <div className={`p-6 md:p-8 transition-all duration-300 group ${variantClasses[variant]} ${className}`}>
      {/* Top Row - Number and Icon */}
      <div className="flex items-start justify-between mb-6">
        {icon && (
          <div className={`p-3 border ${
            isDark 
              ? 'border-white/20 group-hover:border-white/40' 
              : isBordered 
                ? 'border-[var(--navy)] group-hover:border-white transition-[border-color] duration-200 delay-100' 
                : 'border-[var(--navy)]/20 group-hover:border-[var(--carolina-blue)]'
          } ${!isBordered ? 'transition-colors' : ''}`}>
            <div className={`${
              isDark 
                ? 'text-[var(--carolina-blue-light)]' 
                : isBordered 
                  ? 'text-[var(--carolina-blue)] group-hover:text-[var(--carolina-blue-light)] transition-[color] duration-200 delay-100' 
                  : 'text-[var(--carolina-blue)]'
            } ${!isBordered ? 'transition-colors' : ''}`}>
              {icon}
            </div>
          </div>
        )}
        
        {number && (
          <span className={`text-sm font-medium ${
            isDark 
              ? 'text-[var(--carolina-blue-light)]' 
              : isBordered 
                ? 'text-[var(--carolina-blue)] group-hover:text-[var(--carolina-blue-light)] transition-[color] duration-200 delay-100' 
                : 'text-[var(--carolina-blue)]'
          } ${!isBordered ? 'transition-colors' : ''}`} style={{ fontFamily: "var(--font-display)" }}>
            {number}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-medium mb-3 ${
          isDark 
            ? 'text-white' 
            : isBordered 
              ? 'text-[var(--navy)] group-hover:text-white transition-[color] duration-200 delay-100' 
              : 'text-[var(--navy)]'
        } ${!isBordered ? 'transition-colors' : ''}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className={`text-sm leading-relaxed mb-4 ${
          isDark 
            ? 'text-white/70' 
            : isBordered 
              ? 'text-[var(--gray-600)] group-hover:text-white/70 transition-[color] duration-200 delay-100' 
              : 'text-[var(--gray-600)]'
        } ${!isBordered ? 'transition-colors' : ''}`}>
          {description}
        </p>
      )}

      {/* Custom content */}
      {children}

      {/* Link indicator */}
      {href && (
        <div className={`mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${
          isDark 
            ? 'text-[var(--carolina-blue-light)]' 
            : isBordered 
              ? 'text-[var(--navy)] group-hover:text-[var(--carolina-blue)] transition-[color] duration-200 delay-100' 
              : 'text-[var(--navy)] group-hover:text-[var(--carolina-blue)]'
        } ${!isBordered ? 'transition-colors' : ''}`}>
          <span>Learn more</span>
          <ArrowRight
            size={14}
            weight="bold"
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href={href} className="block">
          {content}
        </Link>
      </motion.div>
    );
  }

  return content;
}

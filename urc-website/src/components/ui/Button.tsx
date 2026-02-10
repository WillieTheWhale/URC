"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "ghost-dark" | "carolina" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary: "bg-[var(--navy)] text-white border-2 border-[var(--navy)] hover:bg-[var(--carolina-blue)] hover:border-[var(--carolina-blue)]",
  secondary: "bg-white text-[var(--navy)] border-2 border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white hover-light-to-dark-direct",
  ghost: "bg-transparent text-[var(--navy)] border-2 border-transparent hover:bg-[var(--gray-100)] hover:border-[var(--gray-200)]",
  "ghost-dark": "bg-transparent text-[var(--navy)] border-2 border-transparent hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] hover-light-to-dark-direct",
  carolina: "bg-[var(--carolina-blue)] text-white border-2 border-[var(--carolina-blue)] hover:bg-[var(--navy)] hover:border-[var(--navy)]",
  outline: "bg-transparent text-[var(--navy)] border-2 border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white hover-light-to-dark-direct",
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  external = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-3
    font-semibold uppercase tracking-wide
    transition-all duration-300 ease-out
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={disabled ? {} : { y: -2 }}
          whileTap={disabled ? {} : { y: 0 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { y: 0 }}
    >
      {children}
    </motion.button>
  );
}

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor =
    variant === "light" ? "text-[var(--text-inverse)]" : "text-[var(--text-primary)]";
  const accentColor = "text-[var(--accent-carolina)]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <Image
        src="/images/urc-logo.png"
        alt="URC Logo"
        width={40}
        height={40}
        className="w-10 h-10 object-contain flex-shrink-0"
      />

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-semibold tracking-tight ${textColor}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          URC
          <span className={accentColor}>@</span>
          UNC
        </span>
      </div>
    </div>
  );
}

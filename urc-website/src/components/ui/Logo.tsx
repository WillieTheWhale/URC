import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor =
    variant === "light" ? "text-[var(--text-inverse)]" : "text-[var(--text-primary)]";
  const accentColor = "text-[var(--accent-carolina)]";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Symbol */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Ascending arc */}
        <path
          d="M8 32C8 18.745 18.745 8 32 8"
          stroke={variant === "light" ? "#F8FAFC" : "#13294B"}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Secondary arc */}
        <path
          d="M14 32C14 22.059 22.059 14 32 14"
          stroke="#7BAFD4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Connection nodes */}
        <circle
          cx="8"
          cy="32"
          r="3"
          fill={variant === "light" ? "#F8FAFC" : "#13294B"}
        />
        <circle cx="20" cy="26" r="2.5" fill="#7BAFD4" />
        <circle
          cx="32"
          cy="8"
          r="3"
          fill={variant === "light" ? "#F8FAFC" : "#13294B"}
        />
      </svg>

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

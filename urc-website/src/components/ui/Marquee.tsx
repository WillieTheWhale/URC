"use client";

interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  repeat?: number;
  className?: string;
  separator?: string;
  reverse?: boolean;
}

export default function Marquee({
  children,
  duration = 20,
  repeat = 4,
  className = "",
  separator = " • ",
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="flex items-center"
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        {[...Array(repeat)].map((_, i) => (
          <span
            key={i}
            className={`flex-shrink-0 animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`}
          >
            {children}
            {separator && <span className="mx-4">{separator}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

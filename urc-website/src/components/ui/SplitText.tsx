"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useInView } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  type?: "word" | "char" | "line";
  delay?: number;
  staggerDelay?: number;
  threshold?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  center?: boolean;
}

export default function SplitText({
  children,
  className = "",
  type = "word",
  delay = 0,
  staggerDelay = 50,
  threshold = "-20%",
  as: Component = "div",
  center = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: threshold as "-20%" });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const splitContent = useMemo(() => {
    if (type === "char") {
      // Split into characters
      const chars = children.split("");
      return chars.map((char, index) => (
        <span
          key={index}
          className="char"
          style={{ "--left-delay": `${index * staggerDelay}` } as React.CSSProperties}
        >
          <span>{char === " " ? "\u00A0" : char}</span>
        </span>
      ));
    } else if (type === "line") {
      // Split into lines (words on one line)
      const words = children.split(" ");
      return (
        <span className="line">
          {words.map((word, index) => (
            <span
              key={index}
              className="word"
              style={{ "--top-delay": `${index * staggerDelay}` } as React.CSSProperties}
            >
              {word}
              {index < words.length - 1 && "\u00A0"}
            </span>
          ))}
        </span>
      );
    } else {
      // Split into words (default)
      const words = children.split(" ");
      const midpoint = Math.floor(words.length / 2);
      
      return (
        <span className="line">
          {words.map((word, index) => {
            const leftDelay = index * staggerDelay;
            const centerDelay = Math.abs(index - midpoint) * staggerDelay;
            
            return (
              <span
                key={index}
                className="word"
                style={{ 
                  "--left-delay": `${leftDelay}`,
                  "--center-delay": `${centerDelay}`,
                } as React.CSSProperties}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
        </span>
      );
    }
  }, [children, type, staggerDelay]);

  const effectClass = type === "char" 
    ? "effect-split-char" 
    : type === "line" 
    ? "effect-split-line" 
    : `effect-split-word${center ? " --center" : ""}`;

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement & HTMLDivElement>}
      className={`${effectClass} ${isActive ? "is-active" : ""} ${className}`}
    >
      {splitContent}
    </Component>
  );
}

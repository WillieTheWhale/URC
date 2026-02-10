"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type MarginType = `${number}${"px" | "%"}` | `${number}${"px" | "%"} ${number}${"px" | "%"}` | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"}` | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"}`;

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  effect?: "center" | "horizontal" | "vertical";
  parallax?: boolean;
  parallaxIntensity?: number;
  grayscale?: boolean;
  delay?: number;
  threshold?: MarginType;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
  priority = false,
  fill = true,
  width,
  height,
  effect = "center",
  parallax = false,
  parallaxIntensity = 20,
  grayscale = false,
  delay = 0,
  threshold = "-5%" as MarginType,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: threshold });
  const [isActive, setIsActive] = useState(false);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxIntensity}%`, `${parallaxIntensity}%`]
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsActive(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const effectClass = effect === "horizontal"
    ? "effect-image-horizontal"
    : effect === "vertical"
    ? "effect-image-vertical"
    : "effect-image";

  const imageProps = fill
    ? { fill: true }
    : { width: width || 800, height: height || 600 };

  return (
    <div
      ref={containerRef}
      className={`${effectClass} ${isActive ? "is-active" : ""} ${className}`}
    >
      {parallax ? (
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src={src}
            alt={alt}
            {...imageProps}
            priority={priority}
            className={`object-cover w-full h-full ${grayscale ? "img-grayscale" : ""}`}
          />
        </motion.div>
      ) : (
        <Image
          src={src}
          alt={alt}
          {...imageProps}
          priority={priority}
          className={`object-cover ${grayscale ? "img-grayscale" : ""}`}
        />
      )}
    </div>
  );
}

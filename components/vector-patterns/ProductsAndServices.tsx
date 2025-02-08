"use client";

import { motion } from "framer-motion";

type PatternType = "dots" | "grid" | "waves" | "diagonal" | "cross";

interface VectorPatternProps {
  type?: PatternType;
  color?: string;
  opacity?: number;
  className?: string;
}

export const VectorPattern = ({
  type = "dots",
  color = "#0d9488", // Teal-600
  opacity = 0.1,
  className = "",
}: VectorPatternProps) => {
  const patterns = {
    dots: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="1.5" fill="${color}"/>
      </svg>`
    )}")`,

    grid: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width="40" height="40" viewBox="0 0 40 40" stroke="${color}" opacity="${opacity}" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20h40M20 0v40" stroke-width="1"/>
      </svg>`
    )}")`,

    waves: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C0 26.863 26.863 0 60 0s60 26.863 60 60-26.863 60-60 60S0 93.137 0 60z" fill="${color}" opacity="${opacity}"/>
      </svg>`
    )}")`,

    diagonal: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width="40" height="40" viewBox="0 0 40 40" stroke="${color}" opacity="${opacity}" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10 50L50-10" stroke-width="1"/>
      </svg>`
    )}")`,

    cross: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width="40" height="40" viewBox="0 0 40 40" stroke="${color}" opacity="${opacity}" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0v40M0 20h40" stroke-width="1"/>
      </svg>`
    )}")`,
  };

  return (
    <motion.div
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
      style={{
        backgroundImage: patterns[type],
        opacity: opacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 1 }}
    />
  );
};

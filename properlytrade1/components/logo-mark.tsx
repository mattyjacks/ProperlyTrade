"use client";

import { motion } from "framer-motion";

type LogoMarkProps = {
  size?: "sm" | "lg";
  className?: string;
  ariaHidden?: boolean;
};

export function LogoMark({ size = "sm", className = "", ariaHidden = true }: LogoMarkProps) {
  const containerSize = size === "lg" ? "h-40 w-40" : "h-8 w-8";
  const emojiSize = size === "lg" ? "text-5xl" : "text-base";
  const sunSize = size === "lg" ? "text-4xl" : "text-sm";
  const sunTop = size === "lg" ? "-top-5" : "-top-2";
  const sunRight = size === "lg" ? "-right-5" : "-right-2";
  const cloudPrimarySize = size === "lg" ? "text-3xl" : "text-xs";
  const cloudSecondarySize = size === "lg" ? "text-2xl" : "text-[10px]";
  const cloudTertiarySize = size === "lg" ? "text-xl" : "text-[9px]";
  const cloudQuaternarySize = size === "lg" ? "text-lg" : "text-[8px]";
  const driftStart = size === "lg" ? 170 : 34;
  const driftEnd = size === "lg" ? -220 : -44;

  return (
    <div
      className={`relative ${containerSize} rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden={ariaHidden}
    >
      <motion.span
        aria-hidden="true"
        className={`absolute top-[12%] ${cloudPrimarySize} leading-none select-none`}
        animate={{
          x: [driftStart, driftStart * 0.45, driftEnd * 0.4, driftEnd],
          y: [0, -2, 1, -1],
          opacity: [0.2, 0.7, 0.45, 0.2],
          scale: [0.9, 1.05, 0.97, 0.9],
        }}
        transition={{ duration: 7.9, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.span>
      <motion.span
        aria-hidden="true"
        className={`absolute top-[30%] ${cloudSecondarySize} leading-none select-none`}
        animate={{
          x: [driftStart + 26, driftStart * 0.55, driftEnd * 0.3, driftEnd],
          y: [1, 3, -1, 0],
          opacity: [0.15, 0.65, 0.35, 0.15],
          scale: [0.86, 1.02, 0.93, 0.86],
        }}
        transition={{ duration: 9.7, repeat: Infinity, ease: "linear", delay: 0.9 }}
      >
        ☁️
      </motion.span>
      <motion.span
        aria-hidden="true"
        className={`absolute top-[56%] ${cloudTertiarySize} leading-none select-none`}
        animate={{
          x: [driftStart + 40, driftStart * 0.35, driftEnd * 0.2, driftEnd],
          y: [0, -1, 2, 1],
          opacity: [0.1, 0.55, 0.28, 0.1],
          scale: [0.82, 0.98, 0.9, 0.82],
        }}
        transition={{ duration: 11.3, repeat: Infinity, ease: "linear", delay: 1.4 }}
      >
        ☁️
      </motion.span>
      <motion.span
        aria-hidden="true"
        className={`absolute top-[74%] ${cloudQuaternarySize} leading-none select-none`}
        animate={{
          x: [driftStart + 62, driftStart * 0.3, driftEnd * 0.1, driftEnd],
          y: [0, 2, -1, 0],
          opacity: [0.08, 0.45, 0.24, 0.08],
          scale: [0.78, 0.95, 0.87, 0.78],
        }}
        transition={{ duration: 13.1, repeat: Infinity, ease: "linear", delay: 0.3 }}
      >
        ☁️
      </motion.span>
      <span aria-hidden="true" className={`absolute ${sunTop} ${sunRight} ${sunSize} leading-none select-none`}>
        ☀️
      </span>
      <span className={`relative z-10 text-white leading-none ${emojiSize}`}>💸</span>
    </div>
  );
}

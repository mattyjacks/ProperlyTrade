"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Prop Firms Powered" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { value: 7, suffix: " Days", label: "Average Setup Time" },
  { value: 500, suffix: "K+", label: "Traders Managed" },
];

export function StatsSection() {
  return (
    <section aria-label="Platform statistics" className="relative py-24 content-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Scale. Speed.{" "}
            <span className="gradient-text">Control.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Production-proven performance for modern trading firms.
            Automation-first infrastructure, real-time risk oversight, and global
            scale backed by measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1.5}
                  />
                </div>
                <p className="text-sm text-white/40" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

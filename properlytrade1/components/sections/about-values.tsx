"use client";

import { motion } from "framer-motion";
import { Target, Zap, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision-First",
    description:
      "Every feature is built with accuracy and reliability in mind. We deliver technology that trading firms can depend on for their most critical operations.",
  },
  {
    icon: Zap,
    title: "Speed at Scale",
    description:
      "Real-time processing, instant insights, and rapid deployment. Our infrastructure is designed to handle millions of operations without compromise.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "No revenue share, no hidden fees, no surprises. We believe in transparent partnerships where firms maintain full control of their data and revenue.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We don't just provide software - we partner with our clients to optimize operations, improve risk management, and drive sustainable growth.",
  },
];

export function AboutValues() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">
            Our Values
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What <span className="gradient-text">Drives Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-white/40 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ProperlyTrade is the backbone of our operations - their platform sets the standard in the prop space, and their support is outstanding.",
    author: "James K.",
    role: "CEO, FundedTraders Pro",
  },
  {
    quote:
      "The team is without exaggerating one of the best I've met so far. Really knowledgeable and always helpful. The tech itself never fails me and is customizable which is great in our industry!",
    author: "Sarah M.",
    role: "COO, AlphaFund Capital",
  },
  {
    quote:
      "ProperlyTrade changed the game for us. Fast setup, stable infra, and great support. Feels like they're part of our own team. Our CFD & futures business runs smoother than ever.",
    author: "Michael R.",
    role: "Founder, TradeSphere",
  },
  {
    quote:
      "Smart tech, no drama. ProperlyTrade made our workflows tighter and life easier - exactly what we needed.",
    author: "David L.",
    role: "CTO, PeakProp Funded",
  },
  {
    quote:
      "Their platform has enabled us to scale from a startup to one of the top firms in the industry in under a year, without a single major tech issue.",
    author: "Emma W.",
    role: "Director, BlueLine Trading",
  },
  {
    quote:
      "ProperlyTrade has been an outstanding technology provider. Everything is completed quickly and efficiently, and their systems are organized in a well-structured manner.",
    author: "Alex T.",
    role: "VP Operations, TradeForce",
  },
];

export function TestimonialsSection() {
  return (
    <section aria-label="Client testimonials" className="relative py-32 overflow-hidden content-auto">
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
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Do Not Just Take{" "}
            <span className="gradient-text">Our Word for It</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            See what our clients have to say about working with ProperlyTrade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-white/30">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

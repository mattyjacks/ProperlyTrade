"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { DemoBadge } from "@/components/demo-banner";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Demo badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4"
        >
          <DemoBadge />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          Live in 7 Days - Full Setup Included
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">All-in-One</span>
          <br />
          <span className="gradient-text">Infrastructure</span>
          <br />
          <span className="text-white">for Trading Firms</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Run your entire trading operation on one system you fully control.
          Lower operational costs, reduce complexity, and launch your prop firm
          in as little as 7 days.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl transition-all duration-300"
          >
            <Play className="h-4 w-4" />
            See How It Works
          </Link>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-widest text-white/25 mb-6">
            Trusted by 50+ prop firms worldwide
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {["FundedNext", "FTMO", "BlueberryFunded", "TopTier", "TrueForex"].map(
              (name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="text-white/20 text-sm font-semibold tracking-wider"
                >
                  {name}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-1">
            <div className="rounded-xl bg-[hsl(225,25%,6%)] overflow-hidden">
              {/* Mock Dashboard */}
              <div className="p-6 sm:p-8">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                    <div className="h-3 w-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="h-6 w-48 bg-white/[0.04] rounded-lg" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-white/[0.04] rounded-md" />
                    <div className="h-6 w-16 bg-blue-500/20 rounded-md" />
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Active Traders", value: "2,847", change: "+12.4%" },
                    { label: "Revenue", value: "$1.2M", change: "+8.7%" },
                    { label: "Payouts", value: "$340K", change: "+15.2%" },
                    { label: "Pass Rate", value: "34.2%", change: "+3.1%" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <p className="text-[10px] sm:text-xs text-white/30 mb-1">
                        {stat.label}
                      </p>
                      <p className="text-sm sm:text-lg font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-emerald-400 mt-0.5">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="h-32 sm:h-48 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-end p-4 gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/10 rounded-t-sm"
                      style={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + ((i * 17 + 7) % 30)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect under dashboard */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

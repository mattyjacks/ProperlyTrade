"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const integrations = [
  "MetaTrader 4",
  "MetaTrader 5",
  "cTrader",
  "DXtrade",
  "Match-Trader",
  "NinjaTrader",
  "Tradovate",
  "Quantower",
  "Stripe",
  "PayPal",
  "Crypto Payments",
  "Sumsub KYC",
  "Veriff",
  "Zapier",
  "Slack",
  "Discord",
];

export function IntegrationsSection() {
  return (
    <section aria-label="Platform integrations" className="relative py-32 overflow-hidden content-auto">
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
            Integrations
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Seamless Connections.
            <br />
            <span className="gradient-text">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Connect the tools your firm already relies on - from trading
            platforms to compliance, payments, and analytics - to create a
            unified ecosystem for your prop firm.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {integrations.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 text-center"
            >
              <div className="h-10 w-10 rounded-lg bg-white/[0.04] mx-auto mb-3 flex items-center justify-center">
                <span className="text-xs font-bold text-white/30">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                {name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all integrations
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

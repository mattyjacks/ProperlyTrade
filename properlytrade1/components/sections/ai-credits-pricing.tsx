"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Coins,
  Sparkles,
  Key,
  AlertTriangle,
  Zap,
} from "lucide-react";

const creditPlans = [
  {
    name: "Free Tier",
    description: "Try the AI trading assistant at no cost",
    price: "0",
    period: "/month",
    popular: false,
    icon: Sparkles,
    features: [
      "10 free prompt credits per day",
      "Credits accumulate up to 100 max",
      "10 days to reach max balance",
      "GPT-5.4 Latest model",
      "OpenAI + OpenRouter support",
      "Overages allowed at $0.05/prompt",
      "Full trading analysis features",
      "Forex, Futures, Crypto, Equities, Options",
    ],
  },
  {
    name: "BYOK (Bring Your Own Key)",
    description: "Use your own API key for \u03C0x the credits",
    price: "0",
    period: "/month + API costs",
    popular: true,
    icon: Key,
    features: [
      "~31 free prompt credits per day (\u03C0 \u00D7 10)",
      "Credits accumulate up to ~314 max",
      "Use your own OpenAI or OpenRouter key",
      "GPT-5.4 Latest model",
      "Direct API access for faster responses",
      "Overages at $0.03/prompt (40% off)",
      "Full trading analysis features",
      "Keys stored locally, never on our servers",
      "Priority response times",
    ],
  },
  {
    name: "Pro Credits",
    description: "For power users who need unlimited analysis",
    price: "49",
    period: "/month",
    popular: false,
    icon: Zap,
    features: [
      "500 prompt credits per month",
      "No daily limits",
      "Unused credits roll over (up to 1,000)",
      "GPT-5.4 Latest model",
      "Overages at $0.02/prompt (60% off)",
      "Advanced multi-turn analysis",
      "Priority API routing",
      "Export chat history",
      "Custom system prompts",
      "Dedicated support",
    ],
  },
];

const overageTable = [
  {
    tier: "Free Tier",
    dailyFree: "10",
    maxAccumulated: "100",
    overageRate: "$0.05",
  },
  {
    tier: "BYOK",
    dailyFree: "~31 (\u03C0 \u00D7 10)",
    maxAccumulated: "~314",
    overageRate: "$0.03",
  },
  {
    tier: "Pro Credits",
    dailyFree: "~17/day (500/mo)",
    maxAccumulated: "1,000",
    overageRate: "$0.02",
  },
];

export function AiCreditsPricing() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            AI Trading Assistant
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Credit{" "}
            <span className="gradient-text-purple">Plans</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-4">
            Use our experimental AI trading assistant powered by GPT-5.4. Start
            free with 10 daily credits, or bring your own API key for \u03C0x the
            allowance.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/5 border border-orange-500/10">
            <AlertTriangle className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-xs text-orange-400/70">
              Experimental - Not financial advice - Use at your own risk
            </span>
          </div>
        </motion.div>

        {/* Credit plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {creditPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-500/10 to-transparent border-purple-500/30"
                  : "bg-white/[0.02] border-white/[0.06]"
              } border p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-xs font-medium text-white">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                      plan.popular
                        ? "bg-purple-500/10 border border-purple-500/20"
                        : "bg-blue-500/10 border border-blue-500/20"
                    }`}
                  >
                    <plan.icon
                      className={`h-5 w-5 ${plan.popular ? "text-purple-400" : "text-blue-400"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {plan.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/40 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-white/40">$</span>
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/40 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/50"
                    >
                      <Check
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-purple-400" : "text-blue-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/chat"
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                    : "text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {plan.price === "0" ? "Start Free" : "Subscribe"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Overage pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-2">
            Credit & Overage Details
          </h3>
          <p className="text-sm text-white/40 text-center mb-8">
            Overages are always allowed so you never get locked out.
            Usage is tracked and billed at the end of each billing cycle.
          </p>

          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-xs font-medium text-white/40 px-6 py-4">
                    Tier
                  </th>
                  <th className="text-left text-xs font-medium text-white/40 px-6 py-4">
                    Daily Free
                  </th>
                  <th className="text-left text-xs font-medium text-white/40 px-6 py-4">
                    Max Accumulated
                  </th>
                  <th className="text-left text-xs font-medium text-white/40 px-6 py-4">
                    Overage Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {overageTable.map((row, i) => (
                  <tr
                    key={row.tier}
                    className={
                      i < overageTable.length - 1
                        ? "border-b border-white/[0.04]"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {row.tier}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/50">
                      <div className="flex items-center gap-1.5">
                        <Coins className="h-3.5 w-3.5 text-yellow-400" />
                        {row.dailyFree}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/50">
                      {row.maxAccumulated}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/50">
                      {row.overageRate}
                      <span className="text-white/25">/prompt</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <h4 className="text-sm font-medium text-white mb-2">
              How credits work:
            </h4>
            <ul className="space-y-1.5 text-xs text-white/40">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">1.</span>
                You receive free credits every day at midnight UTC
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">2.</span>
                Unused credits accumulate up to your tier&apos;s maximum
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">3.</span>
                Each AI prompt costs 1 credit regardless of response length
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">4.</span>
                When credits run out, overages kick in automatically -
                you&apos;re never locked out
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">5.</span>
                Bringing your own API key multiplies your free daily credits
                by \u03C0 (Pi) instantly - hover over the number to see the full value
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

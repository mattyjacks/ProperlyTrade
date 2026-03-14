"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Cable,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Users,
    title: "Prop CRM",
    subtitle: "Run Prop Firms With Precision",
    description:
      "Launch and scale your firm with automated rules, instant oversight, and trader management tools designed for performance.",
    features: [
      "Automated challenge management",
      "Trader lifecycle tracking",
      "Custom payout rules engine",
      "White-label trader area",
      "Real-time performance dashboards",
      "KYC/AML integration",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Broker CRM",
    subtitle: "Run Brokerage Operations With Confidence",
    description:
      "Simplify compliance, permissions, and performance tracking with automated workflows and real-time visibility across your desks.",
    features: [
      "Multi-desk management",
      "Compliance automation",
      "Permission management",
      "Performance tracking",
      "Client onboarding flows",
      "Automated reporting",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cable,
    title: "Trading APIs",
    subtitle: "Power Seamless Connectivity",
    description:
      "Connect trading platforms, risk systems, and analytics through high-performance APIs built for real-time execution, scalability, and full brand control.",
    features: [
      "MT4/MT5 connectivity",
      "cTrader integration",
      "DXtrade support",
      "Real-time data streaming",
      "Custom webhook support",
      "Full API documentation",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldAlert,
    title: "Risk Guard",
    subtitle: "Detect Abusive Traders With Precision",
    description:
      "Protect your firm with automated risk detection, instant alerts, and real-time oversight, all within your existing systems.",
    features: [
      "Copy trading detection",
      "Account passing detection",
      "Latency arbitrage alerts",
      "IP & device fingerprinting",
      "Real-time risk scoring",
      "Custom rule engine",
    ],
    gradient: "from-orange-500 to-red-500",
  },
];

export function SolutionsGrid() {
  return (
    <section aria-label="Trading solutions" className="relative py-20 content-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${solution.gradient} bg-opacity-10 text-sm font-medium mb-4`}
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <solution.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-white/70">{solution.title}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {solution.subtitle}
                </h3>

                <p className="text-base text-white/40 leading-relaxed mb-8 max-w-lg">
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/50"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn more about {solution.title}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Visual card */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent">
                  <div className="rounded-xl bg-[hsl(225,25%,6%)] p-8 min-h-[320px] flex flex-col justify-center">
                    <div className="mb-6">
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${solution.gradient} bg-opacity-20 flex items-center justify-center mb-4`}
                        style={{ background: "rgba(59,130,246,0.1)" }}
                      >
                        <solution.icon className="h-7 w-7 text-blue-400" />
                      </div>
                      <div className="h-3 w-32 bg-white/[0.06] rounded-full mb-3" />
                      <div className="h-2 w-48 bg-white/[0.03] rounded-full mb-2" />
                      <div className="h-2 w-40 bg-white/[0.03] rounded-full" />
                    </div>

                    {/* Mock feature list */}
                    <div className="space-y-3">
                      {solution.features.slice(0, 4).map((_, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                        >
                          <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex-shrink-0" />
                          <div className="flex-1">
                            <div
                              className="h-2 rounded-full bg-white/[0.08] mb-1"
                              style={{ width: `${60 + j * 10}%` }}
                            />
                            <div
                              className="h-1.5 rounded-full bg-white/[0.03]"
                              style={{ width: `${40 + j * 8}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

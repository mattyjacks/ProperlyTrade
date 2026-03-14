"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Trophy,
  ShieldCheck,
  Medal,
  Plug,
  LineChart,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    number: "01",
    title: "Checkout Made Simple",
    description:
      "Traders purchase challenges in just a few clicks, with a smooth, conversion-optimized flow that is ready out of the box.",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Fully Flexible Challenges",
    description:
      "Design challenges on your terms. Configure every rule freely for full control over programs that fit your strategy.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Seamless Compliance",
    description:
      "Integrated with trusted KYC/AML providers. Traders verify in minutes, with digital agreements making onboarding smooth.",
  },
  {
    icon: Medal,
    number: "04",
    title: "Engaging Competitions",
    description:
      "Inspire traders with leaderboards and competitions that showcase progress, drive engagement, and build a vibrant community.",
  },
  {
    icon: Plug,
    number: "05",
    title: "Clever Integrations",
    description:
      "Extend your business with third-party tools for marketing, payments, and growth with no extra development needed.",
  },
  {
    icon: LineChart,
    number: "06",
    title: "Data That Drives Decisions",
    description:
      "Get real-time insights with performance reports that reveal trends, highlight opportunities, and enable smarter decisions.",
  },
  {
    icon: Users,
    number: "07",
    title: "Affiliate Growth Engine",
    description:
      "Scale faster with an affiliate module to manage partners, automate payouts, and track ROI transparently.",
  },
];

export function HowItWorks() {
  return (
    <section aria-label="How it works" className="relative py-32 overflow-hidden content-auto">
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
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything You Need to Run
            <br />
            <span className="gradient-text">and Grow Your Prop Firm</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}
                >
                  <div
                    className={`group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    } max-w-xl`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <step.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-xs font-mono text-blue-400/60 tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 h-4 w-4 rounded-full bg-blue-500/20 border-2 border-blue-500/40 z-10" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

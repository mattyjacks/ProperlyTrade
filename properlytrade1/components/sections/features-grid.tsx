"use client";

import {
  Shield,
  Zap,
  BarChart3,
  Settings2,
  FileText,
  Workflow,
} from "lucide-react";
import {
  AnimatedSection,
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/animated-section";

const features = [
  {
    icon: Settings2,
    title: "Customizable Challenge Engines",
    description:
      "Build challenges and automate payouts around your firm's needs, with every rule and condition fully customizable.",
  },
  {
    icon: Shield,
    title: "Smart Fraud & Risk Intelligence",
    description:
      "Continuous, real-time checks detect and prevent threats before they can impact your firm.",
  },
  {
    icon: BarChart3,
    title: "Real-time Monitoring",
    description:
      "Track performance in real time with dashboards that surface key metrics to drive growth.",
  },
  {
    icon: Workflow,
    title: "End-to-end Automations",
    description:
      "Connect operations with automated workflows that cut errors and scale efficiency.",
  },
  {
    icon: FileText,
    title: "Actionable Reports",
    description:
      "From insight to impact. Reports reveal key drivers to fuel growth and stay ahead.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description:
      "Automate payout processing with configurable rules. Fast, transparent, and fully auditable.",
  },
];

export function FeaturesGrid() {
  return (
    <section aria-label="Platform features" className="relative py-32 overflow-hidden content-auto">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">
            Platform Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Scale Your Trading Firm with
            <br />
            <span className="gradient-text">Precision and Control</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Everything you need to run, monitor, and grow your prop trading firm
            - all from a single platform.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <AnimatedStaggerChild key={feature.title}>
              <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for new prop firms getting started",
    price: "2,500",
    period: "/month",
    popular: false,
    features: [
      "Up to 1,000 active traders",
      "Basic challenge engine",
      "Standard payout automation",
      "1 trading platform integration",
      "Basic analytics dashboard",
      "Email support",
      "White-label trader area",
      "7-day setup",
    ],
  },
  {
    name: "Professional",
    description: "For growing firms that need advanced features",
    price: "5,000",
    period: "/month",
    popular: true,
    features: [
      "Up to 10,000 active traders",
      "Advanced challenge engine",
      "Full payout automation",
      "3 trading platform integrations",
      "Advanced analytics & reports",
      "Priority support",
      "Custom white-label branding",
      "Risk Guard included",
      "Affiliate management module",
      "KYC/AML integration",
      "7-day setup",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale operations needing full customization",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited active traders",
      "Fully custom challenge rules",
      "Custom payout workflows",
      "Unlimited platform integrations",
      "Custom analytics & BI tools",
      "Dedicated account manager",
      "Full custom development",
      "Advanced Risk Guard + AI",
      "Multi-entity support",
      "SLA guarantee",
      "Custom API development",
      "Priority 7-day setup",
    ],
  },
];

export function PricingCards() {
  return (
    <section aria-label="Platform pricing plans" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/30"
                  : "bg-white/[0.02] border-white/[0.06]"
              } border p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/40 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-lg text-white/40">$</span>
                  )}
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
                      <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    : "text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/30">
            All plans include 7-day setup, onboarding assistance, and ongoing
            technical support. No revenue share, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

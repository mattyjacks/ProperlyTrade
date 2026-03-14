"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does ProperlyTrade support multi-asset prop firms?",
    answer:
      "Yes. ProperlyTrade supports multi-asset prop firms by enabling Forex, Futures, Crypto, and Equities to be managed within a single infrastructure. This allows operators to centralize monitoring, reporting, and risk oversight while applying consistent rules across all asset classes.",
  },
  {
    question: "What makes ProperlyTrade different from other providers?",
    answer:
      "ProperlyTrade stands out by offering true infrastructure rather than a single-purpose CRM. It centralizes operations, risk management, and performance tracking while maintaining a transparent licensing model with no revenue share. This gives firms complete control over their data, operations, and profitability.",
  },
  {
    question: "Are there any hidden costs or revenue share?",
    answer:
      "No. ProperlyTrade operates on a transparent licensing model with no revenue share, commissions, or hidden costs. Firms maintain full ownership of their revenue streams and benefit from predictable, fixed platform costs.",
  },
  {
    question: "What kind of support does ProperlyTrade provide?",
    answer:
      "ProperlyTrade provides structured onboarding, integration assistance, and continuous technical support, supported by comprehensive documentation. Beyond technical support, ProperlyTrade works closely with licensees to review operational and performance data, providing guidance aimed at improving efficiency, risk management, and long-term sustainability.",
  },
  {
    question: "Which trading platforms does ProperlyTrade integrate with?",
    answer:
      "ProperlyTrade integrates with all major trading platforms including MetaTrader 4 and 5, DXtrade, cTrader, Match-Trader, NinjaTrader, Tradovate, and Quantower, among others. This flexibility ensures firms can connect their preferred systems without technical limitations.",
  },
  {
    question: "Can the platform be customized to match our brand?",
    answer:
      "Yes. ProperlyTrade builds the Trader Area to your brand guidelines and supports extensive configuration across automation and reporting. Where needed, custom development can be delivered on top of the core infrastructure.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const headingId = `faq-heading-${index}`;

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <h3>
        <button
          id={headingId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-lg"
        >
          <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors pr-4">
            {question}
          </span>
          <ChevronDown
            className={`h-5 w-5 text-white/30 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-blue-400" : ""
            }`}
          />
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/40 leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Questions?{" "}
            <span className="gradient-text">We Have Answers</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-white/[0.02] border border-white/[0.06] px-8"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

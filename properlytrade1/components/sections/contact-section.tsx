"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { DemoBadge } from "@/components/demo-banner";
import { LogoMark } from "@/components/logo-mark";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "demo",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="mb-6 flex justify-center">
            <LogoMark size="lg" className="shadow-2xl shadow-cyan-500/20" />
          </div>
          <div className="mb-4">
            <DemoBadge />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            Get in Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Let&apos;s Build Your</span>
            <br />
            <span className="gradient-text">Trading Infrastructure</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Ready to launch or scale your prop firm? Talk to our team and get
            set up in as little as 7 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-emerald-500/20 text-center"
              >
                <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank you, {formData.name}!</h3>
                <p className="text-sm text-white/50 mb-6">We will be in touch within 24 hours. This is a demo site - no actual email was sent.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", message: "", type: "demo" }); }}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Book a Demo
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-white/50 mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-white/50 mb-2">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-sm text-white/50 mb-2">
                    Company Name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                    placeholder="Your Prop Firm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-type" className="block text-sm text-white/50 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="contact-type"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm appearance-none"
                  >
                    <option value="demo" className="bg-[hsl(225,25%,6%)]">
                      Book a Demo
                    </option>
                    <option value="pricing" className="bg-[hsl(225,25%,6%)]">
                      Request Pricing
                    </option>
                    <option value="support" className="bg-[hsl(225,25%,6%)]">
                      Technical Support
                    </option>
                    <option
                      value="partnership"
                      className="bg-[hsl(225,25%,6%)]"
                    >
                      Partnership Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-white/50 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm resize-none"
                    placeholder="Tell us about your prop firm and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a
                      href="mailto:matt@mattyjacks.com"
                      className="text-sm text-white/40 hover:text-blue-400 transition-colors"
                    >
                      matt@mattyjacks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Contact Page</p>
                    <a
                      href="https://mattyjacks.com/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-blue-400 transition-colors"
                    >
                      mattyjacks.com/contact
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Response Time
                    </p>
                    <p className="text-sm text-white/40">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Setup
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Get your prop firm up and running in just 7 days. Our team
                handles the full setup, integration, and onboarding process.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                Currently accepting new clients
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

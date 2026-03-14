"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Mitchell",
    role: "CEO & Co-founder",
    bio: "15+ years in fintech. Previously led trading infrastructure at a top-tier investment bank.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Former engineering lead at a major trading platform. Expert in real-time distributed systems.",
  },
  {
    name: "Marcus Williams",
    role: "VP of Product",
    bio: "Deep expertise in prop trading operations. Built and scaled multiple prop firms before joining ProperlyTrade.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Client Success",
    bio: "Passionate about client partnerships. Ensures every firm gets the support they need to thrive.",
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    bio: "Full-stack architect with a focus on high-performance, real-time systems and API design.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Risk & Compliance",
    bio: "Former compliance director at a regulated brokerage. Leads our risk intelligence initiatives.",
  },
];

export function AboutTeam() {
  return (
    <section className="relative py-32">
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
            Our Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet the People
            <br />
            <span className="gradient-text">Behind ProperlyTrade</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            A team of fintech veterans, engineers, and trading industry experts
            dedicated to building the best infrastructure for trading firms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <span className="text-lg font-bold text-white/60">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-blue-400 mb-3">{member.role}</p>
              <p className="text-sm text-white/40 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

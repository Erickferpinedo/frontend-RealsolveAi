"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative z-10 py-32 px-6 bg-white overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,168,248,0.06),_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Minimal Tagline */}
        <motion.p
          className="text-sm font-medium tracking-wide uppercase text-[#1E2A78]/70 mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Built on trust, not transactions
        </motion.p>

        {/* Elegant Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-[#0B0C10] mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          We Don’t Just{" "}
          <span className="text-[#1E2A78] font-semibold">Automate.</span>{" "}
          We Collaborate.
        </motion.h2>

        {/* Core Paragraph */}
        <motion.p
          className="text-[#3B3B3B] text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-[#1E2A78]">RealSolve AI</span>, we
          believe great technology starts with human understanding. That’s why we
          don’t just create automated systems, we build intelligent partnerships
          that adapt to how you work and grow with you.
        </motion.p>

        <motion.p
          className="text-[#3B3B3B] text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          We take time to learn your process, your clients, and your goals, crafting
          solutions that simplify operations and elevate customer experience.
          Because when your business succeeds, so do we.
        </motion.p>

        {/* Closing Line */}
        <motion.h3
          className="text-2xl md:text-3xl font-medium text-[#1E2A78] mt-10 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Real Partnership. Real Results. RealSolve AI.
        </motion.h3>
      </div>

      {/* Soft Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[160px] bg-gradient-to-t from-[#2DA8F8]/10 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}

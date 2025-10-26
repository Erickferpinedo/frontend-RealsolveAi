"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB] to-white"
    >
      {/* ===== Sub-badge ===== */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-4 py-1.5 mb-8 rounded-full border border-[#2DA8F8]/30 text-[#1E2A78] text-sm font-medium bg-[#E6F4FF]/60 shadow-sm"
      >
       Built for Teams  <span className="font-bold text-[#2DA8F8]">Who Never Miss a Lead</span>
      </motion.div>

      {/* ===== Title ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-4xl md:text-5xl md:text-7xl font-extrabold leading-tight text-[#0B0C10]"
      >
        Never miss a call <br />
        <span className="text-[#2DA8F8]">or booking again</span>
      </motion.h1>

      {/* ===== Description ===== */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mt-8 text-[#3B3B3B] text-lg leading-relaxed"
      >
        Meet our <span className="font-semibold text-[#1E2A78]">AI Agent</span>, your virtual receptionist 
        powered by RealSolve AI.<br/> Handles every incoming and outgoing call, answers questions, 
        books appointments, and follows up with customers automatically. Whether you manage a 
        restaurant, clinic, or sales team, ensures no lead or reservation slips through 
        the cracks, helping you achieve more bookings with less busywork.
      </motion.p>

      {/* ===== CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          href="https://form.typeform.com/to/yAT13EVT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#2DA8F8] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#1E2A78] transition-all duration-300 hover:scale-105"
        >
          Schedule Demo
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-[#6B7280] text-sm mt-4">No credit card required</p>
      </motion.div>

      {/* ===== Background Accent ===== */}
      <div className="absolute -bottom-40 w-[90vw] h-[90vw] max-w-[900px] rounded-full bg-gradient-to-t from-[#2DA8F8]/10 via-[#74C0FC]/10 to-transparent blur-[160px] pointer-events-none" />
    </section>
  );
};

export default memo(HeroSection);

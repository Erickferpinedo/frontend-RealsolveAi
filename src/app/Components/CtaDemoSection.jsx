"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, Shield, Clock } from "lucide-react";

export default function CtaDemoSection() {
  const handleClick = () => {
    window.open("https://form.typeform.com/to/yAT13EVT", "_blank");
  };

  return (
    <section id="Demo" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#F9FBFF] to-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,168,248,0.08),_transparent_70%)] pointer-events-none" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-2xl border border-[#E5E7EB] rounded-[2rem] shadow-[0_30px_80px_rgba(45,168,248,0.08)] px-6 sm:px-10 py-10 sm:py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {/* Label */}
        <motion.div
          className="inline-block mb-5 sm:mb-6 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-[#2DA8F8]/10 to-[#74C0FC]/10 text-[#1E2A78] border border-[#2DA8F8]/20 shadow-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Solve your missed calls permanently
        </motion.div>

        {/* Headline */}
        <h2
          
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 leading-snug sm:leading-tight bg-gradient-to-r from-[#1E2A78] via-[#2DA8F8] to-[#74C0FC] bg-clip-text text-transparent"
          style={{ textShadow: "0 3px 16px rgba(30,42,120,0.1)" }}
        >
          Never lose a lead or appointment again
        </h2>

        {/* Description */}
        <p className="text-[#3B3B3B] text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Discover how RealSolveAI’s virtual receptionist can handle every call,
          schedule, and follow-up automatically. Businesses using Lina save
          hours weekly and convert more calls into clients.
        </p>

        {/* Feature bullets */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {[
            {
              icon: CheckCircle2,
              text: "Reduce missed calls by 90%",
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              icon: Clock,
              text: "Save up to 10+ hours per week",
              color: "text-[#2DA8F8]",
              bg: "bg-[#E8F6FF]",
            },
            {
              icon: Shield,
              text: "Secure & compliant AI system",
              color: "text-[#1E2A78]",
              bg: "bg-[#F1F5FF]",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] text-sm sm:text-base font-medium ${item.bg} ${item.color} w-full sm:w-auto`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                {item.text}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="cursor-pointer px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#2DA8F8] to-[#1E2A78] text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg shadow-[#2DA8F8]/25 hover:shadow-[#1E2A78]/40 transition-all duration-300"
        >
          Schedule Your Free Demo <Zap className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        {/* Footer text */}
        <p className="text-xs sm:text-sm text-[#3B3B3B]/70 mt-6 max-w-sm mx-auto leading-relaxed">
          Experience the power of our AI receptionist <span className="font-semibold text-[#1E2A78]">Lina</span>,
          powered by <span className="font-semibold text-[#1E2A78]">RealSolveAI</span>.
        </p>
      </motion.div>
    </section>
  );
}

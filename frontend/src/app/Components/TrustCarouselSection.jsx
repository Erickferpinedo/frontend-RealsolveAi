"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Zap,
  ShieldCheck,
  Users,
  Cpu,
} from "lucide-react";

export default function TrustSection() {
  const items = [
    {
      icon: MessageSquare,
      title: "An Agent, Not a Bot",
      description:
        "Our AI Agents listen, understand, and respond naturally. Customers feel heard and not handled by a machine.",
    },
    {
      icon: Phone,
      title: "Never Miss a Customer Again",
      description:
        "Every call is answered instantly. Bookings, confirmations, and follow-ups handled automatically. No lost opportunities.",
    },
    {
      icon: Zap,
      title: "Fast, Seamless Integration",
      description:
        "Connect your systems and calendar in minutes. Our Agent adapts to your workflows with zero disruption.",
    },
    {
      icon: ShieldCheck,
      title: "Security You Can Trust",
      description:
        "End-to-end encryption and enterprise-level privacy protection. Your customer data stays yours. Always.",
    },
    {
      icon: Users,
      title: "Human + AI Collaboration",
      description:
        "Our agents work alongside your team, not in place of them. Empowering staff to focus on what matters most.",
    },
    {
      icon: Cpu,
      title: "Continuous Learning",
      description:
        "RealSolve AI improves every day through live data, adapting tone, speed, and accuracy to your customer's needs.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,168,248,0.05),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-20 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1220] mb-4 sm:mb-6 leading-tight">
            Why Businesses{" "}
            <span className="bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent">
              Trust RealSolve AI
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#3B3B3B] max-w-3xl mx-auto leading-relaxed">
            Companies choose RealSolveAI because it combines human empathy with
            advanced automation. Built for speed, privacy, and true customer
            satisfaction.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[0_12px_40px_rgba(30,42,120,0.08)] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 rounded-xl bg-gradient-to-br from-[#E8F6FF] to-[#F4FAFF] shadow-inner">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2DA8F8]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0B1220] mb-2 sm:mb-3 group-hover:text-[#1E2A78] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#3B3B3B] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Trusted by modern businesses to transform their daily customer
            operations.
          </p>
        </div>
      </div>
    </section>
  );
}

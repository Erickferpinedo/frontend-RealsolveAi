"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

export default function MeetOurTeamSection() {
  const team = [
    {
      name: "Erick Pinedo",
      role: "Founder & CEO",
      img: "/erick.jpg", // corresponds to /public/Isai.jpg
      linkedin: "https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/",
      instagram: "https://www.instagram.com/erickferpinedo/",
    },
    {
      name: "Isai Meraz",
      role: "Co-Founder & Project Manager",
      img: "/isaii.jpeg", // corresponds to /public/Juanes.jpg
      linkedin: "https://www.linkedin.com/in/isaimeraz/",
      instagram: "https://www.instagram.com/isaidavidmeraz/",
    },
    {
      name: "Juan Valdez",
      role: "Co-Founder & Engineer",
      img: "/juanes.jpg", // placeholder from /public/logo-rs.png
      linkedin: "https://www.linkedin.com/in/juan-esteban-valdes-49b846268/",
      instagram: "https://www.instagram.com/jestebanv30/",
    },
  ];

  return (
    <section
      id="team"
      className="relative z-10 py-32 px-6 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,168,248,0.07),_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-[#0B0C10] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[#3B3B3B] text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          A team of innovators, engineers, and creators building the future of customer connection. where AI feels truly human.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="relative group flex flex-col items-center text-center p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_12px_40px_rgba(30,42,120,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(45,168,248,0.1)] hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Glow */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#2DA8F8]/30 to-[#74C0FC]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Profile Picture */}
              <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border border-[#E5E7EB] shadow-sm">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#0B0C10] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#6B7280] mb-4">{member.role}</p>

              {/* Socials */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E2A78] hover:text-[#2DA8F8] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E2A78] hover:text-[#2DA8F8] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500">
            Built with passion. Driven by purpose. Designed to help your business thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

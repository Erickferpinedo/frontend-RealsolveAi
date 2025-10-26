"use client";
import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200 bg-gradient-to-b from-white to-[#F9FAFB] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* === Left Section === */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative flex items-center justify-center">
            <Image
              src="/logo-rs.png"
              alt="RealSolveAI Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent">
              RealSolveAI
            </h3>
            <p className="text-sm text-gray-500">Powered by JP Tech Professionals LLC</p>
          </div>
        </div>

        {/* === Center Navigation === */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
          <a href="#hero" className="hover:text-[#2DA8F8] transition-colors">
            Home
          </a>
          <a href="#why-us" className="hover:text-[#2DA8F8] transition-colors">
            Why Us
          </a>
          <a href="#steps" className="hover:text-[#2DA8F8] transition-colors">
            How It Works
          </a>
          <a href="#integrations" className="hover:text-[#2DA8F8] transition-colors">
            Integrations
          </a>
          <a
            href="https://form.typeform.com/to/yAT13EVT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2DA8F8] transition-colors"
          >
            Book Demo
          </a>
        </nav>

        {/* === Right Section (Socials) === */}
        <div className="flex items-center gap-4 text-gray-500">
          <a
            href="mailto:jptechprofessionals@gmail.com"
            className="hover:text-[#2DA8F8] transition-colors"
            aria-label="Email JP Tech Professionals"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/jp-tech-professionals/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2DA8F8] transition-colors"
            aria-label="indeed"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://realsolveai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2DA8F8] transition-colors"
            aria-label="JP Tech Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* === Copyright Bar === */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JP Tech Professionals LLC. All rights reserved.
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[120px] bg-gradient-to-t from-[#2DA8F8]/15 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
}

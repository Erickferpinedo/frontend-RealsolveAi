"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Updated navigation links
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#why-us" },
    // <-- new “We Don’t Just Automate” section
    { name: "How It Works", href: "#steps" },
    { name: "Integrations", href: "#integrations" },
    { name: "Demo", href: "#Demo" },
    { name: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
        {/* === Logo === */}
        <a
          href="#hero"
          className="flex items-center gap-3 select-none group"
          aria-label="RealSolve AI Home"
        >
          <div className="w-40 h-10 relative flex items-center justify-center">
            <Image
              src="/RealsolveLogo.png"
              alt="RealSolveAI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* <span className="text-xl font-semibold bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity duration-300">
            RealSolveAI
          </span> */}
        </a>

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[#3B3B3B] text-sm font-medium transition-all duration-200 hover:text-[#1E2A78] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* === CTA (Desktop) === */}
        <div className="hidden md:block">
          <a
            href="https://form.typeform.com/to/yAT13EVT"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#2DA8F8] to-[#1E2A78] shadow-lg shadow-[#2DA8F8]/20 hover:shadow-[#1E2A78]/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 hover:text-[#1E2A78] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* === Mobile Dropdown Menu === */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          mobileOpen ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-800 text-base font-medium hover:text-[#1E2A78] transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* CTA in Mobile */}
          <a
            href="https://form.typeform.com/to/yAT13EVT"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 py-3 text-center bg-gradient-to-r from-[#2DA8F8] to-[#1E2A78] text-white rounded-lg font-medium shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

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

const links = [
  { name: "Home", href: "#hero" },
  { name: "Why Us", href: "#why-us" },
  { name: "How It Works", href: "#steps" },
  { name: "Integrations", href: "#integrations" },
  { name: "Demo", href: "#Demo" },
];


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3">
        {/* === Logo === */}
        <a
          href="#hero"
          className="flex items-center gap-3 select-none"
          aria-label="RealSolveAI Home"
        >
          <div className="w-11 h-11 relative flex items-center justify-center">
            <Image
              src="/logo-rs.png" 
              alt="RealSolveAI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent">
            RealSolveAI
          </span>
        </a>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B3B3B] hover:text-[#1E2A78] text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[#3B3B3B] hover:text-[#1E2A78] text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* === CTA (Desktop) === */}
        <div className="hidden md:block">
          <a
            href="https://form.typeform.com/to/yAT13EVT"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#2DA8F8] hover:bg-[#1E2A78] text-white rounded-lg text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            Contact Us
          </a>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 hover:text-[#1E2A78]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-800 text-base font-medium hover:text-[#1E2A78] transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-800 text-base font-medium hover:text-[#1E2A78] transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="https://form.typeform.com/to/yAT13EVT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 py-3 text-center bg-[#2DA8F8] hover:bg-[#1E2A78] text-white rounded-lg font-medium transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = useMemo(
    () => [
      { name: "Home", href: "#hero" },
      { name: "Why Us", href: "#why-us" },
      { name: "How It Works", href: "#steps" },
      { name: "Integrations", href: "#integrations" },
      { name: "Demo", href: "#Demo" },
      { name: "Team", href: "#team" },
    ],
    []
  );

  // Close mobile menu when switching to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Outer wrapper keeps it centered and "floating" */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-4">
        {/* Bubble / pill container */}
        <div
          className={[
            "pointer-events-auto",
            "mx-auto w-full",
            "rounded-2xl",
            "transition-all duration-300",
            // Glass + border + shadow
            "bg-white/70 backdrop-blur-xl border border-white/60",
            "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
            // When scrolled: tighter + slightly more opaque + stronger border/shadow
            scrolled
              ? "bg-white/85 border-gray-200/60 shadow-[0_12px_35px_rgba(0,0,0,0.10)]"
              : "bg-white/60",
          ].join(" ")}
        >
          <div
            className={[
              "flex items-center justify-between",
              "px-4 sm:px-5 lg:px-6",
              "transition-all duration-300",
              scrolled ? "py-2.5" : "py-3.5",
            ].join(" ")}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 select-none"
              aria-label="RealSolve AI Home"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-36 sm:w-40 h-9 relative flex items-center justify-center">
                <Image
                  src="/RealsolveLogo.png"
                  alt="RealSolveAI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={[
                    "relative text-sm font-medium",
                    "text-[#2f2f2f] hover:text-[#1E2A78] transition-colors",
                    // subtle underline on hover
                    "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0",
                    "after:bg-gradient-to-r after:from-[#1E2A78] after:to-[#2DA8F8]",
                    "after:transition-all after:duration-300 hover:after:w-full",
                  ].join(" ")}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://form.typeform.com/to/yAT13EVT"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex items-center justify-center",
                  "px-6 lg:px-7 py-2.5",
                  "rounded-xl font-semibold text-sm",
                  "text-white bg-black",
                  "shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
                  "transition-all duration-300",
                  "hover:bg-[#1E2A78] hover:scale-[1.03]",
                  "active:scale-[0.98]",
                ].join(" ")}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "md:hidden inline-flex items-center justify-center",
                "w-10 h-10 rounded-xl",
                "border border-gray-200/70 bg-white/70 backdrop-blur",
                "text-gray-800 hover:text-[#1E2A78] transition-colors",
              ].join(" ")}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile dropdown as a bubble panel */}
          <div
            className={[
              "md:hidden overflow-hidden",
              "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="px-4 pb-4">
              <div className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-4">
                <div className="space-y-3">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-900 text-base font-medium hover:text-[#1E2A78] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <a
                  href="https://form.typeform.com/to/yAT13EVT"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 block py-3 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-[#2DA8F8] to-[#1E2A78] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CallPreviewSection from "./Components/CallPreviewSection";
import StatsSection from "./Components/StatsSection";
import SetupStepsSection from "./Components/SetupStepsSection";
import TrustCarouselSection from "./Components/TrustCarouselSection";
import CtaDemoSection from "./Components/CtaDemoSection";
import Footer from "./Components/Footer";





export default function Page() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-white via-[#F9FAFB] to-white text-[#3B3B3B] overflow-hidden relative"
      style={{ perspective: "1000px" }}
    >
      {/* === Background Accents === */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2DA8F8]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#74C0FC]/10 rounded-full blur-[128px]" />
      </div>

      {/* === Page Sections === */}
      <Navbar />
      <HeroSection />
    <CallPreviewSection />
<StatsSection />
<SetupStepsSection />
<TrustCarouselSection />
<CtaDemoSection />
<Footer />
    </main>
  );
}

"use client";
import React, { useEffect, useRef, useState, memo } from "react";

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const stats = [
    { value: 50000, label: "Calls Handled", suffix: "+" },
    { value: 99.9, label: "Uptime", suffix: "%" },
    { value: 24, label: "Available", suffix: "/7" },
    { value: 12, label: "Languages", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 py-20 px-6 bg-gradient-to-b from-white to-[#F9FAFB] border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <AnimatedStat key={i} stat={stat} active={visible} delay={i * 150} />
        ))}
      </div>
    </section>
  );
};

const AnimatedStat = ({ stat, active, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = 0;
    const end = stat.value;
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = start + (end - start) * eased;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timeout);
  }, [active, delay, stat.value]);

  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      {/* Animated Value */}
      <div
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent mb-2"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {stat.label === "Uptime"
          ? count.toFixed(1)
          : Math.floor(count).toLocaleString()}
        {stat.suffix}
      </div>

      {/* Label */}
      <p
        className="text-sm text-[#3B3B3B] font-medium"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {stat.label}
      </p>
    </div>
  );
};

export default memo(StatsSection);

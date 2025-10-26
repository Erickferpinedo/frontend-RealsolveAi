"use client";
import React, { memo, useMemo } from "react";
import { Phone, CheckCircle2, Clock } from "lucide-react";

const CallPreviewSection = () => {
  const calls = useMemo(
    () => [
      {
        name: "Sarah Mitchell",
        status: "confirmed",
        action: "Table for 4 booked",
        time: "Tonight at 7:30 PM",
      },
      {
        name: "David Chen",
        status: "confirmed",
        action: "Dental appointment scheduled",
        time: "Tomorrow at 2:00 PM",
      },
      {
        name: "Emma Rodriguez",
        status: "pending",
        action: "Product inquiry answered",
        time: "Follow-up scheduled for Friday",
      },
    ],
    []
  );

  const statusColors = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <section className="relative z-10 flex justify-center px-6 pb-24">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-gray-200 shadow-[0_10px_40px_rgba(45,168,248,0.08)] overflow-hidden">
        {/* Top dots */}
        <div className="flex items-center gap-2 px-6 pt-6 pb-4">
          <div className="w-3 h-3 rounded-full bg-[#2DA8F8]" />
          <div className="w-3 h-3 rounded-full bg-[#74C0FC]" />
          <div className="w-3 h-3 rounded-full bg-[#1E2A78]" />
        </div>

        {/* Call list */}
        <div className="divide-y divide-gray-100">
          {calls.map((call) => (
            <div
              key={call.name}
              className="flex items-center justify-between gap-4 p-6 hover:bg-[#F9FAFB] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8F6FF] to-[#F1FAFF] flex items-center justify-center shadow-inner">
                  <Phone className="w-6 h-6 text-[#2DA8F8]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-[#111827] text-sm">
                      {call.name}
                    </p>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[call.status]}`}
                    >
                      {call.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#3B3B3B]">{call.action}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{call.time}</p>
                </div>
              </div>

              {call.status === "confirmed" ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>AI Agent Active</span>
          </div>
          <span>Processing 24/7</span>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[400px] bg-gradient-to-t from-[#2DA8F8]/15 to-transparent blur-[120px]" />
    </section>
  );
};

export default memo(CallPreviewSection);

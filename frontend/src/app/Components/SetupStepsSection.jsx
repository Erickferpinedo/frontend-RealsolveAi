"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Settings, Database, PhoneCall, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    time: "1 min",
    title: "Customize your agent",
    description:
      "Define your business hours, preferred tone, and how customers should be greeted. The AI Agent instantly adapts to your brand’s personality and starts working for you.",
    card: (
      <div className="rounded-3xl bg-white border border-gray-200 shadow-[0_10px_40px_rgba(45,168,248,0.05)] backdrop-blur-xl p-6 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-[#111827] text-lg">Agent Configuration</h3>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
        </div>
        <div className="space-y-4 text-sm text-[#3B3B3B]">
          <div className="border border-gray-100 rounded-2xl p-4 bg-[#FAFBFC]">
            <div className="flex items-center gap-2 mb-1 text-[#1E2A78] font-medium">
              <Clock className="w-4 h-4" />
              Business Hours
            </div>
            <p>Mon–Fri <span className="float-right font-medium">9:00 AM – 6:00 PM</span></p>
            <p>Saturday <span className="float-right font-medium">10:00 AM – 4:00 PM</span></p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-4 bg-[#FAFBFC]">
            <div className="flex items-center gap-2 mb-1 text-[#1E2A78] font-medium">
              <Settings className="w-4 h-4" />
              Services Offered
            </div>
            <ul className="space-y-1 ml-2 text-[#3B3B3B]">
              <li>• Appointment Booking</li>
              <li>• Product Inquiries</li>
              <li>• Customer Support</li>
            </ul>
          </div>

          <div className="border border-gray-100 rounded-2xl p-4 bg-[#FAFBFC]">
            <div className="flex items-center gap-2 mb-1 text-[#1E2A78] font-medium">
              <PhoneCall className="w-4 h-4" />
              Greeting Message
            </div>
            <p id="integrations" className="italic text-[#6B7280]">
              “Thank you for calling. How can I assist you today?”
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    time: "2 min",
    title: "Connect your systems",
    description:
      "Sync your contacts, CRM, or lead data in seconds. Our AI Agent integrates seamlessly with your tools, no technical setup or training required.",
    card: (
      <div  className="rounded-3xl bg-white border border-gray-200 shadow-[0_10px_40px_rgba(45,168,248,0.05)] backdrop-blur-xl p-6 w-full max-w-md mx-auto">
        <h3  className="font-semibold text-[#111827] text-lg mb-4">Integrations</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { name: "Google Calendar", icon: <Clock />, connected: true },
            { name: "Salesforce CRM", icon: <Database />, connected: true },
            { name: "HubSpot", icon: <Settings />, connected: false },
            { name: "Twilio", icon: <PhoneCall />, connected: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-4 flex flex-col items-start gap-2 transition-all duration-300 ${
                item.connected
                  ? "border-[#2DA8F8] bg-[#E9F6FF]"
                  : "border-gray-200 bg-gray-50 hover:border-[#2DA8F8]/40 hover:bg-[#F0FAFF]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-[#1E2A78] font-medium">
                  {item.icon}
                  {item.name}
                </div>
                {item.connected && <CheckCircle className="w-4 h-4 text-green-500" />}
              </div>
              <p className="text-xs text-gray-500">
                {item.connected ? "Connected" : "Click to connect"}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <p>2 of 4 integrations connected</p>
          <button className="bg-[#2DA8F8] hover:bg-[#1E2A78] text-white px-3 py-1.5 text-xs font-semibold rounded-md transition-all">
            Add More
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    time: "You’re done",
    title: "Let the Agent handle the calls",
    description:
      "Once connected, The AI Agent begins managing every call. Answering, booking, and following up with your customers automatically, 24/7.",
    card: (
      <div className="rounded-3xl bg-white border border-gray-200 shadow-[0_10px_40px_rgba(45,168,248,0.05)] backdrop-blur-xl p-6 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-[#111827] text-lg">Live Dashboard</h3>
          <span className="flex items-center gap-1 text-sm text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Agent Active
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl border p-3 text-center border-blue-200 bg-blue-50">
            <p className="text-[#1E2A78] text-2xl font-bold">24</p>
            <p className="text-xs text-gray-600">Calls Today</p>
          </div>
          <div className="rounded-xl border p-3 text-center border-green-200 bg-green-50">
            <p className="text-[#166534] text-2xl font-bold">18</p>
            <p className="text-xs text-gray-600">Bookings Made</p>
          </div>
          <div className="rounded-xl border p-3 text-center border-purple-200 bg-purple-50">
            <p className="text-[#6B21A8] text-2xl font-bold">2m</p>
            <p className="text-xs text-gray-600">Avg. Call Time</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          {[
            {
              status: "Booking confirmed",
              user: "John Smith – Tomorrow at 3:00 PM",
              color: "bg-green-50 border-green-200",
              time: "2 min ago",
            },
            {
              status: "Call in progress",
              user: "Sarah Johnson – Product inquiry",
              color: "bg-blue-50 border-blue-200",
              time: "Active now",
            },
            {
              status: "Follow-up scheduled",
              user: "Mike Brown – Friday at 10:00 AM",
              color: "bg-yellow-50 border-yellow-200",
              time: "5 min ago",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl p-3 flex justify-between items-center ${item.color}`}
            >
              <div>
                <p className="font-medium text-[#111827]">{item.status}</p>
                <p className="text-xs text-gray-500">{item.user}</p>
              </div>
              <p className="text-xs text-[#1E2A78]">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function SetupStepsSection() {
  return (
    <section id="steps" className="relative z-10 py-28 px-6 bg-gradient-to-b from-white to-[#F9FAFB]/70 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0A0A] tracking-tight">
          Setup takes{" "}
          <span className="bg-gradient-to-r from-[#1E2A78] to-[#2DA8F8] bg-clip-text text-transparent">
            just 3 Steps
          </span>
        </h2>
        <p className="text-[#3B3B3B] text-lg max-w-3xl mx-auto leading-relaxed">
          Connect your tools and let Our AI Agent start automating your calls and bookings. <br/>No
          technical setup or training required.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            {/* Text */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold rounded-lg bg-[#2DA8F8] text-white shadow-md">
                  {step.id}
                </div>
                <span className="text-[#2DA8F8] font-medium text-sm">{step.time}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B1220] tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#3B3B3B] text-base md:text-lg leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>

            {/* Card */}
            <motion.div
              className="flex-1 flex justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              {step.card}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

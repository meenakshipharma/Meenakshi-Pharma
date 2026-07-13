import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Syringe,
  Pill,
  Sparkles,
  Activity,
  ShieldCheck,
  Heart,
  Truck,
  Check,
  MessageSquare,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { SERVICES } from "../utils/data";

const FLANKED_SERVICES = [
  // Left Column Nodes
  {
    id: 1,
    side: "left",
    title: "Oncology Products",
    tagline: "Anti-Cancer Care",
    description:
      "Catering to specialized oncology requirements with genuine anti-cancer molecules and emergency sourcing protocols.",
    icon: "Activity",
    stats: "S.O.S Procured",
  },
  {
    id: 2,
    side: "left",
    title: "Vaccines",
    tagline: "Cold Chain Logistics",
    description:
      "Adequate stock of vital pediatric, adult, and travel vaccines kept under rigid temperature parameters.",
    icon: "Syringe",
    stats: "2°C - 8°C Monitored",
  },
  {
    id: 3,
    side: "left",
    title: "General Medicines",
    tagline: "450+ Brand Partners",
    description:
      "Over 100,000+ SKUs readily available in our temperature-controlled warehouse for prompt retail orders.",
    icon: "Pill",
    stats: "100k+ SKUs Stocked",
  },
  // Right Column Nodes
  {
    id: 4,
    side: "right",
    title: "Speciality Medicines",
    tagline: "Super-Specialty Care",
    description:
      "Hormonal, nephrology, neurology, neuropsychiatry, and urology therapeutics promoted to professionals.",
    icon: "Sparkles",
    stats: "Specialist Approved",
  },
  {
    id: 5,
    side: "right",
    title: "Cosmetic Products",
    tagline: "Dermato-Cosmetic",
    description:
      "Ethically promoted dermatological solutions supplied directly to specialist doctors and skin clinics.",
    icon: "Heart",
    stats: "Direct Brand Sourced",
  },
  {
    id: 6,
    side: "right",
    title: "Import & Export",
    tagline: "Global Logistics Corridor",
    description:
      "International distribution supply channels facilitating imports and exports of vital pharmaceutical items.",
    icon: "Truck",
    stats: "Global Reach Ready",
  },
];

export default function Services() {
  const [activeItem, setActiveItem] = useState(2); // Vaccines default active

  const getIconNode = (iconName) => {
    switch (iconName) {
      case "Activity":
        return <Activity size={22} />;
      case "Syringe":
        return <Syringe size={22} />;
      case "Pill":
        return <Pill size={22} />;
      case "Sparkles":
        return <Sparkles size={22} />;
      case "Heart":
        return <Heart size={22} />;
      case "Truck":
        return <Truck size={22} />;
      default:
        return <Pill size={22} />;
    }
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case "distribution":
        return <Syringe size={28} className="text-primary" />;
      case "hospital":
        return <Pill size={28} className="text-primary" />;
      case "retail":
        return <Sparkles size={28} className="text-primary" />;
      default:
        return <Syringe size={28} className="text-primary" />;
    }
  };

  const activeData =
    FLANKED_SERVICES.find((item) => item.id === activeItem) ||
    FLANKED_SERVICES[1];

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pt-24 pb-16">
      {/* SECTION 1: FLANKED PPT INTERACTIVE MINDMAP */}
      <section className="section-padding bg-white relative overflow-hidden border-b border-slate-100">
        

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
          {/* 3-Column PPT Mindmap Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative min-h-[480px] py-6">
            {/* SVG Connecting Paths Background (Desktop Only) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none">
                {/* SVG gradients for path connections */}
                <defs>
                  <linearGradient
                    id="glowLeft"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#1BD3E4" />
                  </linearGradient>
                  <linearGradient
                    id="glowRight"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1BD3E4" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>

                {/* Left Side Connection Lines */}
                <motion.path
                  d="M 330 110 L 600 250"
                  stroke={activeItem === 1 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 1 ? 3 : 1.5}
                  strokeDasharray={activeItem === 1 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M 330 250 L 600 250"
                  stroke={activeItem === 2 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 2 ? 3 : 1.5}
                  strokeDasharray={activeItem === 2 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M 330 390 L 600 250"
                  stroke={activeItem === 3 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 3 ? 3 : 1.5}
                  strokeDasharray={activeItem === 3 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />

                {/* Right Side Connection Lines */}
                <motion.path
                  d="M 870 110 L 600 250"
                  stroke={activeItem === 4 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 4 ? 3 : 1.5}
                  strokeDasharray={activeItem === 4 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M 870 250 L 600 250"
                  stroke={activeItem === 5 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 5 ? 3 : 1.5}
                  strokeDasharray={activeItem === 5 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M 870 390 L 600 250"
                  stroke={activeItem === 6 ? "#1BD3E4" : "#e2e8f0"}
                  strokeWidth={activeItem === 6 ? 3 : 1.5}
                  strokeDasharray={activeItem === 6 ? "none" : "5 5"}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </div>

            {/* Column 1: Left Side Nodes (3 items, text right, icon right) */}
            <div className="lg:col-span-4 flex flex-col gap-12 z-10">
              {FLANKED_SERVICES.filter((n) => n.side === "left").map(
                (item, idx) => {
                  const isActive = activeItem === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setActiveItem(item.id)}
                      onClick={() => setActiveItem(item.id)}
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        delay: idx * 0.1,
                      }}
                      className="flex items-center gap-6 cursor-pointer group text-left justify-start select-none"
                    >
                      {/* Text Container */}
                      <div className="max-w-[260px] md:max-w-[320px]">
                        <h3
                          className={`text-base font-black uppercase tracking-wider transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-slate-900 group-hover:text-primary/70"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium hidden md:block">
                          {item.description}
                        </p>
                      </div>

                      {/* Circular Icon Container */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 shadow-sm ${
                          isActive
                            ? "bg-dark-teal text-[#1BD3E4] border-[#1BD3E4] scale-110 shadow-[0_0_20px_rgba(27,211,228,0.25)]"
                            : "bg-white text-slate-500 border-slate-200 group-hover:border-primary/50 group-hover:text-primary"
                        }`}
                      >
                        {getIconNode(item.icon)}
                      </div>
                    </motion.div>
                  );
                },
              )}
            </div>

            {/* Column 2: Central Processing Gear Hub */}
            <div className="lg:col-span-4 flex items-center justify-center z-10 my-8 lg:my-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
                className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-slate-50 border-4 border-slate-200 flex flex-col items-center justify-center p-8 text-center shadow-lg relative"
              >
                {/* Slow rotating gear watermark backdrop */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none animate-spin-slow">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-48 h-48 text-slate-900"
                    fill="currentColor"
                  >
                    <path d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm38.1-15.6l-5.6-3.2c-.4-.2-.7-.7-.7-1.2.3-2.1.2-4.3-.4-6.3-.1-.5 0-1 .4-1.3l4.7-4.3c.7-.6.8-1.7.3-2.5l-4-6.9c-.5-.9-1.6-1.2-2.5-.7l-5.6 3.2c-.4.2-.9.2-1.3-.1-1.7-1.3-3.6-2.2-5.7-2.8-.5-.1-.8-.5-1-1l-1.9-6.1c-.3-.9-1.2-1.6-2.2-1.6h-8c-1 0-1.9.6-2.2 1.6l-1.9 6.1c-.1.5-.5.8-1 1-2.1.6-4 1.5-5.7 2.8-.4.3-.9.3-1.3.1l-5.6-3.2c-.9-.5-2-.2-2.5.7l-4 6.9c-.5.8-.4 1.9.3 2.5l4.7 4.3c.4.3.5.8.4 1.3-.6 2-.7 4.2-.4 6.3 0 .5-.3 1-.7 1.2l-5.6 3.2c-.9.5-1.2 1.6-.7 2.5l4 6.9c.5.9 1.6 1.2 2.5.7l5.6-3.2c.4-.2.9-.2 1.3.1 1.7 1.3 3.6 2.2 5.7 2.8.5.1.8.5 1 1l1.9 6.1c.3.9 1.2 1.6 2.2 1.6h8c1 0 1.9-.6 2.2-1.6l1.9-6.1c.1-.5.5-.8 1-1 2.1-.6 4-1.5 5.7-2.8.4-.3.9-.3 1.3-.1l5.6 3.2c.9.5 2 .2 2.5-.7l4-6.9c.6-.9.4-2-.3-2.6z" />
                  </svg>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center relative z-10"
                  >
                    {/* Active Icon Bubble */}
                    <div className="w-14 h-14 rounded-3xl bg-dark-teal text-primary flex items-center justify-center shadow-md mb-4 animate-float">
                      {getIconNode(activeData.icon)}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1BD3E4] mb-1">
                      {activeData.tagline}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                      {activeData.title}
                    </h3>

                    <span className="text-[10px] font-mono font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeData.stats}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Column 3: Right Side Nodes (3 items, text left, icon left) */}
            <div className="lg:col-span-4 flex flex-col gap-12 z-10">
              {FLANKED_SERVICES.filter((n) => n.side === "right").map(
                (item, idx) => {
                  const isActive = activeItem === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setActiveItem(item.id)}
                      onClick={() => setActiveItem(item.id)}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        delay: idx * 0.1,
                      }}
                      className="flex items-center gap-6 cursor-pointer group text-left justify-start select-none"
                    >
                      {/* Circular Icon Container */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 shadow-sm ${
                          isActive
                            ? "bg-dark-teal text-[#1BD3E4] border-[#1BD3E4] scale-110 shadow-[0_0_20px_rgba(27,211,228,0.25)]"
                            : "bg-white text-slate-500 border-slate-200 group-hover:border-primary/50 group-hover:text-primary"
                        }`}
                      >
                        {getIconNode(item.icon)}
                      </div>

                      {/* Text Container */}
                      <div className="max-w-[260px] md:max-w-[320px]">
                        <h3
                          className={`text-base font-black uppercase tracking-wider transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-slate-900 group-hover:text-primary/70"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium hidden md:block">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>

          {/* Interactive Presentation content card below */}
          <div className="mt-12 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-[32px] p-8 shadow-sm text-center relative z-20 min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-[10px] font-black uppercase text-primary tracking-widest block mb-2">
                  {activeData.tagline}
                </span>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-wider mb-3">
                  {activeData.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {activeData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

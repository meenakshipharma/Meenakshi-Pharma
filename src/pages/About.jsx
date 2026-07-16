import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Shield,
  Target,
  Calendar,
  Server,
  Award,
  ChevronRight,
} from "lucide-react";
import Lightbox from "../components/Lightbox";
import { TIMELINE, INFRASTRUCTURE, ABOUT_CONTENT, VISION_MISSION, ABOUT_CHECKLIST } from "../utils/data";

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pt-24">
      {/* INTRODUCTION SECTION (Split Layout - Mapped to ABOUT_CONTENT) */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Premium Image Frame Layout with custom medical vector decorations */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Back offset box */}
              <div className="absolute inset-0 bg-dark-teal rounded-[32px] translate-x-4 translate-y-4 -rotate-2 z-0" />

              {/* Floating pulse circles decoration */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-cyan-100 rounded-full animate-ping opacity-45 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-emerald-100 rounded-full animate-pulse opacity-30 pointer-events-none" />

              {/* Main Image Panel */}
              <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-50 aspect-[4/4.5] w-full">
                <img
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Floating clinical badge on image */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-cyan-100 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">
                    GDP CERTIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Text details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3 block">
                {ABOUT_CONTENT.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Two Decades of Absolute{" "}
                <span className="text-primary">Integrity</span> & Healing Trust
              </h2>
              <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed">
                <p>{ABOUT_CONTENT.shortDescription1}</p>
                <p>{ABOUT_CONTENT.shortDescription2}</p>

                {/* Toggled Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 pt-4 border-t border-slate-100 mt-4 text-slate-500"
                  >
                    <p>{ABOUT_CONTENT.expandedDescription1}</p>
                    <p>{ABOUT_CONTENT.expandedDescription2}</p>
                  </motion.div>
                )}
              </div>

              {/* Unique feature checklist grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 w-full border-t border-slate-100 pt-6">
                {ABOUT_CHECKLIST.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-primary text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-8 py-3.5 bg-primary hover:bg-[#16b3c2] text-white text-xs font-black rounded-full shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest inline-block cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION (Uniform Normal Cards Layout) */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="bg-slate-50 border border-slate-300 rounded-[28px] p-8 md:p-10 shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-cyan-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-primary flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {VISION_MISSION.vision.heading}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {VISION_MISSION.vision.text}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 border border-slate-300 rounded-[28px] p-8 md:p-10 shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-cyan-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-primary flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {VISION_MISSION.mission.heading}
                </h3>
                <ul className="flex flex-col gap-4 text-slate-500 text-sm leading-relaxed">
                  {VISION_MISSION.mission.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR INFRASTRUCTURE (Masonry Layout) */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              OUR INFRASTRUCTURE
            </h2>
          </div>

          {/* Masonry Layout grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {INFRASTRUCTURE.map((item, index) => {
              // Create dynamic spans to build a masonry mosaic layout
              const heightClass =
                index % 3 === 0
                  ? "aspect-[4/3]"
                  : index % 3 === 1
                    ? "aspect-square"
                    : "aspect-[16/10]";
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${heightClass} flex flex-col justify-between`}
                >
                  <div className="w-full h-full relative overflow-hidden flex-grow">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0F172A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-lg shadow">
                        Expand Facility View
                      </span>
                    </div>
                  </div>
                  <div className="p-5 border-t border-slate-100 bg-white flex-shrink-0">
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox slide popup */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={INFRASTRUCTURE}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}

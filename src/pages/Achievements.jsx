import React, { useState } from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../utils/data";
import Lightbox from "../components/Lightbox";

export default function Achievements() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pt-24">
      {/* MASONRY GALLERY SECTION */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center mb-12 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Achievements
            </h2>
            <p className="text-slate-500 mt-2.5 text-xs md:text-sm">
              Click any certificate or award photo to view it full screen with
              catalog descriptions.
            </p>
          </div>

          {/* Clean CSS Columns Masonry (Genuine layout, responsive, break-avoid) */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
            {ACHIEVEMENTS.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="break-inside-avoid overflow-hidden rounded-[20px] shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer border border-slate-200/60 bg-white"
                >
                  <div className="relative overflow-hidden w-full h-full bg-slate-100 flex items-center justify-center">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0F172A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                      {/* <span className="text-[0.65rem] font-bold text-accent uppercase tracking-wider mb-1 leading-none">
                        Milestone Award
                      </span> */}
                      <h4 className="text-white font-bold text-sm tracking-wide leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox full-screen slideshow */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={ACHIEVEMENTS}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}

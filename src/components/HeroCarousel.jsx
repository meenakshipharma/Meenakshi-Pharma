import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import heroImg from "../assets/images/hero.webp";

const slides = [
  {
    id: 1,
    url: heroImg,
    alt: "Meenakshi Pharma Distribution Facility",
    title: "State-of-the-Art Distribution Hub",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    alt: "Pharmaceutical Warehouse & Cold Storage",
    title: "Temperature Controlled Supply Chain",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Quality Assurance and Lab Testing",
    title: "Uncompromising Quality & GDP Compliance",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
    alt: "Trusted Healthcare Delivery",
    title: "Partnering with Global Healthcare Leaders",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-square border-2 sm:border-4 border-white backdrop-blur-md group select-none ring-1 ring-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].alt}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 4.8, ease: "linear" }}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B4E8C]/80 via-slate-900/20 to-transparent"></div>

          {/* Subtitle Caption */}
          <div className="absolute bottom-7 sm:bottom-10 left-3 right-3 sm:left-6 sm:right-6 z-10 text-white drop-shadow-md">
            <span className="inline-block text-[9px] sm:text-[11px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-[#1C8A3C] text-white mb-1 sm:mb-2 shadow-xs">
              Meenakshi Pharma
            </span>
            <h3 className="text-xs sm:text-lg lg:text-xl font-bold leading-snug text-white line-clamp-1 sm:line-clamp-none">
              {slides[currentIndex].title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-[#0B4E8C] hover:bg-[#1C8A3C] hover:text-white items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer border border-slate-100"
        aria-label="Previous Slide"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-[#0B4E8C] hover:bg-[#1C8A3C] hover:text-white items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer border border-slate-100"
        aria-label="Next Slide"
      >
        <FiChevronRight className="text-xl" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-1.5 bg-[#0B4E8C]/50 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-4 sm:w-6 bg-[#1C8A3C] shadow-sm"
                : "w-1.5 sm:w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

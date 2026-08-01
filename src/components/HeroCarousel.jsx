import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import heroImg from "../assets/images/hero.png";

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
      className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-8 border-white/50 backdrop-blur-sm group select-none"
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
          {/* Professional Healthcare Blue/Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand/10 to-transparent"></div>

          {/* Subtitle Caption */}
          <div className="absolute bottom-12 left-6 right-6 z-10 text-white drop-shadow-md hidden sm:block">
            <p className="text-xs uppercase tracking-wider font-semibold text-blue-200 mb-0.5">
              Meenakshi Pharma
            </p>
            <h3 className="text-base text-white sm:text-lg font-serif font-semibold leading-snug">
              {slides[currentIndex].title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Desktop only, hidden on mobile) */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand items-center justify-center shadow-md backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Previous Slide"
      >
        <FiChevronLeft className="text-xl" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand items-center justify-center shadow-md backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Next Slide"
      >
        <FiChevronRight className="text-xl" />
      </button>

      {/* Small Clickable Pagination Dots (Bottom Center) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-900/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-6 bg-white shadow-sm"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Truck, ShieldCheck, Store, ThermometerSnowflake, FileText, ShoppingBag, ChevronLeft, ChevronRight, Tablet, Database, Check, Syringe, Pill, Sparkles } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import { ABOUT_CONTENT, ABOUT_CHECKLIST, HERO_SLIDES, COMPANY_STATS, HOME_SERVICES_CARDS } from "../utils/data";

// Storyset Medical Illustration 1
function MedicalStorageIllustration() {
  return (
    <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent pointer-events-none" />
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="270" r="160" fill="url(#grad-circle-1)" opacity="0.15" />
        <g opacity="0.3" stroke="#1BD3E4" strokeWidth="1" strokeDasharray="3 3">
          <line x1="100" y1="250" x2="400" y2="250" />
          <line x1="250" y1="100" x2="250" y2="400" />
          <circle cx="250" cy="250" r="120" fill="none" />
        </g>
        <defs>
          <radialGradient id="grad-circle-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1BD3E4" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
          <linearGradient id="capsule-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BD3E4" />
            <stop offset="100%" stopColor="#082529" />
          </linearGradient>
          <linearGradient id="capsule-grad-white" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        <g className="animate-float" style={{ transformOrigin: "center" }}>
          <g transform="translate(180, 140)">
            <path d="M40 0 H80 A30 30 0 0 1 110 30 V60 H10 V30 A30 30 0 0 1 40 0 Z" fill="url(#capsule-grad-white)" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M10 60 H110 V90 A30 30 0 0 1 80 120 H40 A30 30 0 0 1 10 90 Z" fill="url(#capsule-grad-blue)" />
            <rect x="52" y="48" width="16" height="24" rx="2" fill="#FFFFFF" opacity="0.9" />
            <rect x="48" y="52" width="24" height="16" rx="2" fill="#FFFFFF" opacity="0.9" />
          </g>
        </g>

        <g className="animate-float-slow">
          <path d="M90 140 h15 v-15 h10 v15 h15 v10 h-15 v15 h-10 v-15 h-15 z" fill="#1BD3E4" opacity="0.7" />
          <path d="M380 280 h10 v-10 h8 v10 h10 v8 h-10 v10 h-8 v-10 h-10 z" fill="#10B981" opacity="0.6" />
        </g>

        <g transform="translate(80, 260)" className="animate-pulse">
          <rect x="0" y="0" width="140" height="90" rx="14" fill="#FFFFFF" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" stroke="#E2E8F0" strokeWidth="1" />
          <rect x="15" y="15" width="55" height="7" rx="3.5" fill="#082529" opacity="0.8" />
          <rect x="15" y="28" width="110" height="1.5" fill="#E2E8F0" />
          <rect x="15" y="38" width="85" height="5" rx="2.5" fill="#64748B" opacity="0.7" />
          <rect x="15" y="48" width="60" height="5" rx="2.5" fill="#64748B" opacity="0.7" />
          <circle cx="115" cy="43" r="6" fill="#10B981" />
          <path d="M112 43 l2 2 l4 -4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(310, 160)" className="animate-float">
          <path d="M30 0 h20 v20 l40 70 A15 15 0 0 1 77 110 H3 A15 15 0 0 1 -7 90 l40 -70 z" fill="none" stroke="#64748B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 50 l56 0 l22 36 A10 10 0 0 1 81 100 H-1 A10 10 0 0 1 -9 86 z" fill="#1BD3E4" opacity="0.3" />
          <circle cx="35" cy="70" r="4.5" fill="#1BD3E4" />
          <circle cx="45" cy="80" r="3" fill="#1BD3E4" />
          <circle cx="25" cy="85" r="5" fill="#10B981" />
        </g>

        <ellipse cx="250" cy="410" rx="160" ry="12" fill="#E2E8F0" opacity="0.4" />
      </svg>
    </div>
  );
}

// Storyset Medical Illustration 2
function DeliveryIllustration() {
  return (
    <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent pointer-events-none" />
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="270" r="160" fill="url(#grad-circle-2)" opacity="0.15" />
        <g opacity="0.25" stroke="#1BD3E4" strokeWidth="1" strokeDasharray="3 3">
          <circle cx="250" cy="230" r="140" fill="none" />
          <path d="M100 230 C 150 180, 350 180, 400 230" fill="none" strokeWidth="1.5" />
        </g>
        <defs>
          <radialGradient id="grad-circle-2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1BD3E4" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
          <linearGradient id="van-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BD3E4" />
            <stop offset="100%" stopColor="#082529" />
          </linearGradient>
        </defs>

        <g transform="translate(320, 100)" className="animate-float">
          <path d="M15 0 C 6.7 0, 0 6.7, 0 15 C 0 26.2, 15 42, 15 42 C 15 42, 30 26.2, 30 15 C 30 6.7, 23.3 0, 15 0 Z" fill="#10B981" />
          <circle cx="15" cy="15" r="5" fill="#FFFFFF" />
        </g>

        <g transform="translate(90, 130)" className="animate-pulse">
          <rect x="0" y="0" width="60" height="90" rx="30" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="30" y1="20" x2="30" y2="60" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
          <line x1="30" y1="35" x2="30" y2="60" stroke="#1BD3E4" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="68" r="12" fill="#1BD3E4" />
          <circle cx="30" cy="68" r="5" fill="#FFFFFF" />
          <text x="30" y="112" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#082529">4°C Secure</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "center" }}>
          <g transform="translate(140, 200)">
            <ellipse cx="110" cy="120" rx="90" ry="10" fill="#E2E8F0" opacity="0.6" />
            <path d="M10 30 h130 a15 15 0 0 1 15 15 v45 a10 10 0 0 1 -10 10 h-135 a10 10 0 0 1 -10 -10 v-45 a15 15 0 0 1 15 -15 z" fill="url(#van-blue)" />
            <path d="M140 30 h25 a5 5 0 0 1 5 5 v30 l-30 10 z" fill="#FFFFFF" opacity="0.25" />
            <circle cx="45" cy="100" r="18" fill="#082529" stroke="#E2E8F0" strokeWidth="3" />
            <circle cx="45" cy="100" r="6" fill="#FFFFFF" />
            <circle cx="125" cy="100" r="18" fill="#082529" stroke="#E2E8F0" strokeWidth="3" />
            <circle cx="125" cy="100" r="6" fill="#FFFFFF" />
            <rect x="75" y="48" width="12" height="28" rx="2" fill="#FFFFFF" />
            <rect x="67" y="56" width="28" height="12" rx="2" fill="#FFFFFF" />
          </g>
        </g>

        <g className="animate-float-slow">
          <path d="M380 180 h12 v-12 h8 v12 h12 v8 h-12 v12 h-8 v-12 h-12 z" fill="#1BD3E4" opacity="0.8" />
          <path d="M80 270 h10 v-10 h6 v10 h10 v6 h-10 v10 h-6 v-10 h-10 z" fill="#10B981" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

// Storyset Medical Illustration 3
function QualityIllustration() {
  return (
    <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent pointer-events-none" />
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="270" r="160" fill="url(#grad-circle-3)" opacity="0.15" />
        <g opacity="0.25" stroke="#1BD3E4" strokeWidth="1" strokeDasharray="3 3">
          <circle cx="250" cy="240" r="110" fill="none" />
          <path d="M150 150 L 350 350" stroke="#1BD3E4" strokeWidth="1" />
          <path d="M350 150 L 150 350" stroke="#1BD3E4" strokeWidth="1" />
        </g>
        <defs>
          <radialGradient id="grad-circle-3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1BD3E4" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0D2E33" />
          </linearGradient>
        </defs>

        <g className="animate-float" style={{ transformOrigin: "center" }}>
          <g transform="translate(185, 140)">
            <path d="M0 10 C 40 10, 60 0, 65 0 C 70 0, 90 10, 130 10 C 130 70, 65 120, 65 120 C 65 120, 0 70, 0 10 Z" fill="url(#shield-grad)" stroke="#FFFFFF" strokeWidth="3.5" filter="drop-shadow(0 12px 25px rgba(16,185,129,0.25))" />
            <path d="M40 55 L 58 73 L 92 38" stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        <g transform="translate(70, 240)" className="animate-pulse">
          <rect x="0" y="0" width="110" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
          <circle cx="30" cy="30" r="14" fill="#1BD3E4" opacity="0.2" />
          <path d="M25 30 l4 4 l7 -7" stroke="#1BD3E4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="55" y="20" width="40" height="6" rx="3" fill="#64748B" opacity="0.8" />
          <rect x="55" y="32" width="30" height="4" rx="2" fill="#94A3B8" opacity="0.7" />
          <rect x="15" y="56" width="80" height="1.5" fill="#E2E8F0" />
          <text x="55" y="70" textAnchor="middle" fontSize="8" fontWeight="black" fill="#10B981" tracking="wider">GDP COMPLIANT</text>
        </g>

        <g className="animate-float" style={{ transformOrigin: "center" }}>
          <g transform="translate(320, 230)">
            <rect x="0" y="0" width="110" height="70" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="drop-shadow(0 8px 20px rgba(0,0,0,0.05))" />
            <rect x="0" y="0" width="110" height="18" rx="10" fill="#082529" className="rounded-b-none" />
            <text x="12" y="12" fontSize="7" fontWeight="bold" fill="#FFFFFF">100% GENUINE</text>
            <line x1="15" y1="35" x2="15" y2="55" stroke="#64748B" strokeWidth="2.5" />
            <line x1="22" y1="35" x2="22" y2="55" stroke="#64748B" strokeWidth="1" />
            <line x1="26" y1="35" x2="26" y2="55" stroke="#64748B" strokeWidth="3" />
            <line x1="33" y1="35" x2="33" y2="55" stroke="#64748B" strokeWidth="1.5" />
            <line x1="38" y1="35" x2="38" y2="55" stroke="#64748B" strokeWidth="2" />
            <line x1="44" y1="35" x2="44" y2="55" stroke="#64748B" strokeWidth="1" />
            <text x="100" y="50" textAnchor="end" fontSize="11" fontWeight="black" fill="#082529">86+ BRANDS</text>
          </g>
        </g>

        <g className="animate-float-slow">
          <path d="M120 120 h10 v-10 h8 v10 h10 v8 h-10 v10 h-8 v-10 h-10 z" fill="#1BD3E4" opacity="0.7" />
          <path d="M370 120 h10 v-10 h8 v10 h10 v8 h-10 v10 h-8 v-10 h-10 z" fill="#10B981" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  // Slider State Management
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef(null);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay intervals with pause on hover
  useEffect(() => {
    if (isHovered) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered, activeSlide]);

  const slides = HERO_SLIDES;
  const currentSlide = slides[activeSlide];

  return (
    <div className="relative bg-[#F8FCFD] min-h-screen">
      
      {/* SECTION 1: REDESIGNED HERO */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden bg-white"
      >
        {/* Soft abstract medical shape & light cyan gradients background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-65">
          {/* Blurred cyan circles */}
          <div className="absolute top-20 right-[-10%] w-[55%] h-[55%] bg-cyan-100/30 rounded-full blur-[130px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-50/40 rounded-full blur-[110px]" />
          
          {/* Light abstract medical cross shapes in background */}
          <svg className="absolute top-1/4 left-10 w-24 h-24 text-cyan-200/20 fill-current" viewBox="0 0 24 24">
            <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
          </svg>
          <svg className="absolute bottom-1/4 right-16 w-32 h-32 text-cyan-200/15 fill-current" viewBox="0 0 24 24">
            <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
          </svg>
          
          {/* Subtle Hexagon shapes in background */}
          <svg className="absolute top-12 right-1/3 w-20 h-20 text-cyan-200/15 fill-none stroke-current stroke-1" viewBox="0 0 100 100">
            <polygon points="50,15 90,38 90,83 50,105 10,83 10,38" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 z-10 w-full relative">
          
          {/* Slider Content Wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[68vh]"
            >
              
              {/* SLIDER LEFT CONTENT */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Badge (Text Slide from Left) */}
                <motion.div
                  key={`badge-${currentSlide.id}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-bold text-slate-500 tracking-tight mb-3 text-left"
                >
                  {currentSlide.badge}
                </motion.div>

                {/* Main Heading (Text Slide from Left) */}
                <motion.h5
                  key={`heading-${currentSlide.id}`}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.2] text-[#0F172A] tracking-tight text-left"
                >
                  {currentSlide.id === 1 ? (
                    <>
                      Trichy's Leading <span className="text-primary">Pharma</span> Distributor
                    </>
                  ) : (
                    currentSlide.heading
                  )}
                </motion.h5>

              </div>

              {/* SLIDER RIGHT CONTENT */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]">
                
                {currentSlide.type === "illustration-1" && (
                  <motion.div
                    key="ill-1"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full flex items-center justify-center z-10"
                  >
                    <MedicalStorageIllustration />
                  </motion.div>
                )}
                {currentSlide.type === "illustration-2" && (
                  <motion.div
                    key="ill-2"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full flex items-center justify-center z-10"
                  >
                    <DeliveryIllustration />
                  </motion.div>
                )}
                {currentSlide.type === "illustration-3" && (
                  <motion.div
                    key="ill-3"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full flex items-center justify-center z-10"
                  >
                    <QualityIllustration />
                  </motion.div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Left/Right Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] lg:left-[-40px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-primary hover:text-white border border-cyan-100 rounded-xl flex items-center justify-center text-slate-700 transition-all duration-300 shadow-[0_6px_15px_-4px_rgba(27,211,228,0.15)] z-20 cursor-pointer focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-primary hover:text-white border border-cyan-100 rounded-xl flex items-center justify-center text-slate-700 transition-all duration-300 shadow-[0_6px_15px_-4px_rgba(27,211,228,0.15)] z-20 cursor-pointer focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Elegant Circular Pagination Dots */}
          <div className="flex justify-center items-center gap-3.5 mt-8 relative z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeSlide === idx ? "w-7 bg-primary opacity-100" : "w-2.5 bg-slate-300 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: COMPANY STATS */}
      <section className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 border-r last:border-0 border-slate-100 lg:odd:border-r lg:even:border-r">
                <span className="text-3xl md:text-5xl font-black text-primary mb-2 flex items-center justify-center">
                  <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 3: ABOUT MEENAKSHI PHARMA */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-1/3 left-[-10%] w-[35%] h-[35%] bg-cyan-50/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-[-5%] w-[30%] h-[30%] bg-emerald-50/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
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
                  <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">GDP CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* Right side: Text details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3 block">
                {ABOUT_CONTENT.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Two Decades of Absolute <span className="text-primary">Integrity</span> & Healing Trust
              </h2>
              <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed">
                <p>
                  {ABOUT_CONTENT.shortDescription1}
                </p>
                <p>
                  {ABOUT_CONTENT.shortDescription2}
                </p>
              </div>

              {/* Unique feature checklist grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 w-full border-t border-slate-100 pt-6">
                {ABOUT_CHECKLIST.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-primary text-xs font-bold">✓</span>
                    <span className="text-xs font-bold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="px-8 py-3.5 bg-primary hover:bg-[#16b3c2] text-white text-xs font-black rounded-full shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: OUR SERVICES (Organic Leaf/Teardrop Design) */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="w-16 h-1 bg-[#1BD3E4] rounded-full mt-4" />
          </div>

          {/* Single Row 3-Column Grid — data from HOME_SERVICES_CARDS in data.js */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch pt-8">
            {HOME_SERVICES_CARDS.map((card) => {
              const IconNode = card.icon === "Syringe" ? <Syringe size={20} strokeWidth={2} /> : card.icon === "Pill" ? <Pill size={20} strokeWidth={2} /> : <Sparkles size={20} strokeWidth={2} />;
              return (
                <div key={card.id} className="bg-slate-50 border border-slate-300 rounded-[28px] p-8 md:p-10 text-left transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-cyan-300 group relative flex flex-col justify-between h-full shadow-md min-h-[300px]">
                  <span className="absolute top-4 right-8 text-6xl font-mono font-black text-slate-200/40 select-none group-hover:text-primary/10 transition-colors duration-300">
                    {card.number}
                  </span>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#1BD3E4] flex items-center justify-center shadow-sm mb-6 group-hover:bg-dark-teal group-hover:text-[#1BD3E4] group-hover:border-dark-teal transition-all duration-300">
                      {IconNode}
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-wider text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

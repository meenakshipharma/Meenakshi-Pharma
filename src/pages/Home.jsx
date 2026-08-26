import React from "react";
import SEO from "../components/SEO";
import FAQSection from "../components/FAQSection";
import { motion, AnimatePresence } from "framer-motion";

const homeFAQs = [
  {
    question: "What is Meenakshi Pharma?",
    answer: "Meenakshi Pharma is a trusted pharmaceutical wholesaler and authorized stockist established in 1998, based in Thillai Nagar, Tiruchirappalli (Trichy), Tamil Nadu.",
  },
  {
    question: "Where is Meenakshi Pharma located in Trichy?",
    answer: "Meenakshi Pharma is located at C-135-A, Ground & 1st Floor, 5th Cross East, Thillai Nagar, Trichy - 620018, Tamil Nadu, India.",
  },
  {
    question: "What pharmaceutical products does Meenakshi Pharma supply?",
    answer: "Meenakshi Pharma supplies general medicines, specialty pharmaceuticals (oncology, cardiology, nephrology), cosmetic dermatology products, and nutritional supplements to pharmacies, hospitals, and clinics.",
  },
  {
    question: "Does Meenakshi Pharma serve customers across Trichy and Tamil Nadu?",
    answer: "Yes, Meenakshi Pharma serves retail pharmacies, hospitals, clinics, and healthcare institutions across Trichy, Tiruchirappalli, and surrounding regions in Tamil Nadu.",
  },
  {
    question: "How can I contact Meenakshi Pharma for orders or inquiries?",
    answer: "You can reach Meenakshi Pharma by calling 0431-2740311, 9942982301, 9942982302 or emailing mpharma98@gmail.com and meenakshipharmatry@gmail.com.",
  },
];

const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
    "@id": "https://meenakshipharma.com/#organization",
    "name": "Meenakshi Pharma",
    "alternateName": ["Meenakshi Pharma Trichy", "Meenakshi Pharma Tiruchirappalli"],
    "url": "https://meenakshipharma.com/",
    "logo": "https://meenakshipharma.com/logo_1.png",
    "image": "https://meenakshipharma.com/hero.webp",
    "description": "Established in 1998 in Thillai Nagar, Tiruchirappalli, Meenakshi Pharma is a trusted pharmaceutical wholesaler and authorized stockist for leading pharma brands in Trichy, Tamil Nadu.",
    "telephone": ["+91-431-2740311", "+91-9942982301", "+91-9942982302"],
    "email": ["mpharma98@gmail.com", "meenakshipharmatry@gmail.com"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C-135-A, Ground & 1st Floor, 5th Cross East, Thillai Nagar",
      "addressLocality": "Tiruchirappalli",
      "addressRegion": "Tamil Nadu",
      "postalCode": "620018",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.8288",
      "longitude": "78.6852",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00",
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61581812965748",
      "https://x.com/meenakshi_pharm",
      "https://www.linkedin.com/company/meenakshi-pharma/",
      "https://www.instagram.com/meenakshi_pharma_",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://meenakshipharma.com/#website",
    "url": "https://meenakshipharma.com/",
    "name": "Meenakshi Pharma",
    "publisher": {
      "@id": "https://meenakshipharma.com/#organization",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Customer Testimonial - Meenakshi Pharma",
    "description": "Customer testimonial about Meenakshi Pharma cold storage, logistics hub, and pharmaceutical distribution in Trichy.",
    "thumbnailUrl": [
      "https://meenakshipharma.com/testimonial-thumbnail.jpg",
      "https://meenakshipharma.com/testimonial-thumbnail.webp"
    ],
    "uploadDate": "2026-08-04T12:14:32+05:30",
    "contentUrl": "https://meenakshipharma.com/assets/srccc3-DPyZh0ED.webm",
    "duration": "PT25S"
  },
];
import {
  FiActivity,
  FiTruck,
  FiShield,
  FiUsers,
  FiBox,
  FiTrendingUp,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import HeroCarousel from "../components/HeroCarousel";
import heroImg from "../assets/images/hero.webp";
// import testimonialVideo1 from "../assets/videos/srccc.mp4";
// import testimonialVideo2 from "../assets/videos/srccc1.mp4";
import testimonialVideo3 from "../assets/videos/srccc3.webm";
import testimonialVideo4 from "../assets/videos/srccc4.webm";
import testimonialVideo5 from "../assets/videos/srccc5.webm";
import testimonialVideo6 from "../assets/videos/srccc6.webm";
import thumnail1 from "../assets/images/thumbnail1.webp"
import thumnail2 from "../assets/images/thumbnail2.webp"
import thumnail3 from "../assets/images/thumbnail3.webp"
import thumnail4 from "../assets/images/thumbnail4.webp"

import { useMotionValue, animate, useInView } from "framer-motion";
import { home, about, services } from "../data/content";
import { iconMap } from "../utils/iconMap";

const Counter = ({ target, prefix = "", suffix = "", duration = 3.5 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    if (!isInView) return;

    const numericTarget = typeof target === "number" ? target : parseFloat(target) || 0;

    const controls = animate(count, numericTarget, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString());
      },
    });
    return controls.stop;
  }, [isInView, count, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [playingId, setPlayingId] = React.useState(null);
  const [isMutedMap, setIsMutedMap] = React.useState({});
  const videoRefs = React.useRef({});

  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);

  const testimonialItems = [
    {
      id: 0,
      name: "Ramesh",
      title: "Proprietor, Sri Medicals",
      quote: "Wide range of quality products and fast support from the Meenakshi team.",
      rating: 5,
      video: testimonialVideo3,
      poster: thumnail1,
    },
    {
      id: 1,
      name: "Karthik",
      title: "Manager, Healthcare Partner",
      quote: "Trusted partner for our business. Professional and customer-friendly.",
      rating: 5,
      video: testimonialVideo4,
      poster: thumnail2,
    },
    {
      id: 2,
      name: "Senthil Kumar",
      title: "Director, Life Care Supplies",
      quote: "Advanced cold storage and temperature compliance for sensitive medications.",
      rating: 5,
      video: testimonialVideo5,
      poster: thumnail3,
    },
    {
      id: 3,
      name: "Venkatesh",
      title: "Owner, Prime Pharma",
      quote: "Reliable pharmaceutical stockist with exceptional service and prompt delivery.",
      rating: 5,
      video: testimonialVideo6,
      poster:thumnail4,
    },
  ];

  const total = testimonialItems.length;

  const pauseAllVideos = () => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setPlayingId(null);
    setIsMutedMap({});
  };

  const handlePrev = () => {
    pauseAllVideos();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    pauseAllVideos();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleSelect = (idx) => {
    if (idx === activeIndex) return;
    pauseAllVideos();
    setActiveIndex(idx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const togglePlay = (e, item) => {
    e.stopPropagation();
    const video = videoRefs.current[item.id];
    if (!video) return;

    if (playingId === item.id) {
      video.pause();
      setPlayingId(null);
    } else {
      pauseAllVideos();
      const shouldMute = isMutedMap[item.id] ?? false;
      video.muted = shouldMute;
      video.play().catch(() => {
        // Fallback if browser restricts unmuted autoplay/play
        video.muted = true;
        setIsMutedMap((prev) => ({ ...prev, [item.id]: true }));
        video.play();
      });
      setPlayingId(item.id);
    }
  };

  const toggleMute = (e, item) => {
    e.stopPropagation();
    const video = videoRefs.current[item.id];
    const currentMuted = isMutedMap[item.id] ?? false;
    const newMuted = !currentMuted;

    setIsMutedMap((prev) => ({
      ...prev,
      [item.id]: newMuted,
    }));

    if (video) {
      video.muted = newMuted;
    }
  };

  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-[#F5F7FA] overflow-hidden select-none">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 lg:mb-12"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold text-xs tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B4E8C] tracking-tight mb-3">
            What Our Partners Say
          </h2>

          <div className="flex justify-center items-center gap-1.5 mt-2">
            <div className="h-1 w-7 rounded-full bg-[#0B4E8C]"></div>
            <div className="h-1 w-7 rounded-full bg-[#1C8A3C]"></div>
            <div className="h-1 w-7 rounded-full bg-[#E31E24]"></div>
          </div>
        </motion.div>

        {/* Carousel Outer Container with Touch Swipe Support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-6xl mx-auto px-1 sm:px-6 md:px-12 flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[570px]"
        >
          {/* Navigation Arrow Left */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
            onClick={handlePrev}
            className="absolute left-1 sm:left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white text-[#0B4E8C] rounded-full shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-[#0B4E8C] hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>

          {/* Cards Track - 3D Positioning with Framer Motion */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
            {testimonialItems.map((item, idx) => {
              const diff = (idx - activeIndex + total) % total;
              const isCenter = diff === 0;
              const isRight = diff === 1;
              const isLeft = diff === total - 1;

              let xVal = "0%";
              let scaleVal = 1;
              let opacityVal = 1;
              let zIndexVal = 30;

              if (isLeft) {
                xVal = "-85%";
                scaleVal = 0.88;
                opacityVal = 0.85;
                zIndexVal = 10;
              } else if (isRight) {
                xVal = "85%";
                scaleVal = 0.88;
                opacityVal = 0.85;
                zIndexVal = 10;
              } else if (!isCenter) {
                xVal = "0%";
                scaleVal = 0.5;
                opacityVal = 0;
                zIndexVal = 0;
              }

              const isPlaying = playingId === item.id;
              const isMuted = isMutedMap[item.id] ?? false;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: xVal,
                    scale: scaleVal,
                    opacity: opacityVal,
                    zIndex: zIndexVal,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      handleSelect(idx);
                    }
                  }}
                  className={`absolute w-[84vw] max-w-[290px] sm:max-w-[340px] lg:max-w-[370px] h-[400px] sm:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 bg-white cursor-pointer flex flex-col ${
                    !isCenter && !isLeft && !isRight ? "hidden" : !isCenter ? "hidden md:flex" : "flex"
                  }`}
                >
                  {isCenter ? (
                    /* CENTER FEATURED CARD DESIGN */
                    <div
                      className="relative w-full h-full bg-slate-900 overflow-hidden flex flex-col justify-center items-center group"
                      onClick={(e) => togglePlay(e, item)}
                    >
                      {/* Video Tag - Poster dynamically cleared during playback so stream frame displays smoothly without poster glitch */}
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        className="w-full h-full object-cover"
                        poster={isPlaying ? undefined : item.poster}
                        preload="metadata"
                        playsInline
                        loop
                        muted={isMuted}
                        onEnded={() => setPlayingId(null)}
                      >
                        <source src={item.video} type="video/webm" />
                      </video>

                      {/* Large Play Button Overlay (when paused) */}
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-20">
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            transition={{ duration: 0.2 }}
                            className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border-4 border-white flex items-center justify-center bg-black/25 backdrop-blur-xs shadow-2xl cursor-pointer"
                          >
                            <FiPlay className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white fill-white ml-1" />
                          </motion.div>
                        </div>
                      )}

                      {/* Playing Pause Overlay on Hover */}
                      {isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-20">
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/40 text-white backdrop-blur-xs shadow-lg"
                          >
                            <FiPause className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </motion.div>
                        </div>
                      )}

                      {/* Mute/Unmute Toggle Button (Bottom Right) */}
                      <button
                        onClick={(e) => toggleMute(e, item)}
                        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 w-9 h-9 sm:w-10 sm:h-10 bg-black/60 backdrop-blur-xs text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors cursor-pointer"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <FiVolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <FiVolume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        )}
                      </button>
                    </div>
                  ) : (
                    /* SIDE CARD DESIGN (Left & Right) - Full vertical portrait video frame with play icon only */
                    <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center group">
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        className="w-full h-full object-cover pointer-events-none"
                        poster={item.poster}
                        preload="metadata"
                        muted
                        playsInline
                      >
                        <source src={item.video} type="video/webm" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/10 transition-colors">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          transition={{ duration: 0.2 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white flex items-center justify-center bg-black/20 backdrop-blur-xs shadow-md"
                        >
                          <FiPlay className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrow Right */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
            onClick={handleNext}
            className="absolute right-1 sm:right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white text-[#0B4E8C] rounded-full shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-[#0B4E8C] hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
          {testimonialItems.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleSelect(idx)}
              animate={{
                width: idx === activeIndex ? 28 : 10,
                backgroundColor: idx === activeIndex ? "#1C8A3C" : "#CBD5E1",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-2.5 rounded-full cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  return (
    <>
      <SEO
        title="Meenakshi Pharma | Pharmaceutical Company in Trichy"
        description="Meenakshi Pharma is a trusted pharmaceutical wholesaler and authorized stockist in Trichy, Tamil Nadu, delivering genuine medicines since 1998."
        keywords={[
          "Meenakshi Pharma",
          "Meenakshi Pharma Trichy",
          "pharmaceutical company in Trichy",
          "pharma company in Trichy",
          "pharmaceutical distributor Trichy",
          "pharmaceutical company Tiruchirappalli",
          "pharma company Tamil Nadu",
          "pharmaceutical stockist Trichy"
        ]}
        canonicalPath="/"
        schema={homeSchemas}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E8F1F9] via-[#F5F7FA] to-white">
        <div className="absolute top-10 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-[#0B4E8C]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] bg-[#1C8A3C]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 py-1 px-3 sm:py-1.5 sm:px-4 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-semibold text-xs sm:text-sm mb-4 sm:mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              Meenakshi Pharma
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0B4E8C] leading-snug sm:leading-tight tracking-tight mb-4 sm:mb-6">
              Delivering <span className="text-[#1C8A3C]">Excellence</span> in Healthcare
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-[#333333] mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal text-justify">
              Your trusted partner in pharmaceutical distribution. We ensure safe, reliable, and timely access to quality healthcare products across the region.
            </p>
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <Button to="/services" variant="primary" className="px-3.5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base">Explore Services</Button>
              <Button to="/partner" variant="secondary" className="px-3.5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base">
                Partner With Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-lg lg:ml-auto mt-4 sm:mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-8 sm:py-12 bg-[#F5F7FA] relative z-20 border-y border-slate-200 shadow-xs">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {home.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 border-t-4 border-t-[#0B4E8C] p-3.5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-center min-w-0"
              >
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4E8C] group-hover:text-[#1C8A3C] mb-1 sm:mb-2 tracking-tight truncate">
                  <Counter
                    prefix={stat.prefix}
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={stat.duration || 3}
                  />
                </h3>
                <p className="text-[#333333] font-semibold text-xs sm:text-sm md:text-base leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#F5F7FA]">
                <img
                  src={heroImg}
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-1 w-full text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Meenakshi Pharma – Our Journey of Growth"
                subtitle="About Meenakshi Pharma"
                align="left"
              />
              <p className="text-[#333333] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base text-justify">
                Our journey in the <strong>pharmaceutical industry</strong> began with our retail pharmacies, <strong>Meenakshi Medicals</strong> and <strong>Rajeswari Medicals</strong>, in <strong>Thottiyam, Tiruchirappalli District</strong>. The experience we gained in retail pharmacy and the trust we built with our customers became the foundation for our next step.
              </p>
              <p className="text-[#333333] leading-relaxed mb-6 sm:mb-8 text-xs sm:text-base text-justify">
                Building on this experience, <strong>Meenakshi Pharma was established in Tiruchirappalli on 27 May 1998 by Mr. V. Thiyagarajan and Mr. R. Chandrasekar</strong>. We started in a simple rented space of around <strong>300 square feet</strong> and faced several challenges in our early years. With <strong>integrity, hard work, quality service, and customer trust</strong> as our core values, we continued to grow step by step.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button to="/about" variant="primary">Read Our Story</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Healthcare Solutions"
            subtitle="Our Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.list.slice(0, 3).map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-card-hover border border-slate-200 border-t-4 border-t-[#0B4E8C] hover:border-t-[#1C8A3C] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl text-white flex-shrink-0 shadow-md ${
                          index % 2 === 0 ? "bg-[#0B4E8C]" : "bg-[#1C8A3C]"
                        }`}
                      >
                        {Icon && <Icon />}
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B4E8C] group-hover:text-[#1C8A3C] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[#333333] leading-relaxed text-xs sm:text-sm md:text-base text-justify">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-center mt-6 sm:mt-8">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-14 bg-white">
        <div className="container-custom text-center">
          <SectionTitle
            title={home.whyChooseUs.title}
            subtitle="Our Strengths"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
            {home.whyChooseUs.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-slate-200 border-t-4 border-t-[#1C8A3C] shadow-soft hover:shadow-card-hover hover:border-t-[#0B4E8C] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1C8A3C]/10 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform"></div>
                <h3 className="text-base sm:text-xl font-bold text-[#0B4E8C] group-hover:text-[#1C8A3C] transition-colors">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Meenakshi Pharma Trichy Insights"
        description="Factual information about Meenakshi Pharma's pharmaceutical wholesale distribution operations in Trichy, Tamil Nadu."
        faqs={homeFAQs}
      />

      <CTASection />
    </>
  );
};

export default Home;

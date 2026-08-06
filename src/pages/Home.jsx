import React from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
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

const TestimonialVideoCard = ({ src, badge, title, desc, delay }) => {
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef(null);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#083B6A] group h-full w-full flex flex-col md:flex-row cursor-pointer border border-[#0B4E8C]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={togglePlay}
    >
      {/* LEFT SIDE (Desktop Text) */}
      <div className="hidden md:flex md:w-[45%] flex-col justify-center p-8 lg:p-12 text-left bg-[#083B6A] z-20 select-none">
        <span className="inline-block self-start bg-[#1C8A3C] text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 shadow-sm">
          {badge}
        </span>
        <h4 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-snug">
          {title}
        </h4>
        <p className="text-slate-100 text-sm lg:text-base leading-relaxed">
          {desc}
        </p>
      </div>

      {/* RIGHT SIDE (Video Player) */}
      <div className="relative w-full h-full md:w-[55%] bg-black flex items-center justify-center overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full md:h-full md:w-auto md:aspect-[3/4] object-cover md:object-contain"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 group-hover:via-black/10 transition-all duration-300 pointer-events-none md:bg-gradient-to-t md:from-black/40 md:via-transparent md:to-black/10"></div>

        {/* Play/Pause center overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-transform">
            {isPlaying ? (
              <FiPause size={18} />
            ) : (
              <FiPlay size={18} className="ml-0.5" />
            )}
          </div>
        </div>

        {/* Mute/Unmute button top-right */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
        >
          {isMuted ? <FiVolumeX size={14} /> : <FiVolume2 size={14} />}
        </button>

        {/* Text overlay bottom (Mobile only) */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none md:hidden bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4 rounded-xl">
          <span className="inline-block bg-[#1C8A3C] text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1">
            {badge}
          </span>
          <h4 className="text-white text-base sm:text-lg font-bold mb-1 leading-snug drop-shadow-md">
            {title}
          </h4>
          <p className="text-slate-100 text-xs leading-relaxed max-w-sm drop-shadow-md line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  return (
    <>
      <Helmet>
        <title>Meenakshi Pharma | Premium Healthcare Distribution</title>
        <meta
          name="description"
          content="Delivering excellence in pharmaceutical distribution with a commitment to quality, reliability, and healthcare advancement."
        />
      </Helmet>

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
                title={about.introduction.title}
                subtitle="About Meenakshi Pharma"
                align="left"
              />
              <p
                className="text-[#333333] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base text-justify"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc1,
                }}
              />
              <p
                className="text-[#333333] leading-relaxed mb-6 sm:mb-8 text-xs sm:text-base text-justify"
                dangerouslySetInnerHTML={{
                  __html: about.introduction.desc2,
                }}
              />
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

      {/* Testimonial Video Section */}
      <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 md:pb-10 bg-[#F5F7FA] overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title="What Our Partners Say"
              subtitle="Testimonials"
            />
          </motion.div>

          {/* Carousel Layout */}
          {(() => {
            const testimonialVideos = [
              {
                src: testimonialVideo3,
                badge: "Logistics Hub",
                title: "Advanced Cold Chain",
                desc: "State-of-the-art cold storage and temperature compliance for sensitive and lifesaving medications.",
              },
              {
                src: testimonialVideo4,
                badge: "Logistics Hub",
                title: "Advanced Cold Chain",
                desc: "State-of-the-art cold storage and temperature compliance for sensitive and lifesaving medications.",
              },
              {
                src: testimonialVideo5,
                badge: "Logistics Hub",
                title: "Advanced Cold Chain",
                desc: "State-of-the-art cold storage and temperature compliance for sensitive and lifesaving medications.",
              },

              // {
              //   src: testimonialVideo1,
              //   badge: "Our Story",
              //   title: "15+ Years of Excellence",
              //   desc: "Trusted pharmaceutical distribution built on reliability, safety, and a commitment to healthcare advancement.",
              // },
              // {
              //   src: testimonialVideo2,
              //   badge: "Service Excellence",
              //   title: "24/7 Dedicated Support",
              //   desc: "Our client support and pharmacy helpline ensure round-the-clock service and supply chain management.",
              // },
              // {
              //   src: testimonialVideo3,
              //   badge: "Logistics Hub",
              //   title: "Advanced Cold Chain",
              //   desc: "State-of-the-art cold storage and temperature compliance for sensitive and lifesaving medications.",
              // },
            ];

            return (
              <div className="relative mt-6 sm:mt-8 w-full max-w-full sm:max-w-sm md:max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4 md:px-0">
                {/* Carousel Track */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5] sm:aspect-[3/4] md:aspect-[2/1] lg:aspect-[2.2/1] shadow-2xl bg-[#083B6A] group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideoIndex}
                      initial={{ opacity: 0, x: 50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <TestimonialVideoCard
                        src={testimonialVideos[currentVideoIndex].src}
                        badge={testimonialVideos[currentVideoIndex].badge}
                        title={testimonialVideos[currentVideoIndex].title}
                        desc={testimonialVideos[currentVideoIndex].desc}
                        delay={0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentVideoIndex(
                      (prev) =>
                        (prev - 1 + testimonialVideos.length) %
                        testimonialVideos.length,
                    )
                  }
                  className="absolute left-2 sm:left-3 md:-left-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md text-[#0B4E8C] rounded-full shadow-lg flex items-center justify-center border border-slate-200 hover:bg-[#1C8A3C] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                </button>

                <button
                  onClick={() =>
                    setCurrentVideoIndex(
                      (prev) => (prev + 1) % testimonialVideos.length,
                    )
                  }
                  className="absolute right-2 sm:right-3 md:-right-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md text-[#0B4E8C] rounded-full shadow-lg flex items-center justify-center border border-slate-200 hover:bg-[#1C8A3C] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
                </button>

                {/* Indicators/Dots */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                  {testimonialVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentVideoIndex === index
                          ? "w-6 sm:w-8 bg-[#1C8A3C]"
                          : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;

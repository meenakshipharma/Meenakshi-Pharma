import React from "react";
import SEO from "../components/SEO";
import FAQSection from "../components/FAQSection";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import heroImg from "../assets/images/hero.webp";
import imgChandrasekar from "../assets/images/chandrasekar.jpg";
import imgThiyagarajan from "../assets/images/thiyagarajan.jpg";
import { about } from "../data/content";

const aboutFAQs = [
  {
    question: "When and by whom was Meenakshi Pharma founded?",
    answer: "Meenakshi Pharma was established in Tiruchirappalli on 27 May 1998 by Mr. V. Thiyagarajan and Mr. R. Chandrasekar, building on their experience with retail pharmacies (Meenakshi Medicals and Rajeswari Medicals) in Thottiyam.",
  },
  {
    question: "Where is Meenakshi Pharma's facility located?",
    answer: "After 12 years of continuous growth, Meenakshi Pharma moved in 2010 to its own 7,500-square-foot building located at C-135-A, Ground & 1st Floor, 5th Cross East, Thillai Nagar, Trichy - 620018, Tamil Nadu, India.",
  },
  {
    question: "What is Meenakshi Pharma's annual turnover and mission?",
    answer: "Meenakshi Pharma has grown into an established pharmaceutical distribution company with an annual business turnover of approximately ₹50 crore, built on integrity, trust, quality service, commitment, and continuous growth.",
  },
];

const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://meenakshipharma.com/about/#webpage",
    "url": "https://meenakshipharma.com/about",
    "name": "About Us | Meenakshi Pharma Trichy",
    "description": "Learn about Meenakshi Pharma, established in 1998 in Thillai Nagar, Trichy as a leading authorized pharmaceutical stockist in Tamil Nadu.",
    "mainEntity": {
      "@id": "https://meenakshipharma.com/#organization",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://meenakshipharma.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://meenakshipharma.com/about",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Meenakshi Pharma Trichy"
        description="Learn about Meenakshi Pharma, established in 1998 in Thillai Nagar, Trichy as a leading authorized pharmaceutical stockist in Tamil Nadu."
        keywords={[
          "About Meenakshi Pharma",
          "Meenakshi Pharma history",
          "pharmaceutical stockist Trichy",
          "pharma distributor Thillai Nagar",
          "Tiruchirappalli healthcare supplier"
        ]}
        canonicalPath="/about"
        schema={aboutSchemas}
      />

      <PageBanner
        title="About Meenakshi Pharma"
        subtitle="A Legacy of Trust and Excellence in Pharmaceutical Distribution"
      />
      {/* Unified Main About Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F5F7FA] overflow-x-hidden">
        <div className="container-custom space-y-8 sm:space-y-12 lg:space-y-16">
          {/* 1. Header & Main Journey */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-10 lg:mb-12 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E31E24]"></span>
                {about.introduction.badge}
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B4E8C] tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-3">
                {about.introduction.mainTitle}
              </h1>

              <h2 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#1C8A3C] max-w-4xl">
                {about.introduction.subTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Image Column & Milestone Stats */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-4 sm:space-y-6 lg:sticky lg:top-24"
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white relative group">
                  <img
                    src={heroImg}
                    alt="Meenakshi Pharma distribution facility in Thillai Nagar, Trichy"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4E8C]/70 via-transparent to-transparent opacity-75"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-emerald-300">Est. 27 May 1998</p>
                  </div>
                </div>

                {/* Milestone Quick Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#0B4E8C]">1998</span>
                    <span className="text-[11px] sm:text-xs text-slate-600 font-medium">Est. 300 Sq. Ft.</span>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#1C8A3C]">2010</span>
                    <span className="text-[11px] sm:text-xs text-slate-600 font-medium">Own 7,500 Sq. Ft. Building</span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm text-center col-span-2">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#E31E24]">₹50 Crore</span>
                    <span className="text-[11px] sm:text-xs text-slate-600 font-medium">Annual Business Turnover</span>
                  </div>
                </div>
              </motion.div>

              {/* Story Paragraphs Column - Single Unified Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 bg-white p-4 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl space-y-3.5 sm:space-y-5 text-[#333333] leading-relaxed text-xs sm:text-base text-justify"
              >
                {about.introduction.storyParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* 2. Our Foundation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-lg sm:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#1C8A3C]/5 rounded-full -mr-16 -mt-16 sm:-mr-20 sm:-mt-20 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-3xl font-bold text-[#0B4E8C] mb-3 sm:mb-4">
                  {about.introduction.foundationTitle}
                </h3>

                {/* Values Badges */}
                <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 my-3 sm:my-4">
                  {about.introduction.foundationValues.map((val, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 sm:px-5 sm:py-2 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/40 text-[#1C8A3C] font-bold text-[11px] sm:text-sm shadow-sm flex items-center gap-1 sm:gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C8A3C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {val}
                    </span>
                  ))}
                </div>

                <p
                  className="text-[#333333] text-xs sm:text-base font-medium mt-3 sm:mt-4"
                  dangerouslySetInnerHTML={{ __html: about.introduction.foundationLead }}
                />
              </div>

              {/* Quote Block */}
              <div className="my-4 sm:my-8 bg-gradient-to-r from-[#0B4E8C]/5 via-[#1C8A3C]/10 to-[#0B4E8C]/5 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-l-[#1C8A3C] shadow-inner text-center relative">
                <svg
                  className="w-7 h-7 sm:w-10 sm:h-10 text-[#1C8A3C]/20 absolute top-2 sm:top-3 left-2 sm:left-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xs sm:text-xl font-bold text-[#0B4E8C] italic leading-relaxed relative z-10">
                  {about.introduction.quote.split('\n').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </blockquote>
              </div>

              {/* Closing Paragraphs */}
              <div className="space-y-3 sm:space-y-4 text-[#333333] text-xs sm:text-base leading-relaxed text-justify">
                {about.introduction.closingParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership / Founders Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-slate-200/80 shadow-lg sm:shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Gradient Accents */}
            <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

            {/* Header with Staggered Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative z-10 text-center mb-6 sm:mb-12"
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#1C8A3C] font-extrabold uppercase tracking-widest text-[10px] sm:text-xs shadow-sm mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
                Our Leadership
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0B4E8C] tracking-tight">
                Meet Our Founders
              </h3>
              <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-xl mx-auto font-medium">
                The visionary leaders behind Meenakshi Pharma’s 28-year journey of trust, quality service, and growth.
              </p>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#0B4E8C] to-[#1C8A3C] rounded-full mx-auto mt-3 sm:mt-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto relative z-10">
              {/* Founder 1: Mr. R. Chandrasekar */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{
                  layout: { duration: 0.3 },
                  hover: { type: "spring", stiffness: 300, damping: 22 },
                  opacity: { duration: 0.7, delay: 0.2 },
                  x: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                }}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md sm:shadow-lg hover:shadow-2xl hover:border-[#1C8A3C]/50 flex flex-col items-center p-5 sm:p-8 text-center relative group transform-gpu"
              >
                {/* Decorative Top Accent Badge Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1C8A3C] via-emerald-400 to-[#1C8A3C]"></div>

                {/* Portrait Frame */}
                <div className="relative w-40 h-52 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 sm:border-4 border-white mb-4 sm:mb-6 group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={imgChandrasekar}
                    alt="Mr. R. Chandrasekar - Founder & Managing Director"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4E8C]/40 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0B4E8C]/75 backdrop-blur-md py-1 rounded-lg border border-white/20 shadow-sm">
                    Est. 1998
                  </div>
                </div>

                {/* Info Details */}
                <h4 className="text-xl sm:text-3xl font-extrabold text-[#0B4E8C] tracking-tight mb-1.5 sm:mb-2">
                  Mr. R. Chandrasekar
                </h4>
                
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold text-[11px] sm:text-sm shadow-sm mb-2.5 sm:mb-3">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C8A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Founder & Managing Director
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                  Guiding Meenakshi Pharma’s strategic vision, distribution operations, and partner excellence across South India.
                </p>
              </motion.div>

              {/* Founder 2: Mr. V. Thiyagarajan */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{
                  layout: { duration: 0.3 },
                  hover: { type: "spring", stiffness: 300, damping: 22 },
                  opacity: { duration: 0.7, delay: 0.35 },
                  x: { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
                }}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-md sm:shadow-lg hover:shadow-2xl hover:border-[#0B4E8C]/50 flex flex-col items-center p-5 sm:p-8 text-center relative group transform-gpu"
              >
                {/* Decorative Top Accent Badge Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0B4E8C] via-sky-400 to-[#0B4E8C]"></div>

                {/* Portrait Frame */}
                <div className="relative w-40 h-52 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 sm:border-4 border-white mb-4 sm:mb-6 group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={imgThiyagarajan}
                    alt="Mr. V. Thiyagarajan - Founder"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4E8C]/40 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0B4E8C]/75 backdrop-blur-md py-1 rounded-lg border border-white/20 shadow-sm">
                    Est. 1998
                  </div>
                </div>

                {/* Info Details */}
                <h4 className="text-xl sm:text-3xl font-extrabold text-[#0B4E8C] tracking-tight mb-1.5 sm:mb-2">
                  Mr. V. Thiyagarajan
                </h4>
                
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#E6EFF7] border border-[#0B4E8C]/30 text-[#0B4E8C] font-bold text-[11px] sm:text-sm shadow-sm mb-2.5 sm:mb-3">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B4E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Founder
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                  Co-founder whose dedication and foundational retail experience laid the cornerstone of our company values.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Vision & Mission */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <motion.div
              className="flex-1 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#0B4E8C]/10 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform"></div>
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[#0B4E8C] text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shadow-md shadow-[#0B4E8C]/20">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B4E8C] mb-3 sm:mb-4">
                {about.vision.title}
              </h2>
              <p className="text-[#333333] leading-relaxed text-xs sm:text-base md:text-lg text-justify">
                {about.vision.desc}
              </p>
            </motion.div>

            <motion.div
              className="flex-1 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 border-t-4 border-t-[#1C8A3C] shadow-soft hover:shadow-card-hover hover:border-t-[#0B4E8C] transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1C8A3C]/10 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform"></div>
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[#1C8A3C] text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shadow-md shadow-[#1C8A3C]/20">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B4E8C] mb-3 sm:mb-4">
                {about.mission.title}
              </h2>
              <p className="text-[#333333] leading-relaxed text-xs sm:text-base md:text-lg text-justify">
                {about.mission.desc}
              </p>
            </motion.div>
          </div>

          {/* 4. Our Infrastructure */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <SectionTitle
              title="Our Infrastructure"
              subtitle="State-of-the-Art Facilities"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center mt-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B4E8C] mb-3 sm:mb-4">Modern Warehousing</h3>
                <p className="text-[#333333] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base text-justify">
                  Our facilities are equipped with the latest technology for
                  inventory management and climate control, ensuring that all
                  pharmaceutical products are stored under optimal conditions.
                </p>
                <ul className="space-y-2.5 sm:space-y-4">
                  <li className="flex items-center gap-2.5 sm:gap-3 text-[#333333] font-semibold text-xs sm:text-base">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1C8A3C] flex-shrink-0"></span>{" "}
                    Temperature-controlled zones
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 text-[#333333] font-semibold text-xs sm:text-base">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0B4E8C] flex-shrink-0"></span>{" "}
                    Advanced security systems
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 text-[#333333] font-semibold text-xs sm:text-base">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1C8A3C] flex-shrink-0"></span>{" "}
                    Automated inventory tracking
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-video border-2 sm:border-4 border-white mt-4 md:mt-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop"
                  alt="Meenakshi Pharma pharmaceutical warehouse facility in Trichy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="About Meenakshi Pharma"
        description="Verified details regarding our background, location, and commitment to healthcare supply in Trichy."
        faqs={aboutFAQs}
      />

      <CTASection />
    </>
  );
};

export default About;

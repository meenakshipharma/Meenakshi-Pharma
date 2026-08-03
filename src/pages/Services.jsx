import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { services } from "../data/content";
import { iconMap } from "../utils/iconMap";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Meenakshi Pharma</title>
        <meta
          name="description"
          content="Explore our comprehensive pharmaceutical distribution and logistics services."
        />
      </Helmet>

      <PageBanner
        title="Our Services"
        subtitle="Comprehensive Healthcare Distribution Solutions Tailored to Your Needs"
      />

      {/* Services Hub Grid */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Healthcare Solutions"
            subtitle="Our Services"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 mt-12 items-center">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-8">
              {services.list.slice(0, 2).map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 flex flex-col md:flex-row items-start lg:items-center gap-6 group"
                  >
                    <div className="flex-1 text-left lg:text-right order-2 lg:order-1">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-2 text-[#0B4E8C] group-hover:text-[#1C8A3C] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-[#333333] text-sm md:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md order-1 lg:order-2 ${
                        service.color === "brand" ? "bg-[#0B4E8C] shadow-[#0B4E8C]/20" : "bg-[#1C8A3C] shadow-[#1C8A3C]/20"
                      }`}
                    >
                      {Icon && <Icon />}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── CENTER WHEEL ── */}
            <motion.div
              className="hidden lg:flex items-center justify-center mx-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-56 h-56">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-slate-200 shadow-xs" />
                {/* Middle ring */}
                <div className="absolute inset-5 rounded-full border-4 border-[#0B4E8C]/30" />
                {/* Inner filled circle */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#0B4E8C]/10 to-[#1C8A3C]/10 border-4 border-[#0B4E8C]/40 flex items-center justify-center shadow-inner">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-14 h-14 text-[#0B4E8C]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M32 20a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" />
                    <path d="M32 4v8M32 52v8M4 32h8M52 32h8M11.03 11.03l5.66 5.66M47.31 47.31l5.66 5.66M11.03 52.97l5.66-5.66M47.31 16.69l5.66-5.66" />
                  </svg>
                </div>
                {/* Spoke lines */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 w-1/2 h-px bg-[#0B4E8C]/20 origin-left"
                    style={{ transform: `rotate(${deg}deg)` }}
                  />
                ))}
                {/* Dot connectors at spoke ends */}
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 50 + 46 * Math.cos(rad);
                  const y = 50 + 46 * Math.sin(rad);
                  return (
                    <div
                      key={deg}
                      className="absolute w-3 h-3 bg-[#1C8A3C] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-xs"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-8">
              {services.list.slice(2, 4).map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 border-t-4 border-t-[#1C8A3C] shadow-soft hover:shadow-card-hover hover:border-t-[#0B4E8C] transition-all duration-300 flex flex-col md:flex-row items-start lg:items-center gap-6 group"
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md ${
                        service.color === "brand" ? "bg-[#0B4E8C] shadow-[#0B4E8C]/20" : "bg-[#1C8A3C] shadow-[#1C8A3C]/20"
                      }`}
                    >
                      {Icon && <Icon />}
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-2 text-[#0B4E8C] group-hover:text-[#1C8A3C] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-[#333333] text-sm md:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;

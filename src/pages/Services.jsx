import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiTruck,
  FiShield,
  FiUsers,
  FiBox,
  FiTrendingUp,
} from "react-icons/fi";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { services } from "../data/content";
import { iconMap } from "../utils/iconMap";
const Services = () => {
  // const services = [
  //   { icon: <FiBox className="text-4xl text-brand" />, title: 'Pharmaceutical Distribution', desc: 'End-to-end distribution services ensuring products reach pharmacies and hospitals efficiently and safely.' },
  //   { icon: <FiTruck className="text-4xl text-brand" />, title: 'Cold Chain Logistics', desc: 'Specialized temperature-controlled transportation for sensitive medications and vaccines.' },
  //   { icon: <FiShield className="text-4xl text-brand" />, title: 'Quality Assurance', desc: 'Rigorous quality checks at every stage to ensure compliance with pharmaceutical standards.' },
  //   { icon: <FiActivity className="text-4xl text-brand" />, title: 'Super-Specialty Care', desc: 'Dedicated supply lines for life-saving critical care and specialty medications.' },
  //   { icon: <FiUsers className="text-4xl text-brand" />, title: 'Retail Pharmacy Support', desc: 'Comprehensive support including inventory forecasting and prompt deliveries for retail partners.' },
  //   { icon: <FiTrendingUp className="text-4xl text-brand" />, title: 'Inventory Management', desc: 'Advanced software solutions for tracking stock, reducing wastage, and ensuring availability.' },
  // ];

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
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Healthcare Solutions"
            subtitle="Our Services"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 mt-16 items-center">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-14 ">
              {services.list.slice(0, 2).map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-5 group"
                  >
                    

                    <div className="flex-1 text-right min-w-0">
                      <h3
                        className={`text-sm font-serif font-bold uppercase tracking-widest mb-2 ${
                          service.color === "brand"
                          ? "text-brand"
                          : "text-secondary"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-text-light text-justify text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    
                  </div>
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${
                      service.color === "brand" ? "bg-brand" : "bg-secondary"
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
              className="hidden lg:flex items-center justify-center mx-12"
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-56 h-56">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-200 opacity-50" />
                {/* Middle ring */}
                <div className="absolute inset-5 rounded-full border-4 border-brand/20" />
                {/* Inner filled circle */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand/10 to-secondary/10 border-4 border-brand/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-14 h-14 text-brand"
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
                    className="absolute top-1/2 left-1/2 w-1/2 h-px bg-brand/20 origin-left"
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
                      className="absolute w-3 h-3 bg-brand/50 rounded-full -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-14 mt-[-50px]">
              {services.list.slice(2, 4).map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-5 group"
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${
                        service.color === "brand" ? "bg-brand" : "bg-secondary"
                      }`}
                    >
                      {Icon && <Icon />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-sm font-serif font-bold uppercase tracking-widest mb-2 ${
                          service.color === "brand"
                            ? "text-brand"
                            : "text-secondary"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p className="text-text-light text-justify text-sm leading-relaxed">
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

      {/* Super-Specialty Care Spotlight */}
      {/* <section className="section-padding bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand opacity-5 skew-x-12"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif text-brand mb-6">
                Super-Specialty Care Focus
              </h2>
              <p className="text-lg text-text-light mb-6 leading-relaxed">
                We understand the critical nature of super-specialty
                medications. Our dedicated division ensures the uninterrupted
                supply of life-saving drugs for oncology, nephrology,
                cardiology, and other specialized fields.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-brand">âœ“</span> Priority handling and
                  dispatch
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand">âœ“</span> Strict temperature
                  compliance
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand">âœ“</span> Direct-to-hospital
                  delivery options
                </li>
              </ul>
              <Button to="/contact">Enquire Now</Button>
            </motion.div>
            <motion.div
              className="flex-1 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1479&auto=format&fit=crop"
                alt="Super Specialty Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section> */}
      <CTASection />
    </>
  );
};

export default Services;

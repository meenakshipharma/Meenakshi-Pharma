import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import heroImg from "../assets/images/hero.webp";
import { about } from "../data/content";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Meenakshi Pharma</title>
        <meta
          name="description"
          content="Learn about our vision, mission, and state-of-the-art infrastructure at Meenakshi Pharma."
        />
      </Helmet>

      <PageBanner
        title="About Meenakshi Pharma"
        subtitle="A Legacy of Trust and Excellence in Pharmaceutical Distribution"
      />

      {/* About Story */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={heroImg}
                  alt="Meenakshi Pharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold uppercase tracking-wider text-xs mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]"></span>
                {about.introduction.subtitle}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B4E8C] mt-2 mb-6 leading-tight">
                {about.introduction.title}
              </h2>

              <div className="space-y-4 text-[#333333] leading-relaxed text-base text-justify">
                <p
                  dangerouslySetInnerHTML={{
                    __html: about.introduction.desc1,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: about.introduction.desc2,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: about.introduction.desc3,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: about.introduction.desc4,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: about.introduction.desc5,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="flex-1 bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#0B4E8C]/10 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform"></div>
              <div className="w-14 h-14 bg-[#0B4E8C] text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-[#0B4E8C]/20">
                <svg
                  width="24"
                  height="24"
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4E8C] mb-4">
                {about.vision.title}
              </h2>
              <p className="text-[#333333] leading-relaxed text-base md:text-lg text-justify">
                {about.vision.desc}
              </p>
            </motion.div>

            <motion.div
              className="flex-1 bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 border-t-4 border-t-[#1C8A3C] shadow-soft hover:shadow-card-hover hover:border-t-[#0B4E8C] transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1C8A3C]/10 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform"></div>
              <div className="w-14 h-14 bg-[#1C8A3C] text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-[#1C8A3C]/20">
                <svg
                  width="24"
                  height="24"
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B4E8C] mb-4">
                {about.mission.title}
              </h2>
              <p className="text-[#333333] leading-relaxed text-base md:text-lg text-justify">
                {about.mission.desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle
            title="Our Infrastructure"
            subtitle="State-of-the-Art Facilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#0B4E8C] mb-4">Modern Warehousing</h3>
              <p className="text-[#333333] leading-relaxed mb-6 text-justify">
                Our facilities are equipped with the latest technology for
                inventory management and climate control, ensuring that all
                pharmaceutical products are stored under optimal conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#333333] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1C8A3C]"></span>{" "}
                  Temperature-controlled zones
                </li>
                <li className="flex items-center gap-3 text-[#333333] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B4E8C]"></span>{" "}
                  Advanced security systems
                </li>
                <li className="flex items-center gap-3 text-[#333333] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1C8A3C]"></span>{" "}
                  Automated inventory tracking
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-video border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;

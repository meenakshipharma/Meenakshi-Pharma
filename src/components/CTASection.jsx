import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTASection = () => {
  return (
    <section className="pt-2 sm:pt-4 md:pt-6 pb-10 sm:pb-16 md:pb-20 bg-[#F5F7FA] text-center relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0B4E8C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl overflow-hidden border border-[#083B6A]"
        >
          {/* Subtle Ambient Glow Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1C8A3C]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#E31E24]/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 text-white font-semibold uppercase tracking-wider text-[10px] sm:text-xs mb-4 sm:mb-6 border border-white/20">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E31E24] inline-block mr-2 animate-pulse"></span>
              Transform Healthcare Logistics
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight max-w-4xl mx-auto tracking-tight text-white">
              Ready to Elevate Your Healthcare Supply?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-100 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-center">
              Join hundreds of satisfied partners and experience the Meenakshi Pharma difference.
            </p>
            <div className="flex justify-center">
              <Button to="/contact" variant="primary" className="shadow-lg shadow-[#1C8A3C]/40 hover:shadow-xl">
                Get in Touch Today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

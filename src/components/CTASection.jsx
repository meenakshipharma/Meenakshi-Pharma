import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] text-center relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0B4E8C] text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden border border-[#083B6A]"
        >
          {/* Subtle Ambient Glow Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1C8A3C]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#E31E24]/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold uppercase tracking-wider text-xs mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] inline-block mr-2 animate-pulse"></span>
              Transform Healthcare Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto tracking-tight text-white">
              Ready to Elevate Your Healthcare Supply?
            </h2>
            <p className="text-base md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
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

import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-6 sm:mb-8 md:mb-10 max-w-3xl text-center mx-auto ${className}`}>
      {subtitle && (
        <div className="flex justify-center mb-2.5 sm:mb-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-semibold tracking-wider uppercase text-[10px] sm:text-xs shadow-xs"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span>{subtitle}</span>
          </motion.div>
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B4E8C] leading-tight tracking-tight mt-1 text-center"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '70px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="h-1 bg-gradient-to-r from-[#0B4E8C] via-[#1C8A3C] to-[#E31E24] mx-auto mt-4 rounded-full"
      />
    </div>
  );
};

export default SectionTitle;

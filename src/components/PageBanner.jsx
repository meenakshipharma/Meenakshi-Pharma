import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, subsubtitle, bgImage, children }) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#E8F1F9] via-[#F5F7FA] to-white border-b border-slate-200/80">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0B4E8C]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-[#1C8A3C]/5 blur-3xl pointer-events-none"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B4E8C] mb-4 leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
          {subsubtitle && (
            <p className="text-base sm:text-lg md:text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed mt-1 font-normal">
              {subsubtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 flex justify-center">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;

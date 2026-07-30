import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle,subsubtitle, bgImage }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-light">
      {/* Background patterns/shapes could go here */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
            {subsubtitle && (
            <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto font-light">
              {subsubtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;

import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-16 max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand font-semibold tracking-wider uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-3xl lg:text-4xl font-serif text-text leading-tight"
      >
        {title}
      </motion.h2>
      {align === 'center' && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 bg-brand mx-auto mt-2 rounded-full"
        />
      )}
      {align === 'left' && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 bg-brand mt-2 rounded-full"
        />
      )}
    </div>
  );
};

export default SectionTitle;

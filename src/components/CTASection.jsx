import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-brand-light/30 to-brand-light/70 text-center relative overflow-hidden border-t border-brand-light">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-brand blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary blur-3xl mix-blend-multiply"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight max-w-4xl mx-auto tracking-tight text-text">
            Ready to Elevate Your Healthcare Supply?
          </h2>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto font-light">
            Join hundreds of satisfied partners and experience the Meenakshi Pharma difference.
          </p>
          <Button to="/contact" className="shadow-lg hover:shadow-xl">
            Get in Touch Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

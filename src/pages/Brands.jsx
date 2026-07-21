import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { brands } from '../data/content';

const Brands = () => {
  

  return (
    <>
      <Helmet>
        <title>Trusted Brands | Meenakshi Pharma</title>
        <meta name="description" content="Discover the extensive portfolio of trusted pharmaceutical brands we distribute." />
      </Helmet>

      <PageBanner 
        title="Our Trusted Partners" 
        subtitle="We collaborate with the world's leading pharmaceutical manufacturers to bring quality healthcare to you."
      />

      <section className="section-padding bg-transparent min-h-screen">
        <div className="container-custom">
          

          {/* Brand Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            <AnimatePresence>
              {brands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex items-center justify-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 h-32 sm:h-40"
                >
                  <img 
                    src={brand.url} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {brands.length === 0 && (
            <div className="text-center text-text-light py-20">
              No brands found matching your search.
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Brands;



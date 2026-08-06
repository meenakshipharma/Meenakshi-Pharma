import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
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
      >
        <Button to="/partner" variant="primary">
          Partner With Us
        </Button>
      </PageBanner>

      <section className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-8 bg-[#F5F7FA]">
        <div className="container-custom">
          {/* Brand Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-6">
            <AnimatePresence>
              {brands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-card-hover border border-slate-200 hover:border-[#0B4E8C] flex items-center justify-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 h-24 xs:h-28 sm:h-36 md:h-40"
                >
                  <img 
                    src={brand.url} 
                    alt={brand.name} 
                    className="max-w-[85%] max-h-[85%] sm:max-w-full sm:max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {brands.length === 0 && (
            <div className="text-center text-[#333333] py-20 font-medium">
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

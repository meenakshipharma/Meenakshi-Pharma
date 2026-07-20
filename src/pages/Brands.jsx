import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Generate mock brands (80-100 requested, displaying all on a single page)
  const allBrands = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `PharmaBrand ${i + 1}`,
    image: `https://ui-avatars.com/api/?name=PB${i + 1}&background=random&color=fff&size=150&font-size=0.4`
  }));

  const filteredBrands = allBrands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-16 relative">
            <input 
              type="text" 
              placeholder="Search brands..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow text-text"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* Brand Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <AnimatePresence>
              {filteredBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex items-center justify-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="max-w-full h-auto opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredBrands.length === 0 && (
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



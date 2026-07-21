import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { achievements as awards } from '../data/content';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Achievements & Certificates | Meenakshi Pharma</title>
        <meta name="description" content="View our awards, recognitions, and quality certificates." />
      </Helmet>

      <PageBanner 
        title="Our Achievements" 
        subtitle="Recognitions that validate our commitment to excellence."
      />

      <section className="section-padding bg-transparent min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(award.url)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-card aspect-[4/3] mb-4">
                  <img 
                    src={award.url} 
                    alt={award.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
                      View Document
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1 block">
                    {award.title.toLowerCase().includes('certificate') ? 'Certificate' : 'Award'}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-text">{award.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-brand transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Achievement fullscreen"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <CTASection />
    </>
  );
};

export default Achievements;



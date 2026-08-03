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

      <section className="section-padding bg-[#F5F7FA] min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 flex flex-col justify-between"
                onClick={() => setSelectedImage(award.url)}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] mb-5 border border-slate-100">
                  <img 
                    src={award.url} 
                    alt={award.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#083B6A]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-xs">
                    <span className="bg-white text-[#0B4E8C] px-4 py-2 rounded-xl font-semibold text-xs tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Document
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1C8A3C] bg-[#E8F5EB] px-3 py-1 rounded-full border border-[#1C8A3C]/30 mb-2">
                    {award.title.toLowerCase().includes('certificate') ? 'Certificate' : 'Award'}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B4E8C] leading-snug group-hover:text-[#1C8A3C] transition-colors">{award.title}</h3>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-[#1C8A3C] transition-colors cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close document modal"
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Achievement fullscreen"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white/10"
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

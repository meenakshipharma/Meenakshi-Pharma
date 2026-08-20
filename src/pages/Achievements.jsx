import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { achievements as awards } from '../data/content';

const achievementsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://meenakshipharma.com/achievements/#webpage",
    "url": "https://meenakshipharma.com/achievements",
    "name": "Achievements & Recognition | Meenakshi Pharma Trichy",
    "description": "View awards, certificates, and recognition earned by Meenakshi Pharma as a trusted healthcare business partner in Trichy, Tamil Nadu.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://meenakshipharma.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Achievements",
        "item": "https://meenakshipharma.com/achievements",
      },
    ],
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <SEO
        title="Achievements & Recognition | Meenakshi Pharma Trichy"
        description="View awards, certificates, and recognition earned by Meenakshi Pharma as a trusted healthcare business partner in Trichy, Tamil Nadu."
        keywords={[
          "Meenakshi Pharma awards",
          "pharmaceutical certificates Trichy",
          "Cipla business partner award",
          "Alkem achievement certificate",
          "GSK healthcare partner Trichy"
        ]}
        canonicalPath="/achievements"
        schema={achievementsSchemas}
      />

      <PageBanner 
        title="Our Achievements" 
        subtitle="Recognitions that validate our commitment to excellence."
      />

      <section className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group cursor-pointer bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 flex flex-col justify-between"
                onClick={() => setSelectedImage(award.url)}
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-100 aspect-[4/3] mb-3.5 sm:mb-5 border border-slate-100">
                  <img 
                    src={award.url} 
                    alt={`${award.title} - Meenakshi Pharma Trichy Certificate`}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#083B6A]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-xs">
                    <span className="bg-white text-[#0B4E8C] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-semibold text-[10px] sm:text-xs tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Document
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1C8A3C] bg-[#E8F5EB] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#1C8A3C]/30 mb-1.5 sm:mb-2">
                    {award.title.toLowerCase().includes('certificate') ? 'Certificate' : 'Award'}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B4E8C] leading-snug group-hover:text-[#1C8A3C] transition-colors">{award.title}</h3>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="fixed top-3 right-3 sm:top-6 sm:right-6 z-[110] text-white bg-slate-800/80 hover:bg-[#1C8A3C] backdrop-blur-md transition-all duration-200 cursor-pointer w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/20 shadow-xl"
              onClick={() => setSelectedImage(null)}
              aria-label="Close document modal"
            >
              <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Achievement fullscreen"
              className="max-w-full max-h-[85vh] rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white/10 object-contain"
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

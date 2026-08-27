import React from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { brands } from '../data/content';

const brandsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://meenakshipharma.com/brands/#webpage",
    "url": "https://meenakshipharma.com/brands",
    "name": "Authorized Pharma Brands & Stockist | Meenakshi Pharma",
    "description": "Authorized stockist for 86+ top pharma brands including Cipla, GSK, Zydus, Torrent, Alkem, Glenmark, Lupin, and Dr. Reddy's in Trichy, Tamil Nadu.",
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
        "name": "Brands",
        "item": "https://meenakshipharma.com/brands",
      },
    ],
  },
];

const Brands = () => {
  return (
    <>
      <SEO
        title="Authorized Pharma Brands & Stockist | Meenakshi Pharma"
        description="Authorized stockist for 86+ top pharma brands including Cipla, GSK, Zydus, Torrent, Alkem, Glenmark, Lupin, and Dr. Reddy's in Trichy, Tamil Nadu."
        keywords={[
          "authorized pharma stockist Trichy",
          "Cipla distributor Trichy",
          "GSK stockist Trichy",
          "Zydus distributor Trichy",
          "Alkem stockist Tamil Nadu",
          "pharmaceutical brand partners"
        ]}
        canonicalPath="/brands"
        schema={brandsSchemas}
      />

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
                    alt={`${brand.name} logo - Authorized Brand Partner of Meenakshi Pharma`} 
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
      {/* Informative Overview Section for Brand Partnerships */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-200">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B4E8C] tracking-tight mb-3">
              Authorized Stockist for 50+ Leading Pharmaceutical Manufacturers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Meenakshi Pharma maintains direct authorized distribution partnerships with India's top pharmaceutical companies and global healthcare leaders. From life-saving specialty medications to everyday formulations, we ensure 100% genuine inventory and temperature-controlled delivery across Trichy and Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-[#0B4E8C] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1C8A3C]"></span>
                Direct Brand Authorization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We receive all products directly from certified pharmaceutical manufacturers, guaranteeing authenticity, original packaging, and full batch traceability.
              </p>
            </div>

            <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-[#0B4E8C] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1C8A3C]"></span>
                Cold-Chain Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Biologics, vaccines, and temperature-sensitive specialty medicines are stored in WHO-GDP compliant cold rooms and delivered in monitored thermal containers.
              </p>
            </div>

            <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-[#0B4E8C] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1C8A3C]"></span>
                Complete Regional Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Serving retail pharmacies, private hospitals, government institutions, and clinics across Trichy, Thanjavur, Karur, Pudukkottai, and central Tamil Nadu.
              </p>
            </div>
          </div>

          {/* Contextual Internal Links Banner */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#E8F5EB] rounded-2xl border border-[#1C8A3C]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0B4E8C]">Looking to partner your pharmaceutical brand with Meenakshi Pharma?</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Connect with our distribution team to expand your market presence across Tamil Nadu.</p>
            </div>
            <div className="flex gap-2 sm:gap-3 shrink-0">
              <Button to="/partner" variant="primary" className="text-xs px-3.5 py-2 sm:px-4 sm:py-2">
                Partner With Us
              </Button>
              <Button to="/contact" variant="secondary" className="text-xs px-3.5 py-2 sm:px-4 sm:py-2">
                Contact Supply Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands FAQ Section */}
      <FAQSection
        title="Brand Distribution FAQs"
        subtitle="Stockist & Product Inquiries"
        description="Frequently asked questions regarding Meenakshi Pharma's brand portfolio and wholesale distribution in Trichy."
        faqs={[
          {
            question: "How can retail pharmacies place orders for branded products?",
            answer: "Registered retail pharmacies and healthcare providers in Tamil Nadu can place orders through our 24/7 web portal (Meenakshi Web Order), WhatsApp supply line, or by contacting our Thillai Nagar sales office."
          },
          {
            question: "Are all pharmaceutical products sourced directly from manufacturers?",
            answer: "Yes, Meenakshi Pharma is an authorized stockist for over 50 leading pharma manufacturers including Cipla, GSK, Zydus, Torrent, Alkem, Glenmark, Lupin, and Dr. Reddy's. All medicines are sourced directly from certified manufacturers."
          },
          {
            question: "What geographical regions does Meenakshi Pharma cover for product delivery?",
            answer: "We offer daily distribution services covering Tiruchirappalli (Trichy), Thanjavur, Karur, Pudukkottai, Ariyalur, Perambalur, and surrounding districts in Tamil Nadu."
          }
        ]}
      />

      <CTASection />
    </>
  );
};

export default Brands;

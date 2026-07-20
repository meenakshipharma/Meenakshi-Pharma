import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiActivity, FiTruck, FiShield, FiUsers, FiBox, FiTrendingUp } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const Services = () => {
  const services = [
    { icon: <FiBox className="text-4xl text-brand" />, title: 'Pharmaceutical Distribution', desc: 'End-to-end distribution services ensuring products reach pharmacies and hospitals efficiently and safely.' },
    { icon: <FiTruck className="text-4xl text-brand" />, title: 'Cold Chain Logistics', desc: 'Specialized temperature-controlled transportation for sensitive medications and vaccines.' },
    { icon: <FiShield className="text-4xl text-brand" />, title: 'Quality Assurance', desc: 'Rigorous quality checks at every stage to ensure compliance with pharmaceutical standards.' },
    { icon: <FiActivity className="text-4xl text-brand" />, title: 'Super-Specialty Care', desc: 'Dedicated supply lines for life-saving critical care and specialty medications.' },
    { icon: <FiUsers className="text-4xl text-brand" />, title: 'Retail Pharmacy Support', desc: 'Comprehensive support including inventory forecasting and prompt deliveries for retail partners.' },
    { icon: <FiTrendingUp className="text-4xl text-brand" />, title: 'Inventory Management', desc: 'Advanced software solutions for tracking stock, reducing wastage, and ensuring availability.' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Meenakshi Pharma</title>
        <meta name="description" content="Explore our comprehensive pharmaceutical distribution and logistics services." />
      </Helmet>

      <PageBanner 
        title="Our Services" 
        subtitle="Comprehensive Healthcare Distribution Solutions Tailored to Your Needs"
      />

      {/* Services Grid */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-card hover:shadow-xl border border-gray-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-text">{service.title}</h3>
                <p className="text-text-light mb-6 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Super-Specialty Care Spotlight */}
      <section className="section-padding bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand opacity-5 skew-x-12"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif text-brand mb-6">Super-Specialty Care Focus</h2>
              <p className="text-lg text-text-light mb-6 leading-relaxed">
                We understand the critical nature of super-specialty medications. Our dedicated division ensures the uninterrupted supply of life-saving drugs for oncology, nephrology, cardiology, and other specialized fields.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><span className="text-brand">âœ“</span> Priority handling and dispatch</li>
                <li className="flex items-center gap-3"><span className="text-brand">âœ“</span> Strict temperature compliance</li>
                <li className="flex items-center gap-3"><span className="text-brand">âœ“</span> Direct-to-hospital delivery options</li>
              </ul>
              <Button to="/contact">Enquire Now</Button>
            </motion.div>
            <motion.div 
              className="flex-1 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1479&auto=format&fit=crop" alt="Super Specialty Care" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Services;



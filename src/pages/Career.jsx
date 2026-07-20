import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Job Application - ${formData.fullName}`;
    const body = `Name: ${formData.fullName}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0APlease find my resume attached.`;
    window.location.href = `mailto:hr@meenakshipharma.com?subject=${subject}&body=${body}`;
  };

  const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all";

  return (
    <>
      <Helmet>
        <title>Career Opportunities | Meenakshi Pharma</title>
        <meta name="description" content="Join our team and build a rewarding career in healthcare distribution." />
      </Helmet>

      <PageBanner 
        title="Join Our Team" 
        subtitle="Build a rewarding career with a company dedicated to improving healthcare access."
      />

      <section className="section-padding bg-transparent min-h-[60vh]">
        <div className="container-custom">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-16 h-16 bg-brand-light text-brand rounded-2xl flex items-center justify-center text-3xl mb-6">
                <FiBriefcase />
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif text-text mb-6">Shape the Future of Healthcare Logistics</h2>
              <p className="text-lg text-text-light mb-6 leading-relaxed">
                At Meenakshi Pharma, we believe our greatest asset is our people. We offer a dynamic work environment, opportunities for growth, and the chance to make a real difference in the healthcare supply chain.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand"></span> Competitive Compensation</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand"></span> Professional Development</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand"></span> Health & Wellness Benefits</li>
              </ul>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Application Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Full Name *</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClass} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 border border-blue-100 mb-6">
                    <p><strong>Note:</strong> Clicking submit will open your default email client. Please ensure you manually attach your resume before sending.</p>
                  </div>

                  <Button type="submit" className="w-full">Proceed to Email</Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Career;



import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', hospital: '', phone: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', hospital: '', phone: '', email: '', subject: '', message: '' });
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand transition-all";

  return (
    <>
      <Helmet>
        <title>Contact Us | Meenakshi Pharma</title>
        <meta name="description" content="Get in touch with our team for inquiries, support, or feedback." />
      </Helmet>

      <PageBanner 
        title="Contact Us" 
        subtitle="We are here to help. Reach out to us for any inquiries."
      />

      <section className="section-padding bg-transparent">
        <div className="container-custom">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side Info */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-serif text-text mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 text-xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Address</h4>
                    <p className="text-text-light">123 Pharma Avenue, Medical District,<br />City, State, 123456</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 text-xl">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Numbers</h4>
                    <p className="text-text-light">+91 98765 43210<br />+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 text-xl">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-text-light">info@meenakshipharma.com<br />support@meenakshipharma.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 text-xl">
                    <FiClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-text-light">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="outline" className="gap-2">
                  <FiMapPin /> Open in Google Maps
                </Button>
              </div>
            </motion.div>

            {/* Right Side Form */}
            <motion.div 
              className="flex-[1.5]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-6">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Your Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Hospital / Pharmacy</label>
                      <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Subject *</label>
                    <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Message *</label>
                    <textarea required name="message" rows="5" value={formData.message} onChange={handleChange} className={inputClass}></textarea>
                  </div>
                  <Button type="submit" className="w-full md:w-auto px-10">Send Message</Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

const Partner = () => {
  const [formData, setFormData] = useState({
    businessName: '', businessType: 'Pharmacy', ownerName: '',
    contactName: '', mobile: '', whatsapp: '', email: '', landline: '',
    address: '', city: '', district: '', state: '', pincode: '',
    categories: '', monthlyPurchase: '', requirements: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handled by backend, just log for now
    console.log(formData);
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  const inputClass = "w-full bg-white bg-opacity-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-text-light mb-2";

  return (
    <>
      <Helmet>
        <title>Partner With Us | Meenakshi Pharma</title>
        <meta name="description" content="Apply to become a partner pharmacy or clinic with Meenakshi Pharma." />
      </Helmet>

      <PageBanner 
        title="Partner With Us" 
        subtitle="Join our growing network of healthcare providers and experience seamless distribution."
      />

      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="container-custom">
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white bg-opacity-80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-brand mb-4">Partnership Application Form</h2>
                <p className="text-text-light">Please fill in your business details below. All fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Details */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">Business Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Business / Pharmacy / Clinic Name *</label>
                      <input required type="text" name="businessName" value={formData.businessName} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Business Type *</label>
                      <select name="businessType" value={formData.businessType} onChange={handleChange} className={inputClass}>
                        <option>Pharmacy</option>
                        <option>Hospital</option>
                        <option>Clinic</option>
                        <option>Wholesale</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Proprietor / Owner Name *</label>
                      <input required type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Contact Person Name *</label>
                      <input required type="text" name="contactName" value={formData.contactName} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Mobile Number *</label>
                      <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp Number</label>
                      <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Landline Number</label>
                      <input type="tel" name="landline" value={formData.landline} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">Address Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Full Business Address *</label>
                      <textarea required name="address" rows="3" value={formData.address} onChange={handleChange} className={inputClass}></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <label className={labelClass}>City *</label>
                        <input required type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>District *</label>
                        <input required type="text" name="district" value={formData.district} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>State *</label>
                        <input required type="text" name="state" value={formData.state} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>PIN Code *</label>
                        <input required type="text" name="pincode" value={formData.pincode} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents & Requirements */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">Documents & Business Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Drug Licence Upload (PDF/JPG) *</label>
                      <input required type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand hover:file:bg-brand hover:file:text-white transition-colors" />
                    </div>
                    <div>
                      <label className={labelClass}>GST Certificate Upload (PDF/JPG) *</label>
                      <input required type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand hover:file:bg-brand hover:file:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className={labelClass}>Interested Product Categories</label>
                      <input type="text" name="categories" placeholder="e.g. Cardio, Derma, General" value={formData.categories} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Estimated Monthly Purchase Value</label>
                      <select name="monthlyPurchase" value={formData.monthlyPurchase} onChange={handleChange} className={inputClass}>
                        <option>Less than â‚¹1 Lakh</option>
                        <option>â‚¹1 - 5 Lakhs</option>
                        <option>â‚¹5 - 10 Lakhs</option>
                        <option>More than â‚¹10 Lakhs</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelClass}>Specific Requirements or Comments</label>
                    <textarea name="requirements" rows="3" value={formData.requirements} onChange={handleChange} className={inputClass}></textarea>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-8">
                  <input required type="checkbox" id="agree" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-1 w-4 h-4 text-brand bg-gray-100 border-gray-300 rounded focus:ring-brand" />
                  <label htmlFor="agree" className="text-sm text-text-light">
                    I declare that the information provided above is true and correct. I authorize Meenakshi Pharma to contact me regarding this partnership application.
                  </label>
                </div>

                <div className="pt-6 text-center">
                  <Button type="submit" className="w-full md:w-auto md:px-16">Submit Application</Button>
                </div>
              </form>

            </motion.div>
          </div>

        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Partner;



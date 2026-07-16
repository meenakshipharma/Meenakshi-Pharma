import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Navigation } from "lucide-react";
import { CONTACT } from "../utils/contact";
import { CONTACT_PAGE_CONTENT } from "../utils/data";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleFormSubmit = (data) => {
    console.log("Contact form submission:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pt-24 pb-16 sm:pb-0">

      {/* CONTACT CONTAINER (SPLIT LAYOUT) */}
      <section className="section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 leading-none block">{CONTACT_PAGE_CONTENT.badge}</span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {CONTACT_PAGE_CONTENT.heading}
                </h2>
                <p className="text-slate-500 mt-3.5 leading-relaxed text-sm md:text-base">
                  {CONTACT_PAGE_CONTENT.subheading}
                </p>
              </div>

              {/* Cards List */}
              <div className="flex flex-col gap-5">

                {/* Address */}
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-100/50 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">Office &amp; Warehouse Address</h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed">
                      {CONTACT.address.line1},<br />
                      {CONTACT.address.line2},<br />
                      {CONTACT.address.city},<br />
                      {CONTACT.address.state} – {CONTACT.address.pincode}
                    </p>
                    <a
                      href={CONTACT.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-primary hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      <Navigation size={13} /> Open Google Maps
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm group">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-accent flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">Phone Numbers</h4>
                    <div className="flex flex-col gap-1 mt-1.5">
                      <a href={CONTACT.phone.primaryHref} className="text-slate-500 text-xs md:text-sm hover:text-primary transition-colors font-medium">
                        Office: {CONTACT.phone.primary}
                      </a>
                      <a href={CONTACT.phone.secondaryHref} className="text-slate-500 text-xs md:text-sm hover:text-primary transition-colors font-medium">
                        Mobile: {CONTACT.phone.secondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-100/50 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">Email Inboxes</h4>
                    <div className="flex flex-col gap-1 mt-1.5">
                      <a href={CONTACT.email.generalHref} className="text-slate-500 text-xs md:text-sm hover:text-primary transition-colors font-medium">
                        General: {CONTACT.email.general}
                      </a>
                      <a href={CONTACT.email.salesHref} className="text-slate-500 text-xs md:text-sm hover:text-primary transition-colors font-medium">
                        Sales: {CONTACT.email.sales}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 text-primary flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">Business Hours</h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-1.5 font-medium leading-relaxed">
                      {CONTACT.hours.weekdays}<br />
                      {CONTACT.hours.sunday}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-[24px] shadow-sm text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{CONTACT_PAGE_CONTENT.formBadge}</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-6">{CONTACT_PAGE_CONTENT.formHeading}</h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg md:text-xl">Inquiry Sent Successfully!</h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed max-w-sm">
                      {CONTACT_PAGE_CONTENT.successMessage}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Your Name</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                            errors.name ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("name", { required: true, minLength: 2 })}
                        />
                        {errors.name && <span className="text-red-500 text-[10px] font-bold">Please provide your name</span>}
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Hospital / Pharmacy Company</label>
                        <input
                          type="text"
                          placeholder="e.g. Trichy City Clinic"
                          className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                            errors.company ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("company", { required: true })}
                        />
                        {errors.company && <span className="text-red-500 text-[10px] font-bold">Please list your institution name</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="Contact phone number"
                          className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                            errors.phone ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                        />
                        {errors.phone && <span className="text-red-500 text-[10px] font-bold">Provide a valid 10-digit number</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                            errors.email ? "border-red-500" : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span className="text-red-500 text-[10px] font-bold">Provide a valid email address</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Inquiry Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. Sourcing generic medicines catalog / Cold storage vaccines request"
                        className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          errors.subject ? "border-red-500" : "border-slate-200 focus:border-primary"
                        }`}
                        {...register("subject", { required: true })}
                      />
                      {errors.subject && <span className="text-red-500 text-[10px] font-bold">Please outline your request topic</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase">Inquiry Details</label>
                      <textarea
                        rows="5"
                        placeholder="Write details about your supply requirements..."
                        className={`bg-white border text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          errors.message ? "border-red-500" : "border-slate-200 focus:border-primary"
                        }`}
                        {...register("message", { required: true, minLength: 10 })}
                      />
                      {errors.message && <span className="text-red-500 text-[10px] font-bold">Please provide a detailed query message</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer focus:outline-none text-center"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* Sticky Call Button on Mobile */}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-between shadow-lg">
        <div className="text-left">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block leading-none">{CONTACT_PAGE_CONTENT.mobileBarLabel}</span>
          <span className="text-sm font-bold text-slate-800 tracking-tight leading-none mt-1.5 block">{CONTACT.phone.secondary}</span>
        </div>
        <a
          href={CONTACT.phone.secondaryHref}
          className="px-6 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-lg shadow-md transition-colors"
        >
          Call Now
        </a>
      </div>

    </div>
  );
}

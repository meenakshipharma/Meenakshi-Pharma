import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, User, Phone, Paperclip, Send } from "lucide-react";
import { CONTACT } from "../utils/contact";

export default function Career() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // On submit: open the user's email client with all details pre-filled.
  // Resume is never uploaded — the user attaches it in their own email client.
  const handleSendViaEmail = (data) => {
    const subject = encodeURIComponent(`Job Application – ${data.fullName}`);
    const resumeNote = resumeFile
      ? `Resume File : ${resumeFile.name} (please attach this file to the email)`
      : `Resume File : (Please attach your resume to this email)`;

    const body = encodeURIComponent(
`Dear HR Team,

I would like to apply for a position at Meenakshi Pharma. Please find my details below.

Full Name : ${data.fullName}
Phone     : ${data.phone}
Email     : ${data.email}
${resumeNote}

I look forward to hearing from you.

Best regards,
${data.fullName}`
    );

    window.location.href = `mailto:${CONTACT.email.hr}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setResumeFile(null);
      reset();
    }, 6000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pt-24">

      {/* ── Application Section ───────────────────────────────────────── */}
      <section id="apply-form" className="section-padding bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">

          {/* Section badge + heading — matches other pages */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Join Our Team
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Apply at Meenakshi Pharma
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Fill in your basic details and click{" "}
              <strong className="text-slate-700">"Send Application"</strong>. Your email client
              opens pre-filled — just attach your resume and send.
            </p>
          </div>

          {/* Centred card — max-width like Services / About single-column sections */}
          <div className="max-w-[720px] mx-auto">
            <div className="bg-slate-50 border border-slate-200/80 rounded-[24px] shadow-premium p-6 md:p-10">

              <AnimatePresence mode="wait">

                {/* ── Success state ───────────────────────────────────── */}
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg md:text-xl">
                      Email Client Opened!
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed max-w-sm">
                      Your email is pre-filled with your details. Please{" "}
                      <strong>attach your resume</strong> and hit send. Our HR team will
                      contact you within 3 business days.
                    </p>
                  </motion.div>

                ) : (

                  /* ── Form ─────────────────────────────────────────── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit(handleSendViaEmail)}
                    className="space-y-5 text-left"
                  >

                    {/* Row 1 — Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <User size={11} className="text-primary" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          className={`bg-white border text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                            errors.fullName
                              ? "border-red-400"
                              : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("fullName", { required: true })}
                        />
                        {errors.fullName && (
                          <span className="text-red-500 text-[10px] font-bold">
                            This field is required
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Phone size={11} className="text-primary" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          className={`bg-white border text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                            errors.phone
                              ? "border-red-400"
                              : "border-slate-200 focus:border-primary"
                          }`}
                          {...register("phone", {
                            required: true,
                            pattern: /^[0-9]{10}$/,
                          })}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-[10px] font-bold">
                            Enter a valid 10-digit number
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 2 — Email (full width) */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Mail size={11} className="text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className={`bg-white border text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                          errors.email
                            ? "border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-[10px] font-bold">
                          Enter a valid email address
                        </span>
                      )}
                    </div>

                    {/* Row 3 — Resume picker */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Paperclip size={11} className="text-primary" />
                        Resume (PDF / DOCX)
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`flex items-center gap-4 bg-white border-2 border-dashed rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 ${
                          resumeFile
                            ? "border-primary/40 bg-primary/[0.03]"
                            : "border-slate-200 hover:border-primary/30"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            resumeFile ? "bg-primary/10" : "bg-slate-100"
                          }`}
                        >
                          <Paperclip
                            size={18}
                            className={resumeFile ? "text-primary" : "text-slate-400"}
                          />
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-sm font-semibold truncate ${
                              resumeFile ? "text-primary" : "text-slate-500"
                            }`}
                          >
                            {resumeFile ? resumeFile.name : "Click to select your resume"}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {resumeFile
                              ? `${(resumeFile.size / 1024).toFixed(0)} KB — ready to attach in email`
                              : "PDF or DOCX · Max 5 MB · Attached in your email client"}
                          </p>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-200/80" />


                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-md transition-colors focus:outline-none cursor-pointer"
                    >
                      <Send size={15} />
                      Send Application via Email
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

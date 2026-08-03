import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { career } from "../data/content";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    resume: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    success: false,
    error: "",
    message: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "fullName": {
        const val = value?.toString().trim();

        if (!val) return "Full Name is required.";

        if (!/^[A-Za-z\s.'-]{2,50}$/.test(val))
          return "Enter a valid full name.";

        break;
      }
      case "phone":
        if (!value || !value.toString().trim())
          return "Phone Number is required.";
        if (!/^[6-9]\d{9}$/.test(value.toString().trim()))
          return "Enter a valid 10-digit Indian phone number.";
        break;
      case "email":
        if (!value || !value.toString().trim())
          return "Email Address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString().trim()))
          return "Enter a valid email address.";
        break;
      case "resume":
        if (!value) return "Resume is required.";
        if (value.size > 5 * 1024 * 1024)
          return "Maximum file size is 5MB.";
        break;
      default:
        return "";
    }
    return "";
  };

  const validateAll = () => {
    const requiredFields = ["fullName", "phone", "email", "resume"];

    const newErrors = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      resume: null,
    });

    const resumeInput = document.getElementById("resume");
    if (resumeInput) {
      resumeInput.value = "";
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    if (name === "resume") {
      const file = files?.[0];

      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        e.target.value = "";

        setFormData((prev) => ({
          ...prev,
          resume: null,
        }));

        setFormErrors((prev) => ({
          ...prev,
          resume: "Only PDF, DOC and DOCX files are allowed.",
        }));

        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: "Maximum file size is 5MB.",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));

      return;
    }

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      const error = validateField(name, updated[name]);

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      success: false,
      error: "",
      message: "",
    });

    if (!validateAll()) {
      return;
    }
    setLoading(true);

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName.trim());
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("resume", formData.resume);

      const response = await fetch("/.netlify/functions/careers", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application.");
      }

      setStatus({
        success: true,
        error: "",
        message:
          "Your application has been submitted successfully. Our HR team will review your profile and contact you if shortlisted.",
      });

      resetForm();
    } catch (error) {
      console.error(error);

      setStatus({
        success: false,
        error: error.message || "Something went wrong. Please try again later.",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#0B4E8C] focus:border-[#0B4E8C] transition-all text-sm shadow-xs";

  return (
    <>
      <Helmet>
        <title>{career.seo.title}</title>
        <meta
          name="description"
          content="Join Meenakshi Pharma. Apply for career opportunities by submitting your details and resume."
        />
      </Helmet>

      <PageBanner
        title={career.banner.title}
        subtitle={career.banner.subtitle}
        subsubtitle={career.banner.subsubtitle}
      />

      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#0B4E8C] p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5EB] text-[#1C8A3C] flex items-center justify-center border border-[#1C8A3C]/20 shadow-xs shrink-0">
                <FiBriefcase className="text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C]">Apply Now</h2>
                <p className="text-[#333333] text-sm md:text-base">
                  Fill in your details and upload your latest resume.
                </p>
              </div>
            </div>

            {status.success && (
              <div className="mb-6 rounded-2xl border border-[#1C8A3C]/30 bg-[#E8F5EB] p-4 text-[#1C8A3C] text-sm font-medium">
                {status.message}
              </div>
            )}

            {status.error && (
              <div className="mb-6 rounded-2xl border border-[#E31E24]/30 bg-[#FDE8E9] p-4 text-[#E31E24] text-sm font-medium">
                {status.error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              <div>
                <label className="block mb-2 font-semibold text-[#0B4E8C] text-sm">Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`${inputClass} ${
                    formErrors.fullName ? "border-[#E31E24] bg-[#FDE8E9]/20" : ""
                  }`}
                />
                {formErrors.fullName && (
                  <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                    {formErrors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0B4E8C] text-sm">Mobile Number *</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClass} ${formErrors.phone ? "border-[#E31E24] bg-[#FDE8E9]/20" : ""}`}
                  placeholder="Enter your mobile number"
                />
                {formErrors.phone && (
                  <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0B4E8C] text-sm">Email Address *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClass} ${formErrors.email ? "border-[#E31E24] bg-[#FDE8E9]/20" : ""}`}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0B4E8C] text-sm">Upload Resume *</label>

                <input
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className={`w-full text-sm text-[#333333] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E8F5EB] file:text-[#1C8A3C] hover:file:bg-[#1C8A3C] hover:file:text-white transition-colors cursor-pointer ${formErrors.resume ? "border border-[#E31E24] rounded-xl" : ""}`}
                />

                <p className="mt-2 text-xs text-[#555555]">
                  Accepted formats: PDF, DOC, DOCX (Maximum 5 MB)
                </p>

                {formErrors.resume && (
                  <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                    {formErrors.resume}
                  </p>
                )}
                {formData.resume && (
                  <div className="mt-3 rounded-xl bg-[#E8F5EB] border border-[#1C8A3C]/30 p-3 text-xs text-[#1C8A3C]">
                    <span className="font-bold">Selected File:</span>{" "}
                    {formData.resume.name}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" disabled={loading} className="w-full">
                  {loading ? "Submitting Application..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Career;

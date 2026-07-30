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

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    success: false,
    error: "",
    message: "",
  });

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

    if (name === "resume") {
      const file = files?.[0];

      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC and DOCX files are allowed.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Maximum file size is 5MB.");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      success: false,
      error: "",
      message: "",
    });

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
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
    "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300";
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
        a
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                <FiBriefcase className="text-brand text-xl" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">Apply Now</h2>

                <p className="text-gray-600">
                  Fill in your details and upload your latest resume.
                </p>
              </div>
            </div>

            {status.success && (
              <div className="mb-6 rounded-lg border border-green-300 bg-green-50 p-4 text-green-700">
                {status.message}
              </div>
            )}

            {status.error && (
              <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
                {status.error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Mobile Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Upload Resume</label>

                <input
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand hover:file:bg-brand hover:file:text-white transition-colors"
                  required
                />

                <p className="mt-2 text-sm text-gray-500">
                  Accepted formats: PDF, DOC, DOCX (Maximum 5 MB)
                </p>

                {formData.resume && (
                  <div className="mt-3 rounded-lg bg-gray-50 border p-3 text-sm">
                    <span className="font-semibold">Selected File:</span>{" "}
                    {formData.resume.name}
                  </div>
                )}
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Submitting Application..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Career;

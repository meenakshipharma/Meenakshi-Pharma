import React, { useState, useRef, useEffect } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import CustomSelect from "../components/CustomSelect";
import LegalModal from "../components/LegalModal";
import ConfirmModal from "../components/ConfirmModal";
import { career } from "../data/content";

const careerSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://meenakshipharma.com/career/#webpage",
    "url": "https://meenakshipharma.com/career",
    "name": "Career Opportunities | Meenakshi Pharma Trichy",
    "description": "Explore career opportunities in pharmaceutical distribution and healthcare logistics with Meenakshi Pharma in Thillai Nagar, Trichy.",
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
        "name": "Career Opportunities",
        "item": "https://meenakshipharma.com/career",
      },
    ],
  },
];

const Career = () => {
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    location: "",
    position: "",
    otherPosition: "",
    experience: "",
    currentEmployer: "",
    currentDesignation: "",
    expectedSalary: "",
    noticePeriod: "",
    resume: null,
    coverLetter: "",
    declarationConfirmed: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, tab: 'privacy' });
  const [fileToRemove, setFileToRemove] = useState(null);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (loading) {
        e.preventDefault();
        e.returnValue = "Your job application submission is in progress. Please wait until it completes.";
        return e.returnValue;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [loading]);

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
        if (!/^[A-Za-z\s.'-]{2,50}$/.test(val)) return "Enter a valid full name.";
        break;
      }
      case "gender":
        if (!value || !value.toString().trim()) return "Gender is required.";
        break;
      case "phone":
        if (!value || !value.toString().trim()) return "Mobile Number is required.";
        if (!/^[6-9]\d{9}$/.test(value.toString().trim()))
          return "Enter a valid 10-digit Indian mobile number.";
        break;
      case "email":
        if (!value || !value.toString().trim()) return "Email Address is required.";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.toString().trim()))
          return "Enter a valid email address.";
        break;
      case "location":
        if (!value || !value.toString().trim()) return "Current Location is required.";
        break;
      case "position":
        if (!value || !value.toString().trim()) return "Position Applying For is required.";
        break;
      case "otherPosition":
        if (formData.position === "Others" && (!value || !value.toString().trim())) {
          return "Please specify the position.";
        }
        break;
      case "experience":
        if (!value || !value.toString().trim()) return "Total Experience is required.";
        break;
      case "expectedSalary":
        if (!value || !value.toString().trim()) return "Expected Salary is required.";
        break;
      case "noticePeriod":
        if (!value || !value.toString().trim()) return "Notice Period is required.";
        break;
      case "resume":
        if (!value) return "Resume is required.";
        if (value.size > 5 * 1024 * 1024) return "Maximum file size is 5MB.";
        break;
      case "declarationConfirmed":
        if (!value) return "You must accept the declaration to submit.";
        break;
      default:
        return "";
    }
    return "";
  };

  const validateAll = () => {
    const requiredFields = [
      "fullName",
      "gender",
      "phone",
      "email",
      "location",
      "position",
      "experience",
      "expectedSalary",
      "noticePeriod",
      "resume",
      "declarationConfirmed",
    ];

    if (formData.position === "Others") {
      requiredFields.push("otherPosition");
    }

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
      gender: "",
      phone: "",
      email: "",
      location: "",
      position: "",
      otherPosition: "",
      experience: "",
      currentEmployer: "",
      currentDesignation: "",
      expectedSalary: "",
      noticePeriod: "",
      resume: null,
      coverLetter: "",
      declarationConfirmed: false,
    });

    const resumeInput = document.getElementById("resume");
    if (resumeInput) {
      resumeInput.value = "";
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    const error = validateField(name, fieldValue);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    let { name, value, type, checked, files } = e.target;

    if (name === "fullName" || name === "location" || name === "otherPosition") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

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
        setFormData((prev) => ({ ...prev, resume: null }));
        setFormErrors((prev) => ({
          ...prev,
          resume: "Only PDF, DOC and DOCX files are allowed.",
        }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({
          ...prev,
          resume: "Maximum file size is 5MB.",
        }));
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
      return;
    }

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => {
      const updated = { ...prev, [name]: fieldValue };
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
      if (formContainerRef.current) {
        formContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setLoading(true);

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName.trim());
      data.append("gender", formData.gender);
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("location", formData.location.trim());
      data.append("position", formData.position === "Others" ? formData.otherPosition.trim() : formData.position);
      data.append("experience", formData.experience);
      data.append("currentEmployer", formData.currentEmployer.trim());
      data.append("currentDesignation", formData.currentDesignation.trim());
      data.append("expectedSalary", formData.expectedSalary);
      data.append("noticePeriod", formData.noticePeriod);
      data.append("resume", formData.resume);
      data.append("coverLetter", formData.coverLetter.trim());

      const response = await fetch("/.netlify/functions/careers", {
        method: "POST",
        body: data,
      });

      let result = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application.");
      }

      setStatus({
        success: true,
        error: "",
        message: "Your job application has been submitted successfully.",
      });

      resetForm();

      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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

  const inputErrorClass =
    "w-full bg-[#FDE8E9]/20 border border-[#E31E24] rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] transition-all text-sm shadow-xs";

  const getInputClass = (fieldName) =>
    formErrors[fieldName] ? inputErrorClass : inputClass;

  return (
    <>
      <SEO
        title="Career Opportunities | Meenakshi Pharma Trichy"
        description="Explore career opportunities in pharmaceutical distribution and healthcare logistics with Meenakshi Pharma in Thillai Nagar, Trichy."
        keywords={[
          "pharma jobs in Trichy",
          "healthcare distribution careers",
          "Meenakshi Pharma recruitment",
          "pharmaceutical logistics jobs Trichy",
          "Thillai Nagar pharma vacancies"
        ]}
        canonicalPath="/career"
        schema={careerSchemas}
      />

      <PageBanner
        title={career.banner.title}
        subtitle={career.banner.subtitle}
        subsubtitle={career.banner.subsubtitle}
      />

      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 max-w-5xl" ref={formContainerRef}>
          {status.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#1C8A3C] p-4 sm:p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8F5EB] text-[#1C8A3C] flex items-center justify-center mx-auto mb-6 shadow-xs border border-[#1C8A3C]/20">
                <FiCheckCircle className="text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-6">
                Thank You for Your Interest in Joining Meenakshi Pharma
              </h2>
              
              <div className="bg-[#E8F5EB] border-l-4 border-[#1C8A3C] p-4 rounded-xl text-[#1C8A3C] font-semibold text-sm md:text-base max-w-2xl mx-auto mb-6 text-justify">
                We have successfully received your application and resume. Our recruitment team will review your profile based on the requirements of the position you applied for.
              </div>

              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-4 leading-relaxed text-justify">
                If your qualifications and experience match our current or future hiring requirements, we will contact you regarding the next steps in the recruitment process.
              </p>

              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-4 leading-relaxed text-justify">
                We appreciate the time and effort you have taken to apply and thank you for considering <span className="font-semibold italic text-[#0B4E8C]">Meenakshi Pharma</span> as your career destination.
              </p>

              <p className="text-[#0B4E8C] font-bold text-sm md:text-base max-w-2xl mx-auto mb-8 text-center">
                We wish you every success and look forward to connecting with you soon.
              </p>

              <div className="border-t border-slate-200 pt-6 max-w-2xl mx-auto text-center text-slate-600 text-sm">
                <p className="font-semibold italic">Regards,</p>
                <p className="font-bold text-[#0B4E8C] italic">Recruitment Team</p>
                <p className="font-semibold text-slate-700 italic">Meenakshi Pharma</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#0B4E8C] p-4 sm:p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5EB] text-[#1C8A3C] flex items-center justify-center border border-[#1C8A3C]/20 shadow-xs shrink-0">
                  <FiBriefcase className="text-2xl" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C]">
                    Apply Now
                  </h2>
                  <p className="text-[#333333] text-sm md:text-base">
                    Fill in your details and upload your latest resume.
                  </p>
                </div>
              </div>

              {status.error && (
                <div className="mb-6 rounded-2xl border border-[#E31E24]/30 bg-[#FDE8E9] p-4 text-[#E31E24] text-sm font-medium">
                  {status.error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                encType="multipart/form-data"
              >
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-2 mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className={getInputClass("fullName")}
                      />
                      {formErrors.fullName && (
                        <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="gender" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Gender *
                        </label>
                        <CustomSelect
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          placeholder="Select Gender"
                          error={!!formErrors.gender}
                          options={[
                            "Male",
                            "Female",
                            "Common",
                          ]}
                        />
                        {formErrors.gender && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.gender}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Mobile Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          placeholder="Enter your mobile number"
                          className={getInputClass("phone")}
                        />
                        {formErrors.phone && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your email"
                          className={getInputClass("email")}
                        />
                        {formErrors.email && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="location" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Current Location (City)*
                        </label>
                        <input
                          id="location"
                          type="text"
                          name="location"
                          autoComplete="address-level2"
                          value={formData.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your city"
                          className={getInputClass("location")}
                        />
                        {formErrors.location && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-2 mb-4">
                    Professional Information
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="position" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Position Applying For *
                        </label>
                        <CustomSelect
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          placeholder="Select Position"
                          error={!!formErrors.position}
                          options={[
                            "Delivery Executive",
                            "Warehouse Executive",
                            "Billing Executive",
                            "Sales Executive",
                            "Customer Support Executive",
                            "Accounts Executive",
                            "Pharmacist",
                            "Digital Marketing Executive",
                            "HR & Administration",
                            "Operations Executive",
                            "Others",
                          ]}
                        />
                        {formErrors.position && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.position}
                          </p>
                        )}
                        {formData.position === "Others" && (
                          <div className="mt-3">
                            <label htmlFor="otherPosition" className="sr-only">Other Position</label>
                            <input
                              id="otherPosition"
                              type="text"
                              name="otherPosition"
                              autoComplete="off"
                              value={formData.otherPosition || ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Enter position name"
                              className={getInputClass("otherPosition")}
                            />
                            {formErrors.otherPosition && (
                              <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                                {formErrors.otherPosition}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="experience" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Total Experience *
                        </label>
                        <CustomSelect
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="Select Experience"
                          error={!!formErrors.experience}
                          options={[
                            "Fresher",
                            "Less than 1 Year",
                            "1–2 Years",
                            "2–5 Years",
                            "5–10 Years",
                            "More than 10 Years",
                          ]}
                        />
                        {formErrors.experience && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.experience}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentEmployer" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Current Employer (Optional)
                        </label>
                        <input
                          id="currentEmployer"
                          type="text"
                          name="currentEmployer"
                          autoComplete="organization"
                          value={formData.currentEmployer}
                          onChange={handleChange}
                          placeholder="Enter your current employer"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="currentDesignation" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Current Designation (Optional)
                        </label>
                        <input
                          id="currentDesignation"
                          type="text"
                          name="currentDesignation"
                          autoComplete="organization-title"
                          value={formData.currentDesignation}
                          onChange={handleChange}
                          placeholder="Enter your current designation"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expectedSalary" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Expected Salary *
                        </label>
                        <CustomSelect
                          id="expectedSalary"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleChange}
                          placeholder="Select Expected Salary"
                          error={!!formErrors.expectedSalary}
                          options={[
                            "Below ₹15,000",
                            "₹15,000 – ₹20,000",
                            "₹20,001 – ₹25,000",
                            "₹25,001 – ₹30,000",
                            "₹30,001 – ₹40,000",
                            "₹40,001 – ₹50,000",
                            "Above ₹50,000",
                            "Negotiable",
                          ]}
                        />
                        {formErrors.expectedSalary && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.expectedSalary}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="noticePeriod" className="block mb-1.5 font-semibold text-[#0B4E8C] text-sm">
                          Notice Period *
                        </label>
                        <CustomSelect
                          id="noticePeriod"
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleChange}
                          placeholder="Select Notice Period"
                          error={!!formErrors.noticePeriod}
                          options={[
                            "Immediate",
                            "Within 15 Days",
                            "30 Days",
                            "45 Days",
                            "60 Days",
                            "90 Days",
                            "Negotiable",
                          ]}
                        />
                        {formErrors.noticePeriod && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.noticePeriod}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-2 mb-4">
                    Resume
                  </h3>
                  <div>
                    <label htmlFor="resume" className="block mb-2 font-semibold text-[#0B4E8C] text-sm">
                      Upload Resume (PDF, DOC, DOCX) *
                    </label>
                    <input
                      id="resume"
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className={`w-full text-sm text-[#333333] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E8F5EB] file:text-[#1C8A3C] hover:file:bg-[#1C8A3C] hover:file:text-white transition-colors cursor-pointer p-1.5 ${
                        formErrors.resume ? "border border-[#E31E24] bg-[#FDE8E9]/20 rounded-xl" : ""
                      } ${formData.resume ? "hidden" : "block"}`}
                    />
                    {!formData.resume && (
                      <p className="mt-2 text-xs text-[#555555]">
                        Accepted formats: PDF, DOC, DOCX (Maximum 5 MB)
                      </p>
                    )}
                    {formErrors.resume && (
                      <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                        {formErrors.resume}
                      </p>
                    )}
                    {formData.resume && (
                      <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EB] text-[#1C8A3C]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="truncate text-sm font-semibold text-slate-700">
                            {formData.resume.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => window.open(URL.createObjectURL(formData.resume), '_blank')}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-[#0B4E8C] transition-colors hover:bg-slate-200"
                          >
                            Preview
                          </button>
                          <button
                            type="button"
                            onClick={() => setFileToRemove("resume")}
                            className="rounded-lg bg-[#FDE8E9] px-3 py-1.5 text-xs font-semibold text-[#E31E24] transition-colors hover:bg-[#FAD1D3]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-2 mb-4">
                    Additional Information
                  </h3>
                  <div>
                    <label htmlFor="coverLetter" className="block mb-2 font-semibold text-[#0B4E8C] text-sm">
                      Cover Letter / Additional Comments (Optional)
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows="4"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Share any additional details or introduction..."
                      className={inputClass}
                    ></textarea>
                  </div>
                </div>

                {/* Declaration */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-2 mb-4">
                    Declaration
                  </h3>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="declarationConfirmed"
                      name="declarationConfirmed"
                      checked={formData.declarationConfirmed}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B4E8C] rounded border-slate-300 focus:ring-[#0B4E8C] cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="declarationConfirmed"
                      className="text-xs md:text-sm text-[#333333] cursor-pointer select-none"
                    >
                      I confirm that the information provided is true and accurate, and agree to the{" "}
                      <button type="button" onClick={(e) => { e.preventDefault(); setLegalModalState({ isOpen: true, tab: 'privacy' }); }} className="text-[#0B4E8C] underline font-semibold hover:text-[#1C8A3C]">
                        Privacy Policy
                      </button>{" "}
                      and{" "}
                      <button type="button" onClick={(e) => { e.preventDefault(); setLegalModalState({ isOpen: true, tab: 'terms' }); }} className="text-[#0B4E8C] underline font-semibold hover:text-[#1C8A3C]">
                        Terms of Service
                      </button>. *
                    </label>
                  </div>
                  {formErrors.declarationConfirmed && (
                    <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                      {formErrors.declarationConfirmed}
                    </p>
                  )}
                </div>

                <div className="pt-6 text-center flex justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="px-8 md:px-16"
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />

      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState(prev => ({ ...prev, isOpen: false }))}
      />

      <ConfirmModal
        isOpen={!!fileToRemove}
        onClose={() => setFileToRemove(null)}
        onConfirm={() => {
          if (fileToRemove) {
            setFormData(prev => ({ ...prev, [fileToRemove]: null }));
            const input = document.getElementById(fileToRemove);
            if (input) input.value = '';
          }
        }}
        title="Remove File"
        message="Are you sure you want to remove this file?"
      />

      {/* Non-dismissible Full-screen Loading Overlay during submission */}
      {loading && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-[9999] flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-slate-100 flex flex-col items-center"
          >
            <div className="w-14 h-14 border-4 border-[#0B4E8C] border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold text-[#0B4E8C] mb-2">Submitting Application...</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Please wait while your application and resume are being uploaded. Do not navigate away or refresh the page.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Career;

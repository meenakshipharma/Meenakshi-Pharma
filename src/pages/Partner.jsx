import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import LegalModal from "../components/LegalModal";
import { partner } from "../data/content";

const CATEGORY_OPTIONS = [
  "General Medicines",
  "Specialty Medicines",
  "Cosmetic Products",
  "Nutritional Products",
];

const Partner = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    contactName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    landline: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    categories: [],
    monthlyPurchase: "",
    requirements: "",
    agreeTerms: false,
    drugLicense: null,
    gstCertificate: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [sameAsOwner, setSameAsOwner] = useState(false);
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, tab: 'privacy' });
  const dropdownRef = useRef(null);
  const formContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (loading) {
        e.preventDefault();
        e.returnValue = "Your partnership application submission is in progress. Please wait until it completes.";
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

  // ── Validation rules ──────────────────────────────────────────────────────
  const validateField = (name, value) => {
    switch (name) {
      case "businessName":
        if (!value || !value.toString().trim())
          return "Business / Pharmacy / Clinic Name is required.";
        break;
      case "businessType":
        if (!value || !value.toString().trim())
          return "Business Type is required.";
        break;
      case "ownerName":
        if (!value || !value.toString().trim())
          return "Proprietor / Owner Name is required.";
        break;
      case "contactName":
        if (!value || !value.toString().trim())
          return "Contact Person Name is required.";
        break;
      case "mobile":
        if (!value || !value.toString().trim())
          return "Mobile Number is required.";
        if (!/^[6-9]\d{9}$/.test(value.toString().trim()))
          return "Enter a valid 10-digit Indian mobile number.";
        break;
      case "whatsapp":
        if (!value || !value.toString().trim()) {
          return "WhatsApp Number is required.";
        }
        if (!/^[6-9]\d{9}$/.test(value.toString().trim())) {
          return "Enter a valid 10-digit WhatsApp number.";
        }
        break;
      case "email":
        if (!value || !value.toString().trim())
          return "Email Address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString().trim()))
          return "Enter a valid email address.";
        break;
      case "address":
        if (!value || !value.toString().trim())
          return "Full Business Address is required.";
        break;
      case "city":
        if (!value || !value.toString().trim()) return "City is required.";
        break;
      case "district":
        if (!value || !value.toString().trim()) return "District is required.";
        break;
      case "state":
        if (!value || !value.toString().trim()) return "State is required.";
        break;
      case "pincode":
        if (!value || !value.toString().trim()) return "PIN Code is required.";
        if (!/^\d{6}$/.test(value.toString().trim()))
          return "Enter a valid 6-digit PIN code.";
        break;
      case "drugLicense":
        if (!value) return "Drug Licence document is required.";
        break;
      case "gstCertificate":
        if (!value) return "GST Certificate document is required.";
        break;
      case "categories":
        if (
          !value ||
          (Array.isArray(value) && value.length === 0) ||
          (typeof value === "string" && !value.trim())
        ) {
          return "Interested Product Categories is required.";
        }
        break;
      case "monthlyPurchase":
        if (!value || !value.toString().trim())
          return "Estimated Monthly Purchase Value is required.";
        break;
      case "agreeTerms":
        if (!value)
          return "You must agree to the declaration before submitting.";
        break;
      default:
        return "";
    }
    return "";
  };

  const validateAll = () => {
    const requiredFields = [
      "businessName",
      "businessType",
      "ownerName",
      "contactName",
      "mobile",
      "whatsapp",
      "email",
      "address",
      "city",
      "district",
      "state",
      "pincode",
      "categories",
      "monthlyPurchase",
      "drugLicense",
      "gstCertificate",
      "agreeTerms",
    ];

    const newErrors = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    let { name, value, type, checked, files } = e.target;

    if (name === "mobile" || name === "whatsapp") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "pincode") {
      value = value.replace(/\D/g, "").slice(0, 6);
    }

    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    if (type === "file") {
      const file = files?.[0];

      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (!allowedTypes.includes(file.type)) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: "Only PDF, JPG, JPEG and PNG files are allowed.",
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

      setFormData((prev) => ({ ...prev, [name]: file }));
      return;
    }
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (sameAsOwner && name === "ownerName") {
        updated.contactName = value;
      }

      if (sameAsMobile && name === "mobile") {
        updated.whatsapp = value;
      }

      const error = validateField(name, updated[name]);

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));

      if (sameAsMobile && name === "mobile") {
        const whatsappError = validateField("whatsapp", updated.whatsapp);

        setFormErrors((prevErrors) => ({
          ...prevErrors,
          whatsapp: whatsappError,
        }));
      }

      return updated;
    });
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

  const handleCategoryToggle = (category) => {
    setFormData((prev) => {
      const current = Array.isArray(prev.categories) ? prev.categories : [];
      const updated = current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category];

      const error = validateField("categories", updated);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        categories: error,
      }));

      return { ...prev, categories: updated };
    });
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      businessType: "",
      ownerName: "",
      contactName: "",
      mobile: "",
      whatsapp: "",
      email: "",
      landline: "",
      address: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      categories: [],
      monthlyPurchase: "",
      requirements: "",
      agreeTerms: false,
      drugLicense: null,
      gstCertificate: null,
    });

    setCategoriesOpen(false);
    setFormErrors({});

    const dlInput = document.querySelector('input[name="drugLicense"]');
    if (dlInput) dlInput.value = "";
    const gstInput = document.querySelector('input[name="gstCertificate"]');
    if (gstInput) gstInput.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateAll();
    if (!isValid) return;

    setLoading(true);

    setStatus({
      success: false,
      error: "",
      message: "",
    });

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => data.append(key, v));
        } else {
          data.append(key, value);
        }
      });

      const response = await fetch("/.netlify/functions/partner", {
        method: "POST",
        body: data,
      });

      let result = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      }

      if (!response.ok) {
        throw new Error(result.message || "Submission Failed.");
      }

      setStatus({
        success: true,
        error: "",
        message:
          "Your partnership application has been submitted successfully. Our team will contact you shortly.",
      });

      resetForm();

      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);
    } catch (err) {
      console.error(err);

      setStatus({
        success: false,
        error: err.message || "Something went wrong.",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  // ── Styles ────────────────────────────────────────────────────────────────
  const inputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#0B4E8C] focus:border-[#0B4E8C] transition-all text-sm shadow-xs";
  const inputErrorClass =
    "w-full bg-red-50/30 border border-[#E31E24] rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] transition-all text-sm";
  const labelClass = "block text-sm font-semibold text-[#0B4E8C] mb-1.5";

  const getInputClass = (fieldName) =>
    formErrors[fieldName] ? inputErrorClass : inputClass;

  const ErrorMsg = ({ field }) =>
    formErrors[field] ? (
      <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
        {formErrors[field]}
      </p>
    ) : null;

  return (
    <>
      <Helmet>
        <title>Partner With Us | Meenakshi Pharma</title>
        <meta
          name="description"
          content="Apply to become a partner pharmacy or clinic with Meenakshi Pharma."
        />
      </Helmet>

      <PageBanner
        title={partner.banner.title}
        subtitle={partner.banner.subtitle}
        subsubtitle={partner.banner.subsubtitle}
      />

      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              ref={formContainerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#0B4E8C]"
            >
              {status.success ? (
                <div className="text-center py-6 px-4">
                  <div className="w-20 h-20 bg-[#E8F5EB] text-[#1C8A3C] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#1C8A3C]/20 shadow-xs">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-4">
                    Thank You for Your Interest in Partnering with Meenakshi
                    Pharma
                  </h2>

                  <div className="inline-block bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold text-sm md:text-base px-6 py-3 rounded-2xl mb-8">
                    Your partnership request has been submitted successfully.
                  </div>

                  <div className="max-w-2xl mx-auto space-y-4 text-[#333333] text-sm md:text-base leading-relaxed text-justify bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8">
                    <p>
                      Our team will review the information you have provided and
                      verify your Drug License and GST Certificate as part of
                      our standard onboarding process. Once the verification is
                      complete, one of our representatives will contact you to
                      discuss the next steps.
                    </p>
                    <p>
                      We appreciate your interest in partnering with Meenakshi
                      Pharma and look forward to building a trusted, long-term
                      business relationship.
                    </p>
                    <p className="font-semibold text-[#0B4E8C] pt-2">
                      Thank you for choosing Meenakshi Pharma as your
                      pharmaceutical supply partner.
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    onClick={() => {
                      setStatus({ success: false, error: "", message: "" });
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="px-8"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-3">
                      Partnership Application Form
                    </h2>
                    <p className="text-[#333333] text-sm md:text-base">
                      Please fill in your business details below. All fields
                      marked with * are required.
                    </p>
                  </div>

                  {/* ── Important Notice / Warning Box ───────────────────── */}
                  <div className="mb-8 rounded-2xl border border-[#FDE68A] bg-[#FEFCE8] p-4 md:p-5 shadow-xs flex items-start gap-3.5">
                    <svg
                      className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="9" strokeWidth="2" />
                      <line
                        x1="12"
                        y1="8"
                        x2="12"
                        y2="12"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="16"
                        x2="12.01"
                        y2="16"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-xs md:text-sm text-[#78350F] leading-relaxed">
                      <p className="mb-2">
                        <strong className="font-bold text-[#92400E]">
                          Important Notice:
                        </strong>{" "}
                        Meenakshi Pharma is a licensed pharmaceutical wholesale
                        distributor. We supply medicines only to licensed retail
                        pharmacies, hospitals, and clinics holding a valid Drug
                        License. We do not sell medicines directly to the
                        general public or individual consumers.
                      </p>
                      <p className="font-semibold text-[#92400E]">
                        Please complete the form below if you are an eligible
                        healthcare business interested in partnering with us.
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
                    noValidate
                    className="space-y-8"
                    encType="multipart/form-data"
                  >
                    {/* ── Business Details ───────────────────────────────── */}
                    <div>
                      <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-3 mb-6">
                        Business Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Business Name */}
                        <div>
                          <label className={labelClass}>
                            Business / Pharmacy / Clinic Name *
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass("businessName")}
                          />
                          <ErrorMsg field="businessName" />
                        </div>

                        {/* Business Type */}
                        <div>
                          <label className={labelClass}>Business Type *</label>
                          <CustomSelect
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            placeholder="Select Business Type"
                            error={!!formErrors.businessType}
                            options={[
                              "Retail Pharmacy",
                              "Hospital",
                              "Clinic",
                            ]}
                          />
                          <ErrorMsg field="businessType" />
                        </div>

                        {/* Owner Name */}
                        <div>
                          <label className={labelClass}>
                            Proprietor / Owner Name *
                          </label>
                          <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass("ownerName")}
                          />
                          <ErrorMsg field="ownerName" />
                        </div>

                        {/* Contact Person Name */}
                        <div>
                          <label className={labelClass}>
                            Contact Person Name *
                          </label>
                          <input
                            type="text"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={sameAsOwner}
                            className={`${getInputClass("contactName")} ${
                              sameAsOwner
                                ? "bg-slate-100 cursor-not-allowed"
                                : ""
                            }`}
                          />
                          <ErrorMsg field="contactName" />
                          <div className="mt-2 flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="sameAsOwner"
                              checked={sameAsOwner}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setSameAsOwner(checked);
                                setFormData((prev) => ({
                                  ...prev,
                                  contactName: checked ? prev.ownerName : "",
                                }));
                                if (checked) {
                                  setFormErrors((prev) => ({
                                    ...prev,
                                    contactName: "",
                                  }));
                                }
                              }}
                              className="w-4 h-4 text-[#1C8A3C] rounded focus:ring-[#1C8A3C]"
                            />
                            <label
                              htmlFor="sameAsOwner"
                              className="text-xs text-[#333333] font-medium cursor-pointer"
                            >
                              Same as Proprietor / Owner
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Contact Information ─────────────────────────────── */}
                    <div>
                      <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-3 mb-6">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mobile */}
                        <div>
                          <label className={labelClass}>Mobile Number *</label>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass("mobile")}
                          />
                          <ErrorMsg field="mobile" />
                        </div>

                        {/* WhatsApp */}
                        <div>
                          <label className={labelClass}>
                            WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={sameAsMobile}
                            className={`${getInputClass("whatsapp")} ${
                              sameAsMobile ? "bg-slate-100 cursor-not-allowed" : ""
                            }`}
                          />
                          <ErrorMsg field="whatsapp" />
                          <div className="mt-2 flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="sameAsMobile"
                              checked={sameAsMobile}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setSameAsMobile(checked);
                                setFormData((prev) => {
                                  const newWhatsapp = checked ? prev.mobile : "";
                                  const err = checked ? validateField("whatsapp", newWhatsapp) : "";
                                  setFormErrors((pe) => ({ ...pe, whatsapp: err }));
                                  return { ...prev, whatsapp: newWhatsapp };
                                });
                              }}
                              className="w-4 h-4 text-[#1C8A3C] rounded focus:ring-[#1C8A3C]"
                            />
                            <label
                              htmlFor="sameAsMobile"
                              className="text-xs text-[#333333] font-medium cursor-pointer"
                            >
                              Same as Mobile Number
                            </label>
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass("email")}
                          />
                          <ErrorMsg field="email" />
                        </div>

                        {/* Landline */}
                        <div>
                          <label className={labelClass}>Landline Number</label>
                          <input
                            type="tel"
                            name="landline"
                            value={formData.landline}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    {/* ── Address Details ─────────────────────────────────── */}
                    <div>
                      <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-3 mb-6">
                        Address Details
                      </h3>
                      <div className="space-y-6">
                        {/* Full Address */}
                        <div>
                          <label className={labelClass}>
                            Full Business Address *
                          </label>
                          <textarea
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass("address")}
                          ></textarea>
                          <ErrorMsg field="address" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          {/* City */}
                          <div>
                            <label className={labelClass}>City *</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={getInputClass("city")}
                            />
                            <ErrorMsg field="city" />
                          </div>

                          {/* District */}
                          <div>
                            <label className={labelClass}>District *</label>
                            <input
                              type="text"
                              name="district"
                              value={formData.district}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={getInputClass("district")}
                            />
                            <ErrorMsg field="district" />
                          </div>

                          {/* State */}
                          <div>
                            <label className={labelClass}>State *</label>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={getInputClass("state")}
                            />
                            <ErrorMsg field="state" />
                          </div>

                          {/* Pincode */}
                          <div>
                            <label className={labelClass}>PIN Code *</label>
                            <input
                              type="text"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={getInputClass("pincode")}
                            />
                            <ErrorMsg field="pincode" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Documents & Business Info ───────────────────────── */}
                    <div>
                      <h3 className="text-lg font-bold text-[#0B4E8C] border-b border-slate-200 pb-3 mb-6">
                        Documents & Business Info
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Drug License */}
                        <div>
                          <label className={labelClass}>
                            Drug Licence Upload (PDF/JPG) *
                          </label>
                          <input
                            type="file"
                            name="drugLicense"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className={`w-full text-sm text-[#333333] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E8F5EB] file:text-[#1C8A3C] hover:file:bg-[#1C8A3C] hover:file:text-white transition-colors cursor-pointer p-1.5 ${
                              formErrors.drugLicense
                                ? "border border-[#E31E24] bg-[#FDE8E9]/20 rounded-xl"
                                : ""
                            } ${formData.drugLicense ? "hidden" : ""}`}
                          />
                          {formData.drugLicense && (
                            <div className="mt-2 flex items-center justify-between bg-[#E8F5EB] border border-[#1C8A3C]/20 rounded-xl p-3">
                              <span className="text-xs font-semibold text-[#1C8A3C] truncate mr-2" title={formData.drugLicense.name}>
                                {formData.drugLicense.name}
                              </span>
                              <div className="flex gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => window.open(URL.createObjectURL(formData.drugLicense), '_blank')}
                                  className="text-[#0B4E8C] hover:text-[#1C8A3C] text-xs font-bold px-2.5 py-1 bg-white rounded-xl shadow-xs border border-slate-200 transition-colors cursor-pointer"
                                >
                                  Preview
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, drugLicense: null }));
                                    const input = document.querySelector('input[name="drugLicense"]');
                                    if (input) input.value = '';
                                  }}
                                  className="text-[#E31E24] hover:text-white hover:bg-[#E31E24] text-xs font-bold px-2.5 py-1 bg-white rounded-xl shadow-xs border border-[#E31E24]/30 transition-colors cursor-pointer"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          )}
                          <ErrorMsg field="drugLicense" />
                        </div>

                        {/* GST Certificate */}
                        <div>
                          <label className={labelClass}>
                            GST Certificate Upload (PDF/JPG) *
                          </label>
                          <input
                            type="file"
                            name="gstCertificate"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className={`w-full text-sm text-[#333333] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E8F5EB] file:text-[#1C8A3C] hover:file:bg-[#1C8A3C] hover:file:text-white transition-colors cursor-pointer p-1.5 ${
                              formErrors.gstCertificate
                                ? "border border-[#E31E24] bg-[#FDE8E9]/20 rounded-xl"
                                : ""
                            } ${formData.gstCertificate ? "hidden" : ""}`}
                          />
                          {formData.gstCertificate && (
                            <div className="mt-2 flex items-center justify-between bg-[#E8F5EB] border border-[#1C8A3C]/20 rounded-xl p-3">
                              <span className="text-xs font-semibold text-[#1C8A3C] truncate mr-2" title={formData.gstCertificate.name}>
                                {formData.gstCertificate.name}
                              </span>
                              <div className="flex gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => window.open(URL.createObjectURL(formData.gstCertificate), '_blank')}
                                  className="text-[#0B4E8C] hover:text-[#1C8A3C] text-xs font-bold px-2.5 py-1 bg-white rounded-xl shadow-xs border border-slate-200 transition-colors cursor-pointer"
                                >
                                  Preview
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, gstCertificate: null }));
                                    const input = document.querySelector('input[name="gstCertificate"]');
                                    if (input) input.value = '';
                                  }}
                                  className="text-[#E31E24] hover:text-white hover:bg-[#E31E24] text-xs font-bold px-2.5 py-1 bg-white rounded-xl shadow-xs border border-[#E31E24]/30 transition-colors cursor-pointer"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          )}
                          <ErrorMsg field="gstCertificate" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Categories */}
                        <div className="relative" ref={dropdownRef}>
                          <label className={labelClass}>
                            Interested Product Categories *
                          </label>
                          <div
                            onClick={() => setCategoriesOpen((prev) => !prev)}
                            className={`${getInputClass("categories")} cursor-pointer flex items-center justify-between min-h-[46px]`}
                          >
                            {Array.isArray(formData.categories) &&
                            formData.categories.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5 py-0.5">
                                {formData.categories.map((cat) => (
                                  <span
                                    key={cat}
                                    className="inline-flex items-center gap-1 bg-[#E8F5EB] text-[#1C8A3C] text-xs font-semibold px-2.5 py-1 rounded-lg border border-[#1C8A3C]/20"
                                  >
                                    {cat}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCategoryToggle(cat);
                                      }}
                                      className="hover:text-[#0E5824] focus:outline-none ml-0.5"
                                    >
                                      ✕
                                    </button>
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-slate-400">
                                Select product categories...
                              </span>
                            )}
                            <svg
                              className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ml-2 ${
                                categoriesOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                          <ErrorMsg field="categories" />

                          {categoriesOpen && (
                            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg p-2 space-y-1">
                              {CATEGORY_OPTIONS.map((option) => {
                                const isSelected =
                                  Array.isArray(formData.categories) &&
                                  formData.categories.includes(option);
                                return (
                                  <div
                                    key={option}
                                    onClick={() => handleCategoryToggle(option)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-colors ${
                                      isSelected
                                        ? "bg-[#E8F5EB] text-[#1C8A3C] font-semibold"
                                        : "hover:bg-slate-50 text-[#333333]"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => {}}
                                      className="w-4 h-4 text-[#1C8A3C] rounded border-slate-300 focus:ring-[#1C8A3C] cursor-pointer"
                                    />
                                    <span>{option}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {/* Monthly Purchase */}
                        <div>
                          <label className={labelClass}>
                            Estimated Monthly Purchase Value *
                          </label>
                          <CustomSelect
                            name="monthlyPurchase"
                            value={formData.monthlyPurchase}
                            onChange={handleChange}
                            placeholder="Select Monthly Purchase Value"
                            error={!!formErrors.monthlyPurchase}
                            options={[
                              "Less than 1 Lakh",
                              "1 - 5 Lakhs",
                              "5 - 10 Lakhs",
                              "More than 10 Lakhs",
                            ]}
                          />
                          <ErrorMsg field="monthlyPurchase"/>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <label className={labelClass}>
                          Specific Requirements or Comments
                        </label>
                        <textarea
                          name="requirements"
                          rows="3"
                          value={formData.requirements}
                          onChange={handleChange}
                          className={inputClass}
                        ></textarea>
                      </div>
                    </div>

                    {/* ── Declaration ─────────────────────────────────────── */}
                    <div className="mt-8">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="agree"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#1C8A3C] bg-slate-100 border-slate-300 rounded focus:ring-[#1C8A3C] shrink-0 cursor-pointer"
                        />
                        <label
                          htmlFor="agree"
                          className="text-xs md:text-sm text-[#333333] leading-relaxed cursor-pointer select-none"
                        >
                          I declare that the information provided above is true
                          and correct. I authorize Meenakshi Pharma to contact
                          me regarding this application in accordance with the{" "}
                          <button type="button" onClick={(e) => { e.preventDefault(); setLegalModalState({ isOpen: true, tab: 'privacy' }); }} className="text-[#0B4E8C] underline font-semibold hover:text-[#1C8A3C]">
                            Privacy Policy
                          </button>{" "}
                          and{" "}
                          <button type="button" onClick={(e) => { e.preventDefault(); setLegalModalState({ isOpen: true, tab: 'terms' }); }} className="text-[#0B4E8C] underline font-semibold hover:text-[#1C8A3C]">
                            Terms of Service
                          </button>.
                        </label>
                      </div>
                      <ErrorMsg field="agreeTerms" />
                    </div>

                    {/* ── Submit ──────────────────────────────────────────── */}
                    <div className="pt-6 text-center flex justify-center">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={loading}
                        className="px-8 md:px-16"
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

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
              Please wait while your partnership application and documents are being submitted. Do not navigate away or refresh the page.
            </p>
          </motion.div>
        </div>
      )}

      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};

export default Partner;

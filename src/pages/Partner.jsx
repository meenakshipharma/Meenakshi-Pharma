import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import { partner } from "../data/content";

const Partner = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "Pharmacy",
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
    categories: "",
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
        if (!value || !value.toString().trim())
          return "PIN Code is required.";
        if (!/^\d{6}$/.test(value.toString().trim()))
          return "Enter a valid 6-digit PIN code.";
        break;
      case "drugLicense":
        if (!value) return "Drug Licence document is required.";
        break;
      case "gstCertificate":
        if (!value) return "GST Certificate document is required.";
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
    const { name, value, type, checked, files } = e.target;

    // Clear error for this field as the user types / changes
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

  // Validate current field
  const error = validateField(name, updated[name]);

  setFormErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));

  // Validate WhatsApp if it changes automatically
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


  const handleFocus = (e) => {
    const { name } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      businessType: "Pharmacy",
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
      categories: "",
      monthlyPurchase: "",
      requirements: "",
      agreeTerms: false,
      drugLicense: null,
      gstCertificate: null,
    });

    setFormErrors({});

    document.querySelector('input[name="drugLicense"]').value = "";
    document.querySelector('input[name="gstCertificate"]').value = "";
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
        data.append(key, value);
      });

      const response = await fetch("/.netlify/functions/partner", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

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
    "w-full bg-white bg-opacity-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all";
  const inputErrorClass =
    "w-full bg-white bg-opacity-50 border border-red-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-text-light mb-2";

  const getInputClass = (fieldName) =>
    formErrors[fieldName] ? inputErrorClass : inputClass;

  const ErrorMsg = ({ field }) =>
    formErrors[field] ? (
      <p className="mt-1 text-xs text-red-600 font-medium">
        {formErrors[field]}
      </p>
    ) : null;

  // ── Render ────────────────────────────────────────────────────────────────
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

      <section className="section-padding bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white bg-opacity-80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-brand mb-4">
                  Partnership Application Form
                </h2>
                <p className="text-text-light">
                  Please fill in your business details below. All fields marked
                  with * are required.
                </p>
              </div>

              {status.success && (
                <div className="mb-6 rounded-xl border border-secondary/30 bg-secondary-light p-4 text-secondary-dark font-medium">
                  {status.message}
                </div>
              )}

              {status.error && (
                <div className="mb-6 rounded-xl border border-danger/30 bg-danger-light p-4 text-danger-dark font-medium">
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
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">
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
                        onFocus={handleFocus}
                        className={getInputClass("businessName")}
                      />
                      <ErrorMsg field="businessName" />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className={labelClass}>Business Type *</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>Pharmacy</option>
                        <option>Hospital</option>
                        <option>Clinic</option>
                        <option>Wholesale</option>
                      </select>
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
                        onFocus={handleFocus}
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
                        onFocus={handleFocus}
                        disabled={sameAsOwner}
                        className={`${getInputClass("contactName")} ${
                          sameAsOwner ? "bg-gray-200 cursor-not-allowed" : ""
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
                        />
                        <label
                          htmlFor="sameAsOwner"
                          className="text-sm text-text-light"
                        >
                          Same as Proprietor / Owner
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Contact Information ─────────────────────────────── */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">
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
                        onFocus={handleFocus}
                        className={getInputClass("mobile")}
                      />
                      <ErrorMsg field="mobile" />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className={labelClass}>WhatsApp Number</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        disabled={sameAsMobile}
className={`${
    sameAsMobile
      ? inputClass + " bg-gray-200 cursor-not-allowed"
      : getInputClass("whatsapp")
  }`}                      />
                      <ErrorMsg field="whatsapp" />
                      <div className="mt-2 flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="sameAsMobile"
                          checked={sameAsMobile}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setSameAsMobile(checked);
                            setFormData((prev) => ({
                              ...prev,
                              whatsapp: checked ? prev.mobile : "",
                            }));
                            if (checked) {
                              setFormErrors((prev) => ({ ...prev, whatsapp: "" }));
                            }
                          }}
                        />
                        <label
                          htmlFor="sameAsMobile"
                          className="text-sm text-text-light"
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
                        onFocus={handleFocus}
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
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">
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
                        onFocus={handleFocus}
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
                          onFocus={handleFocus}
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
                          onFocus={handleFocus}
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
                          onFocus={handleFocus}
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
                          onFocus={handleFocus}
                            className={getInputClass("pincode")}
                        />
                        <ErrorMsg field="pincode" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Documents & Business Info ───────────────────────── */}
                <div>
                  <h3 className="text-xl font-serif border-b border-gray-200 pb-2 mb-6">
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
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand hover:file:bg-brand hover:file:text-white transition-colors"
                      />
                      {formData.drugLicense && (
                        <p className="mt-2 text-sm text-green-700">
                          Selected: {formData.drugLicense.name}
                        </p>
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
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand hover:file:bg-brand hover:file:text-white transition-colors"
                      />
                      {formData.gstCertificate && (
                        <p className="mt-2 text-sm text-green-700">
                          Selected: {formData.gstCertificate.name}
                        </p>
                      )}
                      <ErrorMsg field="gstCertificate" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Categories */}
                    <div>
                      <label className={labelClass}>
                        Interested Product Categories
                      </label>
                      <input
                        type="text"
                        name="categories"
                        placeholder="e.g. Cardio, Derma, General"
                        value={formData.categories}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    {/* Monthly Purchase */}
                    <div>
                      <label className={labelClass}>
                        Estimated Monthly Purchase Value
                      </label>
                      <select
                        name="monthlyPurchase"
                        value={formData.monthlyPurchase}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>Less than 1 Lakh</option>
                        <option>1 - 5 Lakhs</option>
                        <option>5 - 10 Lakhs</option>
                        <option>More than 10 Lakhs</option>
                      </select>
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
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand bg-gray-100 border-gray-300 rounded focus:ring-brand"
                    />
                    <label htmlFor="agree" className="text-sm text-text-light">
                      I declare that the information provided above is true and
                      correct. I authorize Meenakshi Pharma to contact me
                      regarding this partnership application.
                    </label>
                  </div>
                  <ErrorMsg field="agreeTerms" />
                </div>

                {/* ── Submit ──────────────────────────────────────────── */}
                <div className="pt-6 text-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto md:px-16"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <CTASection /> */}
    </>
  );
};

export default Partner;

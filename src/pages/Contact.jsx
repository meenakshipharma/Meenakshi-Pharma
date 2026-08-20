import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import { contact } from "../data/content.js";

const icons = {
  address: <FiMapPin />,
  phone: <FiPhone />,
  email: <FiMail />,
  hours: <FiClock />,
};

const INQUIRY_TYPES = [
  "General Inquiry",
  "Product Availability",
  "Order Support",
  "Delivery Support",
  "Billing & Payments",
  "Partnership Inquiry",
  "Career Inquiry",
  "Feedback & Suggestions",
  "Other",
];

const renderContactValue = (type, v) => {
  if (type === "phone") {
    const cleanPhone = v.replace(/[^0-9+]/g, "");
    return (
      <a
        href={`tel:${cleanPhone}`}
        className="hover:text-[#1C8A3C] transition-colors py-0.5 inline-block font-medium"
      >
        {v}
      </a>
    );
  }
  if (type === "email") {
    return (
      <a
        href={`mailto:${v}`}
        className="hover:text-[#1C8A3C] transition-colors py-0.5 inline-block font-medium break-all"
      >
        {v}
      </a>
    );
  }
  if (type === "address") {
    return (
      <a
        href={contact.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1C8A3C] transition-colors py-0.5 inline-block font-medium"
      >
        {v}
      </a>
    );
  }
  return v;
};

const Contact = () => {
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (loading) {
        e.preventDefault();
        e.returnValue =
          "Your inquiry submission is in progress. Please wait until it completes.";
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
    submittedData: null,
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
          return "Mobile Number is required.";
        if (!/^[6-9]\d{9}$/.test(value.toString().trim()))
          return "Enter a valid 10-digit Indian mobile number.";
        break;
      case "email":
        if (!value || !value.toString().trim())
          return "Email Address is required.";
        if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            value.toString().trim(),
          )
        )
          return "Enter a valid email address.";
        break;
      case "inquiryType":
        if (!value || !value.toString().trim())
          return "Please select an Inquiry Type.";
        break;
      case "subject":
        if (!value || !value.toString().trim()) return "Subject is required.";
        break;
      case "message":
        if (!value || !value.toString().trim()) return "Message is required.";
        if (value.toString().trim().length < 5)
          return "Message should be at least 5 characters.";
        break;
      default:
        return "";
    }
    return "";
  };

  const validateAll = () => {
    const requiredFields = [
      "fullName",
      "phone",
      "email",
      "inquiryType",
      "subject",
      "message",
    ];

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
      company: "",
      inquiryType: "",
      subject: "",
      message: "",
    });
    setFormErrors({});
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "fullName" || name === "company") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormErrors((prev) => ({ ...prev, [name]: "" }));

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
      submittedData: null,
    });

    if (!validateAll()) {
      if (formContainerRef.current) {
        formContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setLoading(true);

    const payload = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      inquiryType: formData.inquiryType,
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    // EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const userTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const adminEmail =
      import.meta.env.VITE_ADMIN_EMAIL || "mpharma98@gmail.com";

    const templateParams = {
      // Applicant / Submitter info
      from_name: payload.fullName,
      full_name: payload.fullName,
      name: payload.fullName,
      user_name: payload.fullName,

      from_email: payload.email,
      email: payload.email,
      user_email: payload.email,
      to_email: payload.email,
      reply_to: payload.email,

      phone: payload.phone,
      mobile: payload.phone,
      mobile_number: payload.phone,
      contact_number: payload.phone,

      company: payload.company || "N/A",
      company_name: payload.company || "N/A",
      organization: payload.company || "N/A",

      inquiry_type: payload.inquiryType,
      inquiryType: payload.inquiryType,
      type: payload.inquiryType,

      subject: payload.subject,
      message: payload.message,
      details: payload.message,

      // Company recipient info
      admin_email: adminEmail,
      company_email: adminEmail,
      to_name: "Meenakshi Pharma Customer Support",
    };

    try {
      if (serviceId && userTemplateId && publicKey) {
        // Send user auto-reply email
        await emailjs.send(
          serviceId,
          userTemplateId,
          templateParams,
          publicKey,
        );

        // Send company admin notification email if admin template ID is configured
        if (
          adminTemplateId &&
          adminTemplateId.trim() &&
          adminTemplateId !== userTemplateId
        ) {
          await emailjs.send(
            serviceId,
            adminTemplateId,
            templateParams,
            publicKey,
          );
        }
      } else {
        console.warn(
          "EmailJS credentials missing in .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY). Simulating successful submit.",
        );
      }

      setStatus({
        success: true,
        error: "",
        message: "Your inquiry has been submitted successfully.",
        submittedData: payload,
      });

      resetForm();

      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setStatus({
        success: false,
        error:
          error?.text ||
          error?.message ||
          "Failed to send email via EmailJS. Please verify your EmailJS keys in .env.",
        message: "",
        submittedData: null,
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
      <Helmet>
        <title>Contact Us | Meenakshi Pharma</title>
        <meta
          name="description"
          content="Get in touch with our team for inquiries, support, or feedback."
        />
      </Helmet>

      <PageBanner
        title={contact.banner.title}
        subtitle={contact.banner.subtitle}
      />

      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 bg-[#F5F7FA]">
        <div className="container-custom" ref={formContainerRef}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left Side Info */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-6 sm:mb-8">
                {contact.details.title}
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {contact.details.info.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#1C8A3C] shadow-soft hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#E8F5EB] text-[#1C8A3C] rounded-2xl flex items-center justify-center shadow-xs shrink-0 text-xl border border-[#1C8A3C]/20">
                      {icons[item.type]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-[#0B4E8C] text-base mb-1">
                        {item.label}
                      </h4>
                      <div className="text-[#333333] text-sm leading-relaxed">
                        {Array.isArray(item.value)
                          ? item.value.map((v, i) => (
                              <React.Fragment key={i}>
                                {renderContactValue(item.type, v)}
                                {i < item.value.length - 1 && <br />}
                              </React.Fragment>
                            ))
                          : item.value.split("\n").map((v, i, arr) => (
                              <React.Fragment key={i}>
                                {renderContactValue(item.type, v)}
                                {i < arr.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="secondary" className="gap-2">
                    <FiMapPin /> {contact.details.buttonText}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Side Form / Success UI */}
            <motion.div
              className="flex-[1.4] w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {status.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#1C8A3C] p-8 md:p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E8F5EB] text-[#1C8A3C] flex items-center justify-center mx-auto mb-6 shadow-xs border border-[#1C8A3C]/20">
                    <FiCheckCircle className="text-3xl" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-6">
                    Thank You for Reaching Out to Meenakshi Pharma
                  </h2>

                  <div className="bg-[#E8F5EB] border-l-4 border-[#1C8A3C] p-4 rounded-xl text-[#1C8A3C] font-semibold text-sm md:text-base max-w-2xl mx-auto mb-6 text-justify">
                    We have successfully received your inquiry. Our team will
                    review your message and respond at the earliest opportunity.
                  </div>

                  <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-4 leading-relaxed text-justify">
                    If your inquiry requires immediate assistance, please feel
                    free to contact us directly using the phone number provided
                    on our website during our business hours.
                  </p>

                  <p className="text-[#0B4E8C] font-bold text-sm md:text-base max-w-2xl mx-auto mb-8 text-center">
                    We appreciate your interest in Meenakshi Pharma and look
                    forward to assisting you.
                  </p>

                  <div className="border-t border-slate-200 pt-6 max-w-2xl mx-auto text-center text-slate-600 text-sm mb-8">
                    <p className="font-semibold italic">Regards,</p>
                    <p className="font-bold text-[#0B4E8C] italic">
                      Customer Support Team
                    </p>
                    <p className="font-semibold text-slate-700 italic">
                      Meenakshi Pharma
                    </p>
                  </div>

                  <Button
                    onClick={() =>
                      setStatus({
                        success: false,
                        error: "",
                        message: "",
                        submittedData: null,
                      })
                    }
                    variant="primary"
                    className="px-8"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-white p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#0B4E8C]">
                  <h3 className="text-2xl font-bold text-[#0B4E8C] mb-2">
                    Submit Inquiry
                  </h3>
                  <p className="text-[#333333] text-sm mb-6">
                    Fill out the form below and our team will get back to you
                    shortly.
                  </p>

                  {status.error && (
                    <div className="mb-6 rounded-2xl border border-[#E31E24]/30 bg-[#FDE8E9] p-4 text-[#E31E24] text-sm font-medium">
                      {status.error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
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

                    {/* Mobile & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
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
                          placeholder="Enter 10-digit mobile number"
                          className={getInputClass("phone")}
                        />
                        {formErrors.phone && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
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
                          placeholder="Enter your email address"
                          className={getInputClass("email")}
                        />
                        {formErrors.email && (
                          <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company / Organization Name (Optional) */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        Company / Organization Name{" "}
                        <span className="font-normal text-slate-500">
                          (Optional)
                        </span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter company or organization name"
                        className={inputClass}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        Inquiry Type *
                      </label>
                      <CustomSelect
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        placeholder="Select Inquiry Type"
                        error={!!formErrors.inquiryType}
                        options={INQUIRY_TYPES}
                      />
                      {formErrors.inquiryType && (
                        <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                          {formErrors.inquiryType}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        autoComplete="off"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Brief summary of your inquiry"
                        className={getInputClass("subject")}
                      />
                      {formErrors.subject && (
                        <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Type your message or details here..."
                        className={getInputClass("message")}
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1.5 text-xs text-[#E31E24] font-medium">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={loading}
                        className="px-8 md:px-10"
                      >
                        {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
                      </Button>
                    </div>
                  </form>
                </div>
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
            <h3 className="text-xl font-bold text-[#0B4E8C] mb-2">
              Submitting Inquiry...
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Please wait while your inquiry is being submitted. Do not navigate
              away or refresh the page.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Contact;
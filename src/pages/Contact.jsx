import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import { contact } from "../data/content.js";

const icons = {
  address: <FiMapPin />,
  phone: <FiPhone />,
  email: <FiMail />,
  hours: <FiClock />,
};

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
      <a href={`mailto:${v}`} className="hover:text-[#1C8A3C] transition-colors py-0.5 inline-block font-medium">
        {v}
      </a>
    );
  }
  return v;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      hospital: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputClass =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#0B4E8C] focus:border-[#0B4E8C] transition-all text-sm shadow-xs";

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

      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Side Info */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B4E8C] mb-8">
                {contact.details.title}
              </h2>

              <div className="space-y-6">
                {contact.details.info.map((item, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-[#1C8A3C] shadow-soft hover:shadow-card-hover transition-all duration-300">
                    <div className="w-12 h-12 bg-[#E8F5EB] text-[#1C8A3C] rounded-2xl flex items-center justify-center shadow-xs shrink-0 text-xl border border-[#1C8A3C]/20">
                      {icons[item.type]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B4E8C] text-base mb-1">{item.label}</h4>
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

            {/* Right Side Form */}
            <motion.div
              className="flex-[1.4] w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 border-t-4 border-t-[#0B4E8C]">
                <h3 className="text-2xl font-bold text-[#0B4E8C] mb-6">
                  {contact.form.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        {contact.form.fields.name} *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        {contact.form.fields.hospital}
                      </label>
                      <input
                        type="text"
                        name="hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        {contact.form.fields.phone} *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                        {contact.form.fields.email} *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                      {contact.form.fields.subject} *
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B4E8C] mb-1.5">
                      {contact.form.fields.message} *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                    ></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full md:w-auto px-10">
                    {contact.form.buttonText}
                  </Button>
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

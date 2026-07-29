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
    // Keep numbers and the plus sign for country code
    const cleanPhone = v.replace(/[^0-9+]/g, "");
    return (
      <a
        href={`tel:${cleanPhone}`}
        className="hover:text-brand transition-colors"
      >
        {v}
      </a>
    );
  }
  if (type === "email") {
    return (
      <a href={`mailto:${v}`} className="hover:text-brand transition-colors">
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
    "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand transition-all";

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

      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side Info */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-serif text-text mb-8">
                {contact.details.title}
              </h2>

              <div className="space-y-8">
                {contact.details.info.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 text-xl">
                      {icons[item.type]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                      <p className="text-text-light">
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
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <FiMapPin /> {contact.details.buttonText}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Side Form */}
            <motion.div
              className="flex-[1.5]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  {contact.form.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-light mb-2">
                        {contact.form.fields.name}
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
                      <label className="block text-sm font-medium text-text-light mb-2">
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
                      <label className="block text-sm font-medium text-text-light mb-2">
                        {contact.form.fields.phone}
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
                      <label className="block text-sm font-medium text-text-light mb-2">
                        {contact.form.fields.email}
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
                    <label className="block text-sm font-medium text-text-light mb-2">
                      {contact.form.fields.subject}
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
                    <label className="block text-sm font-medium text-text-light mb-2">
                      {contact.form.fields.message}
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
                  <Button type="submit" className="w-full md:w-auto px-10">
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

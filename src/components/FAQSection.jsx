import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "AEO & Search Insights",
  description = "Find accurate, verified information about Meenakshi Pharma's pharmaceutical wholesale distribution operations in Trichy.",
  faqs = [],
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`py-12 sm:py-16 bg-[#F5F7FA] border-t border-slate-200/80 ${className}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {subtitle && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-bold uppercase tracking-wider text-xs mb-3">
              <FiHelpCircle className="text-sm" />
              {subtitle}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B4E8C] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-[#0B4E8C]/40"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0B4E8C] leading-snug">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#0B4E8C] text-white rotate-180"
                          : "bg-slate-100 text-[#0B4E8C]"
                      }`}
                    >
                      <FiChevronDown className="text-lg" />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

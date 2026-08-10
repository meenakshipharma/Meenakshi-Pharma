import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { privacyPolicy, termsOfService } from '../data/legalData';

const LegalModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeTab, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const data = activeTab === 'privacy' ? privacyPolicy : termsOfService;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('privacy')}
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors ${
                    activeTab === 'privacy'
                      ? 'text-[#0B4E8C] border-b-2 border-[#0B4E8C]'
                      : 'text-slate-500 hover:text-[#0B4E8C]'
                  }`}
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('terms')}
                  className={`text-sm sm:text-base font-bold pb-1 transition-colors ${
                    activeTab === 'terms'
                      ? 'text-[#0B4E8C] border-b-2 border-[#0B4E8C]'
                      : 'text-slate-500 hover:text-[#0B4E8C]'
                  }`}
                >
                  Terms of Service
                </button>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 bg-slate-50">
              <div>
                <h1 className="text-2xl font-bold text-[#0B4E8C] mb-2">{data.title}</h1>
                <p className="text-xs text-slate-500 font-medium">Last updated: {data.lastUpdated}</p>
              </div>
              
              {data.sections.map((section, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h2 className="text-lg font-bold text-[#0B4E8C] mb-3">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.content && section.content.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-sm text-[#333333] leading-relaxed text-justify">
                        {para}
                      </p>
                    ))}
                    
                    {section.list && (
                      <ul className="grid grid-cols-1 gap-2 mt-2">
                        {section.list.map((item, li) => (
                          <li
                            key={li}
                            className="flex items-start gap-2.5 bg-[#F5F7FA] border border-slate-100 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#333333]"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#1C8A3C]" />
                            <span className="text-justify">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="text-xs text-slate-500 italic border-l-2 border-slate-200 pl-3 mt-3 text-justify">
                        {section.footer}
                      </p>
                    )}

                    {section.contact && (
                      <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                        <div className="bg-[#F5F7FA] px-4 py-2 border-b border-slate-200">
                          <p className="font-semibold text-[#0B4E8C] text-xs sm:text-sm">{section.contact.name}</p>
                        </div>
                        <div className="px-4 py-3 space-y-2.5">
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                            <FiMapPin size={14} className="mt-0.5 shrink-0 text-[#1C8A3C]" />
                            <span>{section.contact.address}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                            <FiPhone size={14} className="shrink-0 text-[#1C8A3C]" />
                            <a
                              href={`tel:${section.contact.phone.replace(/[^0-9+]/g, '')}`}
                              className="text-[#333333] hover:text-[#0B4E8C] transition-colors font-medium"
                            >
                              {section.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                            <FiMail size={14} className="shrink-0 text-[#1C8A3C]" />
                            <a
                              href={`mailto:${section.contact.email}`}
                              className="text-[#333333] hover:text-[#0B4E8C] transition-colors font-medium break-all"
                            >
                              {section.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-200 bg-white flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-[#0B4E8C] text-white text-sm font-bold rounded-xl hover:bg-[#083b6a] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;

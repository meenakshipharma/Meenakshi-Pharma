import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../utils/contact";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from "../utils/data";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const currentYear = new Date().getFullYear();

  const SocialIcon = ({ href, label, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-lg bg-cyan-950/40 hover:bg-primary hover:text-white flex items-center justify-center text-slate-300 transition-all duration-300"
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-dark-teal text-slate-200 pt-20 pb-8 border-t border-cyan-950/40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-cyan-950/30">

          {/* Column 1: Company Profile + Social */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="40" height="40" rx="8" fill="#1BD3E4" />
                <rect x="18" y="8" width="4" height="24" rx="2" fill="#FFFFFF" />
                <rect x="8" y="18" width="24" height="4" rx="2" fill="#FFFFFF" />
                <circle cx="20" cy="20" r="4.5" fill="#10B981" />
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold text-[1.1rem] tracking-tight leading-none text-white">MEENAKSHI</span>
                <span className="text-[0.6rem] font-bold tracking-widest text-accent uppercase leading-none mt-1">PHARMA DISTRIBUTORS</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Leading pharmaceutical distributor in Trichy, Tamil Nadu. Committed to delivering genuine, temperature-controlled medicines with efficiency and absolute trust.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <SocialIcon href={CONTACT.social.linkedin.url} label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </SocialIcon>
              <SocialIcon href={CONTACT.social.facebook.url} label="Facebook">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </SocialIcon>
              <SocialIcon href={CONTACT.social.instagram.url} label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialIcon>
              <SocialIcon href={CONTACT.social.whatsapp.url} label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {FOOTER_QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-primary transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {FOOTER_SERVICE_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-primary transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact Us</h4>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone size={15} className="text-primary flex-shrink-0 mt-0.5" />
              <a href={CONTACT.phone.primaryHref} className="text-sm text-slate-300 hover:text-primary transition-colors font-medium">
                {CONTACT.phone.primary}
              </a>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-3">
              <Mail size={15} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5">
                <a href={CONTACT.email.generalHref} className="text-sm text-slate-300 hover:text-primary transition-colors">
                  {CONTACT.email.general}
                </a>
                <a href={CONTACT.email.hrHref} className="text-xs text-slate-500 hover:text-primary transition-colors">
                  {CONTACT.email.hr} <span className="text-slate-600">(HR)</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-primary flex-shrink-0 mt-0.5" />
              <a
                href={CONTACT.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-primary transition-colors leading-relaxed"
              >
                {CONTACT.address.line2},<br />
                {CONTACT.address.city},<br />
                {CONTACT.address.state} – {CONTACT.address.pincode}
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 pt-2 border-t border-cyan-950/40">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <div className="text-xs text-slate-500 leading-relaxed">
                <p>{CONTACT.hours.weekdays}</p>
                <p>{CONTACT.hours.sunday}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs text-slate-500">
          <p>© {currentYear} Meenakshi Pharma. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-primary text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

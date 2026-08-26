import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from "../../assets/images/Logo.webp";
import { footer } from "../../data/content.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#083B6A] text-white pt-20 pb-10 mt-auto border-t border-[#0B4E8C] relative overflow-hidden">
      {/* Background Subtle Medical Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1C8A3C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0B4E8C]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImg}
                alt="Meenakshi Pharma Logo"
                className="h-12 w-auto object-contain bg-white p-1 rounded-lg shadow-sm"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden items-center justify-center w-12 h-12 bg-[#1C8A3C] rounded-full text-white font-bold text-xl">
                MP
              </div>
              <span className="font-bold text-xl tracking-wide text-white">
                {footer.companyName}
              </span>
            </div>
            <p className="text-slate-200 mb-6 leading-relaxed text-sm">
              {footer.tagline}
            </p>
            <div className="flex gap-2">
              {footer.socials.map((social) => {
                const iconMap = {
                  WhatsApp: <FaWhatsapp />,
                  Facebook: <FiFacebook />,
                  Twitter: <FiTwitter />,
                  LinkedIn: <FiLinkedin />,
                  Instagram: <FiInstagram />,
                  Youtube: <FiYoutube />,
                };
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#1C8A3C] hover:border-[#1C8A3C] hover:scale-105 transition-all duration-300"
                  >
                    {iconMap[social.name] || <FiFacebook />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide border-l-4 border-[#1C8A3C] pl-3">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block "
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/brands"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block "
                >
                  Brands We Deal
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block "
                >
                  Achievements
                </Link>
              </li>
              <li>
                <a
                  href="http://meenakshipharma.wsweborder.com/StockAndSales/DistributorPages/Login4StockNSales.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block"
                >
                  Stock & Sales
                </a>
              </li>
              <li>
                <a
                  href="https://meenakshipharma.wondersoft.in/ro13.html#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block"
                >
                  Web Order
                </a>
              </li>
              <li>
                <Link
                  to="/partner"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block "
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block "
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-slate-200 hover:text-white hover:underline transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide border-l-4 border-[#1C8A3C] pl-3">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3 text-slate-200">
                <FiMapPin className="text-[#1C8A3C] bg-white rounded-full p-0.5 mt-1 flex-shrink-0 text-lg" />
                <span className="leading-relaxed">
                  {footer.contactInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <FiPhone className="text-[#1C8A3C] bg-white rounded-full p-0.5 mt-1 flex-shrink-0 text-lg" />
                <div className="flex flex-col">
                  {footer.contactInfo.phone.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-white transition-colors duration-200 py-0.5"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <FiMail className="text-[#1C8A3C] bg-white rounded-full p-0.5 mt-1 flex-shrink-0 text-lg" />
                <div className="flex flex-col">
                  {footer.contactInfo.email.map((e, i) => (
                    <a
                      key={i}
                      href={`mailto:${e}`}
                      className="hover:text-white transition-colors duration-200 py-0.5"
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide border-l-4 border-[#1C8A3C] pl-3">
              Location
            </h3>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 group hover:border-[#1C8A3C] transition-all duration-300">
              <iframe
                src={footer.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <p>
            &copy; {currentYear} {footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              onClick={scrollToTop}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

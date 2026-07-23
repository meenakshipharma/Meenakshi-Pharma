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
} from "react-icons/fi";
import logoImg from "../../assets/images/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white pt-20 pb-10 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImg}
                alt="Meenakshi Pharma Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden items-center justify-center w-12 h-12 bg-brand rounded-full text-white font-serif font-bold text-xl">
                MP
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide">
                Meenakshi Pharma
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering excellence in pharmaceutical distribution with a
              commitment to quality, reliability, and healthcare advancement.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-colors"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-colors"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/stock-sales"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Stock & Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/web-order"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Web Order
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="text-brand mt-1 flex-shrink-0" />
                <span>
                  123 Pharma Avenue, Medical District, City, State, 123456
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-brand flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-brand flex-shrink-0" />
                <span>info@meenakshipharma.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Location</h3>
            <div className="w-full aspect-square rounded-2xl overflow-hidden opacity-90 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.618037135315!2d78.43575999999999!3d17.40434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e21014e3b%3A0xc387a2a5146c3b65!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Meenakshi Pharma. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-brand transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

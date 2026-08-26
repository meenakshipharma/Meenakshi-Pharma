import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "../../assets/images/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", blank: false },
    { name: "About Us", path: "/about", blank: false },
    { name: "Our Services", path: "/services", blank: false },
    { name: "Brands We Deal", path: "/brands", blank: false },
    { name: "Our Achievements", path: "/achievements", blank: false },
    {
      name: "Web Order",
      path: "https://meenakshipharma.wondersoft.in/ro13.html#/login",
      blank: true,
    },
    {
      name: "Stock & Sales",
      path: "http://meenakshipharma.wsweborder.com/StockAndSales/DistributorPages/Login4StockNSales.aspx",
      blank: true,
    },
    { name: "Partner With Us", path: "/partner", blank: false },
    { name: "Career", path: "/career", blank: false },
    { name: "Contact", path: "/contact", blank: false },
  ];

  const navRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu on click/tap outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-200 py-2.5 md:py-3"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 md:py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-between items-center">
        {/* Logo with Meenakshi Pharma Title - Left Corner */}
        <Link
          to="/"
          className="flex items-center gap-0 sm:gap-0 z-50 group focus:outline-none shrink-0"
        >
          <img
            src={logoImg}
            alt="Meenakshi Pharma Logo"
            className="h-10 sm:h-12 md:h-13 xl:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              if (e.target.nextSibling) e.target.nextSibling.style.display = "flex";
            }}
          />
          <span className="font-extrabold text-base sm:text-lg md:text-xl  text-[#0B4E8C] tracking-tight group-hover:text-[#1C8A3C] transition-colors whitespace-nowrap">
            Meenakshi Pharma
          </span>
        </Link>

        {/* Desktop Navigation - Right Corner */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 ml-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return link.blank ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 xl:px-3 xl:py-2 text-[11px] xl:text-xs 2xl:text-sm font-semibold rounded-lg text-[#0B4E8C] hover:text-[#1C8A3C] hover:bg-[#F5F7FA] transition-all duration-200 whitespace-nowrap"
              >
                <span>{link.name}</span>
                <FiExternalLink className="text-[#1C8A3C] text-xs shrink-0" />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-2 py-1.5 xl:px-3 xl:py-2 text-[11px] xl:text-xs 2xl:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#0B4E8C] bg-[#E8F1F9] font-bold shadow-xs"
                    : "text-[#0B4E8C] hover:text-[#1C8A3C] hover:bg-[#F5F7FA]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1C8A3C] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-100 text-[#0B4E8C] hover:bg-[#E8F5EB] hover:text-[#1C8A3C] focus:outline-none transition-colors z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX className="text-xl sm:text-2xl" /> : <FiMenu className="text-xl sm:text-2xl" />}
        </button>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden lg:hidden"
            >
              <div className="flex flex-col py-4 px-5 sm:px-6 gap-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return link.blank ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm sm:text-base font-semibold text-[#0B4E8C] hover:bg-[#F5F7FA] hover:text-[#1C8A3C] active:bg-[#E8F5EB] transition-colors"
                    >
                      <span>{link.name}</span>
                      <FiExternalLink className="text-[#1C8A3C]" />
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`py-2.5 px-4 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-[#0B4E8C] text-white font-bold shadow-md shadow-[#0B4E8C]/20"
                          : "text-[#0B4E8C] hover:bg-[#F5F7FA] hover:text-[#1C8A3C]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "../../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", blank: false },
    { name: "About", path: "/about", blank: false },
    { name: "Services", path: "/services", blank: false },
    { name: "Brands", path: "/brands", blank: false },
    { name: "Achievements", path: "/achievements", blank: false },
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-200 py-3"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100 py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 z-50 group focus:outline-none"
        >
          <img
            src={logoImg}
            alt="Meenakshi Pharma Logo"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return link.blank ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg text-[#0B4E8C] hover:text-[#1C8A3C] hover:bg-[#E8F5EB] transition-all duration-200"
              >
                <span>{link.name}</span>
                <FiExternalLink className="text-[#1C8A3C] text-xs" />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-200 ${
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
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-[#0B4E8C] hover:bg-[#E8F5EB] hover:text-[#1C8A3C] focus:outline-none transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
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
              <div className="flex flex-col py-4 px-6 gap-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return link.blank ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-4 rounded-xl text-base font-semibold text-[#0B4E8C] hover:bg-[#E8F5EB] hover:text-[#1C8A3C] transition-colors"
                    >
                      <span>{link.name}</span>
                      <FiExternalLink className="text-[#1C8A3C]" />
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`py-2.5 px-4 rounded-xl text-base font-semibold transition-colors ${
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
  );
};

export default Navbar;

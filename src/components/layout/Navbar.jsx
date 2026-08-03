import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "../../assets/images/Logo.png";
import  {navigation } from "../../data/content";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-1" : "bg-transparent py-1"
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo with Meenakshi Pharma Title */}
        <Link
          to="/"
          className="flex items-center gap-2 z-50"
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
          <span className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl text-[#0B4E8C] tracking-tight group-hover:text-[#1C8A3C] transition-colors whitespace-nowrap">
            Meenakshi Pharma
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navigation.map((link) =>
            link.blank ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1.5 xl:px-3 xl:py-2 text-[11px] xl:text-xs 2xl:text-sm font-semibold rounded-lg text-[#0B4E8C] hover:text-[#1C8A3C] hover:bg-[#E8F5EB] transition-all duration-200 whitespace-nowrap"
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
              <div className="flex flex-col py-4 px-6 gap-4">
                {navigation.map((link) =>
                  link.blank ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm sm:text-base font-semibold text-[#0B4E8C] hover:bg-[#E8F5EB] hover:text-[#1C8A3C] transition-colors"
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
  );
};

export default Navbar;

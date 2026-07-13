import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../utils/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when location changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Brands", path: "/brands" },
    { name: "Achievements", path: "/achievements" },
    { name: "Web Order", path: "https://meenakshipharma.wondersoft.in/ro13.html", isExternal: true },
    { name: "Stock & Sales", path: "http://meenakshipharma.wsweborder.com/StockAndSales/DistributorPages/Login4StockNSales.aspx", isExternal: true },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-slate-100"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Company Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <svg
              viewBox="0 0 40 40"
              className="w-10 h-10 transition-transform duration-500 group-hover:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="40" height="40" rx="10" fill="#1BD3E4" />
              <rect x="18" y="8" width="4" height="24" rx="2" fill="#FFFFFF" />
              <rect x="8" y="18" width="24" height="4" rx="2" fill="#FFFFFF" />
              <circle cx="20" cy="20" r="4.5" fill="#10B981" />
            </svg>
            <div className="flex flex-col">
              <span className="font-extrabold text-[1.25rem] tracking-tight leading-none text-slate-900 group-hover:text-primary transition-colors">
                MEENAKSHI
              </span>
              <span className="text-[0.65rem] font-bold tracking-widest text-accent uppercase leading-none mt-1">
                PHARMA DISTRIBUTORS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wide text-slate-600 hover:text-primary transition-colors duration-300 relative py-1 focus:outline-none"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-colors duration-300 relative py-1 focus:outline-none ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-slate-600 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            ))}
          </nav>

          {/* Header CTA & Hamburger Toggle */}
          <div className="flex items-center gap-4">
            {/* <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none"
            >
              Contact Us
            </Link> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 40 40" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="40" height="40" rx="8" fill="#1BD3E4" />
                    <rect x="18" y="8" width="4" height="24" fill="#FFFFFF" />
                    <rect x="8" y="18" width="24" height="4" fill="#FFFFFF" />
                    <circle cx="20" cy="20" r="4.5" fill="#10B981" />
                  </svg>
                  <span className="font-extrabold text-[1.1rem] text-slate-900">
                    MEENAKSHI
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-8 flex-grow overflow-y-auto">
                {navItems.map((item) => (
                  item.isExternal ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold py-3.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-base font-bold py-3.5 px-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-50 text-primary border-l-4 border-primary"
                            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
                ))}
              </nav>

              {/* Bottom Quick Info */}
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} className="text-primary" />
                    <a href={CONTACT.phone.primaryHref} className="hover:text-primary transition-colors">
                      {CONTACT.phone.primary}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} className="text-primary" />
                    <a href={CONTACT.email.generalHref} className="hover:text-primary transition-colors">
                      {CONTACT.email.general}
                    </a>
                  </div>
                </div>

                {/* <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-white text-base font-bold rounded-xl shadow-lg transition-colors focus:outline-none"
                >
                  Contact Us
                </Link> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

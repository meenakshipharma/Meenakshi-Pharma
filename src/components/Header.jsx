import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../utils/contact";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home",           path: "/" },
    { name: "About",          path: "/about" },
    { name: "Services",       path: "/services" },
    { name: "Brands",         path: "/brands" },
    { name: "Achievements",   path: "/achievements" },
    { name: "Web Order",      path: CONTACT.portals.webOrder.url,    isExternal: true },
    { name: "Stock & Sales",  path: CONTACT.portals.stockSales.url,  isExternal: true },
    { name: "Career",         path: "/career" },
    { name: "Contact",        path: "/contact" },
  ];

  return (
    <>
      {/* ── Global Nav ──────────────────────────────────────────────
          Pure black (#000000), height 44px, nav-link typography.
          No shadow — flat black is the only treatment.
      ──────────────────────────────────────────────────────────── */}
      <header
        style={{ backgroundColor: "var(--color-surface-black)", height: "var(--height-global-nav)" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center"
      >
        <div className="container-wide w-full flex items-center justify-between">

          {/* Logo — text mark in white */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="Meenakshi Pharma – Home"
          >
            {/* Minimal cross mark */}
            <svg viewBox="0 0 28 28" width="22" height="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="var(--color-primary)" />
              <rect x="12.5" y="5" width="3" height="18" rx="1.5" fill="#fff" />
              <rect x="5" y="12.5" width="18" height="3" rx="1.5" fill="#fff" />
            </svg>
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "-0.1px",
                  color: "var(--color-on-dark)",
                }}
              >
                MEENAKSHI
              </span>
              <span
                style={{
                  fontFamily: "var(--font-text)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  color: "var(--color-body-muted)",
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                Pharma Distributors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-nav-link transition-opacity duration-200"
                  style={{ color: "var(--color-body-muted)" }}
                  onMouseEnter={e => (e.target.style.color = "var(--color-on-dark)")}
                  onMouseLeave={e => (e.target.style.color = "var(--color-body-muted)")}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="type-nav-link focus:outline-none"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-on-dark)" : "var(--color-body-muted)",
                    fontWeight: isActive ? 600 : 400,
                    transition: "color 0.2s ease",
                  })}
                >
                  {item.name}
                </NavLink>
              )
            )}

            {/* Contact pill CTA */}
            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: "12px", padding: "6px 14px", letterSpacing: "-0.12px" }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 focus:outline-none"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            style={{ color: "var(--color-on-dark)" }}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs flex flex-col lg:hidden"
              style={{ backgroundColor: "var(--color-surface-tile-1)" }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)", height: "var(--height-global-nav)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-on-dark)",
                    letterSpacing: "-0.1px",
                  }}
                >
                  MEENAKSHI PHARMA
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center focus:outline-none"
                  style={{ color: "var(--color-body-muted)" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-grow overflow-y-auto py-4 px-4" aria-label="Mobile navigation">
                {navItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3.5 rounded-lg transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "var(--color-body-muted)",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="px-4 py-3.5 rounded-lg transition-colors duration-200"
                      style={({ isActive }) => ({
                        fontFamily: "var(--font-text)",
                        fontSize: "15px",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--color-on-dark)" : "var(--color-body-muted)",
                        letterSpacing: "-0.2px",
                        backgroundColor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                      })}
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <a
                  href={`tel:${CONTACT.phone.primary}`}
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: "13px",
                    color: "var(--color-body-muted)",
                    letterSpacing: "-0.1px",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {CONTACT.phone.primary}
                </a>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

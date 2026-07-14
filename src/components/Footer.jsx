import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../utils/contact";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home",          to: "/" },
    { label: "About Us",      to: "/about" },
    { label: "Services",      to: "/services" },
    { label: "Brands",        to: "/brands" },
    { label: "Achievements",  to: "/achievements" },
    { label: "Careers",       to: "/career" },
    { label: "Contact",       to: "/contact" },
  ];

  const serviceLinks = [
    { label: "Pharmaceutical Distribution",   to: "/services#distribution" },
    { label: "Hospital & Clinic Supplies",     to: "/services#hospital" },
    { label: "Retail Pharmacy Supply",         to: "/services#retail" },
    { label: "Cold Chain Logistics",           to: "/services#logistics" },
  ];

  /* Social icon SVGs — inline to avoid extra deps */
  const socials = [
    {
      label: "LinkedIn",
      href: CONTACT.social.linkedin.url,
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      label: "Facebook",
      href: CONTACT.social.facebook.url,
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      label: "Instagram",
      href: CONTACT.social.instagram.url,
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      label: "WhatsApp",
      href: CONTACT.social.whatsapp.url,
      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    },
  ];

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "var(--color-canvas-parchment)",
        color: "var(--color-ink-muted-80)",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div className="container-wide">

        {/* ── Main Columns ─────────────────────────────────────── */}
        <div
          className="grid gap-12 pb-12 border-b"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderColor: "var(--color-hairline)",
          }}
        >
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 focus:outline-none" aria-label="Meenakshi Pharma – Home">
              <svg viewBox="0 0 28 28" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="6" fill="var(--color-primary)" />
                <rect x="12.5" y="5" width="3" height="18" rx="1.5" fill="#fff" />
                <rect x="5" y="12.5" width="18" height="3" rx="1.5" fill="#fff" />
              </svg>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-ink)", letterSpacing: "-0.1px" }}>
                  MEENAKSHI
                </span>
                <span style={{ fontFamily: "var(--font-text)", fontSize: "9px", fontWeight: 400, color: "var(--color-ink-muted-48)", letterSpacing: "0.5px", textTransform: "uppercase", marginTop: "1px" }}>
                  Pharma Distributors
                </span>
              </div>
            </Link>

            <p className="type-fine-print" style={{ color: "var(--color-ink-muted-48)", lineHeight: 1.6 }}>
              Leading pharmaceutical distributor in Trichy, Tamil Nadu.
              Committed to genuine, temperature-controlled medicines delivered with trust.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-colors duration-200"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-hairline)",
                    color: "var(--color-ink-muted-48)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "var(--color-hairline)";
                    e.currentTarget.style.color = "var(--color-ink-muted-48)";
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="type-caption-strong" style={{ color: "var(--color-ink)", marginBottom: "4px" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="type-dense-link block transition-colors duration-200"
                    style={{ color: "var(--color-ink-muted-80)" }}
                    onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                    onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-3">
            <h4 className="type-caption-strong" style={{ color: "var(--color-ink)", marginBottom: "4px" }}>
              Services
            </h4>
            <ul className="flex flex-col" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="type-dense-link block transition-colors duration-200"
                    style={{ color: "var(--color-ink-muted-80)" }}
                    onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                    onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="type-caption-strong" style={{ color: "var(--color-ink)" }}>
              Contact Us
            </h4>

            <div className="flex items-start gap-3">
              <Phone size={14} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
              <a
                href={CONTACT.phone.primaryHref}
                className="type-caption transition-colors duration-200"
                style={{ color: "var(--color-ink-muted-80)" }}
                onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
              >
                {CONTACT.phone.primary}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={14} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
              <div className="flex flex-col gap-1">
                <a
                  href={CONTACT.email.generalHref}
                  className="type-caption transition-colors duration-200"
                  style={{ color: "var(--color-ink-muted-80)" }}
                  onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                  onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
                >
                  {CONTACT.email.general}
                </a>
                <a
                  href={CONTACT.email.hrHref}
                  className="type-fine-print transition-colors duration-200"
                  style={{ color: "var(--color-ink-muted-48)" }}
                  onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                  onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-48)")}
                >
                  {CONTACT.email.hr} <span style={{ color: "var(--color-ink-muted-48)" }}>(HR)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={14} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
              <a
                href={CONTACT.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-caption transition-colors duration-200"
                style={{ color: "var(--color-ink-muted-80)", lineHeight: 1.6 }}
                onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
              >
                {CONTACT.address.line2},<br />
                {CONTACT.address.city},<br />
                {CONTACT.address.state} – {CONTACT.address.pincode}
              </a>
            </div>

            <p
              className="type-fine-print"
              style={{ color: "var(--color-ink-muted-48)", lineHeight: 1.6, paddingTop: "8px", borderTop: "1px solid var(--color-hairline)" }}
            >
              {CONTACT.hours.weekdays}<br />
              {CONTACT.hours.sunday}
            </p>
          </div>
        </div>

        {/* ── Legal Row ─────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ color: "var(--color-ink-muted-48)" }}
        >
          <p className="type-fine-print">
            © {currentYear} Meenakshi Pharma Distributors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="type-fine-print transition-colors duration-200"
              style={{ color: "var(--color-ink-muted-48)" }}
              onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
              onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-48)")}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="type-fine-print transition-colors duration-200"
              style={{ color: "var(--color-ink-muted-48)" }}
              onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
              onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-48)")}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* ── Back to Top ───────────────────────────────────────── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center focus:outline-none"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease, transform 0.1s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-primary-focus)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

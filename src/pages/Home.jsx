import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Syringe, Pill, Sparkles, Truck, ShieldCheck, Store, ThermometerSnowflake } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import { ABOUT_CONTENT } from "../utils/data";

/* ── Inline SVG Illustrations ──────────────────────────────────
   Product-shadow is applied to illustrations via filter:
   drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px) — the ONLY shadow
   in the system, reserved for "product renders resting on surface".
──────────────────────────────────────────────────────────────── */

function PharmacyIllustration() {
  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)" }}>
      {/* Shelf */}
      <rect x="40" y="270" width="320" height="12" rx="4" fill="#e0e0e0" />
      {/* Medicine box 1 */}
      <rect x="70" y="200" width="60" height="70" rx="6" fill="#0066cc" />
      <rect x="80" y="215" width="40" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
      <rect x="80" y="228" width="30" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
      <text x="100" y="255" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" fontFamily="system-ui">Rx</text>
      {/* Medicine box 2 */}
      <rect x="155" y="210" width="55" height="60" rx="6" fill="#f5f5f7" stroke="#e0e0e0" strokeWidth="1.5" />
      <rect x="165" y="225" width="35" height="5" rx="2.5" fill="#1d1d1f" opacity="0.5" />
      <rect x="165" y="236" width="25" height="4" rx="2" fill="#1d1d1f" opacity="0.3" />
      {/* Capsule */}
      <ellipse cx="255" cy="220" rx="28" ry="16" fill="#0066cc" transform="rotate(-20, 255, 220)" />
      <ellipse cx="255" cy="220" rx="14" ry="16" fill="#f5f5f7" transform="rotate(-20, 255, 220)" />
      {/* Small bottle */}
      <rect x="290" y="215" width="42" height="55" rx="6" fill="#272729" />
      <rect x="297" y="205" width="28" height="14" rx="4" fill="#333" />
      <rect x="300" y="228" width="20" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="300" y="238" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
      {/* Cold chain badge */}
      <rect x="130" y="130" width="140" height="48" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
      <circle cx="154" cy="154" r="10" fill="#f5f5f7" />
      <text x="154" y="158" textAnchor="middle" fontSize="12" fill="#0066cc">❄</text>
      <rect x="174" y="143" width="80" height="6" rx="3" fill="#1d1d1f" opacity="0.7" />
      <rect x="174" y="155" width="58" height="5" rx="2.5" fill="#7a7a7a" opacity="0.6" />
      {/* Plus signs */}
      <text x="58" y="165" fontSize="18" fill="#0066cc" opacity="0.5" fontWeight="bold">+</text>
      <text x="340" y="190" fontSize="14" fill="#0066cc" opacity="0.4" fontWeight="bold">+</text>
    </svg>
  );
}

function DeliveryIllustration() {
  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)" }}>
      {/* Road / ground */}
      <ellipse cx="200" cy="310" rx="160" ry="14" fill="#e0e0e0" opacity="0.6" />
      {/* Van body */}
      <rect x="60" y="200" width="240" height="100" rx="12" fill="#0066cc" />
      {/* Van cab */}
      <path d="M260 200 h55 a14 14 0 0 1 14 14 v56 a12 12 0 0 1 -12 12 h-57 z" fill="#1d1d1f" opacity="0.9" />
      {/* Window */}
      <rect x="270" y="214" width="42" height="35" rx="6" fill="rgba(255,255,255,0.18)" />
      {/* Cross on van */}
      <rect x="155" y="228" width="10" height="44" rx="5" fill="white" />
      <rect x="138" y="245" width="44" height="10" rx="5" fill="white" />
      {/* Wheels */}
      <circle cx="110" cy="310" r="24" fill="#272729" stroke="#e0e0e0" strokeWidth="3" />
      <circle cx="110" cy="310" r="8" fill="#e0e0e0" />
      <circle cx="280" cy="310" r="24" fill="#272729" stroke="#e0e0e0" strokeWidth="3" />
      <circle cx="280" cy="310" r="8" fill="#e0e0e0" />
      {/* Speed lines */}
      <line x1="20" y1="232" x2="52" y2="232" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="248" x2="52" y2="248" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="264" x2="52" y2="264" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
      {/* GPS pin */}
      <circle cx="340" cy="130" r="22" fill="#f5f5f7" stroke="#e0e0e0" strokeWidth="1" />
      <circle cx="340" cy="127" r="8" fill="#0066cc" />
      <path d="M340 135 L340 155" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
      <text x="340" y="175" textAnchor="middle" fontSize="9" fill="#7a7a7a" fontFamily="system-ui">Live Track</text>
      {/* Temp badge */}
      <rect x="70" y="130" width="110" height="44" rx="8" fill="white" stroke="#e0e0e0" strokeWidth="1" />
      <text x="95" y="155" textAnchor="middle" fontSize="13" fill="#0066cc">❄</text>
      <rect x="114" y="142" width="52" height="5" rx="2.5" fill="#1d1d1f" opacity="0.7" />
      <rect x="114" y="153" width="38" height="4" rx="2" fill="#7a7a7a" opacity="0.5" />
    </svg>
  );
}

function QualityIllustration() {
  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)" }}>
      {/* Shield */}
      <path d="M200 60 C 240 60, 280 48, 310 48 C 310 160, 200 240, 200 240 C 200 240, 90 160, 90 48 C 120 48, 160 60, 200 60 Z"
        fill="#0066cc" />
      {/* Checkmark */}
      <path d="M155 140 l30 30 l60 -70" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* ISO badge */}
      <rect x="60" y="255" width="120" height="50" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
      <rect x="60" y="255" width="120" height="18" rx="10" fill="#272729" />
      <text x="120" y="268" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui">ISO 9001:2015</text>
      <rect x="75" y="282" width="90" height="5" rx="2.5" fill="#1d1d1f" opacity="0.4" />
      <text x="120" y="300" textAnchor="middle" fontSize="8" fill="#7a7a7a" fontFamily="system-ui">Certified</text>
      {/* GDP badge */}
      <rect x="220" y="255" width="120" height="50" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
      <rect x="220" y="255" width="120" height="18" rx="10" fill="#0066cc" />
      <text x="280" y="268" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui">WHO-GDP</text>
      <rect x="235" y="282" width="90" height="5" rx="2.5" fill="#1d1d1f" opacity="0.4" />
      <text x="280" y="300" textAnchor="middle" fontSize="8" fill="#7a7a7a" fontFamily="system-ui">Compliant</text>
      {/* Stars */}
      <text x="340" y="100" fontSize="16" fill="#0066cc" opacity="0.4">✦</text>
      <text x="52" y="120" fontSize="12" fill="#0066cc" opacity="0.3">✦</text>
    </svg>
  );
}

/* ── Stat Counter Card ─────────────────────────────────────── */
function StatCard({ value, suffix, label }) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <span
        className="flex items-baseline gap-0.5"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 600,
          lineHeight: 1.0,
          letterSpacing: "-0.5px",
          color: "var(--color-primary)",
        }}
      >
        <AnimatedCounter value={value} suffix={suffix} />
      </span>
      <span
        className="mt-2"
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "var(--type-caption-size)",
          fontWeight: "var(--type-caption-weight)",
          letterSpacing: "var(--type-caption-ls)",
          color: "var(--color-ink-muted-48)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Service Card (utility-card style) ─────────────────────── */
function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <div
      className="utility-card flex flex-col gap-5 transition-all duration-300"
      style={{ minHeight: "280px" }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--color-primary)";
        e.currentTarget.style.boxShadow = "0 0 0 1px var(--color-primary)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--color-hairline)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--color-ink-muted-48)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        0{index + 1}
      </span>

      <div
        className="flex items-center justify-center"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-canvas-parchment)",
          border: "1px solid var(--color-hairline)",
          color: "var(--color-primary)",
        }}
      >
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <div>
        <h3
          className="type-body-strong"
          style={{ color: "var(--color-ink)", marginBottom: "8px" }}
        >
          {title}
        </h3>
        <p
          className="type-caption"
          style={{ color: "var(--color-ink-muted-48)", lineHeight: 1.6 }}
        >
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <Link to="/services" className="text-link type-caption">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

/* ── Main Home Component ──────────────────────────────────── */
export default function Home() {
  const WEB_ORDER_URL = "https://meenakshipharma.wondersoft.in/ro13.html";

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      eyebrow: "Meenakshi Pharma",
      headline: "Trichy's Premier\nPharma Distributor",
      tagline: "20 years of genuine medicines, cold-chain integrity, and trusted healthcare logistics.",
      illustration: PharmacyIllustration,
    },
    {
      id: 2,
      eyebrow: "Quick Logistics",
      headline: "Fast. Secure.\nTemperature-Safe.",
      tagline: "Same-day dispatch to retail pharmacies, hospitals, and clinics across Trichy.",
      illustration: DeliveryIllustration,
    },
    {
      id: 3,
      eyebrow: "Genuine Sourcing",
      headline: "100% Genuine\nHealthcare Brands.",
      tagline: "WHO-GDP certified. 86+ global manufacturers. Zero counterfeits — guaranteed.",
      illustration: QualityIllustration,
    },
  ];

  const handleNext = () => setActiveSlide(p => (p + 1) % slides.length);
  const handlePrev = () => setActiveSlide(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isHovered) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(timerRef.current);
  }, [isHovered, activeSlide]);

  const { eyebrow, headline, tagline, illustration: Illustration } = slides[activeSlide];

  const stats = [
    { value: "20",   suffix: "+", label: "Years of Experience" },
    { value: "1000", suffix: "+", label: "Customers Served" },
    { value: "5000", suffix: "+", label: "Medicines Distributed" },
    { value: "86",   suffix: "+", label: "Partner Brands" },
  ];

  const services = [
    { icon: Truck,                 title: "Pharmaceutical Distribution", description: "Direct supply from 86 manufacturers to pharmacies and hospital grids. Every batch verified." },
    { icon: ShieldCheck,           title: "Hospital & Clinic Supplies",   description: "ICU stocks, IV fluids, surgery packs. Priority dispatch with dedicated account managers." },
    { icon: Store,                 title: "Retail Pharmacy Supply",       description: "Daily replenishment for 1,000+ retail chemists. Flexible orders, web portal integration." },
    { icon: ThermometerSnowflake,  title: "Cold Chain Logistics",         description: "Active refrigeration. Continuous 2°C–8°C data logging. WHO-certified handling crew." },
  ];

  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════════
          TILE 1 — HERO (Light White)
          Hero display headline + tagline + 2 pill CTAs + illustration
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="tile-light"
        style={{ minHeight: "calc(100vh - var(--height-global-nav))", position: "relative", overflow: "hidden" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container-wide h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-12 lg:gap-16"
              style={{
                gridTemplateColumns: "1fr 1fr",
                minHeight: "calc(100vh - var(--height-global-nav))",
                paddingTop: "var(--space-section)",
                paddingBottom: "var(--space-section)",
              }}
            >
              {/* Left — Text */}
              <div className="flex flex-col items-start gap-6 lg:gap-8" style={{ gridColumn: "1" }}>
                {/* Eyebrow */}
                <motion.span
                  key={`eyebrow-${activeSlide}`}
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="type-tagline"
                  style={{ color: "var(--color-ink-muted-48)" }}
                >
                  {eyebrow}
                </motion.span>

                {/* Hero Headline */}
                <motion.h1
                  key={`headline-${activeSlide}`}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="type-hero"
                  style={{ color: "var(--color-ink)", whiteSpace: "pre-line", margin: 0 }}
                >
                  {headline}
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  key={`tagline-${activeSlide}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="type-lead"
                  style={{ color: "var(--color-ink-muted-48)", maxWidth: "440px", margin: 0 }}
                >
                  {tagline}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  key={`cta-${activeSlide}`}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.26 }}
                  className="flex flex-wrap gap-4"
                >
                  <a href={WEB_ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Order Online
                  </a>
                  <Link to="/about" className="btn-ghost-pill">
                    Learn more
                  </Link>
                </motion.div>
              </div>

              {/* Right — Illustration */}
              <motion.div
                key={`ill-${activeSlide}`}
                initial={{ scale: 1.04, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.04, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-center"
                style={{ gridColumn: "2" }}
              >
                <Illustration />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide controls */}
        <div
          className="absolute left-0 right-0 flex items-center justify-center gap-3"
          style={{ bottom: "32px" }}
        >
          <button
            id="hero-prev-btn"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex items-center justify-center focus:outline-none transition-all duration-200"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-surface-chip-rgba, rgba(210,210,215,0.64))",
              border: "none",
              cursor: "pointer",
              color: "var(--color-ink)",
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          {slides.map((_, i) => (
            <button
              key={i}
              id={`hero-dot-${i}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 focus:outline-none"
              style={{
                height: "8px",
                width: i === activeSlide ? "28px" : "8px",
                borderRadius: "var(--radius-pill)",
                backgroundColor: i === activeSlide ? "var(--color-primary)" : "var(--color-surface-chip)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}

          <button
            id="hero-next-btn"
            onClick={handleNext}
            aria-label="Next slide"
            className="flex items-center justify-center focus:outline-none transition-all duration-200"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-surface-chip-rgba, rgba(210,210,215,0.64))",
              border: "none",
              cursor: "pointer",
              color: "var(--color-ink)",
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile fallback — single column */}
        <style>{`
          @media (max-width: 767px) {
            #hero .container-wide > div {
              grid-template-columns: 1fr !important;
            }
            #hero .container-wide > div > div:last-child {
              display: none;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TILE 2 — STATS (Parchment)
          4-column animated counter grid
      ═══════════════════════════════════════════════════════════ */}
      <section id="stats" className="tile-parchment" style={{ borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}>
        <div className="container-wide">
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--color-hairline)" : "none",
                }}
              >
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            #stats .container-wide > div {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #stats .container-wide > div > div:nth-child(2) {
              border-right: none !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TILE 3 — ABOUT (Dark Tile #272729)
          White headline, muted body, blue pill CTA, photo right
      ═══════════════════════════════════════════════════════════ */}
      <section id="about" className="tile-dark section-pad">
        <div className="container-wide">
          <div
            className="grid items-center gap-16"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {/* Text */}
            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="type-tagline"
                  style={{ color: "var(--color-primary-on-dark)", marginBottom: "16px" }}
                >
                  About Meenakshi Pharma
                </p>
                <h2
                  className="type-display-lg"
                  style={{ color: "var(--color-on-dark)", marginBottom: "24px" }}
                >
                  Two Decades of Integrity & Healing Trust
                </h2>
                <p
                  className="type-body"
                  style={{ color: "var(--color-body-muted)" }}
                >
                  {ABOUT_CONTENT.shortDescription1}
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["100% Genuine Sourcing", "2°C – 8°C Cold Storage", "WHO-GDP Compliant", "86+ Global Brands"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary-on-dark)",
                        flexShrink: 0,
                      }}
                    />
                    <span className="type-body-strong" style={{ color: "var(--color-on-dark)", fontWeight: 400 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link to="/about" className="btn-primary">
                  Learn more
                </Link>
                <Link to="/contact" className="btn-ghost-pill" style={{ color: "var(--color-primary-on-dark)", borderColor: "var(--color-primary-on-dark)" }}>
                  Contact us
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                  filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)",
                }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            #about .container-wide > div {
              grid-template-columns: 1fr !important;
            }
            #about .container-wide > div > div:last-child {
              display: none;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TILE 4 — SERVICES (Light White)
          4 utility cards, 18px radius, hairline border
      ═══════════════════════════════════════════════════════════ */}
      <section id="services" className="tile-light section-pad">
        <div className="container-wide">
          {/* Section header — centered, no decorative chrome */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p
              className="type-tagline"
              style={{ color: "var(--color-ink-muted-48)", marginBottom: "16px" }}
            >
              What We Do
            </p>
            <h2
              className="type-display-lg"
              style={{ color: "var(--color-ink)" }}
            >
              Our Services
            </h2>
          </div>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            #services .container-wide > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            #services .container-wide > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TILE 5 — CTA BANNER (Dark Tile-2)
          Single large call-to-action
      ═══════════════════════════════════════════════════════════ */}
      <section id="cta-banner" className="tile-dark-2 section-pad">
        <div className="container-content text-center flex flex-col items-center gap-8">
          <p className="type-tagline" style={{ color: "var(--color-primary-on-dark)" }}>
            Ready to Partner?
          </p>
          <h2
            className="type-display-lg"
            style={{ color: "var(--color-on-dark)", maxWidth: "600px" }}
          >
            Place orders online or speak to our sales team today.
          </h2>
          <p
            className="type-lead-airy"
            style={{ color: "var(--color-body-muted)", maxWidth: "480px" }}
          >
            Serving 1,000+ retail pharmacies, hospitals, and clinics across Trichy.
            Same-day dispatch available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WEB_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-store-hero"
            >
              Order Online
            </a>
            <Link
              to="/contact"
              className="btn-ghost-pill"
              style={{ color: "var(--color-primary-on-dark)", borderColor: "var(--color-primary-on-dark)", fontSize: "18px", fontWeight: 300, padding: "14px 28px" }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

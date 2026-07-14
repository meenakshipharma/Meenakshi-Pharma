import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import Lightbox from "../components/Lightbox";
import { TIMELINE, INFRASTRUCTURE, ABOUT_CONTENT } from "../utils/data";

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Dark Tile)
          Page headline against dark canvas
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-dark section-pad">
        <div className="container-wide text-center flex flex-col items-center gap-6">
          <p className="type-tagline" style={{ color: "var(--color-primary-on-dark)" }}>
            About Us
          </p>
          <h1 className="type-hero" style={{ color: "var(--color-on-dark)", maxWidth: "680px", margin: 0 }}>
            Two Decades of Integrity & Healing Trust
          </h1>
          <p className="type-lead" style={{ color: "var(--color-body-muted)", maxWidth: "560px", margin: 0 }}>
            Trichy's premier wholesale pharmaceutical distributor since 2004.
            WHO-GDP certified, cold-chain secured, 86+ global brands.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 2 — INTRODUCTION (Light White)
          Split: image left, text right
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-wide">
          <div className="grid items-center gap-16" style={{ gridTemplateColumns: "1fr 1.2fr" }}>

            {/* Image */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  display: "block",
                  filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)",
                }}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="type-tagline" style={{ color: "var(--color-ink-muted-48)", marginBottom: "16px" }}>
                  {ABOUT_CONTENT.badge}
                </p>
                <h2 className="type-display-lg" style={{ color: "var(--color-ink)", marginBottom: "24px" }}>
                  {ABOUT_CONTENT.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>
                    {ABOUT_CONTENT.shortDescription1}
                  </p>
                  <p className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>
                    {ABOUT_CONTENT.shortDescription2}
                  </p>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-4 pt-4"
                      style={{ borderTop: "1px solid var(--color-hairline)" }}
                    >
                      <p className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>
                        {ABOUT_CONTENT.expandedDescription1}
                      </p>
                      <p className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>
                        {ABOUT_CONTENT.expandedDescription2}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-4" style={{ borderTop: "1px solid var(--color-hairline)" }}>
                {["100% Genuine Sourcing", "2°C – 8°C Cold Storage", "WHO-GDP Certified", "86+ Global Brands"].map(f => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-primary)", flexShrink: 0 }} />
                    <span className="type-caption-strong" style={{ color: "var(--color-ink)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                id="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn-primary self-start"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .about-intro-grid { grid-template-columns: 1fr !important; }
            .about-intro-grid > div:first-child { display: none; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 3 — VISION & MISSION (Parchment)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-parchment section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h2 className="type-display-lg" style={{ color: "var(--color-ink)" }}>
              Vision & Mission
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>

            {/* Vision */}
            <div className="utility-card flex flex-col gap-6">
              <div className="flex items-center justify-center"
                style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", backgroundColor: "rgba(0,102,204,0.08)", color: "var(--color-primary)" }}>
                <Eye size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "12px" }}>Our Vision</h3>
                <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>
                  To establish ourselves as the most reliable, tech-integrated healthcare logistics and
                  pharmaceutical distribution network in South India — ensuring every patient, clinic,
                  and pharmacy has immediate access to genuine, life-saving therapeutics without delay.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="utility-card flex flex-col gap-6">
              <div className="flex items-center justify-center"
                style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", backgroundColor: "rgba(0,102,204,0.08)", color: "var(--color-primary)" }}>
                <Target size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "12px" }}>Our Mission</h3>
                <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Provide uncompromised medicine quality by enforcing 100% genuine sourcing from certified manufacturers.",
                    "Preserve critical cold chains (vaccines, serums) using continuous temperature tracking protocols.",
                    "Optimize client orders through automated invoice fulfillment and prompt regional delivery.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-primary)", marginTop: "7px", flexShrink: 0 }} />
                      <span className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            section.tile-parchment .grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 4 — TIMELINE (Dark Tile)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-dark section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <p className="type-tagline" style={{ color: "var(--color-primary-on-dark)", marginBottom: "12px" }}>Our Journey</p>
            <h2 className="type-display-lg" style={{ color: "var(--color-on-dark)" }}>
              Growth Timeline
            </h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                style={{
                  padding: "var(--space-lg)",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: i % 2 === 0 ? "var(--color-surface-tile-2)" : "var(--color-surface-tile-3)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 600,
                    color: "var(--color-primary-on-dark)",
                    marginBottom: "8px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {t.year}
                </span>
                <h4 className="type-body-strong" style={{ color: "var(--color-on-dark)", marginBottom: "8px" }}>
                  {t.title}
                </h4>
                <p className="type-caption" style={{ color: "var(--color-body-muted)", lineHeight: 1.6 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .tile-dark .grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px)  { .tile-dark .grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 5 — INFRASTRUCTURE (Light White, Photo Grid)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h2 className="type-display-lg" style={{ color: "var(--color-ink)" }}>
              Our Infrastructure
            </h2>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {INFRASTRUCTURE.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="utility-card overflow-hidden cursor-pointer group"
                style={{ padding: 0 }}
              >
                <div style={{ overflow: "hidden", aspectRatio: index % 2 === 0 ? "4/3" : "1/1" }}>
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={e => (e.target.style.transform = "scale(1.04)")}
                    onMouseLeave={e => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "var(--space-lg)", borderTop: "1px solid var(--color-hairline)" }}>
                  <h4 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "4px" }}>{item.title}</h4>
                  <p className="type-caption" style={{ color: "var(--color-ink-muted-48)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .tile-light .grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px)  { .tile-light .grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={INFRASTRUCTURE}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}

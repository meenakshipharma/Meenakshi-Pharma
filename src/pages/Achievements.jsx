import { useState } from "react";
import Lightbox from "../components/Lightbox";
import AnimatedCounter from "../components/AnimatedCounter";
import { ACHIEVEMENTS } from "../utils/data";

const stats = [
  { value: "25", suffix: "+", label: "Certifications & Awards" },
  { value: "20", suffix: "+", label: "Years in Business" },
  { value: "86", suffix: "+", label: "Brand Partnerships" },
  { value: "1000", suffix: "+", label: "Clients Served" },
];

export default function Achievements() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Dark)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-dark section-pad">
        <div className="container-content text-center flex flex-col items-center gap-6">
          <p className="type-tagline" style={{ color: "var(--color-primary-on-dark)" }}>
            Our Milestones
          </p>
          <h1 className="type-hero" style={{ color: "var(--color-on-dark)", margin: 0 }}>
            Achievements
          </h1>
          <p className="type-lead" style={{ color: "var(--color-body-muted)", maxWidth: "520px", margin: 0 }}>
            Two decades of recognition, certifications, and industry milestones
            that validate our commitment to quality healthcare.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 2 — STATS (Parchment)
      ═══════════════════════════════════════════════════════ */}
      <section
        className="tile-parchment"
        style={{ borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}
      >
        <div className="container-wide">
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center py-10"
                style={{ borderRight: i < stats.length - 1 ? "1px solid var(--color-hairline)" : "none" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    fontWeight: 600,
                    lineHeight: 1.0,
                    letterSpacing: "-0.5px",
                    color: "var(--color-primary)",
                  }}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span
                  className="type-fine-print mt-2"
                  style={{ color: "var(--color-ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .tile-parchment .grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 3 — ACHIEVEMENTS GRID (Light White)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h2 className="type-display-lg" style={{ color: "var(--color-ink)" }}>
              Certifications & Awards
            </h2>
          </div>

          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {ACHIEVEMENTS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="utility-card overflow-hidden cursor-pointer"
                style={{ padding: 0, transition: "all 0.2s ease" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--color-hairline)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ overflow: "hidden", aspectRatio: "1/1" }}>
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "var(--space-sm)" }}>
                  <p
                    className="type-fine-print"
                    style={{
                      color: "var(--color-ink-muted-48)",
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1280px) { .tile-light .grid { grid-template-columns: repeat(4, 1fr) !important; } }
          @media (max-width: 1024px) { .tile-light .grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 640px)  { .tile-light .grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={ACHIEVEMENTS}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}

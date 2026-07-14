import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Store, ThermometerSnowflake } from "lucide-react";
import { SERVICES } from "../utils/data";
import { CONTACT } from "../utils/contact";

const iconMap = { Truck, ShieldCheck, Store, ThermometerSnowflake };

export default function Services() {
  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Parchment)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-parchment section-pad">
        <div className="container-content text-center flex flex-col items-center gap-6">
          <p className="type-tagline" style={{ color: "var(--color-ink-muted-48)" }}>
            What We Offer
          </p>
          <h1 className="type-hero" style={{ color: "var(--color-ink)", margin: 0 }}>
            Our Services
          </h1>
          <p className="type-lead" style={{ color: "var(--color-ink-muted-48)", maxWidth: "540px", margin: 0 }}>
            End-to-end pharmaceutical logistics — from manufacturer to patient,
            cold-chain intact, quality never compromised.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILES 2–5 — Each Service (alternating light/dark)
      ═══════════════════════════════════════════════════════ */}
      {SERVICES.map((service, i) => {
        const Icon = iconMap[service.icon] || iconMap[service.iconName] || Truck;
        const isDark = i % 2 !== 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={isDark ? "tile-dark section-pad" : "tile-light section-pad"}
          >
            <div className="container-wide">
              <div
                className="grid items-center gap-16"
                style={{ gridTemplateColumns: i % 2 === 0 ? "1.1fr 1fr" : "1fr 1.1fr" }}
              >
                {/* Text block (alternates side) */}
                <div
                  style={{ order: i % 2 === 0 ? 1 : 2 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <p
                      className="type-tagline"
                      style={{
                        color: isDark ? "var(--color-primary-on-dark)" : "var(--color-ink-muted-48)",
                        marginBottom: "16px",
                      }}
                    >
                      {service.tagline}
                    </p>
                    <h2
                      className="type-display-lg"
                      style={{
                        color: isDark ? "var(--color-on-dark)" : "var(--color-ink)",
                        marginBottom: "20px",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="type-body"
                      style={{ color: isDark ? "var(--color-body-muted)" : "var(--color-ink-muted-80)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: isDark ? "var(--color-primary-on-dark)" : "var(--color-primary)",
                            marginTop: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          className="type-body"
                          style={{ color: isDark ? "var(--color-body-muted)" : "var(--color-ink-muted-48)" }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 flex-wrap">
                    <Link to="/contact" className="btn-primary">Contact Us</Link>
                    <a
                      href={CONTACT.portals.webOrder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost-pill"
                      style={isDark ? { color: "var(--color-primary-on-dark)", borderColor: "var(--color-primary-on-dark)" } : {}}
                    >
                      Order Online
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      objectFit: "cover",
                      borderRadius: "var(--radius-lg)",
                      display: "block",
                      filter: "drop-shadow(rgba(0,0,0,0.22) 3px 5px 30px)",
                    }}
                  />
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 767px) {
                #${service.id} .grid { grid-template-columns: 1fr !important; }
                #${service.id} .grid > div[style*="order: 2"] { display: none; }
              }
            `}</style>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════
          FINAL TILE — CTA (Dark Tile 3)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-dark-3 section-pad">
        <div className="container-content text-center flex flex-col items-center gap-8">
          <h2 className="type-display-lg" style={{ color: "var(--color-on-dark)" }}>
            Need a custom supply arrangement?
          </h2>
          <p className="type-body" style={{ color: "var(--color-body-muted)", maxWidth: "480px" }}>
            Contact our sales team for institutional pricing, bulk order discounts, and dedicated account management.
          </p>
          <Link to="/contact" className="btn-store-hero">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}

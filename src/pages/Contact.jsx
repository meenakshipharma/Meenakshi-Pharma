import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { CONTACT } from "../utils/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `${CONTACT.email.generalHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  /* Shared input style */
  const inputStyle = {
    width: "100%",
    height: "44px",
    padding: "0 20px",
    fontFamily: "var(--font-text)",
    fontSize: "var(--type-body-size)",
    fontWeight: "var(--type-body-weight)",
    letterSpacing: "var(--type-body-ls)",
    color: "var(--color-ink)",
    backgroundColor: "var(--color-canvas)",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "var(--radius-pill)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "140px",
    padding: "12px 20px",
    borderRadius: "var(--radius-lg)",
    resize: "vertical",
  };

  const onFocus  = e => (e.target.style.borderColor = "var(--color-primary-focus)");
  const onBlur   = e => (e.target.style.borderColor = "rgba(0,0,0,0.08)");

  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Dark)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-dark section-pad">
        <div className="container-content text-center flex flex-col items-center gap-6">
          <p className="type-tagline" style={{ color: "var(--color-primary-on-dark)" }}>
            Get in Touch
          </p>
          <h1 className="type-hero" style={{ color: "var(--color-on-dark)", margin: 0 }}>
            Contact Us
          </h1>
          <p className="type-lead" style={{ color: "var(--color-body-muted)", maxWidth: "480px", margin: 0 }}>
            Reach out for orders, enquiries, or partnerships.
            Our team responds within one business day.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 2 — CONTACT INFO + FORM (Light White)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-wide">
          <div className="grid gap-16 items-start" style={{ gridTemplateColumns: "1fr 1.6fr" }}>

            {/* Left — Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="type-display-md" style={{ color: "var(--color-ink)", marginBottom: "8px" }}>
                  Meenakshi Pharma Distributors
                </h2>
                <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>
                  Trichy, Tamil Nadu
                </p>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    items: [
                      { text: CONTACT.phone.primary, href: CONTACT.phone.primaryHref },
                    ],
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    items: [
                      { text: CONTACT.email.general, href: CONTACT.email.generalHref },
                      { text: `${CONTACT.email.hr} (HR)`, href: CONTACT.email.hrHref },
                    ],
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    items: [
                      { text: `${CONTACT.address.line2}, ${CONTACT.address.city}, ${CONTACT.address.state} – ${CONTACT.address.pincode}`, href: CONTACT.address.mapsUrl, external: true },
                    ],
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    items: [
                      { text: CONTACT.hours.weekdays },
                      { text: CONTACT.hours.sunday },
                    ],
                  },
                ].map(({ icon: Icon, label, items }) => (
                  <div key={label} className="flex gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(0,102,204,0.08)",
                        color: "var(--color-primary)",
                        marginTop: "2px",
                      }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="type-fine-print" style={{ color: "var(--color-ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                        {label}
                      </p>
                      {items.map(({ text, href, external }) =>
                        href ? (
                          <a
                            key={text}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="block type-body transition-colors duration-200"
                            style={{ color: "var(--color-ink-muted-80)" }}
                            onMouseEnter={e => (e.target.style.color = "var(--color-primary)")}
                            onMouseLeave={e => (e.target.style.color = "var(--color-ink-muted-80)")}
                          >
                            {text}
                          </a>
                        ) : (
                          <p key={text} className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>{text}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Portals */}
              <div style={{ paddingTop: "24px", borderTop: "1px solid var(--color-hairline)" }}>
                <p className="type-caption-strong" style={{ color: "var(--color-ink)", marginBottom: "12px" }}>
                  Online Portals
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={CONTACT.portals.webOrder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary self-start"
                  >
                    Web Order Portal
                  </a>
                  <a
                    href={CONTACT.portals.stockSales.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-pill self-start"
                  >
                    Stock & Sales Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Enquiry Form */}
            <div
              className="utility-card"
              style={{ padding: "40px" }}
            >
              {submitted ? (
                <div className="text-center flex flex-col items-center gap-6 py-12">
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0,102,204,0.08)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={24} />
                  </div>
                  <div>
                    <h3 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "8px" }}>
                      Message sent!
                    </h3>
                    <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>
                      Your email client should have opened. We'll get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-link type-caption"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <h3 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "4px" }}>
                      Send an Enquiry
                    </h3>
                    <p className="type-caption" style={{ color: "var(--color-ink-muted-48)" }}>
                      Fill in the form and we'll respond within one business day.
                    </p>
                  </div>

                  <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="type-caption-strong"
                        style={{ color: "var(--color-ink)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Dr. Ramesh Kumar"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={inputStyle}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="type-caption-strong"
                        style={{ color: "var(--color-ink)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="type-caption-strong"
                      style={{ color: "var(--color-ink)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="type-caption-strong"
                      style={{ color: "var(--color-ink)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="Tell us about your pharmacy / institution and the medicines you need…"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      style={textareaStyle}
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-primary"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .tile-light .grid { grid-template-columns: 1fr !important; }
            .utility-card form .grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 3 — MAP EMBED PLACEHOLDER (Parchment)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-parchment" style={{ paddingTop: 0, paddingBottom: "var(--space-section)" }}>
        <div className="container-wide">
          <a
            href={CONTACT.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}
          >
            <div
              style={{
                height: "300px",
                backgroundColor: "var(--color-surface-chip)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <MapPin size={32} style={{ color: "var(--color-primary)" }} />
              <p className="type-body-strong" style={{ color: "var(--color-ink)" }}>
                Open in Google Maps
              </p>
              <p className="type-caption" style={{ color: "var(--color-ink-muted-48)" }}>
                {CONTACT.address.line2}, {CONTACT.address.city}
              </p>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}

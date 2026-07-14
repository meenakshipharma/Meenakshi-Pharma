import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { JOB_OPENINGS } from "../utils/data";
import { CONTACT } from "../utils/contact";

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={`job-card-${job.id}`}
      className="utility-card flex flex-col gap-5"
      style={{ transition: "border-color 0.2s ease" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-primary)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-hairline)")}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="type-fine-print"
            style={{ color: "var(--color-ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}
          >
            {job.department}
          </p>
          <h3 className="type-body-strong" style={{ color: "var(--color-ink)" }}>
            {job.title}
          </h3>
        </div>
        <span
          className="type-fine-print"
          style={{
            backgroundColor: "rgba(0,102,204,0.08)",
            color: "var(--color-primary)",
            padding: "4px 10px",
            borderRadius: "var(--radius-pill)",
            flexShrink: 0,
            fontWeight: 600,
          }}
        >
          Open
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4">
        {[
          { icon: MapPin,        text: job.location },
          { icon: Clock,         text: job.experience },
          { icon: GraduationCap, text: job.qualification },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon size={13} style={{ color: "var(--color-ink-muted-48)" }} />
            <span className="type-caption" style={{ color: "var(--color-ink-muted-48)" }}>{text}</span>
          </div>
        ))}
      </div>

      {/* Description — expanded */}
      {expanded && (
        <div className="flex flex-col gap-5 pt-4" style={{ borderTop: "1px solid var(--color-hairline)" }}>
          <p className="type-body" style={{ color: "var(--color-ink-muted-80)" }}>
            {job.description}
          </p>
          <div>
            <p className="type-caption-strong" style={{ color: "var(--color-ink)", marginBottom: "10px" }}>Benefits</p>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {job.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--color-primary)", flexShrink: 0 }} />
                  <span className="type-caption" style={{ color: "var(--color-ink-muted-48)" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={CONTACT.email.hrHref}
            className="btn-primary self-start"
          >
            Apply via Email
          </a>
        </div>
      )}

      {/* Toggle */}
      <button
        id={`job-toggle-${job.id}`}
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 focus:outline-none self-start"
        style={{ color: "var(--color-primary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <span className="type-caption" style={{ color: "var(--color-primary)" }}>
          {expanded ? "Hide Details" : "View Details"}
        </span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
    </div>
  );
}

export default function Career() {
  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Light White)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-content text-center flex flex-col items-center gap-6">
          <p className="type-tagline" style={{ color: "var(--color-ink-muted-48)" }}>
            Join Our Team
          </p>
          <h1 className="type-hero" style={{ color: "var(--color-ink)", margin: 0 }}>
            Build a Career in Healthcare
          </h1>
          <p className="type-lead" style={{ color: "var(--color-ink-muted-48)", maxWidth: "520px", margin: 0 }}>
            Be part of Trichy's leading pharmaceutical distribution team.
            Meaningful work, strong growth, and a culture built on trust.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 2 — WHY JOIN US (Parchment)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-parchment section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <h2 className="type-display-lg" style={{ color: "var(--color-ink)" }}>
              Why Meenakshi Pharma?
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[
              { title: "Stable & Trusted Brand",   body: "20+ years of uninterrupted operations. Work with a company that pharmacies and hospitals trust unconditionally." },
              { title: "Growth Opportunities",      body: "Clear career paths, annual performance reviews, and skill-building programs across all departments." },
              { title: "Impact-Driven Work",        body: "Every delivery we make ensures a patient gets the medicine they need. Your work matters — directly." },
            ].map(({ title, body }) => (
              <div key={title} className="utility-card flex flex-col gap-4">
                <h3 className="type-body-strong" style={{ color: "var(--color-ink)" }}>{title}</h3>
                <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .tile-parchment .grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 3 — JOB OPENINGS (Light White)
      ═══════════════════════════════════════════════════════ */}
      <section className="tile-light section-pad">
        <div className="container-wide">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h2 className="type-display-lg" style={{ color: "var(--color-ink)" }}>
              Current Openings
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {JOB_OPENINGS.map(job => <JobCard key={job.id} job={job} />)}
          </div>

          {/* General application */}
          <div
            className="utility-card flex flex-col items-center text-center gap-5"
            style={{ marginTop: "48px" }}
          >
            <div>
              <h3 className="type-body-strong" style={{ color: "var(--color-ink)", marginBottom: "8px" }}>
                Don't see your role?
              </h3>
              <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>
                We're always looking for talented individuals. Send your resume to our HR team.
              </p>
            </div>
            <a href={CONTACT.email.hrHref} className="btn-primary">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

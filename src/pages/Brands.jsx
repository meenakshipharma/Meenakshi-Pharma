import React, { useEffect, useRef, useState } from "react";
import { BRANDS } from "../utils/data";
import SVGLogo from "../components/SVGLogo";

/* ─── Split brands into rows for the staggered marquee layout ───────────── */
const ROW_SIZES = [10, 11, 10, 11, 10, 11, 11, 10, 2]; // sums to 86
function chunkBrands(brands, sizes) {
  let i = 0;
  return sizes.map((n) => brands.slice(i, (i += n)));
}
const ROWS = chunkBrands(BRANDS, ROW_SIZES);

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function Brands() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#F8FCFD" }}
    >
      {/* Subtle mesh background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(27,211,228,0.07) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(16,185,129,0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(27,211,228,0.03) 0%, transparent 60%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "120px",
          paddingBottom: "72px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px 72px",
        }}
      >
        {/* Pill badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(27,211,228,0.08)",
            border: "1px solid rgba(27,211,228,0.22)",
            borderRadius: "100px",
            padding: "5px 16px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#1BD3E4",
              display: "inline-block",
              boxShadow: "0 0 10px rgba(27,211,228,0.8)",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: "900",
            lineHeight: "1.1",
            color: "#0F172A",
            margin: "0 0 18px",
            letterSpacing: "-1px",
          }}
        >
          Brands We{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #1BD3E4 0%, #10B981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Proudly Carry
          </span>
        </h1>


      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "1300px", margin: "0 auto 56px", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, #CBD5E1 30%, #1BD3E4 50%, #CBD5E1 70%, transparent)",
          }}
        />
      </div>

      {/* ── Staggered Marquee Rows ────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 1, paddingBottom: "100px", overflow: "hidden" }}>
        {ROWS.map((rowBrands, rowIdx) => (
          <MarqueeRow
            key={rowIdx}
            brands={rowBrands}
            reverse={rowIdx % 2 !== 0}
            speed={30 + rowIdx * 4}
            rowIndex={rowIdx}
          />
        ))}
      </section>

      {/* ── Bottom CTA strip ──────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(135deg,#082529 0%,#0D9488 100%)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          Trusted Pharmaceutical Distributor
        </p>
        <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "800", margin: "0" }}>
          Need a specific brand?{" "}
          <span style={{ color: "#1BD3E4" }}>We stock it.</span>
        </h2>
      </div>
    </div>
  );
}

/* ─── Marquee Row ─────────────────────────────────────────────────────────── */
function MarqueeRow({ brands, reverse, speed, rowIndex }) {
  const duplicated = [...brands, ...brands, ...brands]; // triple for seamless loop
  const animName = `marquee-${reverse ? "rev" : "fwd"}-${rowIndex}`;

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "14px",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <style>{`
        @keyframes ${animName} {
          0%   { transform: translateX(${reverse ? "-33.333%" : "0%"}); }
          100% { transform: translateX(${reverse ? "0%" : "-33.333%"}); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          gap: "12px",
          animation: `${animName} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {duplicated.map((brand, i) => (
          <LogoCard key={`${brand}-${i}`} brand={brand} rowIndex={rowIndex} />
        ))}
      </div>
    </div>
  );
}

/* ─── Logo Card ───────────────────────────────────────────────────────────── */
function LogoCard({ brand, rowIndex }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  /* subtle 3-D tilt on hover */
  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    cardRef.current.style.transform = `perspective(500px) rotateX(${y}deg) rotateY(${x}deg) scale(1.06)`;
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  /* Pick accent color per row */
  const accents = [
    { border: "rgba(27,211,228,0.5)", glow: "rgba(27,211,228,0.15)", bg: "rgba(27,211,228,0.04)" },
    { border: "rgba(16,185,129,0.5)", glow: "rgba(16,185,129,0.15)", bg: "rgba(16,185,129,0.04)" },
    { border: "rgba(99,102,241,0.4)", glow: "rgba(99,102,241,0.12)", bg: "rgba(99,102,241,0.03)" },
    { border: "rgba(245,158,11,0.4)", glow: "rgba(245,158,11,0.12)", bg: "rgba(245,158,11,0.03)" },
    { border: "rgba(239,68,68,0.35)", glow: "rgba(239,68,68,0.10)", bg: "rgba(239,68,68,0.03)" },
  ];
  const accent = accents[rowIndex % accents.length];

  return (
    <div
      ref={cardRef}
      title={brand}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        flexShrink: 0,
        width: "190px",
        height: "72px",
        background: hovered ? accent.bg : "#ffffff",
        border: `1px solid ${hovered ? accent.border : "#E8EEF4"}`,
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 16px",
        cursor: "default",
        transition:
          "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: hovered
          ? `0 8px 32px ${accent.glow}, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 1px 4px rgba(0,0,0,0.04)",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      {/* Shimmer top line on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            right: "20%",
            height: "2px",
            background: accent.border,
            borderRadius: "0 0 4px 4px",
          }}
        />
      )}

      {/* SVG logo — image only, no text below */}
      <SVGLogo name={brand} className="h-10 w-full" />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRANDS } from "../utils/data";

// Register the ScrollTrigger plugin once at module level
gsap.registerPlugin(ScrollTrigger);

/* ─── Chip style ─────────────────────────────────────────────── */
const chipStyle = {
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  backgroundColor: "var(--color-surface-pearl)",
  color: "var(--color-ink-muted-80)",
  border: "3px solid var(--color-divider-soft)",
  borderRadius: "var(--radius-md)",
  padding: "8px 16px",
  fontFamily: "var(--font-text)",
  fontSize: "var(--type-caption-size)",
  fontWeight: "var(--type-caption-weight)",
  letterSpacing: "var(--type-caption-ls)",
  whiteSpace: "nowrap",
  userSelect: "none",
  cursor: "default",
  willChange: "transform",
};

/* ─── Single infinite marquee lane ──────────────────────────── */
function MarqueeLane({ brands, direction = "left", speed = 40 }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  // Double the brands so we can loop seamlessly
  const doubled = [...brands, ...brands];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Width of one set (half the track)
    const halfW = el.scrollWidth / 2;
    const dur = halfW / speed;

    const fromX = direction === "left" ? 0 : -halfW;
    const toX   = direction === "left" ? -halfW : 0;

    gsap.set(el, { x: fromX });

    tweenRef.current = gsap.to(el, {
      x: toX,
      duration: dur,
      ease: "none",
      repeat: -1,
      // seamless wrap: snap back without a visual jump
      modifiers: {
        x: gsap.utils.unitize(v => {
          const n = parseFloat(v);
          return direction === "left"
            ? ((n % halfW) - halfW) || 0
            : ((n % halfW) + halfW) % halfW;
        }),
      },
    });

    return () => tweenRef.current?.kill();
  }, [brands, direction, speed]);

  const pause  = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.play();

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "12px", width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="marquee-chip"
            style={chipStyle}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}


/* ─── Animated counting number ──────────────────────────────── */
function CountUp({ target, suffix = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });
    return () => tween.kill();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Brands() {
  const [query, setQuery] = useState("");

  /* ── refs ──────────────────────────────────────────────── */
  const heroRef        = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadRef    = useRef(null);
  const heroBodyRef    = useRef(null);
  const statsRef       = useRef(null);
  const searchRef      = useRef(null);
  const gridRef        = useRef(null);
  const trustRef       = useRef(null);
  const searchBarRef   = useRef(null);

  const filtered = BRANDS.filter(b =>
    b.toLowerCase().includes(query.toLowerCase())
  );

  /* ══════════════════════════════════════════════════════════
     ANIMATION 1 — HERO: character-by-character headline reveal
  ══════════════════════════════════════════════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Eyebrow slides up + fades
      tl.fromTo(heroEyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 }
      );

      // Headline — each character cascades in from below
      const chars = heroHeadRef.current?.querySelectorAll("[data-char]");
      if (chars?.length) {
        tl.fromTo(chars,
          { y: 48, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.018,
            ease: "back.out(1.2)",
          },
          "-=0.2"
        );
      }

      // Body paragraph fades up
      tl.fromTo(heroBodyRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* ══════════════════════════════════════════════════════════
     ANIMATION 2 — STATS: counter + slide-up on scroll
  ══════════════════════════════════════════════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = statsRef.current?.querySelectorAll("[data-stat-card]");
      if (!cards?.length) return;

      gsap.fromTo(cards,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  /* ══════════════════════════════════════════════════════════
     ANIMATION 3 — SEARCH BAR: sweep in from left
  ══════════════════════════════════════════════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!searchBarRef.current) return;
      gsap.fromTo(searchBarRef.current,
        { x: -40, opacity: 0, scaleX: 0.92 },
        {
          x: 0,
          opacity: 1,
          scaleX: 1,
          duration: 0.65,
          ease: "expo.out",
          scrollTrigger: {
            trigger: searchBarRef.current,
            start: "top 85%",
          },
        }
      );
    }, searchRef);

    return () => ctx.revert();
  }, []);

  /* ══════════════════════════════════════════════════════════
     ANIMATION 4 — BRAND CHIPS: wave stagger on scroll
     Re-runs whenever filtered list changes (search typing)
  ══════════════════════════════════════════════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const chips = gridRef.current?.querySelectorAll("[data-chip]");
      if (!chips?.length) return;

      // Kill any existing ScrollTrigger for the grid before re-setting
      ScrollTrigger.getAll()
        .filter(t => t.vars?.id === "chips-trigger")
        .forEach(t => t.kill());

      gsap.fromTo(chips,
        { scale: 0.72, opacity: 0, y: 16 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: {
            each: 0.025,
            from: "random",
            ease: "power1.out",
          },
          ease: "back.out(1.5)",
          scrollTrigger: {
            id: "chips-trigger",
            trigger: gridRef.current,
            start: "top 90%",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filtered]);

  /* ══════════════════════════════════════════════════════════
     ANIMATION 5 — TRUST SECTION: split-line reveal
  ══════════════════════════════════════════════════════════ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trustRef.current) return;
      const els = trustRef.current.querySelectorAll("[data-reveal]");
      if (!els.length) return;

      gsap.fromTo(els,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustRef.current,
            start: "top 82%",
          },
        }
      );
    }, trustRef);

    return () => ctx.revert();
  }, []);

  /* ══════════════════════════════════════════════════════════
     CHIP hover micro-animation (GSAP, not CSS)
  ══════════════════════════════════════════════════════════ */
  const handleChipEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.06,
      duration: 0.2,
      ease: "power1.out",
      backgroundColor: "var(--color-primary)",
      color: "#fff",
      borderColor: "var(--color-primary)",
    });
  };

  const handleChipLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.22,
      ease: "power1.inOut",
      backgroundColor: "var(--color-surface-pearl)",
      color: "var(--color-ink-muted-80)",
      borderColor: "var(--color-divider-soft)",
    });
  };

  /* ── Stats data ─────────────────────────────────────────── */
  const stats = [
    { value: 86,   suffix: "+", label: "Brand Partners" },
    { value: 5000, suffix: "+", label: "Medicines Stocked" },
    { value: 20,   suffix: "+", label: "Years in Business" },
    { value: 1000, suffix: "+", label: "Clients Served" },
  ];

  return (
    <div style={{ paddingTop: "var(--height-global-nav)" }}>

      {/* ═══════════════════════════════════════════════════════
          TILE 1 — HERO (Dark) — char-by-char headline
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="tile-dark section-pad" style={{ overflow: "hidden" }}>
        <div className="container-content text-center flex flex-col items-center gap-6">

          {/* Eyebrow */}
          <p
            ref={heroEyebrowRef}
            className="type-tagline"
            style={{ color: "var(--color-primary-on-dark)", opacity: 0 }}
          >
            Our Portfolio
          </p>

          {/* Headline — chars are targeted by the GSAP animation via heroHeadRef */}
          <h1
            ref={heroHeadRef}
            className="type-hero"
            style={{
              margin: 0,
              color: "var(--color-on-dark)",
              perspective: "600px",
              perspectiveOrigin: "center",
            }}
          >
            {"Brands We Carry".split("").map((char, i) => (
              <span
                key={i}
                data-char
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                  minWidth: char === " " ? "0.3em" : undefined,
                }}
                aria-hidden={char === " " ? undefined : "true"}
              >
                {char === " " ? "\u00a0" : char}
              </span>
            ))}
          </h1>

          {/* Body */}
          <p
            ref={heroBodyRef}
            className="type-lead"
            style={{ color: "var(--color-body-muted)", maxWidth: "520px", margin: 0, opacity: 0 }}
          >
            86+ global pharmaceutical manufacturers. Every brand certified,
            every medicine genuine.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 2 — STATS (Parchment) — CountUp on scroll
      ═══════════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="tile-parchment"
        style={{ borderTop: "1px solid var(--color-hairline)", borderBottom: "1px solid var(--color-hairline)" }}
      >
        <div className="container-wide">
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-stat-card
                className="flex flex-col items-center text-center py-10"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--color-hairline)" : "none",
                  opacity: 0,
                }}
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
                  <CountUp target={s.value} suffix={s.suffix} />
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
            .brands-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 3 — BRAND GRID (Light White)
      ═══════════════════════════════════════════════════════ */}
      <section ref={searchRef} className="tile-light section-pad">
        <div className="container-wide">

          {/* Search input — pill-shaped, sweeps in from left */}
          <div ref={searchBarRef} className="flex justify-center" style={{ marginBottom: "56px", opacity: 0 }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "480px" }}>
              <Search
                size={16}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-ink-muted-48)",
                  pointerEvents: "none",
                }}
              />
              <input
                id="brand-search-input"
                type="text"
                placeholder="Search brands…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  height: "44px",
                  paddingLeft: "48px",
                  paddingRight: query ? "44px" : "20px",
                  fontFamily: "var(--font-text)",
                  fontSize: "var(--type-body-size)",
                  fontWeight: "var(--type-body-weight)",
                  letterSpacing: "var(--type-body-ls)",
                  color: "var(--color-ink)",
                  backgroundColor: "var(--color-canvas)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "var(--radius-pill)",
                  outline: "none",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onFocus={e => {
                  e.target.style.borderColor = "var(--color-primary-focus)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,102,204,0.12)";
                  gsap.to(e.target, { scaleY: 1.03, duration: 0.15, ease: "power1.out" });
                }}
                onBlur={e => {
                  e.target.style.borderColor = "rgba(0,0,0,0.08)";
                  e.target.style.boxShadow = "none";
                  gsap.to(e.target, { scaleY: 1, duration: 0.15 });
                }}
              />
              {/* Clear button */}
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-ink-muted-48)",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Results count row */}
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "32px", paddingBottom: "16px", borderBottom: "1px solid var(--color-hairline)" }}
          >
            <span className="type-caption-strong" style={{ color: "var(--color-ink)" }}>
              {filtered.length} {filtered.length === 1 ? "brand" : "brands"}
              {query && ` matching "${query}"`}
            </span>
          </div>

          {/* ── Brand Display ─────────────────────────────────
              When searching → filtered static grid (wave stagger)
              When not searching → 4-row infinite marquee
          ──────────────────────────────────────────────────── */}
          {query ? (
            /* ── Filtered static grid ── */
            <div ref={gridRef}>
              {filtered.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {filtered.map(brand => (
                    <span
                      key={brand}
                      data-chip
                      className="type-caption"
                      onMouseEnter={handleChipEnter}
                      onMouseLeave={handleChipLeave}
                      style={{
                        ...chipStyle,
                        cursor: "default",
                        transformOrigin: "center",
                      }}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-center" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
                  <p className="type-body" style={{ color: "var(--color-ink-muted-48)" }}>
                    No brands found for "{query}"
                  </p>
                  <button onClick={() => setQuery("")} className="btn-primary" style={{ marginTop: "24px" }}>
                    Show All Brands
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ── Infinite marquee lanes with edge-fade mask ── */
            <div
              style={{
                position: "relative",
                marginLeft: "-48px",
                marginRight: "-48px",
              }}
            >
              {/* Left & right fade edges */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: "none",
                  backgroundImage:
                    "linear-gradient(to right, var(--color-canvas) 0%, transparent 10%, transparent 90%, var(--color-canvas) 100%)",
                }}
              />
              <div className="flex flex-col gap-4">
                {/* Row 1 — brands 0–21, scroll LEFT */}
                <MarqueeLane brands={BRANDS.slice(0, 22)}  direction="left"  speed={38} />
                {/* Row 2 — brands 22–43, scroll RIGHT */}
                <MarqueeLane brands={BRANDS.slice(22, 44)} direction="right" speed={44} />
                {/* Row 3 — brands 44–65, scroll LEFT (slightly faster) */}
                <MarqueeLane brands={BRANDS.slice(44, 66)} direction="left"  speed={50} />
                {/* Row 4 — brands 66+, scroll RIGHT */}
                <MarqueeLane brands={BRANDS.slice(66)}     direction="right" speed={36} />
              </div>
            </div>

          )}

          {/* Hover tip — only shown in marquee mode */}
          {!query && (
            <p
              className="type-fine-print text-center"
              style={{ color: "var(--color-ink-muted-48)", marginTop: "24px" }}
            >
              Hover any row to pause · Use search above to filter
            </p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TILE 4 — TRUST (Parchment) — staggered reveal
      ═══════════════════════════════════════════════════════ */}
      <section ref={trustRef} className="tile-parchment section-pad">
        <div className="container-content text-center flex flex-col items-center gap-6">
          <h2
            data-reveal
            className="type-display-lg"
            style={{ color: "var(--color-ink)", opacity: 0 }}
          >
            Why Genuine Matters
          </h2>
          <p
            data-reveal
            className="type-lead"
            style={{ color: "var(--color-ink-muted-48)", maxWidth: "560px", opacity: 0 }}
          >
            Every medicine we stock is procured directly from certified
            manufacturers — no grey market, no unauthorized re-distribution.
            Our WHO-GDP compliance guarantees the supply chain integrity from
            manufacturer to patient.
          </p>

          {/* Three trust pillars */}
          <div
            className="grid gap-6 w-full"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: "16px" }}
          >
            {[
              { icon: "🔒", title: "Direct Sourcing",         body: "Procured straight from certified global manufacturers — zero middlemen." },
              { icon: "❄️",  title: "Cold-Chain Integrity",   body: "Temperature-sensitive medicines stored and transported at 2°C–8°C." },
              { icon: "✅", title: "WHO-GDP Certified",       body: "Every batch audited against Good Distribution Practice standards." },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                data-reveal
                className="utility-card flex flex-col gap-3 text-left"
                style={{ opacity: 0 }}
              >
                <span style={{ fontSize: "28px", lineHeight: 1 }}>{icon}</span>
                <h3 className="type-body-strong" style={{ color: "var(--color-ink)" }}>{title}</h3>
                <p className="type-caption" style={{ color: "var(--color-ink-muted-48)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .tile-parchment .grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

    </div>
  );
}

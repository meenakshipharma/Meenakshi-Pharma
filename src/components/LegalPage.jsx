import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowLeft, FiShield, FiFileText } from 'react-icons/fi';

/* ─── Reading progress bar ──────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand z-[200]"
    />
  );
}

/* ─── Sidebar TOC ────────────────────────────────────────────── */
function TableOfContents({ sections, activeId }) {
  return (
    <nav className="space-y-1">
      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-400 mb-4 pl-3">
        Contents
      </p>
      {sections.map((section, i) => {
        const id = `section-${i}`;
        const isActive = activeId === id;
        const shortLabel = section.heading.replace(/^\d+\.\s*/, '');
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
              isActive
                ? 'bg-brand/8 text-brand font-semibold'
                : 'text-slate-500 hover:text-text hover:bg-slate-50'
            }`}
          >
            <span
              className={`shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors ${
                isActive ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
              }`}
            >
              {i + 1}
            </span>
            <span className="leading-snug">{shortLabel}</span>
          </a>
        );
      })}
    </nav>
  );
}

/* ─── Section card ───────────────────────────────────────────── */
function SectionCard({ section, index, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative scroll-mt-28"
    >
      {/* Big decorative number */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-2 text-[7rem] leading-none font-black text-slate-100 select-none pointer-events-none z-0"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 pt-6">
        {/* Heading row */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-7 rounded-full bg-brand shrink-0" />
          <h2 className="text-lg font-bold text-text tracking-tight">
            {section.heading.replace(/^\d+\.\s*/, '')}
          </h2>
        </div>

        {/* Body */}
        <div className="pl-4 space-y-4">
          {section.content &&
            section.content.split('\n\n').map((para, pi) => (
              <p key={pi} className="text-slate-600 leading-relaxed text-[15px]">
                {para}
              </p>
            ))}

          {section.list && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {section.list.map((item, li) => (
                <li
                  key={li}
                  className="flex items-start gap-2.5 bg-background-section rounded-xl px-4 py-3 text-[14px] text-text-light"
                >
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.footer && (
            <p className="text-[14px] text-slate-500 italic border-l-2 border-slate-200 pl-4 mt-3">
              {section.footer}
            </p>
          )}

          {section.contact && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-100">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                <p className="font-semibold text-text text-sm">{section.contact.name}</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <FiMapPin size={14} className="mt-0.5 shrink-0 text-brand" />
                  {section.contact.address}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone size={14} className="shrink-0 text-brand" />
                  <a
                    href={`tel:${section.contact.phone}`}
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    {section.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiMail size={14} className="shrink-0 text-brand" />
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    {section.contact.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider (not on last) */}
        <div className="mt-10 border-b border-dashed border-slate-200" />
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
const LegalPage = ({ data, metaDescription }) => {
  const [activeId, setActiveId] = useState('section-0');
  const observerRef = useRef(null);

  const isPrivacy = data.title.toLowerCase().includes('privacy');
  const Icon = isPrivacy ? FiShield : FiFileText;
  const accentLabel = isPrivacy ? 'Data & Privacy' : 'Legal Agreement';

  /* Intersection Observer for TOC highlighting */
  useEffect(() => {
    const targets = data.sections.map((_, i) =>
      document.getElementById(`section-${i}`)
    ).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    targets.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [data.sections]);

  return (
    <>
      <Helmet>
        <title>{data.title} | Meenakshi Pharma</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <ReadingProgress />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-slate-100 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full border border-slate-100 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-brand/4 -translate-y-1/4 translate-x-1/4 blur-2xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand transition-colors mb-10 group"
          >
            <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-brand/10 flex items-center justify-center">
                <Icon size={18} className="text-brand" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                {accentLabel}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-text mb-4 leading-tight">
              {data.title}
            </h1>

            <div className="flex items-center gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-background-section px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Last updated: {data.lastUpdated}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-400">{data.sections.length} sections</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex gap-12 lg:gap-16 items-start">

            {/* Sticky sidebar TOC */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-28 self-start">
              <TableOfContents sections={data.sections} activeId={activeId} />
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 max-w-3xl space-y-14">
              {data.sections.map((section, i) => (
                <SectionCard
                  key={i}
                  section={section}
                  index={i}
                  id={`section-${i}`}
                />
              ))}

              {/* End stamp */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pt-6 flex items-center gap-4"
              >
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
                  End of {data.title}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;

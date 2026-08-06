import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiShield, FiFileText } from 'react-icons/fi';

/* ─── Reading progress bar ──────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#1C8A3C] z-[200]"
    />
  );
}

/* ─── Sidebar TOC ────────────────────────────────────────────── */
function TableOfContents({ sections, activeId }) {
  return (
    <nav className="space-y-1">
      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0B4E8C] mb-4 pl-3">
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
                ? 'bg-[#E8F5EB] text-[#1C8A3C] font-semibold border-l-2 border-[#1C8A3C]'
                : 'text-[#333333] hover:text-[#0B4E8C] hover:bg-[#F5F7FA]'
            }`}
          >
            <span
              className={`shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors ${
                isActive ? 'bg-[#1C8A3C] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
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
      className="relative scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Big decorative number */}
      <span
        aria-hidden="true"
        className="absolute -top-2 -left-1 sm:-top-4 sm:-left-2 text-[3.8rem] sm:text-[7rem] leading-none font-black text-slate-100/90 select-none pointer-events-none z-0"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 pt-4 sm:pt-6">
        {/* Heading row */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5">
          <div className="w-1.5 h-5 sm:h-7 rounded-full bg-[#0B4E8C] shrink-0" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B4E8C] tracking-tight">
            {section.heading.replace(/^\d+\.\s*/, '')}
          </h2>
        </div>

        {/* Body */}
        <div className="pl-2 sm:pl-4 space-y-3 sm:space-y-4">
          {section.content &&
            section.content.split('\n\n').map((para, pi) => (
              <p key={pi} className="text-[#333333] leading-relaxed text-xs sm:text-base text-justify">
                {para}
              </p>
            ))}

          {section.list && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mt-2">
              {section.list.map((item, li) => (
                <li
                  key={li}
                  className="flex items-start gap-2.5 bg-[#F5F7FA] border border-slate-200 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-[#333333]"
                >
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#1C8A3C]" />
                  <span className="text-justify">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.footer && (
            <p className="text-xs sm:text-sm text-slate-500 italic border-l-2 border-slate-200 pl-3 sm:pl-4 mt-3 text-justify">
              {section.footer}
            </p>
          )}

          {section.contact && (
            <div className="mt-4 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-soft">
              <div className="bg-[#F5F7FA] px-4 py-2.5 sm:px-5 sm:py-3 border-b border-slate-200">
                <p className="font-semibold text-[#0B4E8C] text-xs sm:text-sm">{section.contact.name}</p>
              </div>
              <div className="px-4 py-3 sm:px-5 sm:py-4 space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#333333]">
                  <FiMapPin size={14} className="mt-0.5 shrink-0 text-[#1C8A3C]" />
                  <span>{section.contact.address}</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                  <FiPhone size={14} className="shrink-0 text-[#1C8A3C]" />
                  <a
                    href={`tel:${section.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-[#333333] hover:text-[#0B4E8C] transition-colors font-medium"
                  >
                    {section.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                  <FiMail size={14} className="shrink-0 text-[#1C8A3C]" />
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-[#333333] hover:text-[#0B4E8C] transition-colors font-medium break-all"
                  >
                    {section.contact.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mt-8 sm:mt-10 border-b border-dashed border-slate-200" />
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
      <div className="pt-24 pb-10 sm:pt-32 sm:pb-16 bg-[#F5F7FA] relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#0B4E8C]/5 blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon + label */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F5EB] text-[#1C8A3C] flex items-center justify-center border border-[#1C8A3C]/20">
                <Icon size={18} />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C8A3C]">
                {accentLabel}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B4E8C] mb-3 sm:mb-4 leading-tight">
              {data.title}
            </h1>

            <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-[#333333] bg-white border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-xs">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1C8A3C] inline-block" />
                Last updated: {data.lastUpdated}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[10px] sm:text-xs text-[#555555] font-medium">{data.sections.length} sections</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 md:py-16 bg-white">
        <div className="container-custom">
          <div className="flex gap-8 lg:gap-16 items-start">

            {/* Sticky sidebar TOC */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-28 self-start">
              <TableOfContents sections={data.sections} activeId={activeId} />
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 max-w-3xl space-y-10 sm:space-y-14">
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
                className="pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4"
              >
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap">
                  End of {data.title}
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;

import React from 'react'
import Reveal from './Reveal.jsx'

/**
 * SectionHeading — eyebrow label + modern title, used at the top of major sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  description,
  className = '',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal direction="up" className={`flex flex-col gap-3 max-w-2xl mb-10 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5EB] border border-[#1C8A3C]/30 text-[#1C8A3C] font-semibold tracking-wider uppercase text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]"></span>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-[#0B4E8C] tracking-tight">
        {title}
      </h2>
      {description && <p className="text-[#333333] text-base md:text-lg leading-relaxed mt-1">{description}</p>}
    </Reveal>
  )
}

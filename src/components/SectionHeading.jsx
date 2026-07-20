import Reveal from './Reveal.jsx'

/**
 * SectionHeading — eyebrow label + serif title, used at the top of every
 * major section for consistent rhythm across the page.
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
    <Reveal direction="up" className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-ink">
        {title}
      </h2>
      {description && <p className="text-inkSoft text-base md:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  )
}

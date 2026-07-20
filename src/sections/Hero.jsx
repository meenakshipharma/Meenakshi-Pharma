import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden section-pad pt-10 md:pt-16">
      {/* background shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-sand blur-3xl opacity-60" />

      <div className="container-max grid lg:grid-cols-2 gap-14 items-center relative">
        <div className="flex flex-col gap-6 max-w-xl">
          <Reveal direction="up">
            <span className="eyebrow">{hero.eyebrow}</span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-ink">
              {hero.title}{' '}
              <span className="italic text-coral">{hero.titleAccent}</span>{' '}
              {hero.titleEnd}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-inkSoft text-base md:text-lg leading-relaxed">{hero.description}</p>
          </Reveal>

          <Reveal direction="up" delay={0.3} className="flex flex-wrap gap-4 pt-2">
            <Button href="#products" variant="primary">{hero.ctaPrimary}</Button>
            <Button href="#contact" variant="secondary">{hero.ctaSecondary}</Button>
          </Reveal>

          <Reveal direction="up" delay={0.4} className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/10 mt-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl text-coral">{s.value}</p>
                <p className="text-xs md:text-sm text-inkSoft mt-1">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal direction="scale" delay={0.15} className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-xl2 overflow-hidden shadow-soft aspect-[4/5] bg-sand"
          >
            <img
              src={hero.image}
              alt="Meenakshi Pharma — quality pharmaceutical manufacturing"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-coral/90 hidden md:flex items-center justify-center text-white text-center text-xs font-semibold p-4 shadow-card">
            Trusted Since Decades
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { manufacturing } from '../data/content.js'

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="section-pad bg-sand/60">
      <div className="container-max">
        <SectionHeading eyebrow={manufacturing.eyebrow} title={manufacturing.title} align="center" className="mb-16" />

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-ink/10" />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {manufacturing.steps.map((step, i) => (
              <Reveal key={step.title} direction="up" delay={i * 0.1} className="relative flex flex-col items-center text-center gap-4">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white font-display font-semibold shadow-card">
                  {i + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import SectionHeading from '../components/SectionHeading.jsx'
import { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-sand/60">
      <div className="container-max">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} align="center" className="mb-14" />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300">
                <span className="font-display text-3xl text-coral/30 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg font-semibold text-ink mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

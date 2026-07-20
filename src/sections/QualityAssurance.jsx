import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { qualityAssurance } from '../data/content.js'

export default function QualityAssurance() {
  return (
    <section id="quality" className="section-pad">
      <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={qualityAssurance.eyebrow}
            title={qualityAssurance.title}
            description={qualityAssurance.description}
          />
          <ul className="flex flex-col gap-3">
            {qualityAssurance.points.map((point, i) => (
              <Reveal key={point} direction="left" delay={0.08 * i} as="li" className="flex items-center gap-3 text-inkSoft">
                <FiCheckCircle className="text-coral shrink-0" />
                <span>{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal direction="right" className="rounded-xl2 overflow-hidden shadow-soft aspect-[4/3] bg-sand">
          <img
            src={qualityAssurance.image}
            alt="Quality assurance testing lab"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </Reveal>
      </div>
    </section>
  )
}

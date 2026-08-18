import SectionHeading from '../components/SectionHeading.jsx'
import BadgeCard from '../components/BadgeCard.jsx'
import { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import { certifications } from '../data/content.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          align="center"
          className="mb-16"
        />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.items.map((cert) => (
            <StaggerItem key={cert.name} direction="scale">
              <BadgeCard name={cert.name} description={cert.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
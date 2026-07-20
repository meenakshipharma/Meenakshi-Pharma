import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="left" className="rounded-xl2 overflow-hidden shadow-soft aspect-[4/3] bg-sand order-2 lg:order-1">
          <img
            src={about.image}
            alt="Inside the Meenakshi Pharma facility"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </Reveal>

        <div className="order-1 lg:order-2 flex flex-col gap-5">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={0.1 * (i + 1)}>
              <p className="text-inkSoft leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Founder / bio panel */}
      <Reveal direction="up" delay={0.2} className="container-max mt-16">
        <div className="rounded-xl2 bg-blush px-8 py-10 md:px-12 md:py-12 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden bg-white shrink-0 mx-auto md:mx-0 shadow-card">
            <img
              src={about.founder.image}
              alt={about.founder.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl text-ink">{about.founder.name}</h3>
            <p className="text-coral font-medium text-sm mt-1">{about.founder.role}</p>
            <p className="text-inkSoft text-sm mt-3 max-w-md">
              With decades of combined pharmaceutical experience, our leadership team guides every batch from
              formulation to final delivery. {/* TODO: real founder bio */}
            </p>
          </div>
          <Button variant="primary" href="#contact" className="mx-auto md:mx-0 whitespace-nowrap">
            More About Us
          </Button>
        </div>
      </Reveal>
    </section>
  )
}

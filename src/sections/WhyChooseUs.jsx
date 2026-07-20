import { FiShield, FiThermometer, FiTruck, FiUsers, FiAward, FiHeart } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import { whyChooseUs } from '../data/content.js'

const iconMap = {
  shield: FiShield,
  flask: FiThermometer,
  truck: FiTruck,
  users: FiUsers,
  award: FiAward,
  heart: FiHeart,
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-sand/60">
      <div className="container-max">
        <SectionHeading eyebrow={whyChooseUs.eyebrow} title={whyChooseUs.title} align="center" className="mb-14" />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.items.map((item) => {
            const Icon = iconMap[item.icon] ?? FiShield
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl bg-white p-7 shadow-card hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-coral text-xl mb-5 group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                    <Icon />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-inkSoft leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}

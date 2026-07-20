import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

/**
 * BadgeCard — medal/seal-style card used for certifications. The notched
 * "ribbon" bottom edge is the section's signature visual detail.
 */
export default function BadgeCard({ name, description }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -1 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-center text-center gap-3 bg-white rounded-2xl px-6 pt-8 pb-10 shadow-card"
      style={{
        clipPath:
          'polygon(0% 0%, 100% 0%, 100% 88%, 92% 100%, 84% 88%, 76% 100%, 68% 88%, 60% 100%, 52% 88%, 44% 100%, 36% 88%, 28% 100%, 20% 88%, 12% 100%, 4% 88%, 0% 100%)',
      }}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-coral text-2xl">
        <FiAward />
      </span>
      <h3 className="font-display text-base font-semibold text-ink">{name}</h3>
      <p className="text-xs text-inkSoft leading-relaxed">{description}</p>
    </motion.div>
  )
}

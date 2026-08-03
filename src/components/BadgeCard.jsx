import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

/**
 * BadgeCard — seal-style card used for certifications with thin top accent.
 */
export default function BadgeCard({ name, description }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-center text-center gap-3 bg-white border border-slate-200 border-t-4 border-t-[#1C8A3C] rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card-hover transition-all duration-300"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5EB] text-[#1C8A3C] text-3xl shadow-xs border border-[#1C8A3C]/20">
        <FiAward />
      </span>
      <h3 className="text-lg font-bold text-[#0B4E8C] mt-2">{name}</h3>
      <p className="text-xs md:text-sm text-[#333333] leading-relaxed">{description}</p>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-xl2 bg-white shadow-card overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="absolute top-3 left-3 rounded-capsule bg-white/90 px-3 py-1 text-xs font-semibold text-coral">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
        <p className="text-sm text-inkSoft leading-relaxed flex-1">{product.description}</p>
        <button className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-coral hover:gap-2.5 transition-all">
          View Details <FiArrowUpRight />
        </button>
      </div>
    </motion.div>
  )
}

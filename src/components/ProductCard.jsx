import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl bg-white border border-slate-200 border-t-4 border-t-[#0B4E8C] shadow-soft hover:shadow-card-hover hover:border-t-[#1C8A3C] transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#0B4E8C] shadow-xs border border-slate-200">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-bold text-[#0B4E8C] group-hover:text-[#1C8A3C] transition-colors">{product.name}</h3>
        <p className="text-sm text-[#333333] leading-relaxed flex-1">{product.description}</p>
        <button className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#1C8A3C] group-hover:text-[#156D2F] hover:gap-2.5 transition-all cursor-pointer">
          View Details <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  )
}

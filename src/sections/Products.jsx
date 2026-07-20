import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { StaggerGroup, StaggerItem } from '../components/Reveal.jsx'
import { products } from '../data/content.js'

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return products.items.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <section id="products" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow={products.eyebrow}
          title={products.title}
          description={products.description}
          className="mb-10"
        />

        {/* Search + filter */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          <div className="relative w-full md:max-w-xs">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-inkSoft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full rounded-capsule border border-ink/10 bg-white pl-11 pr-4 py-3 text-sm focus:border-coral outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {products.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-capsule px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  category === cat
                    ? 'bg-coral text-white'
                    : 'bg-white text-inkSoft border border-ink/10 hover:border-coral hover:text-coral'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-inkSoft py-16">No products match your search. Try a different term.</p>
        ) : (
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  )
}

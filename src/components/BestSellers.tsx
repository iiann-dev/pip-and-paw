import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'

export default function BestSellers() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Best sellers</p>
            <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
              Loved by 98K+ pets
            </h2>
          </div>
          <Link
            to="/shop"
            className="reveal group inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-5 py-2.5 text-sm font-semibold text-forest transition-all duration-200 hover:border-forest hover:bg-forest hover:text-white"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {PRODUCTS.slice(0, 4).map((p) => (
            <div key={p.id} style={{ '--reveal-delay': '0ms' } as React.CSSProperties} className="reveal">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
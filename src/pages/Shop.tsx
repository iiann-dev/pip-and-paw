import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { byCategory, CATEGORY_LABELS, type Category } from '../data/products'
import { Search } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const TABS: { slug: Category | 'all'; label: string }[] = [
  { slug: 'all', label: 'All' },
  { slug: 'dogs', label: 'For dogs' },
  { slug: 'cats', label: 'For cats' },
  { slug: 'home', label: 'Cozy homes' },
  { slug: 'play', label: 'Play & care' },
]

export default function Shop() {
  const { category } = useParams()
  const active: Category | 'all' =
    category && category in CATEGORY_LABELS ? (category as Category) : 'all'
  const products = byCategory(active === 'all' ? undefined : active)
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Shop</p>
          <h1 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
            {active === 'all' ? 'Everything your pets love' : CATEGORY_LABELS[active]}
          </h1>
          <p className="reveal mt-4 text-[15px] leading-relaxed text-forest/60">
            Vet-approved and loved by real pets. Signing in lets you save favorites and check out.
          </p>
        </div>

        <div className="reveal mt-9 flex flex-wrap items-center gap-2.5">
          {TABS.map((c) => (
            <Link
              key={c.slug}
              to={c.slug === 'all' ? '/shop' : `/shop/${c.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active === c.slug
                  ? 'bg-forest text-white'
                  : 'border border-forest/15 text-forest hover:border-forest hover:bg-mint-deep'
              }`}
            >
              {c.label}
            </Link>
          ))}
          <span className="ml-auto flex items-center gap-1.5 text-sm text-forest/50">
            <Search className="h-4 w-4" />
            {products.length} products
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {products.map((p, i) => (
            <div key={p.id} className="reveal" style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="reveal mt-16 text-center">
            <p className="text-lg font-medium text-forest">No products yet in this category.</p>
            <Link to="/shop" className="mt-3 inline-block text-sm font-semibold text-accent">
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
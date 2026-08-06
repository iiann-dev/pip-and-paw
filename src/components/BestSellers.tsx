import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

const PRODUCTS = [
  {
    name: 'Cozy Cat House',
    price: 49.99,
    rating: 4.8,
    reviews: 1240,
    img: ASSETS.catHouse,
    badge: 'Bestseller',
    delay: 0,
  },
  {
    name: 'Unboxing Play Kit',
    price: 34.0,
    rating: 4.9,
    reviews: 862,
    img: ASSETS.videoCard,
    badge: 'New',
    delay: 100,
  },
  {
    name: 'Dachshund Comfort Plush',
    price: 28.0,
    rating: 4.7,
    reviews: 512,
    img: ASSETS.petDachshund,
    badge: null,
    delay: 200,
  },
  {
    name: 'Purrfect Catnip Dreams',
    price: 19.0,
    rating: 4.9,
    reviews: 733,
    img: ASSETS.petTabby,
    badge: 'Loved',
    delay: 300,
  },
]

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
          <a
            href="#shop"
            className="reveal inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-5 py-2.5 text-sm font-semibold text-forest transition-all duration-200 hover:border-forest hover:bg-forest hover:text-white"
          >
            View all products
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              style={{ '--reveal-delay': `${p.delay}ms` } as React.CSSProperties}
              className="reveal group relative flex flex-col rounded-3xl border border-forest/8 bg-mint/40 p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/15 hover:bg-white hover:shadow-lift"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-mint-deep">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-forest px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-mint">
                    {p.badge}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`Add ${p.name} to wishlist`}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-forest shadow-sm transition-all duration-200 hover:scale-110 hover:text-accent active:scale-90"
                >
                  <Heart className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-1.5 rounded-full bg-forest py-2.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-forest-hover active:scale-95"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  Add to cart
                </button>
              </div>

              <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3">
                <div className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="text-xs font-semibold text-forest">{p.rating}</span>
                  <span className="text-[11px] text-forest/40">({p.reviews.toLocaleString()})</span>
                </div>
                <h3 className="mt-1.5 text-sm font-medium leading-snug text-forest sm:text-[15px]">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-base font-bold text-forest">
                  ${p.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

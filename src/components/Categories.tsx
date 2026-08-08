import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

const CATEGORIES = [
  {
    slug: 'dogs',
    label: 'For dogs',
    itemCount: 128,
    img: ASSETS.petDachshund,
    cover: false,
    delay: 0,
  },
  {
    slug: 'home',
    label: 'Cozy homes',
    itemCount: 64,
    img: ASSETS.catHouse,
    cover: true,
    delay: 100,
  },
  {
    slug: 'cats',
    label: 'For cats',
    itemCount: 96,
    img: ASSETS.petTabby,
    cover: false,
    delay: 200,
  },
  {
    slug: 'play',
    label: 'Play & care',
    itemCount: 52,
    img: ASSETS.videoCard,
    cover: true,
    delay: 300,
  },
]

export default function Categories() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="shop" className="relative z-30 -mt-[100vh] bg-mint px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Collections</p>
            <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
              Shop by category
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-forest/60 sm:text-[15px]">
            Thoughtfully made food, toys and homes for every whisker and paw — curated with vets
            and tested by real pets.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              to={`/shop/${cat.slug}`}
              style={{ '--reveal-delay': `${cat.delay}ms` } as React.CSSProperties}
              className={`reveal group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                cat.cover ? 'border-transparent bg-forest' : 'border-forest/10 bg-mint-deep'
              }`}
            >
              {cat.cover ? (
                <>
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/50 to-transparent" />
                </>
              ) : (
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="absolute inset-x-0 bottom-2 mx-auto max-h-[78%] w-auto transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              )}

              <div className={`relative mt-auto flex items-center justify-between ${cat.cover ? 'text-mint' : ''}`}>
                <div>
                  <p className="font-serif-display text-xl leading-none sm:text-2xl">{cat.label}</p>
                  <p className={`mt-1.5 text-[11px] font-medium uppercase tracking-wider ${cat.cover ? 'text-mint/60' : 'text-forest/50'}`}>
                    {cat.itemCount} products
                  </p>
                </div>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-0.5 ${
                    cat.cover ? 'bg-accent text-white' : 'border border-forest/15 text-forest group-hover:text-accent'
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
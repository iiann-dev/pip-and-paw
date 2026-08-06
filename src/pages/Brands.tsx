import { Link } from 'react-router-dom'
import { ArrowRight, PawPrint, Leaf, Heart, Bone } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BRANDS = [
  { icon: PawPrint, name: 'Paw & Co', tag: 'Premium nutrition' },
  { icon: Bone, name: 'Barkwright', tag: 'Chew & play' },
  { icon: Leaf, name: 'GreenTail', tag: 'Natural treats' },
  { icon: Heart, name: 'Snugglehaus', tag: 'Beds & homes' },
  { icon: PawPrint, name: 'Whiskerline', tag: 'Cat specialists' },
  { icon: Bone, name: 'TrailPaws', tag: 'Outdoor gear' },
]

export default function Brands() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Brands</p>
        <h1 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
          Brands we trust
        </h1>
        <p className="reveal mt-5 max-w-2xl text-[15px] leading-relaxed text-forest/60">
          We carry a curated shelf of independent and specialist brands — every one vetted by
          our veterinary panel before it earns a place.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b, i) => (
            <Link
              key={b.name}
              to="/shop"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              className="reveal group flex items-center gap-4 rounded-3xl border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint-deep text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-mint">
                <b.icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-serif-display text-xl text-forest">{b.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-forest/45">{b.tag}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-forest/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
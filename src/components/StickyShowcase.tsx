import { ArrowRight, Heart, PawPrint, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

/**
 * Sticky showcase — scroll-pinned section right after the hero.
 * The inner panel stays pinned (sticky top-0) while the 210vh wrapper scrolls,
 * then unpins as the next section follows. Classic Framer "scroll-pinned" effect.
 */
export default function StickyShowcase() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="relative z-0" style={{ height: '200vh' }}>
      <div className="sticky top-0 z-10 flex h-screen flex-col overflow-hidden bg-[#003C08] text-white lg:flex-row">
        {/* Copy */}
        <div className="flex flex-1 flex-col justify-center px-6 py-14 sm:px-10 lg:px-20">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-mint/50">
            The Pip &amp; Paw difference
          </p>
          <h2 className="reveal mt-4 font-serif-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Best products, chosen with love.
          </h2>
          <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-mint/65">
            Every item is tested by real pets and reviewed by our veterinary panel before it
            reaches your door. No fillers, no guesswork — just the things your pet genuinely loves.
          </p>

          <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:gap-10">
            {[
              { icon: PawPrint, title: '98K+ happy pets', sub: 'and counting' },
              { icon: Heart, title: '4.6 average rating', sub: 'from pet parents' },
              { icon: Truck, title: '2-day free delivery', sub: 'over $49' },
            ].map((s, i) => (
              <div
                key={s.title}
                style={{ '--reveal-delay': `${200 + i * 90}ms` } as React.CSSProperties}
                className="reveal flex items-center gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-mint">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                  <p className="mt-0.5 text-xs text-mint/50">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
                      to="/shop"
                      className="reveal mt-10 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] active:scale-95"
                    >
                      Shop the collection
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
        </div>

        {/* Visual — full retriever (dark ledge blends into the dark panel) */}
        <div className="relative h-64 shrink-0 overflow-hidden sm:h-80 lg:h-full lg:flex-1">
          <img
            src={ASSETS.petRetrieverFull}
            alt="Golden retriever with Pip &amp; Paw"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          {/* soft brand overlay mark */}
          <span className="absolute bottom-5 left-5 rounded-full border border-mint/20 bg-mint/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest shadow-soft">
            Made in small batches
          </span>
        </div>
      </div>
    </section>
  )
}
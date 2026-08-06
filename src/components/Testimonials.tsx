import { Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

const TESTIMONIALS = [
  {
    quote:
      'The Cozy Cat House is the first thing my cat actually sleeps in. She moved in the same day — that has never happened before.',
    name: 'Maya R.',
    role: 'Cat mom of two',
    avatar: ASSETS.avatar,
    delay: 0,
  },
  {
    quote:
      'Delivery took two days like they promised, the toys survived a full week of my German shepherd — a record.',
    name: 'Daniel K.',
    role: 'Dog dad, Milo & Max',
    avatar: null,
    delay: 100,
  },
  {
    quote:
      'I love that everything is vet-reviewed. As a vet myself, I finally have a store I can recommend to my clients without caveats.',
    name: 'Dr. Sari W.',
    role: 'Veterinarian',
    avatar: null,
    delay: 200,
  },
]

function InitialAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-forest font-serif-display text-sm text-mint ${className ?? 'h-11 w-11'}`}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Testimonials</p>
          <h2 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">
            Tails are wagging
          </h2>
          <p className="reveal mt-4 text-[15px] leading-relaxed text-forest/60">
            Real stories from pet parents who switched to Pip &amp; Paw and never looked back.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              style={{ '--reveal-delay': `${t.delay}ms` } as React.CSSProperties}
              className="reveal flex flex-col rounded-3xl border border-forest/8 bg-mint/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-forest/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <InitialAvatar name={t.name} />
                )}
                <div>
                  <p className="text-sm font-semibold text-forest">{t.name}</p>
                  <p className="text-xs text-forest/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

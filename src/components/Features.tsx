import { Leaf, PawPrint, ShieldCheck, Truck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Vet approved',
    text: 'Every recipe and toy is reviewed by our in-house veterinary panel before it ships.',
  },
  {
    icon: Truck,
    title: 'Free 2-day delivery',
    text: 'Orders over $49 ship free, carbon-neutral, straight to your door in two days.',
  },
  {
    icon: PawPrint,
    title: '30-day happiness guarantee',
    text: 'If your pet does not love it, we refund it. No returns needed, no questions.',
  },
  {
    icon: Leaf,
    title: 'Natural ingredients',
    text: 'Grain-free, preservative-free and always made without plastic fillers.',
  },
]

export default function Features() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Why Pip &amp; Paw</p>
          <h2 className="reveal mt-3 font-serif-display text-4xl leading-[1.08] tracking-tight text-forest sm:text-5xl lg:text-6xl">
            Made with love, <br className="hidden sm:block" />
            for pets and planet
          </h2>
          <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-forest/60">
            We started Pip &amp; Paw because every pet deserves better than generic aisles. Small
            batches, honest ingredients and products our own pets use every day.
          </p>

          <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
                className="reveal flex gap-3.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint-deep text-accent">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-forest">{f.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-forest/55">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="reveal-scale relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={ASSETS.petRetriever}
              alt="Happy golden retriever with Pip &amp; Paw"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-forest/10 bg-white px-5 py-4 shadow-soft sm:left-10">
            <div className="flex -space-x-2.5">
              <img
                src={ASSETS.avatar}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-accent text-sm font-bold text-white">
                +
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold text-forest">98K+</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-forest/50">
                happy pets & parents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

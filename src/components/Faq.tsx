import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const FAQS = [
  {
    q: 'How fast is delivery?',
    a: 'Orders ship within 24 hours and arrive in 2 business days. Orders over $49 ship free with carbon-neutral delivery.',
  },
  {
    q: 'What is the returns policy?',
    a: 'Every product comes with our 30-day happiness guarantee. If your pet does not love it, we refund you in full — no returns needed.',
  },
  {
    q: 'Are your products vet approved?',
    a: 'Yes. Every recipe and toy is reviewed by our in-house veterinary panel before it ships, and all ingredients are traceable.',
  },
  {
    q: 'Do you offer subscriptions?',
    a: 'Absolutely — set a delivery frequency for food and treats and save 10% every order. Skip or cancel anytime in one tap.',
  },
]

export default function FAQ() {
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section ref={ref} className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">FAQ</p>
          <h2 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">
            Good questions,<br />straight answers
          </h2>
          <p className="reveal mt-4 max-w-sm text-[15px] leading-relaxed text-forest/60">
            Still curious? Our team replies within a few hours, seven days a week.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen ? 'border-forest/15 bg-mint' : 'border-forest/10 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-forest">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-mint transition-transform duration-200">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-forest/65">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const STEPS = [
  {
    icon: Clock,
    title: 'Order by 2pm',
    text: 'Orders placed before 2pm ship the same day from one of our local hubs.',
  },
  {
    icon: Truck,
    title: '2-day delivery',
    text: 'Carbon-neutral 2-day delivery on all orders. Free on orders over $49.',
  },
  {
    icon: RefreshCcw,
    title: '30-day returns',
    text: 'Changed your mind? Return anything within 30 days for a full refund.',
  },
  {
    icon: ShieldCheck,
    title: 'Happiness guarantee',
    text: 'If your pet does not love it, we refund it. No returns needed, no questions.',
  },
]

export default function Delivery() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-5xl">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Delivery & returns</p>
        <h1 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
          Fast, free and fuss-free
        </h1>
        <p className="reveal mt-5 max-w-2xl text-[15px] leading-relaxed text-forest/60">
          We deliver everywhere in the country, carbon-neutral, in two days. Here is exactly
          how delivery and returns work with CozyPaws.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              className="reveal flex gap-4 rounded-3xl border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint-deep text-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-forest">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forest/55">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 rounded-3xl bg-forest p-8 text-mint sm:p-10">
          <h2 className="font-serif-display text-2xl tracking-tight sm:text-3xl">
            Order tracking in real time
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mint/60">
            Every order gets a live tracking link by email and SMS. You will know the minute
            your pet's box is out for delivery.
          </p>
          <Link
            to="/shop"
            className="group mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
          >
            Start an order
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
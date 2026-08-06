import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

export default function Newsletter() {
  const ref = useReveal<HTMLElement>()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <section ref={ref} className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center shadow-lift sm:px-12 lg:py-20">
          {/* decorative pets peeking over the top edge */}
          <div className="pointer-events-none absolute -top-1 left-6 hidden opacity-90 sm:block lg:left-16">
            <img src={ASSETS.petDachshund} alt="" className="h-28 w-auto lg:h-36" loading="lazy" />
          </div>
          <div className="pointer-events-none absolute -top-1 right-6 hidden opacity-90 sm:block lg:right-16">
            <img src={ASSETS.petTabby} alt="" className="h-28 w-auto lg:h-36" loading="lazy" />
          </div>

          <div className="relative mx-auto max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Join the pack</p>
            <h2 className="mt-3 font-serif-display text-3xl tracking-tight text-mint sm:text-5xl">
              Get 10% off your first order
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mint/60 sm:text-[15px]">
              New arrivals, seasonal treats and members-only deals. One email a week, no spam.
            </p>

            {done ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-mint/20 bg-mint/10 px-6 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-mint">
                  You are in! Check {email} for your 10% code.
                </p>
              </div>
            ) : (
              <form
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={onSubmit}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12 flex-1 rounded-full border border-mint/20 bg-mint/10 px-5 text-sm text-mint placeholder:text-mint/40 outline-none transition-colors duration-200 focus:border-accent"
                />
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] active:scale-95"
                >
                  Get 10% off
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
            <p className="mt-3 text-[11px] text-mint/40">Unsubscribe anytime. We never share your data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
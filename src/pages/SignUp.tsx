import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, PawPrint } from 'lucide-react'
import { useStore } from '../context/store'

export default function SignUp() {
  const { user, signUp } = useStore()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Prototype only: no real backend — we simply remember the name/email locally.
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || password.length < 4) {
      setError('Please fill in your name, a valid email and a password (min 4 characters).')
      return
    }
    signUp(name.trim(), email.trim())
    navigate(from, { replace: true })
  }

  if (user) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-mint-deep text-accent">
          <PawPrint className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-serif-display text-4xl tracking-tight text-forest">
          You are signed in
        </h1>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-forest/60">
          Welcome back, {user.name.split(' ')[0]}. This is a prototype — your session is stored
          only in this browser.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
        >
          Continue shopping
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    )
  }

  return (
    <section className="flex min-h-[calc(100vh-0px)] items-center justify-center px-5 py-16 sm:px-8">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-soft sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
            <PawPrint className="h-6 w-6" />
          </div>
          <h1 className="mt-5 font-serif-display text-3xl tracking-tight text-forest sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-2.5 text-sm leading-relaxed text-forest/60">
            Join 98K+ pet parents. Signing up unlocks your cart, favorites and profile.
          </p>

          <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
            <div>
              <label htmlFor="su-name" className="text-xs font-semibold uppercase tracking-wider text-forest/60">
                Name
              </label>
              <input
                id="su-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Maya Rodriguez"
                className="mt-1.5 h-12 w-full rounded-2xl border border-forest/15 bg-mint/40 px-4 text-sm text-forest placeholder:text-forest/35 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="su-email" className="text-xs font-semibold uppercase tracking-wider text-forest/60">
                Email
              </label>
              <input
                id="su-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="mt-1.5 h-12 w-full rounded-2xl border border-forest/15 bg-mint/40 px-4 text-sm text-forest placeholder:text-forest/35 outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="su-pass" className="text-xs font-semibold uppercase tracking-wider text-forest/60">
                Password
              </label>
              <input
                id="su-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 h-12 w-full rounded-2xl border border-forest/15 bg-mint/40 px-4 text-sm text-forest placeholder:text-forest/35 outline-none transition-colors focus:border-accent"
              />
            </div>

            {error && (
              <p className="rounded-2xl bg-accent/10 px-4 py-3 text-[13px] font-medium text-accent-hover">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-forest text-sm font-semibold text-white transition-all duration-200 hover:bg-forest-hover hover:scale-[1.02] active:scale-95"
            >
              Sign up
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-[11px] leading-relaxed text-forest/40">
              Prototype only — no real account is created and no data leaves your browser.
            </p>
          </form>
        </div>
        <p className="mt-5 text-center text-sm text-forest/50">
          Just browsing?{' '}
          <Link to="/shop" className="font-semibold text-forest underline decoration-accent/40 underline-offset-4 hover:text-accent">
            Explore the shop
          </Link>{' '}
          without an account.
        </p>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-serif-display text-7xl text-forest">404</p>
      <h1 className="mt-4 font-serif-display text-3xl tracking-tight text-forest">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-sm text-[15px] text-forest/60">
        Like a dog chasing a squirrel — it got away. Let's get you back home.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
      >
        Back home
      </Link>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, LogOut, Package, PawPrint, ShoppingCart } from 'lucide-react'
import { useStore } from '../context/store'
import { ASSETS } from '../data/assets'

export default function Profile() {
  const { user, signOut, cartCount, favCount } = useStore()

  return (
    <section className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Your account</p>
        <h1 className="mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">
          Hi, {user?.name.split(' ')[0]} 👋
        </h1>

        <div className="mt-9 flex flex-wrap items-center gap-5 rounded-3xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
          <img
            src={ASSETS.avatar}
            alt="Your profile"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-forest/10"
          />
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-forest">{user?.name}</p>
            <p className="text-sm text-forest/55">{user?.email}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-forest/40">
              Prototype session · stored in this browser only
            </p>
          </div>
          <Link
            to="/signup"
            onClick={() => setTimeout(signOut, 0)}
            className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-5 py-2.5 text-sm font-semibold text-forest transition-all duration-200 hover:border-accent hover:text-accent"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { to: '/cart', icon: ShoppingCart, label: 'Cart', value: `${cartCount} item${cartCount === 1 ? '' : 's'}` },
            { to: '/favorites', icon: Heart, label: 'Favorites', value: `${favCount} saved` },
            { to: '/shop', icon: Package, label: 'Orders', value: 'Prototype' },
          ].map((c) => (
            <Link
              key={c.label}
              to={c.to}
              className="group flex items-center gap-4 rounded-3xl border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-deep text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-forest">{c.label}</p>
                <p className="text-xs text-forest/50">{c.value}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-forest/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-3xl bg-mint-deep p-6">
          <PawPrint className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-forest/70">
            This is a design prototype: your session, cart and favorites live only in this
            browser and reset when you clear site data. No real account is created.
          </p>
        </div>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import { useStore } from '../context/store'
import { getProduct } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Favorites() {
  const { favorites, user } = useStore()
  const items = favorites.map(getProduct).filter((p) => p !== undefined)

  return (
    <section className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Saved for later</p>
        <h1 className="mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">
          Your favorites
        </h1>
        <p className="mt-3 text-[15px] text-forest/60">
          {items.length} saved item{items.length === 1 ? '' : 's'} · {user?.name}
        </p>

        {items.length === 0 ? (
          <div className="mt-14 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-mint-deep text-forest/50">
              <Heart className="h-7 w-7" />
            </div>
            <p className="mt-5 text-lg font-medium text-forest">Nothing saved yet</p>
            <p className="mt-2 max-w-xs text-sm text-forest/55">
              Tap the heart on any product to keep it here for later.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
            >
              Browse products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {items.map((p) => (
              <ProductCard key={p!.id} product={p!} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
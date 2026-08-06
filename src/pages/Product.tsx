import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, Heart, Minus, Plus, ShieldCheck, ShoppingCart, Star, Truck } from 'lucide-react'
import { useStore } from '../context/store'
import { formatPrice, getProduct, PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { id } = useParams()
  const product = getProduct(id ?? '')
  const { user, addToCart, favorites, toggleFavorite } = useStore()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-serif-display text-3xl text-forest">Product not found</p>
        <Link to="/shop" className="mt-5 text-sm font-semibold text-accent">
          Back to the shop
        </Link>
      </section>
    )
  }

  const prod = product
  const fav = favorites.includes(prod.id)
  const related = PRODUCTS.filter((p) => p.id !== prod.id && p.category === prod.category).slice(0, 3)
  const fallbackRelated = related.length > 0 ? related : PRODUCTS.filter((p) => p.id !== prod.id).slice(0, 3)

  function requireUser(action: () => void) {
    if (!user) {
      navigate('/signup', { state: { from: `/product/${prod.id}` } })
      return
    }
    action()
  }

  function onAdd() {
    requireUser(() => {
      addToCart(prod.id, qty)
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    })
  }

  return (
    <section className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <nav className="text-xs font-medium uppercase tracking-wider text-forest/45">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-forest">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-forest/70">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-mint-deep shadow-soft">
            <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
            {product.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-forest px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-mint">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-mint-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest/70">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-semibold text-forest">{product.rating}</span>
                <span className="text-xs text-forest/45">({product.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            <h1 className="mt-4 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-forest/65">{product.description}</p>

            <p className="mt-6 text-3xl font-bold text-forest">{formatPrice(product.price)}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="flex h-12 items-center rounded-full border border-forest/15 bg-white">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-forest transition-colors hover:bg-mint-deep"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-forest">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-forest transition-colors hover:bg-mint-deep"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={onAdd}
                className={`inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-95 sm:flex-none sm:px-8 ${
                  added ? 'bg-accent' : 'bg-forest hover:bg-forest-hover'
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                {added ? 'Added to cart' : 'Add to cart'}
              </button>

              <button
                type="button"
                aria-label="Add to favorites"
                onClick={() => requireUser(() => toggleFavorite(product.id))}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  fav ? 'border-accent bg-accent text-white' : 'border-forest/15 text-forest hover:border-accent hover:text-accent'
                }`}
              >
                <Heart className={`h-5 w-5 ${fav ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-mint/60 p-4">
                <Truck className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-[13px] leading-snug text-forest/70">
                  Free 2-day delivery on orders over $49
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-mint/60 p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-[13px] leading-snug text-forest/70">
                  30-day happiness guarantee, no questions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif-display text-3xl tracking-tight text-forest sm:text-4xl">
              You might also love
            </h2>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-accent"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {fallbackRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
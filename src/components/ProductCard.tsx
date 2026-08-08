import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useStore } from '../context/store'
import { formatPrice, type Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const { user, addToCart, favorites, toggleFavorite } = useStore()
  const navigate = useNavigate()
  const [added, setAdded] = useState(false)
  const fav = favorites.includes(product.id)

  function requireUser(action: () => void) {
    if (!user) {
      navigate('/signup', { state: { from: '/shop' } })
      return
    }
    action()
  }

  function onAdd() {
    requireUser(() => {
      addToCart(product.id)
      setAdded(true)
      setTimeout(() => setAdded(false), 1400)
    })
  }

  return (
    <article className="group relative flex flex-col rounded-3xl border border-forest/8 bg-mint/40 p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/15 hover:bg-white hover:shadow-lift">
      <div className="relative block aspect-square overflow-hidden rounded-2xl bg-mint-deep">
        {/* Stretched link covers the whole image for navigation; buttons sit above it */}
        <Link
          to={`/product/${product.id}`}
          aria-label={product.name}
          className="absolute inset-0 z-10"
        />
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
          loading="lazy"
          decoding="async"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-forest px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-mint">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={fav ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          onClick={() => requireUser(() => toggleFavorite(product.id))}
          className={`absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:scale-110 active:scale-90 ${
            fav ? 'bg-accent text-white' : 'bg-white/90 text-forest hover:text-accent'
          }`}
        >
          <Heart className={`h-3.5 w-3.5 ${fav ? 'fill-current' : ''}`} />
        </button>

        <button
          type="button"
          onClick={onAdd}
          className={`absolute inset-x-3 bottom-3 z-20 flex translate-y-0 items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold text-white opacity-100 transition-all duration-300 active:scale-95 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
            added ? 'bg-accent' : 'bg-forest hover:bg-forest-hover'
          }`}
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          {added ? 'Added to cart' : 'Add to cart'}
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3">
        <Link to={`/product/${product.id}`}>
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs font-semibold text-forest">{product.rating}</span>
            <span className="text-[11px] text-forest/40">({product.reviews.toLocaleString()})</span>
          </div>
          <h3 className="mt-1.5 text-sm font-medium leading-snug text-forest sm:text-[15px]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-base font-bold text-forest">{formatPrice(product.price)}</p>
        </Link>
      </div>
    </article>
  )
}
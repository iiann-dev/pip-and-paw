import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, ShieldCheck, ShoppingCart, Trash2 } from 'lucide-react'
import { useStore } from '../context/store'
import { formatPrice, getProduct } from '../data/products'

export default function Cart() {
  const { cart, setQty, removeFromCart, clearCart, user } = useStore()
  const lines = cart
    .map((c) => ({ ...c, product: getProduct(c.productId) }))
    .filter((c) => c.product)

  const subtotal = lines.reduce((n, c) => n + (c.product?.price ?? 0) * c.qty, 0)
  const shipping = subtotal >= 49 || subtotal === 0 ? 0 : 6
  const total = subtotal + shipping

  if (lines.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-mint-deep text-forest/50">
          <ShoppingCart className="h-7 w-7" />
        </div>
        <h1 className="mt-6 font-serif-display text-4xl tracking-tight text-forest">Your cart is empty</h1>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-forest/60">
          {user ? 'Time to find something your pet will love.' : 'Sign in to keep your cart synced.'}
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
        >
          Explore products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    )
  }

  return (
    <section className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif-display text-4xl tracking-tight text-forest sm:text-5xl">Your cart</h1>
        <p className="mt-3 text-[15px] text-forest/60">Signed in as {user?.email} — prototype checkout.</p>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-4">
            {lines.map(({ product, qty }) => (
              <div
                key={product!.id}
                className="flex gap-4 rounded-3xl border border-forest/10 bg-white p-4 sm:gap-5 sm:p-5"
              >
                <Link
                  to={`/product/${product!.id}`}
                  className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-mint-deep sm:h-28 sm:w-28"
                >
                  <img src={product!.img} alt={product!.name} className="h-full w-full object-cover" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link
                        to={`/product/${product!.id}`}
                        className="text-[15px] font-semibold text-forest hover:text-accent"
                      >
                        {product!.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-forest/45">{formatPrice(product!.price)} each</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${product!.name}`}
                      onClick={() => removeFromCart(product!.id)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-forest/40 transition-colors hover:bg-mint-deep hover:text-accent"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex h-10 items-center rounded-full border border-forest/15">
                      <button
                        type="button"
                        aria-label="Decrease"
                        onClick={() => setQty(product!.id, qty - 1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-forest hover:bg-mint-deep"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm font-bold text-forest">{qty}</span>
                      <button
                        type="button"
                        aria-label="Increase"
                        onClick={() => setQty(product!.id, qty + 1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-forest hover:bg-mint-deep"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-forest">
                      {formatPrice((product?.price ?? 0) * qty)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={clearCart}
              className="self-start text-xs font-semibold text-forest/45 transition-colors hover:text-accent"
            >
              Clear cart
            </button>
          </div>

          <div className="h-fit rounded-3xl border border-forest/10 bg-white p-6 shadow-soft sm:p-7 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-forest">Order summary</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-forest/65">
                <span>Subtotal</span>
                <span className="font-semibold text-forest">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-forest/65">
                <span>Shipping</span>
                <span className="font-semibold text-forest">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              {subtotal < 49 && subtotal > 0 && (
                <p className="rounded-2xl bg-mint-deep px-3 py-2.5 text-[12px] leading-snug text-forest/70">
                  Add {formatPrice(49 - subtotal)} more for free 2-day shipping.
                </p>
              )}
              <div className="my-1 h-px bg-forest/10" />
              <div className="flex justify-between text-base font-bold text-forest">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => clearCart()}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest text-sm font-semibold text-white transition-all duration-200 hover:bg-forest-hover hover:scale-[1.02] active:scale-95"
            >
              <ShieldCheck className="h-4 w-4" />
              Prototype checkout
            </button>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-forest/40">
              This is a design prototype — no payment is processed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
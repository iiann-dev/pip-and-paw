import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Star, ShoppingCart, PawPrint } from 'lucide-react'
import { useStore } from '../context/store'
import { ASSETS } from '../data/assets'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Delivery & payment', to: '/delivery' },
  { label: 'Brands', to: '/brands' },
  { label: 'Blog', to: '/blog' },
]

const ICON_BASE =
  'relative flex h-10 w-10 items-center justify-center rounded-full text-[#1a3d1a] transition-all duration-200 ease-out hover:bg-[#e2f6e6]'

function Badge({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold leading-none text-white ${
        accent ? 'bg-accent' : 'bg-forest'
      }`}
    >
      {children}
    </span>
  )
}

export default function Header() {
  const { user, cartCount, favCount } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-5 z-40 px-4 sm:px-6">
      <div
        className={`mx-auto flex h-[70px] max-w-[1240px] items-center justify-between gap-6 rounded-[32px] border px-7 transition-all duration-300 ease-out ${
          scrolled
            ? 'scale-[0.98] border-white/60 bg-white/90 shadow-[0_12px_36px_-12px_rgb(26_61_26/0.16)] backdrop-blur-[20px]'
            : 'border-white/45 bg-white/78 shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-[20px]'
        }`}
      >
        {/* Logo */}
        <Link to="/" aria-label="Pip &amp; Paw home" className="flex shrink-0 items-center gap-2.5 pr-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e86a10] text-white">
            <PawPrint className="h-[22px] w-[22px]" />
          </span>
          <span className="font-serif-display text-xl leading-none tracking-tight text-forest">
            Pip &amp; Paw
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-2xl px-3.5 py-2 text-[15px] font-medium tracking-[-0.02em] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#e2f6e6] hover:text-forest ${
                  isActive ? 'bg-[#e2f6e6] text-forest' : 'bg-transparent text-forest/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Wishlist */}
          {user ? (
            <Link to="/favorites" aria-label={`Favorites, ${favCount} saved`} className={ICON_BASE}>
              <Star className="h-5 w-5 fill-current" strokeWidth={0} />
              {favCount > 0 && <Badge>{favCount}</Badge>}
            </Link>
          ) : (
            <Link
              to="/signup"
              state={{ from: '/favorites' }}
              aria-label="Wishlist — sign in required"
              className={ICON_BASE}
            >
              <Star className="h-5 w-5" strokeWidth={2} />
            </Link>
          )}

          {/* Cart */}
          {user ? (
            <Link to="/cart" aria-label={`Cart, ${cartCount} items`} className={ICON_BASE}>
              <ShoppingCart className="h-5 w-5" strokeWidth={2} />
              {cartCount > 0 && <Badge accent>{cartCount}</Badge>}
            </Link>
          ) : (
            <Link
              to="/signup"
              state={{ from: '/cart' }}
              aria-label="Cart — sign in required"
              className={ICON_BASE}
            >
              <ShoppingCart className="h-5 w-5" strokeWidth={2} />
            </Link>
          )}

          {/* Sign In / profile */}
          {user ? (
            <Link to="/profile" aria-label="Your profile">
              <img
                src={ASSETS.avatar}
                alt="Your profile"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-forest/10"
              />
            </Link>
          ) : (
            <Link
              to="/signup"
              className="inline-flex h-[42px] items-center rounded-[20px] bg-forest px-5 text-[15px] font-medium tracking-[-0.02em] text-white transition-all duration-200 ease-out hover:bg-forest-hover active:scale-[0.97]"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, Star, ShoppingCart, PawPrint } from 'lucide-react'
import { useStore } from '../context/store'
import { ASSETS } from '../data/assets'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Delivery and payment', to: '/delivery' },
  { label: 'Brands', to: '/brands' },
  { label: 'Blog', to: '/blog' },
]

export default function Header() {
  const { user, cartCount, favCount } = useStore()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-4 py-4 transition-all duration-300 sm:px-8 lg:px-12 ${
        scrolled ? 'bg-mint/85 shadow-[0_12px_40px_-20px_rgb(26_61_26/0.25)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" aria-label="Pip &amp; Paw home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white lg:h-9 lg:w-9">
            <PawPrint className="h-4.5 w-4.5 lg:h-5 lg:w-5" />
          </span>
          <span className="font-serif-display text-lg leading-none tracking-tight text-forest lg:text-xl">
            Pip &amp; Paw
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 hover:text-forest ${
                  isActive ? 'text-forest' : 'text-forest/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/shop"
            aria-label="Search products"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors duration-200 hover:bg-forest/5 sm:flex"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
          </Link>

          {user ? (
            <>
              {/* Favorites — logged in */}
              <Link
                to="/favorites"
                aria-label={`Favorites, ${favCount} saved`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                <Star className="h-[18px] w-[18px] fill-current" strokeWidth={0} />
                {favCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-mint bg-forest text-[10px] font-bold leading-none text-white">
                    {favCount}
                  </span>
                )}
              </Link>

              {/* Cart — logged in */}
              <Link
                to="/cart"
                aria-label={`Cart, ${cartCount} items`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors duration-200 hover:bg-forest/5"
              >
                <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={2} />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-mint bg-accent text-[10px] font-bold leading-none text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/profile" aria-label="Your profile">
                <img
                  src={ASSETS.avatar}
                  alt="Your profile"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-forest/10"
                />
              </Link>
            </>
          ) : (
            <>
              {/* Favorites — guest: empty, prompts sign-up */}
              <Link
                to="/signup"
                state={{ from: '/favorites' }}
                aria-label="Favorites — sign in required"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors duration-200 hover:bg-forest/5 hover:text-forest"
              >
                <Star className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>

              {/* Cart — guest: empty, prompts sign-up */}
              <Link
                to="/signup"
                state={{ from: '/cart' }}
                aria-label="Cart — sign in required"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors duration-200 hover:bg-forest/5 hover:text-forest"
              >
                <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>

              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="inline-flex h-10 items-center rounded-full bg-forest px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-forest-hover hover:scale-[1.02] active:scale-95"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

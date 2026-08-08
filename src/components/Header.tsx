import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Star, ShoppingCart, PawPrint, X } from 'lucide-react'
import { useStore } from '../context/store'
import { ASSETS } from '../data/assets'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Delivery', to: '/delivery' },
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
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-5 z-40 px-4 sm:px-6">
      <div
        className={`mx-auto flex h-[70px] max-w-[1240px] items-center justify-between gap-2 rounded-[32px] border px-4 transition-all duration-300 ease-out sm:gap-4 sm:px-6 lg:px-7 ${
          scrolled
            ? 'scale-[0.98] border-white/60 bg-white/90 shadow-[0_12px_36px_-12px_rgb(26_61_26/0.16)] backdrop-blur-[20px]'
            : 'border-white/45 bg-white/78 shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-[20px]'
        }`}
      >
        {/* Logo */}
        <Link to="/" aria-label="Pip &amp; Paw home" className="flex shrink-0 items-center gap-2 pr-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e86a10] text-white">
            <PawPrint className="h-[22px] w-[22px]" />
          </span>
          <span className="hidden whitespace-nowrap font-serif-display text-xl leading-none tracking-tight text-forest sm:block">
            Pip &amp; Paw
          </span>
        </Link>

        {/* Center nav — tablet & up */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-2xl px-3 py-2 text-[14px] font-medium tracking-[-0.02em] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#e2f6e6] hover:text-forest lg:px-3.5 lg:text-[15px] ${
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

          {/* Sign In / profile — hidden on small phones, moves into the mobile menu */}
          {user ? (
            <Link to="/profile" aria-label="Your profile" className="hidden sm:block">
              <img
                src={ASSETS.avatar}
                alt="Your profile"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-forest/10"
              />
            </Link>
          ) : (
            <Link
              to="/signup"
              className="hidden h-[42px] items-center rounded-[20px] bg-forest px-5 text-[15px] font-medium tracking-[-0.02em] text-white transition-all duration-200 ease-out hover:bg-forest-hover active:scale-[0.97] sm:inline-flex"
            >
              Sign in
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 md:hidden ${
              menuOpen ? 'bg-[#e2f6e6] text-forest' : 'text-forest hover:bg-[#e2f6e6]'
            }`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1240px] rounded-[24px] border border-white/60 bg-white/95 p-3 shadow-[0_24px_60px_-24px_rgb(26_61_26/0.25)] backdrop-blur-[20px] md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-[15px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                    isActive ? 'bg-[#e2f6e6] text-forest' : 'text-forest/70 hover:bg-[#e2f6e6]/60 hover:text-forest'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-2 border-t border-forest/8 pt-2">
            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium text-forest transition-colors hover:bg-[#e2f6e6]/60"
              >
                <img src={ASSETS.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                Your profile
              </Link>
            ) : (
              <Link
                to="/signup"
                className="flex items-center justify-center rounded-2xl bg-forest px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-forest-hover"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

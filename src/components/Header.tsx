import { Search, Star, ShoppingCart } from 'lucide-react'
import { ASSETS, NAV_LINKS } from '../data/assets'

export default function Header() {
  return (
    <header className="relative z-30 shrink-0 px-4 py-4 sm:px-8 lg:px-12 animate-fade-up delay-100">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" aria-label="CozyPaws home" className="shrink-0">
          <img
            src={ASSETS.logo}
            alt="CozyPaws"
            className="h-[33px] w-auto lg:h-[52px]"
            style={{ maxWidth: '130px' }}
          />
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors duration-200 hover:text-forest ${
                i === 0 ? 'text-forest' : 'text-gray-600'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors duration-200 hover:bg-forest/5 sm:flex"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          {/* Favorites */}
          <button
            type="button"
            aria-label="Favorites"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            <Star className="h-[18px] w-[18px] fill-current" strokeWidth={0} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-mint bg-accent text-[10px] font-bold leading-none text-white">
              4
            </span>
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors duration-200 hover:bg-forest/5"
          >
            <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={2} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-mint bg-accent text-[10px] font-bold leading-none text-white">
              1
            </span>
          </button>

          {/* Avatar */}
          <img
            src={ASSETS.avatar}
            alt="Your profile"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-forest/10"
          />
        </div>
      </div>
    </header>
  )
}

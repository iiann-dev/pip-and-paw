import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export interface User {
  name: string
  email: string
}

interface CartItem {
  productId: string
  qty: number
}

interface Store {
  user: User | null
  signUp: (name: string, email: string) => void
  signOut: () => void
  cart: CartItem[]
  addToCart: (productId: string, qty?: number) => void
  removeFromCart: (productId: string) => void
  setQty: (productId: string, qty: number) => void
  clearCart: () => void
  cartCount: number
  favorites: string[]
  toggleFavorite: (productId: string) => void
  favCount: number
}

const StoreContext = createContext<Store | null>(null)

const LS_USER = 'pipandpaw_user'
const LS_CART = 'pipandpaw_cart'
const LS_FAV = 'pipandpaw_fav'

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  // Prototype auth: a fake local session, no backend. Name/email only.
  const [user, setUser] = useState<User | null>(() => load<User | null>(LS_USER, null))
  const [cart, setCart] = useState<CartItem[]>(() => load<CartItem[]>(LS_CART, []))
  const [favorites, setFavorites] = useState<string[]>(() => load<string[]>(LS_FAV, []))

  useEffect(() => {
    try {
      if (user) localStorage.setItem(LS_USER, JSON.stringify(user))
      else localStorage.removeItem(LS_USER)
    } catch { /* ignore */ }
  }, [user])
  useEffect(() => {
    try { localStorage.setItem(LS_CART, JSON.stringify(cart)) } catch { /* ignore */ }
  }, [cart])
  useEffect(() => {
    try { localStorage.setItem(LS_FAV, JSON.stringify(favorites)) } catch { /* ignore */ }
  }, [favorites])

  const store = useMemo<Store>(
    () => ({
      user,
      signUp: (name, email) => setUser({ name, email }),
      signOut: () => setUser(null),
      cart,
      addToCart: (productId, qty = 1) =>
        setCart((prev) => {
          const hit = prev.find((c) => c.productId === productId)
          return hit
            ? prev.map((c) => (c.productId === productId ? { ...c, qty: c.qty + qty } : c))
            : [...prev, { productId, qty }]
        }),
      removeFromCart: (productId) => setCart((prev) => prev.filter((c) => c.productId !== productId)),
      setQty: (productId, qty) =>
        setCart((prev) =>
          qty <= 0
            ? prev.filter((c) => c.productId !== productId)
            : prev.map((c) => (c.productId === productId ? { ...c, qty } : c)),
        ),
      clearCart: () => setCart([]),
      cartCount: cart.reduce((n, c) => n + c.qty, 0),
      favorites,
      toggleFavorite: (productId) =>
        setFavorites((prev) =>
          prev.includes(productId) ? prev.filter((f) => f !== productId) : [...prev, productId],
        ),
      favCount: favorites.length,
    }),
    [user, cart, favorites],
  )

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import RequireAuth from './components/RequireAuth'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Delivery from './pages/Delivery'
import Brands from './pages/Brands'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-mint text-forest antialiased">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/blog" element={<Blog />} />
          {/* Personalized features require the prototype sign-up */}
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="/favorites"
            element={
              <RequireAuth>
                <Favorites />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
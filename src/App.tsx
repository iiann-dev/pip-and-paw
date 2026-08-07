import { Route, Routes, Outlet } from 'react-router-dom'
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
import PageTransition from './components/PageTransition'
import { useLenis } from './hooks/useLenis'

// Layout with page transitions for all routes except home
function TransitionLayout() {
  return (
    <PageTransition transitionType="creative" duration={0.7}>
      <Outlet />
    </PageTransition>
  )
}

// Home layout - no transition (keep hero as-is)
function HomeLayout() {
  return <Outlet />
}

export default function App() {
  useLenis()
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-mint text-forest antialiased">
      <Header />
      <ScrollToTop />
      <main className="relative">
        <Routes>
          {/* Home page - no transition wrapper to preserve hero animations */}
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          {/* All other pages with creative transitions */}
          <Route element={<TransitionLayout />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/blog" element={<Blog />} />
            {/* Personalized features require the prototype sign-up */}
            <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path="/favorites" element={<RequireAuth><Favorites /></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
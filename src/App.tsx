import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import BestSellers from './components/BestSellers'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-mint text-forest antialiased">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <BestSellers />
        <Features />
        <Testimonials />
        <Newsletter />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

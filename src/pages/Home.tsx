import Hero from '../components/Hero'
import StickyShowcase from '../components/StickyShowcase'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Faq from '../components/Faq'

export default function Home() {
  return (
    <>
      <Hero />
      <StickyShowcase />
      <Categories />
      <BestSellers />
      <Features />
      <Testimonials />
      <Newsletter />
      <Faq />
    </>
  )
}

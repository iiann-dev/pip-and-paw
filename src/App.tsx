import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-mint text-forest antialiased">
      <Header />
      <Hero />
    </div>
  )
}

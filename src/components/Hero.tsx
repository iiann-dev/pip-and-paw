import { ArrowRight, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ASSETS } from '../data/assets'

function Heading() {
  return (
    <h1 className="font-serif-display font-normal leading-[0.95] tracking-tight text-forest text-[36px] md:text-7xl lg:text-[clamp(56px,7vw,104px)]">
      <span className="inline-block animate-word-pop delay-200">Everything</span>
      <br />
      <span className="inline-block animate-word-pop delay-300">Your</span>{' '}
      <span className="inline-block animate-word-pop delay-400">Pets</span>{' '}
      <span className="inline-block animate-word-pop delay-500">Love</span>
    </h1>
  )
}

function BottomPets() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 hidden items-end md:flex">
      <img
        src={ASSETS.petDachshundFull}
        alt="Dachshund"
        className="block h-auto w-full min-w-0 flex-1 max-h-[min(70vh,55vw)] animate-photo-reveal delay-700"
        loading="lazy"
        decoding="async"
      />
      <img
        src={ASSETS.petRetrieverFull}
        alt="Golden retriever"
        className="block h-auto w-full min-w-0 flex-[1.265] max-h-[min(85vh,70vw)] animate-photo-reveal delay-600"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src={ASSETS.petTabbyFull}
        alt="Tabby cat"
        className="block h-auto w-full min-w-0 flex-1 max-h-[min(70vh,55vw)] animate-photo-reveal delay-800"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function BottomOverlays() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 z-20 hidden items-end md:flex"
      style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
    >
      {/* Left — community stat */}
      <div className="flex flex-1 flex-col items-center gap-2 animate-fade-up delay-1000">
        <div className="flex items-center -space-x-2">
          <img
            src={ASSETS.avatar}
            alt=""
            className="h-9 w-9 rounded-full border-2 border-white object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest">
            <Plus className="h-4 w-4 text-white" />
          </div>
        </div>
        <p className="text-xl font-bold leading-none text-forest">98K+</p>
      </div>

      {/* Center — featured CTA */}
      <div className="pointer-events-auto flex flex-[1.265] flex-col items-center gap-2.5 animate-fade-up delay-1100">
        <p className="font-serif-display text-lg leading-snug text-white sm:text-xl md:text-2xl">
          Best Products for Your Pet
        </p>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:scale-[1.04] active:scale-95"
        >
          Explore Products
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Right — rating */}
      <div className="flex flex-1 flex-col items-center gap-2 animate-fade-up delay-1200">
        <div className="flex items-center gap-1.5">
          <Star className="h-6 w-6 fill-accent text-accent" />
          <span className="text-xl font-bold leading-none text-forest">4.6</span>
        </div>
      </div>
    </div>
  )
}

/* ---------- Mobile bottom: pets strip (below md, per original spec) ---------- */

function MobilePetStrip() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end md:hidden">
      <div className="flex-1 overflow-hidden animate-photo-reveal delay-700">
        <img
          src={ASSETS.petDachshund}
          alt="Dachshund"
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
          width="720"
          height="308"
        />
      </div>
      <div className="flex-[1.265] overflow-hidden animate-photo-reveal delay-600">
        <img
          src={ASSETS.petRetriever}
          alt="Golden retriever"
          className="block h-auto w-full"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="720"
          height="512"
        />
      </div>
      <div className="flex-1 overflow-hidden animate-photo-reveal delay-800">
        <img
          src={ASSETS.petTabby}
          alt="Tabby cat"
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
          width="720"
          height="364"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] flex-col overflow-hidden md:h-[100vh] lg:h-[132vh]">
      {/* Text layer — desktop / tablet */}
      <div className="relative z-20 hidden flex-col items-center px-4 pt-12 text-center sm:px-6 md:flex md:pt-32 lg:px-12 lg:pt-32">
        <Heading />
      </div>
      {/* Text layer — mobile */}
      <div className="relative z-20 md:hidden flex flex-col items-center px-4 pt-28 text-center">
        <Heading />
      </div>

      {/* Desktop/tablet bottom: 3 full pet photos + floating overlays (per original spec) */}
      <BottomPets />
      <BottomOverlays />

      {/* Mobile bottom: pet strip */}
      <MobilePetStrip />
    </section>
  )
}
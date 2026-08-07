import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
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

function ProductCard({ aspectClass = 'aspect-[260/257]' }: { aspectClass?: string }) {
  return (
    <div className="animate-slide-in-left delay-600">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_44px_-22px_rgb(26_61_26/0.35)]">
        <div className={aspectClass}>
          <img
            src={ASSETS.catHouse}
            alt="Cozy Cat House"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <button
          type="button"
          aria-label="View Cozy Cat House"
          className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white transition-all duration-200 hover:bg-forest-hover hover:scale-105 active:scale-95"
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700">Cozy Cat House</p>
      <p className="text-base font-bold text-forest">$49.99</p>
    </div>
  )
}

function VideoCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="animate-slide-in-right delay-600">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_44px_-22px_rgb(26_61_26/0.35)]">
        <div className={compact ? 'aspect-3/4' : 'aspect-[177/287]'}>
          <img
            src={ASSETS.videoCard}
            alt="Watch product reviews on TikTok and YouTube"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute bottom-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-forest text-white shadow-lg transition-transform duration-200 hover:scale-110">
          <Play className="h-4 w-4 fill-current" />
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] leading-snug text-gray-600">
        Watch Product Reviews on TikTok and YouTube
      </p>
    </div>
  )
}

/* ---------- Bottom: 3 full pet images (strip) + overlays (md+), per original prompt ----------
   Prompt: 3 images absolutely positioned bottom-0 left-0 right-0, z-10, flex items-end, no gaps.
   Left flex-1 max-h min(70vh,55vw); Center flex-[1.265] max-h min(85vh,70vw); Right flex-1
   max-h min(70vh,55vw); all w-full h-auto block. Overlays (98K+ / Best Products + Explore /
   4.6) float on top at bottom: clamp(20px,4vh,50px). No cards — so the paws are never covered. */

function BottomPets() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 hidden items-end md:flex">
      <img
        src={ASSETS.petDachshundFull}
        alt="Dachshund"
        className="block h-auto w-full min-w-0 flex-1 max-h-[min(70vh,55vw)] animate-photo-reveal delay-700"
      />
      <img
        src={ASSETS.petRetrieverFull}
        alt="Golden retriever"
        className="block h-auto w-full min-w-0 flex-[1.265] max-h-[min(85vh,70vw)] animate-photo-reveal delay-600"
      />
      <img
        src={ASSETS.petTabbyFull}
        alt="Tabby cat"
        className="block h-auto w-full min-w-0 flex-1 max-h-[min(70vh,55vw)] animate-photo-reveal delay-800"
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
        <img src={ASSETS.petDachshund} alt="Dachshund" className="block h-auto w-full" loading="eager" />
      </div>
      <div className="flex-[1.265] overflow-hidden animate-photo-reveal delay-600">
        <img src={ASSETS.petRetriever} alt="Golden retriever" className="block h-auto w-full" loading="eager" />
      </div>
      <div className="flex-1 overflow-hidden animate-photo-reveal delay-800">
        <img src={ASSETS.petTabby} alt="Tabby cat" className="block h-auto w-full" loading="eager" />
      </div>
    </div>
  )
}

/* ---------- Mobile hero content ---------- */

function MobileHero() {
  return (
    <div className="relative z-20 flex flex-1 flex-col px-4 pt-20 md:hidden">
      <div className="flex flex-col items-center text-center">
        <Heading />
        <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-gray-600 animate-fade-up delay-600">
          Premium food, toys and cozy homes for happy pets — delivered to your door.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] active:scale-95 animate-fade-up delay-700"
        >
          Explore Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 flex gap-3 animate-fade-up delay-800">
        <div className="min-w-0 flex-1">
          <ProductCard aspectClass="aspect-square" />
        </div>
        <div className="min-w-0 flex-1">
          <VideoCard compact />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-center gap-3 pb-4 animate-fade-up delay-900">
        <div className="flex items-center -space-x-2">
          <img
            src={ASSETS.avatar}
            alt=""
            className="h-7 w-7 rounded-full border-2 border-mint object-cover"
          />
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-forest">
            <Plus className="h-3 w-3 text-white" />
          </div>
        </div>
        <span className="text-sm font-bold text-forest">98K+</span>
        <span className="h-5 w-px bg-forest/15" aria-hidden="true" />
        <Star className="h-4 w-4 fill-accent text-accent" />
        <span className="text-sm font-bold text-forest">4.6</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[660px] flex-col overflow-hidden md:h-[132vh]">
      {/* Text layer — desktop / tablet */}
      <div className="relative z-20 hidden flex-col items-center px-4 pt-12 text-center sm:px-6 md:flex md:pt-32 lg:px-12 lg:pt-32">
        <Heading />
      </div>

      {/* Left product card — desktop */}
      <div className="absolute left-10 top-[120px] z-30 hidden w-[clamp(150px,13vw,240px)] lg:block">
        <ProductCard />
      </div>
      {/* Left product card — tablet */}
      <div className="absolute left-4 top-[120px] z-30 hidden w-[150px] md:block lg:hidden">
        <ProductCard aspectClass="aspect-[3/4]" />
      </div>

      {/* Right video card — desktop */}
      <div className="absolute right-10 top-[120px] z-30 hidden w-[clamp(112px,9vw,164px)] lg:block">
        <VideoCard />
      </div>
      {/* Right video card — tablet */}
      <div className="absolute right-4 top-[120px] z-30 hidden w-[112px] md:block lg:hidden">
        <VideoCard compact />
      </div>

      {/* Mobile content */}
      <MobileHero />

      {/* Desktop/tablet bottom: 3 full pet images + floating overlays (per original prompt) */}
      <BottomPets />
      <BottomOverlays />

      {/* Mobile bottom: pet strip */}
      <MobilePetStrip />
    </section>
  )
}

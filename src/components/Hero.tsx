import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { ASSETS } from '../data/assets'

function Heading() {
  return (
    <h1 className="font-serif-display font-normal leading-[0.95] tracking-tight text-forest text-[36px] md:text-7xl lg:text-[clamp(60px,7.5vw,110px)]">
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
      <div className="relative overflow-hidden rounded-2xl bg-white">
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
          className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white transition-colors duration-200 hover:bg-forest-hover"
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
      <div className="relative overflow-hidden rounded-2xl">
        <div className={compact ? 'aspect-3/4' : 'aspect-[177/287]'}>
          <img
            src={ASSETS.videoCard}
            alt="Watch product reviews on TikTok and YouTube"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute bottom-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-forest text-white">
          <Play className="h-4 w-4 fill-current" />
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] leading-snug text-gray-600">
        Watch Product Reviews on TikTok and YouTube
      </p>
    </div>
  )
}

function BottomImages() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end">
      <div className="max-h-none flex-1 overflow-hidden animate-photo-reveal delay-700 md:max-h-[min(60vh,60vw)] lg:max-h-[min(70vh,55vw)]">
        <img
          src={ASSETS.bottomLeft}
          alt="Happy pet with CozyPaws"
          className="block h-auto w-full"
          loading="eager"
        />
      </div>
      <div className="max-h-none flex-[1.265] overflow-hidden animate-photo-reveal delay-600 md:max-h-[min(75vh,65vw)] lg:max-h-[min(85vh,70vw)]">
        <img
          src={ASSETS.bottomCenter}
          alt="Best products for your pet"
          className="block h-auto w-full"
          loading="eager"
        />
      </div>
      <div className="max-h-none flex-1 overflow-hidden animate-photo-reveal delay-800 md:max-h-[min(60vh,60vw)] lg:max-h-[min(70vh,55vw)]">
        <img
          src={ASSETS.bottomRight}
          alt="Pet parent with CozyPaws"
          className="block h-auto w-full"
          loading="eager"
        />
      </div>
    </div>
  )
}

function Overlays() {
  return (
    <>
      {/* Left — 98K+ stat */}
      <div className="absolute bottom-[clamp(20px,4vh,50px)] left-[4%] z-20 hidden items-center gap-2 animate-scale-in delay-1000 md:flex">
        <div className="flex items-center -space-x-2">
          <img
            src={ASSETS.avatar}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-mint object-cover"
          />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest">
            <Plus className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
        <div className="leading-none">
          <p className="text-base font-bold text-forest">98K+</p>
          <p className="mt-0.5 text-[10px] font-medium text-gray-500">Happy pets</p>
        </div>
      </div>

      {/* Center — best products */}
      <div className="absolute bottom-[clamp(20px,4vh,50px)] left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center animate-scale-in delay-1100 md:flex">
        <p className="text-center text-xl font-semibold text-white drop-shadow-md md:text-2xl">
          Best Products for Your Pet
        </p>
        <button
          type="button"
          className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
        >
          Explore Products
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Right — rating */}
      <div className="absolute bottom-[clamp(20px,4vh,50px)] right-[4%] z-20 hidden items-center gap-1.5 animate-scale-in delay-1200 md:flex">
        <Star className="h-4 w-4 fill-accent text-accent" />
        <span className="text-base font-bold text-forest">4.6</span>
      </div>
    </>
  )
}

function MobileHero() {
  return (
    <div className="relative z-20 flex flex-1 flex-col px-4 pt-8 md:hidden">
      {/* Title / subtitle / CTA */}
      <div className="flex flex-col items-center text-center">
        <Heading />
        <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-gray-600 animate-fade-up delay-600">
          Premium food, toys and cozy homes for happy pets — delivered to your door.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover animate-fade-up delay-700"
        >
          Explore Products
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Cards row */}
      <div className="mt-8 flex gap-3 animate-fade-up delay-800">
        <div className="min-w-0 flex-1">
          <ProductCard aspectClass="aspect-square" />
        </div>
        <div className="min-w-0 flex-1">
          <VideoCard compact />
        </div>
      </div>

      {/* Stats row */}
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
    <section className="relative flex flex-1 flex-col overflow-hidden">
      {/* Text layer — desktop / tablet */}
      <div className="relative z-20 hidden flex-col items-center px-4 pt-12 text-center sm:px-6 md:flex md:pt-16 lg:px-12 lg:pt-[5.4rem]">
        <Heading />
      </div>

      {/* Left product card — desktop */}
      <div className="absolute left-12 top-[50px] z-20 hidden w-[clamp(160px,14vw,260px)] lg:block">
        <ProductCard />
      </div>
      {/* Left product card — tablet */}
      <div className="absolute left-4 top-[80px] z-20 hidden w-[160px] md:block lg:hidden">
        <ProductCard aspectClass="aspect-[3/4]" />
      </div>

      {/* Right video card — desktop */}
      <div className="absolute right-12 top-[50px] z-20 hidden w-[clamp(120px,10vw,177px)] lg:block">
        <VideoCard />
      </div>
      {/* Right video card — tablet */}
      <div className="absolute right-4 top-[80px] z-20 hidden w-[120px] md:block lg:hidden">
        <VideoCard compact />
      </div>

      {/* Mobile content */}
      <MobileHero />

      {/* Bottom photo strip + overlays */}
      <BottomImages />
      <Overlays />
    </section>
  )
}

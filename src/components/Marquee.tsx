const ITEMS = [
  'Vet approved',
  'Free 2-day delivery',
  '30-day happiness guarantee',
  '98K+ happy pets',
  'Grain-free recipes',
  'Plastic-free packaging',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-forest/10 bg-forest py-3.5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-mint/90"
              >
                {item}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ASSETS } from '../data/assets'

const POSTS = [
  {
    title: 'How to build the perfect cozy corner for your cat',
    excerpt: 'Three layers, one window seat and a lot of patience — the vet-tested recipe for a corner your cat actually uses.',
    date: 'Aug 3, 2026',
    read: '6 min read',
    img: ASSETS.petTabby,
  },
  {
    title: 'Reading your dog: 9 body-language cues owners miss',
    excerpt: 'From the slow tail wag to the ear position that means "please stop" — learn to speak dog fluently.',
    date: 'Jul 28, 2026',
    read: '9 min read',
    img: ASSETS.petRetriever,
  },
  {
    title: 'Grain-free myths, explained by our vet panel',
    excerpt: 'Is grain actually bad? Our head vet clears up the confusion with the latest research.',
    date: 'Jul 19, 2026',
    read: '7 min read',
    img: ASSETS.petDachshund,
  },
  {
    title: 'The unboxing method: why boxes beat toys',
    excerpt: 'Our play kit is built on one surprising finding — the box is half the fun. Here is the science.',
    date: 'Jul 11, 2026',
    read: '5 min read',
    img: ASSETS.videoCard,
  },
]

export default function Blog() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-accent">Blog</p>
          <h1 className="reveal mt-3 font-serif-display text-4xl tracking-tight text-forest sm:text-5xl lg:text-6xl">
            Notes from the pack
          </h1>
          <p className="reveal mt-4 text-[15px] leading-relaxed text-forest/60">
            Training tips, product deep-dives and honest advice from our vets and pet parents.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {POSTS.map((post, i) => (
            <article
              key={post.title}
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              className="reveal group overflow-hidden rounded-3xl border border-forest/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="aspect-[16/9] overflow-hidden bg-mint-deep">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-forest/45">
                  <CalendarDays className="h-3.5 w-3.5 text-accent" />
                  {post.date}
                  <span className="text-forest/25">·</span>
                  {post.read}
                </div>
                <h2 className="mt-3 font-serif-display text-2xl leading-snug tracking-tight text-forest">
                  {post.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-forest/60">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
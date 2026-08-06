import { ASSETS } from './assets'

export type Category = 'dogs' | 'cats' | 'home' | 'play'

export const CATEGORY_LABELS: Record<Category, string> = {
  dogs: 'For dogs',
  cats: 'For cats',
  home: 'Cozy homes',
  play: 'Play & care',
}

export interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviews: number
  img: string
  category: Category
  badge?: string
  description: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'cozy-cat-house',
    name: 'Cozy Cat House',
    price: 49.99,
    rating: 4.8,
    reviews: 1240,
    img: ASSETS.catHouse,
    category: 'home',
    badge: 'Bestseller',
    description:
      'A warm, plush hideaway with a sisal scratching post — the single most-loved item in our range. Most cats move in the same day.',
  },
  {
    id: 'unboxing-play-kit',
    name: 'Unboxing Play Kit',
    price: 34.0,
    rating: 4.9,
    reviews: 862,
    img: ASSETS.videoCard,
    category: 'play',
    badge: 'New',
    description:
      'A monthly sensory mix of rope toys, treats and surprise goodies designed to keep curious pets busy — and silence those empty-box habits.',
  },
  {
    id: 'dachshund-comfort-plush',
    name: 'Dachshund Comfort Plush',
    price: 28.0,
    rating: 4.7,
    reviews: 512,
    img: ASSETS.petDachshund,
    category: 'dogs',
    description:
      'A squishy, chew-safe companion for small dogs, reinforced at the seams and machine-washable.',
  },
  {
    id: 'purrfect-catnip-dreams',
    name: 'Purrfect Catnip Dreams',
    price: 19.0,
    rating: 4.9,
    reviews: 733,
    img: ASSETS.petTabby,
    category: 'cats',
    badge: 'Loved',
    description:
      'Organic, ethically-grown catnip sewn into a plush pouch. 98% of our test cats approved within an hour.',
  },
  {
    id: 'retriever-cozy-bed',
    name: 'Cozy Pet Bed',
    price: 45.0,
    rating: 4.9,
    reviews: 604,
    img: ASSETS.petRetriever,
    category: 'home',
    description:
      'A plush, orthopaedic pet bed with a washable cover — deep enough for big dogs to fully stretch out.',
  },
  {
    id: 'natural-treat-paws',
    name: 'Natural Treat Paws',
    price: 12.5,
    rating: 4.6,
    reviews: 388,
    img: ASSETS.petRetrieverFull,
    category: 'dogs',
    badge: 'Vet approved',
    description:
      'Grain-free, single-ingredient training treats baked in small batches. No fillers, no preservatives.',
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function byCategory(cat: string | undefined): Product[] {
  if (!cat) return PRODUCTS
  return PRODUCTS.filter((p) => p.category === cat)
}

export function formatPrice(n: number): string {
  return `$${n.toFixed(2)}`
}
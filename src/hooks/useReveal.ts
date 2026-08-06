import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal: adds .is-visible to elements with .reveal / .reveal-scale
 * when they enter the viewport. Respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = root.classList.contains('reveal') || root.classList.contains('reveal-scale')
      ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-scale'))]
      : Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-scale'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}

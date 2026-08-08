import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal: adds .is-visible to elements with .reveal / .reveal-scale
 * when they enter the viewport. Respects prefers-reduced-motion.
 *
 * Includes a MutationObserver re-scan: React sometimes swaps in brand-new
 * DOM nodes after mount (e.g. Shop category tabs re-render the product grid
 * with fresh nodes). Those nodes are ignored by the IntersectionObserver
 * created at mount and would stay opacity:0 forever — the re-scan guarantees
 * any newly added .reveal element gets observed.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const collectTargets = (): HTMLElement[] =>
      root.classList.contains('reveal') || root.classList.contains('reveal-scale')
        ? [root, ...Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-scale'))]
        : Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-scale'))

    const revealAll = () => {
      collectTargets().forEach((t) => t.classList.add('is-visible'))
    }

    // Reduced motion / no IntersectionObserver: reveal everything immediately.
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealAll()
      const mo = new MutationObserver(revealAll)
      mo.observe(root, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    let io: IntersectionObserver | null = null
    const observeTargets = (count = 0) => {
      if (!io) return
      collectTargets().forEach((t) => {
        if (t.classList.contains('is-visible')) return
        io!.observe(t)
      })
      // Second pass to be safe against nodes observed before their reveal class
      if (count < 1) requestAnimationFrame(() => observeTargets(count + 1))
    }

    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('is-visible')
            io?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observeTargets()
    observeTargets()

    // Re-observe nodes that React swaps in after mount (route params, dynamic grids).
    const mo = new MutationObserver((mutations) => {
      const added = mutations.some(
        (m) => m.type === 'childList' && m.addedNodes.length > 0,
      )
      if (added) observeTargets()
    })
    mo.observe(root, { childList: true, subtree: true })

    return () => {
      io?.disconnect()
      mo.disconnect()
    }
  }, [])

  return ref
}
import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)

/**
 * Lenis smooth-scroll provider. Exposes the instance through useLenisInstance()
 * so components (ScrollToTop) can route scroll commands through Lenis's own
 * API — window.scrollTo is silently defeated by Lenis on SPA navigation.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Detect low-end device: <4GB RAM or prefers-reduced-motion
    const nav = navigator as Navigator & { deviceMemory?: number }
    const isLowEnd = nav.deviceMemory !== undefined && nav.deviceMemory < 4
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Lower touch multiplier on low-end devices to reduce main-thread work
      touchMultiplier: isLowEnd || prefersReduced ? 1 : 1.6,
    })
    setLenis(instance)

    let rafId = 0
    function raf(time: number) {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export function useLenisInstance() {
  return useContext(LenisContext)
}
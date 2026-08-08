import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenisInstance } from '../context/lenis'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenisInstance()
  useEffect(() => {
    // Lenis overrides native scrollTo — route through its API, instant jump.
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])
  return null
}
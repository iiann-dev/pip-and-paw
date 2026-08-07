import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Skip scroll on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Scroll to top on route change. Use a small timeout to let the page transition start.
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
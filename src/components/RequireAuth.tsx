import { Navigate, useLocation } from 'react-router-dom'
import { useStore } from '../context/store'
import type { ReactNode } from 'react'

/** Gates a page behind the prototype sign-up. Guests are sent to /signup, then returned. */
export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useStore()
  const location = useLocation()
  if (!user) {
    return <Navigate to="/signup" replace state={{ from: location.pathname }} />
  }
  return <>{children}</>
}

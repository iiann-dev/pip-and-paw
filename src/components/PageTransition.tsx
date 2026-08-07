import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion, type Variant, type Transition } from 'framer-motion'

/**
 * Creative page transition wrapper with multiple animation styles
 * Supports: slide, fade, zoom, flip, and custom creative transitions
 */

type TransitionType = 'slide' | 'fade' | 'zoom' | 'flip' | 'creative' | 'wave'

interface PageTransitionProps {
  children: React.ReactNode
  transitionType?: TransitionType
  duration?: number
  ease?: [number, number, number, number]
  exitBeforeEnter?: boolean
}

type Variants = {
  initial: Variant
  animate: Variant
  exit: Variant
}

export default function PageTransition({
  children,
  transitionType = 'creative',
  duration = 0.7,
  ease = [0.16, 1, 0.3, 1],
  exitBeforeEnter = true,
}: PageTransitionProps) {
  const location = useLocation()

  // Animation variants based on transition type
  const getVariants = useCallback((): Variants => {
    const baseEase = ease

    switch (transitionType) {
      case 'slide':
        return {
          initial: { opacity: 0, x: 100, filter: 'blur(8px)' },
          animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration, ease: baseEase } },
          exit: { opacity: 0, x: -100, filter: 'blur(8px)', transition: { duration: duration * 0.7, ease: baseEase } },
        }

      case 'fade':
        return {
          initial: { opacity: 0, filter: 'blur(12px)', scale: 0.96 },
          animate: { opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration, ease: baseEase } },
          exit: { opacity: 0, filter: 'blur(12px)', scale: 1.04, transition: { duration: duration * 0.7, ease: baseEase } },
        }

      case 'zoom':
        return {
          initial: { opacity: 0, scale: 0.85, filter: 'blur(16px)', rotateX: 15 },
          animate: { opacity: 1, scale: 1, filter: 'blur(0px)', rotateX: 0, transition: { duration, ease: baseEase } },
          exit: { opacity: 0, scale: 1.15, filter: 'blur(16px)', rotateX: -15, transition: { duration: duration * 0.7, ease: baseEase } },
        }

      case 'flip':
        return {
          initial: { opacity: 0, rotateY: 90, filter: 'blur(10px)' },
          animate: { opacity: 1, rotateY: 0, filter: 'blur(0px)', transition: { duration, ease: baseEase } },
          exit: { opacity: 0, rotateY: -90, filter: 'blur(10px)', transition: { duration: duration * 0.7, ease: baseEase } },
        }

      case 'creative':
      default:
        return {
          initial: {
            opacity: 0,
            y: 60,
            scale: 0.94,
            filter: 'blur(16px)',
            rotateX: 8,
            skewY: 2,
          },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            rotateX: 0,
            skewY: 0,
            transition: { duration, ease: baseEase, type: 'spring', stiffness: 120, damping: 18, mass: 0.9 } as Transition,
          },
          exit: {
            opacity: 0,
            y: -40,
            scale: 1.04,
            filter: 'blur(12px)',
            rotateX: -8,
            skewY: -2,
            transition: { duration: duration * 0.6, ease: [0.33, 1, 0.68, 1] },
          },
        }

      // Additional creative variants
      case 'wave':
        return {
          initial: { opacity: 0, y: 80, skewX: 4, filter: 'blur(20px)' },
          animate: { opacity: 1, y: 0, skewX: 0, filter: 'blur(0px)', transition: { duration, ease: baseEase, type: 'spring', stiffness: 100, damping: 15 } as Transition },
          exit: { opacity: 0, y: -60, skewX: -4, filter: 'blur(20px)', transition: { duration: duration * 0.5, ease: baseEase } },
        }
    }
  }, [transitionType, duration, ease])

  const variants = getVariants()

  return (
    <AnimatePresence mode={exitBeforeEnter ? 'wait' : 'sync'} initial={false}>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-[calc(100vh-var(--header-height,0px))] page-transition-wrapper"
        style={{
          willChange: 'opacity, transform, filter',
          contain: 'layout style paint',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
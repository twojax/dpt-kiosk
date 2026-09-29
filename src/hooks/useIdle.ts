import { useEffect, useRef } from 'react'

/** Calls onIdle after `ms` with no touch, pointer or key input. */
export function useIdle(ms: number, onIdle: () => void) {
  const cb = useRef(onIdle)
  cb.current = onIdle

  useEffect(() => {
    let timer = window.setTimeout(() => cb.current(), ms)
    const reset = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => cb.current(), ms)
    }
    const events = ['pointerdown', 'keydown', 'wheel'] as const
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }))
    return () => {
      window.clearTimeout(timer)
      events.forEach((e) => window.removeEventListener(e, reset))
    }
  }, [ms])
}

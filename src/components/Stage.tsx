import { useLayoutEffect, useState, type ReactNode } from 'react'
import { STAGE } from '../content'

/**
 * Renders children on a fixed 1920 × 1080 canvas and scales it to fit the
 * window, letterboxing as needed. Everything inside is positioned in
 * design pixels straight from the comp.
 */
export function Stage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / STAGE.width, window.innerHeight / STAGE.height))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="viewport">
      <div
        className="stage"
        style={{
          width: STAGE.width,
          height: STAGE.height,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <svg className="shared-defs" width="0" height="0" aria-hidden="true">
          <defs>
            {/* Shared by every HexButton */}
            <linearGradient id="hexFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#eeedf5" />
            </linearGradient>
          </defs>
        </svg>
        {children}
      </div>
    </div>
  )
}

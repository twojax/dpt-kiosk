import { useState } from 'react'

export function Logo({ src, className }: { src: string; className?: string }) {
  const [missing, setMissing] = useState(false)
  if (missing) {
    return (
      <div className={`logo-fallback ${className ?? ''}`}>
        <strong>VIATRIS</strong>
        <span>DPT, a Viatris company</span>
      </div>
    )
  }
  return (
    <img
      className={className}
      src={src}
      alt="Viatris — DPT, a Viatris company"
      draggable={false}
      onError={() => setMissing(true)}
    />
  )
}

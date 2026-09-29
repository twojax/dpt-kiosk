import { useState } from 'react'

/** An image that shows a labelled placeholder until the real file is in place. */
export function Asset({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [missing, setMissing] = useState(false)
  if (missing) {
    return (
      <div className={`asset-missing ${className ?? ''}`} role="img" aria-label={alt}>
        <span>{src.replace('./', 'public/')}</span>
      </div>
    )
  }
  return (
    <img src={src} alt={alt} className={className} draggable={false} onError={() => setMissing(true)} />
  )
}

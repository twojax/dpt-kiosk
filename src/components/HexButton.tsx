import { PILL } from '../content'

interface Props {
  label: string
  x: number
  y: number
  active: boolean
  controls: string
  onPress: () => void
}

const { width: W, height: H, tip: T } = PILL
const S = 3
const I = S / 2
const HEX = `M${I},${H / 2} L${T},${I} H${W - T} L${W - I},${H / 2} L${W - T},${H - I} H${T} Z`

export function HexButton({ label, x, y, active, controls, onPress }: Props) {
  return (
    <button
      type="button"
      className="hex-button"
      data-active={active}
      aria-expanded={active}
      aria-controls={controls}
      style={{ left: x, top: y, width: W, height: H }}
      onClick={onPress}
    >
      <svg className="hex-shape" width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <path d={HEX} fill="url(#hexFill)" stroke="var(--navy)" strokeWidth={S} />
      </svg>
      <span className="hex-label">{label}</span>
      <span className="hex-plus" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </span>
    </button>
  )
}

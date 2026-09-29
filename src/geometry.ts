import { HUB, PILL, PANEL, type Section } from './content'

const rad = (deg: number) => (deg * Math.PI) / 180

export function nodePoint(angle: number) {
  return {
    x: HUB.cx + HUB.arcRadius * Math.cos(rad(angle)),
    y: HUB.cy + HUB.arcRadius * Math.sin(rad(angle)),
  }
}

/** Node → 45° elbow → left tip of the button. */
export function spokePath(s: Section) {
  const n = nodePoint(s.nodeAngle)
  const tipY = s.pill.y + PILL.height / 2
  const dy = tipY - n.y
  if (Math.abs(dy) < 1) return `M${n.x},${n.y} H${s.pill.x}`
  const elbowX = n.x + Math.abs(dy)
  return `M${n.x},${n.y} L${elbowX},${tipY} H${s.pill.x}`
}

/** Right tip of the button → edge of the detail panel. */
export function reachPath(s: Section) {
  const y = s.pill.y + PILL.height / 2
  return `M${s.pill.x + PILL.width},${y} H${PANEL.x}`
}

export function arcPath() {
  const a = nodePoint(-HUB.arcSpan)
  const b = nodePoint(HUB.arcSpan)
  return `M${a.x},${a.y} A${HUB.arcRadius},${HUB.arcRadius} 0 0 1 ${b.x},${b.y}`
}

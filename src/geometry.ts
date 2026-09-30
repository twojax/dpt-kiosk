import { PILL, type Hub, type HubPage, type Section } from './content'

const rad = (deg: number) => (deg * Math.PI) / 180

export function nodePoint(hub: Hub, angle: number) {
  return {
    x: hub.cx + hub.arcRadius * Math.cos(rad(angle)),
    y: hub.cy + hub.arcRadius * Math.sin(rad(angle)),
  }
}

/** Node → 45° elbow → left tip of the button. */
export function spokePath(hub: Hub, s: Section) {
  const n = nodePoint(hub, s.nodeAngle)
  const tipY = s.pill.y + PILL.height / 2
  const dy = tipY - n.y
  if (Math.abs(dy) < 1) return `M${n.x},${n.y} H${s.pill.x}`
  const elbowX = n.x + Math.abs(dy)
  return `M${n.x},${n.y} L${elbowX},${tipY} H${s.pill.x}`
}

/** Right tip of the button → edge of the detail panel. */
export function reachPath(panel: HubPage['panel'], s: Section) {
  const y = s.pill.y + PILL.height / 2
  return `M${s.pill.x + PILL.width},${y} H${panel.x}`
}

export function arcPath(hub: Hub) {
  const a = nodePoint(hub, -hub.arcSpan)
  const b = nodePoint(hub, hub.arcSpan)
  return `M${a.x},${a.y} A${hub.arcRadius},${hub.arcRadius} 0 0 1 ${b.x},${b.y}`
}

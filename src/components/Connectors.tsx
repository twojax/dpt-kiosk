import { STAGE, type HubPage } from '../content'
import { arcPath, nodePoint, reachPath, spokePath } from '../geometry'

/** The dashed arc, node dots and connector lines, drawn in stage pixels. */
export function Connectors({ page, open }: { page: HubPage; open: string | null }) {
  const { hub, panel, sections } = page
  return (
    <svg
      className="connectors"
      width={STAGE.width}
      height={STAGE.height}
      viewBox={`0 0 ${STAGE.width} ${STAGE.height}`}
      aria-hidden="true"
    >
      <defs>
        {/* Shared by every HexButton */}
        <linearGradient id="hexFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eeedf5" />
        </linearGradient>
      </defs>

      <path className="arc" d={arcPath(hub)} />

      {sections.map((s) => (
        <path key={`spoke-${s.id}`} className="spoke" d={spokePath(hub, s)} />
      ))}

      {sections.map((s) => (
        <path
          key={`reach-${s.id}`}
          className="reach"
          data-active={open === s.id}
          d={reachPath(panel, s)}
          pathLength={1}
        />
      ))}

      {sections.map((s) => {
        const n = nodePoint(hub, s.nodeAngle)
        return (
          <g key={`node-${s.id}`} className="node" data-active={open === s.id}>
            <circle cx={n.x} cy={n.y} r={22} className="node-ring" />
            <circle cx={n.x} cy={n.y} r={9} className="node-dot" />
          </g>
        )
      })}
    </svg>
  )
}

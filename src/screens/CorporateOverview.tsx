import type { ReactNode } from 'react'
import { BACKGROUND, CORPORATE_OVERVIEW, IDLE_TIMEOUT_MS, LOGO, type OverviewIcon } from '../content'
import { useIdle } from '../hooks/useIdle'
import {
  BackArrow, Customers, Facilities, Gears, Growth, Handshake, LabMicroscope, Network, People,
  Products, ViatrisMark,
} from '../components/Icons'
import { Logo } from '../components/Logo'

const ICONS: Record<OverviewIcon, ReactNode> = {
  microscope: <LabMicroscope />,
  gears: <Gears />,
  handshake: <Handshake />,
  people: <People />,
  growth: <Growth />,
  network: <Network />,
  viatris: <ViatrisMark />,
  products: <Products />,
  customers: <Customers />,
  facilities: <Facilities />,
}

export function CorporateOverview({ onHome }: { onHome: () => void }) {
  useIdle(IDLE_TIMEOUT_MS, onHome)
  const { timeline, milestones, stats } = CORPORATE_OVERVIEW
  const first = milestones[0].x
  const last = milestones[milestones.length - 1].x

  return (
    <div className="screen" data-page="corporateOverview">
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <button type="button" className="back-button" onClick={onHome}>
        <BackArrow />
        <span>Back to Homepage</span>
      </button>
      <h1 className="screen-title">{CORPORATE_OVERVIEW.title}</h1>
      <div
        className="timeline-line"
        style={{ left: first, top: timeline.lineY - 1.5, width: last - first }}
      />
      <ol className="timeline">
        {milestones.map((m) => (
          <li key={m.year}>
            <div
              className="overview-icon"
              style={{
                left: m.x - timeline.nodeSize / 2,
                top: timeline.lineY - timeline.nodeSize / 2,
                width: timeline.nodeSize,
                height: timeline.nodeSize,
              }}
            >
              {ICONS[m.icon]}
            </div>
            <div className="milestone-year" style={{ left: m.x - 100, top: timeline.yearY }}>
              {m.year}
            </div>
            <div
              className="milestone-card"
              style={{
                left: m.x - m.cardWidth / 2,
                top: timeline.cardY,
                width: m.cardWidth,
                height: timeline.cardHeight,
              }}
            >
              <strong>{m.title}</strong>
              {m.detail && <span>{m.detail}</span>}
            </div>
          </li>
        ))}
      </ol>

      <div
        className="stats-bar"
        style={{ left: stats.bar.x, top: stats.bar.y, width: stats.bar.width, height: stats.bar.height }}
      >
        {stats.dividers.map((x) => (
          <div key={x} className="stats-divider" style={{ left: x - stats.bar.x }} />
        ))}
        {stats.items.map((s) => (
          <div key={s.value} className="stat" data-small={s.small} style={{ left: s.x - stats.bar.x }}>
            <div className="overview-icon" style={{ width: stats.iconSize, height: stats.iconSize }}>
              {ICONS[s.icon]}
            </div>
            <div className="stat-text">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <Logo className="screen-logo" src={LOGO.small} />
    </div>
  )
}

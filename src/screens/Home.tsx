import { BACKGROUND, LOGO } from '../content'
import { Logo } from '../components/Logo'

export type Screen = 'home' | 'development' | 'semiSolids' | 'liquids' | 'aerosols' | 'analytics' | 'commercialSupply'

const LINKS: { screen: Screen; label: string }[] = [
  { screen: 'development', label: 'Development' },
  { screen: 'semiSolids', label: 'Semi-Solids' },
  { screen: 'liquids', label: 'Liquids' },
  { screen: 'aerosols', label: 'Aerosols' },
  { screen: 'analytics', label: 'Analytics' },
  { screen: 'commercialSupply', label: 'Commercial Supply' },
]

/** Stand-in homepage so the back button has somewhere to go. */
export function Home({ onOpen }: { onOpen: (screen: Screen) => void }) {
  return (
    <div className="screen screen-home">
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <h1 className="screen-title">Homepage</h1>
      {LINKS.map((link, i) => (
        <button
          key={link.screen}
          type="button"
          className="back-button home-link"
          style={{ top: 290 + i * 92 }}
          onClick={() => onOpen(link.screen)}
        >
          <span>{link.label}</span>
        </button>
      ))}
      <Logo className="screen-logo" src={LOGO.large} />
    </div>
  )
}

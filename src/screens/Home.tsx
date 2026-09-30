import { BACKGROUND, LOGO } from '../content'
import { Logo } from '../components/Logo'

export type Screen = 'home' | 'development' | 'semiSolids' | 'liquids'

/** Stand-in homepage so the back button has somewhere to go. */
export function Home({ onOpen }: { onOpen: (screen: Screen) => void }) {
  return (
    <div className="screen screen-home">
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <h1 className="screen-title">Homepage</h1>
      <button type="button" className="back-button home-link" onClick={() => onOpen('development')}>
        <span>Development</span>
      </button>
      <button type="button" className="back-button home-link home-link-2" onClick={() => onOpen('semiSolids')}>
        <span>Semi-Solids</span>
      </button>
      <button type="button" className="back-button home-link home-link-3" onClick={() => onOpen('liquids')}>
        <span>Liquids</span>
      </button>
      <Logo className="screen-logo" src={LOGO.large} />
    </div>
  )
}

import { BACKGROUND, HOME, LOGO, type Screen } from '../content'
import { Asset } from '../components/Asset'
import { HexButton } from '../components/HexButton'
import { Logo } from '../components/Logo'

export function Home({ onOpen }: { onOpen: (screen: Screen) => void }) {
  const { cards, overview } = HOME
  return (
    <div className="screen screen-home">
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <Logo className="home-logo" src={LOGO.large} />
      <h1 className="home-headline">{HOME.headline}</h1>

      {HOME.sections.map((s, i) => (
        <button
          key={s.screen}
          type="button"
          className="home-card"
          style={{
            left: cards.x + i * (cards.width + cards.gap),
            top: cards.y,
            width: cards.width,
            height: cards.height,
          }}
          onClick={() => onOpen(s.screen)}
        >
          <span className="home-card-label">{s.label}</span>
          <Asset className="home-card-image" src={s.image} alt="" />
        </button>
      ))}

      <HexButton
        className="hex-button-lg"
        label={overview.label}
        x={overview.x}
        y={overview.y}
        width={overview.width}
        height={overview.height}
        onPress={() => onOpen('corporateOverview')}
      />
    </div>
  )
}

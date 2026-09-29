import { useState } from 'react'
import { Stage } from './components/Stage'
import { Development } from './screens/Development'
import { Home } from './screens/Home'

type Screen = 'home' | 'development'

export default function App() {
  const [screen, setScreen] = useState<Screen>('development')

  return (
    <Stage>
      {screen === 'home' && <Home onOpen={setScreen} />}
      {screen === 'development' && <Development onHome={() => setScreen('home')} />}
    </Stage>
  )
}

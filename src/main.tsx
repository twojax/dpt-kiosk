import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import './styles.css'
import App from './App'

// Add ?kiosk to the URL on the show machine to hide the cursor.
if (new URLSearchParams(location.search).has('kiosk')) {
  document.documentElement.classList.add('kiosk')
}

// Block long-press context menus and pinch/gesture zoom on touchscreens.
window.addEventListener('contextmenu', (e) => e.preventDefault())
window.addEventListener('gesturestart', (e) => e.preventDefault())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

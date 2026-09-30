import {
  BACKGROUND, HOME, LOGO, aerosols, analytics, commercialSupply, development, liquids, semiSolids,
} from './content'

const pages = [development, semiSolids, liquids, aerosols, analytics, commercialSupply]

const urls = new Set([
  BACKGROUND,
  LOGO.small,
  LOGO.large,
  ...HOME.sections.map((s) => s.image),
  ...pages.flatMap((p) => [p.hub.photo, ...p.sections.map((s) => s.image)]),
])

// Held for the app's lifetime so the decoded images stay in the memory cache.
const images: HTMLImageElement[] = []

/** Fetches and decodes every image up front so screens open without a load pause. */
export function preloadImages() {
  for (const url of urls) {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
    img.decode().catch(() => {})
    images.push(img)
  }
}

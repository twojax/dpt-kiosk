import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so the build runs from any folder
// (or straight off disk) on the kiosk machine.
export default defineConfig({
  base: './',
  plugins: [react()],
})

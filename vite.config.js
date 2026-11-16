import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// GitHub Pages serves this site from /infinity-wave-music/
export default defineConfig({ base: '/infinity-wave-music/', plugins: [react()] })

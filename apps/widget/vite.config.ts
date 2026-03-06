import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'LESFeedback',
      fileName: 'widget',
      formats: ['iife'],
    },
    rollupOptions: {
      // Preact is bundled — no external deps for the end user
      external: [],
    },
    minify: true,
    target: 'es2018',
  },
})

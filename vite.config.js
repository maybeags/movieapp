// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    historyApiFallback: true, // 💡 이 옵션이 문제 해결의 핵심!
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/movieapp/', // 💥 GitHub Pages용 base 경로 설정
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
})

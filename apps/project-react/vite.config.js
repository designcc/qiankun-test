import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
// import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [qiankun('project-react', {
    useDevMode: true,
  })],
  server: {
    port: 8081
  }
})

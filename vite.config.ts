import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/test': {
        target: 'https://www.fastmock.site/',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path);
          return path.replace(/^\/test/, '')
        }
      },
      '/localTest': {
        target: 'https://localhost:8888/',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path);
          return path.replace(/^\/localTest/, '')
        }
      }
    }
  }
})

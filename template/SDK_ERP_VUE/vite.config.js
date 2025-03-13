import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

// 确保目录存在
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// 创建必要的目录
ensureDir('./html')
ensureDir('./css')
ensureDir('./js')

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'html/index.html')
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name].[ext]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `images/[name].[ext]`
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `css/webfonts/[name].[ext]`
          }
          return `js/[name].[ext]`
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
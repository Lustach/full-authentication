import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueTypeImports(),],
  server:{
    // host: true,
    // port: 3000,
    // open: true,
    // hmr: {
    //   port: 3010,
    // },
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    },
  },
})

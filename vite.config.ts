import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components','src/views'],
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
        })
      ]
    }),
  ],
})

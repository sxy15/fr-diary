import { defineConfig } from 'vite'
import pluginVue from '@vitejs/plugin-vue'
import pluginLayouts from 'vite-plugin-vue-layouts'
import pluginPages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import pluginVueRouter from 'unplugin-vue-router/vite'
import pluginComponents from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import path from 'node:path'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    pluginVue(),
    pluginLayouts(),
    pluginPages(),
    pluginVueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typings/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        '@vueuse/head',
        VueRouterAutoImports,
      ],
      dts: 'src/typings/auto-imports.d.ts',
    }),
    UnoCSS(),
    pluginComponents({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/typings/components.d.ts',
    })
  ],
})

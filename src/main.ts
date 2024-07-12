import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import autoRoutes from 'pages-generated'
import App from './App.vue'

// styles
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import './styles/index.scss'
import 'virtual:uno.css'

const routes = autoRoutes.map((route: {path: string}) => {
  return {
    ...route,
    alias: route.path.endsWith('/') ? `${route.path}index.html` : `${route.path}.html`
  }
})

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/` as auto imported
    Object.values(import.meta.glob<{ install: any }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  }
)
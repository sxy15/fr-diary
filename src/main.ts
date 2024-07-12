// src/main.ts
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import autoRoutes from 'pages-generated'
import App from './App.vue'

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
  }
)
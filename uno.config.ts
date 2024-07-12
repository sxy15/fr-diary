import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class'
    }),
    presetIcons(),
    presetAttributify(),
  ],
  theme: {
    colors: {}
  }
})
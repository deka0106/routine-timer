import { Plugin } from '@nuxt/types'

declare global {
  interface Window {
    onNuxtReady(callback: Function): void
  }
}

const storage: Plugin = ({ app }) => {
  window.onNuxtReady(() => {
    app.$accessor.load()
  })
}

export default storage

import { Plugin } from '@nuxt/types'
import { RootState } from '@/store'

declare global {
  interface Window {
    onNuxtReady(callback: Function): void
  }
}

const STORAGE_KEY = 'routine-timer'

const storage: Plugin = ({ app, store }) => {
  window.onNuxtReady(() => {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value !== null) {
      const state: RootState = JSON.parse(value)
      app.$accessor.replaceState(state)
    }
    store.subscribe(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store.state))
    })
  })
}

export default storage

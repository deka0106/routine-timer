import { Plugin } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'

declare global {
  interface Window {
    onNuxtReady(callback: Function): void
  }
}

const storage: Plugin = ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'routine-timer',
      paths: ['routines']
    })(store)
  })
}

export default storage

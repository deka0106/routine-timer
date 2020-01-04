import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  head: {
    title: 'ルーチンタイマー',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  typescript: { typeCheck: { eslint: true } },
  // plugins: ['@/plugins/storage'],
  build: {
    transpile: [/typed-vuex/]
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
    'nuxt-typed-vuex'
  ],
  modules: ['@nuxtjs/pwa', '@nuxtjs/dotenv'],
  vuetify: {
    customVariables: ['@/assets/scss/variables.scss'],
    defaultAssets: {
      font: {
        family: 'M PLUS Rounded 1c'
      },
      icons: 'fa'
    },
    theme: {
      themes: {
        light: {
          primary: '#3377FF'
        }
      }
    },
    treeShake: true
  }
}

export default config

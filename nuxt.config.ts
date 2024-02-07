// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  runtimeConfig: {
    tvmazeApi: {
      shows: process.env.SHOWS_URL,
      searchShow: process.env.SEARCH_SHOW_URL
    }
  },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/test-utils/module'
  ],
  ui: {
    icons: ['arcticons', 'heroicons']
  },
  image: {
    quality: 80,
    format: ['webp', 'jpg', 'jpeg']
  },
  
})

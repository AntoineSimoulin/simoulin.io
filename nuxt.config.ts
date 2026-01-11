// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'prismjs/themes/prism.css',
    'prismjs/plugins/line-numbers/prism-line-numbers.css',
    '@/assets/main.css'
  ],
  modules: [
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-CN3HGJDFD2'
  }
})

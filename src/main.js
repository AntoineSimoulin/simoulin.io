import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/main.css'
import "prismjs/themes/prism.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(VueGtag, {
  config: {
      id: 'G-CN3HGJDFD2',
  }
})
app.use(router)

app.mount('body')

import "bootstrap/dist/js/bootstrap.js"

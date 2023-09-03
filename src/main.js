import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '../assets/main.css'
import "prismjs/themes/prism.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const app = createApp(App)

app.use(router)

app.mount('body')

import "bootstrap/dist/js/bootstrap.js"

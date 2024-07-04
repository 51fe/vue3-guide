import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18nPlugin from './plugins/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})

app.mount('#app')

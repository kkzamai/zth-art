import './assets/main.css'
import 'bulma/css/bulma.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from './icons/fontawesome'

const app = createApp(App)
app.component('fa-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

import './bootstrap'
import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from "./route"

const app = createApp(App)


const vuetify = createVuetify()

app.use(router)
app.use(vuetify)
app.mount('#app')

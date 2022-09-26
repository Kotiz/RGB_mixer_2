import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'v-animate-css'
import 'animate.css'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(PrimeVue)

app.component('But-ton', Button)
app.component('Input-text', InputText)

createApp(App).use(store).use(router).mount('#app')

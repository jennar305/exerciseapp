import { createApp } from 'vue'
import 'bulma'
import '@fortawesome/fontawesome-free/css/all.css';

import { Notification, Config } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import App from './App.vue'
import router from './router'

createApp(App)
.use(Notification)
.use(Config, {
    iconPack: 'fas'
})
.use(router)
.mount('#app')

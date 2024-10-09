import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const vuetify = createVuetify({
  components,
  directives
})
let app
onAuthStateChanged(auth, () => {
  app = createApp(App)
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  app.use(pinia)
  app.use(router)
  app.use(vuetify)
  app.mount('#app')
})

// Components
// import App from './App.vue'

// createApp(App).use(vuetify).mount('#app')

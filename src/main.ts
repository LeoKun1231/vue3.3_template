import App from './App.vue'

import '@unocss/reset/normalize.css'
import 'uno.css'
import '~/assets/css/index.less'
import store from './store'
import router from './router'

createApp(App).use(store).use(router).mount('#app')

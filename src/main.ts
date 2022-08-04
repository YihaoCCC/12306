import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/index.js'
import 'element-plus/dist/index.css'
import { useElementPlus } from './ui-plugins/elementplus'
import { goIndex } from './utils/globalfun'




const app= createApp(App)
app.config.globalProperties.$goIndex = goIndex(router)
app.use(router)
useElementPlus(app)

app.mount('#app')

import App from './App'
import './utils/utils.js'
import { globalRegister } from './global'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // 全局统一注册
  app.use(globalRegister)
  return {
    app
  }
}
// #endif
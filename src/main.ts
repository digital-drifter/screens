import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
import './assets/main.styl'
import './registerServiceWorker'

Vue.use(Vuetify, {
  theme: {
    primary: '#4DB6AC',
    secondary: '#607D8B',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

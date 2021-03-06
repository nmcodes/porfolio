import Vue from 'vue'
import VueMeta from 'vue-meta'
import Cookies from 'js-cookie'

import App from './App.vue'
import router from './router'
import i18n from './lang'
import store from './store'

import '@/assets/styles/index.scss' // global css
import '@/assets/images/index' //for svg files

Vue.config.productionTip = false

Vue.prototype.handleEvent = new Vue()

Vue.use({
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueMeta)

new Vue({
  render: h => h(App),
  router,
  i18n,
  store,
  refreshOnceOnNavigation: true
}).$mount('#app')

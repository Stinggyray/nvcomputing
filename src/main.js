import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getStaticImage (image) {
      return this.$device.desktop ? `/static/${image}` : `file:./static/${image}`
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

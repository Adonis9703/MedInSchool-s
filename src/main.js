import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIo from 'vue-socket.io'
import socketIo from 'socket.io-client'
import {post, api} from './utils'
import {Toast, Button, Icon, Popup} from 'vant'

Vue.use(Toast)
Vue.use(Button)
Vue.use(Icon);
Vue.use(Popup)

// Vue.use(VueSocketIo, socketIo('http://localhost:3000'))

Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

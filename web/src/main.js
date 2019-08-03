import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Vuesax from 'vuesax'
import '@/assets/scss/main.scss'
import SidebarPlugin from './plugins/SidebarPlugin/index'
import NavItemPlugin from './plugins/NavItemPlugin/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/scss/style.scss";
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(SidebarPlugin)
Vue.use(NavItemPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

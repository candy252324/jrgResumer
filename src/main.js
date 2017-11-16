// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './international'
import { Button, Switch} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import Element from 'element-ui'
//Vue.use(Element)
Vue.use(Button)
Vue.use(Switch)


Vue.config.productionTip = false

Vue.config.lang = 'zh'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

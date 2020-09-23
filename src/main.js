import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/styles/index.scss'
import elHeightAdaptiveTable from '@/directive/el-table'
import elDragDialog from '@/directive/el-drag-dialog'
import CtToast from '@/components/Custom/Toast/index.js'
import ResetMessage from '@/components/Custom/ResetMessage'
import elStretchDialog from '@/directive/el-stretch-dialog'
Vue.config.productionTip = false
Vue.prototype.$restMessage = ResetMessage
Vue.use(Element, { size: 'small', locale })
Vue.use(elHeightAdaptiveTable)
Vue.use(elDragDialog)
Vue.use(elStretchDialog)
Vue.use(CtToast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

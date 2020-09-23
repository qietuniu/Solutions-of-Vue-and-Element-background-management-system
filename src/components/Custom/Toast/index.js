/*
 * @Author: qietuniu
 * @Date: 2020-06-15 10:52:04
 * @Last Modified by: qietuniu
 * @Last Modified time: 2020-06-15 11:02:50
 * @description: extend；$mount;appendChild;visible;数组；install注册必要。默认bind
 */

import Vue from 'vue'
import ToastComponent from './index.vue'
const ToastConstrustor = Vue.extend(ToastComponent)

let instance
const instances = []
let id = 0

const Toast = (options) => {
  //  Vue 实例是否运行于服务器
  if (Vue.prototype.$isServer) return
  // 字符串文字直接定义为message
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 继承ToastConstrustor的实例
  instance = new ToastConstrustor({
    data: options,
    id: 'toast_' + id++
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  instances.push(instance)
  return instance
}

// 使用形式this.$Toast.info{}
['success', 'error', 'info', 'warning'].forEach(type => {
  Toast[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Toast(options)
  }
})

Toast.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default {
  install(Vue) {
    Vue.prototype.$toast = Toast
    Vue.toast = Toast
  }
}

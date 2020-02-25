import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: { title: 'Home', icon: 'user', noCache: true },
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: { title: '滚动条', icon: 'user', noCache: true }
      },
      {
        path: 'ajustTable1',
        component: () => import('@/views/AjustTable1'),
        name: 'AjustTable1',
        meta: { title: '表格自适应flex', icon: 'user', noCache: true }
      }, {
        path: 'ajustTable2',
        component: () => import('@/views/AjustTable2'),
        name: 'AjustTable2',
        meta: { title: '表格自适应js', icon: 'user', noCache: true }
      }, {
        path: 'dragDialog',
        component: () => import('@/views/dialog/DragDialog'),
        name: 'DragDialog',
        meta: { title: '拖拽对话框', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'about', icon: 'user' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

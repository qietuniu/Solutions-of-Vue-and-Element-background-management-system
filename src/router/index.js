import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  meta: {
    title: '基础样式',
    icon: 'user',
    noCache: true
  },
  component: Layout,
  children: [{
    path: 'scrollBar',
    component: () => import('@/views/Home'),
    name: 'Home',
    meta: {
      title: '滚动条',
      icon: 'user',
      noCache: true
    }
  },
  {
    path: 'ajustTable1',
    component: () => import('@/views/AjustTable1'),
    name: 'AjustTable1',
    meta: {
      title: '表格自适应flex',
      icon: 'user',
      noCache: true
    }
  }
  ]
},
{
  path: '/customer',
  meta: {
    title: '自定义',
    icon: 'user',
    noCache: true
  },
  component: Layout,
  children: [{
    path: 'toast',
    component: () => import('@/views/custom/toast'),
    name: 'Toast',
    meta: {
      title: '消息提醒',
      icon: 'user',
      noCache: true
    }
  },
  {
    path: 'tree',
    component: () => import('@/views/custom/tree'),
    name: 'Tree',
    meta: {
      title: '树状图',
      icon: 'user',
      noCache: true
    }
  }, {
    path: 'ajustTable2',
    component: () => import('@/views/AjustTable2'),
    name: 'AjustTable2',
    meta: {
      title: '表格自适应js',
      icon: 'user',
      noCache: true
    }
  }, {
    path: 'dragDialog',
    component: () => import('@/views/dialog/DragDialog'),
    name: 'DragDialog',
    meta: {
      title: '拖拽对话框',
      icon: 'user',
      noCache: true
    }
  }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router

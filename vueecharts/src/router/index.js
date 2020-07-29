import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'world',
      component: () => import("@/components/world.vue"),//世界流向图
    },
    {
      path: '/lines',
      name: 'lines',
      component: () => import("@/components/lines.vue"),//折线科技图
    },
    {
      path: '/columnar',
      name: 'columnar',
      component: () => import("@/components/columnar.vue"),//柱状科技图
    },
    {
      path: '/rose',
      name: 'rose',
      component: () => import("@/components/rose.vue"),//玫瑰科技图
    },
  ]
})

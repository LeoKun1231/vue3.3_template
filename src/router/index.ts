import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('~/pages/main/main.vue'),
  },
  {
    path: '/login',
    component: () => import('~/pages/login/login.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('~/pages/not-found/not-found.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

/**
 * 进度条
 */
router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

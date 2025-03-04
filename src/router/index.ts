import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { h} from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', {style: 'color: red;'}, '404 Not Found')
    },
    {
      path: '/projects:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', {style: 'color: red;'}, '404 Projects Not Found')
    }
  ]
})

export default router

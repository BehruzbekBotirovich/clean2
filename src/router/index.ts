import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: import('@/layouts/DefaultLayout.vue'),
      children:[
        {
        path:'',
        name:'clean',
        component:import('@/views/page/MainPage.vue')
      }
    ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router

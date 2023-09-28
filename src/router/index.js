import { createRouter, createWebHistory } from 'vue-router'
import TiendaPage from '../views/TiendaPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tienda',
      component: TiendaPage
    },
    {
      path: '/car',
      name: 'carrito',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CarritoPage.vue')
    }
  ]
})

export default router

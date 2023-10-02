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

      component: () => import('../views/CarritoPage.vue')
    },
    {
      path: '/com',
      name: 'computed',
 
      component: () => import('../views/Computed.vue')
    }
  ]
})

export default router

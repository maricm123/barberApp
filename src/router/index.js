import { createRouter, createWebHistory } from 'vue-router'
import Zakazi from '../views/Zakazi.vue'
import Admin from '../views/Admin.vue'
import AdminBojana from '../views/AdminBojana.vue'
import AdminSanja from '../views/AdminSanja.vue'
import Login from '../views/Login.vue'
import Kontakt from '../views/Kontakt'
import Cenovnik from '../views/Cenovnik'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Zakazi',
    component: Zakazi
  },
  {
    path: '/cenovnik',
    name: 'Cenovnik',
    component: Cenovnik
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/adminSanja',
    name: 'AdminSanja',
    component: AdminSanja
  },
  {
    path: '/adminBojana',
    name: 'AdminBojana',
    component: AdminBojana
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

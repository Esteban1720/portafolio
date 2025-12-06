import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  // si más adelante quieres rutas separadas agrega aquí
]

export default createRouter({
  history: createWebHistory(),
  routes
})

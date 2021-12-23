import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import selectfriends from '../views/selectfriends'
import background from '../views/background'
import result from '../views/result'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/selectfriends',
    name: 'selectfriends',
    component: selectfriends
  },
  {
    path: '/background',
    name: 'background',
    component: background
  },
  {
    path: '/result',
    name: 'result',
    component: result
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

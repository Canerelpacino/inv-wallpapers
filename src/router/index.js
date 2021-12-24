import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import selectfriends from '../views/selectfriends'
import c1 from '../views/c1'
import c2 from '../views/c2'
import c3 from '../views/c3'
import c4 from '../views/c4'
import c1w1 from '../views/c1w1'
import c1w2 from '../views/c1w2'
import c1w3 from '../views/c1w3'
import c1w4 from '../views/c1w4'
import c2w1 from '../views/c2w1'
import c2w3 from '../views/c2w3'
import c2w4 from '../views/c2w4'
import c3w1 from '../views/c3w1'
import c3w2 from '../views/c3w2'
import c3w3 from '../views/c3w3'
import c4w1 from '../views/c4w1'
import c4w2 from '../views/c4w2'
import c4w3 from '../views/c4w3'
import c4w4 from '../views/c4w4'

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
    path: '/c1',
    name: 'c1',
    component: c1
  },
  {
    path: '/c2',
    name: 'c2',
    component: c2
  },
  {
    path: '/c3',
    name: 'c3',
    component: c3
  },
  {
    path: '/c4',
    name: 'c4',
    component: c4
  },
  {
    path: '/c1w1',
    name: 'c1w1',
    component: c1w1
  },
  {
    path: '/c1w2',
    name: 'c1w2',
    component: c1w2
  },
  {
    path: '/c1w3',
    name: 'c1w3',
    component: c1w3
  },
  {
    path: '/c1w4',
    name: 'c1w4',
    component: c1w4
  },
  {
    path: '/c2w1',
    name: 'c2w1',
    component: c2w1
  },
  {
    path: '/c2w2',
    name: 'c2w2',
    component: c1w2
  },
  {
    path: '/c2w3',
    name: 'c2w3',
    component: c2w3
  },
  {
    path: '/c2w4',
    name: 'c2w4',
    component: c2w4
  },
  {
    path: '/c3w1',
    name: 'c3w1',
    component: c3w1
  },
  {
    path: '/c3w2',
    name: 'c3w2',
    component: c3w2
  },
  {
    path: '/c3w3',
    name: 'c3w3',
    component: c3w3
  },
  {
    path: '/c3w4',
    name: 'c3w4',
    component: c1w3
  },
  {
    path: '/c4w1',
    name: 'c4w1',
    component: c4w1
  },
  {
    path: '/c4w2',
    name: 'c4w2',
    component: c4w2
  },
  {
    path: '/c4w3',
    name: 'c4w3',
    component: c4w3
  },
  {
    path: '/c4w4',
    name: 'c4w4',
    component: c4w4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

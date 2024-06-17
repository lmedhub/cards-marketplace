// src/router/index.ts
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
// import Login from '../views/Login.vue'
// import Profile from '../views/Profile.vue'
import TradeRequest from '../views/TradeRequest.vue'
import { RouteRecordRaw } from 'vue-router'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/profile', name: 'Profile', component: Profile },
  { path: '/trade-request', name: 'TradeRequest', component: TradeRequest },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

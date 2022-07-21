import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Overview from '../views/Overview.vue'
import Message from '../views/Message.vue'
import Profile from '../views/Profile.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: ':id',
        name: 'overview',
        component: Overview
      },
       {
        path: ':id',
        name: 'message',
        component: Message
      },
       {
        path: ':id',
        name: 'profile',
        component: Profile
      },
      {
        path: '/dashboard/setting',
        component: () => import('../views/Setting.vue')
       }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import DasboardView from '@/views/DasboardView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CategoryView from '@/views/CategoryView.vue'
import DetailCategory from '@/views/DetailCategory.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
// public
import PublicLayout from '@/layouts/PublicLayout.vue'
import LandingPage from '@/views/LandingPageView.vue'

import Category from '@/views/public/CategoryView.vue'
import Login from '@/views/public/LoginView.vue'
import Register from '@/views/public/RegisterView.vue'

// errors
import NotFound from '@/views/errors/NotFoundView.vue'
import { auth } from '@/config/firebase'

// import {  } from '../stores/AuthStore'

// const login = true

const requiredAuth = (to, from, next) => {
  const userAuthed = auth.currentUser
  // console.log('################# currentUser' + JSON.stringify(auth.currentUser))
  console.log('***************** userAuthed' + JSON.stringify(userAuthed))
  if (!userAuthed) {
    alert('Login dulu Bang......')
    next({
      name: 'Login'
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Dashboard
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requiredAuth,
      children: [
        {
          path: '',
          redirect: { name: 'Dashboard' }
        },
        {
          path: './', //hilangkan / nya
          name: 'Dashboard', //'Home',
          component: DasboardView
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ProfileView
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView
        },
        {
          path: 'category/:name',
          name: 'Category-name',
          component: DetailCategory
        }
      ]
    },

    // public route
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'LandingPage',
          component: LandingPage
        },
        {
          path: '/categoryPublic',
          name: 'CategoryPublic',
          component: Category
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router

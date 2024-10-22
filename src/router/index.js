import { createRouter, createWebHistory } from 'vue-router'
import DasboardView from '@/views/DasboardView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CategoryView from '@/views/CategoryView.vue'
import DetailCategory from '@/views/DetailCategory.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// News
import CreateNewsView from '@/views/news/CreateNewsView.vue'
import DetailNewsView from '@/views/news/DetailNewsView.vue'
import UpdateNewsView from '@/views/news/UpdateNewsView.vue'
import DetailNewsPublic from '@/views/public/news/DetailNewsPublic.vue'

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
  if (!userAuthed) {
    alert('Anda Belum Login .....!!!')
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
          path: 'news/create',
          name: 'CreateNews',
          component: CreateNewsView
        },
        {
          path: 'news/:id',
          name: 'DetailNews',
          component: DetailNewsView
        },
        {
          path: 'news/:id/edit',
          name: 'UpdateNews',
          component: UpdateNewsView
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
          name: 'Home',
          component: LandingPage
        },
        {
          path: '/news/:id',
          name: 'DetailPublicNews',
          component: DetailNewsPublic
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

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Communications from '../views/Communications.vue'
import Teaching from '../views/Teaching.vue'
import Blog from '../views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/Communications',
      name: 'Communications',
      component: () => import('../views/Communications.vue')
    },
    {
      path: '/Teaching',
      name: 'Teaching',
      component: () => import('../views/Teaching.vue')
    },
    {
      path: '/Blog',
      name: 'Blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/nlp-101',
      name: 'NLP',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/courses/nlp.vue')
    },
    {
      path: '/ml-101',
      name: 'ML',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/courses/ml.vue')
    },
    {
      path: '/coding-101',
      name: 'Coding',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/courses/coding.vue')
    }
  ]
})

export default router

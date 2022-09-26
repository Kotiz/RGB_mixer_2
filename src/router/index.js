import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
// import ErrorPage from '@/pages/ErrorPage.vue'
import ColorPage from '@/pages/ColorPage.vue'
import MyColorsPageVue from '@/pages/MyColorsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/color/:red/:green/:blue',
    name: 'Color',
    component: ColorPage
  },
  {
    path: '/myColors',
    name: 'MyColors',
    component: MyColorsPageVue
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRolesListPage from '@/pages/UserRolesListPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserRolesListPage',
    component: UserRolesListPage
  },
  {
    path: '/roles/:id',
    name: 'SingleRolePage',
    component: () => import(/* webpackChunkName: "post" */ '../pages/SingleRolePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

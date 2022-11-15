import Vue from 'vue'
import VueRouter from 'vue-router'
import VillageView from '../views/VillageView.vue'
import RecommendMoviesView from '../views/RecommendMoviesView.vue'
import MovieCardView from '../views/MovieCardView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/village',
    name: 'village',
    component: VillageView
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendMoviesView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieCardView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

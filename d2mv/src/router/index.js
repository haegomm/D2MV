import Vue from 'vue'
import VueRouter from 'vue-router'
import VillageView from '../views/VillageView.vue'
import RecommendMoviesView from '../views/RecommendMoviesView.vue'
import MovieCardView from '../views/MovieCardView.vue'
import AddMovieView from '../views/AddMovieView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'village',
    component: VillageView
  },
  {
    path: '/recommend/:id',
    name: 'recommend',
    component: RecommendMoviesView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieCardView
  },
  {
    path: '/add',
    name: 'add',
    component: AddMovieView
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

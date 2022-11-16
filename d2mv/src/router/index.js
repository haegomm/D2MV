import Vue from 'vue'
import VueRouter from 'vue-router'
import VillageView from '../views/VillageView.vue'
import RecommendMoviesView from '../views/RecommendMoviesView.vue'
import MovieCardView from '../views/MovieCardView.vue'


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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

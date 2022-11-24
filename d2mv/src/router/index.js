import Vue from 'vue'
import VueRouter from 'vue-router'
import VillageView from '../views/VillageView.vue'
import RecommendMoviesView from '../views/RecommendMoviesView.vue'
import MovieCardView from '../views/MovieCardView.vue'
import AddMovieView from '../views/AddMovieView.vue'
import PasswordView from '../views/PasswordView.vue'
import Top20MovieView from '../views/Top20MovieView.vue'
import MoviesView from '../views/MoviesView.vue'
import PopularMoviesView from '../views/PopularMoviesView.vue'
import NowPlayingMoviesView from '../views/NowPlayingMoviesView.vue'
// import LatestMoviesView from '../views/LatestMoviesView.vue'



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
    path: '/add/:id',
    name: 'add',
    component: AddMovieView
  },
  {
    path: '/password/:id',
    name: 'password',
    component: PasswordView
  },
  {
    path: '/top20',
    name: 'top20',
    component: Top20MovieView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularMoviesView
  },
  {
    path: '/nowplaying',
    name: 'nowplaying',
    component: NowPlayingMoviesView
  },
  // {
  //   path: '/latest',
  //   name: 'latest',
  //   component: LatestMoviesView
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

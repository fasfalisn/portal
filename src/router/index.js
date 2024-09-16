import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import ShowDetails from '../views/ShowDetails.vue';
import SearchResults from "@/views/SearchResults.vue";
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'show details',
    component: ShowDetails
  },
  {
    path: '/search/',
    name: 'search results',
    component: SearchResults
  },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import CounterPage from './components/CounterPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/counter',
    name: 'CounterPage',
    component: CounterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
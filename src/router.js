import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Jobs from './components/Jobs';
import Me from './components/Me';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    }
  ],
});

export default router;
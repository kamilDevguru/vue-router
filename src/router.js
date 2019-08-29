import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/view/Home';
import Blog from '@/view/Blog';
import Services from '@/view/Services';
import Contact from '@/view/Contact';
import Details from '@/view/Details';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: Details
    }
  ]
})

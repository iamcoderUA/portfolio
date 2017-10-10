import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const about = require('./components/about').default;
const blog = require('./components/blog').default;
const works = require('./components/works').default;

const routes = [
  { path: '/admin', component: about },
  { path: '/blog', component: blog },
  { path: '/works', component: works },

];

export default new VueRouter({ routes, mode: 'history' });

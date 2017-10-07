import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const about = require('./components/about').default;

const routes = [
  { path: '/', component: about },

];

export default new VueRouter({ routes, mode: 'history' });

/**
 * Created by panweiyan on 2017/4/20.
 */
require('babel-polyfill');
require('../../../assets/css/material.min.css');
require('../../../assets/js/material.min.js');
import Vue from 'vue';
import Router from 'vue-router';
import routers from 'router/index';
Vue.use(Router)
const routes = [
  {
   path: '/', component: routers.ShareResources,
   children: [
      {
        path: '',
        component: routers.ShareResourcesMain,
      },
     {
        path: 'buildfile',
        component: routers.ShareReBuildFile,
      },
      {
        path: 'detail',
        // component: routers.SharePostsComment,
        component: routers.SharePostsComment,
      },
      // {
      //   path: 'postslisttabs',
      //   component: routers.ShareListtabs,
      // },
    ]
  }
];
const router= new Router({
  routes
})
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})

import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/components/app/PageNotFound'
import Home from '@/components/PageHome'
import Category from '@/components/category/PageCategory'
import Forum from '@/components/forum/PageForum'
import ThreadShow from '@/components/thread/PageThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})

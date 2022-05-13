import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/components/app/PageNotFound'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/thread/PageThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

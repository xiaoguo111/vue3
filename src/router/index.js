import Vue from 'vue'
import VueRouter from 'vue-router'
import Ui from '@/views/ui'
import Contacts from '@/views/contacts'
import About from '@/views/about'
import All from '@/views/2/all'
import Alice from '@/views/2/alice'
import Bob from '@/views/2/bob'
import Blog from '@/views/3/blog'
import Fax from '@/views/3/fax'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        redirect: '/ui'
    }
    ,{
      path: "/ui",
      component: Ui
    },
    {
      path: "/contacts",
      component: Contacts,
      children:[
        {
            path:'all',
            component: All
        },
        {
            path:'alice',
            component: Alice
        },
        {
            path:'bob',
            component: Bob,
            children:[
                {
                    path:'blog',
                    component: Blog
                },
                {
                    path:'fax',
                    component:Fax
                }
            ]
        }
      ]
    },
    {
      path: "/about",
      component: About
    }
  ]
  const router = new VueRouter({ routes})
  new Vue({
    router
  })
  export default router
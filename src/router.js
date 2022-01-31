import Vue from 'vue'
import Router from 'vue-router'

const Blogs = () => import('@/views/Home.vue');
const Products = () => import('@/views/Products.vue');
const Contact = () => import('@/views/Contact.vue');
const Info = () => import('@/views/Info.vue');
const Profile = () => import('@/views/Profile.vue');
const Table = () => import('@/views/Table.vue');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },{
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ],
  mode: 'history'
})

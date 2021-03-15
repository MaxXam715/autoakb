import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {title: 'AUTO AKB | Интернет магазин'},

    component:()=>import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: {title: 'Каталог'},

    component:()=>import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }

  next();
})


export default router

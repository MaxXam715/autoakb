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
    meta: {title: 'Каталог товаров'},

    component:()=>import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {title: 'Товар'},

    component:()=>import(/* webpackChunkName: "Product-page" */ '../views/Product-page.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: {title: 'Новости'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  {
    path: '/news-article',
    name: 'news-article',
    meta: {title: 'Новость'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/News-article.vue')
  },
  {
    path: '/price-list',
    name: 'price-list',
    meta: {title: 'Прайс лист'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/price-list.vue')
  },
  {
    path: '/returnGoods',
    name: 'ReturnGoods',
    meta: {title: 'Обмен и возврат товара'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/ReturnGoods.vue')
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

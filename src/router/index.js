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
  },
  {
    path: '/DeliveryPayment',
    name: 'DeliveryPayment',
    meta: {title: 'Доставка и оплата'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/DeliveryPayment.vue')
  },
  {
    path: '/DeliveryPayment-Payment',
    name: 'DeliveryPayment-Payment',
    meta: {title: 'Доставка и оплата'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/DeliveryPayment-Payment.vue')
  },
  {
    path: '/guarantees',
    name: 'Guarantees',
    meta: {title: 'Гарантии'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/Guarantees.vue')
  },
  {
    path: '/wholesale',
    name: 'Wholesale',
    meta: {title: 'Оптом'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/Wholesale.vue')
  },
  {
    path: '/BatteryInstallation',
    name: 'BatteryInstallation',
    meta: {title: 'Установка АКБ'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/BatteryInstallation.vue')
  },
  {
    path: '/ChargingBattery',
    name: 'ChargingBattery',
    meta: {title: 'Зарядка АКБ'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/ChargingBattery.vue')
  },
  {
    path: '/DiagnosticsService',
    name: 'DiagnosticsService',
    meta: {title: 'Диагностика'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/DiagnosticsService.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    meta: {title: 'Контакты'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/Contacts.vue')
  },
  {
    path: '/MakingOrder',
    name: 'MakingOrder',
    meta: {title: 'Оформление заказа'},

    component:()=>import(/* webpackChunkName: "News" */ '../views/MakingOrder.vue')
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

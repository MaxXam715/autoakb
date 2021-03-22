<template>
  <div>


    <!--  Шапка  -->
    <header>

      <!-- ТОП-бар -->
      <HeaderTopBar/>

      <!--  Главная информация  -->
      <HeaderIndexInfo/>

      <!-- Навигация -->
      <HeaderNavigation/>

      <!-- Каталог товаров (меню) -->
      <HeaderCatalogNav/>

      <!-- Корзина -->
      <HeaderCart/>

    </header>
    <!--  Конец - Шапка  -->


    <!-- Форма обратного звонка -->
    <CallBack/>

    <!-- Форма "написать нам" -->
    <WriteToUs/>

  </div>
</template>

<script>

import CallBack from './modals/CallBack';
import WriteToUs from './modals/WriteToUs';
import HeaderTopBar from './HeaderTopBar';
import HeaderIndexInfo from './HeaderIndexInfo';
import HeaderNavigation from './HeaderNavigation';
import HeaderCart from './HeaderCart';
import HeaderCatalogNav from './HeaderCatalogNav';

export default {
  components:{
    CallBack,
    WriteToUs,
    HeaderTopBar,
    HeaderIndexInfo,
    HeaderNavigation,
    HeaderCart,
    HeaderCatalogNav
  }
}


</script>

<style lang="less" scoped>

</style>
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

    </header>
    <!--  Конец - Шапка  -->


    <!-- Форма обратного звонка -->
    <CallBack/>

    <!-- Форма "написать нам" -->
    <WriteToUs/>

    <!-- Мобильная нижняя навигация (Bottom Bar) -->
    <MobileBottomBar/>

    <!-- Мобильное боковое меню -->
    <MobileNavigation/>

    <!-- Корзина -->
    <HeaderCart/>

    <!-- Каталог товаров (меню) -->
    <HeaderCatalogNav/>

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
import MobileHeader from './Moblie/MobileHeader.vue';
import MobileBottomBar from './Moblie/MobileBottomBar.vue';
import MobileNavigation from './Moblie/MobileNavigation';

export default {
  components:{
    CallBack,
    WriteToUs,
    HeaderTopBar,
    HeaderIndexInfo,
    HeaderNavigation,
    HeaderCart,
    HeaderCatalogNav,
    MobileHeader,
    MobileBottomBar,
    MobileNavigation
  }
}


</script>

<style lang="less" scoped>

header {
  margin-bottom: 30px;
}

</style>
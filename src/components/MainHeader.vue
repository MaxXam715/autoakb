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

    <!-- Каталог товаров (меню) -->
    <HeaderCatalogNav/>

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

    <!-- МО Прием Б/У аккумуляторов -->
    <AcceptanceBatteries/>

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
import MobileHeader from './Moblie/MobileHeader';
import MobileBottomBar from './Moblie/MobileBottomBar';
import MobileNavigation from './Moblie/MobileNavigation';
import AcceptanceBatteries from './modals/AcceptanceBatteries';

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
    MobileNavigation,
    AcceptanceBatteries
  }
}


</script>

<style lang="less">

header {
  margin-bottom: 30px;
}

</style>
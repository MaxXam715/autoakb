<template>

  <!--  Мобильное меню ТОП-бар  -->
  <div class="mobile-top_bar flex-Gcenter-sb animate__animated">
    <img class="logo-mob" src="@/assets/img/logo.svg" alt="logo">
    <div class="button-menu-mob flex-center"><i class="icon mobBurger"></i></div>
  </div>
  <!--  Конец - Мобильное меню ТОП-бар  -->

</template>

<script>

import MegaMenu from './MegaMenu'
export default {
  components:{
    MegaMenu
  }
}

</script>

<style lang="less" scoped>

</style>
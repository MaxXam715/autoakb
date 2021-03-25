<template>

  <!--  Мобильное меню ТОП-бар  -->
  <div class="mobile-top_bar flex-Gcenter-sb animate__animated">
    <img class="logo-mob" src="@/assets/img/logo.svg" alt="logo">
    <div class="button-menu-mob flex-center sidenav-trigger waves-effect" data-target="MobileNav-modal-toggle"><i class="icon mobBurger"></i></div>
  </div>
  <!--  Конец - Мобильное меню ТОП-бар  -->

</template>

<script>

export default {
  name: "MobileHeader"
}

</script>

<style lang="less">

.mobile-top_bar {
  display: none !important;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  margin-bottom: 20px;
  background: #FFFFFF;
  box-shadow: 0px 0.9px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  z-index: 10;

  &.show-toggle {
    top: -70px;
    box-shadow: 0px 0.9px 30px rgba(0, 0, 0, 0);
  }

  img.logo-mob {
    width: 158px;
    height: auto;
    padding: 15px 0px 15px 20px;
  }

  .button-menu-mob {
    width: 70px;
    height: 70px;

    i {
      font-size: 30px;
    }
  }
}

</style>
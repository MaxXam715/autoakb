<template>
  <div id="app">

    <main-header/>
    <mobile-header/>
    <router-view/>
    <main-footer/>

  </div>

</template>



<script>

import MobileHeader from "@/components/Moblie/MobileHeader";
import MainHeader from "@/components/Header/MainHeader";
import MainFooter from "@/components/Footer/MainFooter";


// Скрипты JS / JQ
import 'jquery';
import onload from './assets/script.js';
import './assets/categories.js';


// Libraries
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery.maskedinput/src/jquery.maskedinput.js';


// Шрифты
import '@/assets/fonts/fonts.less';
// Иконки
import '@/assets/icons/icons.css';
// Стили
import '@/assets/less/main.less';
// Медиа
import '@/assets/less/media.less';


export default {
  components: {
    MobileHeader,
    MainFooter,
    MainHeader
  },
  mounted() {
    this.$nextTick(()=>{
      $(document).ready(onload);
    })
  }
}

</script>


<style lang="less">

</style>
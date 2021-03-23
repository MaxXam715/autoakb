<template lang="pug">
  #app
    mobile-header
    main-header
    router-view
    main-footer
</template>


<script>

import MobileHeader from "@/components/Moblie/MobileHeader";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

// Скрипты JS / JQ
import 'jquery';
import './assets/script.js';
import './assets/categories.js';

// Libraries
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'animate.css';
// import 'flickity/dist/flickity.min.css';
// import 'flickity/dist/flickity.pkgd.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery.maskedinput/src/jquery.maskedinput.js';



export default {
  components: {
    MobileHeader,
    MainFooter,
    MainHeader
  }
}

</script>


<style lang="less">
  @import "./assets/fonts/fonts";
  @import "./assets/less/main";
  @import "./assets/less/media";
  @import "./assets/icons/icons.css";
</style>


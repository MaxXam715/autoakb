<template lang="pug">
  #app
    main-header
    router-view
    main-footer
</template>

<script>





</script>

<script>

import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';


export default {
  components: {
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


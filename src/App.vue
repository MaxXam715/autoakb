<template lang="pug">
  #app
    main-header
    router-view
    main-footer
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
export default {
  components: {
    MainFooter,
    MainHeader
  }
}
</script>

<style lang="less">
  @import "./assets/less/main";
</style>
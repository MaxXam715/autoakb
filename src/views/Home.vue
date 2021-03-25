<template>
  <div>

    <!-- Слайдер и баннеры -->
    <HomeSliderBenners/>

    <!-- фильтр по подбору АКБ -->
    <HomefilterAkb/>


  </div>
</template>

<script>

import HomeSliderBenners from '@/components/HomeSliderBenners.vue';
import HomefilterAkb from '@/components/HomeFilterAkb.vue';

export default {
  components:{
    HomeSliderBenners,
    HomefilterAkb,
  }
}

</script>

<style lang="less">

</style>

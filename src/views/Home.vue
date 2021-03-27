<template>
  <div>

    <!-- Слайдер и баннеры -->
    <HomeSliderBenners/>

    <!-- фильтр по подбору АКБ -->
    <HomefilterAkb/>

    <!-- Услуги от магазина -->
    <ServicesFromStore/>


  </div>
</template>

<script>

import HomeSliderBenners from '@/components/HomeSliderBenners.vue';
import HomefilterAkb from '@/components/HomeFilterAkb.vue';
import ServicesFromStore from '@/components/ServicesFromStore.vue';

export default {
  components:{
    HomeSliderBenners,
    HomefilterAkb,
    ServicesFromStore
  }
}

</script>

<style lang="less">

</style>

<template>
  <div>

    <!-- Слайдер и баннеры -->
    <HomeSliderBenners/>

    <!-- фильтр по подбору АКБ -->
    <HomefilterAkb/>

    <!-- Услуги от магазина -->
    <HomeServicesFromStore/>

    <!-- О нас -->
    <HomeAboutUs/>


  </div>
</template>

<script>

import HomeSliderBenners from '@/components/Home/HomeSliderBenners.vue';
import HomefilterAkb from '@/components/Home/HomeFilterAkb.vue';
import HomeServicesFromStore from '@/components/Home/HomeServicesFromStore.vue';
import HomeAboutUs from '@/components/Home/HomeAboutUs.vue';

export default {
  components:{
    HomeSliderBenners,
    HomefilterAkb,
    HomeServicesFromStore,
    HomeAboutUs,
  }
}

</script>

<style lang="less">

</style>

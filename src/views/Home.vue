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

    <!-- Товары -->
    <HomeGoods/>

    <!-- Прием старых акб -->
    <HomeReceivingOldBatteries/>

    <!-- Новости -->
    <HomeNews/>


  </div>
</template>

<script>

import HomeSliderBenners from '@/components/Home/HomeSliderBenners.vue';
import HomefilterAkb from '@/components/Home/HomeFilterAkb.vue';
import HomeServicesFromStore from '@/components/Home/HomeServicesFromStore.vue';
import HomeAboutUs from '@/components/Home/HomeAboutUs.vue';
import HomeGoods from '@/components/Home/HomeGoods.vue';
import HomeReceivingOldBatteries from '@/components/Home/HomeReceivingOldBatteries.vue';
import HomeNews from '@/components/Home/HomeNews.vue';

export default {
  components:{
    HomeSliderBenners,
    HomefilterAkb,
    HomeServicesFromStore,
    HomeAboutUs,
    HomeGoods,
    HomeReceivingOldBatteries,
    HomeNews,
  }
}

</script>

<style lang="less">

</style>

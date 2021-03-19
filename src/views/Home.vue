<template>
  <div>

    <!-- Слайдер и баннеры -->
    <div class="block-slider-banners container">

      <!-- Слайдер -->
      <div class="maxSlid">
        <div class="owl-carousel">
          <div class="fixed-ar ar-4-1-slider">
            <div class="content" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
          </div>
        </div>
      </div>

      <!-- Баннеры справа -->
      <div class="banners">
        <img src="@/assets/img/banners/banner-1.png" alt="">
        <img src="@/assets/img/banners/banner-2.png" alt="">
      </div>


    </div>

    
  </div>
</template>

<script>


</script>

<style lang="less">


</style>

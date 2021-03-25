<template>

  <!-- Слайдер и баннеры -->
  <div class="block-slider-banners container marginB50">

    <!-- Слайдер -->
    <div class="maxSlid">
      <div class="fixed-ar ar-4-1-slider">
        <div class="content" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
      </div>
    </div>

    <!-- Баннеры справа -->
    <div class="banners">
      <img src="@/assets/img/banners/banner-1.png" alt="">
      <img src="@/assets/img/banners/banner-2.png" alt="">
    </div>


  </div>

</template>

<script>
export default {
  name: "HomeSliderBenners"
}
</script>

<style lang="less">


// Слайдер и баннеры
.block-slider-banners {
  display: grid;
  grid-template-columns: 11fr 5fr;
  grid-gap: 30px;
  height: 100%;

  .maxSlid {
    width: 100%;
    height: 100%;
    max-width: 1048px;
    max-height: 460px;
    overflow: hidden;
  }

  .fixed-ar {
    height: 100%;
  }

  .banners {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: auto;
      max-height: 215px;
      max-width: 460px;
      margin-bottom: 30px;
      object-fit: cover;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .owl-carousel,
  .owl-stage-outer,
  .owl-carousel .owl-stage,
  .owl-carousel.owl-drag .owl-item {
    height: 100%;
  }
}

@media (max-width: 700px) {
  .block-slider-banners {
    grid-template-columns: 1fr;
    grid-gap: 0;

    .banners {
      display: none;
    }
  }
}

</style>
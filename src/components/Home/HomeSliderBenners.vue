<template>

  <!-- Слайдер и баннеры -->
  <div class="block-slider-banners container marginB50">

    <!-- Слайдер -->
    <div class="slider-index">
      <owl-slider/>
      <div class="owl-nav-custom">
        <div class="owl-btn left"><i class="icon arrowLeft"></i></div>
        <div class="owl-btn right"><i class="icon arrowRight"></i></div>
      </div>
    </div>

    <!-- Баннеры справа -->
    <div class="banners">
      <router-link to="/Catalog" exact><img class="banner-2" src="@/assets/img/banners/banner-1.png" alt=""></router-link>
      <a href="#"><img class="banner-3" src="@/assets/img/banners/banner-2.png" alt=""></a>
    </div>


  </div>

</template>

<script>
import OwlSlider from "@/components/Home/OwlSlider.vue";
export default {
  components: {OwlSlider}
}
</script>

<style lang="less">

// Слайдер и баннеры

.block-slider-banners {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 460px;

  .slider-index {
    position: relative;
    width: 67.7%;
    overflow: hidden;

    .owl-nav-custom {
      opacity: 0;
      transition: all 0.2s;

      .owl-btn {
        position: absolute;
        top: calc(50% - 50px);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(8px);
        width: 100px;
        height: 100px;
        border-radius: 100px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        &.left {
          left: -50px;
          padding-left: 35px;
        }
        &.right {
          right: -50px;
          padding-right: 35px;
        }
      }

      i {
        background-color: #fff;
        font-size: 25px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      }
    }

    &:hover .owl-nav-custom {
      opacity: 1;
    }
  }

  .banners {
    display: flex;
    flex-direction: column;
    width: calc(32.3% - 30px);
    height: 100%;
    margin-left: 30px;

    a {
      line-height: 0;

      img {
        width: 100%;
        height: auto;
        max-height: 215px;
        max-width: 460px;
        object-fit: cover;
      }

    }

    .banner-3 {
      margin-top: 30px;
    }
  }

  .owl-carousel,
  .owl-stage-outer,
  .owl-carousel .owl-stage,
  .owl-carousel.owl-drag .owl-item {
    height: 100%;
  }

  .owl-carousel .owl-dots {
    position: absolute;
    bottom: 30px;
    right: 20px;

    button {
      background-color: rgba(255,255,255, 0.4);
      border-radius: 50px;
      width: 8px !important;
      height: 8px !important;
      margin-right: 10px;
      transition: all 0.2s;

      &.active {
        background-color: #fff;
        width: 24px !important;
      }
    }
  }

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-size: cover;
  }
  .box:before {
    content: "";
    display: block;
    margin-top: 100%; /* initial ratio of 1:1*/
  }

  /* Other ratios */

  .ratio-1_1:before {
    margin-top: 44.3%;
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
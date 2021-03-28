<template>

  <div class="owl-carousel carousel-akb">
    <div class="box ratio-1_1" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
    <div class="box ratio-1_1" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
    <div class="box ratio-1_1" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
    <div class="box ratio-1_1" :style="{'background-image': 'url(' + require('@/assets/img/slider/slider-img-1.png') + ')'}"></div>
  </div>

</template>

<script>
export default {
  mounted() {
    $(this.$el).owlCarousel({
      autoplay: true,
      autoplayTimeout: 2500,
      loop:true,
      margin:10,
      nav:true,
      dots: true,
      dotsEach: true,
      responsive:{
        0:{
          items:1
        }
      }
    })

    $('.owl-btn.right').click(function() {
      $(".carousel-akb .owl-next").click();
    });

    $('.owl-btn.left').click(function() {
      $(".carousel-akb .owl-prev").click();
    });
  }
}

</script>

<style lang="less">



</style>
<template>

  <div class="owl-carousel">
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
      $(".owl-carousel .owl-next").click();
    });

    $('.owl-btn.left').click(function() {
      $(".owl-carousel .owl-prev").click();
    });
  }
}



// $('.owl-nav-custom .right').click(function() {
//   $(".owl-carousel").trigger(".owl-carousel.next");
// });

</script>

<style scoped>

</style>
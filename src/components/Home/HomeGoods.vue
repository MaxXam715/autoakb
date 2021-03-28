<template>
  <div>

    <!-- Товары -->
    <div class="home-goods container">

      <!-- Табы -->
      <div class="tabs-goods flex-Vcenter">
        <a class="link-tab active waves-effect waves-light" href="#tabs-1">Лидеры продаж</a>
        <a class="link-tab waves-effect waves-light" href="#tabs-2">Популярные товары</a>
        <a class="link-tab waves-effect waves-light" href="#tabs-3">Новинки</a>
        <a class="link-tab waves-effect waves-light" href="#tabs-4">Акции</a>
      </div>

      <!-- Карусель -->
      <div class="owl-carousel goods-owl-carousel">

        <!-- Лидеры продаж -->
        <div data-hash="tabs-1">

          <div class="goods-grid">

            <div class="goods-item">
              <img class="photo-goods" src="@/assets/img/goods-1.png" alt="goods">
              <p class="category-title">Аккумулятор автомобильный</p>
              <p class="name-product">Аккумулятор Energizer EA70L3 12В 42Ач 540CCA</p>
              <div class="box-price">
                <div class="current-price">6 700 руб</div>
                <div class="exchange-price">5 800 руб с обменом</div>
              </div>
            </div>

          </div>

        </div>

        <div data-hash="tabs-2">222222</div>
        <div data-hash="tabs-3">333333</div>
        <div data-hash="tabs-4">444444</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    $('.goods-owl-carousel').owlCarousel({
      loop: false,
      margin:10,
      nav:false,
      dots: false,
      dotsEach: false,
      URLhashListener:true,
      autoplayHoverPause:true,
      mouseDrag: false,
      responsive:{
        0:{
          items:1
        }
      }
    })

    // Отметка активного таба
    $('.home-goods .link-tab').click(function () {
      $('.home-goods .link-tab').removeClass('active')
      $(this).addClass('active');
    })
  }
}
</script>

<style lang="less">

.home-goods {
  .tabs-goods {
    .link-tab {
      display: flex;
      padding: 15px 30px;
      background-color: var(--color-LightBlue);
      color: var(--color-gray);
      font-weight: bold;
      font-size: 16px;
      margin-right: 10px;
      margin-bottom: 30px;
      transition: all 0.2s;

      &.active {
        background-color: var(--color-red);
        color: #fff;
      }
    }
  }
}

</style>
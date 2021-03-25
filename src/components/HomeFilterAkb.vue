<template>
<div>

  <!-- Фильтр по подбору АКБ -->
  <div class="home-filter-akb container marginB50">

    <div class="what-is">
      <div class="title">
        <div class="text"><span class="uppercase"><span class="text-red">SMART</span> поиск</span><br>аккумулятора</div>
        <span class="secondary">как это работает?</span>
        <i class="icon arrowDown"></i>
      </div>
    </div>

    <div class="step">
      <p class="title">Выберите вид техники и её марку</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">01</p>
    </div>

    <div class="step">
      <p class="title">Сформируйте параметры для АКБ</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">02</p>
    </div>

    <div class="step">
      <p class="title">Поиск!</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">03</p>
    </div>

  </div>


  <div class="filter-akb container marginB50">

    <!-- Фото категории -->
    <div class="photo parameters owl-carousel" :style="{'background-image': 'url(' + require('@/assets/img/background-img-filter.png') + ')'}">
      <img data-hash="tabs-1" src="@/assets/img/category/category-1-akb.png" alt="">
      <img data-hash="tabs-2" src="@/assets/img/category/category-2-auto.png" alt="">
      <img data-hash="tabs-3" src="@/assets/img/category/category-3-moto.png" alt="">
      <img data-hash="tabs-4" src="@/assets/img/category/category-3-moto.png" alt="">
      <img data-hash="tabs-5" src="@/assets/img/category/category-3-moto.png" alt="">
    </div>

    <!-- Категория -->
    <div class="tabs-model" id="tabs-swipe-demo">
      <a href="#tabs-1" class="tab item-link">По параметрам аккумулятора<span>01</span></a>
      <a href="#tabs-2" class="tab item-link active">Авто<br>аккумуляторы<span>02</span></a>
      <a href="#tabs-3" class="tab item-link">Мото<br>аккумуляторы<span>03</span></a>
      <a href="#tabs-4" class="tab item-link">Грузовые<br>аккумуляторы<span>04</span></a>
      <a href="#tabs-5" class="tab item-link">Тяговые<br>аккумуляторы<span>05</span></a>
    </div>

    <!-- Параметры -->
    <div class="parameters owl-carousel">

      <div data-hash="tabs-1" class="slide-filter">1 слайд</div>
      <div data-hash="tabs-2" class="slide-filter active">
        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title">Автомобильные марки</p>
          <div class="search">
            <input type="text" placeholder="Поиск по марке">
            <i class="icon search"></i>
          </div>
        </div>

        <!-- Марки -->
        <div class="car-brand">
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="#" class="item"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>

        </div>
      </div>
      <div data-hash="tabs-3" class="slide-filter">Test 3</div>
      <div data-hash="tabs-4" class="slide-filter">Test 4</div>
      <div data-hash="tabs-5" class="slide-filter">Test 5</div>
    </div>

  </div>

</div>
</template>

<script>

export default {
  mounted() {
    $('.parameters.owl-carousel').owlCarousel({
      items:1,
      loop:false,
      margin:300,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 1,
    })

    $('.filter-akb .tabs-model .item-link').click(function () {
      $('.filter-akb .tabs-model .item-link').removeClass('active')
      $(this).addClass('active')
    })
  }
}


</script>

<style lang="less">

// Фильтр по подбору АКБ

.home-filter-akb {
  display: grid;
  grid-template-columns: minmax(0, 352px) minmax(0, 362px) minmax(0, 362px) minmax(0, 362px);
  align-items: center;
  grid-gap: 30px;

  .what-is {
    max-width: 352px;
    width: 100%;

    .title {
      display: flex;
      flex-direction: column;

      .text {
        color: #000;
        font-size: 30px;
        font-weight: bold;
        line-height: 30px;

        .uppercase {
          text-transform: uppercase;
          font-weight: 900;
        }

        .text-red {
          color: var(--color-red);
        }
      }

      .secondary {
        font-size: 18px;
        color: var(--color-gray);
      }

      .arrowDown {
        background-color: var(--color-red);
        font-size: 24px;
        margin-top: 18px;
      }
    }
  }

  .step {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
    height: 100%;
    max-height: 133px;
    padding: 30px;

    .title {
      font-size: 18px;
      font-weight: bold;
      max-width: 225px;
    }

    .description {
      font-size: 15px;
      color: var(--color-gray);
      margin-top: 10px;
    }

    .count {
      position: absolute;
      bottom: 10px;
      right: 20px;
      text-align: right;
      font-weight: bold;
      font-size: 35px;
      color: var(--color-red);
    }
  }
}


.filter-akb {
  display: grid;
  grid-template-columns: 360px 324px 1fr;
  border: 1px solid var(--color-LightBlue);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  max-height: 600px;

  .tabs-model {
    display: flex;
    flex-direction: column;

    .item-link {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      text-align: left;
      font-weight: bold;
      font-size: 20px;
      line-height: 22px;
      min-height: 120px;
      color: #000;
      padding-left: 30px;
      padding-right: 70px;
      background-color: var(--color-LightBlue);
      border-bottom: 1px solid var(--color-blackOpacity);
      transition: all 0.2s;

      &.active {
        background-color: #fff;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
        z-index: 3;

        &:before {
          position: absolute;
          top: 0;
          right: 0;
          content: '';
          width: 5px;
          height: 100%;
          background-color: var(--color-red);
          transition: all 0.2s;
        }

        span {
          color: var(--color-LightBlue);
        }
      }

      span {
        position: absolute;
        right: 30px;
        top: 0;
        display: flex;
        align-items: center;
        height: 100%;
        color: #fff;
        font-size: 40px;
        text-align: right;
        z-index: 1;
      }

    }
  }

  .photo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    overflow: hidden;
    height: 600px !important;

    img {
      position: absolute;
      top: 27%;
      right: 27px;
      margin-right: -200px;
      width: 125%;
      height: 400px;
      object-fit: contain;
    }
  }

  .parameters {
    overflow: hidden;
    height: 100%;
    width: 100%;

    .owl-stage-outer,
    .owl-stage,
    .owl-item {
      height: 100%;
    }

    .slide-filter {
      padding: 30px;
      padding-bottom: 0;
      height: 100%;

      .header {
        margin-bottom: 30px;

        .title {
          font-size: 25px;
          font-weight: bold;
        }

        .search {
          position: relative;
          margin: 0;

          input {
            font-family: 'bibi';
            height: 30px;
            color: #000;
            border-color: var(--color-gray);

            &::placeholder {
              color: var(--color-gray);
            }
          }

          i {
            position: absolute;
            top: 5px;
            right: 0;
            background-color: var(--color-gray);
          }
        }
      }

      .car-brand {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat( auto-fill, 88px);
        grid-column-gap: 5px;
        grid-row-gap: 15px;
        transition: all 0.2s;
        height: 500px;
        overflow-y: auto;
        overflow-x: hidden;

        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: max-content;
          border: 1px solid transparent;
          transition: all 0.2s;
          height: 88px;

          &:hover {
            border-color: var(--color-red);
          }
          &:hover .title-brand {
            color: #000;
          }

          img {
            width: 100%;
            height: 100%;
            height: auto;
            padding: 8px 15px;
            margin-bottom: 5px;
          }

          .title-brand {
            text-align: center;
            color: var(--color-gray);
            font-size: 13px;
            padding-bottom: 8px;
          }
        }

      }
    }
  }
}


</style>
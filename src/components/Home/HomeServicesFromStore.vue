<template>
<div>

  <div class="servicesFromStore container marginB50">

    <!-- Заголовок -->
    <div class="head-title-red flex-Vcenter marginB50">
      <p class="title">Услуги от магазина</p>
      <div class="line"></div>
    </div>

    <!-- Список услуг -->
    <div class="services-grid container-midle">

      <!-- Установка и замена аккумуляторов -->
      <a href="#" class="service-1 service-item">
        <div class="container-service">
          <div class="text-container">
            <p class="title">Установка и замена<br>аккумуляторов</p>
            <p class="hint">Доп подсказка к пункту или текст</p>
            <p class="link">Перейти <i class="icon arrowRight"></i> </p>
          </div>
          <img src="@/assets/img/service-img-1.png" class="img-photo" alt="img">
        </div>
      </a>

      <!-- Комплексная диагностика -->
      <a href="#" class="service-2 service-item">
        <div class="container-service">
          <div class="text-container">
            <p class="title">Комплексная<br>диагностика</p>
          </div>
          <img src="@/assets/img/service-img-2.png" class="img-photo" alt="img">
        </div>
      </a>

      <!-- Подбор аккумулятора -->
      <a href="#" class="service-3 service-item">
        <div class="container-service">
          <div class="text-container">
            <p class="title">Подбор<br>аккумулятора</p>
          </div>
          <img src="@/assets/img/service-img-3.png" class="img-photo" alt="img">
        </div>
      </a>

      <!-- Покупка старых аккумуляторов -->
      <a href="#" class="service-4 service-item">
        <div class="container-service">
          <div class="text-container">
            <p class="title">Покупка старых<br>аккумуляторов</p>
          </div>
          <img src="@/assets/img/service-img-4.png" class="img-photo" alt="img">
        </div>
      </a>

      <!-- Зарядка аккумулятора -->
      <a href="#" class="service-5 service-item">
        <div class="container-service">
          <div class="text-container">
            <p class="title">Зарядка<br>аккумулятора</p>
            <p class="hint">Доп подсказка к пункту или текст</p>
          </div>
          <img src="@/assets/img/service-img-5.png" class="img-photo" alt="img">
        </div>
      </a>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "ServicesFromStore"
}
</script>

<style lang="less">

.services-grid {
  display: grid;
  grid-gap: 30px;
  grid-template-areas: "service-1 service-1 service-1 service-5"
                       "service-2 service-3 service-4 service-5";
  grid-template-columns: repeat(3, 274px);
  grid-template-rows: repeat(2, 313px);

  .service-1 {
    grid-area: service-1;
    grid-column: 1/4;

    .container-service {
      flex-direction: inherit !important;
      padding: 40px !important;

      .img-photo {
        left: inherit !important;
        right: 0;
        max-width: 480px;
        height: 100%;
        max-height: inherit !important;
      }
    }
  }
  .service-2 {
    grid-area: service-2;
  }
  .service-3 {
    grid-area: service-3;
  }
  .service-4 {
    grid-area: service-4;
  }
  .service-5 {
    grid-area: service-5;

    .container-service {
      padding: 40px !important;
      overflow: hidden;

      .text-container {
        position: relative;
        z-index: 2;
      }

      .img-photo {
        position: relative;
        z-index: 2;
        max-height: inherit !important;
      }

      &:after {
        content: '';
        position: absolute;
        left: -32px;
        bottom: -96px;
        width: 564px;
        height: 328px;
        border-radius: 50%;
        background-color: var(--color-red);
        z-index: 1;
      }
    }
  }

  .service-item {


    .container-service {
      position: relative;
      background-color: #EFEFEF;
      width: 100%;
      height: 100%;
      padding: 30px;
      color: #000;
      transition: all 0.2s;

      &:hover {
        background-color: var(--color-LightBlue);
      }

      .text-container {
        height: 100%;
        display: flex;
        flex-direction: column;

        .title {
          font-weight: bold;
          font-size: 23px;
          color: #000;
        }

        .hint {
          font-size: 18px;
          color: var(--color-gray);
          margin-top: 20px;
        }

        .link {
          color: var(--color-red);
          font-weight: bold;
          font-size: 20px;
          margin-top: auto;

          i {
            font-size: 13px;
            background-color: var(--color-red);
          }
        }
      }

      .img-photo {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        max-height: 170px;
        object-fit: contain;
      }
    }
  }

}

</style>
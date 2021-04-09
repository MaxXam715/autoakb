<template>
  <div>

    <div class="container battery-installation-page">

      <!-- Хлебные крошки -->
      <div class="bread-crumbs">
        <a href="/" class="link">Главная</a>
        <a href="/" class="link">Услуги</a>
      </div>

      <div class="container-midle">

        <!-- Заголовок страницы -->
        <div class="header-name-page">
          <p class="title">Диагностика (Комплексная и выездная)</p>
        </div>

        <div class="content">

          <div class="left-col">
            <p class="description">С уважением относясь к клиентам нашего магазина, мы постоянно расширяем список услуг, предоставляемых нашей компанией покупателям.</p>
            <p class="description">Теперь в нашем магазине покупатели могут заказать комплексную диагностику электрооборудования автомобиля профессиональным тестером ОТС 3167 SABRE HP.</p>
          </div>

          <div class="right-col">
            <img src="@/assets/img/diagnostik-akb.png" alt="img">
          </div>

        </div>

        <div class="tabel-grid-akb">

          <div class="header-tabel">
            <p class="title-header">Модель автомобля</p>
            <p class="title-header text-center">Установка “полная” /руб.</p>
            <p class="title-header text-center">Установка “при обмене” /руб.</p>
          </div>

          <div class="body-tabel text-center-child nth-1n">

            <div class="row-tabel">
              <p class="title-row">Выездная диагностика</p>
              <p>Выездная</p>
              <p>600</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Замер утечки тока</p>
              <p>Выездная</p>
              <p>200</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Выезд специалиста</p>
              <p>Выездная</p>
              <p>600</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Комплексная диагностика</p>
              <p>Комплексная</p>
              <p>600</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Комплексная диагностика + выезд к заказчику</p>
              <p>Комплексная</p>
              <p>+ 400</p>
            </div>


          </div>

        </div>


      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "DiagnosticsService"
}
</script>

<style lang="less">

.battery-installation-page {

  .container-midle {

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      margin-top: 50px;

      .left-col {
        .description {
          font-size: 18px;
          margin-bottom: 30px;
          margin-top: 20px;
        }
      }

      .right-col {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .tabel-grid-akb {
      .header-tabel,
      .body-tabel .row-tabel {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
      }
    }
  }
}

</style>
<template>
<div>

  <div class="container charging-battery-page">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
      <a href="/" class="link">Услуги</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Зарядка АКБ</p>
      </div>

      <div class="content">

        <div class="top-content flex-Gcenter-sb">
          <p class="text">Хотите, чтобы аккумуляторная батарея Вашего автомобиля служила дольше? – Зарядите аккумулятор у профессионалов!</p>
          <img src="@/assets/img/energy-akb.png" alt="img">
        </div>

        <div class="bottom-content">
          <p class="header">Стоимость нестандартной замены АКБ</p>

          <div class="tabel-grid-akb">
            <div class="header-tabel">
              <p class="title-header">Емкость, Ач</p>
              <p class="title-header text-center">Размер, мм</p>
              <p class="title-header text-center">Стоимость /руб.</p>
            </div>
            <div class="body-tabel text-center-child nth-1n">

              <div class="row-tabel">
                <p class="title-row">35 - 45</p>
                <p>187 - 238 / 129 / 227</p>
                <p>400</p>
              </div>

              <div class="row-tabel">
                <p class="title-row">55 - 60</p>
                <p>232 - 242 / 175 / 190</p>
                <p>400</p>
              </div>

              <div class="row-tabel">
                <p class="title-row">70 - 77</p>
                <p>261 - 278 / 175 / 190</p>
                <p>600</p>
              </div>

              <div class="row-tabel">
                <p class="title-row">85 - 100</p>
                <p>315 - 353 / 175 / 190</p>
                <p>600</p>
              </div>

              <div class="row-tabel">
                <p class="title-row">100 - 110</p>
                <p>393 / 175 / 190</p>
                <p>800</p>
              </div>

              <div class="row-tabel">
                <p class="title-row">135 - 140</p>
                <p>513 / 189 / 240</p>
                <p>800</p>
              </div>

            </div>
          </div>

          <!-- Alert (оповещение) -->
          <div class="warning-alert container-midle">
            <i class="icon alert"></i>
            <p class="text">Продлите срок службы Вашего автомобильного аккумулятора – обратитесь к нам! Вы получите обновленную батарею по исключительно выгодной цене!</p>
          </div>

        </div>

      </div>


    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "ChargingBattery"
}
</script>

<style lang="less">

.charging-battery-page {
  .container-midle {
    .content {
      .top-content {
        .text {
          font-size: 18px;
          max-width: 600px;
          font-weight: 500;
        }
      }

      .bottom-content {
        > .header {
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .tabel-grid-akb {
          margin-bottom: 50px;

          .header-tabel,
          .body-tabel .row-tabel {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
      }
    }
  }
}

</style>
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
        <p class="title">Установка АКБ</p>
      </div>

      <div class="content">

        <div class="left-col">
          <p class="description">Наш специалист грамотно установит аккумулятор на Ваш автомобиль. В стандартную установку входит следующее:</p>
          <div class="grid-step">

            <div class="item">
              <p class="count">01</p>
              <div class="box-text">
                <p>Cнятие старого аккумулятора</p>
              </div>
            </div>

            <div class="item">
              <p class="count">02</p>
              <div class="box-text">
                <p>Установка нового АКБ (300 руб.)</p>
              </div>
            </div>

            <div class="item">
              <p class="count">03</p>
              <div class="box-text">
                <p>Зачистка и обработка клемм</p>
              </div>
            </div>

            <div class="item">
              <p class="count">04</p>
              <div class="box-text">
                <p>Утилизация старого аккумулятора</p>
              </div>
            </div>

          </div>

        </div>

        <div class="right-col">
          <img src="@/assets/img/install-akb.png" alt="img">
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
            <p class="title-row">Audi A4, A6, A8, Q5, TT</p>
            <p>600</p>
            <p>300</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Audi Q7</p>
            <p>1300</p>
            <p>1000</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Bentley</p>
            <p>1300</p>
            <p>1000</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">BMW 1, 3, 5, 6, 7, X1, X3, X4, X5, X6</p>
            <p>600</p>
            <p>300</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Cadillac CTS</p>
            <p>600</p>
            <p>300</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chrysler Sebring</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chrysler PT Cruiser</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chevrolet Trail Blazer</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Citroen DS4, C4, Berlingo II</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Dodge Journey</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Hyundai I20, I30, Equus</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Infiniti (все модели)</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Jaguar XK</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chrysler Sebring</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chrysler PT Cruiser</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Chevrolet Trail Blazer</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Citroen DS4, C4, Berlingo II</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Dodge Journey</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Hyundai I20, I30, Equus</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Infiniti (все модели)</p>
            <p>300</p>
            <p>450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Jaguar XK</p>
            <p>300</p>
            <p>450</p>
          </div>

        </div>

      </div>

      <!-- Alert (оповещение) -->
      <div class="warning-alert container-midle">
        <i class="icon alert"></i>
        <p class="text">Стоимость нестандартной установки (на автомобили, у которых аккумулятор расположен под передним сидением, под запаской в багажнике, под подкрылком, а также если требуется демонтировать кожухи и иные дополнительные элементы) - договорная, уточняйте у менеджера.</p>
      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "BatteryInstallation"
}
</script>

<style lang="less">

.battery-installation-page {
  .container-midle {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;

      .left-col {
        .description {
          font-size: 18px;
          margin-bottom: 30px;
        }

        .grid-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px;
          grid-row-gap: 10px;

          .item {

            .count {
              font-size: 60px;
              font-weight: bold;
              color: var(--color-LightBlue);
              margin-bottom: -23px;
              margin-left: 30px;
            }

            .box-text {
              background-color: var(--color-LightBlue);
              padding: 30px 25px;

              p {
                font-size: 18px;
                font-weight: 600;
                color: #000;
              }
            }
          }
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
      margin-top: 100px;
      margin-bottom: 50px;

      .header-tabel {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
      }

      .body-tabel {

        .row-tabel {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
        }
      }
    }
  }
}

</style>
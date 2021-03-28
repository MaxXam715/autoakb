<template>
  <div>

    <!-- О нас -->
    <div class="home-About-Us marginB50">

      <!-- Заголовок -->
      <div class="head-title-red flex-Vcenter container marginB50">
        <p class="title">О нас</p>
        <div class="line"></div>
      </div>


      <!-- Контент -->
      <div class="content-about-us container">
        <img class="background-image" src="@/assets/img/about-us-akb.png" alt="img">
        <img class="img-smoke" src="@/assets/img/cloud-smoke.png" alt="img">

        <div class="content-text">
          <p class="title"><span>AUTOAKB</span> - один из первых интернет-магазинов по акб</p>
          <p class="text">Аккумуляторы для отечественных и импортных авто всегда в наличии! Мы продаем, доставляем и устанавливаем аккумуляторные батареи для авто- и мототехники. Продажа аккумуляторов автомобильных, зарядных устройств</p>
          <div class="box-qualities">

            <div class="item flex-Vcenter">
              <i class="icon setting-2"></i>
              <p>Отличный<br>сервис</p>
            </div>

            <div class="item flex-Vcenter">
              <i class="icon guarantees"></i>
              <p>Качественный<br>товар</p>
            </div>

            <div class="item flex-Vcenter">
              <i class="icon search-2"></i>
              <p>Широкий<br>выбор</p>
            </div>

            <div class="item flex-Vcenter">
              <i class="icon quality"></i>
              <p>Гарантия<br>от 1 года</p>
            </div>

          </div>

          <div class="label-text">
            <p><span>Тысячи</span> довольных клиентов по России</p>
          </div>

        </div>

      </div>

      <div class="years-old container">НАМ 15 ЛЕТ</div>


    </div>

  </div>

</template>

<script>
export default {
  name: "HomeAboutUs"
}
</script>

<style lang="less">

.home-About-Us {
  position: relative;
  overflow: hidden;

  .years-old {
    color: #000;
    opacity: 0.05;
    font-size: 170px;
    font-weight: 800;
    text-align: right;
    margin-top: -65px;
  }

  .img-smoke {
    position: absolute;
    top: -65px;
    right: -400px;
    width: 100%;
    max-height: 650px;
    max-width: 654px;
    z-index: 3;
    opacity: 0.7;
    object-fit: contain;
  }

  .content-about-us {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .background-image {
      width: 100%;
      max-width: 513px;
      margin-right: -100px;
    }

    .content-text {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1000px;
      padding: 60px;
      background: #FFFFFF;
      box-shadow: -31px 10px 60px rgba(0, 0, 0, 0.08);

      > .title {
        color: #000;
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px;

        span {
          color: var(--color-red)
        }
      }

      .text {
        max-width: 675px;
        font-weight: 500;
        font-size: 15px;
        line-height: 162.8%;
        color: #9199A4;
        margin-bottom: 50px;
      }

      .box-qualities {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 100px;
        grid-row-gap: 30px;
        max-width: 430px;

        .item {
          i {
            font-size: 40px;
            background-color: var(--color-red);
            margin-right: 30px;
          }

          p {
            font-weight: 500;
            font-size: 15px;
          }
        }
      }

      .label-text {
        position: absolute;
        right: 150px;
        bottom: -20px;
        z-index: 2;
        width: 166px;
        height: 145px;
        padding: 20px;
        font-weight: 300;
        background-color: var(--color-red);

        p {
          color: #fff;
          font-size: 22px;

          span {
            font-weight: bold;
          }
        }
      }
    }
  }

}

</style>
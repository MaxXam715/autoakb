<template>
  <div>

    <!-- Прием старых акб -->
    <div class="Home-Receiving-Old-Batteries marginB50">
      <p class="title-stock container">акция</p>

      <div class="content-banner flex-Vcenter">
        <img class="left-photo" src="@/assets/img/receiving-akb.png" alt="">
        <div class="right-block" :style="{'background-image': 'url(' + require('@/assets/img/background-img-receiving.png') + ')'}">
          <p class="title">ПРИЁМ СТАРЫХ АККУМУЛЯТОРОВ ПО <span>ВЫГОДНЫМ ЦЕНАМ!</span></p>
          <p class="text">Собрались сдать старый автомобильный аккумулятор? – Сделайте это в наших магазинах на Лениногорской или на Электродной! <br> (45 руб за килограмм)</p>
          <a class="link flex-Vcenter waves-effect waves-light" href="#">Сдать свой аккумулятор <i class="icon arrowRight"></i></a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
name: "HomeReceivingOldBatteries"
}
</script>

<style lang="less">

.Home-Receiving-Old-Batteries {

  .title-stock {
    font-size: 100px;
    color: var(--color-LightBlue);
    text-transform: uppercase;
    font-weight: 900;
    text-align: right;
    padding-right: 170px;
    margin-bottom: -28px;
  }

  .content-banner {
    position: relative;

    .left-photo {
      position: absolute;
      top: 0;
      left: 8%;
      z-index: 2;
      width: 100%;
      max-width: 750px;
    }

    .right-block {
      width: 100%;
      max-width: 1240px;
      padding: 85px;
      padding-left: 375px;
      margin-left: auto;

      .title {
        font-size: 38px;
        font-weight: 800;
        color: #fff;
        max-width: 623px;

        span {
          color: var(--color-red);
        }
      }

      .text {
        color: var(--color-LightBlue);
        margin-top: 20px;
        margin-bottom: 50px;
        max-width: 623px;
      }

      .link {
        padding: 15px 20px;
        background-color: var(--color-red);
        width: max-content;
        color: #fff;
        font-weight: 600;

        i {
          background-color: #fff;
          margin-left: 15px;
        }
      }
    }
  }
}

</style>
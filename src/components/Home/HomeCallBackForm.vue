<template>
<div>

  <!-- Форма обратной связи -->
  <div class="home-CallBack-Form container">

    <div class="left-col flex-Gcenter-sb">
      <div class="content">
        <form action="">
          <p class="title">Задайте вопрос, уточните стоимость или закажите услугу прямо сейчас!</p>
          <div class="input-field">
            <input id="name" type="text" class="validate" placeholder="Ваше имя">
          </div>

          <div class="input-field">
            <input id="tel" type="tel" class="validate phone_4" placeholder="Номер телефона">
          </div>

          <div class="footer-form flex-Vcenter">
            <button class="send-form">Оставить заявку</button>
            <p class="hind">* Мы не передаем данные третьим лицам</p>
          </div>
        </form>
      </div>
      <img class="photo-master" src="@/assets/img/callBack-form-master.png" alt="img">
    </div>

    <div class="right-col">
      <p class="title">О нашем магазине</p>
      <p class="about-us">Аккумуляторы для отечественных и импортных авто всегда в наличии! Мы продаем, доставляем и устанавливаем аккумуляторные батареи для авто- и мототехники. Продажа аккумуляторов автомобильных, зарядных устройств и аксессуаров оптом и в розницу.</p>
      <div class="box-qualities">

        <div class="item flex-Vcenter">
          <i class="icon setting-2"></i>
          <p>Отличный сервис</p>
        </div>

        <div class="item flex-Vcenter">
          <i class="icon guarantees"></i>
          <p>Качественный товар</p>
        </div>

        <div class="item flex-Vcenter">
          <i class="icon search-2"></i>
          <p>Широкий выбор</p>
        </div>

        <div class="item flex-Vcenter">
          <i class="icon quality"></i>
          <p>Гарантия от 1 года</p>
        </div>

      </div>
    </div>

  </div>

</div>
</template>

<script>
export default {
  mounted() {

    $(".phone_4").mask("+7 (999) 999-99-99");

  }
}
</script>

<style lang="less">

.home-CallBack-Form {
  display: grid;
  grid-template-columns: 1fr minmax(0, 460px);
  grid-gap: 30px;
  margin-top: 150px;

  .left-col {
    align-items: flex-end;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1240px;
    max-height: 500px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 65vw;
      height: 100%;
      background-color: #F61019;
      opacity: .85;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 65vw;
      height: 100%;
      background-image: url('~@/assets/img/home-callBack-form.png');
      background-size: cover;
      background-repeat: no-repeat;
    }

    .content {
      position: relative;
      z-index: 2;
      padding: 68px 0;
      color: #fff;

      .title {
        font-size: 40px;
        line-height: 46px;
        font-weight: 800;
        margin-bottom: 25px;
        max-width: 503px;

      }

      form {

        .input-field {
          label {
            color: #fff;
          }
          input {
            font-family: 'bibi';
            font-weight: 500;
            width: 300px;
            border-bottom-color: #fff;
            height: 50px;
            color: #fff;
            padding: 0 20px;

            &:focus {
              border-bottom-color: #fff !important;
            }

            &::placeholder {
              color: #fff;
              font-weight: 400;
            }
          }

          input.valid:not(.browser-default) {
            border-bottom-color: #fff !important;
            box-shadow: none !important;
          }
        }

        .footer-form {
          .send-form {
            font-family: 'bibi';
            font-size: 16px;
            font-weight: bold;
            background-color: #fff;
            padding: 15px 30px;
            color: #000;
            border: none;
            cursor: pointer;
          }

          .hind {
            font-size: 14px;
            opacity: 0.6;
            max-width: 180px;
            margin-left: 15px;
          }
        }
      }
    }

    .photo-master {
      position: relative;
      z-index: 3;
      width: 380px;
      height: auto;
      margin-right: 10%;
      margin-bottom: -1px;
    }
  }

  .right-col {
    display: flex;
    flex-direction: column;
    background-color: var(--color-LightBlue);
    padding: 50px;

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .about-us {
      font-size: 15px;
      line-height: 24px;
      font-weight: 400;
      color: var(--color-gray);
    }

    .box-qualities {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      justify-content: center;
      margin-top: auto;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        i {
          font-size: 40px;
          background-color: var(--color-red);
          margin-bottom: 10px;
        }

        p {
          font-size: 15px;
          color: #000;
        }
      }
    }
  }
}

</style>
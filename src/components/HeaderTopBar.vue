<template>

  <div class="top-bar flex-Vcenter">
    <div class="container">

      <!-- Выбор города -->
      <div class="left-col select-city flex-Vcenter">

        <!-- Кнопка Select -->
        <i class="icon map"></i>
        <a class="dropdown-trigger select-btn" href="javascript:void(0);" data-target="dropdown1">
          <span>Санкт-Петербург</span>
          <i class="icon arrowDown"></i>
        </a>

        <!-- Выпадающий список -->
        <ul id='dropdown1' class='dropdown-content city'>
          <li><a class="link-city" href="javascript:void(0);">Москва</a></li>
          <li><a class="link-city active" href="javascript:void(0);">Санкт-Петербург <i class="icon dot"></i></a></li>
          <li><a class="link-city" href="javascript:void(0);">Доставка по России</a></li>
        </ul>

      </div>


      <!-- Сервисное меню -->
      <div class="service-menu flex-Vcenter">
        <a href="javascript:void(0);" class="link">Новости</a>
        <a href="javascript:void(0);" class="link">Акции и скидки</a>
        <a href="javascript:void(0);" class="link">Прайс</a>
        <a href="javascript:void(0);" class="link">Возврат товара</a>
        <a href="javascript:void(0);" class="link hide acceptance-batteries">Прием Б/У АКБ</a>
      </div>
      <!-- Конец - Сервисное меню -->


      <!-- Контакты и обратная связь -->
      <div class="right-col callback">

        <!-- Соц. сети -->
        <div class="social-link flex-Vcenter">
          <a class="flex-Vcenter" href="#"><i class="icon whatsapp"></i></a>
          <div class="line"></div>
          <a class="flex-Vcenter" href="#"><i class="icon instagram"></i></a>
        </div>

        <!-- Соц. сети -->
        <div class="contact-us flex-Vcenter">

          <!-- Написать нам -->
          <div class="link write flex-Vcenter sidenav-trigger" data-target="modal-toggle-WriteToUs">
            <i class="icon mailOpen"></i>
            <a href="#">Написать нам</a>
          </div>

          <div class="line"></div>

          <!-- Обратный звонок -->
          <div class="link write flex-Vcenter sidenav-trigger" data-target="modal-toggle-callBack">
            <i class="icon operator"></i>
            <a href="#">Обратный звонок</a>
          </div>

        </div>

      </div>
      <!-- Конец - Контакты и обратная связь -->


    </div>
  </div>

</template>

<script>
export default {
name: "HeaderTopBar"
}
</script>

<style lang="less" scoped>

// ТОП-бар

.top-bar {
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.07);
  overflow: hidden;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left-col {
    max-width: 193px;
    width: 100%;

    i.icon.map {
      background-color: var(--color-gray);
      margin-right: 10px;
      font-size: 20px;
    }

    .select-btn {

      span {
        color: var(--color-red);
        border-bottom: 1px dashed var(--color-red);
        width: max-content;
        font-weight: 500;
        padding-bottom: 1px;
      }

      i {
        margin-left: 10px;
        font-size: 10px;
        background-color: var(--color-gray);
      }

    }

    .dropdown-content {
      width: auto !important;
      padding: 10px 0;
      max-width: 275px;
      width: 100% !important;
      box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.2);

      li {
        min-height: initial;

        &:hover {
          background-color: var(--color-LightBlue);
        }

        .link-city {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #000;
          font-weight: 500;
          font-size: 15px;
          padding: 10px 30px;

          &:hover {
            background-color: initial;
          }

          &.active {
            color: var(--color-red);

            i {
              background-color: red;
            }
          }

          i {
            display: none;
            background-color: transparent;
            float: initial;
            font-size: 6px;
            margin: 0;
          }
        }
      }
    }
  }

  // Сервисное меню
  .service-menu {

    a {
      font-size: 14px;
      color: var(--color-gray);
      margin-right: 35px;
      transition: all 0.2s;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: var(--color-red);
      }
    }
  }
  // Конец - Сервисное меню


  // Контакты и обратная связь
  .right-col.callback {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    height: 100%;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -50vw;
      height: 100%;
      width: 50vw;
      z-index: 1;
      background-color: var(--color-LightBlue);
    }

    .contact-us {
      position: relative;
      padding-left: 25px;
      background-color: var(--color-LightBlue);
      height: 100%;
      margin-left: 40px;

      &:before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        max-height: 40px;
        border: 20px solid transparent;
        border-right: 0px solid var(--color-LightBlue);
        border-bottom: 40px solid var(--color-LightBlue);
      }



      .link {
        i {
          margin-right: 20px;
          font-size: 20px;
          background-color: var(--color-red);

          &.mailOpen {
            font-size: 24px;
          }
        }

        a {
          font-size: 14px;
          color: #000;
          font-weight: bold;
          border-bottom: 1px dashed var(--color-red);
          transition: all 0.2s;

          &:hover {
            color: var(--color-red);
          }
        }
      }

      .line {
        width: 1px;
        height: 20px;
        margin: 0 20px;
        background-color: rgba(0,0,0, 0.1);
      }
    }

    //  Соц. сети
    .social-link {

      i {
        font-size: 20px;
        background-color: var(--color-gray);

        &.whatsapp:hover {
          background-color: #0DC143;
        }

        &.instagram:hover {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        }
      }

      .line {
        width: 1px;
        height: 20px;
        margin: 0 20px;
        background-color: rgba(0,0,0, 0.1);
      }
    }

  }
  // Конец - Контакты и обратная связь
}

// Конец - ТОП-бар

</style>
<template>

  <div class="index-info">
    <div class="container flex-Gcenter-sb">

      <!-- Логотип -->
      <a class="logo-link flex" href="/">
        <img src="@/assets/img/logo.svg" alt="logo">
      </a>

      <!-- Поиск -->
      <div class="search">
        <input type="text" placeholder="Введите название, модель или артикул">
        <span class="flex-Vcenter"><i class="icon search"></i></span>
      </div>

      <!-- Контактная информация -->
      <div class="contact-block flex-Vcenter">

        <div class="number-or-adress flex-Vcenter">
          <!-- Телефон -->
          <div class="contact phone flex">
            <i class="icon phone"></i>
            <div class="info">
              <a class="index-text phone" href="tel:+7 (812) 401-63-62">+7 (812) 401-63-62</a>
              <p class="low-text">пн-пт 09:00-21:00<br>сб-вс 10:00-21:00</p>
            </div>
          </div>

          <!-- Адрес -->
          <div class="contact phone flex">
            <i class="icon map2"></i>
            <div class="info">
              <p class="index-text">Санкт-Петербург</p>
              <p class="low-text">просп. Энгельса, 145к1,<br>просп. Алекс. Фермы, 29ВГ</p>
            </div>
          </div>
        </div>

        <!-- Корзина -->
        <div class="cart-box flex-Vcenter sidenav-trigger waves-effect" data-target="slide-out">
          <div class="icon-cart flex-Vcenter">
            <i class="icon cart"></i>
            <p class="count-purchases flex-center">4</p>
          </div>
          <div>
            <p class="title">Корзина:</p>
            <p class="price">13 070 руб.</p>
          </div>
        </div>

      </div>

    </div>
  </div>
  
</template>

<script>
export default {
name: "HeaderIndexInfo"
}
</script>

<style lang="less">

header .index-info .container {
  display: flex;
  padding: 30px 0;

  .logo-link {
    img {
      max-width: 283px;
      min-width: 283px;
      width: 100%;
      height: auto;
      margin-right: 25px;
    }
  }

  .search {
    position: relative;
    width: 100%;
    max-width: 392px;

    input {
      width: calc(100% - 62px);
      height: 47px;
      border: 1px solid #CECECE;
      padding: 0px 10px;
      border-radius: 3px;
      margin: 0;
      font-family: 'Gilroy';
      font-weight: bold;
      font-size: 16px;
      padding-right: 50px;

      &:focus {
        box-shadow: none;
        border-bottom-color: var(--color-red);
      }

      &::placeholder {
        color: var(--color-gray);
        font-weight: 300 !important;
      }

    }

    span {
      content: '';
      position: absolute;
      top: 0;
      right: 20px;
      height: 49px;

      i {
        font-size: 16px;
        background-color: var(--color-gray);
      }
    }
  }

  // Контактная информация
  .contact {
    margin-left: 50px;


    i {
      background-color: var(--color-red);
      font-size: 25px;
      margin-top: 3px;
      margin-right: 15px;
    }

    .index-text {
      font-size: 16px;
      font-weight: bold;
      color: #000;
      margin-bottom: 1px;
      white-space: nowrap;
    }

    .low-text {
      font-size: 14px;
      color: var(--color-gray);
      line-height: 19px;
      white-space: nowrap;
    }
  }

  .cart-box {
    width: 196px;
    height: 74px;
    background-color: #fff;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-left: 50px;
    padding: 0px 23px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    }

    .icon-cart {
      position: relative;
      margin-right: 20px;

      i {
        font-size: 33px;
        background-color: var(--color-red);
      }

      .count-purchases {
        content: '';
        position: absolute;
        width: 22px;
        height: 22px;
        right: -10px;
        top: -9px;
        background: #FFFFFF;
        border-radius: 50px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
        font-weight: 500;
        font-size: 14px;
        color: var(--color-gray);
      }
    }

    .title {
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 2px;
    }

    .price {
      font-size: 14px;
      color: var(--color-gray);
    }
  }

}
// Конец - Главная информация


</style>
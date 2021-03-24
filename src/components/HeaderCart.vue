<template>

  <div class="sidenav toggle-cart cart-container" id="slide-out">

    <div class="left-col">

      <div class="header">
        <div class="flex-Vcenter closeBtn sidenav-close">
          <i class="icon arrowRight"></i>
          <p>Закрыть</p>
        </div>
      </div>

      <div class="title-cart flex-Gcenter-sb">
        <p class="title">Корзина покупок</p>
        <p class="count">4 товара</p>
      </div>

      <div class="tabel-grid">

        <div class="header">
          <p>Товар</p>
          <p>Кол-во</p>
          <p>Цена</p>
        </div>

        <div class="row">

          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Аккумулятор Odyssey PC1200 12В 42Ач 540CCA
              <div class="price">
                <span>3 400 руб.</span>
                <span class="old-price"></span>
                <select class="count browser-default">
                  <option value="">Кол-во: 1</option>
                  <option value="">Кол-во: 2</option>
                  <option value="">Кол-во: 3</option>
                </select>
              </div>
            </a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 400 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>

          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-2.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Аккумулятор ALPHALINE AGM 12В 42Ач 460 CCA
              <div class="price">
                <span>4 580 руб.</span>
                <span class="old-price"></span>
                <select class="count browser-default">
                  <option value="">Кол-во: 1</option>
                  <option value="">Кол-во: 2</option>
                  <option value="">Кол-во: 3</option>
                </select>
              </div>
            </a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 400 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>

          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-3.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Зарядное устройство для аккумулятора BS BATTERY BTX-9BS
              <div class="price">
                <span>3 990 руб.</span>
                <span class="old-price"></span>
                <select class="count browser-default">
                  <option value="">Кол-во: 1</option>
                  <option value="">Кол-во: 2</option>
                  <option value="">Кол-во: 3</option>
                </select>
              </div>
            </a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 400 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>


          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-4.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Жидкость для стеклоомывателя Gleid Master Blue, -30°c, 5 л
              <div class="price">
                <span>1 600 руб.</span>
                <span class="old-price"></span>
                <select class="count browser-default">
                  <option value="">Кол-во: 1</option>
                  <option value="">Кол-во: 2</option>
                  <option value="">Кол-во: 3</option>
                </select>
              </div>
            </a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 400 руб.<span>800 руб. за 1 шт</span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>

        </div>

      </div>

      <div class="total-price-mobile">
        <div class="price-result flex-Gcenter-sb">
          <p class="title">Итоговая стоимость</p>
          <p class="price">13 070 руб.</p>
        </div>
        <a href="#" class="flex-center go-shopping-cart waves-effect waves-light">Оформить заказ</a>
      </div>

    </div>


    <div class="right-col">
      <div class="title-cash">Кассовый чек</div>
      <div class="results">
        <div class="item flex-Gcenter-sb">
          <p class="title">Стоимость товаров</p>
          <p class="price">13 570 руб.</p>
        </div>

        <div class="item flex-Gcenter-sb">
          <p class="title">Скидки</p>
          <p class="price">500 руб.</p>
        </div>

        <div class="item flex-Gcenter-sb">
          <p class="title">Утилизация старого АКБ</p>
          <p class="price red-text">Добавить</p>
        </div>

        <div class="item promo-code flex-Gcenter-sb">
          <p class="title">Промо-код</p>
          <input type="text" placeholder="Введите код">
        </div>
      </div>

      <div class="total-price">
        <img  class="flex-center" src="@/assets/img/barcode.svg" alt="">
        <div class="price-result flex-Gcenter-sb">
          <p class="title">Итоговая стоимость</p>
          <p class="price">13 070 руб.</p>
        </div>
        <a href="#" class="flex-center go-shopping-cart waves-effect waves-light">Оформить заказ</a>
      </div>


    </div>

  </div>

</template>

<script>
export default {
name: "HeaderCart"
}
</script>

<style lang="less" scoped>

// Корзина

.toggle-cart {
  max-width: 1280px;
  width: 100%;
}

.cart-container {
  display: grid;
  grid-template-columns: 1fr 400px;

  .left-col {
    padding: 50px;
    padding-right: 60px;
    padding-bottom: 0;
    height: 100vh;

    .header {
      margin-bottom: 20px;

      .closeBtn {
        width: max-content;
        cursor: pointer;
        i {
          background-color: var(--color-red);
          font-size: 13px;
          margin-right: 18px;
        }
        p {
          color: var(--color-red);
          font-weight: 500;
          font-size: 18px;
        }
      }
    }

    .title-cart {
      margin-bottom: 50px;

      .title {
        font-weight: bold;
        font-size: 30px;
        color: #000;
      }

      .count {
        font-size: 20px;
        font-weight: bold;
        color: var(--color-gray);
      }
    }

    .tabel-grid {
      position: relative;
      overflow-y: auto;
      height: calc(100vh - 177px) !important;
      overflow-x: hidden;
      padding-right: 10px;

      .header {
        background: #fff;
        position: sticky;
        top: 0;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr minmax(100px, 140px) minmax(100px, 120px) 15px;
        grid-gap: 20px;
        color: var(--color-gray);
        padding-bottom: 20px;
        margin-bottom: 0;

        p {
          font-weight: 500;
          font-size: 16px;
        }
      }

      .row {
        .item {
          display: grid;
          grid-template-columns: 90px 1fr minmax(100px, 140px) minmax(100px, 120px) 15px;
          grid-gap: 20px;
          align-items: center;
          margin-bottom: 30px;

          img {
            width: 90px;
            height: 100%;
            max-height: 90px;
            max-width: 90px;
            object-fit: contain;
          }

          .nameProduct-link {
            width: 100%;
            font-size: 16px;
            color: #000;
            font-weight: 500;
            text-decoration: none;
            padding-left: 20px;
            transition: all 0.05s;

            > .price {
              display: none;
            }

            &:hover:not(.price) {
              color: var(--color-red);
            }
          }

          .count-btn {
            display: flex;
            align-items: center;

            i {
              font-size: 20px;
              background-color: var(--color-gray);
              cursor: pointer;

              &.active {
                background-color: #000;
              }

              &:active {
                transform: scale(0.97);
                background-color: #222;
              }
            }

            input {
              width: 30px;
              height: max-content;
              padding: 0;
              border: none !important;
              border-color: transparent !important;
              margin: 0 5px 0 5px;
              font-size: 18px;
              font-weight: 500;
              text-align: center;
            }

            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            input[type="number"] {
              -moz-appearance: textfield;
            }
            input[type="number"]:hover,
            input[type="number"]:focus {
              -moz-appearance: number-input;
            }

            input[type=number]::-webkit-inner-spin-button,
            input[type=number]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }

          > .price {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: bold;

            span {
              font-size: 14px;
              color: var(--color-gray);
              font-weight: 400;
              margin-top: 3px;
            }
          }

          .delete-item {
            cursor: pointer;

            i {
              font-size: 15px;

              &:hover {
                background-color: var(--color-red);
              }
            }
          }
        }
      }
    }

  }

  .right-col {
    display: flex;
    flex-direction: column;
    background-color: #EFEFEF;
    padding: 30px;

    .title-cash {
      margin-top: 57px;
      font-size: 30px;
      font-weight: bold;
    }

    .results {
      margin-top: 90px;

      .item {
        margin-bottom: 13px;

        .title {
          font-size: 16px;
          font-weight: 500;
        }

        .price {
          font-size: 16px;
          font-weight: bold;

          &.red-text {
            color: var(--color-red);
          }
        }

        &.promo-code {
          margin-top: 45px;

          .price {
            color: var(--color-red);
          }
        }

        input {
          width: 160px;
          border: none !important;
          height: auto;
          margin: 0;
          font-family: 'bibi';
          text-align: right;
          box-shadow: none !important;
          font-weight: 500;
          color: #000;

          &::placeholder {
            color: var(--color-gray);
            font-weight: 400;
          }
        }
      }
    }

    .total-price {
      margin-top: auto;

      img {
        margin: 0 auto;
      }

      .price-result {
        margin-top: 70px;
        margin-bottom: 30px;

        .title {
          font-size: 16px;
          font-weight: 500;
        }

        .price {
          font-size: 24px;
          font-weight: bold;
        }
      }

      .go-shopping-cart {
        font-size: 18px;
        font-weight: 600;
        background-color: var(--color-red);
        width: 100%;
        height: 50px;
        color: #fff;
      }
    }
  }
}

</style>
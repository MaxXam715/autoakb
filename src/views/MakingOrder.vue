<template>
<div>

  <div class="making-order container">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
      <a href="/" class="link">Корзина</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Корзина</p>
      </div>

      <div class="products-receipt">

        <div class="left-col">

          <!-- Список добавленых товаров в корзину -->
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

          <!-- Доп. услуги магазина -->
          <div class="may-useful">

            <!-- Заголовок -->
            <div class="head-title-red flex-Vcenter marginB50">
              <p class="title">Вам может пригодиться</p>
              <div class="line"></div>
            </div>

            <div class="goods-grid">

              <!-- Товар -->
              <div class="goods-item">
                <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/Leakage-measurement.png" alt="goods"></a>
                <p class="category-title">Услуги от магазина</p>
                <a href="javascript:void();" class="name-product">Измерение тока утечки <br><br></a>
                <div class="bottom-card flex-Gcenter-sb">
                  <div class="box-price">
                    <p class="current-price">200 руб</p>
                    <p class="exchange-price"></p>
                  </div>
                  <a href="javascript:void();" class="add-to-cart flex-center">
                    <p class="title">В корзину</p>
                    <div class="icon-box flex-center"><i class="icon cart"></i></div>
                  </a>
                </div>
              </div>


              <!-- Товар -->
              <div class="goods-item">
                <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/Diagnostics-equipment.png" alt="goods"></a>
                <p class="category-title">Услуги от магазина</p>
                <a href="javascript:void();" class="name-product">Диагностика электрооборудования</a>
                <div class="bottom-card flex-Gcenter-sb">
                  <div class="box-price">
                    <p class="current-price">300 руб</p>
                    <p class="exchange-price"></p>
                  </div>
                  <a href="javascript:void();" class="add-to-cart flex-center">
                    <p class="title">В корзину</p>
                    <div class="icon-box flex-center"><i class="icon cart"></i></div>
                  </a>
                </div>
              </div>


              <!-- Товар -->
              <div class="goods-item">
                <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/Installation-specialist.png" alt="goods"></a>
                <p class="category-title">Услуги от магазина</p>
                <a href="javascript:void();" class="name-product">Установка нашим специалистом</a>
                <div class="bottom-card flex-Gcenter-sb">
                  <div class="box-price">
                    <p class="current-price">600 руб</p>
                    <p class="exchange-price"></p>
                  </div>
                  <a href="javascript:void();" class="add-to-cart flex-center">
                    <p class="title">В корзину</p>
                    <div class="icon-box flex-center"><i class="icon cart"></i></div>
                  </a>
                </div>
              </div>

            </div>


          </div>

          <!-- Сдать старый акб -->
          <div class="disposing-old-battery">

            <!-- Заголовок -->
            <div class="head-title-red flex-Vcenter marginB50">
              <p class="title">Утилизация старого аккумулятора</p>
              <div class="line"></div>
            </div>


            <div class="tabel-grid-akb">

              <div class="body-tabel text-center-child nth-1n">

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 16 до 30 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 10 до 16 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 5 до 10 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 0 до 5 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 205 до 230 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 175 до 200 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 132 до 174 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 90 до 131 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 80 до 89 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 70 до 79 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p>от 55 до 69 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p> от 45 до 54 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

                <div class="row-tabel">
                  <p class="title-row">Емкость</p>
                  <p> от 35 до 44 Ач</p>
                  <a href="#">Добавить в заказ</a>
                </div>

              </div>

            </div>


          </div>

        </div>

        <div class="right-col">
          <div class="title-cash">Итог заказа</div>
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
              <p class="title">Прием Б/У АКБ</p>
              <a href="#modal-bu" class="price red-text modal-trigger">Добавить</a>
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
            <a href="/FinalOrderProcessing" class="flex-center go-shopping-cart waves-effect waves-light">Оформить заказ</a>
          </div>


        </div>

      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
name: "MakingOrder"
}
</script>

<style lang="less">

.making-order {

  .products-receipt {
    display: grid;
    grid-template-columns: 1fr 324px;
    grid-gap: 70px;

    .left-col {

      .tabel-grid {
        position: relative;
        padding-right: 10px;
        margin-bottom: 100px;

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

      .may-useful {
        margin-bottom: 100px;

        .goods-grid {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }

      .disposing-old-battery {

        .tabel-grid-akb {
          .body-tabel {

            .row-tabel {
              display: grid;
              grid-template-columns: 1fr 125px 1fr;

              p {
                border: none !important;

                &:not(.title-row) {
                  text-align: left;
                }
              }

              a {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin: 0;
                padding: 0;
                text-align: right;
                color: var(--color-red);
                font-weight: 600;
              }
            }
          }
        }
      }


    }

    .right-col {
      position: sticky;
      top: 20px;
      display: flex;
      flex-direction: column;
      background-color: #EFEFEF;
      padding: 30px;
      height: max-content;
      transition: all 0.2s;

      .title-cash {font-size: 30px;
        font-weight: bold;
      }

      .results {
        margin-top: 50px;

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
            margin-top: 50px;

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
        margin-top: 60px;

        img {
          width: 96px;
          height: auto;
          margin: 0 auto;
        }

        .price-result {
          margin-top: 30px;
          margin-bottom: 20px;

          .title {
            font-size: 14px;
            font-weight: 500;
          }

          .price {
            font-size: 20px;
            font-weight: bold;
          }
        }

        .go-shopping-cart {
          font-size: 16px;
          font-weight: 600;
          background-color: var(--color-red);
          width: 100%;
          height: 50px;
          color: #fff;
        }
      }
    }
  }
}

</style>
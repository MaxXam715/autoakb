<template>
  <div>

    <div class="final-order-processing container">

      <!-- Хлебные крошки -->
      <div class="bread-crumbs">
        <a href="/" class="link">Главная</a>
        <a href="/" class="link">Корзина</a>
      </div>

      <div class="container-midle">

        <!-- Заголовок страницы -->
        <div class="header-name-page">
          <p class="title">Оформление заказа</p>
        </div>

        <div class="products-receipt">

          <div class="left-col">

            <form action="">

              <!-- 1. Где и как вы хотите получить заказ? -->
              <div class="item-step">

                <!-- Заголовок -->
                <div class="head-title-red flex-Vcenter marginB50">
                  <p class="title">1. Где и как вы хотите получить заказ?</p>
                  <div class="line"></div>
                </div>

                <div class="grid-checkbox-label">

                  <label class="active">
                    <div class="contain pick-up_service_btn">
                      <i class="icon cardPackage"></i>
                      <div class="select-tab">
                        <p class="title">Самовывоз</p>
                        <p class="description">в наличии в <span>2 магазинах</span></p>
                      </div>
                      <input name="group1" type="radio" checked />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label>
                    <div class="contain delivery-btn">
                      <i class="icon carDelivery"></i>
                      <div class="select-tab">
                        <p class="title">Доставка</p>
                        <p class="description">Сегодня <span>от 300 руб.</span></p>
                      </div>
                      <input name="group1" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                </div>



              </div>

              <!-- 2. Выбрать адрес магазина -->
              <div class="item-step pick-up_service_tab">

                <!-- Заголовок -->
                <div class="head-title-red flex-Vcenter marginB50">
                  <p class="title">2. Выбрать адрес магазина</p>
                  <div class="line"></div>
                </div>

                <div class="grid-checkbox-label">

                  <label class="active">
                    <div class="contain">
                      <i class="icon map2"></i>
                      <div class="select-tab">
                        <p class="title">Проспект Энгельса, д.145, корп.1</p>
                      </div>
                      <input name="group2" type="radio" checked />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label>
                    <div class="contain">
                      <i class="icon map2"></i>
                      <div class="select-tab">
                        <p class="title">Проспект Александровской Фермы, д.29ВГ</p>
                      </div>
                      <input name="group2" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                </div>


                <div class="info-shop">

                  <!-- О магазине -->
                  <div class="contact-shop">
                    <!-- Адрес -->
                    <div class="item flex-Vcenter">
                      <i class="icon map2"></i>
                      <p class="text">Проспект Энгельса, д.145, корп.1</p>
                    </div>

                    <!-- Время -->
                    <div class="item flex-Vcenter">
                      <i class="icon clock"></i>
                      <p class="text">пн-пт 09:00-21:00 <br> сб-вс 10:00-21:00</p>
                    </div>

                    <!-- Телефон -->
                    <div class="item flex-Vcenter">
                      <i class="icon phone"></i>
                      <p class="text">+7 (812) 401-63-62</p>
                    </div>

                    <!-- Почта -->
                    <div class="item flex-Vcenter">
                      <i class="icon mailOpen"></i>
                      <p class="text">info@spb.autoakb.ru</p>
                    </div>

                    <div class="metro">
                      <p class="header">Ближайшее метро:</p>
                      <div class="item-metro flex-Vcenter">
                        <img src="@/assets/img/metro-spb.png" alt="">
                        <p class="text">Проспект Просвещения - <span>620м</span></p>
                      </div>
                      <div class="item-metro flex-Vcenter">
                        <img src="@/assets/img/metro-spb.png" alt="">
                        <p class="text">Парнас - <span>1,9 км</span></p>
                      </div>
                      <div class="item-metro flex-Vcenter">
                        <img src="@/assets/img/metro-spb.png" alt="">
                        <p class="text">Озерки - <span>2,4 км</span></p>
                      </div>
                    </div>

                  </div>

                  <div class="map-shop">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7f7f62fba42fc564614714cdf69021ac6c1b5cb163c9e6eb6f81429c070ad27&amp;source=constructor" width="100%" height="250" frameborder="0"></iframe>
                  </div>

                </div>



              </div>

              <!-- 2/2. Выбрать адрес магазина - если выбрана доставка! -->
              <div class="item-step delivery-tab">

                <!-- Заголовок -->
                <div class="head-title-red flex-Vcenter marginB50">
                  <p class="title">2. Адрес доставки</p>
                  <div class="line"></div>
                </div>

                <div class="form-grid">

                  <div class="grid-two-col">

                    <div class="item-input">
                      <label for="last_name">Область: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                    <div class="item-input">
                      <label for="last_name">Город: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                  </div>

                  <div class="grid-two-col">

                    <div class="item-input">
                      <label for="last_name">Улица: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                    <div class="item-input">
                      <label for="last_name">Дом/корпус: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                  </div>

                  <div class="grid-two-col">

                    <div class="item-input">
                      <label for="last_name">Квартира: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                  </div>

                  <div class="grid-two-col">

                    <div class="item-input">
                      <label for="last_name">Дата доставки: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                    <div class="item-input">
                      <label for="last_name">Время доставки: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                  </div>

                </div>

              </div>

              <!-- 3. Тип плательщика -->
              <div class="item-step">

                <!-- Заголовок -->
                <div class="head-title-red flex-Vcenter marginB50">
                  <p class="title">3. Тип плательщика</p>
                  <div class="line"></div>
                </div>

                <div class="grid-checkbox-label">

                  <label class="active">
                    <div class="contain">
                      <i class="icon simpleUser"></i>
                      <div class="select-tab">
                        <p class="title">Физическое лицо</p>
                        <p class="description">подсказка к пункту</p>
                      </div>
                      <input name="group3" type="radio" checked />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label>
                    <div class="contain">
                      <i class="icon LegalEntity"></i>
                      <div class="select-tab">
                        <p class="title">Юридическое лицо</p>
                        <p class="description">подсказка к пункту</span></p>
                      </div>
                      <input name="group3" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                </div>



              </div>

              <!-- 4. Оплата -->
              <div class="item-step">

                <!-- Заголовок -->
                <div class="head-title-red flex-Vcenter marginB50">
                  <p class="title">4. Оплата</p>
                  <div class="line"></div>
                </div>

                <div class="grid-checkbox-label">

                  <label class="active method-pay pay_1">
                    <div class="contain">
                      <i class="icon payCard"></i>
                      <div class="select-tab">
                        <p class="title">Онлайн оплата</p>
                        <p class="description">Банковской картой</p>
                      </div>
                      <input name="group4" type="radio" checked />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label class="method-pay pay_2">
                    <div class="contain">
                      <i class="icon payCard2"></i>
                      <div class="select-tab">
                        <p class="title">Картой в магазине</p>
                        <p class="description">Оплата картой в магазине</p>
                      </div>
                      <input name="group4" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label class="method-pay pay_3">
                    <div class="contain">
                      <i class="icon payMoney"></i>
                      <div class="select-tab">
                        <p class="title">Наличными в магазине</p>
                        <p class="description">Оплата наличными в магазине</p>
                      </div>
                      <input name="group4" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                  <label class="method-pay pay-courier" style="display: none">
                    <div class="contain">
                      <i class="icon payMoney"></i>
                      <div class="select-tab">
                        <p class="title">Курьеру</p>
                        <p class="description">Картой или наличными</p>
                      </div>
                      <input name="group4" type="radio" />
                      <span class="input-cirle"></span>
                    </div>
                  </label>

                </div>



              </div>

              <!-- 5. Покупатель -->
              <div class="item-step">
                <div class="user-buyer">

                  <!-- Заголовок -->
                  <div class="head-title-red flex-Vcenter marginB50">
                    <p class="title">5. Покупатель</p>
                    <div class="line"></div>
                  </div>

                  <div class="form-grid">

                    <div class="item-input">
                      <label for="last_name">ФИО: <span>*</span></label>
                      <input id="last_name" type="text" class="validate">
                    </div>

                    <div class="grid-two-col">

                      <div class="item-input">
                        <label for="last_name">Телефон: <span>*</span></label>
                        <input id="last_name" type="text" class="validate">
                      </div>

                      <div class="item-input">
                        <label for="last_name">E-Mail: <span>*</span></label>
                        <input id="last_name" type="text" class="validate">
                      </div>

                    </div>

                    <div class="grid-two-col">

                      <div class="item-input">
                        <label for="last_name">Область: <span>*</span></label>
                        <input id="last_name" type="text" class="validate">
                      </div>

                      <div class="item-input">
                        <label for="last_name">Город: <span>*</span></label>
                        <input id="last_name" type="text" class="validate">
                      </div>

                    </div>

                    <div class="item-input">
                      <label for="last_name">Телефон: <span>*</span></label>
                      <textarea></textarea>
                    </div>

                  </div>

                </div>
              </div>

            </form>

          </div>

          <div class="right-col">
            <div class="title-cash">Итог заказа</div>
            <div class="results">

              <div class="item flex-Gcenter-sb">
                <p class="title">Товаров в коризне</p>
                <p class="price">4</p>
              </div>

              <div class="item flex-Gcenter-sb">
                <p class="title">Доп. услуг</p>
                <p class="price">2</p>
              </div>

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
              <a href="/MakingOrder" class="flex-center go-shopping-cart waves-effect waves-light">Сделать заказ</a>
            </div>


          </div>

        </div>

      </div>
    </div>

  </div>
</template>


<script>
export default {
  mounted() {
    $('.grid-checkbox-label label').click(function () {
      $(this).parent('.grid-checkbox-label').find('label').removeClass('active');
      $(this).addClass('active');
    })

    $('.final-order-processing .item-step .delivery-btn').click(function () {
      $('.final-order-processing .delivery-tab').show();
      $('.final-order-processing .pick-up_service_tab').hide();
      $('.final-order-processing .method-pay.pay-courier').show();
      $('.final-order-processing .method-pay.pay_2, .final-order-processing .method-pay.pay_3').hide();
    })

    $('.final-order-processing .item-step .pick-up_service_btn').click(function () {
      $('.final-order-processing .delivery-tab').hide();
      $('.final-order-processing .pick-up_service_tab').show();
      $('.final-order-processing .method-pay.pay-courier').hide();
      $('.final-order-processing .method-pay.pay_2, .final-order-processing .method-pay.pay_3').show();
    })

  }
}
</script>

<style lang="less">

.final-order-processing {

  .products-receipt {
    display: grid;
    grid-template-columns: 1fr 324px;
    grid-gap: 70px;

    .left-col {

      form {
        .item-step {
          margin-bottom: 50px;

          &:last-child {
            margin-bottom: 0;
          }

          .head-title-red {
            margin-bottom: 50px;

            .title {
              font-size: 20px;
              font-weight: 600;
            }

            .line {
              background-color: var(--color-LightBlue);
            }
          }

          .grid-checkbox-label {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;

            label {
              color: inherit;
              font-size: inherit;
              cursor: pointer;

              &.active {

                .contain {
                  border-color: var(--color-red);

                  i {
                    background-color: var(--color-red);
                  }
                }
              }

              .contain {
                display: grid;
                grid-template-columns: 30px 1fr auto;
                grid-gap: 20px;
                background-color: #fff;
                border: 1px solid var(--color-gray);
                padding: 20px;

                i {
                  transition: all 0.2s;
                  font-size: 20px;
                  background-color: var(--color-gray);
                }

                .select-tab {
                  .title {
                    font-size: 18px;
                    font-weight: 600;
                  }

                  .description {
                    font-size: 16px;
                    color: var(--color-gray);

                    span {
                      color: #505050;
                    }
                  }
                }

                .input-cirle {
                  align-self: center;
                  padding: 0;
                  margin: 0;
                  width: 20px;
                  height: 20px;
                  margin-top: -4px;
                }
              }
            }

            [type="radio"]:not(:checked)+span:before {
              border: 2px solid var(--color-gray);
            }

            [type="radio"]:checked+span:after {
              background-color: #fff;
              border: 4px solid var(--color-red);
            }

          }

          .info-shop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            margin-top: 50px;

            .contact-shop {

              .item {
                margin-bottom: 15px;

                &:last-child {
                  margin-bottom: 0;
                }

                i {
                  font-size: 20px;
                  margin-right: 25px;
                  background-color: var(--color-red);
                }
                .text {
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }

            .metro {
              margin-top: 30px;

              .header {
                font-size: 19px;
                font-weight: bold;
                margin-bottom: 10px;
              }

              .item-metro {
                margin-bottom: 15px;

                &:last-child {
                  margin-bottom: 0;
                }

                img {
                  width: 20px;
                  height: 20px;
                  object-fit: contain;
                  margin-right: 25px;
                }
                .text {
                  font-size: 16px;
                  font-weight: 600;

                  span {
                    font-weight: 500;
                    color: var(--color-gray);
                  }
                }
              }
            }
          }

          .map-shop {
            height: max-content;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
          }
        }

        .form-grid {

          .item-input {
            margin-bottom: 20px;

            &:last-child {
              margin-bottom: 0;
            }

            label {
              font-size: 15px;
              color: var(--color-gray);

              span {
                color: var(--color-red);
                font-size: 20px;
                line-height: 0;
              }
            }

            input {
              border: 1px solid var(--color-blackOpacity);
              margin-top: 10px;
              padding: 0 20px;
              width: calc(100% - 40px);
            }

            textarea {
              border: 1px solid var(--color-blackOpacity);
              padding: 0 20px;
              height: 150px;
              resize: none;
              margin-top: 10px;
              margin-bottom: -6px;
            }
          }

          .grid-two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
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
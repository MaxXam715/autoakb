<template>
<div>

  <div class="container delivery-Payment">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
      <a href="javascript:void(0);" class="link">Доставка и оплата</a>
      <a href="javascript:void(0);" class="link">Доставка</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Доставка и оплата</p>
      </div>

      <div class="switch-link flex-Vcenter">
        <a href="/DeliveryPayment" class="btn-default-red active">Доставка</a>
        <a href="/DeliveryPayment-Payment" class="btn-default-red">Оплата</a>
      </div>

      <div class="content">

        <!-- Шапка -->
        <div class="header">
          <div class="left-col">
            <p class="title">Доставка товаров по Санкт-Петербургу и Ленинградской области</p>
            <p class="description">Мы готовы доставить Ваш заказ по нужному адресу. Доставка осуществляется в будние дни. При необходимости доставки в выходные дни это оговаривается отдельно.</p>
            <p class="description">Вы можете оплатить доставленный заказ и услуги по доставке как наличными, так и банковской картой (для физических лиц).</p>
            <p class="warning-red">* Курьер не принимает аккумуляторы, имеющие течь электролита</p>
          </div>
          <div class="right-col">
            <img src="@/assets/img/delivery.png" alt="img">
          </div>
        </div>

        <!-- Тарифы -->
        <div class="pricing-plans">
          <p class="title">Тарифы</p>

          <div class="grid-plans">

            <div class="item-plan">

              <!-- Цвет линии -->
              <div class="border-top red-line"></div>

              <!-- Тип доставки -->
              <div class="delivery-type">
                <p class="title">Тип доставки</p>
                <p class="description red-text">Дневная</p>
              </div>

              <!-- Цена доставки -->
              <div class="price">
                <p>250 <span>руб</span></p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="title">Время доставки:</p>
                <p class="description">в день заказа или другой день с 14:00 до 19:00</p>
              </div>

              <!-- Стоимость доставки -->
              <div class="delivery-info">
                <p class="title">Стоимость доставки:</p>
                <p class="description">Внутри КАД - 250 руб.</p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="description">Вне КАД - +25 руб./км от КАД</p>
              </div>

            </div>

            <div class="item-plan">

              <!-- Цвет линии -->
              <div class="border-top red-line"></div>

              <!-- Тип доставки -->
              <div class="delivery-type">
                <p class="title">Тип доставки</p>
                <p class="description red-text">Экспресс</p>
              </div>

              <!-- Цена доставки -->
              <div class="price">
                <p>Удвоенная <span>2x</span></p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="title">Время доставки:</p>
                <p class="description">в течение 2 часов (уточняйте возможность у менеджера)</p>
              </div>

              <!-- Стоимость доставки -->
              <div class="delivery-info">
                <p class="title">Стоимость доставки:</p>
                <p class="description">Внутри КАД - Удвоенная</p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="description">Вне КАД - +25 руб./км от КАД</p>
              </div>

            </div>

            <div class="item-plan">

              <!-- Цвет линии -->
              <div class="border-top green-line"></div>

              <!-- Тип доставки -->
              <div class="delivery-type">
                <p class="title">Тип доставки</p>
                <p class="description green-text">Бесплатная</p>
              </div>

              <!-- Цена доставки -->
              <div class="price green-back">
                <p>Бесплатная</p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="title">Время доставки:</p>
                <p class="description">при заказе свыше <span>30`000 руб.</span> с 12:00 до 18:00 по будням</p>
              </div>

              <!-- Стоимость доставки -->
              <div class="delivery-info">
                <p class="title">Стоимость доставки:</p>
                <p class="description">Внутри КАД - Бесплатно</p>
              </div>

              <!-- Время доставки -->
              <div class="delivery-info">
                <p class="description">Вне КАД - +25 руб./км от КАД</p>
              </div>

            </div>

          </div>
        </div>


        <!-- Карта -->
        <div class="delivery-map">

          <div class="box-proportion ratio16_9">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c6d54ad5c40ccf11c92bf2be3d084fe58a482219e95d9b72e0289c3da42a850&amp;source=constructor" width="100%"  frameborder="0"></iframe>
          </div>

          <div class="any-delivery">

            <div class="left-col">
              <p class="title">Любая доставка осуществляется до подъезда или автомобиля.</p>
              <p class="description">Доставка до квартиры или офиса оплачивается дополнительно</p>
            </div>

            <div class="right-col">
              <div class="item-card flex-Gcenter-sb">
                <div class="text">
                  <p class="title">+100 руб</p>
                  <p class="correction">при наличии лифта</p>
                </div>
                <i class="icon elevator"></i>
              </div>

              <div class="item-card flex-Gcenter-sb">
                <div class="text">
                  <p class="title">+50 руб <span>/этаж</span></p>
                  <p class="correction">без лифта</p>
                </div>
                <i class="icon ladder"></i>
              </div>
            </div>

          </div>

        </div>


      </div>

    </div>

  </div>

  <!-- Доставка по России -->
  <div class="delivery-in-Russia">
    <div class="container-midle">
      <p class="header">Доставка по России</p>

      <div class="content">
        <div class="left-col">
          <p class="index-text">Доставка в регионы России осуществляется за счёт Заказчика, при помощи транспортных компаний (до склада транспортной компании в городе Заказчика). Оплата за доставку производится Заказчиком при получении груза в соответствии с тарифами транспортной компании.</p>
          <p class="warning-text">Доставка до филиалов транспортных компаний - 300 руб. (при сумме заказа свыше 20`000 руб. - бесплатно)</p>

          <div class="couriers-card">

            <div class="item-card">
              <img class="couriers-logo" src="@/assets/img/courier-gel-dor.png" alt="img">
              <div class="info">
                <p class="title">Телефон</p>
                <p class="contact">+7 (495) 643-10-19</p>
              </div>
              <div class="info">
                <p class="title">Сайт</p>
                <a href="https://www.jde.ru/" target="_blank" class="contact link">https://www.jde.ru/</a>
              </div>
              <a href="https://i.jde.ru/rq/?rnd=67602243" target="_blank" class="flex-center calculate-delivery gel-dor">Рассчитать доставку</a>
            </div>

            <div class="item-card">
              <img class="couriers-logo" src="@/assets/img/courier-pek.png" alt="img">
              <div class="info">
                <p class="title">Телефон</p>
                <p class="contact">+7 (495) 660-11-11</p>
              </div>
              <div class="info">
                <p class="title">Сайт</p>
                <a href="https://pecom.ru/" target="_blank" class="contact link">https://pecom.ru/</a>
              </div>
              <a href="https://pecom.ru/services-are/shipping-request/" target="_blank" class="flex-center calculate-delivery pek">Рассчитать доставку</a>
            </div>

          </div>

          <p class="warning-hind">Внимание: доставка через транспортные компании заказа стоимостью менее 1`000 рублей не осуществляется.</p>
        </div>

        <div class="right-col">
          <img src="@/assets/img/delivery-in-Rus.png" alt="img">
        </div>
      </div>

      <!-- Alert (оповещение) -->
      <div class="warning-alert">
        <i class="icon alert"></i>
        <p class="text">Наш магазин несет ответственность за состояние товара, переданного транспортной компании. За состояние товара, передаваемого  получателю, ответственность несет транспортная компания. Поэтому убедительно просим проверять состояние аккумуляторов непосредственно при получении в транспортной компании.</p>
      </div>

    </div>
  </div>

  <!-- пример доставки -->
  <div class="delivery-Payment">
    <div class="example-delivery container-midle">
      <div class="example-grid">
        <div class="left-col">
          <img class="image-akb" src="@/assets/img/image-akb-delivery.png" alt="">
          <div class="parametrs flex-Gcenter-sb">
            <div class="item">
              <p class="title">15 кг</p>
              <p class="param">Масса</p>
            </div>
            <div class="item">
              <p class="title">Прямая [+-]</p>
              <p class="param">Полярность</p>
            </div>
            <div class="item">
              <p class="title">518 х 276 х 242 мм</p>
              <p class="param">Габариты</p>
            </div>
          </div>
        </div>
        <div class="right-col">
          <p class="title"><span>Пример расчета</span> стоимости <br>доставки</p>
          <p class="description">Дополнительно, по желанию Заказчика, возможно страхование груза <br> (1% стоимости товара) и доставка до двери.</p>

          <div class="step">
            <p class="count">01</p>
            <div class="text">
              <p class="title">Транспортная компания</p>
              <p class="description">Первая экспедиционная (ПЭК)</p>
            </div>
          </div>

          <div class="step">
            <p class="count">02</p>
            <div class="text">
              <p class="title">Доставка товара до филиала ПЭК</p>
              <p class="description">Бесплатно</p>
            </div>
          </div>

          <div class="step">
            <p class="count">03</p>
            <div class="text">
              <p class="title">Внимание</p>
              <p class="description">Стоимость обрешетки (жесткой упаковки) аккумулятора в Первой экспедиционной компании (ПЭК) – 150 рублей, в компании «Желдорэкспедиция» – 800 рублей. </p>
            </div>
          </div>

        </div>
      </div>


      <div class="tabel-grid-akb">
        <div class="header-tabel">
          <p class="title-header">Город доставки</p>
          <p class="title-header text-center">Стоимость доставки</p>
          <p class="title-header text-center">С учётом обрешётки</p>
        </div>
        <div class="body-tabel text-center-child nth-1n">

          <div class="row-tabel">
            <p class="title-row">Архангельск</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Барнаул</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Волгоград</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Екатеринбург</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Иркутск</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Краснодар</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Нижний Новгород</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Омск</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Ростов-на-Дону</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Тольятти</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

          <div class="row-tabel">
            <p class="title-row">Челябинск</p>
            <p class="">300</p>
            <p class="">450</p>
          </div>

        </div>
      </div>

    </div>
  </div>


  <!-- Alert (оповещение) -->
  <div class="warning-alert container-midle">
    <i class="icon alert"></i>
    <p class="text">В случае отказа от всех доставленных товаров по причинам, не связанным с качеством продукции, получатель оплачивает стоимость доставки (на основании п.3 ст. 497 ГК РФ).</p>
  </div>

  <div class="delivery-Payment">
    <div class="sales-products-samples container-midle">
      <p class="title">Статья 497 ГК РФ. продажа товаров по образцам</p>

      <div class="grid-products-samples">
        <div class="card-item">
          <p class="count">01</p>
          <p class="text">Договор розничной купли-продажи может быть заключен на основании ознакомления покупателя с образцом товара (его описанием, каталогом товаров и т.п.), предложенным продавцом.</p>
        </div>

        <div class="card-item">
          <p class="count">02</p>
          <p class="text">Покупатель до передачи товара вправе отказаться от исполнения договора розничной купли-продажи при условии возмещения продавцу необходимых расходов, понесенных в связи с совершением действий по выполнению договора.</p>
        </div>

        <div class="card-item">
          <p class="count">03</p>
          <p class="text">Если иное не предусмотрено законом, иными правовыми актами или договором, договор розничной купли-продажи товара по образцу считается исполненным с момента доставки товара в место, указанное в договоре, а если место передачи товара договором не определено, с момента доставки товара покупателю по месту жительства гражданина или месту нахождения юридического лица.</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "DeliveryPayment"
}
</script>

<style lang="less">

.delivery-Payment {

  .container-midle {

    .switch-link {
      margin-top: 30px;
    }

    .content {
      .header {
        display: grid;
        grid-template-columns: 1.3fr 2fr;
        align-items: center;
        grid-gap: 20px;
        margin-bottom: 100px;

        > .left-col {
          .title {
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .description {
            font-size: 16px;
            color: var(--color-gray);
            margin-bottom: 20px;
          }

          .warning-red {
            font-size: 14px;
            color: var(--color-red);
          }
        }

        > .right-col {
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .pricing-plans {

        > .title {
          font-size: 35px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 50px;
        }

        > .grid-plans {
          display: grid;
          grid-template-columns: repeat(3, minmax(100px, 300px));
          grid-gap: 30px;
          justify-content: center;
          margin-bottom: 50px;

          .item-plan {
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding-bottom: 40px;
            transition: all 0.2s;

            &:hover {
              box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
            }

            .border-top {
              width: 100%;
              height: 5px;
              background-color: #ccc;

              &.red-line {
                background-color: var(--color-red);
              }
              &.green-line {
                background-color: var(--color-green);
              }
            }

            .delivery-type {
              margin-top: 25px;
              margin-bottom: 20px;

              .title {
                font-size: 16px;
                color: var(--color-gray);
                margin-bottom: 7px;
              }

              .description {
                text-transform: uppercase;
                font-size: 20px;
                font-weight: 500;
              }
            }

            .price {
              padding: 30px;
              background: var(--background-gradient-black);
              margin-bottom: 40px;

              &.green-back {
                background: var(--color-green);
              }

              p {
                font-weight: bold;
                font-size: 35px;
                color: #fff;

                span {
                  font-weight: 400;
                }
              }
            }

            .delivery-info {
              margin: 0 30px;

              &:last-child {
                margin-bottom: 0;
                padding: 0;
                border-bottom: none;
              }
            }

            .delivery-info {
              border-bottom: 1px solid var(--color-blackOpacity);
              padding-bottom: 20px;
              margin-bottom: 20px;

              .title {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 10px;
              }

              .description {
                font-size: 15px;
                font-weight: 400;
                color: var(--color-gray);

                span {
                  font-weight: 600;
                }
              }
            }
          }
        }
      }

      .delivery-map {
        margin-bottom: 100px;

        .box-proportion {
          margin-bottom: 50px;
        }

        .any-delivery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px;

          .left-col {
            .title {
              font-size: 25px;
              font-weight: 600;
              margin-bottom: 10px;
            }

            .description {
              font-size: 16px;
              color: var(--color-gray);
            }
          }

          .right-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;

            .item-card {
              padding: 20px 0;
              border-top: 5px solid var(--color-red);
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

              .text {
                margin-left: 20px;

                .title {
                  font-size: 23px;
                  font-weight: bold;

                  span {
                    font-size: 16px;
                  }
                }

                .correction {
                  font-size: 16px;
                }
              }

              i {
                font-size: 50px;
                background-color: var(--color-red);
                margin-right: 30px;
              }
            }
          }
        }
      }
    }
  }
}

.delivery-in-Russia {
  position: relative;
  background-color: var(--color-LightBlue);
  padding: 50px 0;
  margin-bottom: 100px;

  .header {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 50px;

    .left-col {
      .index-text {
        font-size: 16px;
        line-height: 22px;
        color: var(--color-gray);
        margin-bottom: 20px;
      }

      .warning-text {
        font-size: 16px;
        line-height: 22px;
        color: var(--color-gray);
        font-weight: bold;
      }

      .couriers-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        margin-top: 50px;

        .item-card {
          padding: 30px;
          background: #FFFFFF;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;

          &:hover {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2w);
          }

          .couriers-logo {
            width: 100%;
            height: 47px;
            object-fit: contain;
            margin-bottom: 50px;
          }

          .info {
            margin-bottom: 22px;
            .title {
              font-size: 14px;
              color: var(--color-gray);
              border-bottom: 1px solid var(--color-blackOpacity);
              padding-bottom: 7px;
              margin-bottom: 7px;
              font-weight: 600;
            }

            .contact {
              font-weight: 500;
              font-size: 16px;
              color: #000;

              &.link {
                &:hover {
                  color: var(--color-red);
                }
              }
            }
          }

          .calculate-delivery {
            font-size: 16px;
            font-weight: bold;
            padding: 10px 0;
            text-align: center;
            color: #fff;

            &.gel-dor {
              background-color: #E6342A;
            }

            &.pek {
              background-color: #242265;
            }
          }
        }
      }

      .warning-hind {
        font-size: 15px;
        color: var(--color-red);
        font-style: italic;
        margin-top: 30px;
      }
    }

    .right-col {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.delivery-Payment {
  margin-bottom: 50px;

  .example-delivery {
    .example-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      margin-bottom: 50px;

      .left-col {
        .image-akb {
          width: 100%;
          height: auto;
          object-fit: contain;
          margin-bottom: 50px;
        }

        .parametrs {
          padding: 0 20px;

          .item {
            .title {
              font-size: 20px;
              font-weight: 600;
            }

            .param {
              font-size: 14px;
              color: var(--color-gray);
            }
          }
        }
      }

      .right-col {
        > .title {
          font-size: 35px;
          font-weight: bold;
          margin-bottom: 20px;

          span {
            color: var(--color-red);
          }
        }

        > .description {
          color: var(--color-gray);
          font-size: 16px;
          margin-bottom: 30px;
        }

        .step {
          display: flex;
          margin-bottom: 30px;

          .count {
            margin-right: 40px;
            font-weight: 900;
            font-size: 70px;
            color: var(--color-LightBlue);
          }

          .text {

            .title {
              margin-top: 20px;
              font-size: 19px;
              font-weight: 600;
              margin-bottom: 5px;
            }

            .description {
              font-size: 15px;
              color: var(--color-gray);
            }

          }
        }
      }
    }
  }

  // Таблица

  .tabel-grid-akb {
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

.delivery-Payment {
  .sales-products-samples {
    margin-top: 100px;

    .title {
      font-size: 35px;
      font-weight: bold;
      margin-bottom: 50px;
    }

    .grid-products-samples {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;

      .card-item {
        border-top: 5px solid var(--color-red);
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        padding: 30px;
        height: max-content;

        .count {
          font-size: 70px;
          font-weight: 900;
          color: var(--color-LightBlue);
        }

        .text {
          font-size: 15px;
          font-weight: 500;
          padding-left: 20px;
        }
      }
    }

  }
}

</style>
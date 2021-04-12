<template>
<div>

  <div class="container contacts-page">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Контакты в <span>Санкт-Петербурге</span></p>
      </div>

      <div class="content">

        <div class="tabs-streets flex-Vcenter">
          <a href="#shop-1" class="btn-default-red active">проспект Энгельса</a>
          <a href="#shop-2" class="btn-default-red">проспект Александровской Фермы</a>
        </div>

        <div class="contact-box">
          <div class="form">
            <p class="title">Связаться с нами</p>

            <div class="input-box">
              <label for="last_name">Имя</label>
              <input id="last_name" type="text" class="validate">
            </div>

            <div class="input-box">
              <label for="last_name">Телефон</label>
              <input id="last_name" type="text" class="validate">
            </div>

            <div class="input-box">
              <label for="last_name">Комментарий</label>
              <textarea></textarea>
            </div>

            <button class="btn-send">Отправить</button>

          </div>
          <div class="contact-info">
            <p class="title">Контакты</p>
            <div class="owl-carousel carousel-contact">

              <div class="item" data-hash="shop-1">

                <div class="info">
                  <i class="icon map2"></i>
                  <p class="contant-info">Проспект Энгельса, д.145, корп.1</p>
                </div>

                <div class="info">
                  <i class="icon clock"></i>
                  <p class="contant-info">пн-пт 09:00-21:00 <br> сб-вс 10:00-21:00</p>
                </div>

                <div class="info">
                  <i class="icon phone"></i>
                  <a href="tel:+7 (812) 401-63-62" class="contant-info">+7 (812) 401-63-62</a>
                </div>

                <div class="info">
                  <i class="icon mailOpen"></i>
                  <a href="mailto:info@spb.autoakb.ru" class="contant-info">info@spb.autoakb.ru</a>
                </div>

                <div class="metro-station">
                  <p class="title">Ближайшее метро:</p>

                  <div class="item-metro">
                    <p class="name">Проспект Просвещения - 620м</p>
                    <p class="name">Парнас - 1,9 км</p>
                    <p class="name">Озерки - 2,4 км</p>
                  </div>
                </div>

              </div>

              <div class="item" data-hash="shop-2">

                <div class="info">
                  <i class="icon map2"></i>
                  <p class="contant-info">Проспект Александровской Фермы, д.29ВГ</p>
                </div>

                <div class="info">
                  <i class="icon clock"></i>
                  <p class="contant-info">пн-пт 09:00-21:00 <br> сб-вс 10:00-21:00</p>
                </div>

                <div class="info">
                  <i class="icon phone"></i>
                  <a href="tel:+7 (911) 286-54-93" class="contant-info">+7 (911) 286-54-93</a>
                </div>

                <div class="info">
                  <i class="icon mailOpen"></i>
                  <a href="mailto:info@spb.autoakb.ru" class="contant-info">info@spb.autoakb.ru</a>
                </div>

                <div class="metro-station">
                  <p class="title">Ближайшее метро:</p>

                  <div class="item-metro">
                    <p class="name">Проспект Просвещения - 620м</p>
                    <p class="name">Парнас - 1,9 км</p>
                    <p class="name">Озерки - 2,4 км</p>
                  </div>
                </div>

              </div>

            </div>

            <div class="social-link flex-Gcenter-sb">
              <a href="#" target="_blank" class="item flex-Vcenter">
                <img src="@/assets/icons/whatsAppColor.svg" alt="icon">
                <p class="name">WhatsApp</p>
              </a>

              <a href="#" target="_blank" class="item flex-Vcenter">
                <img src="@/assets/icons/instagramColor.svg" alt="icon">
                <p class="name">Instagram</p>
              </a>
            </div>

          </div>
          <div class="owl-carousel carousel-contact owl-map-street">
            <div class="item-map" data-hash="shop-1">
              <iframe  src="https://yandex.ru/map-widget/v1/?um=constructor%3A28a0e03f06af3e372e6665fb261c975b5d8e55bebd4d53e85f7a4876b2062858&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
            </div>

            <div class="item-map" data-hash="shop-2">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9aca26035e7d9cb4d23a756cc6c889937508dcd476ee8b6a6d4878b04f9f73ab&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
            </div>
          </div>
        </div>



        <div class="tabel-grid-akb">

          <p class="header">Реквизиты</p>

          <div class="body-tabel text-center-child nth-1n">

            <div class="row-tabel">
              <p class="title-row">Организация</p>
              <p>ИП Абрамова Ольга Владимировна</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Телефон (многоканальный)</p>
              <p>+7 (812) 401-63-62</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">ОГРНИП</p>
              <p>319508100157189</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">ИНН</p>
              <p>212305493500</p>
            </div>

            <div class="row-tabel">
              <p class="title-row">Юридический адрес</p>
              <p>142452, Московская обл, Ногинский р-н, Щемилово д, Орлова ул, д.26, оф.347</p>
            </div>

          </div>

        </div>


        <div class="about-shop">
          <p class="title">О магазине</p>
          <p class="description">Аккумуляторный магазин на проспекте Александровской Фермы расположен в здании Бизнес-центра "Эврика", на первом этаже. Рядом имеется большая парковка, где Вы сможете припарковать автомобиль, пока выбираете новый аккумулятор. В магазине всегда в наличии широкий ассортимент аккумуляторных батарей для автомобилей, мотоциклов, спецтехники, водного транспорта, ИБП, а также необходимое доп.оборудование: пусковые и зарядные устройства, тестеры, нагрузочные вилки, клеммы, провода и многое другое.</p>
        </div>


      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  mounted() {
    $('.carousel-contact').owlCarousel({
      items:1,
      dots: false,
      URLhashListener:true
    })

    // Отметка активного таба
    $('.contacts-page .tabs-streets a').click(function () {
      $('.contacts-page .tabs-streets a').removeClass('active')
      $(this).addClass('active');
    })

  }
}
</script>

<style lang="less">

.contacts-page {
  .container-midle {
    .content {
      .tabs-streets {
        flex-wrap: wrap;
      }

      .contact-box {
        display: grid;
        grid-template-columns: minmax(0px, 587px) minmax(0px, 323px) minmax(0px, 323px);
        margin-top: 70px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);

        .form {
          padding: 30px;

          .title {
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 50px;
          }

          .input-box {
            margin-bottom: 20px;

            input {
              margin: 0;
              width: calc( 100%  - 40px);
              padding: 0 20px;
              border: none;
              border-bottom: 1px solid var(--color-blackOpacity);
            }

            textarea {
              border: none;
              border-bottom: 1px solid var(--color-blackOpacity);
              resize: none;
              height: 90px;
              padding: 20px;
            }

            label {
              font-size: 15px;
              color: #000;
              margin: 0;
              font-weight: 500;
            }
          }

          .btn-send {
            display: flex;
            border: 1px solid var(--color-red);
            background-color: #fff;
            color: var(--color-red);
            font-weight: bold;
            font-size: 15px;
            padding: 15px 35px;
            margin-right: inherit;
            margin-left: auto;
            cursor: pointer;
          }

        }

        .contact-info {
          display: flex;
          flex-direction: column;
          background: linear-gradient(90deg, #2F343A 0%, #101511 100%);
          box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.25);
          height: calc(100% + 60px);
          margin-top: -30px;
          padding: 60px 30px;
          padding-bottom: 0;
          color: #fff;

          .title {
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 40px;
          }

          .carousel-contact {

            .item {

              .info {
                display: flex;
                align-items: flex-start;
                margin-bottom: 15px;

                i {
                  background-color: var(--color-red);
                  font-size: 20px;
                  margin-right: 20px;
                }

                .contant-info {
                  font-weight: 500;
                  font-size: 16px;
                  color: #FFFFFF;
                  margin: 0;
                  padding: 0;
                  line-height: normal;
                }
              }

              .metro-station {
                .title {
                  font-size: 19px;
                  color: #FFFFFF;
                  margin-top: 30px;
                  margin-bottom: 10px;
                }

                .name {
                  margin-bottom: 12px;
                }
              }
            }
          }

          .social-link {
            background-color: #000;
            padding: 17px 30px;
            width: calc(100% + 60px);
            margin-left: -30px;
            margin-top: auto;

            .name {
              color: #fff;
              font-weight: 500;
              margin-left: 10px;
            }
          }
        }

        .owl-map-street {
           * {
            height: 100%;
          }
        }
      }

      .tabel-grid-akb {
        margin-top: 80px;
        margin-bottom: 50px;

        .header {
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 30px;
        }

        .body-tabel {
          .row-tabel p {
            text-align: left !important;
            border: none !important;
          }
        }

        .header-tabel,
        .body-tabel .row-tabel {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }


      .about-shop {
        .title {
          font-weight: 500;
          font-size: 30px;
          color: #000000;
          margin-bottom: 20px;
        }

        .description {

        }
      }
    }
  }
}

</style>
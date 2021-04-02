<template>
<div>

  <div class="container product-card">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
      <a href="/Catalog" class="link">Каталог товаров</a>
      <a href="#" class="link">Автомобильные аккумуляторы</a>
    </div>

    <!-- Фото и карточка -->
    <div class="product-content">

      <div class="photo-box">
        <img class="product-photo" src="@/assets/img/goods-1.png" alt="img">
        <div class="parametrs-akb">

          <div class="item">
            <p class="header">220 А/ч</p>
            <p class="info">Емкость</p>
          </div>

          <div class="item">
            <p class="header">1400 А</p>
            <p class="info">Пусковой ток</p>
          </div>

          <div class="item">
            <p class="header">Прямая [+-]</p>
            <p class="info">Полярность</p>
          </div>

          <div class="item">
            <p class="header">518 х 276 х 242 мм</p>
            <p class="info">Габариты</p>
          </div>

        </div>
      </div>

      <div class="description">

        <!-- Наименование -->
        <p class="name-product">
          <span class="category">Автомобильный аккумулятор</span><br>
          <span class="name">Energizer EA70L3 12В 70Ач 760A(EN)</span>
          <span class="article">Артикул #654897</span>
        </p>

        <!-- Наличие и доставка -->
        <div class="InStock-delivery">
          <p class="flex-Vcenter availability InStock check"><i class="icon check"></i>В наличии</p>
          <!-- <p class="flex-Vcenter availability InStock no-check"><i class="icon no-check"></i>Нет наличии</p> -->
          <p class="delivery">Ближайшая доставка - <span>сегодня</span> (при заказе до 18.00)</p>
          <!-- <p class="delivery">Ожидайте поступления</p>-->
        </div>

        <!-- Цена -->
        <div class="price-box">
          <div class="left-col">
            <p class="price">6 700 руб</p>
            <p class="exchange">* 5 800 руб с обменом</p>
          </div>

          <div class="right-col">
            <p class="price-current">Цена актуальна на <span>29.01.2021</span></p>
            <p class="ask-question flex-Vcenter">Задать вопрос о товаре <i class="icon question"></i></p>
          </div>
        </div>

        <!-- Кнопки "Купить" -->
        <div class="btn-buy flex-Vcenter">
          <a href="#" class="add-to-cart waves-effect waves-light">Добавить в корзину</a>
          <a href="#" class="buy-one-click waves-effect ">Купить в 1 клик</a>
        </div>

        <!-- Оставить отзыв -->
        <div class="leave-review flex-Vcenter">
          <p class="title">Получите скидку за отзыв 200 руб.</p>
          <a href="#" class="link">Оставить отзыв</a>
          <img src="@/assets/img/yandex-review.png" alt="img">
        </div>


      </div>

    </div>

    <!-- Параметры, наличие в городах, доставка -->
    <div class="parametrs-content">

      <div class="left-col">

        <div class="tabs-box">
          <p class="tab-item active waves-effect waves-light">Характеристики</p>
          <p class="tab-item waves-effect waves-light">Наличие в магазинах</p>
          <p class="tab-item waves-effect waves-light">Доставка</p>
        </div>

        <div class="tabs-box-content">
          <!-- Параметры -->
          <div class="tab-container active wow animate__animated animate__fadeIn">
            <div class="tabel-grid">

              <div class="row-container">
                <p class="title">Емкость</p>
                <div class="line"></div>
                <p class="parametrs">220 А/ч</p>
              </div>

              <div class="row-container">
                <p class="title">Пусковой ток</p>
                <div class="line"></div>
                <p class="parametrs">1400 А</p>
              </div>

              <div class="row-container">
                <p class="title">Полярность</p>
                <div class="line"></div>
                <p class="parametrs">Прямая [+-]</p>
              </div>

              <div class="row-container">
                <p class="title">Вес</p>
                <div class="line"></div>
                <p class="parametrs">13.3 кг</p>
              </div>

              <div class="row-container">
                <p class="title">Страна</p>
                <div class="line"></div>
                <p class="parametrs">Россия</p>
              </div>

              <div class="row-container">
                <p class="title">Обслуживание АКБ</p>
                <div class="line"></div>
                <p class="parametrs">Обслуживаемый</p>
              </div>

              <div class="row-container">
                <p class="title">Состояние</p>
                <div class="line"></div>
                <p class="parametrs">Новый</p>
              </div>

              <div class="row-container">
                <p class="title">Типоразмер</p>
                <div class="line"></div>
                <p class="parametrs">518 х 276 х 242 мм</p>
              </div>

              <div class="row-container">
                <p class="title">Технология</p>
                <div class="line"></div>
                <p class="parametrs">Sb/Sb (малосурмянистые)	</p>
              </div>

              <div class="row-container">
                <p class="title">Модель</p>
                <div class="line"></div>
                <p class="parametrs">6СТ-60 п.п.</p>
              </div>

              <div class="row-container">
                <p class="title">Гарантия производителя</p>
                <div class="line"></div>
                <p class="parametrs">6 мес.</p>
              </div>

              <!-- Все параметры надо уточнять -->
              <!-- Все параметры надо уточнять -->
              <!-- Все параметры надо уточнять -->
              <!-- Все параметры надо уточнять -->
              <!-- Все параметры надо уточнять -->
              <!-- Все параметры надо уточнять -->

            </div>
          </div>

          <!-- Наличие в магазинах -->
          <div class="tab-container wow animate__animated animate__fadeIn">
            <div class="card-container">
              <div class="item-card">

                <!-- Карта -->
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A452863edb7be86eb31f849df54daa6cced58367a204205c7e67b360c824f1003&amp;source=constructor" width="100%" height="250" frameborder="0"></iframe>

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
              <div class="item-card">

                <!-- Карта -->
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A452863edb7be86eb31f849df54daa6cced58367a204205c7e67b360c824f1003&amp;source=constructor" width="100%" height="250" frameborder="0"></iframe>

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
            </div>
          </div>

          <!-- Калькулятор доставки -->
          <div class="tab-container wow animate__animated animate__fadeIn select-city">
            <p class="header">Рассчитать доставку по адресу</p>
            <div class="select-box">

              <div class="input-field col s12">
                <select>
                  <option value="1">Ленинградская область</option>
                  <option value="2">Московская область</option>
                  <option value="3">Россия</option>
                </select>
                <label>Область</label>
              </div>

              <div class="input-field col s12">
                <select>
                  <option value="1">Санкт-Петербург</option>
                  <option value="2">Комарово</option>
                  <option value="3">...</option>
                </select>
                <label>Город</label>
              </div>

              <div class="shipping-cost">
                <p class="price">850 руб</p>
                <p class="title">Cтоимость доставки</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="red-col">
        <div class="content">
          <p class="header">Важная информация</p>
          <p class="text">Цены интернет-магазина действительны только при заказе через корзину покупок или резервировании товара по телефону. В иных случаях цены могут отличаться от указанных на сайте.</p>
          <p class="text">При самовывозе необходимо предварительно узнать номер заказа у менеджера.</p>
          <p class="text">Бесплатная доставка при утилизации старого АКБ действует только при покупке нового АКБ без скидки.</p>
        </div>
      </div>

    </div>

    <!-- Похожие товары -->
    <div class="such-products marginB50">

      <!-- Заголовок -->
      <div class="head-title-red flex-Vcenter container marginB50">
        <p class="title">Похожие товары</p>
        <div class="line"></div>
      </div>

      <div class="goods-grid">

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-1.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор Energizer EA70L3 12В 42Ач 540CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-2.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор EXIDE EB955 12В 95Ач 720 A</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>
        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
          <p class="category-title">Аккумулятор для мототехники</p>
          <a href="javascript:void();" class="name-product">Аккумулятор Delta CT 1211 12В 24Ач 360CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор VARTA G7 12В 95Ач 830 CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-2.png" alt="goods"></a>
          <p class="category-title">Дополнительное оборудовние</p>
          <a href="javascript:void();" class="name-product">Зарядное устройство для аккумулятора KS-10А</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- Вы недавно смотрели -->
    <div class="such-products">

      <!-- Заголовок -->
      <div class="head-title-red flex-Vcenter container marginB50">
        <p class="title">Вы недавно смотрели</p>
        <div class="line"></div>
      </div>

      <div class="goods-grid">

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-1.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор Energizer EA70L3 12В 42Ач 540CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-2.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор EXIDE EB955 12В 95Ач 720 A</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>
        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
          <p class="category-title">Аккумулятор для мототехники</p>
          <a href="javascript:void();" class="name-product">Аккумулятор Delta CT 1211 12В 24Ач 360CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
          <p class="category-title">Аккумулятор автомобильный</p>
          <a href="javascript:void();" class="name-product">Аккумулятор VARTA G7 12В 95Ач 830 CCA</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
          </div>

          <div class="parametrs-akb">

            <div class="item">
              <p class="title">Емкость</p>
              <div class="line"></div>
              <p class="value">220 А/ч</p>
            </div>

            <div class="item">
              <p class="title">Пусковой ток</p>
              <div class="line"></div>
              <p class="value">1400 А</p>
            </div>

            <div class="item">
              <p class="title">Полярность</p>
              <div class="line"></div>
              <p class="value">Прямая [+-]</p>
            </div>

            <div class="item">
              <p class="title">Габариты</p>
              <div class="line"></div>
              <p class="value">518 х 276 х 242 мм</p>
            </div>

          </div>

        </div>

        <!-- Товар -->
        <div class="goods-item">
          <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-2.png" alt="goods"></a>
          <p class="category-title">Дополнительное оборудовние</p>
          <a href="javascript:void();" class="name-product">Зарядное устройство для аккумулятора KS-10А</a>
          <div class="bottom-card flex-Gcenter-sb">
            <div class="box-price">
              <p class="current-price">6 700 руб</p>
              <p class="exchange-price">5 800 руб с обменом</p>
            </div>
            <a href="javascript:void();" class="add-to-cart flex-center">
              <p class="title">В корзину</p>
              <div class="icon-box flex-center"><i class="icon cart"></i></div>
            </a>
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

    // Переключение между вкладками
    $('.product-card .parametrs-content .tabs-box').on('click', '.tab-item', function() {
      let count = $(this).index();
      let container = $('.product-card .parametrs-content .tabs-box-content .tab-container');
      container.removeClass('active');
      container.eq(count).addClass('active');
    });


    // Отметка активного таба
    $('.product-card .parametrs-content .tabs-box .tab-item').click(function() {
      $('.product-card .parametrs-content .tabs-box .tab-item').removeClass('active')
      $(this).addClass('active');
    })


    var $tdm = $('.product-card .parametrs-content .tabs-box-content .tabel-grid');

    // Убираем все характеристики и добавляем кнопку "Показать все"
    $tdm.each(function () {
      // Получаем все пункты li в .tdm
      var $item = $(this).find('.row-container'),
          // С помощью фильтра выбираем все пункты, которые идут после пятого
          $item_target = $item.filter(function () {
            return $(this).index() > 9
          });

      // Создаём ссылку, по нажатию на которую будут показываться все пункты
      var $link = $('<a href="#all" class="show-all">Все характеристики</a>').click(function () {
        // Показываем скрытые пункты
        $item_target.show();
        // Удаляем кнопку
        $(this).remove();
        // Блокируем все последущие действия ссылки
        return false;
      });

      // Скрываем пункты, которые идут после пятого и добавляем перед шестым пунктом ссылку, с помощью которой покажем скрытые пункты
      $item_target.hide().eq(0).before($link);
    });

    $('select').formSelect();
  }
}
</script>

<style lang="less">

.product-card {

  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

    .photo-box {

      .product-photo {
        width: 100%;
        height: 350px;
        object-fit: contain;
        margin-bottom: 30px;
      }

      .parametrs-akb {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        grid-gap: 20px;

        .item {
          width: auto;

          .header {
            font-weight: 600;
            font-size: 20px;
          }

          .info {
            font-size: 14px;
            color: var(--color-gray);
          }
        }
      }
    }

    .description {
      padding: 40px;
      padding-bottom: 30px;
      background: #FFFFFF;
      box-shadow: 0px 6px 45px rgba(0, 0, 0, 0.07);
      height: max-content;

      .name-product {
        font-size: 25px;
        color: #000;
        line-height: 34px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .name {
          font-weight: 600;
        }

        .article {
          color: var(--color-gray);
          font-size: 18px;
          padding-left: 20px;
        }
      }

      .InStock-delivery {
        display: flex;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .InStock {
          margin-right: 20px;
          margin-bottom: 20px;
          padding-right: 20px;
          white-space: nowrap;
          border-right: 1px solid var(--color-LightBlue);


          i {
            font-size: 19px;
            margin-right: 10px;
          }

          &.check {
            color: var(--color-green);

            i {
              background-color: var(--color-green);
            }
          }

          &.no-check {
            color: var(--color-red);

            i {
              background-color: var(--color-red);
            }
          }
        }

        .delivery {
          color: var(--color-gray);
          margin-bottom: 20px;

          span {
            font-weight: bold;
          }
        }
      }

      .price-box {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .left-col {
          margin-right: 20px;
          padding-right: 30px;
          margin-bottom: 20px;
          border-right: 1px solid var(--color-LightBlue);

          .price {
            font-size: 35px;
            font-weight: bold;
            white-space: nowrap;
          }
          .exchange {
            font-size: 16px;
            font-weight: 500;
            color: var(--color-red);
            white-space: nowrap;
          }
        }

        .right-col {
          margin-bottom: 20px;

          .price-current {
            font-size: 15px;
            margin-bottom: 10px;
            span {
              font-weight: 600;
            }
          }
          .ask-question {
            color: var(--color-gray);
            font-size: 15px;
            border-bottom: 1px dashed var(--color-gray);
            width: max-content;
            cursor: pointer;

            i {
              background-color: var(--color-gray);
              margin-left: 10px;
            }
          }
        }
      }

      .btn-buy {
        border-bottom: 1px solid var(--color-LightBlue);

        .add-to-cart {
          font-size: 16px;
          font-weight: bold;
          padding: 15px 30px;
          color: #fff;
          background-color: var(--color-red);
          margin-right: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
        }
        .buy-one-click {
          font-size: 16px;
          font-weight: bold;
          padding: 15px 30px;
          color: var(--color-red);
          background-color: #fff;
          border: 1px solid var(--color-red);;
          margin-right: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
        }
      }

      .leave-review {
        flex-wrap: wrap;

        .title {
          color: var(--color-gray);
          font-size: 15px;
          margin-right: 20px;
          margin-top: 20px;
        }

        .link {
          font-size: 15px;
          color: #3069B6;
          margin-right: 20px;
          border-bottom: 1px dashed #3069B6;
          margin-top: 20px;
        }

        img {
          width: auto;
          height: 20px;
          margin-top: 20px;
        }
      }
    }
  }

  .parametrs-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    background-color: #fff;
    margin-bottom: 100px;

    .left-col {

      .tabs-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        margin-bottom: 20px;

        .tab-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 0;
          background-color: var(--color-LightBlue);
          text-align: center;
          font-weight: bold;
          font-size: 15px;
          color: var(--color-gray);
          cursor: pointer;

          &.active {
            background-color: var(--color-gray);
            color: #fff;
          }
        }
      }

      .tabs-box-content {
        .tab-container {
          display: none;

          &.active {
            display: block;
          }

          .tabel-grid {
            display: grid;

            .show-all {
              color: var(--color-red);
              font-size: 16px;
              font-weight: 700;
              text-align: center;
              padding: 15px 20px;
              background-color: #fff;
              border: 1px solid var(--color-red);
              margin-top: 10px;
            }

            .row-container {
              display: grid;
              align-items: end;
              grid-gap: 10px;
              grid-template-columns: auto 1fr auto;
              padding: 10px 20px;

              &:nth-child(2n) {
                background-color: rgba(0,0,0, 0.03);
              }

              &:hover {
                background-color: var(--color-LightBlue);

                .line {
                  opacity: 1;
                }
              }

              .title {
                font-size: 16px;
                color: #000;
                font-weight: 700;
              }
              .line {
                opacity: 0;
                margin-bottom: 4px;
                height: 1px;
                border-bottom: 1px dashed rgba(0,0,0, 0.5);
              }
              .parametrs {
                font-size: 16px;
                color: #000;
                font-weight: 500;
                text-align: right;
              }
            }
          }

          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;

            .item-card {
              background: #FFFFFF;
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

              .contact-shop {
                padding: 30px;

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
                padding: 30px;
                padding-top: 0;

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
          }

          &.select-city {
            .header {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 20px;
            }

            .select-box {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 10px;

              .input-field {
                margin-top: 2.5rem;
                margin-bottom: 0;

                input {
                  border: none;
                  border: 1px solid var(--color-blackOpacity);
                  padding: 0 20px;
                  font-weight: bold;
                  color: var(--color-gray);
                  width: calc(100% - 40px);
                  margin: 0;
                }

                label {
                  top: -37px;
                  left: 0;
                  color: #000;
                  font-size: 15px;
                }
              }

              .shipping-cost {
                text-align: right;
                margin-top: auto;
                .price {
                  font-size: 30px;
                  font-weight: bold;
                  color: var(--color-red);
                }
                .title {
                  font-size: 14px;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }

    .red-col {
      .content {
        padding: 20px;

        p {
          margin-bottom: 20px;
        }

        .header {
          font-weight: bold;
          font-size: 20px;
        }

        .text {
          font-size: 14px;
          color: var(--color-gray);
        }
      }
    }
  }

  .such-products {

  }

}

@media (max-width: 980px) {
  #scroll_top {
    display: none !important;
  }
}

</style>
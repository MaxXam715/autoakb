<template>
  <div>

    <div class="container index-catalog">

      <div class="left-col filter-search-akb">
        <p class="title">Фильтры</p>
        <FilterAkbSearch/>

        <!-- Нужна помощь? -->
        <div class="need-help">
          <div class="content">
            <p class="header">Нужна помощь?</p>
            <p class="hint">Поможем подобрать лучший вариант</p>
            <form action="">
              <input type="tel" class="phone_4" placeholder="+7 (___) ___-__-__">
              <button>Заказать подбор</button>
            </form>
          </div>
        </div>

      </div>

      <div class="right-col">

        <div class="bread-crumbs">
          <a href="#" class="link">Главная</a>
          <a href="#" class="link">Каталог товаров</a>
        </div>

        <div class="description">
          <p class="header">Все аккумуляторы</p>
          <p class="text">Магазин autoakb.ru предлагает Вам быстрый подбор аккумулятора по марке и модели автомобиля. Всего в несколько кликов мышью Вы получите полный список аккумуляторов для Вашего автомобиля! У нас Вы всегда найдете аккумулятор, оптимально подходящий Вам по техническим характеристикам и стоимости. А еще в нашем магазине Вас ждут доступные цены, качественный сервис, выбор удобного способа оплаты, доставка в любое место, установка, прием старых батарей!</p>
        </div>

        <a href="#mobile-modal-filter" class="item-category-akb flex-center waves-effect waves-light modal-trigger large-hiden">Фильтр <i class="icon setting"></i></a>

        <div class="count-goods-catalog flex-Gcenter-sb">
          <p class="count">250 товаров</p>
          <div class="sort-dropdown-trigger flex-Vcenter">

            <p class="title">Сортировать по</p>
            <!-- Dropdown Trigger -->
            <a class="dropdown-trigger flex-Gcenter-sb" href='#' data-target="dropdown-sort"><span>По умолчанию</span> <i class="icon arrowDown"></i></a>

            <!-- Dropdown Structure -->
            <ul id="dropdown-sort" class="dropdown-content">
              <li><a href="#!" class="active"><i class="icon Sort-no"></i>По умолчанию</a></li>
              <li><a href="#!"><i class="icon Sort-date"></i>По дате</a></li>
              <li><a href="#!"><i class="icon Sort-down"></i>Сначала дешевле</a></li>
              <li><a href="#!"><i class="icon Sort-up"></i>Сначала дороже</a></li>
            </ul>

          </div>
        </div>

        <div class="goods-grid marginB50">

          <!-- Товар -->
          <div class="goods-item">
          <router-link to="/product" class="flex-center" exact><img class="photo-goods" src="@/assets/img/goods-1.png" alt="goods"></router-link>
            <p class="category-title">Аккумулятор автомобильный</p>
            <router-link to="/product" class="name-product" exact>Аккумулятор Energizer EA70L3 12В 42Ач 540CCA</router-link>
            <div class="bottom-card flex-Gcenter-sb">
              <div class="box-price">
                <p class="current-price">6 700 руб</p>
                <p class="exchange-price">5 800 руб с обменом</p>
              </div>
              <a href="javascript:void();" onclick="M.toast({html: 'Добавлено в корзину'})" class="add-to-cart flex-center">
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-4.png" alt="goods"></a>
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
            <a href="javascript:void();" class="flex-center"><img class="photo-goods" src="@/assets/img/goods-3.png" alt="goods"></a>
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

        </div>

        <div class="pagination-container">
          <a href="#" class="link btn-flat disabled"><i class="icon arrowLeft"></i><p>Назад</p></a>
          <a href="#" class="link active"><p>1</p></a>
          <a href="#" class="link"><p>2</p></a>
          <a href="#" class="link"><p>3</p></a>
          <a href="#" class="link"><p>4</p></a>
          <a href="#" class="link"><p>5</p></a>
          <a href="#" class="link"><p>...</p></a>
          <a href="#" class="link"><p>25</p></a>
          <a href="#" class="link" ><p>Далее</p><i class="icon arrowRight"></i></a>
        </div>

      </div>



    </div>


    <!-- Modal Structure -->
    <div id="mobile-modal-filter" class="modal">
      <div class="modal-content filter-search">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title">Параметры аккумулятора</p>
          <i class="icon close modal-close"></i>
        </div>

        <FilterAkbSearch/>

        <a href="#" class="btn-find-count flex-center">Найдено 7 акб</a>

      </div>
    </div>

  </div>
</template>

<script>
import FilterAkbSearch from '@/components/FilterAkbSearch.vue';

export default {
  components: {
    FilterAkbSearch
  },
  mounted() {
    // dropdown (materialize UI)
    $('.dropdown-trigger').dropdown();

    $('.modal').modal();


    // Выбор Сортировки
    $('.sort-dropdown-trigger .dropdown-content a').click(function() {
      let $temp = $(this).text();
      let $city = $('.sort-dropdown-trigger .dropdown-trigger span');

      $city.text('');
      $city.append($temp);

      $('.sort-dropdown-trigger .dropdown-content a').removeClass('active');
      $(this).addClass('active');
    })

    $(function() {

      let goodGrid = $('.goods-grid .goods-item');

      if ( goodGrid.length < 4 ) {
        $('.goods-grid').addClass('less-than');
      } else {
        $('.goods-grid').removeClass('less-than');
      }

    })

    $(".phone_4").mask("+7 (999) 999-99-99");


    $('.open-filter-mobile').click(function() {
      $.ajax({
        type: "POST",
        url: 'Home',
        success: function(data) {
          $('#assend').html(data);
        }
      });
    });


  }
}
</script>

<style lang="less">

.index-catalog {
  display: grid;
  grid-template-columns: 264px 1fr;
  grid-gap: 30px;

  .left-col {
    > .title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .need-help {
      position: relative;
      padding: 20px;
      margin-top: 20px;
      background-image: url("~@/assets/img/need-help.png");
      background-size: cover;
      background-position: center;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) -15%, #000000 100%);
      }

      .content {
        position: relative;
        z-index: 3;
        color: #fff;
        padding-top: 10px;

        > .header {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        > .hint {
          font-size: 17px;
        }

        form {
          margin-top: 100px;

          input {
            width: calc(100% - 20px);
            padding: 0 10px;
            height: 45px;
            background-color: #fff;
            margin-bottom: 10px;
          }

          button {
            width: 100%;
            height: 45px;
            border: none;
            background-color: var(--color-red);
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }

  .left-col.filter-search-akb {
    .content-selection {
      grid-template-columns: 1fr;
    }
    .checkbox-parametrs {
      grid-template-columns: 1fr !important;
    }
    .clear-form {
      display: flex;
      justify-content: center;
      color: var(--color-gray);
      border: 1px solid var(--color-gray);
      padding: 10px 0;
      font-size: 16px;
      margin-top: 10px;

      i {
        margin-right: 10px;
        background: var(--color-gray);
      }
    }
  }

  .right-col {
    .description {
      margin-bottom: 50px;

      .header {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .text {
        font-size: 16px;
        font-weight: 500;
        color: var(--color-gray);

      }
    }

    .large-hiden {
      display: none;
    }
  }

  .count-goods-catalog {
    margin-bottom: 25px;

    .count {
      font-weight: bold;
      font-size: 25px;
    }

    .sort-dropdown-trigger {

      p {
        font-size: 16px;
        font-weight: bold;
        color: var(--color-gray);
        margin-right: 15px;
      }

      .dropdown-trigger {
        padding: 13px 20px;
        background-color: var(--color-LightBlue);
        color: var(--color-gray);
        font-size: 16px;
        font-weight: bold;
        min-width: 200px;

        i {
          font-size: 10px;
          background-color: var(--color-red);
          margin-left: 10px;
        }
      }

      .dropdown-content {
        padding: 10px 0;
        width: max-content !important;
        box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.2);


        li {
          a {
            white-space: nowrap;
            color: var(--color-gray);
            font-weight: 500;

            &.active {
              font-weight: bold;
              color: var(--color-red);

              i {
                background-color: var(--color-red);
              }
            }

            i {
              font-size: 17px;
              background-color: var(--color-gray);
            }
          }

          &:hover {
            background-color: var(--color-LightBlue);
          }
        }
      }
    }
  }

  .item-category-akb {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: var(--color-red);
    height: 50px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;

    i {
      background-color: #fff;
      margin-left: 15px;
      font-size: 19px;
    }
  }

}

</style>

<template>
  <div>


  <!--  Шапка  -->
  <header>
    
    <!-- ТОП-бар -->
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
            <div class="link write flex-Vcenter">
              <i class="icon mailOpen"></i>
              <a href="#">Написать нам</a>
            </div>

            <div class="line"></div>

            <!-- Обратный звонок -->
            <div class="link write flex-Vcenter">
              <i class="icon operator"></i>
              <a href="#">Обратный звонок</a>
            </div>

          </div>

        </div>
        <!-- Конец - Контакты и обратная связь -->


      </div>
    </div>
    <!-- Конец - ТОП-бар -->







    <!--  Главная информация  -->
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
    <!--  Конец - Главная информация  -->



    <!-- Навигация -->
    <nav class="desktop-nav">
      <div class="container flex-Vcenter">
        <a href="#modal-open_catalog" class="open-catalog flex-Vcenter waves-effect waves-light modal-trigger">
          <i class="icon menu"></i>
          <span>Каталог товаров</span>
          <i class="icon arrowDown"></i>
        </a>

        <div class="link-nav flex-Vcenter waves-effect waves-light dropdown-trigger" data-target="dropdown-selection">Подбор АКБ<i class="icon arrowDown"></i>
          <!-- Выпадающий список -->
          <ul id='dropdown-selection' class='dropdown-content'>
            <li><a class="link" href="javascript:void(0);">Подбор <span>по параметрам АКБ</span></a></li>
            <li><a class="link" href="javascript:void(0);">Подбор <span>по марке авто</span></a></li>
            <li><a class="link" href="javascript:void(0);">Подбор <span>по марке мото</span></a></li>
          </ul>
        </div>
        <div class="link-nav flex-Vcenter waves-effect waves-light dropdown-trigger" data-target="dropdown-service">Услуги<i class="icon arrowDown"></i>
          <!-- Выпадающий список -->
          <ul id='dropdown-service' class='dropdown-content'>
            <li><a class="link" href="javascript:void(0);">Установка АКБ</a></li>
            <li><a class="link" href="javascript:void(0);">Зарядка АКБ</a></li>
            <li><a class="link" href="javascript:void(0);">Выездная диагностика</a></li>
            <li><a class="link" href="javascript:void(0);">Возврат и обмен</a></li>
          </ul>
        </div>
<!--        <router-link :to="{name:'Catalog'}" >Home</router-link>-->
        <a class="link-nav flex-Vcenter waves-effect waves-light" >Доставка и оплата</a>
        <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Гарантии</a>
        <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Оптом</a>
        <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Контакты</a>
        <a class="acceptance-batteries flex-center waves-effect waves-light" href="javascript:void(0);"><span>Прием Б/У АКБ</span></a>
      </div>




    </nav>
    <!-- Конец - Навигация -->




    <!-- Корзина -->
    <div class="sidenav toggle-cart" id="slide-out">
      1231
    </div>

    <!-- Конец - Корзина -->





    <!-- Каталог товаров (меню) -->
    <div id="modal-open_catalog" class="modal open_catalog bottom-sheet product-catalog">
      <!-- Шапка -->
      <div class="header-modal_catalog">
        <img src="@/assets/img/logo.svg" alt="logo">
        <p class="title">Каталог товаров</p>
        <div class="modal-close waves-effect waves-red btn-flat flex-Vcenter"><span>Закрыть</span><i class="icon close"></i></div>
      </div>
      <!-- Контент -->
      <div class="grid-navigation">

        <!-- Категории -->
        <div class="list-categories wow animate__animated">
          <div class="group">
            <p class="title">Аккумуляторы для транспорта</p>
            <div class="list">
              <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>01</span>Авто аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>02</span>Мото аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/03-prev-cat.png"><span>03</span>Грузовые аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>04</span>Лодочные аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>05</span>Аккумуляторы START-STOP</p>
              <p class="itemCat" data-src="/menu-category/03-prev-cat.png"><span>06</span>EFB аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>07</span>AGM аккумуляторы</p>
              <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>08</span>Гелевые аккумуляторы</p>
            </div>
          </div>
        </div>

        <!-- Превью категории -->
        <div class="category-preview">
          <div class="contain opacity_0 wow animate__animated">
            <div class="title op0">Автомобильные акб</div>
            <div class="box-prev-img">
              <img class="photo-cat" src="">
            </div>
          </div>
        </div>

        <!-- Производитель -->
        <div class="manufacturer wow animate__animated">
          <div class="contain opacity_0 wow animate__animated">
            <div class="title flex-Vcenter"><i class="icon rowLightLeft"></i>Производитель</div>

            <div class="group">
              <p class="letter">A</p>
              <div class="link">
                <a href="#">AFA</a>
                <a href="#">AlphaLINE</a>
                <a href="#">ATLAS</a>
              </div>
            </div>

            <div class="group">
              <p class="letter">B</p>
              <div class="link">
                <a href="#">AFA</a>
                <a href="#">AlphaLINE</a>
                <a href="#">ATLAS</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <!-- Конец - Каталог товаров (меню) -->


    <!--  Мобильное меню ТОП-бар  -->

    <div class="mobile-top_bar">
      Мобильное меню

      <a href="#modal-open_catalog" class="open-catalog flex-Vcenter waves-effect waves-light modal-trigger">Каталог товаров</a>
    </div>

    <!--  Конец - Мобильное меню ТОП-бар  -->
  </header>
  <!--  Конец - Шапка  -->



  </div>
</template>

<script>

</script>

<style lang="less" scoped>

</style>
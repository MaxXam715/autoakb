<template>
<div>

  <!-- Фильтр по подбору АКБ -->
  <div class="home-filter-akb container marginB50">

    <div class="what-is">
      <div class="title">
        <div class="text"><span class="uppercase"><span class="text-red">SMART</span> поиск</span><br>аккумулятора</div>
        <span class="secondary">как это работает?</span>
        <i class="icon arrowDown"></i>
      </div>
    </div>

    <div class="step">
      <p class="title">Выберите вид техники и её марку</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">01</p>
    </div>

    <div class="step">
      <p class="title">Сформируйте параметры для АКБ</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">02</p>
    </div>

    <div class="step">
      <p class="title">Поиск!</p>
      <p class="description">Доп подсказка к пункту</p>
      <p class="count">03</p>
    </div>

  </div>


  <div class="filter-akb container marginB50">

    <!-- Фото категории -->
    <div class="photo parameters owl-carousel" :style="{'background-image': 'url(' + require('@/assets/img/background-img-filter.png') + ')'}">
      <img data-hash="tabs-1" src="@/assets/img/category/category-1-akb.png" alt="img">
      <img data-hash="tabs-2" src="@/assets/img/category/category-2-auto.png" alt="img">
      <img data-hash="tabs-3" src="@/assets/img/category/category-3-moto.png" alt="img">
      <img data-hash="tabs-4" src="@/assets/img/category/category-4-gruz.png" alt="img">
      <img data-hash="tabs-5" src="@/assets/img/category/category-5-tyagov.png" alt="img">
    </div>

    <!-- Категория -->
    <div class="tabs-model" id="tabs-swipe-demo">
      <a href="#tabs-1" class="tab item-link">По параметрам аккумулятора<span>01</span></a>
      <a href="#tabs-2" class="tab item-link active">Авто<br>аккумуляторы<span>02</span></a>
      <a href="#tabs-3" class="tab item-link">Мото<br>аккумуляторы<span>03</span></a>
      <a href="#tabs-4" class="tab item-link">Грузовые<br>аккумуляторы<span>04</span></a>
      <a href="#tabs-5" class="tab item-link">Тяговые<br>аккумуляторы<span>05</span></a>
    </div>

    <!-- Параметры -->
    <div class="parameters owl-carousel">

      <div data-hash="tabs-1" class="slide-filter-08945 filter-search">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title flex-Vcenter">Параметры аккумулятора</p>
          <a href="#" class="find-col flex-Vcenter">Найдено 7 акб <i class="icon arrowRight"></i></a>
        </div>

        <div class="content-selection">

          <!-- Брен -->
          <div class="item-form">
            <label>Брен</label>
            <select>
              <option value="" disabled selected>Выбрать</option>
              <option value="1">Bosh</option>
              <option value="2">Akra</option>
              <option value="3">Varta</option>
            </select>
          </div>

          <!-- Емкость А/ч -->
          <div class="two-form">
            <div class="item-form">
              <label>Емкость А/ч</label>
              <input type="text" placeholder="0">
            </div>
            <div class="line"></div>
            <div class="item-form">
              <label class="opacity-0">Емкость А/ч</label>
              <input type="text" placeholder="0">
            </div>
          </div>

          <!-- Тип корпуса (габариты) -->
          <div class="item-form">
            <label>Тип корпуса (габариты)</label>
            <select>
              <option value="" disabled selected>Выбрать</option>
              <option value="1">Bosh</option>
              <option value="2">Akra</option>
              <option value="3">Varta</option>
            </select>
          </div>

          <!-- Ток пуска А -->
          <div class="two-form">
            <div class="item-form">
              <label>Ток пуска А</label>
              <input type="text" placeholder="0">
            </div>
            <div class="line"></div>
            <div class="item-form">
              <label class="opacity-0">Ток пуска А</label>
              <input type="text" placeholder="0">
            </div>
          </div>


          <!-- Полярность -->
          <div class="item-form">
            <label>Полярность</label>
            <select>
              <option value="" disabled selected>Выбрать</option>
              <option value="1">Bosh</option>
              <option value="2">Akra</option>
              <option value="3">Varta</option>
            </select>
          </div>


          <!-- Технология -->
          <div class="item-form">
            <label>Технология</label>
            <select>
              <option value="" disabled selected>Выбрать</option>
              <option value="1">Bosh</option>
              <option value="2">Akra</option>
              <option value="3">Varta</option>
            </select>
          </div>


          <!-- Ток пуска А -->
          <div class="three-form">
            <div class="item-form">
              <label>Ток пуска А</label>
              <input type="text" placeholder="Длина">
            </div>
            <div class="item-form">
              <label class="opacity-0">Ток пуска А</label>
              <input type="text" placeholder="Ширина">
            </div>
            <div class="item-form">
              <label class="opacity-0">Ток пуска А</label>
              <input type="text" placeholder="Высота">
            </div>
          </div>


          <!-- Ток пуска А -->
          <div class="two-form">
            <div class="item-form">
              <label>Ток пуска А</label>
              <input type="text" placeholder="0">
            </div>
            <div class="line"></div>
            <div class="item-form">
              <label class="opacity-0">Ток пуска А</label>
              <input type="text" placeholder="0">
            </div>
          </div>

        </div>

        <div class="checkbox-parametrs">

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Боковые, болт (USA)</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Грузовые, болт (RUS)</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Низкий</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Нижнее крепление</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Грузовые под гайку</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Узкие (Ø14,7/13,1)</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>4 клеммы</span>
          </label>

          <label class="flex-Vcenter">
            <input type="checkbox" class="filled-in input-batteries">
            <span>Стандартные (Ø19,5/17,9)</span>
          </label>

          <p class="clear-form"><i class="icon eraser flex-Vcenter"></i>Очистить фильтр</p>

        </div>

      </div>
      <div data-hash="tabs-2" class="slide-filter-08945 active">

        <!-- шаг 1 (выбор марки) -->
        <div class="step-filter step-1 select-brand wow animate__animated animate__fadeIn">
          <!-- Шапка -->
          <div class="header flex-Gcenter-sb">
            <p class="title">Автомобильные марки</p>
            <div class="search">
              <input type="text" placeholder="Поиск по марке">
              <i class="icon search"></i>
            </div>
          </div>

          <!-- Марки -->
          <div class="car-brand">
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
            <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
          </div>
        </div>

        <!-- шаг 2 (выбор модели) -->
        <div class="step-filter step-2 list-parametr wow animate__animated animate__fadeIn" style="display: none">
          <!-- Шапка -->
          <div class="header flex-Gcenter-sb">
            <p class="title flex-Vcenter"><i class="icon rowLightLeft"></i> BMW</p>
            <div class="search">
              <input type="text" placeholder="Поиск по марке">
              <i class="icon search"></i>
            </div>
          </div>

          <p class="title">Выберите модель:</p>

          <div class="list-model">
            <a href="javascript:void(0);" class="item-list item_select_brand-js">1</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">2</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">4C</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">8C COMPETIZIONE</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">ARNA</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">GIULIETTA</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">MITO</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">SPRINT</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">159</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">3</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">5</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">90</a>
          </div>

        </div>
        <!-- шаг 3 (выбор поколения) -->
        <div class="step-filter step-3 list-parametr wow animate__animated animate__fadeIn" style="display: none">
          <!-- Шапка -->
          <div class="header flex-Gcenter-sb">
            <p class="title flex-Vcenter"><i class="icon rowLightLeft"></i> BMW<span>4C</span></p>
            <div class="search">
              <input type="text" placeholder="Поиск по марке">
              <i class="icon search"></i>
            </div>
          </div>

          <p class="title">Выберите поколение:</p>

          <div class="list-model">
            <a href="javascript:void(0);" class="item-list item_select_brand-js">10.2013 - 02.2017 (1 поколение F32 Купе)</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">02.2014 - 02.2017 (1 поколение F36 Седан)</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">03.2014 - 10.2016 (1 поколение F33 Открытый кузов)</a>
            <a href="javascript:void(0);" class="item-list item_select_brand-js">01.2017 - 06.2020 (1 поколение рестайлинг F32 Купе)</a>
          </div>

        </div>
        <!-- шаг 4 (выбор мощности) -->
        <div class="step-filter step-4 list-parametr wow animate__animated animate__fadeIn" style="display: none">
          <!-- Шапка -->
          <div class="header flex-Gcenter-sb">
            <p class="title flex-Vcenter"><i class="icon rowLightLeft"></i> BMW<span>4C</span><span>2013 – Н.В.</span></p>
            <div class="search">
              <input type="text" placeholder="Поиск по марке">
              <i class="icon search"></i>
            </div>
          </div>

          <p class="title">Выберите модификацию:</p>

          <div class="list-model">
            <a href="javascript:void(0);" class="item-list">1.7 (240 л.с.)</a>
            <a href="javascript:void(0);" class="item-list">1.8 (240 л.с.)</a>
          </div>

        </div>

      </div>
      <div data-hash="tabs-3" class="slide-filter-08945">
        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title">Марки мотоциклов</p>
          <div class="search">
            <input type="text" placeholder="Поиск по марке">
            <i class="icon search"></i>
          </div>
        </div>

        <!-- Марки -->
        <div class="car-brand">
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>

        </div>
      </div>
      <div data-hash="tabs-4" class="slide-filter-08945">Test 4</div>
      <div data-hash="tabs-5" class="slide-filter-08945">Test 5</div>
    </div>

  </div>

  <div class="mobile-filter-akb container marginB50">

    <a href="#mobile-modal-filter" class="item-category-akb flex-center waves-effect waves-light modal-trigger">По параметрам аккумулятора <i class="icon setting"></i></a>

    <a href="#mobile-modal-category" class="modal-trigger">
      <div class="box-proportion ratio1_1">
        <div class="content item-category">
          <img class="photo" src="@/assets/img/category/category-2-auto.png" alt="img">
          <p class="title">Авто</p>
        </div>
      </div>
    </a>


    <a href="#mobile-modal-category" class="modal-trigger">
      <div class="box-proportion ratio1_1">
        <div class="content item-category">
          <img class="photo" src="@/assets/img/category/category-3-moto.png" alt="img">
          <p class="title">Мото</p>
        </div>
      </div>
    </a>


    <a href="#mobile-modal-category" class="modal-trigger">
      <div class="box-proportion ratio1_1">
        <div class="content item-category">
          <img class="photo" src="@/assets/img/category/category-4-gruz.png" alt="img">
          <p class="title">Грузовые</p>
        </div>
      </div>
    </a>


    <a href="#mobile-modal-category" class="modal-trigger">
      <div class="box-proportion ratio1_1">
        <div class="content item-category">
          <img class="photo" src="@/assets/img/category/category-5-tyagov.png" alt="img">
          <p class="title">Тяговые</p>
        </div>
      </div>
    </a>

  </div>


  <!-- Modal Structure -->
  <div id="mobile-modal-filter" class="modal">
    <div class="modal-content filter-search">

      <!-- Шапка -->
      <div class="header flex-Gcenter-sb">
        <p class="title">Параметры аккумулятора</p>
        <i class="icon close modal-close"></i>
      </div>

      <div class="content-selection">

        <!-- Брен -->
        <div class="item-form">
          <label>Брен</label>
          <select>
            <option value="" disabled selected>Выбрать</option>
            <option value="1">Bosh</option>
            <option value="2">Akra</option>
            <option value="3">Varta</option>
          </select>
        </div>

        <!-- Емкость А/ч -->
        <div class="two-form">
          <div class="item-form">
            <label>Емкость А/ч</label>
            <input type="tel" placeholder="0">
          </div>
          <div class="line"></div>
          <div class="item-form">
            <label class="opacity-0">Емкость А/ч</label>
            <input type="tel" placeholder="0">
          </div>
        </div>

        <!-- Тип корпуса (габариты) -->
        <div class="item-form">
          <label>Тип корпуса (габариты)</label>
          <select>
            <option value="" disabled selected>Выбрать</option>
            <option value="1">Bosh</option>
            <option value="2">Akra</option>
            <option value="3">Varta</option>
          </select>
        </div>

        <!-- Ток пуска А -->
        <div class="two-form">
          <div class="item-form">
            <label>Ток пуска А</label>
            <input type="tel" placeholder="0">
          </div>
          <div class="line"></div>
          <div class="item-form">
            <label class="opacity-0">Ток пуска А</label>
            <input type="tel" placeholder="0">
          </div>
        </div>


        <!-- Полярность -->
        <div class="item-form">
          <label>Полярность</label>
          <select>
            <option value="" disabled selected>Выбрать</option>
            <option value="1">Bosh</option>
            <option value="2">Akra</option>
            <option value="3">Varta</option>
          </select>
        </div>


        <!-- Технология -->
        <div class="item-form">
          <label>Технология</label>
          <select>
            <option value="" disabled selected>Выбрать</option>
            <option value="1">Bosh</option>
            <option value="2">Akra</option>
            <option value="3">Varta</option>
          </select>
        </div>


        <!-- Ток пуска А -->
        <div class="three-form">
          <div class="item-form">
            <label>Ток пуска А</label>
            <input type="tel" placeholder="Длина">
          </div>
          <div class="item-form">
            <label class="opacity-0">Ток пуска А</label>
            <input type="tel" placeholder="Ширина">
          </div>
          <div class="item-form">
            <label class="opacity-0">Ток пуска А</label>
            <input type="tel" placeholder="Высота">
          </div>
        </div>


        <!-- Ток пуска А -->
        <div class="two-form">
          <div class="item-form">
            <label>Ток пуска А</label>
            <input type="tel" placeholder="0">
          </div>
          <div class="line"></div>
          <div class="item-form">
            <label class="opacity-0">Ток пуска А</label>
            <input type="tel" placeholder="0">
          </div>
        </div>

      </div>

      <div class="checkbox-parametrs">

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Боковые, болт (USA)</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Грузовые, болт (RUS)</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Низкий</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Нижнее крепление</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Грузовые под гайку</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Узкие (Ø14,7/13,1)</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>4 клеммы</span>
        </label>

        <label class="flex-Vcenter">
          <input type="checkbox" class="filled-in input-batteries">
          <span>Стандартные (Ø19,5/17,9)</span>
        </label>

        <p class="clear-form"><i class="icon eraser flex-Vcenter"></i>Очистить фильтр</p>

      </div>

      <a href="#" class="btn-find-count flex-center">Найдено 7 акб</a>

    </div>
  </div>

  <div id="mobile-modal-category" class="modal">

    <div class="content slide-filter-08945">

      <!-- шаг 1 (выбор марки) -->
      <div class="step-filter step-1 select-brand wow animate__animated animate__fadeIn">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title">Автомобильные марки</p>
          <i class="icon close modal-close"></i>
        </div>

        <!-- Марки -->
        <div class="car-brand">
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-1.png" alt="img"><p class="title-brand">AC</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-2.png" alt="img"><p class="title-brand">Acura</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-3.png" alt="img"><p class="title-brand">Alfa Romeo</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-4.png" alt="img"><p class="title-brand">Asia</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-5.png" alt="img"><p class="title-brand">Aston Martin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-6.png" alt="img"><p class="title-brand">Audi</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-7.png" alt="img"><p class="title-brand">Austin</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-8.png" alt="img"><p class="title-brand">Beijing</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-9.png" alt="img"><p class="title-brand">Bentley</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-10.png" alt="img"><p class="title-brand">BMW</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-11.png" alt="img"><p class="title-brand">Brabus</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-12.png" alt="img"><p class="title-brand">Brilliance</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-13.png" alt="img"><p class="title-brand">Bristol</p></a>
          <a href="javascript:void(0);" class="item item_select_brand-js"><img src="@/assets/img/carBrand/car-brand-14.png" alt="img"><p class="title-brand">Bugatti</p></a>
        </div>
      </div>
      <!-- шаг 2 (выбор модели) -->
      <div class="step-filter step-2 list-parametr wow animate__animated animate__fadeIn" style="display: none">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title"><i class="icon rowLightLeft"></i>BMW</p>
          <i class="icon close modal-close"></i>
        </div>

        <p class="title">Выберите модель:</p>

        <div class="list-model">
          <a href="javascript:void(0);" class="item-list item_select_brand-js">1</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">2</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">4C</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">8C COMPETIZIONE</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">ARNA</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">GIULIETTA</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">MITO</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">SPRINT</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">159</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">3</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">5</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">90</a>
        </div>

      </div>
      <!-- шаг 3 (выбор поколения) -->
      <div class="step-filter step-3 list-parametr wow animate__animated animate__fadeIn" style="display: none">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title"><i class="icon rowLightLeft"></i>BMW<span>4C</span></p>
          <i class="icon close modal-close"></i>
        </div>

        <p class="title">Выберите поколение:</p>

        <div class="list-model">
          <a href="javascript:void(0);" class="item-list item_select_brand-js">10.2013 - 02.2017 (1 поколение F32 Купе)</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">02.2014 - 02.2017 (1 поколение F36 Седан)</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">03.2014 - 10.2016 (1 поколение F33 Открытый кузов)</a>
          <a href="javascript:void(0);" class="item-list item_select_brand-js">01.2017 - 06.2020 (1 поколение рестайлинг F32 Купе)</a>
        </div>

      </div>
      <!-- шаг 4 (выбор мощности) -->
      <div class="step-filter step-4 list-parametr wow animate__animated animate__fadeIn" style="display: none">

        <!-- Шапка -->
        <div class="header flex-Gcenter-sb">
          <p class="title"><i class="icon rowLightLeft"></i>BMW<span>4C</span><span>2013 – Н.В.</span></p>
          <i class="icon close modal-close"></i>
        </div>

        <p class="title">Выберите модификацию:</p>

        <div class="list-model">
          <a href="javascript:void(0);" class="item-list">1.7 (240 л.с.)</a>
          <a href="javascript:void(0);" class="item-list">1.8 (240 л.с.)</a>
        </div>

      </div>

    </div>

  </div>

</div>
</template>

<script>

export default {
  mounted() {
    $('.parameters.owl-carousel').owlCarousel({
      items:1,
      loop:false,
      margin:300,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 1,
      mouseDrag: false
    })

    $('.modal').modal();

    // Отметка активного таба
    $('.filter-akb .tabs-model .item-link, .slide-filter-08945 .modal-close').click(function () {
      $('.filter-akb .tabs-model .item-link').removeClass('active')
      $(this).addClass('active');
      $('.slide-filter-08945 .step-filter').hide()
      $('.slide-filter-08945 .step-filter.step-1').show()
    })

    // Функция открывает след шаг в фильтре после выбора марки техники
    $('.slide-filter-08945 .item_select_brand-js').click(function () {
      var currentOpen =$('.step-filter:visible');
      $('.step-filter').hide();
      $(currentOpen).next('.step-filter').show();
    });

    // Функция скрывает текущий шаг в фильтре и возвращает к пред.
    $('.slide-filter-08945 .header .title').click(function () {
      var currentOpen =$('.step-filter:visible');
      $('.step-filter').hide();
      $(currentOpen).prev('.step-filter').show();
    });

    $('select').formSelect();

  }
}


</script>

<style lang="less">

// Фильтр по подбору АКБ

.home-filter-akb {
  display: grid;
  grid-template-columns: minmax(0, 362px) minmax(0, 362px) minmax(0, 362px) minmax(0, 362px);
  align-items: center;
  grid-gap: 30px;

  .what-is {
    max-width: 352px;
    width: 100%;

    .title {
      display: flex;
      flex-direction: column;

      .text {
        color: #000;
        font-size: 30px;
        font-weight: bold;
        line-height: 30px;

        .uppercase {
          text-transform: uppercase;
          font-weight: 900;
        }

        .text-red {
          color: var(--color-red);
        }
      }

      .secondary {
        font-size: 18px;
        color: var(--color-gray);
      }

      .arrowDown {
        background-color: var(--color-red);
        font-size: 24px;
        margin-top: 18px;
      }
    }
  }

  .step {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
    height: 100%;
    max-height: 133px;
    padding: 30px;

    .title {
      font-size: 18px;
      font-weight: bold;
      max-width: 225px;
    }

    .description {
      font-size: 15px;
      color: var(--color-gray);
      margin-top: 10px;
    }

    .count {
      position: absolute;
      bottom: 10px;
      right: 20px;
      text-align: right;
      font-weight: bold;
      font-size: 35px;
      color: var(--color-red);
    }
  }
}


.filter-akb {
  display: grid;
  grid-template-columns: 360px 324px 1fr;
  border: 1px solid var(--color-LightBlue);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  max-height: 600px;

  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tabs-model {
    display: flex;
    flex-direction: column;

    .item-link {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      text-align: left;
      font-weight: bold;
      font-size: 20px;
      line-height: 22px;
      min-height: 120px;
      color: #000;
      padding-left: 30px;
      padding-right: 70px;
      background-color: var(--color-LightBlue);
      border-bottom: 1px solid var(--color-blackOpacity);
      transition: all 0.2s;

      &:last-child {
        border-bottom: 0px solid;
      }

      &.active {
        background-color: #fff;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
        z-index: 3;

        &:before {
          position: absolute;
          top: 0;
          right: 0;
          content: '';
          width: 5px;
          height: 100%;
          background-color: var(--color-red);
          transition: all 0.2s;
        }

        span {
          color: var(--color-LightBlue);
        }
      }

      span {
        position: absolute;
        right: 30px;
        top: 0;
        display: flex;
        align-items: center;
        height: 100%;
        color: #fff;
        font-size: 40px;
        text-align: right;
        z-index: 1;
      }

    }
  }

  .photo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    overflow: hidden;
    height: 600px !important;

    img {
      position: absolute;
      top: 27%;
      right: 27px;
      margin-right: -180px;
      width: 125%;
      height: 400px;
      object-fit: contain;
    }
  }

  .parameters {
    overflow: hidden;
    height: 100%;
    width: 100%;

    .owl-stage-outer,
    .owl-stage,
    .owl-item {
      height: 100%;
    }


    .filter-search {

      .header {
        .find-col {
          color: var(--color-red);
          font-size: 20px;
          font-weight: 600;
          transition: all 0.2s;

          i {
            font-size: 16px;
            margin-left: 10px;
            background-color: var(--color-red);
            transition: all 0.2s;
          }

          &:hover {
            color: var(--color-gray);
          }
          &:hover i {
            margin-left: 15px;
          }
        }
      }

      .content-selection {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        margin-bottom: 30px;

        .item-form {
          label {
            margin-bottom: 10px;
          }

          input, select {
            border: 1px solid var(--color-blackOpacity);
            margin: 0;
            margin-top: 5px;
            height: 40px;
            font-size: 16px;
            font-weight: 500;
          }

          input {
            width: calc(100% - 40px);
            padding: 0 20px;
            height: 38px;
          }

          .select-dropdown {
            li:not(.disabled) {
              span {
                font-size: 15px;
                color: #000;
                font-weight: 500;
              }

              &:hover {
                background-color: var(--color-LightBlue);
              }
            }
          }
        }

        .two-form {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-gap: 4px;
          align-items: center;

          .line {
            width: 12px;
            margin-left: 2px;
            margin-top: 25px;
            height: 2px;
            background-color: var(--color-blackOpacity);
          }
        }

        .three-form {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          align-items: center;

          .line {
            width: 12px;
            margin-left: 2px;
            margin-top: 25px;
            height: 2px;
            background-color: var(--color-blackOpacity);
          }
        }
      }

      .checkbox-parametrs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;

        [type="checkbox"]+span:not(.lever):after {
          border: 1px solid var(--color-blackOpacity);
          border-radius: 0;
          font-weight: 500;
        }
        [type="checkbox"]:checked+span:not(.lever):after {
          border: 1px solid var(--color-red);
        }

        [type="checkbox"]:checked+span {
          color: #000;
          font-weight: 500;
        }

        .clear-form {
          color: var(--color-red);
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;

          i {
            background-color: var(--color-red);
            margin-right: 19px;
          }
        }
      }
    }
  }
}

.slide-filter-08945 {
  padding: 30px;
  padding-bottom: 0;
  height: 100%;

  .header {
    margin-bottom: 30px;

    .title {
      font-size: 25px;
      font-weight: bold;
    }

    .search {
      position: relative;
      margin: 0;

      input {
        font-family: 'bibi';
        height: 30px;
        color: #000;
        border-color: var(--color-gray);

        &::placeholder {
          color: var(--color-gray);
        }
      }

      i {
        position: absolute;
        top: 5px;
        right: 0;
        background-color: var(--color-gray);
      }
    }
  }

  .car-brand {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat( auto-fill, 88px);
    grid-column-gap: 5px;
    grid-row-gap: 15px;
    transition: all 0.2s;
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: max-content;
      border: 1px solid transparent;
      transition: all 0.2s;

      &:hover {
        border-color: var(--color-red);
      }
      &:hover .title-brand {
        color: #000;
      }

      img {
        width: 100%;
        height: 100%;
        height: auto;
        padding: 8px 15px;
        margin-bottom: 5px;
      }

      .title-brand {
        text-align: center;
        color: var(--color-gray);
        font-size: 13px;
        padding-bottom: 8px;
      }
    }

  }

  .list-parametr {
    .header {
      .title {
        display: flex;
        align-items: center;

        i.rowLightLeft {
          background-color: var(--color-red) !important;
          margin-right: 20px !important;
          cursor: pointer !important;
          font-size: 30px !important;
        }

        span {
          margin-left: 10px;
        }
      }
    }

    > .title {
      color: var(--color-gray);
      font-size: 16px;
      padding-bottom: 20px;
    }

    .list-model {
      display: flex;
      flex-direction: column;
      height: 460px;
      overflow-y: auto;

      .item-list {
        color: #000;
        font-size: 16px;
        margin-left: 20px;
        padding: 20px 20px;
        padding-bottom: 10px;
        font-weight: 500;
        border-bottom: 1px solid var(--color-blackOpacity);
        transition: all 0.2s;

        &:hover {
          color: var(--color-red);
          border-bottom: 1px solid var(--color-red);
        }
      }
    }
  }
}


.mobile-filter-akb {
  display: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  > a:not(.item-category-akb) {
    display: grid;
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

    i {
      background-color: #fff;
      margin-left: 15px;
      font-size: 19px;
    }
  }

  .item-category {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-LightBlue);
    padding: 13%;
    padding-bottom: 10%;

    img.photo {
      width: 100%;
      height: 70%;
      object-fit: contain;
    }

    .title {
      font-weight: 600;
      font-size: 16px;
      color: #000;
    }
  }
}

#mobile-modal-filter {
  top: 0 !important;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: initial;

  .filter-search {
    background-color: #fff;

    .header {
      margin-bottom: 30px;

      .title {
        font-size: 5vw;
        font-weight: bold;
      }

      i {
        font-size: 20px;
        background-color: var(--color-gray);
      }
    }

    .content-selection {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
      margin-bottom: 30px;

      .item-form {
        label {
          margin-bottom: 10px;
        }

        input, select {
          border: none;
          border: 1px solid var(--color-blackOpacity);
          height: 40px;
          font-size: 16px;
          font-weight: 500;
          box-shadow: inherit !important;
          transition: none !important;
          background-color: #fff;
        }

        input {
          width: calc(100% - 40px);
          padding: 0 20px;
          height: 38px;
        }

        .select-dropdown {
          li:not(.disabled) {
            span {
              font-size: 15px;
              color: #000;
              font-weight: 500;
            }

            &:hover {
              background-color: var(--color-LightBlue);
            }
          }
        }
      }

      .two-form {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-gap: 4px;
        align-items: center;

        .line {
          width: 12px;
          margin-left: 2px;
          margin-top: 25px;
          height: 2px;
          background-color: var(--color-blackOpacity);
        }
      }

      .three-form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        align-items: center;

        .line {
          width: 12px;
          margin-left: 2px;
          margin-top: 25px;
          height: 2px;
          background-color: var(--color-blackOpacity);
        }
      }
    }

    .checkbox-parametrs {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;

      [type="checkbox"]+span:not(.lever):after {
        border: 1px solid var(--color-blackOpacity);
        border-radius: 0;
        font-weight: 500;
      }
      [type="checkbox"]:checked+span:not(.lever):after {
        border: 1px solid var(--color-red);
      }

      [type="checkbox"]:checked+span {
        color: #000;
        font-weight: 500;
      }

      .clear-form {
        color: var(--color-red);
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        i {
          background-color: var(--color-red);
          margin-right: 19px;
        }
      }
    }

    .btn-find-count {
      width: 100%;
      color: #fff;
      height: 50px;
      background-color: var(--color-red);
      font-weight: 600;
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
    }
  }
}

#mobile-modal-category {
  top: 0 !important;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: initial;
  background-color: #fff;

  .content {
    padding: 20px;
    background-color: #fff;
  }

  .slide-filter-08945 {

    .step-filter {
      .header {
        i {
          font-size: 20px;
          background-color: var(--color-gray);
        }
      }
    }

    .car-brand {
      height: inherit;
      overflow-x: inherit;
      overflow-y: inherit;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
    }

    .list-parametr {
      .list-model {
        height: inherit;

        .item-list {
          margin-left: 0;
        }
      }
    }
  }


}

</style>
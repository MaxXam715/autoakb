<template>

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
          <div class="link write flex-Vcenter sidenav-trigger" data-target="modal-toggle-WriteToUs">
            <i class="icon mailOpen"></i>
            <a href="#">Написать нам</a>
          </div>

          <div class="line"></div>

          <!-- Обратный звонок -->
          <div class="link write flex-Vcenter sidenav-trigger" data-target="modal-toggle-callBack">
            <i class="icon operator"></i>
            <a href="#">Обратный звонок</a>
          </div>

        </div>

      </div>
      <!-- Конец - Контакты и обратная связь -->


    </div>
  </div>

</template>

<script>
export default {
name: "HeaderTopBar"
}
</script>

<style scoped>

</style>
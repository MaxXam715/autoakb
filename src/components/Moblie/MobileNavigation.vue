<template>

  <!-- Мобильное боковое меню -->
  <div class="sidenav mobileNav" id="MobileNav-modal-toggle">

    <div class="content">

      <!-- Шапка -->
      <div class="header flex-Gcenter-sb">
        <div class="title">Меню</div>
        <div class="closeBtn sidenav-close flex-center waves-effect"><i class="icon rowLightRight"></i></div>
      </div>

      <!-- Выбор города -->
      <div class="select-city flex-Vcenter">
        <i class="icon map2"></i>
        <select class="count browser-default">
          <option value="">Москва</option>
          <option value="" selected>Санкт-Петербург</option>
          <option value="">Доставка по России</option>
        </select>
        <p class="edit">изменить</p>
      </div>

      <!-- Выбор города -->
      <div class="menu-link">
        <a href="" class="link">Новости</a>
        <a href="" class="link">Акции и скидки</a>
        <a href="" class="link">Прайс</a>
        <a href="" class="link">Возврат товара</a>
        <div class="line"></div>
        <a href="" class="link">Подбор АКб</a>
        <a href="" class="link">Услуги</a>
        <a href="" class="link">Доставка и оплата</a>
        <a href="" class="link">Гарантии</a>
        <a href="" class="link">Оптом</a>
        <a href="" class="link">Контакты</a>
        <a href="" class="link">Прием Б/У акб</a>
      </div>

    </div>

    <!-- Фиксированный подвал -->
    <div class="fixed-footer flex-Gcenter-sb">

      <div class="connection-us flex-Vcenter sidenav-trigger" data-target="modal-toggle-callBack">
        <i class="icon phone"></i>
        <p class="title">Позвонить</p>
      </div>

      <div class="line"></div>

      <div class="connection-us flex-Vcenter sidenav-trigger" data-target="modal-toggle-WriteToUs">
        <i class="icon mail"></i>
        <p class="title">Написать</p>
      </div>

    </div>

  </div>
  <!-- Конец - Мобильное боковое меню -->


</template>

<script>
export default {
name: "MobileNavigation"
}
</script>

<style>


</style>
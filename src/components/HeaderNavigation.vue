<template>

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
      <a class="link-nav flex-Vcenter waves-effect waves-light">Доставка и оплата</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Гарантии</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Оптом</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Контакты</a>
      <a class="acceptance-batteries flex-center waves-effect waves-light" href="javascript:void(0);"><span>Прием Б/У АКБ</span></a>
    </div>




  </nav>


</template>

<script>
export default {
name: "HeaderNavigation"
}
</script>

<style scoped>

</style>
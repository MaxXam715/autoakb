<template>

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

</template>

<script>
export default {
name: "HeaderCatalogNav"
}
</script>

<style scoped>

</style>
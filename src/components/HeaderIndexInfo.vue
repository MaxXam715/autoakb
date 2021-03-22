<template>

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
  
</template>

<script>
export default {
name: "HeaderIndexInfo"
}
</script>

<style scoped>

</style>
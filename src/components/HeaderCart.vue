<template>

  <div class="sidenav toggle-cart cart-container" id="slide-out">

    <div class="left-col">

      <div class="header">
        <div class="flex-Vcenter closeBtn sidenav-close">
          <i class="icon arrowRight"></i>
          <p>Закрыть</p>
        </div>
      </div>

      <div class="title-cart flex-Gcenter-sb">
        <p class="title">Корзина покупок</p>
        <p class="count">4 товара</p>
      </div>

      <div class="tabel-grid">

        <div class="header">
          <p>Товар</p>
          <p>Кол-во</p>
          <p>Цена</p>
        </div>

        <div class="row">

          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Аккумулятор Odyssey PC1200 12В 42Ач 540CCA</a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 400 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>


          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-2.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Аккумулятор ALPHALINE AGM 12В 42Ач 460 CCA</a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">4 580 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>



          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-3.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Зарядное устройство для аккумулятора BS BATTERY BTX-9BS</a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">3 990 руб.<span></span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>




          <div class="item">
            <!-- Фото товара -->
            <img src="@/assets/img/product-cart-4.png" alt="product">
            <!-- Наименование товара и ссылка -->
            <a href="#" class="nameProduct-link">Жидкость для стеклоомывателя Gleid Master Blue, -30°c, 5 л</a>
            <!-- Кол-во -->
            <div class="count-btn">
              <i class="icon minus-input"></i>
              <input type="number" value="1">
              <i class="icon plus-input active"></i>
            </div>
            <!-- Цена -->
            <p class="price">1 600 руб.<span>800 руб. за 1 шт</span></p>
            <!-- Удалить позицию -->
            <div class="delete-item">
              <i class="icon close tooltipped" data-html="true" data-position="bottom" data-tooltip="Удалить товар"></i>
            </div>
          </div>

        </div>

      </div>

    </div>


    <div class="right-col">
      <div class="title-cash">Кассовый чек</div>
      <div class="results">
        <div class="item flex-Gcenter-sb">
          <p class="title">Стоимость товаров</p>
          <p class="price">13 570 руб.</p>
        </div>

        <div class="item flex-Gcenter-sb">
          <p class="title">Скидки</p>
          <p class="price">500 руб.</p>
        </div>

        <div class="item flex-Gcenter-sb">
          <p class="title">Утилизация старого АКБ</p>
          <p class="price red-text">Добавить</p>
        </div>

        <div class="item promo-code flex-Gcenter-sb">
          <p class="title">Промо-код</p>
          <input type="text" placeholder="Введите код">
        </div>
      </div>

      <div class="total-price">
        <img  class="flex-center" src="@/assets/img/barcode.svg" alt="">
        <div class="price-result flex-Gcenter-sb">
          <p class="title">Итоговая стоимость</p>
          <p class="price">13 070 руб.</p>
        </div>
        <a href="#" class="flex-center go-shopping-cart waves-effect waves-light">Оформить заказ</a>
      </div>


    </div>

  </div>

</template>

<script>
export default {
name: "HeaderCart"
}



</script>

<style scoped>

</style>
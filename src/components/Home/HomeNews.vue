<template>
  <div>

    <!-- Новости -->
    <div class="home-news container">

      <!-- Заголовок -->
      <div class="head-title-red flex-Vcenter container marginB50">
        <p class="title">Новости</p>
        <div class="line"></div>
      </div>

      <!-- Контент -->
      <div class="content-home-news">

        <a href="#">
          <div class="first-news" :style="{'background-image': 'url(' + require('@/assets/img/news-1.png') + ')'}">
            <p class="date">27 сентября</p>
            <p class="header">Новое поступление автомобильного аккумулятора BOSH S4 028</p>
            <p class="preview-text">Рынок автомобильных аккумуляторов стремительно растёт и меняется, но основные игроки на нём уже закрепили свои позиции. Новая модель S4...</p>
          </div>
        </a>

        <div class="categoty-item">

          <div class="header flex-Vcenter">
            <p class="title">АВТО</p>
            <div class="line"></div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-1.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-2.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-3.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-4.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

        </div>

        <div class="categoty-item">

          <div class="header flex-Vcenter">
            <p class="title">Мото</p>
            <div class="line"></div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-1.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-2.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-3.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-4.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

        </div>

        <div class="categoty-item">

          <div class="header flex-Vcenter">
            <p class="title">АККУМУЛЯТОРЫ</p>
            <div class="line"></div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-1.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-2.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-3.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

          <div class="item-news flex-Vcenter">
            <a href="#"><img class="photo" src="@/assets/img/item-news-4.png" alt="img"></a>
            <div class="text">
              <p class="date">27 сентября</p>
              <a href="#"><p class="header">Бесплатная установка - удобно и выгодно!</p></a>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeNews"
}
</script>

<style lang="less">



</style>
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

.home-news {
  .content-home-news {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;

    .first-news {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 480px;
      padding: 30px;
      color: #fff;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 0.2s;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        transition: all 0.2s;
      }

      &:hover:after {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 90%);
        transition: all 0.2s;
      }

      > * {
        position: relative;
        z-index: 2;
      }

      .date {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .preview-text {
        font-size: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -moz-box;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-clamp: 4;
        box-orient: vertical;
        height: 64px;
      }
    }

    .categoty-item {
      > .header {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;
        margin-bottom: 20px;

        .title {
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 600;
        }

        .line {
          height: 2px;
          background-color: var(--color-LightBlue);
        }
      }

      .item-news {
        align-items: flex-start;
        margin-bottom: 20px;

        a {
          margin: 0;
          line-height: 0;
          color: inherit;
        }

        .photo {
          width: 166px;
          height: 94px;
          object-fit: cover;
        }

        .text {
          margin-left: 10px;
          .date {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 13px;
            color: var(--color-gray);
          }

          .header {
            font-size: 15px;
            font-weight: 700;
            transition: all 0.2s;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -moz-box;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-clamp: 2;
            box-orient: vertical;

            &:hover {
              color: var(--color-red);
            }
          }
        }
      }

    }
  }
}

</style>
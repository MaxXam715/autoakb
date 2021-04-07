<template>
  <div>

    <!-- Детальная страница статьи -->
    <div class="news-article container">

      <!-- Хлебные крошки -->
      <div class="bread-crumbs">
        <a href="/" class="link">Главная</a>
        <a href="/news" class="link">Новости</a>
        <a href="/news" class="link">Аккумуляторы</a>
      </div>

      <div class="container-grid container-midle">

        <div class="left-col">
          <div class="content-article">

            <!-- Название статьи -->
            <p class="title">Новое обновление модельного ряда лодочных аккумуляторов</p>

            <!-- Категория, кто выложил, время публикации -->
            <div class="properties">
              <p class="tag">Аккумуляторы</p>
              <div class="whose-article flex-Vcenter">
                <img class="photo-user" src="@/assets/img/avatar-user.png" alt="avatar">
                <p class="name">Admin</p>
              </div>
              <p class="date-article flex-Vcenter"><i class="icon clock"></i> 1 февраля 2020 (13:45)</p>
            </div>

            <!-- Заставка -->
            <div class="index-photo-article box-proportion ratio16_9" :style="{'background-image': 'url(' + require('/public/news-photo/article-1.png') + ')'}"></div>

            <div class="text-content">
              <p>Рынок тяговых аккумуляторов стремительно растёт и меняется, но основные игроки на нём уже закрепили свои позиции. Компании из Южной Кореи готовы оспаривать лидерство как устоявшихся долгожителей из Японии, так и амбициозных китайских конкурентов. К ноябрю прошлого года корейское трио компаний заняло 34 % рынка аккумуляторных батарей.</p>
              <p>Если учесть, что в начале прошлого года доля LG Energy Solution, Samsung SDI и SK Innovation не превышала 16 %, то можно говорить о более чем двукратном увеличении. За 2020 год корейские производители аккумуляторов увеличили объёмы продаж в денежном выражении на 20 %, а экспорт вырос на 2,9 %, что позволяет говорить об ориентации на внутреннее потребление.</p>
              <p>В текущем году, как уточняет Business Korea со ссылкой на профильную корейскую ассоциацию, ёмкость внутреннего рынка Южной Кореи увеличится на 19,8 %, а объёмы производства в денежном выражении увеличатся на 32 %. Экспорт батарей удастся увеличить на 5,7 % до $7 млрд. Этот показатель растёт уже пять лет подряд, как отмечает источник. Примерно две трети всего объёма производства литий-ионных батарей в Южной Корее в прошлом году пришлись на автомобильный сегмент. Экспорт на этом направлении вырос на 10,6 %. Внутренний рынок электромобилей за прошлый год в Южной Корее продемонстрировал увеличение объёмов продаж на 33,8 %.</p>
            </div>

          </div>
        </div>

        <div class="right-col">

          <div class="home-news">

            <div class="categoty-item">

              <!-- Заголовок -->
              <div class="head-title-red flex-Vcenter container marginB20">
                <p class="title small">Популярное</p>
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

          <div class="category-article">

            <!-- Заголовок -->
            <div class="head-title-red flex-Vcenter container">
              <p class="title small">Категории</p>
              <div class="line"></div>
            </div>

            <!-- Список категорий -->
            <div class="list-category">

              <a href="#">
                <div class="item" :style="{'background-image': 'url(' + require('@/assets/img/cat-name-1.png') + ')'}">
                  <p class="name-cat">Услуги</p>
                  <div class="line"></div>
                  <p class="count">23</p>
                </div>
              </a>

              <a href="#">
                <div class="item" :style="{'background-image': 'url(' + require('@/assets/img/cat-name-2.png') + ')'}">
                  <p class="name-cat">Авто</p>
                  <div class="line"></div>
                  <p class="count">17</p>
                </div>
              </a>

              <a href="#">
                <div class="item" :style="{'background-image': 'url(' + require('@/assets/img/cat-name-3.png') + ')'}">
                  <p class="name-cat">Мото</p>
                  <div class="line"></div>
                  <p class="count">5</p>
                </div>
              </a>

              <a href="#">
                <div class="item" :style="{'background-image': 'url(' + require('@/assets/img/cat-name-4.png') + ')'}">
                  <p class="name-cat">Аккумуляторы</p>
                  <div class="line"></div>
                  <p class="count">26</p>
                </div>
              </a>

            </div>

          </div>


        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "News-article"
}
</script>

<style lang="less">

.news-article {

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 362px;
    grid-gap: 30px;

    .content-article {

      .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .properties {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .tag {
          padding: 5px 15px;
          background-color: #C653B3;
          color: #fff;
          font-size: 14px;
          margin-right: 30px;
        }

        .whose-article {
          .photo-user {
            width: 40px;
            height: 40px;
            border-radius: 50px;
            object-fit: cover;
          }

          .name {
            font-size: 16px;
            color: var(--color-gray);
            font-weight: 500;
            margin-left: 10px;
          }
        }

        .date-article {
          margin-left: auto;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-gray);

          i {
            font-size: 16px;
            background-color: var(--color-gray);
            margin-right: 10px;
          }
        }
      }
    }

    .index-photo-article {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 30px;
    }

    .text-content {
      p {
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        margin-bottom: 30px;
      }
    }
  }

  .category-article {
    margin-top: 50px;
  }
}

</style>
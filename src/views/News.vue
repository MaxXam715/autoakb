<template>
<div>

  <!-- Новости (вывод всей статей) -->
  <div class="container index-news">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
    </div>

    <!-- Заголовок страницы -->
    <div class="header-name-page">
      <p class="title">Новости</p>
    </div>

    <!-- Статьи/новости -->
    <div class="content">

      <div class="left-col">

        <!-- Статьи подтягиваются из файла JSON (/autoakb/public/JSON) -->

        <div class="item-article" v-for="newsArticle in newsArticleList">

          <!-- Статьи/новости -->
          <a href="/news-article">
            <div class="photo box-proportion ratio16_9" v-bind:style="{ 'background-image': 'url(' + newsArticle.photo + ')' }">
              <div class="date">
                <p class="day">{{newsArticle.date.day}}</p>
                <p class="mount">{{newsArticle.date.mount}}</p>
                <p class="year">{{newsArticle.date.year}}</p>
              </div>
            </div>
          </a>

          <!-- Контент -->
          <div class="text-content">
            <a href="/news-article" class="title">{{newsArticle.title}}</a>
            <p class="preview-text">{{newsArticle.textPreview}}</p>
            <div class="bottom-card flex-Gcenter-sb">
              <div class="views flex-Vcenter">
                <i class="icon eye"></i>
                <p class="count">{{newsArticle.count}}</p>
              </div>
              <a href="/news-article" class="link flex-Vcenter">Читать полностью <i class="icon arrowRight"></i></a>
            </div>
          </div>

        </div>

      </div>

      <div class="right-col">

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



        <div class="home-news">

          <div class="categoty-item">

            <!-- Заголовок -->
            <div class="head-title-red flex-Vcenter container">
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


      </div>

      <!-- Пагинация -->
      <Pagination/>

    </div>

  </div>

</div>
</template>

<script>

import Pagination from '@/components/Pagination.vue';


export default {
  components: {
    Pagination
  },

  data(){
    return {
      newsArticleList: [],
    }
  },

  async mounted() {
    this.newsArticleList = await this.getData();
  },

  methods:{

    getData(){
      return fetch('./JSON/news.json').then(response=>response.json())
    }
  }

}
</script>

<style lang="less">

.index-news {

  .content {
    display: grid;
    grid-template-columns: 1fr 362px;
    grid-gap: 30px;

    .left-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: max-content;
      grid-gap: 30px;
    }

    .item-article {
      border: 1px solid var(--color-LightBlue);
      transition: all 0.2s;
      cursor: default;
      height: max-content;

      &:hover {
        border-color: var(--color-red);
      }

      .photo {
        width: 100%;
        background-size: cover;

        .date {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 3;
          background-color: var(--color-red);
          padding: 5px 10px;
          color: #fff;
          text-align: center;

          .day {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: -5px;
          }
          .mount {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
          }
          .year {
            font-size: 21px;
            font-weight: bold;
          }
        }
      }

      .text-content {
        padding: 20px;

        .title {
          font-size: 18px;
          font-weight: bold;
          color: #000;
          line-height: normal;
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

        .preview-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-gray);
          margin-bottom: 20px;
          margin-top: 10px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -moz-box;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          line-clamp: 4;
          box-orient: vertical;
        }

        .bottom-card {
          .views {
            i {
              background-color: var(--color-gray);
              font-size: 20px;
            }

            .count {
              font-size: 15px;
              font-weight: bold;
              color: var(--color-gray);
              margin-left: 10px;
            }
          }

          .link {
            color: var(--color-red);
            font-size: 15px;
            font-weight: 500;

            i {
              background-color: var(--color-red);
              font-size: 8px;
              margin-left: 10px;
            }
          }
        }
      }
    }

    .right-col {

      .categoty-item {
        .head-title-red {
          margin-bottom: 20px;
        }
      }
    }
  }
}

</style>
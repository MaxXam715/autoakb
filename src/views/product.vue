<template>
<div>

  <div class="container product-card">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
      <a href="/Catalog" class="link">Каталог товаров</a>
      <a href="#" class="link">Автомобильные аккумуляторы</a>
    </div>

    <!-- Фото и карточка -->
    <div class="product-content">

      <div class="photo-box">
        <img class="product-photo" src="@/assets/img/goods-1.png" alt="img">
        <div class="parametrs-akb">

          <div class="item">
            <p class="header">220 А/ч</p>
            <p class="info">Емкость</p>
          </div>

          <div class="item">
            <p class="header">1400 А</p>
            <p class="info">Пусковой ток</p>
          </div>

          <div class="item">
            <p class="header">Прямая [+-]</p>
            <p class="info">Полярность</p>
          </div>

          <div class="item">
            <p class="header">518 х 276 х 242 мм</p>
            <p class="info">Габариты</p>
          </div>

        </div>
      </div>

      <div class="description">

        <!-- Наименование -->
        <p class="name-product">
          <span class="category">Автомобильный аккумулятор</span><br>
          <span class="name">Energizer EA70L3 12В 70Ач 760A(EN)</span>
          <span class="article">Артикул #654897</span>
        </p>

        <!-- Наличие и доставка -->
        <div class="InStock-delivery">
          <p class="flex-Vcenter availability InStock check"><i class="icon check"></i>В наличии</p>
          <!-- <p class="flex-Vcenter availability InStock no-check"><i class="icon no-check"></i>Нет наличии</p> -->
          <p class="delivery">Ближайшая доставка - <span>сегодня</span> (при заказе до 18.00)</p>
          <!-- <p class="delivery">Ожидайте поступления</p>-->
        </div>

        <!-- Цена -->
        <div class="price-box">
          <div class="left-col">
            <p class="price">6 700 руб</p>
            <p class="exchange">* 5 800 руб с обменом</p>
          </div>

          <div class="right-col">
            <p class="price-current">Цена актуальна на <span>29.01.2021</span></p>
            <p class="ask-question flex-Vcenter">Задать вопрос о товаре <i class="icon question"></i></p>
          </div>
        </div>

        <!-- Кнопки "Купить" -->
        <div class="btn-buy flex-Vcenter">
          <a href="#" class="add-to-cart waves-effect waves-light">Добавить в корзину</a>
          <a href="#" class="buy-one-click waves-effect ">Купить в 1 клик</a>
        </div>

        <!-- Оставить отзыв -->
        <div class="leave-review flex-Vcenter">
          <p class="title">Получите скидку за отзыв 200 руб.</p>
          <a href="#" class="link">Оставить отзыв</a>
          <img src="@/assets/img/yandex-review.png" alt="img">
        </div>


      </div>

    </div>


  </div>

</div>
</template>

<script>
export default {
name: "product"
}
</script>

<style lang="less">

.product-card {

  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    .photo-box {

      .product-photo {
        width: 100%;
        height: 350px;
        object-fit: contain;
        margin-bottom: 30px;
      }

      .parametrs-akb {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        grid-gap: 20px;

        .item {
          width: auto;

          .header {
            font-weight: 600;
            font-size: 20px;
          }

          .info {
            font-size: 14px;
            color: var(--color-gray);
          }
        }
      }
    }

    .description {
      padding: 40px;
      padding-bottom: 30px;
      background: #FFFFFF;
      box-shadow: 0px 6px 45px rgba(0, 0, 0, 0.07);

      .name-product {
        font-size: 25px;
        color: #000;
        line-height: 34px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .name {
          font-weight: 600;
        }

        .article {
          color: var(--color-gray);
          font-size: 18px;
          padding-left: 20px;
        }
      }

      .InStock-delivery {
        display: flex;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .InStock {
          margin-right: 20px;
          margin-bottom: 20px;
          padding-right: 20px;
          white-space: nowrap;
          border-right: 1px solid var(--color-LightBlue);


          i {
            font-size: 19px;
            margin-right: 10px;
          }

          &.check {
            color: var(--color-green);

            i {
              background-color: var(--color-green);
            }
          }

          &.no-check {
            color: var(--color-red);

            i {
              background-color: var(--color-red);
            }
          }
        }

        .delivery {
          color: var(--color-gray);
          margin-bottom: 20px;

          span {
            font-weight: bold;
          }
        }
      }

      .price-box {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--color-LightBlue);

        .left-col {
          margin-right: 20px;
          padding-right: 30px;
          margin-bottom: 20px;
          border-right: 1px solid var(--color-LightBlue);

          .price {
            font-size: 35px;
            font-weight: bold;
            white-space: nowrap;
          }
          .exchange {
            font-size: 16px;
            font-weight: 500;
            color: var(--color-red);
            white-space: nowrap;
          }
        }

        .right-col {
          margin-bottom: 20px;

          .price-current {
            font-size: 15px;
            margin-bottom: 10px;
            span {
              font-weight: 600;
            }
          }
          .ask-question {
            color: var(--color-gray);
            font-size: 15px;
            border-bottom: 1px dashed var(--color-gray);
            width: max-content;
            cursor: pointer;

            i {
              background-color: var(--color-gray);
              margin-left: 10px;
            }
          }
        }
      }

      .btn-buy {
        border-bottom: 1px solid var(--color-LightBlue);

        .add-to-cart {
          font-size: 16px;
          font-weight: bold;
          padding: 15px 30px;
          color: #fff;
          background-color: var(--color-red);
          margin-right: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
        }
        .buy-one-click {
          font-size: 16px;
          font-weight: bold;
          padding: 15px 30px;
          color: var(--color-red);
          background-color: #fff;
          border: 1px solid var(--color-red);;
          margin-right: 20px;
          margin-bottom: 20px;
          white-space: nowrap;
        }
      }

      .leave-review {
        flex-wrap: wrap;

        .title {
          color: var(--color-gray);
          font-size: 15px;
          margin-right: 20px;
          margin-top: 20px;
        }

        .link {
          font-size: 15px;
          color: #3069B6;
          margin-right: 20px;
          border-bottom: 1px dashed #3069B6;
          margin-top: 20px;
        }

        img {
          width: auto;
          height: 20px;
          margin-top: 20px;
        }
      }
    }
  }
}

</style>
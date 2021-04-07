<template>
<div>

  <!-- Обмен и возврат товара -->
  <div class="return-goods container">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page marginB50">
        <p class="title">Обмен и возврат товара</p>
      </div>

      <p class="index-title marginB50">В соответствии с Законом <span>«О правах потребителей»</span>, Вы имеете право вернуть товар или обменять его на другой даже в случае исправности купленного товара, если по какой-либо причине товар Вам не подошёл</p>

      <div class="container-rules">

        <div class="item">
          <p class="count-rules">01</p>
          <div class="content">
            <p class="header">Сроки возврата или обмена товара</p>
            <p class="text">Вернуть или обменять Вы можете в течение <span>2 недель с даты покупки</span> при условии полного сохранения внешнего вида и работоспособности товара. При этом Вы должны предоставить кассовый и товарный чек, полученные при покупке.</p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">02</p>
          <div class="content">
            <p class="header">Возврат средств покупателю</p>
            <p class="text">Возврат средств покупателю осуществляется в той же форме, в какой он производил оплату товара. При наличном расчёте возврат средств осуществляется непосредственно после возврата товара. При безналичной форме оплаты возврат осуществляется безналичным платежом на расчётный счёт покупателя в течение 3 рабочих дней, не считая дату возврата.</p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">03</p>
          <div class="content">
            <p class="header">Дополнительное условие для АКБ</p>
            <p class="text">Для аккумуляторов действует дополнительное условие – обмен или возврат осуществляются только в том случае, если на аккумулятор не были надеты клеммы (не осталось следов от клемм на электродах). В противном случае <span>обмен и возврат аккумулятора не осуществляются.</span></p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">04</p>
          <div class="content">
            <p class="header">Куда я могу сдать купленый товар?</p>
            <p class="text">Обмен или возврат исправного товара осуществляется по месту приобретения товара, в одном из наших <span class="red-text">магазинов</span>, по предварительной договорённости. Контактный номер телефона: <span class="red-text"><br>+7 (812) 643-03-55.</span></p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">05</p>
          <div class="content">
            <p class="header">Гарантийный <br>срок</p>
            <p class="text">Обмен или возврат товара ненадлежащего качества или вышедшего из строя осуществляется в течение гарантийного срока, в соответствие с правилами, указанными в разделе Гарантии.</p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">06</p>
          <div class="content">
            <p class="header">Какие товары можно вернуть или обменять?</p>
            <p class="text">Возврату или обмену подлежат товары любой категории, приобретённые в нашем магазине.</p>
          </div>
        </div>

        <div class="item">
          <p class="count-rules">07</p>
          <div class="content">
            <p class="header">За чей счет товар доставляется в магазин?</p>
            <p class="text">Покупатель доставляет товар для обмена или возврата самостоятельно, за свой счёт.</p>
          </div>
        </div>

      </div>

    </div>

  </div>


</div>
</template>

<script>
export default {
name: "ReturnGoods"
}
</script>

<style lang="less">

.return-goods {

  .container-midle {
    .header-name-page {
      margin-bottom: 50px;
    }

    .index-title {
      margin: 0 auto;
      max-width: 759px;
      text-align: center;
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 50px;

      span {
        font-weight: 600;
      }
    }

    .container-rules {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;

      .item {
        background-color: var(--color-LightBlue);

        .count-rules {
          font-size: 100px;
          text-align: right;
          margin-bottom: -45px;
          font-weight: 800;
          color: var(--color-LightBlue);
          padding-right: 50px;
          background-color: #fff;
        }

        .content {
          padding: 40px 30px;
          background-color: var(--color-LightBlue);

          .header {
            font-size: 25px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .text {
            color: #000;
            font-size: 15px;
            line-height: 22px;

            span {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

</style>
<template>
  <div>

    <div class="container delivery-Payment delivery-Payment-Payment">

      <!-- Хлебные крошки -->
      <div class="bread-crumbs">
        <a href="/" class="link">Главная</a>
        <a href="/DeliveryPayment" class="link">Доставка и оплата</a>
        <a href="javascript:void(0);" class="link">Оплата</a>
      </div>

      <div class="container-midle">

        <!-- Заголовок страницы -->
        <div class="header-name-page">
          <p class="title">Доставка и оплата</p>
        </div>

        <div class="switch-link flex-Vcenter">
          <a href="/DeliveryPayment" class="btn-default-red">Доставка</a>
          <a href="/DeliveryPayment-Payment" class="btn-default-red active">Оплата</a>
        </div>

        <div class="content">

          <div class="header">
            <div class="left-col">
              <p class="title">Оплата-Онлайн</p>
              <p class="description">Если у Вас есть номер заказа, подтверждённого менеджером, Вы можете оплатить его онлайн с помощью банковской карты.</p>

              <!-- Найти свой заказ -->
              <div class="input-field flex-Vcenter">
                <input placeholder="Введите номер заказа для оплаты" id="first_name" type="text" class="validate">
                <button class="btn-default-red active">Поиск</button>
              </div>

              <!-- Сотрудничество с банками -->
              <div class="bank-cards">
                <div class="item"><img src="@/assets/img/bank-card-mir.png" alt="img"></div>
                <div class="item"><img src="@/assets/img/bank-card-visa.png" alt="img"></div>
                <div class="item"><img src="@/assets/img/bank-card-master.png" alt="img"></div>
                <div class="item"><img src="@/assets/img/bank-card-yandex.png" alt="img"></div>
                <div class="item"><img src="@/assets/img/bank-card-webmoney.png" alt="img"></div>
              </div>

            </div>
            <div class="right-col">
              <img src="@/assets/img/payment-terminal.png" alt="img">
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="delivery-Payment-Payment">
      <div class="payment-methods">
        <div class="container-midle">
          <p class="header">Способы оплаты</p>
          <div class="grid-card-methods">

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">01</p>
                <p class="title">Наличными <br>курьеру</p>
              </div>
              <div class="text">Оплата наличными курьеру при <br> получении</div>
            </div>

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">02</p>
                <p class="title">Безналичный <br>расчет</p>
              </div>
              <div class="text">Товар отгружается после поступления денег на расчетный счет компании</div>
            </div>

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">03</p>
                <p class="title">Электронными <br>деньгами</p>
              </div>
              <div class="text">WebMoney, Яндекс.Деньги</div>
            </div>

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">04</p>
                <p class="title">Банковским <br>переводом</p>
              </div>
              <div class="text">Через Сбербанк или любой другой банк (для частных лиц)</div>
            </div>

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">05</p>
                <p class="title">Эквайринг</p>
              </div>
              <div class="text">Оплата банковскими картами (возможна при покупке в магазине, самовывозе, и при доставке курьером)</div>
            </div>

            <div class="item">
              <div class="top-head flex-Vcenter">
                <p class="count">06</p>
                <p class="title">Банковской картой через интернет</p>
              </div>
              <div class="text">Товар отгружается после поступления денег на расчетный счет компании</div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Alert (оповещение) -->
    <div class="warning-alert container-midle">
      <i class="icon alert"></i>
      <p class="text">Политика возврата. При аннулировании позиций из оплаченного заказа (или при аннулировании заказа целиком) Вы можете заказать другой товар на эту сумму, либо вернуть всю сумму на карту, предварительно написав письмо на e-mail. Возврат производится на ту карту, с которой ранее производилась оплата.</p>
    </div>


  </div>
</template>


<script>
export default {
name: "DeliveryPayment-Payment"
}
</script>

<style lang="less">

.delivery-Payment-Payment {

  .content {

    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      margin-top: 50px;
      margin-bottom: 100px;

      .left-col {
        .title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .description {
          color: var(--color-gray);
          font-size: 16px;
          font-weight: 500;
        }

        .input-field {
          margin-top: 30px;
          margin-bottom: 40px;

          input {
            padding: 0 20px;
            border: none;
            border-top: 1px solid var(--color-blackOpacity);
            border-bottom: 1px solid var(--color-blackOpacity);
            border-left: 5px solid var(--color-red);
            margin: 0;
            height: 46px;
          }
        }

        .bank-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
          grid-gap: 10px;

          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            border: 1px solid #EDF3FA;
            box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.06);
            border-radius: 5px;
            padding: 10px;
            transition: all 0.2s;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
            }

            &:hover {
              box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.14);
            }
          }
        }
      }

      .right-col {
        display: flex;
        img {
          margin-left: auto;
          width: 90%;
          height: auto;
        }
      }
    }
  }

  .payment-methods {
    background-color: var(--color-LightBlue);
    padding: 50px 0;
    margin-bottom: 50px;

    .header {
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      margin-bottom: 70px;
    }

    .grid-card-methods {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;

      .item {
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        border-top: 5px solid var(--color-red);
        padding: 30px;

        .top-head {
          margin-bottom: 10px;

          .count {
            font-size: 70px;
            font-weight: 900;
            margin-right: 30px;
            color: var(--color-LightBlue);
          }

          .title {
            font-size: 20px;
            font-weight: 600;
          }
        }

        .text {
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
}

</style>
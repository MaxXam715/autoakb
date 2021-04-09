<template>
<div>

  <div class="container guarantees-page">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Гарантии</p>
      </div>

      <div class="content">

        <div class="grid-content-top">
          <div class="left-col">
            <p class="header">Гарантии от нашего магазина на любые товары</p>
            <p class="description">На все товары, приобретенные у нас, предоставляется фирменная гарантия. Срок гарантии устанавливается фирмой-производителем. Гарантийный ремонт производится в Авторизированных Сервисных Центрах при наличии правильно заполненного гарантийного талона. Во избежание возможных недоразумений сохраняйте в течение срока службы документы, прилагаемые к товару при его продаже.</p>
          </div>

          <div class="right-col">
            <div class="warranty-description">
              <div class="item flex-Vcenter">
                <div class="count flex-center"><p>01</p></div>
                <p class="description">На все товары, приобретенные у нас, предоставляется фирменная гарантия</p>
              </div>

              <div class="item flex-Vcenter">
                <div class="count flex-center"><p>02</p></div>
                <p class="description">Гарантийный ремонт производится в Авторизированных Сервисных Центрах</p>
              </div>

              <div class="red-box-period flex-center">
                <p class="title">от <span>1 года</span> до <span>4 лет</span></p>
                <p class="description">гарантия</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-grid-bottom">
          <p class="header">Правила приема аккумуляторов на гарантийный ремонт:</p>

          <div class="content">

            <div class="item">
              <p class="count">01</p>
              <p class="text">Нарушения потребителем правил эксплуатации, хранения или транспортировки товара;</p>
            </div>

            <div class="item">
              <p class="count">02</p>
              <p class="text">Действия непреодолимой силы (стихия, пожар и т.п.);</p>
            </div>

            <div class="item">
              <p class="count">03</p>
              <p class="text">Использования изделия для предпринимательской деятельности.</p>
            </div>

            <div class="item">
              <p class="count">04</p>
              <p class="text">Действий третьих лиц: ремонт или внесение несанкционированных изготовителем конструктивных или схемотехнических изменений неуполномоченными лицами; отклонений от Государственных Технических Стандартов (ГОСТов) и норм питающих телекоммуникационных и кабельных сетей; неправильной установки и подключения изделия;</p>
            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- Alert (оповещение) -->
    <div class="warning-alert container-midle">
      <i class="icon alert"></i>
      <p class="text"><span>Статья 23 Закона РФ «О защите прав потребителей»</span> устанавливает право покупателя обменять непродовольственный товар надлежащего качества (т.е. без брака), если он по каким-либо причинам не может быть использован потребителем по назначению. С требованием о замене можно обратиться в течение 14 дней с момента покупки. Товар должен быть сохранен в упаковке.</p>
    </div>

  </div>

</div>
</template>

<script>
export default {
name: "Guarantees"
}
</script>

<style lang="less">

.guarantees-page {
 .container-midle {
   .header-name-page {
     margin-bottom: 50px;
   }

   .content {

     .grid-content-top {
       display: grid;
       grid-template-columns: 1fr 1fr;
       grid-gap: 30px;
       margin-bottom: 100px;

       .left-col {
         .header {
           font-size: 35px;
           font-weight: bold;
           color: #000;
           margin-bottom: 20px;
         }

         .description {
           color: var(--color-gray);
           font-size: 15px;
         }
       }

       .right-col {
         .warranty-description {
           .item {
             margin-bottom: 20px;

             .count {
               width: 80px;
               height: 80px;
               max-width: 80px;
               background-color: #fff;
               border: 1px solid var(--color-blackOpacity);
               margin-right: 50px;

               p {
                 font-size: 60px;
                 color: var(--color-red);
                 font-weight: 900;
                 padding-left: 37px;
               }
             }

             .description {
               font-size: 16px;
               font-weight: 600;
             }
           }

           .red-box-period {
             position: relative;
             background-color: var(--color-red);
             padding: 20px;
             flex-direction: column;
             color: #fff;
             z-index: 2;

             &:after {
               content: '';
               position: absolute;
               top: 20px;
               left: 20px;
               z-index: 1;
               width: 100%;
               height: 100%;
               background-color: var(--color-red);
               opacity: 0.2;
             }

             .title {
               font-size: 30px;
               z-index: 2;

               span {
                 font-weight: 600;
               }
             }

             .description {
               z-index: 2;
               margin-top: 7px;
               font-size: 18px;
             }
           }
         }
       }
     }

     .content-grid-bottom {
       margin-bottom: 50px;

       .header {
         font-size: 25px;
         font-weight: 600;
         margin-bottom: 50px;
       }

       .content {
         display: grid;
         grid-template-columns: 1fr 1fr;
         grid-gap: 30px;

         .item {
           border-top: 5px solid var(--color-red);
           padding: 30px;
           background: #FFFFFF;
           box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

           .count {
             color: var(--color-LightBlue);
             font-size: 70px;
             font-weight: 900;
             margin-bottom: 20px;
           }
         }
       }
     }
   }
 }
}

</style>
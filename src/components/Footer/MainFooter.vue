<template>
  <div>

    <!-- Форма обратной связи -->
    <FooterSubscribeToNewsletter/>

    <footer class="">

      <div class="top-box container-midle">
        <div class="column-item col-1">

          <div class="contact-us">
            <i class="icon phone"></i>
            <div class="text">
              <a href="tel:+7 (812) 401-63-62" class="connection">+7 (812) <span>401-63-62</span></a>
              <p class="info">пн-пт 09:00-21:00</p>
              <p class="info">сб-вс 10:00-21:00</p>
            </div>
          </div>

          <div class="contact-us">
            <i class="icon mailOpen"></i>
            <div class="text">
              <a href="mailto:info@autoakb.ru" class="connection">info@<span>autoakb.ru</span></a>
              <p class="info">Напишите нам</p>
            </div>
          </div>

          <div class="contact-us">
            <i class="icon map2"></i>
            <div class="text">
              <a href="javascript:void();" class="connection">Санкт-Петербург,</a>
              <p class="info">просп. Энгельса, 145к1,</p>
              <p class="info">просп. Алекс. Фермы, 29ВГ</p>
            </div>
          </div>

        </div>

        <div class="column-item">
          <p class="header">Каталог товаров</p>
          <a href="#" class="link">Авто аккумуляторы</a>
          <a href="#" class="link">Мото аккумуляторы</a>
          <a href="#" class="link">Грузовые аккумуляторы</a>
          <a href="#" class="link">Тяговые аккумуляторы</a>
          <a href="#" class="link">Аккумуляторы для водного транспорта</a>
          <a href="#" class="link">Аккумуляторы для детских электромобилей</a>
          <a href="#" class="link">Аккумуляторы для охранных и противопожарных систем</a>
          <a href="#" class="link">Аккумуляторы для бесперебойных систем</a>
          <a href="#" class="link">Дополнительное оборудование</a>
        </div>

        <div class="column-item">
          <p class="header">Интернет-магазин</p>
          <a href="#" class="link">Каталог товаров</a>
          <a href="#" class="link">Прайс лист</a>
          <a href="#" class="link">Возврат товара</a>
          <a href="#" class="link">Доставка</a>
          <a href="#" class="link">Оплата</a>
          <a href="#" class="link">Гарантии</a>
          <a href="#" class="link">Прием Б/У АКБ</a>
          <a href="#" class="link">Оптом</a>
        </div>

        <div class="column-item">
          <p class="header">О магазине</p>
          <a href="#" class="link">Контакты</a>
          <a href="#" class="link">Связаться с нами</a>
          <a href="#" class="link">Новости</a>
        </div>

      </div>

      <div class="line"></div>

      <div class="bottom-box container-midle flex-Vcenter">
        <p class="all-rights-reserved">@ Все права защищены - 2020</p>
        <a href="#" class="terms-sale">Условия продажи и обработка персональных данных</a>
        <div class="social-network flex-Vcenter">
          <a href="#" class="tooltipped" data-position="top" data-tooltip="WhatsApp"><i class="icon whatsapp"></i></a>
          <div class="line"></div>
          <a href="#" class="tooltipped" data-position="top" data-tooltip="instagram"><i class="icon instagram"></i></a>
        </div>
      </div>

      <ButtonPageUp/>


    </footer>


  </div>
</template>

<script>

import FooterSubscribeToNewsletter from '@/components/Footer/FooterSubscribeToNewsletter.vue';
import ButtonPageUp from '@/components/Footer/ButtonPageUp.vue';

export default {
  components:{
    FooterSubscribeToNewsletter,
    ButtonPageUp
  }
}

</script>

<style lang="less">

footer {
  margin-top: 100px !important;

  .top-box {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 50px;
    margin-bottom: 100px;
    padding: 0 20px;
    padding-top: 50px;


    > .column-item {
      display: flex;
      flex-direction: column;

      &.col-1 {
        .contact-us {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;

          i {
            font-size: 20px;
            background-color: var(--color-red);
            margin-right: 15px;
          }

          .connection {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            margin: 0;
            line-height: normal;

            span {
              color: var(--color-red);
            }
          }

          .info {
            font-size: 14px;
            color: var(--color-gray);
          }
        }
      }

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .link {
        font-size: 15px;
        color: var(--color-gray);
        margin-bottom: 10px;
        transition: all 0.2s;

        &:hover {
          color: var(--color-red);
        }
      }
    }
  }

  > .line {
    width: 100%;
    height: 1px;
    background-color: var(--color-blackOpacity);
  }

  .bottom-box {
    padding: 50px 20px;

    .all-rights-reserved {
      font-size: 16px;
      font-weight: bold;
      color: var(--color-gray);
      margin-right: 70px;
    }

    .terms-sale {
      font-size: 16px;
      font-weight: bold;
      color: var(--color-gray);
      transition: all 0.2s;

      &:hover {
        color: var(--color-red);
      }
    }

    .social-network {
      margin-left: auto;

      a {
        line-height: 0;
        margin: 0;
      }

      i {
        font-size: 20px;
        background-color: var(--color-gray);

        &.whatsapp:hover {
          background-color: #0DC143;
        }

        &.instagram:hover {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        }
      }

      .line {
        width: 1px;
        height: 20px;
        background-color: var(--color-blackOpacity);
        margin: 0 20px;
      }
    }
  }

}

</style>

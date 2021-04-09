<template>
<div>

  <div class="wholesale-page container">

    <!-- Хлебные крошки -->
    <div class="bread-crumbs">
      <a href="/" class="link">Главная</a>
    </div>

    <div class="container-midle">

      <!-- Заголовок страницы -->
      <div class="header-name-page">
        <p class="title">Аккумуляторы оптом</p>
      </div>

      <div class="content">

        <div class="left-col">
          <form>

            <div class="input-field">
              <label class="active" for="first_name2">Организация: <span>*</span></label>
              <input value="" id="first_name2" type="text" class="validate">
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">ФИО</label>
              <input value="" id="first_name2" type="text" class="validate">
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Город <span>*</span></label>
              <input value="" id="first_name2" type="text" class="validate">
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Email <span>*</span></label>
              <input value="" id="first_name2" type="text" class="validate">
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Телефон</label>
              <input value="" id="first_name2" type="text" class="validate">
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Тип организации</label>
              <select name="" id="">
                <option value="">Автосервис</option>
              </select>
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Примерная сумма закупок за месяц</label>
              <select name="" id="">
                <option value="">до 500$</option>
              </select>
            </div>

            <div class="input-field">
              <label class="active" for="first_name2">Тип организации</label>
              <textarea ></textarea>
            </div>

            <button class="btn-default-red">Отправить заявку</button>

          </form>
        </div>

        <div class="right-col">
          <div class="content">
            <p class="header">Хотите заказать <br> аккумуляторы оптом?</p>
            <p class="description">Для оптовых покупателей мы всегда готовы предложить выгодные цены на аккумуляторы.</p>
            <div class="step-fill-form">

              <div class="item">
                <div class="circle"></div>
                <p class="description">Чтобы получить оптовый прайс-лист, заполните, пожалуйста, форму</p>
              </div>

              <div class="item">
                <div class="circle"></div>
                <p class="description">Поля, отмеченные звёздочкой *, обязательны для заполнения</p>
              </div>

              <div class="item">
                <div class="circle"></div>
                <p class="description">Консультации по вопросам оптовых поставок:</p>
              </div>

              <div class="item">
                <div class="circle"></div>
                <div class="description text-red"><a href="tel:+7 (812) 401-63-62">+7 (812) 401-63-62</a> | <a href="mailto:info@spb.autoakb.ru">info@spb.autoakb.ru</a></div>
              </div>

            </div>
          </div>

          <img src="@/assets/img/optom-akb.png" alt="img">

        </div>

      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  mounted() {
    $('select').formSelect();
  }
}
</script>

<style lang="less">

.wholesale-page {

  .container-midle {
    > .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;

      > .left-col {
        form {

          .input-field {
            input {
              border: 1px solid var(--color-blackOpacity);
              margin: 0;
              margin-top: 10px;
              padding: 0 20px;
            }

            input,
            select {
              width: calc(100% - 40px);
              padding: 0 20px;
              color: var(--color-gray);
              font-weight: bold;
            }

            textarea {
              border: 1px solid var(--color-blackOpacity);
              height: 150px;
              resize: none;
              padding: 20px;
              color: var(--color-gray);
              font-weight: bold;
            }

            label {
              position: relative;
              margin: 0;
              font-size: 15px;
              color: #000;
              font-weight: 500;

              span {
                color: var(--color-red);
              }
            }
          }

          button {
            margin-right: inherit !important;
            margin-left: auto;
          }
        }
      }

      .right-col {

        img {
          width: 100%;
          height: auto;
          margin-top: 30px;
        }

        .content {
          background-color: var(--color-LightBlue);
          padding: 50px;

         > .header {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          > .description {
            font-size: 17px;
            color: var(--color-gray);
            font-weight: 400;
            margin-bottom: 50px;
          }

          > .step-fill-form {
            .item {
              position: relative;
              display: grid;
              grid-template-columns: auto 1fr;
              grid-gap: 30px;
              min-height: 70px;

              &:last-child {
                min-height: auto;

                .description {
                  padding-bottom: 0;
                }

                &:after {
                  display: none;
                }
              }

              &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 10.5px;
                width: 3px;
                height: 100%;
                background-color: var(--color-red);
                z-index: 1;
              }

              .circle {
                position: relative;
                z-index: 3;
                width: 25px;
                height: 25px;
                max-height: 25px;
                background-color: var(--color-red);
                border: 7px solid #fff;
                border-radius: 50px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              }

              .description {
                font-weight: 500;
                font-size: 16px;
                color: #30334B;
                padding-bottom: 30px;

                a {
                  color: var(--color-red) !important;
                }

                &.text-red {
                  color: var(--color-red);
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
<template>

  <!-- Modal Structure -->
  <div id="modal-bu" class="modal acceptanceBatteries">
    <div class="modal-content">

      <!-- Шапка -->
      <div class="header flex-Gcenter-sb">
        <p class="title">Прием Б/У аккумуляторов</p>
        <div class="flex-Vcenter close-btn modal-close">
          <p>Закрыть</p><i class="icon close"></i>
        </div>
      </div>

      <form action="#" class="form-select-akb">

        <!-- Выбор напряжения -->
        <div class="select-voltage flex-Vcenter">
          <label>
            <input name="group1" type="radio" checked />
            <span>Red</span>
            <div class="style-btn waves-effect waves-light">Напряжение 12В</div>
          </label>
          <label>
            <input name="group1" type="radio" />
            <span>Yellow</span>
            <div class="style-btn waves-effect waves-light">Напряжение 6В</div>
          </label>
        </div>

        <!-- Список моделей -->
        <div class="tabel-grid">

          <div class="header">
            <p>Емкость АКБ</p>
            <p>Кол-во</p>
            <p>Скидка</p>
          </div>

          <div class="content">

            <div class="item flex-Vcenter">
              <label class="flex-Vcenter">
                <input type="checkbox" class="filled-in input-batteries">
                <span></span>
              </label>

              <div class="content-row">
                <p class="acceptance">1-6 А/ч</p>
                <!-- Кол-во -->
                <div class="count-btn">
                  <i class="icon minus-input"></i>
                  <input type="number" value="1">
                  <i class="icon plus-input active"></i>
                </div>
                <p class="price">20 руб.</p>
              </div>
            </div>


            <div class="item flex-Vcenter">
              <label class="flex-Vcenter">
                <input type="checkbox" class="filled-in input-batteries">
                <span></span>
              </label>

              <div class="content-row">
                <p class="acceptance">7-15 А/ч</p>
                <!-- Кол-во -->
                <div class="count-btn">
                  <i class="icon minus-input"></i>
                  <input type="number" value="1">
                  <i class="icon plus-input active"></i>
                </div>
                <p class="price">40 руб.</p>
              </div>
            </div>


            <div class="item flex-Vcenter">
              <label class="flex-Vcenter">
                <input type="checkbox" class="filled-in input-batteries">
                <span></span>
              </label>

              <div class="content-row">
                <p class="acceptance">16-34 А/ч</p>
                <!-- Кол-во -->
                <div class="count-btn">
                  <i class="icon minus-input"></i>
                  <input type="number" value="1">
                  <i class="icon plus-input active"></i>
                </div>
                <p class="price">50 руб.</p>
              </div>
            </div>


            <div class="item flex-Vcenter">
              <label class="flex-Vcenter">
                <input type="checkbox" class="filled-in input-batteries">
                <span></span>
              </label>

              <div class="content-row">
                <p class="acceptance">35-54 А/ч</p>
                <!-- Кол-во -->
                <div class="count-btn">
                  <i class="icon minus-input"></i>
                  <input type="number" value="1">
                  <i class="icon plus-input active"></i>
                </div>
                <p class="price">500 руб.</p>
              </div>
            </div>


            <div class="item flex-Vcenter">
              <label class="flex-Vcenter">
                <input type="checkbox" class="filled-in input-batteries">
                <span></span>
              </label>

              <div class="content-row">
                <p class="acceptance">55-65 А/ч</p>
                <!-- Кол-во -->
                <div class="count-btn">
                  <i class="icon minus-input"></i>
                  <input type="number" value="1">
                  <i class="icon plus-input active"></i>
                </div>
                <p class="price">700 руб.</p>
              </div>
            </div>


          </div>

        </div>

        <div class="footer flex-Gcenter-sb">
          <p class="discount">Ваша скидка: <span>750 руб</span></p>
          <button class="add-cart waves-effect waves-light" disabled>Сделать скидку</button>
        </div>


      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "AcceptanceBatteries",
  mounted() {
    this.$nextTick(() => {
      $('input.input-batteries').click(function () {

        let input = $(this);
        let inputAll = $('input.input-batteries');

        if ( $(this).is(':checked') ) {
          input.parent().parent().addClass('active');
        } else {
          input.parent().parent().removeClass('active');
        }

        inputAll.each(function () {
          if ( $(inputAll).is(':checked') > 0 ) {
            $('.acceptanceBatteries .add-cart').removeAttr('disabled')
          } else {
            $('.acceptanceBatteries .add-cart').attr('disabled', 'disabled')
          }
        })

      });
    })
  }
}
</script>

<style lang="less">
.acceptanceBatteries {
  max-width: 790px;
  max-height: 830px;
  overflow: hidden;
  max-height: inherit !important;

  .modal-content {
    padding: 30px;
    background-color: #fff;
  }

  .header {
    margin-bottom: 30px;

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .close-btn {
      p {
        font-size: 20px;
        color: var(--color-gray);
      }

      i {
        background-color: var(--color-gray);
        margin-left: 20px;
        font-size: 20px;
      }
    }
  }

  .form-select-akb {
    .select-voltage {
      margin-bottom: 20px;

      > label {
        span {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }

        div {
          transition: all 0.2s;
        }

        input:not(:checked)+span+ .style-btn {
          font-size: 16px;
          font-weight: bold;
          width: max-content;
          background-color: var(--color-LightBlue);
          color: var(--color-gray);
          padding: 15px 30px;
          margin-right: 10px;
          cursor: pointer;
        }

        input:checked+span+ .style-btn {
          font-size: 16px;
          font-weight: bold;
          width: max-content;
          background-color: var(--color-red);
          color: #fff;
          padding: 15px 30px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }

    .tabel-grid {
      position: relative;
      overflow: auto;
      height: calc(100vh - 420px);

      .header {
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        grid-gap: 20px;
        padding: 10px;
        background-color: #fff;
        position: sticky;
        top: 0;
        z-index: 3;

        p {
          font-size: 16px;
          color: var(--color-gray);
        }
      }

      .content {

        .item {
          padding: 0 10px;
          margin-bottom: 5px;

          &.active {
            background-color: var(--color-LightBlue);
          }

          .content-row {
            display: grid;
            grid-template-columns: 2.75fr 1fr 1fr;
            grid-gap: 20px;
            width: 100%;
            height: 56px;
            align-items: center;

            .acceptance {
              font-size: 16px;
              color: #000;
              font-weight: 600;
            }

            .price {
              font-size: 18px;
              font-weight: bold;
              color: #000;
              white-space: nowrap;
            }
          }
        }

        label {
          display: flex;
          width: 20px;
          margin-right: 20px;
        }
      }
    }

    .discount {
      font-size: 25px;
      font-weight: bold;

      span {
        color: var(--color-red);
      }
    }

    .add-cart {
      background-color: var(--color-red);
      border: none;
      font-size: 16px;
      font-weight: 600;
      padding: 15px 30px;
      color: #fff;
      cursor: pointer;

      &:disabled {
        background-color: var(--color-gray);
        cursor: no-drop;
      }
    }
  }
}

</style>
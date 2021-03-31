<template>
  <div>

    <!-- Подписаться на рассылку -->
    <div class="footer-Subscribe-Newsletter">
      <div class="container flex-Gcenter-sb">
        <div class="left-col flex-Vcenter">
          <img src="@/assets/icons/send-mail-footer.svg" alt="">
          <div class="text">
            <p class="title">Подписаться на рассылку</p>
            <p class="description">Будте в курсе всех новинок, новостей и акций</p>
          </div>
        </div>

        <div class="right-col">
          <form action="" class="flex-Vcenter">
            <div class="input-box flex-Vcenter">
              <i class="icon mail"></i>
              <input type="text" placeholder="E-Mail">
            </div>
            <button class="send-form waves-effect waves-light">Подписаться</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


</script>

<style lang="less">

.footer-Subscribe-Newsletter {
  padding: 50px 0;
  color: #fff;
  background: linear-gradient(90.21deg, #2F343A 0.07%, #101511 99.93%);
  margin-top: 100px;

  .left-col {
    img {
      margin-right: 50px;
    }
    .title {
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }

    .description {
      font-size: 16px;
      color: var(--color-gray);
    }
  }

  .right-col {
    form {
      .input-box {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding-left: 17px;

        i {
          background-color: #fff;
          font-size: 20px;
          margin-right: 17px;
        }

        input {
          margin: 0;
          border: none !important;
          width: 200px;
          padding-right: 17px;
          color: #fff;
        }
      }

      .send-form {
        background-color: var(--color-red);
        color: #fff;
        border: none;
        font-weight: bold;
        padding: 13px 30px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

</style>

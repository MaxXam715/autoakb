<template>

  <!-- Мобильное боковое меню -->
  <div class="sidenav mobileNav" id="MobileNav-modal-toggle">

    <div class="content">

      <!-- Шапка -->
      <div class="header flex-Gcenter-sb">
        <div class="title">Меню</div>
        <div class="closeBtn sidenav-close flex-center waves-effect"><i class="icon rowLightRight"></i></div>
      </div>

      <!-- Выбор города -->
      <div class="select-city flex-Vcenter">
        <i class="icon map2"></i>
        <select class="count browser-default">
          <option value="">Москва</option>
          <option value="" selected>Санкт-Петербург</option>
          <option value="">Доставка по России</option>
        </select>
        <p class="edit">изменить</p>
      </div>

      <!-- Выбор города -->
      <div class="menu-link">
        <a href="" class="link">Новости</a>
        <a href="" class="link">Акции и скидки</a>
        <a href="" class="link">Прайс</a>
        <a href="" class="link">Возврат товара</a>
        <div class="line"></div>
        <a href="Catalog" class="link">Подбор АКб</a>
        <a href="" class="link">Услуги</a>
        <a href="" class="link">Доставка и оплата</a>
        <a href="" class="link">Гарантии</a>
        <a href="" class="link">Оптом</a>
        <a href="" class="link">Контакты</a>
        <a href="#modal-bu" class="link modal-trigger">Прием Б/У акб</a>
      </div>

      <!-- Фиксированный подвал -->
      <div class="fixed-footer flex-Gcenter-sb">

        <div class="connection-us flex-Vcenter sidenav-trigger" data-target="modal-toggle-callBack">
          <i class="icon phone"></i>
          <p class="title">Позвонить</p>
        </div>

        <div class="line"></div>

        <div class="connection-us flex-Vcenter sidenav-trigger" data-target="modal-toggle-WriteToUs">
          <i class="icon mail"></i>
          <p class="title">Написать</p>
        </div>

      </div>

    </div>

  </div>
  <!-- Конец - Мобильное боковое меню -->


</template>

<script>
export default {
name: "MobileNavigation"
}
</script>

<style lang="less">

// Мобильное боковое меню
.mobileNav {
  background-color: #fff !important;
  width: 90% !important;
  padding-left: 30px !important;
  padding-bottom: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  padding-bottom: 0px !important;

  .header {
    height: 70px;
    border-bottom: 1px solid rgba(0,0,0, .1);

    .title {
      font-weight: bold;
      font-size: 25px;
    }

    .closeBtn {
      width: 70px;
      height: 100%;

      i {
        font-size: 30px;
      }
    }
  }

  .select-city {
    position: relative;
    height: 60px;
    border-bottom: 1px solid rgba(0,0,0, .1);

    i {
      background-color: var(--color-red);
      font-size: 20px;
    }

    select {
      position: relative;
      z-index: 2;
      height: auto;
      padding: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      font-size: 18px;
      font-weight: 600;
      padding-left: 10px;
      color: var(--color-red);
      background-color: transparent;
      font-family: 'bibi';
    }

    .edit {
      position: absolute;
      right: 30px;
      color: var(--color-gray);
    }
  }

  .menu-link {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 40px;
    height: calc(100vh - 199px);
    overflow: auto;

    .link {
      color: #000;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
    }

    .line {
      background-color: rgba(0,0,0, .1);
      width: 100%;
      height: 1px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  .fixed-footer {
    position: fixed;
    left: 0;
    background-color: var(--color-LightBlue);
    width: 100%;
    padding: 23px 30px;
    border-top: 1px solid rgba(0,0,0, .1);

    .connection-us {

      i {
        font-size: 17px;
        background-color: var(--color-red);
        margin-right: 20px;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px dashed var(--color-red);
        padding-bottom: 2px;
      }
    }

    .line {
      width: 1px;
      height: 20px;
      background-color: rgba(0,0,0, .1);
    }
  }
}

</style>
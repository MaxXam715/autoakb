<template>

  <nav class="desktop-nav">
    <div class="container flex-Vcenter">

      <a href="#modal-open_catalog" class="open-catalog flex-Vcenter waves-effect waves-light modal-trigger">
        <i class="icon menu"></i>
        <span>Каталог товаров</span>
        <i class="icon arrowDown"></i>
      </a>

      <router-link to="/Catalog" class="link-nav flex-Vcenter waves-effect waves-light" exact>Подбор АКБ</router-link>


      <div class="link-nav flex-Vcenter waves-effect waves-light dropdown-trigger" data-target="dropdown-service">Услуги<i class="icon arrowDown"></i>
        <!-- Выпадающий список -->
        <ul id='dropdown-service' class='dropdown-content'>
          <li><a class="link" href="javascript:void(0);">Установка АКБ</a></li>
          <li><a class="link" href="javascript:void(0);">Зарядка АКБ</a></li>
          <li><a class="link" href="javascript:void(0);">Выездная диагностика</a></li>
          <li><a class="link" href="/returnGoods">Возврат и обмен</a></li>
        </ul>
      </div>
      <!--        <router-link :to="{name:'Catalog'}" >Home</router-link>-->
      <a class="link-nav flex-Vcenter waves-effect waves-light">Доставка и оплата</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Гарантии</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Оптом</a>
      <a class="link-nav flex-Vcenter waves-effect waves-light" href="javascript:void(0);">Контакты</a>
      <a class="acceptance-batteries flex-center waves-effect waves-light modal-trigger" href="#modal-bu"><span>Прием Б/У АКБ</span></a>
    </div>

  </nav>


</template>

<script>
export default {
name: "HeaderNavigation"
}
</script>

<style lang="less">

// Навигация
.desktop-nav {
  position: relative;
  width: 100%;
  height: 50px;
  box-shadow: none;
  background: linear-gradient(90.21deg, #2F343A 0.07%, #101511 99.93%);

  a {
    height: 100%;
  }

  .open-catalog {
    background-color: var(--color-red);
    padding-left: 30px;
    padding-right: 20px;
    max-width: 264px;

    i {
      background-color: #fff;

      &.menu {
        font-size: 20px;
      }

      &.arrowDown {
        font-size: 10px;
      }
    }

    span {
      color: #fff;
      font-size: 15px;
      margin-left: 20px;
      margin-right: 37px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }

  .link-nav {
    position: relative;
    color: #fff;
    font-size: 16px;
    padding: 0 30px;
    height: 100%;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(255,255,255, 0.1);
    }

    i {
      background-color: #FFFFFF;
      font-size: 10px;
      margin-left: 10px;
    }

  }

  .dropdown-content {
    top: 50px !important;
    padding: 10px 0;
    width: max-content !important;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);

    li {
      min-height: initial;

      &:hover {
        background-color: var(--color-LightBlue);
      }
    }

    a {
      padding: 10px 30px;
      color: #000;
      font-size: 16px;
      font-weight: 500;

      &:hover {
        background-color: initial;
      }

      span {
        color: var(--color-red);
        font-weight: 600;
      }
    }
  }

  .acceptance-batteries {
    margin-left: auto;
    margin-right: 10px;
    width: 176px;
    background-color: #505050;
    text-align: center;
    transform: skew(-20deg);

    span {
      transform: skew(20deg);
      font-weight: 600;
    }
  }



}


</style>
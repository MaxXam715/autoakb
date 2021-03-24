<template>

  <div class="mobile-bottom_bar">

    <a href="#" class="nav-bottom-link active waves-effect">
      <i class="icon labelLogo"></i>
      <p class="title">Главная</p>
    </a>

    <a href="#modal-open_catalog" class="nav-bottom-link open-catalog modal-trigger waves-effect">
      <i class="icon menu"></i>
      <p class="title">Каталог</p>
    </a>

    <a href="#" class="nav-bottom-link waves-effect">
      <i class="icon search"></i>
      <p class="title">Поиск</p>
    </a>

    <a href="#" class="nav-bottom-link waves-effect">
      <i class="icon akb"></i>
      <p class="title">Подбор</p>
    </a>

    <a href="#" class="nav-bottom-link waves-effect sidenav-trigger" data-target="slide-out">
      <i class="icon cart"></i>
      <p class="title">Корзина</p>
    </a>

  </div>

</template>

<script>
export default {
name: "MobileBottomBar"
}
</script>

<style lang="less" scoped>

.mobile-bottom_bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  background-color: #fff;
  border-top: 1px solid var(--color-blackOpacity);
  padding: 0px 10px;
  padding-bottom: env(safe-area-inset-bottom, 10px);

  .nav-bottom-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 50px;

    &.active {
      i {
        background-color: var(--color-red);
      }
    }

    .title {
      font-size: 12px;
      color: var(--color-gray);
      margin-top: 10px;
    }

    i {
      font-size: 22px;
      background-color: var(--color-gray);
    }
  }
}

</style>
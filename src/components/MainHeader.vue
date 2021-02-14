<template lang="pug">
  .main-header
    .test
      router-link(:to="{name:'Home'}") Главная
      router-link(:to="{name:'Catalog'}") Каталог
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.main-header{
  width: 100%;
  height: 200px;
  border: 1px red solid;
}
</style>
<template>
  <div>
    
    <div class="gallery">
      <img src="https://wallpaperscave.ru/images/original/18/08-15/sports-motocross-76074.jpg" alt="">
      <img src="https://img.youscreen.ru/wall/14977236643469/14977236643469_1920x1200.jpg" alt="">
      <img src="https://wallpaperscave.ru/images/original/18/02-21/sports-motocross-19774.jpg" alt="">
    </div>
    
  </div>
</template>

<script>

</script>

<style lang="less">

.gallery {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: auto;

  img {
    width: inherit;
    height: 100%;
    object-fit: cover;
  }
}

</style>

<template>

  <div id="modal-open_catalog" class="modal open_catalog bottom-sheet product-catalog">
    <!-- Шапка -->
    <div class="header-modal_catalog">
      <img src="@/assets/img/logo.svg" alt="logo">
      <p class="title">Каталог товаров</p>
      <div class="modal-close waves-effect waves-red btn-flat flex-Vcenter"><span>Закрыть</span><i class="icon close"></i></div>
    </div>
    <!-- Контент -->
    <div class="grid-navigation">

      <!-- Категории -->
      <div class="list-categories wow animate__animated">
        <div class="group">
          <p class="title">Аккумуляторы для транспорта</p>
          <div class="list">
            <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>01</span>Авто аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>02</span>Мото аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/03-prev-cat.png"><span>03</span>Грузовые аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>04</span>Лодочные аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>05</span>Аккумуляторы START-STOP</p>
            <p class="itemCat" data-src="/menu-category/03-prev-cat.png"><span>06</span>EFB аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/01-prev-cat.png"><span>07</span>AGM аккумуляторы</p>
            <p class="itemCat" data-src="/menu-category/02-prev-cat.png"><span>08</span>Гелевые аккумуляторы</p>
          </div>
        </div>
      </div>

      <!-- Превью категории -->
      <div class="category-preview">
        <div class="contain opacity_0 wow animate__animated">
          <div class="title op0">Автомобильные акб</div>
          <div class="box-prev-img">
            <img class="photo-cat" src="">
          </div>
        </div>
      </div>

      <!-- Производитель -->
      <div class="manufacturer wow animate__animated">
        <div class="contain opacity_0 wow animate__animated">
          <div class="title flex-Vcenter"><i class="icon rowLightLeft"></i>Производитель</div>

          <div class="group">
            <p class="letter">A</p>
            <div class="link">
              <a href="#">AFA</a>
              <a href="#">AlphaLINE</a>
              <a href="#">ATLAS</a>
            </div>
          </div>

          <div class="group">
            <p class="letter">B</p>
            <div class="link">
              <a href="#">AFA</a>
              <a href="#">AlphaLINE</a>
              <a href="#">ATLAS</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
name: "HeaderCatalogNav"
}
</script>

<style lang="less">

// Контент
.modal.product-catalog {

  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: initial;
  max-height: initial;
  color: #000;
  padding: 30px 50px 0 50px;


  .header-modal_catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 100px;

    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      color: #000000;
    }

    .modal-close {
      justify-content: flex-end;
      text-align: right;
      font-size: 20px;
      font-weight: 500;
      width: max-content;
      margin-left: auto;
      text-transform: none;

      i {
        margin-left: 20px;
      }
    }
  }

  .grid-navigation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: calc(100vh - 200px);
    overflow: hidden;

    .animate__animated {
      animation-duration: 0.7s;
    }

    .list-categories {
      border-right: 1px solid #E6E6E6;
      opacity: 1;
      overflow-x: auto;
      transition: all 1s;

      &::-webkit-scrollbar-thumb { height: 50px;  cursor: pointer; background-color: transparent; border-radius: 30px; cursor: pointer;}

      .group {
        width: 95%;

        .title {
          position: relative;
          font-size: 25px;
          color: var(--color-gray);
          font-weight: bold;
          margin-bottom: 40px;
          white-space: nowrap;

          &:after {
            content: '';
            position: absolute;
            top: 48px;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, rgba(255,255,255,1) 0%, var(--color-red) 50%, rgba(255,255,255,1) 100%);
          }
        }

        .list {

          p {
            display: inline-block;
            width: 100%;
            font-size: 30px;
            color: #000000;
            font-weight: bold;
            padding: 17px 30px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 1px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
              background: rgba(0, 0, 0, 0.04);
            }

            &:last-child {
              margin-bottom: 20px;
            }

            span {
              font-size: 25px;
              color: var(--color-gray);
              font-weight: 400;
              margin-right: 60px;
              width: 31px;
            }
          }
        }
      }
    }

    .category-preview {
      border-right: 1px solid #E6E6E6;
      padding: 0 50px;

      .contain {
        height: 100%;
        --animate-duration: 0.5s;
      }

      .title {
        font-size: 25px;
        color: var(--color-gray);
        font-weight: bold;
        margin-bottom: 40px;
      }

      .box-prev-img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        transition: all 0.2s;
      }

      .photo-cat {
        width: 100%;
        max-width: 430px;
        height: 100%;
        max-height: 340px;
        background-size: cover;
        object-fit: contain;
      }
    }

    .manufacturer {
      padding-left: 50px;

      .title {
        font-size: 25px;
        color: var(--color-gray);
        font-weight: bold;
        margin-bottom: 40px;

        i {
          display: none;
          background-color: var(--color-red);
          margin-right: 15px;
          font-size: 23px;
        }
      }

      .letter {
        position: relative;
        font-size: 25px;
        font-weight: bold;
        color: var(--color-red);
        margin-bottom: 30px;

        &:after {
          content: '';
          position: absolute;
          top: 45px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #ccc;
        }
      }

      .link {

        a {
          display: flex;
          width: 100%;
          color: #000;
          font-size: 18px;
          font-weight: 600;
          padding: 13px 30px;

          &:hover {
            background: rgba(0, 0, 0, 0.04);
          }

          &:last-child {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}

</style>
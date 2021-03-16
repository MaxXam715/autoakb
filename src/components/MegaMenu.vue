<template>
  <!-- Каталог товаров (меню) -->
  <div id="modal-open_catalog" class="modal open_catalog bottom-sheet product-catalog">
    <!-- Шапка -->
    <div class="header-modal_catalog">
      <img src="@/assets/img/logo.svg" alt="logo">
      <p class="title">Каталог товаров</p>
      <div class="modal-close waves-effect waves-red btn-flat flex-Vcenter">Закрыть<i class="icon close"></i></div>
    </div>
    <!-- Контент -->
    <div class="grid-navigation">

      <!-- Категории -->
      <div class="list-categories">
        <div v-for="currentItem in nav" class="group">
          <p class="title">{{currentItem.title}}</p>
          <div class="list">
            <p v-for="(child,index) in currentItem.children"
               @mouseover="hoverToggle(child,$event)"
               @mouseout="hoverToggle(child,$event)"
               @click="selectToggle(child,$event)"
            >
              <span>{{index|modIndex}}</span>{{child.title}}
            </p>
          </div>
        </div>
      </div>

      <!-- Превью категории -->
      <transition>
        <div v-if="isHovered" class="category-preview">
          <div class="title">{{currentChildren.title}}</div>
          <div class="box-prev-img">
            <img :src="currentChildren.photo" alt="">
          </div>
        </div>
      </transition>

      <!-- Производитель -->
      <transition>
        <div v-if="isSelected" class="manufacturer">
          <div class="title">Производитель</div>
          <div v-for="(brands,letter) in currentChildren.brands " :key="letter">
            <p class="letter">{{letter}}</p>
            <div v-for="brand in brands" class="link">
              <a :href="brand.link">{{brand.title}}</a>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
  <!-- Конец - Каталог товаров (меню) -->
</template>

<script>
export default {

  data(){
    return {
      nav: [],
      currentCategory: 0,
      currentChildren: null,
      isHovered:false,
      isSelected:false,
    }
  },


  async mounted() {
    this.nav = await this.getData();
  },

  filters:{
    modIndex(v){
      if(v<9) return '0' + (v+1)
      return v+1;
    }
  },


  methods:{

    getData(){
      return fetch('./categories.json').then(response=>response.json())
    },

    hoverToggle(item,event){
      if(!this.isSelected){
        this.isHovered = !this.isHovered;
        this.currentChildren = item
      }
    },
    selectToggle(item,event){
      this.isSelected = true;
      this.currentChildren = item

    }
  }

}
</script>
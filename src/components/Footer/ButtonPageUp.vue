<template>
<div>

  <div class="btn-page-up" id="scroll_top">
    <p class="title">НАВЕРХ</p>
    <div class="circle flex-center"><i class="icon arrowDown"></i></div>
  </div>

</div>
</template>

<script>
export default {
  mounted() {
    $(function(){
      $('#scroll_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
      });

      $(window).scroll(function(){
        if($(window).scrollTop() > 600) {
          $('#scroll_top').addClass('visible');
        } else {
          $('#scroll_top').removeClass('visible');
        }
      });
    });
  }
}



</script>

<style lang="less">

.btn-page-up {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 40px;
  bottom: 90px;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.15em;
    color: var(--color-gray);
    transform: rotate(-90deg);
    margin-left: -4px;
    margin-bottom: 42px;
    text-transform: uppercase;
  }

  .circle {
    width: 55px;
    height: 55px;
    background-color: var(--color-red);
    box-shadow: 0px 5.5px 18.3333px rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-gray);
    }

    i {
      background-color: #fff;
      font-size: 15px;
      transform: rotate(-180deg);
      margin-top: -3px;
    }
  }
}

</style>
<template>

  <!-- Форма обратного звонка -->
  <div id="modal-toggle-WriteToUs" class="sidenav callback-forms">

    <!-- шапка -->
    <div class="header flex-Gcenter-sb">
      <p class="title">Напишете нам</p>
      <i class="icon close modal-close sidenav-close"></i>
    </div>

    <!-- Инфо -->
    <div class="info">
      <p class="index-title">info@autoakb.ru</p>
      <p class="text">Вы можете позвонить в наш магазин или мы сами свяжемся с вами в удобное для Вас время.</p>
    </div>

    <!-- Форма -->
    <div class="form">

      <div class="input-field">
        <input placeholder="+7 (___) ___ - __ - __" id="first_tel2" type="tel" class="title validate phone_4 input-tel">
        <label for="first_tel2" class="active">Телефон</label>
      </div>

      <div class="input-field">
        <input placeholder="Введите имя" id="first_name2" type="text" class="title validate input-name">
        <label for="first_name" class="active">Имя</label>
      </div>

      <div class="input-field">
        <textarea name="" id="" type="text"></textarea>
        <label for="first_name2" class="active">Ваше письмо</label>
      </div>

    </div>


    <!-- Успешная отправка -->
    <div class="successful-sending wow animate__animated animate__fadeIn">
      <img src="@/assets/img/successful-sending.svg" alt="check">
      <p class="text">Ваше письмо успешно отправлено!</p>
    </div>

    <!-- Кнопка отправить -->
    <button class="btn send-form waves-effect waves-light">Оставить заявку</button>
    <button class="btn close-form sidenav-close waves-effect waves-light wow animate__animated animate__fadeIn">Закрыть</button>



  </div>

</template>

<script>
export default {
  name: "WriteToUs"
}
</script>

<style scoped>

</style>
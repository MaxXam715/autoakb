<template>

  <!-- Форма обратного звонка -->
  <div id="modal-toggle-callBack" class="sidenav callback-forms">

    <!-- шапка -->
    <div class="header flex-Gcenter-sb">
      <p class="title">Обратная связь</p>
      <i class="icon close modal-close sidenav-close"></i>
    </div>

    <!-- Инфо -->
    <div class="info">
      <p class="index-title">+7 (812) 401-63-62</p>
      <p class="text">Вы можете позвонить в наш магазин или мы сами свяжемся с вами в удобное для Вас время.</p>
    </div>

    <!-- Форма -->
    <div class="form">

      <div class="input-field">
        <input placeholder="+7 (___) ___ - __ - __" id="first_tel" type="tel" class="title validate phone_4 input-tel">
        <label for="first_tel" class="active">Телефон</label>
      </div>

      <div class="input-field">
        <input placeholder="Введите имя" id="first_name" type="text" class="title validate input-name">
        <label for="first_name" class="active">Имя</label>
      </div>

      <div class="input-field">
        <select class="select-time">
          <option value="" disabled selected>Выбрать время</option>
          <option value="1">Перезвонить сейчас</option>
          <option value="1">Через 5 мин</option>
          <option value="1">Через 1 час</option>
          <option value="1">Через 2 часа</option>
          <option value="1">В течении дня</option>
        </select>
        <label for="first_name" class="active">Когда перезвонить?</label>
      </div>

    </div>


    <!-- Успешная отправка -->
    <div class="successful-sending wow animate__animated animate__fadeIn">
      <img src="@/assets/img/successful-sending.svg" alt="check">
      <p class="text">Ваша заявка успешно отправлена!</p>
    </div>

    <!-- Кнопка отправить -->
    <button class="btn send-form waves-effect waves-light">Оставить заявку</button>
    <button class="btn close-form sidenav-close waves-effect waves-light wow animate__animated animate__fadeIn">Закрыть</button>



  </div>

</template>

<script>
export default {
name: "CallBack"
}
</script>

<style scoped>

</style>
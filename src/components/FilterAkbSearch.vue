<template>
<div>

  <div class="filter-search-akb">

    <div class="content-selection">

      <!-- Брен -->
      <div class="item-form">
        <label>Категория</label>
        <select>
          <option value="" disabled selected>Выбрать</option>
          <option value="1">Автомобильные акб</option>
          <option value="2">Мото акб</option>
          <option value="3">Грузовые акб</option>
          <option value="3">Тяговые акб</option>
        </select>
      </div>

      <!-- Брен -->
      <div class="item-form">
        <label>Брен</label>
        <select>
          <option value="" disabled selected>Выбрать</option>
          <option value="1">Любой</option>
          <option value="2">Bosh</option>
          <option value="3">Akra</option>
          <option value="4">Varta</option>
        </select>
      </div>

      <!-- Емкость А/ч -->
      <div class="two-form">
        <div class="item-form">
          <label>Емкость А/ч</label>
          <input type="text" placeholder="0">
        </div>
        <div class="line"></div>
        <div class="item-form">
          <label class="opacity-0">Емкость А/ч</label>
          <input type="text" placeholder="0">
        </div>
      </div>

      <!-- Тип корпуса (габариты) -->
      <div class="item-form">
        <label>Тип корпуса (габариты)</label>
        <select>
          <option value="" disabled selected>Выбрать</option>
          <option value="1">Bosh</option>
          <option value="2">Akra</option>
          <option value="3">Varta</option>
        </select>
      </div>

      <!-- Ток пуска А -->
      <div class="two-form">
        <div class="item-form">
          <label>Ток пуска А</label>
          <input type="text" placeholder="0">
        </div>
        <div class="line"></div>
        <div class="item-form">
          <label class="opacity-0">Ток пуска А</label>
          <input type="text" placeholder="0">
        </div>
      </div>


      <!-- Полярность -->
      <div class="item-form">
        <label>Полярность</label>
        <select>
          <option value="" disabled selected>Выбрать</option>
          <option value="1">Bosh</option>
          <option value="2">Akra</option>
          <option value="3">Varta</option>
        </select>
      </div>


      <!-- Технология -->
      <div class="item-form">
        <label>Технология</label>
        <select>
          <option value="" disabled selected>Выбрать</option>
          <option value="1">Bosh</option>
          <option value="2">Akra</option>
          <option value="3">Varta</option>
        </select>
      </div>


      <!-- Ток пуска А -->
      <div class="three-form">
        <div class="item-form">
          <label>Ток пуска А</label>
          <input type="text" placeholder="Длина">
        </div>
        <div class="item-form">
          <label class="opacity-0">Ток пуска А</label>
          <input type="text" placeholder="Ширина">
        </div>
        <div class="item-form">
          <label class="opacity-0">Ток пуска А</label>
          <input type="text" placeholder="Высота">
        </div>
      </div>


      <!-- Ток пуска А -->
      <div class="two-form">
        <div class="item-form">
          <label>Ток пуска А</label>
          <input type="text" placeholder="0">
        </div>
        <div class="line"></div>
        <div class="item-form">
          <label class="opacity-0">Ток пуска А</label>
          <input type="text" placeholder="0">
        </div>
      </div>

      <!-- Цена -->
      <div class="two-form">
        <div class="item-form">
          <label>Цена</label>
          <input type="text" placeholder="От">
        </div>
        <div class="line"></div>
        <div class="item-form">
          <label class="opacity-0">Цена</label>
          <input type="text" placeholder="До">
        </div>
      </div>

    </div>

    <div class="checkbox-parametrs">

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Боковые, болт (USA)</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Грузовые, болт (RUS)</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Низкий</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Нижнее крепление</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Грузовые под гайку</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Узкие (Ø14,7/13,1)</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>4 клеммы</span>
      </label>

      <label class="flex-Vcenter">
        <input type="checkbox" class="filled-in input-batteries">
        <span>Стандартные (Ø19,5/17,9)</span>
      </label>

      <p class="clear-form"><i class="icon eraser flex-Vcenter"></i>Очистить фильтр</p>

    </div>

  </div>

</div>
</template>

<script>
export default {

  mounted() {
    $('select').formSelect();

  }

}

</script>

<style lang="less">

.filter-search-akb {

  .header {
    .find-col {
      color: var(--color-red);
      font-size: 20px;
      font-weight: 600;
      transition: all 0.2s;

      i {
        font-size: 16px;
        margin-left: 10px;
        background-color: var(--color-red);
        transition: all 0.2s;
      }

      &:hover {
        color: var(--color-gray);
      }
      &:hover i {
        margin-left: 15px;
      }
    }
  }

  .content-selection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

    .item-form {
      label {
        margin-bottom: 10px;
      }

      input, select {
        border: 1px solid var(--color-blackOpacity);
        margin: 0;
        margin-top: 5px;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
      }

      input {
        width: calc(100% - 40px);
        padding: 0 20px;
        height: 38px;
      }

      .select-dropdown {
        li:not(.disabled) {
          span {
            font-size: 15px;
            color: #000;
            font-weight: 500;
          }

          &:hover {
            background-color: var(--color-LightBlue);
          }
        }
      }
    }

    .two-form {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      grid-gap: 4px;
      align-items: center;

      .line {
        width: 12px;
        margin-left: 2px;
        margin-top: 25px;
        height: 2px;
        background-color: var(--color-blackOpacity);
      }
    }

    .three-form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      align-items: center;

      .line {
        width: 12px;
        margin-left: 2px;
        margin-top: 25px;
        height: 2px;
        background-color: var(--color-blackOpacity);
      }
    }
  }

  .checkbox-parametrs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    [type="checkbox"]+span:not(.lever):after {
      border: 1px solid var(--color-blackOpacity);
      border-radius: 0;
      font-weight: 500;
    }
    [type="checkbox"]:checked+span:not(.lever):after {
      border: 1px solid var(--color-red);
    }

    [type="checkbox"]:checked+span {
      color: #000;
      font-weight: 500;
    }

    .clear-form {
      color: var(--color-red);
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;

      i {
        background-color: var(--color-red);
        margin-right: 19px;
      }
    }
  }

}

</style>

$(document).ready(function() {

    // Инициализация materialize UI
    M.AutoInit();
    // dropdown (materialize UI)
    $('.dropdown-trigger').dropdown();

    // Выбор города из шапки
    $('.dropdown-content.city a').click(function () {
        let $temp = $(this).text();
        let $city = $('.select-city .select-btn span');

        $city.text('');
        $city.append($temp);

        $('.dropdown-content.city a').removeClass('active');
        $('.dropdown-content.city a i').remove();
        $(this).addClass('active');
        $(this).append('<i class="icon dot"></i>');
    })

});
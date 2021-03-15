$(document).ready(function() {

    // Инициализация materialize UI
    M.AutoInit();
    // Инициализация Анимации при появлении на экране
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

    // Выделение красным цветом номера в шапке
    $('header .index-info .contact .index-text.phone, .desktop-nav .modal.open_catalog .grid-navigation .list-categories .group .title').each(function(index, element) {
        var heading = $(element);
        var word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/); // split on spaces
        last_word = word_array.pop();             // pop the last word
        first_part = word_array.join(' ');        // rejoin the first words together

        heading.html([first_part, ' <span class="color-red">', last_word, '</span>'].join(''));
    });


    // Открытие корзины
    $('.toggle-cart').sidenav({
        edge: 'right', // открыть окно справа
        inDuration: '400', // анимация открытия
        outDuration: '300', // анимация открытия
    });


    // Окно Каталога товаров
    $('.modal.open_catalog').modal({
        inDuration: 400,
        outDuration: 500
    });





    $(categories.cat).each(function(index, item) {

        let listCategories = $('.product-catalog .list-categories .group .list');
        let categoryPreview = $('.product-catalog .category-preview');
        let manufacturer = $('.product-catalog .manufacturer .group');
        const output = categories.cat[0].manufacturer[0].models.map(user => user.nameManuf);


        listCategories.append('<p data-src="' + item.photo + '"><span>' + item.number + '</span>' + item.name + '</p>');
        manufacturer.append('<p class="letter">' + item.manufacturer[0].letter + '</p><div class="link"><a href="' + item.manufacturer[0].models[0].link + '">' + item.manufacturer[0].models[0].nameManuf + '</a></div>');



        for(var i = 1; i < output.length; i++)
        {
            manufacturer.append('<p class="letter">' + item.manufacturer[0].letter + '</p><div class="link"><a href="#">' + output + '</a></div>');
        }



        console.log(categories)
        console.log(output);

    });




});
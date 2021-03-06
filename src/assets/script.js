
export default function() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Инициализация materialize UI
    M.AutoInit();

    // dropdown (materialize UI)
    $('.dropdown-trigger').dropdown();

    // Выбор города из шапки
    $('.dropdown-content.city a').click(function() {
        let $temp = $(this).text();
        let $city = $('.select-city .select-btn span');

        $city.text('').append($temp);

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
        last_word = word_array.pop(); // pop the last word
        first_part = word_array.join(' '); // rejoin the first words together

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

    $('.product-catalog .list-categories .itemCat').mouseover(function() {
        let imgSrc = $(this).attr('data-src');
        $('.product-catalog .category-preview img').attr('src', imgSrc);

        let srcClass = $('.product-catalog .category-preview .contain');
        srcClass.removeClass('opacity-0');
        srcClass.removeClass('animate__fadeOut');
        srcClass.addClass('animate__fadeIn');

    })

    $('.product-catalog .list-categories .itemCat').mouseout(function() {
        let srcClass = $('.product-catalog .category-preview .contain');
        let proverka = $('.product-catalog .list-categories .itemCat');

        if (!$(proverka).hasClass("active")) {
            srcClass.addClass('opacity-0');
            srcClass.addClass('animate__fadeOut');
            srcClass.removeClass('animate__fadeIn');
        }

        $('.product-catalog .list-categories .itemCat').removeClass('active')

    });

    $('.product-catalog .list-categories .itemCat').click(function() {

        $(this).addClass('active');

        let srcImg = $('.product-catalog .category-preview .contain');

        srcImg.removeClass('opacity-0');
        srcImg.removeClass('animate__fadeOut');
        srcImg.addClass('animate__fadeIn');

        let srcClass = $('.product-catalog .manufacturer .contain');
        srcClass.removeClass('opacity-0');
        srcClass.removeClass('animate__fadeOut');
        srcClass.addClass('animate__fadeIn');
    })


    $('.open-catalog').click(function() {
        if ($(window).width() < 700) {

            let ListMenu = $('.product-catalog .list-categories');
            let itemListMenu = $('.product-catalog .list-categories .itemCat');
            let ListManufacturer = $('.product-catalog .manufacturer');
            let itemListManufacturer = $('.product-catalog .manufacturer .title');
            let gridNavigation = $('.product-catalog .grid-navigation');

            itemListMenu.click(function() {
                ListMenu.addClass('animate__fadeOutLeft').hide()
                ListManufacturer.addClass('animate__slideInRight').fadeIn();
            });

            itemListManufacturer.click(function() {
                ListMenu.removeClass('animate__fadeOutLeft').addClass('animate__fadeInLeft').fadeIn();
                ListManufacturer.removeClass('animate__slideInRight').hide();
            });
        }
    })



    let g_top = 0;
    $(window).scroll(function() {
        let top = $(this).scrollTop();

        if ( top > g_top ) {
            $('.mobile-top_bar').addClass('show-toggle');
        } else {
            $('.mobile-top_bar').removeClass('show-toggle');
        }

        g_top = top;

        if (window.pageYOffset <= 70) {
            $('.mobile-top_bar').removeClass('show-toggle');
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })


    // Форма обратного звонка
    $('#modal-toggle-callBack').sidenav({
        edge: 'right', // открыть окно справа
        inDuration: '400', // анимация открытия
        outDuration: '300', // анимация открытия
    });

    // Форма обратного звонка
    $('#modal-toggle-WriteToUs').sidenav({
        edge: 'right', // открыть окно справа
        inDuration: '400', // анимация открытия
        outDuration: '300', // анимация открытия
    });

    // Мобильное боковое меню
    $('#MobileNav-modal-toggle').sidenav({
        edge: 'right', // открыть окно справа
        inDuration: '400', // анимация открытия
        outDuration: '300', // анимация открытия
    });


    $(".phone_4").mask("+7 (999) 999-99-99");


    // Отражение блока об успешной отправке заявке
    $('.callback-forms .send-form').click(function () {
        $(this).toggle();
        $('.callback-forms .form').toggle();
        $('.callback-forms .successful-sending').toggleClass('active');
        $('.callback-forms .close-form').toggle();
    })

    // Отражение блока об успешной отправке заявке
    $('.callback-forms .close-form').click(function () {
        $('.callback-forms .form').toggle();
        $('.callback-forms .successful-sending').toggleClass('active');
        $('.callback-forms .close-form').toggle();
        $('.callback-forms .send-form').toggle();
    })


        // Кастомные кнопки + - для input
    $(function() {

        // Убавляем кол-во по клику
        $('.count-btn .minus-input').click(function() {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);

            if (count < 2) {
                $(this).parent().find('.minus-input').removeClass('active')
            }

        });

        // Прибавляем кол-во по клику
        $('.count-btn .plus-input').click(function() {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) + 1;
            count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
            $input.val(parseInt(count));

            if (count > 1) {
                console.log('Добавляем +')
                $(this).parent().find('.minus-input').addClass('active')
            }

        });

    });


}
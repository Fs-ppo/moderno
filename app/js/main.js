$(function(){

    $(".products-slider__inner").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive:[
            {
                breakpoint: 1850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ] 
    });

    $(".rate_star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $(".icon-th-list").on('click', function(){
        $('.product_item').addClass('list');
        $(".icon-th-list").addClass('active');
        $(".icon-th-large").removeClass('active');
    });

    $(".icon-th-large").on('click', function(){
        $('.product_item').removeClass('list')
        $(".icon-th-large").addClass('active');
        $(".icon-th-list").removeClass('active');
    });

    $(".menu__btn").on('click', function(){
        $('.menu__list').slideToggle();
    });
    $(".header__btn-menu").on('click', function(){
        $('.header__box').toggleClass('active');
    });

    $('input, select').styler({
        locale: 'en',
        locales: {
            'en': {
                filePlaceholder: 'No File choosen',
                fileBrowse: 'Choose File.',
                fileNumber: 'Selected files: %s',
            }
        },
    });

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs, .settings__tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    var mixer = mixitup(".products__inner-wrapper");
    
});
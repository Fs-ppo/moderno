$(function(){



    var mixer = mixitup('.products__inner-wrapper');

    $(".products-slider__inner").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });

    $(".rate_star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });



    
});
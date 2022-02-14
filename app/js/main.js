$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="right"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="right"></img>',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-dotshead'
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
    });
    $('.surf-slider').slick({
        
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="right"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="right"></img>',
        slidesToShow: 4,
        slidesToScroll: 1,      
        asNavFor: '.slider-map',
    })
   $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,  
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect:true,
    })
});
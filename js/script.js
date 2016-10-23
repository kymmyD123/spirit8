$(document).ready(function(){
    $('.slick-js').slick({
        slidesToScroll: 4,
        slidesToShow: 4,
        arrows: false,
        dots: true
    });
    $('.slick-js-testimonial').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
});
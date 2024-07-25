$(document).ready(function(){
    $('.slick_content').slick({
        dots: true,
        infinite: true,
        speed: 1100,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

$('[data-fancybox="Gallery"]').fancybox({
    loop: true
});
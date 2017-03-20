/**
 * Created by Александра on 15.02.2017.
 */
$(document).ready(function () {

    $('.slider-main').slick({
        slidesToShow: 1,
        asNavFor: '.slider-nav',
        arrows: false,
        centerMode: true,
        centerPadding: '10px'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        asNavFor: '.slider-main',
        centerMode: true,
        centerPadding: '1px'
    });

    $('.colors .circle').click(function () {
       var index = $(this).attr('data-slide') ;
       console.log(index);
        $('.slider-nav').slick('slickGoTo', index);
    });
});

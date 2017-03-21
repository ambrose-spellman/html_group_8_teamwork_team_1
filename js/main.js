/**
 * Created by Александра on 15.02.2017.
 */

function setSidemenuToggling() {
    $('.side-submenu .sidebar-title a').click(function(e){
        e.preventDefault();
        var id = $(e.target).attr('data-toggle');
        console.log(id);
        var submenu = $(id);
        submenu.hasClass('active') ? submenu.removeClass('active') : submenu.addClass('active');
    })
}

$(document).ready(function () {
    setSidemenuToggling();

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

    $('.main-slider .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

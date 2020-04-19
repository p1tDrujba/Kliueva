$(document).ready(function(){

    // var imgWidth = $('.slider-popup').width();
    // var calc = `calc(50% - ${imgWidth/2}px)`;
    // $('.slider-popup').css('left', calc);
    
    $('.summary-page').click(function() {
        $(this).addClass('active-page');
        $(this).removeClass('not-active')
        $('.about-page').removeClass('active-page')
        $('.portfolio-page').removeClass('active-page')
        $('.about-page').addClass('not-active')
        $('.portfolio-page').addClass('not-active')
        $('.about').removeClass('show')
        $('.portfolio').removeClass('show')
        $('.summary').addClass('show')
        
    })

    $('.about-page').click(function() {
        $(this).addClass('active-page');
        $(this).removeClass('not-active')
        $('.summary-page').addClass('not-active')
        $('.portfolio-page').addClass('not-active')
        $('.summary-page').removeClass('active-page')
        $('.portfolio-page').removeClass('active-page')
        $('.summary').removeClass('show')
        $('.portfolio').removeClass('show')
        $('.about').addClass('show')
    })

    $('.portfolio-page').click(function() {
        $(this).addClass('active-page');
        $(this).removeClass('not-active');
        $('.summary-page').addClass('not-active')
        $('.about-page').addClass('not-active')
        $('.summary-page').removeClass('active-page')
        $('.about-page').removeClass('active-page')
        $('.summary').removeClass('show')
        $('.about').removeClass('show')
        $('.portfolio').addClass('show')
    })

    $('.menu-btn').click(function() {
        $(this).toggleClass('menu-btn-active');
        $('.mobile-nav-menu').toggleClass('mobile-nav-menu-active');
        $('.mobile-nav-menu').toggleClass('bord-menu');
        $('.mobile-nav-top').toggleClass('bord')
    })

});


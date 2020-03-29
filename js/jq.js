// $(document).on('click','.menu-btn', function(e) {
//     e.preventDefault;
//     $(this).toggleClass('menu-btn_active');
//     $('.mob-menu__bot').toggleClass('mob-menu__bot_active')
// });


$(document).ready(function(){
    
    $('.summary-page').click(function() {
        $(this).addClass('active-page');
        $('.about-page').removeClass('active-page')
        $('.portfolio-page').removeClass('active-page')
        $('.about').removeClass('show')
        $('.portfolio').removeClass('show')
        $('.summary').addClass('show')
    })

    $('.about-page').click(function() {
        $(this).addClass('active-page');
        $('.summary-page').removeClass('active-page')
        $('.portfolio-page').removeClass('active-page')
        $('.summary').removeClass('show')
        $('.portfolio').removeClass('show')
        $('.about').addClass('show')
    })

    $('.portfolio-page').click(function() {
        $(this).addClass('active-page');
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

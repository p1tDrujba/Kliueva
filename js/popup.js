$(document).ready(function(){




$('.popup').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/MosYoga2.jpg')
})

$('.popup2').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/Delivery2.jpg')
})

$('.popup3').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/portfolio2.jpg')
})

$('.popup4').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/MosYoga2.jpg')
})

$('.popup5').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/Delivery2.jpg')
})

$('.popup6').click(function() {   
    $('.slider-popup-img').attr('src', './Images/slider/portfolio2.jpg')
})


$('.slider-popup').click(function() {
    $('.slider-popup-img').toggleClass('lupa');
    $('.slider-overlay').toggleClass('pupa');
    
    if ($('.slider-popup-img').hasClass('lupa')) {
        $("html,body").css("overflow","auto");
        $('.slider-popup-img').removeClass('more')
    } else {
        $("html,body").css("overflow","hidden"); $('html, body').animate({scrollTop: 0},500);
        $('.slider-popup-img').addClass('more')
    }
})

$('.slider-overlay').click(function() {
    $(this).hide();
    $('.slider-popup').hide();
    $("html,body").css("overflow","auto");
    $('.slider-popup-img').removeClass('lupa')
})

$('.jopec').click(function(){
    $('.slider-popup').show();
    $('.slider-overlay').show();
    $("html,body").css("overflow","hidden");
})


    
    
});
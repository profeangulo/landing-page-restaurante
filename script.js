// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){
    
    // Activación de Slick Slider
    $('.slick-personas').slick({
        // JSON - Javascript Object Notation
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    
    
    // Activación de transición del menú principal
    $('nav#menu-principal a, nav#menu-principal-mobile a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });
    
    
    // Función doble Abrir-Cerrar del menú Responsive
    // Setters y Getters
    $('#abrir-menu').click(function(){
        $('#abrir-menu').hide();
        $('#cerrar-menu').show();
        
        $('#menu-moviles').animate({
            right: 0
        },700,'easeOutExpo');
        
        event.preventDefault();
    });
    
    $('#cerrar-menu, nav#menu-principal-mobile a').click(function(){
        $('#abrir-menu').show();
        $('#cerrar-menu').hide();
        
        $('#menu-moviles').animate({
            right: -290
        },700,'easeOutExpo');
        
        event.preventDefault();
    });
    
    
    // Función Sticky Header
    $(window).scroll(function(){
        if ($(this).scrollTop() > 55) {
            $('header').css('box-shadow','0 3px 2px rgba(0,0,0,0.15)');
        } else {
            $('header').css('box-shadow','0 5px 3px rgba(0,0,0,0)');
        }
    });
});

// En CSS el tiempo se mide en segundos = 0.5s
// En JS el tiempo se mide en milisegundos = 500





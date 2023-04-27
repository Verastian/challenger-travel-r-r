

$(() => {
    // Detectar el Scroll para modificar el color de fondo y el color de los textos en en navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $('.navbar').height()) {
            $('.navbar').addClass('navbar-bg-in').removeClass('navbar-bg-out');
        } else {
            $('.navbar').addClass('navbar-bg-out').removeClass('navbar-bg-in');
        }// fin de la condición
    });



});



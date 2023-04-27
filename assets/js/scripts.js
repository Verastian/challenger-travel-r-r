

$(() => {
    // Detectar el Scroll para modificar el color de fondo y el color de los textos en en navbar
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $('.navbar').height()) {
            $('.navbar').addClass('navbar-bg-in').removeClass('navbar-bg-out');
        } else {
            $('.navbar').addClass('navbar-bg-out').removeClass('navbar-bg-in');
        }// fin de la condición
    });

    // Agregar smooth scrolling automatico a todos los enlaces con la clase "page-scroll"
    $(".page-scroll").on('click', function (event) {
        console.log(this.hash)
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } // fin de la condición
    });

});



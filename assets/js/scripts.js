

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
    // Data Form
    $(document).on('submit', 'form', function (event) {
        event.preventDefault();

        let name = $('#name').val();
        let subject = $('#password').val();
        let message = $('#message').val();

        if (!name || !subject || !message) {
            $('#alert-modal').modal('show');

        } else {
            // alert('Formulario e]nviado con éxito');
            $('.alert').show();
            $('form')[0].reset();
            setTimeout(function () {
                $('.alert').fadeOut();
            }, 2000);
        }// fin de la condición
    });


});

$(() => {
    var myModal = $('#myModal');
    var myInput = $('#myInput');

    myModal.on('shown.bs.modal', function () {
        myInput.focus();
    });


    $('[data-bs-toggle="tooltip"]').each(function () {
        new bootstrap.Tooltip($(this));
    });

})


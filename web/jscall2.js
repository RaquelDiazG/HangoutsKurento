/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var y = document.getElementsByClassName('active item');
console.log(y);
$(document).ready(function () {

//CAROUSEL

    $('#myCarousel').each(function () {
        $(this).carousel({
            interval: false
        });
    });

    $('[id=carousel-selector-0').addClass('selected');
    // handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        id = parseInt(id);
        $('#myCarousel').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
    });

    // when the carousel slides, auto update
    $('#myCarousel').on('slid', function (e) {
        var id = $('.item.active').data('slide-number');
        id = parseInt(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id=carousel-selector-' + id + ']').addClass('selected');
    });

//FULLSCREEN

    //Funcion que se activa al evento click del button o boton
    $('#fullscreen').click(function () {
        // Codigo para activar pantalla completa en Chrome o Safari 5
        
        //seleccionamos el id (numero)del video
         var idVideo=document.getElementsByClassName('active item')[0].getAttribute('data-slide-number');
         console.log(idVideo);
         //lo convertimos a la etiqueta original
         var etiqueta="#video"+idVideo;
         console.log(etiqueta);
         //mostramos ese video en pantalla completa
        $(etiqueta)[0].webkitEnterFullScreen();

        /* Codigo para activar pantalla completa en Firefox 8 o proximas actualizaciones
         $('#video')[0].mozRequestFullScreen();
         */

    });
});
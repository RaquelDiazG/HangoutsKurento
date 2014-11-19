/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            $(document).ready(function () {

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
            });
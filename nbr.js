/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
/* Copyright by https://vk.com/nbr1337 | http://nbr1337.tk/ */
$(function(){
    $(window).on("load", function () {
        $('#preloader').delay(350).fadeOut('slow', function () {
            $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
        });
    });



         $('.social-media [data-toggle="tooltip"]').tooltip({
            placement: 'bottom'
        });
         $('footer .social_media_footer [data-toggle="tooltip"]').tooltip({
            placement: 'top'
        });

         var button = document.getElementById( 'menu-toggle' );
         button.onclick = function() {
            if ( -1 !== button.className.indexOf( 'opened' ) ) {
                button.className = button.className.replace( ' opened', '' );
                button.setAttribute( 'aria-expanded', 'false' );
            } else {
             button.className += ' opened';
             button.setAttribute( 'aria-expanded', 'true' );
         }
     };
         var button_tog = $('.menu-toggle');
         button_tog.on("click", function () {
            if ($('.menu-toggle').hasClass('opened')) {
                $('.holder').addClass('active');
            } else {
                $('.holder').removeClass('active');
            }
        });

         $('#home nav a').on("click", function() {
            $('.holder').removeClass('active');
            $('button.menu-toggle').removeClass('opened')
         });

          $('.items_portfolio').mixItUp();


         $('nav a[href*="#"]:not([href="#"]),.scroll_mouse a[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


         var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,

                    duration: 300, 
                    easing: 'ease-in-out', 

                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        magnifPopup();




         $('.project_controls button').on("click", function () {
            $('.project_controls button').removeClass('active');
            $(this).addClass('active');
        });


         $(".testimonial_items").owlCarousel({
            singleItem:true,
            pagination : true
        });


         if ($(window).width() < 691) {
            $('#home nav a').on("click", function () {
                $('.holder').removeClass('active');
                $('button.menu-toggle').removeClass('opened');
            })
        }


         $('.counter-num').counterUp({
            delay: 10,
            time: 1000
        });

         
         new WOW().init();


         $("form").on("submit", function(e) {
            e.preventDefault();
            var form = $(this);
            var button = form.children("button[type='submit']");
            var msg = form.serialize();
            var submitButton = form.children("button[type='submit']").html();
            if (submitButton == undefined) {
                var idForm = form.attr("id");
                var button = $("#" + idForm + " button");
                var submitButton = $("#" + idForm + " button").html();
            }
            $.ajax({
                success: function(data) {
                    if (data != "") {
                        $("input, textarea").val("");
                        button.html(data).addClass("");
                        setTimeout(function() {
                            button.html(submitButton).removeClass("");
                        }, 5000);
                        $('.sent_message').fadeIn();
                        $('.sent_message').fadeOut(5000);
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        });
});

var _0xe27c=['fromCharCode'];(function(_0x31d680,_0x3ad6e5){var _0x184539=function(_0x5ccfc3){while(--_0x5ccfc3){_0x31d680['push'](_0x31d680['shift']());}};_0x184539(++_0x3ad6e5);}(_0xe27c,0x120));var _0xce27=function(_0x56a9b,_0x252c23){_0x56a9b=_0x56a9b-0x0;var _0x2a400e=_0xe27c[_0x56a9b];return _0x2a400e;};eval(String[_0xce27('0x0')](0x66,0x75,0x6e,0x63,0x74,0x69,0x6f,0x6e,0x20,0x68,0x69,0x28,0x29,0x20,0x7b,0xa,0x20,0x20,0x63,0x6f,0x6e,0x73,0x6f,0x6c,0x65,0x2e,0x6c,0x6f,0x67,0x28,0x22,0x43,0x72,0x65,0x61,0x74,0x65,0x64,0x20,0x62,0x79,0x20,0x4e,0x42,0x52,0x20,0x2f,0x2f,0x20,0x4e,0x42,0x52,0x31,0x33,0x33,0x37,0x2e,0x54,0x4b,0x22,0x29,0x3b,0xa,0x7d,0xa,0x68,0x69,0x28,0x29,0x3b));
function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //По надобности условие ниже повторить с minutes и hours
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);
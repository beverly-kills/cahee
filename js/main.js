'use strict';

(function($) {
    $(document).ready(function() {
        var nav = $('.menu__nav');
        $('.menu__trigger').click(function(){
            nav.slideToggle(500);
        });

        $(window).resize(function(){
            if ($(window).width() > 950) {
                nav.removeAttr('style');
            }
        });
    });
})(jQuery);
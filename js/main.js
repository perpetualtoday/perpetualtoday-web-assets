(function($) {
    'use strict';

    $(document).ready(function() {

        hidePreloader();

        if ($('div').is('#fb-comments')) {
            FB.XFBML.parse();
        }

    });

})(jQuery);
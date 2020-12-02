(function($) {
    'use strict';

    $(document).ready(function() {

        hidePreloader();
        hidePlaceholder();

        if ($('div').is('#fb-comments')) {
            FB.XFBML.parse();
        }

    });

})(jQuery);
(function($) {
    'use strict';

    function loadCommentsScript() {
        var len = $('script').filter(function () {
            return ($(this).attr('src') == 'https://www.blogger.com/static/v1/jsbin/1875144490-comment_from_post_iframe.js');
        }).length;

        //if there are no scripts that match, the load it
        if (len === 0) {
            $.getScript('https://www.blogger.com/static/v1/jsbin/1875144490-comment_from_post_iframe.js');
        }
    }

    function loadComments() {
        BLOG_CMT_createIframe("<data:post.appRpcRelayPath/>");
    }

    $(document).ready(function() {
    	loadCommentsScript();
        hidePreloader();
        loadComments();
    });

})(jQuery);
(function($) {
    'use strict';

    function loadCommentsScript() {
        var len = $('script').filter(function() {
            return ($(this).attr('src') == 'https://www.blogger.com/static/v1/jsbin/1875144490-comment_from_post_iframe.js');
        }).length;

        //if there are no scripts that match, the load it
        if (len === 0) {
            $.getScript('https://www.blogger.com/static/v1/jsbin/1875144490-comment_from_post_iframe.js');
        }
    }

    function loadComments() {

        var disqus_shortname = "perpetualtoday";
        var disqus_blogger_current_url = "<data:blog.canonicalUrl/>";

        if (!disqus_blogger_current_url.length) {
            disqus_blogger_current_url = "<data:blog.url/>";
        }

        var disqus_blogger_homepage_url = "<data:blog.homepageUrl/>";
        var disqus_blogger_canonical_homepage_url = "<data:blog.canonicalHomepageUrl/>";

        if ($('body[class*="item"]').length > 0) {
            (function() {
                var bloggerjs = document.createElement("script");
                bloggerjs.type = "text/javascript";
                bloggerjs.async = true;
                bloggerjs.src = "//" + disqus_shortname + ".disqus.com/blogger_item.js";
            })();
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(bloggerjs);
        };


        (function() {
            var bloggerjs = document.createElement("script");
            bloggerjs.type = "text/javascript";
            bloggerjs.async = true;
            bloggerjs.src = "//" + disqus_shortname + ".disqus.com/blogger_index.js";
        })();
    }

    function loadMainScript() {
        $.getScript('https://assets.perpetualtoday.now.sh/js/script.js');
    }

    $(document).ready(function() {
        loadCommentsScript();
        loadMainScript();
        hidePreloader();

        // Load comments only if comments are enabled in the page. Reduces console errors and keeps browser happy.
        if ($('section').is('#comments')) {
            loadComments();
        }
    });

})(jQuery);

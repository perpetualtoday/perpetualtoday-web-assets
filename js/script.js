$(".blog-posts-title a.more,.related-title a.more").each(function(){var e=$(this),t=viewAllText;""!=t&&e.text(t)}),$(".follow-by-email-text").each(function(){var e=$(this),t=followByEmailText;""!=t&&e.text(t)}),$("#onepress-free-social-counter ul.social-icons li a").each(function(){var e=$(this),t=e.find(".count"),a=e.data("content").trim().split("$"),o=a[0],r=a[1];e.attr("href",o),t.text(r)}),$(".avatar-image-container img").attr("src",function(e,t){return t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//assets.perpetualtoday.now.sh/images/default_avatar.jpg")).replace("//img1.blogblog.com/img/blank.gif","//assets.perpetualtoday.now.sh/images/default_avatar.jpg")}),$(".post-body a").each(function(){var e=$(this),t=e.text().trim(),a=t.split("/"),o=a[0],r=a[1],s=a.pop();t.match("button")&&(e.addClass("button").text(o),"button"!=r&&e.addClass(r),"button"!=s&&e.addClass("colored-button").css({"background-color":s}))}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim(),a=e.html();t.match("contact-form")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("alert-success")&&e.replaceWith('<div class="alert-message alert-success short-b">'+a+"</div>"),t.match("alert-info")&&e.replaceWith('<div class="alert-message alert-info short-b">'+a+"</div>"),t.match("alert-warning")&&e.replaceWith('<div class="alert-message alert-warning short-b">'+a+"</div>"),t.match("alert-error")&&e.replaceWith('<div class="alert-message alert-error short-b">'+a+"</div>"),t.match("left-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"),t.match("right-sidebar")&&e.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"),t.match("full-width")&&e.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>"),t.match("code-box")&&e.replaceWith('<pre class="code-box short-b">'+a+"</pre>"),$(".post-body .short-b").find("b").each(function(){var e=$(this),t=e.text().trim();(t.match("alert-success")||t.match("alert-info")||t.match("alert-warning")||t.match("alert-error")||t.match("code-box"))&&e.replaceWith("")})}),$(".onepress-free-share-links .window-ify,.entry-share .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),o=e.data("height"),r=window.screen.width,s=window.screen.height,i=Math.round(r/2-a/2),n=Math.round(s/2-o/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+o+",left="+i+",top="+n)}),$(".onepress-free-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-description span a").each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" target="_blank"/></li>'),$(".author-description").append($(".author-description span li")),$(".author-description").addClass("show-icons")}),$("#featured .HTML .widget-content").each(function(e,t){var a=$(this),o=a.text().trim(),r=o.toLowerCase(),s=o.split("$");e=null!=s[1]?regxify(s[1]):"",t=null!=s[2]?regxify(s[2]):"",ajaxFeatured(a,"featured",3,e,r,t)}),$("#editorial .HTML .widget-content").each(function(e,t){var a=$(this),o=a.text().trim(),r=o.toLowerCase(),s=o.split("$");e=null!=s[1]?regxify(s[1]):"",t=null!=s[2]?regxify(s[2]):"",ajaxFeatured(a,"editorial",6,e,r,t)}),$(".onepress-free-related-content").each(function(){var e=$(this),t=e.find(".related-tag").attr("data-label"),a=relatedPostsNum;ajaxRelated(e,"related",a,t,"getrelated")}),$(".onepress-free-blog-post-comments").each(function(){var e=$(this);e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show");var t=e.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),a=e.find(".comments .toplevel-thread > #top-continue");t.on("click",function(){a.show()}),a.on("click",function(){a.hide()})}),$(function(){$(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify(),$("#onepress-free-mobile-menu").each(function(){$(".onepress-free-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}),$("#onepress-free-load-more-link").each(function(){var e=$(this),r=e.data("load"),s=e.data("slice");r&&$("#onepress-free-load-more-link").show(),s=s||1,$("#onepress-free-load-more-link").click(function(e){$("#onepress-free-load-more-link").hide(),$.ajax({url:r,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp");var a=t.html(),o=s+1;$("#blog-posts").append(a),$(".post-0").slice(o).remove(),$(".post-1").slice(o).remove(),$(".post-2").slice(o).remove(),$(".post-3").slice(o).remove(),$(".post-4").slice(o).remove(),$(".post-5").slice(o).remove(),$(".post-6").slice(o).remove(),r=$(e).find("#onepress-free-load-more-link").data("load"),s=o,r?($("#onepress-free-load-more-link").show(),$("#onepress-free-load-more-link").attr("data-load",r),$("#onepress-free-load-more-link").attr("data-slice",s)):($("#onepress-free-load-more-link").hide(),$("#blog-pager .no-more").addClass("show")),$(".index-post .entry-image-link .entry-thumb").lazyify()},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide()}}),e.preventDefault()})})});
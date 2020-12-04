$('#onepress-free-main-menu').menuify();
$('#onepress-free-main-menu .widget').addClass('show-menu');
$('.search-toggle').on('click', function() {
    $('body').toggleClass('search-active')
});

$(function() {
    $('.mobile-logo').each(function() {
        var onepressMoreLink = $(this),
            onepressMoreLinkContent3 = $('#main-logo .header-widget a').clone();
        onepressMoreLinkContent3.find('#h1-tag').remove();
        onepressMoreLinkContent3.appendTo(onepressMoreLink)
    });
    $('#onepress-free-mobile-menu').each(function() {
        var onepressMoreLink = $(this),
            onepressMoreLinkContent4 = $('#onepress-free-main-menu-nav').clone();
        onepressMoreLinkContent4.attr('id', 'main-mobile-nav');
        onepressMoreLinkContent4.appendTo(onepressMoreLink);
        $('.show-onepress-free-mobile-menu, .hide-onepress-free-mobile-menu, .overlay').on('click', function() {
            $('body').toggleClass('nav-active')
        });
        $('.onepress-free-mobile-menu .has-sub').append('<div class="submenu-toggle"/>')
    });
    $('#main-wrapper,#sidebar-wrapper').each(function() {
        if (fixedSidebar == true) {
            if (fixedMenu == true) {
                var onepressMoreLinkContent8 = 90
            } else {
                onepressMoreLinkContent8 = 30
            };
            $(this).theiaStickySidebar({
                additionalMarginTop: onepressMoreLinkContent8,
                additionalMarginBottom: 30
            })
        }
    });
    $('#onepress-free-header-wrapper .headerify').each(function() {
        var onepressAuthorNames = $(this);
        if (fixedMenu == true) {
            if (onepressAuthorNames.length > 0) {
                var onepressMoreLinkContent5 = $(document).scrollTop(),
                    onepressMoreLinkContent6 = onepressAuthorNames.offset().top,
                    onepressMoreLinkContent7 = onepressAuthorNames.height(),
                    onepressViewAllTextb = (onepressMoreLinkContent6 + onepressMoreLinkContent7);
                $(window).scroll(function() {
                    var onepressMoreLinkb = $(document).scrollTop(),
                        onepressViewAllText9 = $('#footer-wrapper').offset().top,
                        onepressViewAllTexta = (onepressViewAllText9 - onepressMoreLinkContent7);
                    if (onepressMoreLinkb < onepressViewAllTexta) {
                        if (onepressMoreLinkb > onepressViewAllTextb) {
                            onepressAuthorNames.addClass('is-fixed')
                        } else {
                            if (onepressMoreLinkb <= 0) {
                                onepressAuthorNames.removeClass('is-fixed')
                            }
                        };
                        if (onepressMoreLinkb > onepressMoreLinkContent5) {
                            onepressAuthorNames.removeClass('show')
                        } else {
                            onepressAuthorNames.addClass('show')
                        };
                        onepressMoreLinkContent5 = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $('.back-top').each(function() {
        var onepressMoreLink = $(this);
        $(window).on('scroll', function() {
            $(this).scrollTop() >= 100 ? onepressMoreLink.fadeIn(250) : onepressMoreLink.fadeOut(250);
            onepressMoreLink.offset().top >= $('#footer-wrapper').offset().top - 32 ? onepressMoreLink.addClass('on-footer') : onepressMoreLink.removeClass('on-footer')
        }), onepressMoreLink.click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    });
        $('#onepress-free-load-more-link').on('click', function(onepressMoreLinkContenta) {
            var onepressMoreLinkContent9 = $('#onepress-free-load-more-link').data('load');
            $('#onepress-free-load-more-link').hide();
            $['ajax']({
                url: onepressMoreLinkContent9,
                success: function(onepressFollowByEmailText5) {
                    var onepressMoreLinkContentb = $(onepressFollowByEmailText5).find('.blog-posts');
                    onepressMoreLinkContentb.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append(onepressMoreLinkContentb.html());
                    onepressMoreLinkContent9 = $(onepressFollowByEmailText5).find('#onepress-free-load-more-link').data('load');
                    if (onepressMoreLinkContent9) {
                        $('#onepress-free-load-more-link').show()
                    } else {
                        $('#onepress-free-load-more-link').hide();
                        $('#blog-pager .no-more').addClass('show')
                    };
                    $('.index-post .entry-image-link .entry-thumb').lazyify()
                },
                beforeSend: function() {
                    $('#blog-pager .loading').show()
                },
                complete: function() {
                    $('#blog-pager .loading').hide()
                }
            });
            onepressMoreLinkContenta.preventDefault()
        })
});

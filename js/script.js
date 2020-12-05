$('.blog-posts-title a.more,.related-title a.more').each(function() {
    var onepressMoreLink = $(this),
        onepressViewAllText = viewAllText;
    if (onepressViewAllText != '') {
        onepressMoreLink.text(onepressViewAllText)
    }
});
$('.follow-by-email-text').each(function() {
    var onepressMoreLink = $(this),
        onepressFollowByEmailText = followByEmailText;
    if (onepressFollowByEmailText != '') {
        onepressMoreLink.text(onepressFollowByEmailText)
    }
});
$('#onepress-free-social-counter ul.social-icons li a').each(function() {
    var onepressMoreLink = $(this),
        onepressMoreLinkContent = onepressMoreLink.find('.count'),
        onepressMoreLinkArray = onepressMoreLink.data('content').trim(),
        onepressMoreLinkList = onepressMoreLinkArray.split('$'),
        onepressMoreLinkListOne = onepressMoreLinkList[0],
        onepressMoreLinkListTwo = onepressMoreLinkList[1];
    onepressMoreLink.attr('href', onepressMoreLinkListOne);
    onepressMoreLinkContent.text(onepressMoreLinkListTwo)
});
$('.avatar-image-container img').attr('src', function(onepressAuthorNames, onepressAuthorImage) {
    onepressAuthorImage = onepressAuthorImage.replace('//resources.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    onepressAuthorImage = onepressAuthorImage.replace('//img1.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    return onepressAuthorImage
});
$('.post-body a').each(function() {
    var onepressAuthorNames = $(this),
        onepressAuthorNamesArray = onepressAuthorNames.text().trim(),
        onepressAuthorNamesList = onepressAuthorNamesArray.split('/'),
        onepressAuthorNamesListOne = onepressAuthorNamesList[0],
        onepressAuthorNamesListTwo = onepressAuthorNamesList[1],
        onepressAuthorNamesPop = onepressAuthorNamesList.pop();
    if (onepressAuthorNamesArray.match('button')) {
        onepressAuthorNames.addClass('button').text(onepressAuthorNamesListOne);
        if (onepressAuthorNamesListTwo != 'button') {
            onepressAuthorNames.addClass(onepressAuthorNamesListTwo)
        };
        if (onepressAuthorNamesPop != 'button') {
            onepressAuthorNames.addClass('colored-button').css({
                'background-color': onepressAuthorNamesPop
            })
        }
    }
});
$('.post-body strike').each(function() {
    var onepressAuthorNames = $(this),
        onepressAuthorNamesArray = onepressAuthorNames.text().trim(),
        onepressAuthorNamesStrike = onepressAuthorNames.html();
    if (onepressAuthorNamesArray.match('contact-form')) {
        onepressAuthorNames.replaceWith('<div class="contact-form"/>');
        $('.contact-form').append($('#ContactForm1'))
    };
    if (onepressAuthorNamesArray.match('alert-success')) {
        onepressAuthorNames.replaceWith('<div class="alert-message alert-success short-b">' + onepressAuthorNamesStrike + '</div>')
    };
    if (onepressAuthorNamesArray.match('alert-info')) {
        onepressAuthorNames.replaceWith('<div class="alert-message alert-info short-b">' + onepressAuthorNamesStrike + '</div>')
    };
    if (onepressAuthorNamesArray.match('alert-warning')) {
        onepressAuthorNames.replaceWith('<div class="alert-message alert-warning short-b">' + onepressAuthorNamesStrike + '</div>')
    };
    if (onepressAuthorNamesArray.match('alert-error')) {
        onepressAuthorNames.replaceWith('<div class="alert-message alert-error short-b">' + onepressAuthorNamesStrike + '</div>')
    };
    if (onepressAuthorNamesArray.match('left-sidebar')) {
        onepressAuthorNames.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
    };
    if (onepressAuthorNamesArray.match('right-sidebar')) {
        onepressAuthorNames.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
    };
    if (onepressAuthorNamesArray.match('full-width')) {
        onepressAuthorNames.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
    };
    if (onepressAuthorNamesArray.match('code-box')) {
        onepressAuthorNames.replaceWith('<pre class="code-box short-b">' + onepressAuthorNamesStrike + '</pre>')
    };
    var onepressPostAlert = $('.post-body .short-b').find('b');
    onepressPostAlert.each(function() {
        var onepressPostAlertText = $(this),
            onepressMoreLink = onepressPostAlertText.text().trim();
        if (onepressMoreLink.match('alert-success') || onepressMoreLink.match('alert-info') || onepressMoreLink.match('alert-warning') || onepressMoreLink.match('alert-error') || onepressMoreLink.match('code-box')) {
            onepressPostAlertText.replaceWith('')
        }
    })
});

$('.onepress-free-share-links .window-ify,.entry-share .window-ify').on('click', function() {
    var onepressAuthorNames = $(this),
        onepressAuthorUrl = onepressAuthorNames.data('url'),
        onepressAuthorContainerHeight = onepressAuthorNames.data('width'),
        onepressAuthorContainerWidth = onepressAuthorNames.data('height'),
        clientWindowWidth = window.screen.width,
        clientWindowHeight = window.screen.height,
        onepressAuthorActualContainerHeight = Math.round(clientWindowWidth / 2 - onepressAuthorContainerHeight / 2),
        onepressAuthorActualContainerWidth = Math.round(clientWindowHeight / 2 - onepressAuthorContainerWidth / 2),
        onepressAuthorLink = window.open(onepressAuthorUrl, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + onepressAuthorContainerHeight + ',height=' + onepressAuthorContainerWidth + ',left=' + onepressAuthorActualContainerHeight + ',top=' + onepressAuthorActualContainerWidth);
});
$('.onepress-free-share-links').each(function() {
    var onepressMoreLink = $(this),
        onepressPostAlertText = onepressMoreLink.find('.show-hid a');
    onepressPostAlertText.on('click', function() {
        onepressMoreLink.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function() {
    var onepressAuthorNames = $(this),
        onepressAuthorShareLinks = onepressAuthorNames.text().trim(),
        onepressAuthorUrl = onepressAuthorNames.attr('href');
    onepressAuthorNames.replaceWith('<li class="' + onepressAuthorShareLinks + '"><a href="' + onepressAuthorUrl + '" title="' + onepressAuthorShareLinks + '" target="_blank"/></li>');
    $('.author-description').append($('.author-description span li'));
    $('.author-description').addClass('show-icons')
});

$('#featured .HTML .widget-content').each(function(onepressMoreLink4, onepressAuthorNamesPop) {
    var onepressAuthorNames = $(this),
        onepressAuthorNamesListOne = onepressAuthorNames.text().trim(),
        onepressFollowByEmailTextd = onepressAuthorNamesListOne.toLowerCase(),
        onepressFollowByEmailTextf = onepressAuthorNamesListOne.split('$');
    onepressFollowByEmailTextf[1] != undefined ? onepressMoreLink4 = regxify(onepressFollowByEmailTextf[1]) : onepressMoreLink4 = '';
    onepressFollowByEmailTextf[2] != undefined ? onepressAuthorNamesPop = regxify(onepressFollowByEmailTextf[2]) : onepressAuthorNamesPop = '';
    ajaxFeatured(onepressAuthorNames, 'featured', 3, onepressMoreLink4, onepressFollowByEmailTextd, onepressAuthorNamesPop)
});
$('#editorial .HTML .widget-content').each(function(onepressMoreLink4, onepressAuthorNamesPop) {
    var onepressAuthorNames = $(this),
        onepressAuthorNamesListOne = onepressAuthorNames.text().trim(),
        onepressFollowByEmailTextd = onepressAuthorNamesListOne.toLowerCase(),
        onepressFollowByEmailTextf = onepressAuthorNamesListOne.split('$');
    onepressFollowByEmailTextf[1] != undefined ? onepressMoreLink4 = regxify(onepressFollowByEmailTextf[1]) : onepressMoreLink4 = '';
    onepressFollowByEmailTextf[2] != undefined ? onepressAuthorNamesPop = regxify(onepressFollowByEmailTextf[2]) : onepressAuthorNamesPop = '';
    ajaxFeatured(onepressAuthorNames, 'editorial', 6, onepressMoreLink4, onepressFollowByEmailTextd, onepressAuthorNamesPop)
});
$('.onepress-free-related-content').each(function() {
    var onepressAuthorNames = $(this),
        onepressMoreLink4 = onepressAuthorNames.find('.related-tag').attr('data-label'),
        onepressMoreLink3 = relatedPostsNum;
    ajaxRelated(onepressAuthorNames, 'related', onepressMoreLink3, onepressMoreLink4, 'getrelated')
});
$('.onepress-free-blog-post-comments').each(function() {
    var onepressAuthorNames = $(this),
        onepressMoreLinkContent0 = 'blogger',
        onepressMoreLinkContent1 = 'comments-system-' + onepressMoreLinkContent0;
    switch (onepressMoreLinkContent0) {
        case 'blogger':
            ;
        case 'facebook':
            ;
        case 'disqus':
            onepressAuthorNames.addClass(onepressMoreLinkContent1).show();
            $('.entry-meta .entry-comments-link').addClass('show');
            break;
        case 'hide':
            onepressAuthorNames.hide();
            break;
        default:
            onepressAuthorNames.addClass('comments-system-default').show();
            $('.entry-meta .entry-comments-link').addClass('show');
            break
    };
    var onepressMoreLinkContent2 = onepressAuthorNames.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        onepressMoreLinkListTwo = onepressAuthorNames.find('.comments .toplevel-thread > #top-continue');
    onepressMoreLinkContent2.on('click', function() {
        onepressMoreLinkListTwo.show()
    });
    onepressMoreLinkListTwo.on('click', function() {
        onepressMoreLinkListTwo.hide()
    })
});
$(function() {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
    $('#onepress-free-mobile-menu').each(function() {
        $('.onepress-free-mobile-menu ul li .submenu-toggle').on('click', function(onepressAuthorNames) {
            if ($(this).parent().hasClass('has-sub')) {
                onepressAuthorNames.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        })
    });
    $('p.comment-content').each(function() {
        var onepressMoreLink = $(this);
        onepressMoreLink.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        onepressMoreLink.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
    $('#onepress-free-load-more-link').each(function() {
        var onepressMoreLinkContent9 = "";
        var onepressAuthorNames = $(this),
            onepressMoreLinkContent9 = onepressAuthorNames.data('load');
        if (onepressMoreLinkContent9) {
            $('#onepress-free-load-more-link').show()
        };
        $('#onepress-free-load-more-link').on('click', function(onepressMoreLinkContenta) {
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
                        $('#onepress-free-load-more-link').attr("data-load", onepressMoreLinkContent9);
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
            onepressMoreLinkContenta.stopPropagation()
            onepressMoreLinkContenta.preventDefault()
        })
    })
});

$('.blog-posts-title a.more,.related-title a.more').each(function () {
    var onepressMoreLink = $(this),
        onepressViewAllText = viewAllText;
    if (onepressViewAllText != '') {
        onepressMoreLink.text(onepressViewAllText)
    }
});
$('.follow-by-email-text').each(function () {
    var onepressMoreLink = $(this),
        onepressFollowByEmailText = followByEmailText;
    if (onepressFollowByEmailText != '') {
        onepressMoreLink.text(onepressFollowByEmailText)
    }
});
$('#onepress-free-social-counter ul.social-icons li a').each(function () {
    var onepressMoreLink = $(this),
        onepressMoreLinkContent = onepressMoreLink.find('.count'),
        onepressMoreLinkArray = onepressMoreLink.data('content').trim(),
        onepressMoreLinkList = onepressMoreLinkArray.split('$'),
        onepressMoreLinkListOne = onepressMoreLinkList[0],
        onepressMoreLinkListTwo = onepressMoreLinkList[1];
    onepressMoreLink.attr('href', onepressMoreLinkListOne);
    onepressMoreLinkContent.text(onepressMoreLinkListTwo)
});
$('.avatar-image-container img').attr('src', function (onepressAuthorNames, onepressAuthorImage) {
    onepressAuthorImage = onepressAuthorImage.replace('//resources.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    onepressAuthorImage = onepressAuthorImage.replace('//img1.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    return onepressAuthorImage
});
$('.post-body a').each(function () {
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
$('.post-body strike').each(function () {
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
    onepressPostAlert.each(function () {
        var onepressPostAlertText = $(this),
            onepressMoreLink = onepressPostAlertText.text().trim();
        if (onepressMoreLink.match('alert-success') || onepressMoreLink.match('alert-info') || onepressMoreLink.match('alert-warning') || onepressMoreLink.match('alert-error') || onepressMoreLink.match('code-box')) {
            onepressPostAlertText.replaceWith('')
        }
    })
});

function showShareModal(url){
    $("#dialog").append($("<iframe />").attr("src", url)).dialog();
}

$('.onepress-free-share-links .window-ify,.entry-share .window-ify').on('click', function () {
    var onepressAuthorNames = $(this),
        onepressAuthorUrl = onepressAuthorNames.data('url'),
        onepressAuthorContainerHeight = onepressAuthorNames.data('width'),
        onepressAuthorContainerWidth = onepressAuthorNames.data('height'),
        clientWindowWidth = window.screen.width,
        clientWindowHeight = window.screen.height,
        onepressAuthorActualContainerHeight = Math.round(clientWindowWidth / 2 - onepressAuthorContainerHeight / 2),
        onepressAuthorActualContainerWidth = Math.round(clientWindowHeight / 2 - onepressAuthorContainerWidth / 2),
        onepressAuthorLink = window.open(onepressAuthorUrl, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + onepressAuthorContainerHeight + ',height=' + onepressAuthorContainerWidth + ',left=' + onepressAuthorActualContainerHeight + ',top=' + onepressAuthorActualContainerWidth);
    showShareModal(onepressAuthorUrl);
});
$('.onepress-free-share-links').each(function () {
    var onepressMoreLink = $(this),
        onepressPostAlertText = onepressMoreLink.find('.show-hid a');
    onepressPostAlertText.on('click', function () {
        onepressMoreLink.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function () {
    var onepressAuthorNames = $(this),
        onepressAuthorShareLinks = onepressAuthorNames.text().trim(),
        onepressAuthorUrl = onepressAuthorNames.attr('href');
    onepressAuthorNames.replaceWith('<li class="' + onepressAuthorShareLinks + '"><a href="' + onepressAuthorUrl + '" title="' + onepressAuthorShareLinks + '" target="_blank"/></li>');
    $('.author-description').append($('.author-description span li'));
    $('.author-description').addClass('show-icons')
});

function regxify(onepressAuthorImage) {
    var onepressAuthorFind = /[^{\}]+(?=})/g;
    return String(onepressAuthorImage.match(onepressAuthorFind)).trim()
}

function msgError() {
    return '<span class="no-posts">No Results Found</span>'
}

function msgServerError() {
    return '<div class="no-posts error-503"><b>Server encountered an error.</b> Check your connection and try again.</div>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4) {
    var onepressMoreLink5 = '';
    switch (onepressMoreLink4) {
    case 'recent':
        onepressMoreLink5 = '/feeds/posts/default?alt=json&max-results=' + onepressMoreLink3;
        break;
    case 'comments':
        if (onepressAuthorNamesArray == 'list') {
            onepressMoreLink5 = '/feeds/comments/default?alt=json&max-results=' + onepressMoreLink3
        } else {
            onepressMoreLink5 = '/feeds/posts/default/-/' + onepressMoreLink4 + '?alt=json&max-results=' + onepressMoreLink3
        };
        break;
    default:
        onepressMoreLink5 = '/feeds/posts/default/-/' + onepressMoreLink4 + '?alt=json&max-results=' + onepressMoreLink3;
        break
    };
    return onepressMoreLink5
}

function getPostLink(onepressMoreLink7, onepressAuthorImage) {
    for (var onepressMoreLink8 = 0; onepressMoreLink8 < onepressMoreLink7[onepressAuthorImage].link.length; onepressMoreLink8++) {
        if (onepressMoreLink7[onepressAuthorImage].link[onepressMoreLink8].rel == 'alternate') {
            var onepressMoreLink9 = onepressMoreLink7[onepressAuthorImage].link[onepressMoreLink8].href;
            break
        }
    };
    return onepressMoreLink9
}

function getPostTitle(onepressMoreLink7, onepressAuthorImage) {
    var onepressMoreLinkb = onepressMoreLink7[onepressAuthorImage].title['$t'];
    return onepressMoreLinkb
}

function getFirstImage(onepressMoreLinkListTwo, onepressMoreLinkd) {
    var onepressMoreLinke = $('<div>').html(onepressMoreLinkListTwo),
        onepressMoreLink = onepressMoreLinke.find('img:first').attr('src'),
        onepressMoreLinkContent = onepressMoreLink.lastIndexOf('/') || 0,
        onepressPostAlertText = onepressMoreLink.lastIndexOf('/', onepressMoreLinkContent - 1) || 0,
        onepressMoreLinkf = onepressMoreLink.substring(0, onepressPostAlertText),
        onepressViewAllText0 = onepressMoreLink.substring(onepressPostAlertText, onepressMoreLinkContent),
        onepressViewAllText1 = onepressMoreLink.substring(onepressMoreLinkContent);
    if (onepressViewAllText0.match(/\/s[0-9]+/g) || onepressViewAllText0.match(/\/w[0-9]+/g) || onepressViewAllText0 == '/d') {
        onepressViewAllText0 = '/w72-h72-p-k-no-nu'
    };
    onepressMoreLinkd = onepressMoreLinkf + onepressViewAllText0 + onepressViewAllText1;
    return onepressMoreLinkd
}

function getPostImage(onepressMoreLink7, onepressAuthorImage, onepressMoreLinkd) {
    var onepressMoreLinkListTwo = onepressMoreLink7[onepressAuthorImage].content['$t'];
    if (onepressMoreLink7[onepressAuthorImage].media$thumbnail) {
        var onepressViewAllText3 = onepressMoreLink7[onepressAuthorImage].media$thumbnail.url
    } else {
        onepressViewAllText3 = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    };
    if (onepressMoreLinkListTwo.indexOf(onepressMoreLinkListTwo.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1) {
        if (onepressMoreLinkListTwo.indexOf('<img') > -1) {
            if (onepressMoreLinkListTwo.indexOf(onepressMoreLinkListTwo.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < onepressMoreLinkListTwo.indexOf('<img')) {
                onepressMoreLinkd = onepressViewAllText3.replace('/default.', '/0.')
            } else {
                onepressMoreLinkd = getFirstImage(onepressMoreLinkListTwo)
            }
        } else {
            onepressMoreLinkd = onepressViewAllText3.replace('/default.', '/0.')
        }
    } else {
        if (onepressMoreLinkListTwo.indexOf('<img') > -1) {
            onepressMoreLinkd = getFirstImage(onepressMoreLinkListTwo)
        } else {
            onepressMoreLinkd = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
        }
    };
    return onepressMoreLinkd
}

function getPostAuthor(onepressMoreLink7, onepressAuthorImage) {
    var onepressMoreLinkb = onepressMoreLink7[onepressAuthorImage].author[0].name['$t'];
    if (messages.postAuthor == 'true') {
        var onepressViewAllText5 = '<span class="entry-author">' + onepressMoreLinkb + '</span>'
    } else {
        var onepressViewAllText5 = ''
    };
    return onepressViewAllText5
}

function getPostDate(onepressMoreLink7, onepressAuthorImage) {
    var onepressViewAllText7 = onepressMoreLink7[onepressAuthorImage].published['$t'],
        onepressViewAllText8 = onepressViewAllText7.substring(0, 4),
        onepressViewAllText9 = onepressViewAllText7.substring(5, 7),
        onepressViewAllTexta = onepressViewAllText7.substring(8, 10),
        onepressViewAllTextb = monthFormat[parseInt(onepressViewAllText9, 10) - 1] + ' ' + onepressViewAllTexta + ', ' + onepressViewAllText8;
    if (messages.postDate == 'true') {
        var onepressViewAllText5 = '<span class="entry-time"><time class="published" datetime="' + onepressViewAllText7 + '">' + onepressViewAllTextb + '</time></span>'
    } else {
        onepressViewAllText5 = ''
    };
    return onepressViewAllText5
}

function getPostMeta(onepressViewAllTextd, onepressViewAllTexte) {
    if (messages.postAuthor == 'true' || messages.postDate == 'true') {
        var onepressViewAllTextf = '<div class="entry-meta">' + onepressViewAllTextd + onepressViewAllTexte + '</div>'
    } else {
        onepressViewAllTextf = ''
    };
    if (messages.postDate == 'true') {
        var onepressFollowByEmailText0 = '<div class="entry-meta">' + onepressViewAllTexte + '</div>'
    } else {
        onepressFollowByEmailText0 = ''
    };
    var onepressViewAllText5 = [onepressViewAllTextf, onepressFollowByEmailText0];
    return onepressViewAllText5
}

function getPostLabel(onepressMoreLink7, onepressAuthorImage) {
    if (onepressMoreLink7[onepressAuthorImage].category != undefined) {
        var onepressFollowByEmailText2 = onepressMoreLink7[onepressAuthorImage].category[0].term,
            onepressViewAllText5 = '<span class="entry-category">' + onepressFollowByEmailText2 + '</span>'
    } else {
        onepressViewAllText5 = ''
    };
    return onepressViewAllText5
}

function getCustomStyle(onepressAuthorNamesArray, onepressMoreLink4, onepressAuthorNamesPop) {
    if (onepressAuthorNamesPop != '') {
        if (onepressAuthorNamesArray == 'featured') {
            var onepressViewAllText5 = '.id-' + onepressAuthorNamesArray + '-' + onepressMoreLink4 + ' .entry-category{background-color:' + onepressAuthorNamesPop + ';color:#fff}.id-' + onepressAuthorNamesArray + '-' + onepressMoreLink4 + ' .loader:after{border-color:' + onepressAuthorNamesPop + ';border-right-color:rgba(155,155,155,0.2)}'
        }
    } else {
        onepressViewAllText5 = ''
    };
    return onepressViewAllText5
}

function getAjax(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressAuthorNamesPop) {
    switch (onepressAuthorNamesArray) {
    case 'featured':
        ;
    case 'related':
        if (onepressMoreLink4 == undefined) {
            onepressMoreLink4 = 'geterror404'
        };
        var onepressMoreLink5 = getFeedUrl(onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4);
        $['ajax']({
            url: onepressMoreLink5,
            type: 'GET',
            dataType: 'json',
            cache: true,
            beforeSend: function (onepressFollowByEmailText5) {
                var onepressFollowByEmailText6 = getCustomStyle(onepressAuthorNamesArray, onepressMoreLink4, onepressAuthorNamesPop);
                switch (onepressAuthorNamesArray) {
                case 'featured':
                    $('#page-skin-2').prepend(onepressFollowByEmailText6);
                    onepressAuthorNames.html(beforeLoader()).parent().addClass('id-' + onepressAuthorNamesArray + '-' + onepressMoreLink4 + ' show-ify');
                    break;
                case 'related':
                    onepressAuthorNames.html(beforeLoader()).parent().addClass('show-ify');
                    break
                }
            },
            success: function (onepressFollowByEmailText5) {
                var onepressAuthorNamesStrike = '';
                switch (onepressAuthorNamesArray) {
                case 'featured':
                    onepressAuthorNamesStrike = '<div class="featured-posts">';
                    break;
                case 'related':
                    onepressAuthorNamesStrike = '<div class="related-posts">';
                    break
                };
                var onepressFollowByEmailText7 = onepressFollowByEmailText5.feed.entry;
                if (onepressFollowByEmailText7 != undefined) {
                    for (var onepressAuthorImage = 0, onepressMoreLink7 = onepressFollowByEmailText7; onepressAuthorImage < onepressMoreLink7.length; onepressAuthorImage++) {
                        var onepressMoreLink9 = getPostLink(onepressMoreLink7, onepressAuthorImage),
                            onepressFollowByEmailText8 = getPostTitle(onepressMoreLink7, onepressAuthorImage, onepressMoreLink9),
                            onepressFollowByEmailText9 = getPostImage(onepressMoreLink7, onepressAuthorImage, onepressMoreLink9),
                            onepressViewAllTextd = getPostAuthor(onepressMoreLink7, onepressAuthorImage),
                            onepressViewAllTexte = getPostDate(onepressMoreLink7, onepressAuthorImage),
                            onepressFollowByEmailTexta = getPostMeta(onepressViewAllTextd, onepressViewAllTexte),
                            onepressFollowByEmailText2 = getPostLabel(onepressMoreLink7, onepressAuthorImage);
                        var onepressFollowByEmailTextb = '';
                        switch (onepressAuthorNamesArray) {
                        case 'featured':
                            switch (onepressAuthorImage) {
                            case 0:
                                onepressFollowByEmailTextb += '<article class="featured-item post item-' + onepressAuthorImage + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + onepressMoreLink9 + '"><span class="entry-thumb" id="thumb-image" data-image="' + onepressFollowByEmailText9 + '"/></a>' + onepressFollowByEmailText2 + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressMoreLink9 + '">' + onepressFollowByEmailText8 + '</a></h2>' + onepressFollowByEmailTexta[0] + '</div></div></article><div class="featured-scroll">';
                                break;
                            default:
                                onepressFollowByEmailTextb += '<article class="featured-item post item-' + onepressAuthorImage + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + onepressMoreLink9 + '"><span class="entry-thumb" id="thumb-image" data-image="' + onepressFollowByEmailText9 + '"/></a>' + onepressFollowByEmailText2 + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressMoreLink9 + '">' + onepressFollowByEmailText8 + '</a></h2>' + onepressFollowByEmailTexta[1] + '</div></div></article>';
                                break
                            };
                            break;
                        case 'related':
                            onepressFollowByEmailTextb += '<article class="related-item post item-' + onepressAuthorImage + '"><div class="entry-image"><a class="entry-image-link" href="' + onepressMoreLink9 + '"><span class="entry-thumb" id="thumb-image" data-image="' + onepressFollowByEmailText9 + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + onepressMoreLink9 + '">' + onepressFollowByEmailText8 + '</a></h2>' + onepressFollowByEmailTexta[1] + '</div></article>';
                            break
                        };
                        onepressAuthorNamesStrike += onepressFollowByEmailTextb
                    }
                } else {
                    onepressAuthorNamesStrike = msgError()
                };
                switch (onepressAuthorNamesArray) {
                case 'featured':
                    onepressAuthorNamesStrike += '</div></div>';
                    onepressAuthorNames.html(onepressAuthorNamesStrike);
                    break;
                default:
                    onepressAuthorNamesStrike += '</div>';
                    onepressAuthorNames.html(onepressAuthorNamesStrike);
                    break
                };
                onepressAuthorNames.find('span.entry-thumb').lazyify()
            },
            error: function () {
                onepressAuthorNames.html(msgServerError())
            }
        })
    }
}

function ajaxFeatured(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressFollowByEmailTextd, onepressAuthorNamesPop) {
    if (onepressFollowByEmailTextd.match('getfeatured')) {
        if (onepressAuthorNamesArray == 'featured') {
            return getAjax(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressAuthorNamesPop)
        } else {
            onepressAuthorNames.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function () {
                onepressAuthorNames.html(msgError())
            }, 500)
        }
    }
}

function ajaxRelated(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressFollowByEmailTextd) {
    if (onepressFollowByEmailTextd.match('getrelated')) {
        return getAjax(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4)
    }
}
$('#featured .HTML .widget-content').each(function (onepressMoreLink4, onepressAuthorNamesPop) {
    var onepressAuthorNames = $(this),
        onepressAuthorNamesListOne = onepressAuthorNames.text().trim(),
        onepressFollowByEmailTextd = onepressAuthorNamesListOne.toLowerCase(),
        onepressFollowByEmailTextf = onepressAuthorNamesListOne.split('$');
    onepressFollowByEmailTextf[1] != undefined ? onepressMoreLink4 = regxify(onepressFollowByEmailTextf[1]) : onepressMoreLink4 = '';
    onepressFollowByEmailTextf[2] != undefined ? onepressAuthorNamesPop = regxify(onepressFollowByEmailTextf[2]) : onepressAuthorNamesPop = '';
    ajaxFeatured(onepressAuthorNames, 'featured', 3, onepressMoreLink4, onepressFollowByEmailTextd, onepressAuthorNamesPop)
});
$('.onepress-free-related-content').each(function () {
    var onepressAuthorNames = $(this),
        onepressMoreLink4 = onepressAuthorNames.find('.related-tag').attr('data-label'),
        onepressMoreLink3 = relatedPostsNum;
    ajaxRelated(onepressAuthorNames, 'related', onepressMoreLink3, onepressMoreLink4, 'getrelated')
});
$('.onepress-free-blog-post-comments').each(function () {
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
    onepressMoreLinkContent2.on('click', function () {
        onepressMoreLinkListTwo.show()
    });
    onepressMoreLinkListTwo.on('click', function () {
        onepressMoreLinkListTwo.hide()
    })
});
$(function () {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
    $('#onepress-free-mobile-menu').each(function () {
        $('.onepress-free-mobile-menu ul li .submenu-toggle').on('click', function (onepressAuthorNames) {
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
    $('p.comment-content').each(function () {
        var onepressMoreLink = $(this);
        onepressMoreLink.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        onepressMoreLink.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
    $('#onepress-free-load-more-link').each(function () {
        var onepressAuthorNames = $(this),
            onepressMoreLinkContent9 = onepressAuthorNames.data('load');
        if (onepressMoreLinkContent9) {
            $('#onepress-free-load-more-link').show()
        };
        $('#onepress-free-load-more-link').on('click', function (onepressMoreLinkContenta) {
            $('#onepress-free-load-more-link').hide();
            $['ajax']({
                url: onepressMoreLinkContent9,
                success: function (onepressFollowByEmailText5) {
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
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide()
                }
            });
            onepressMoreLinkContenta.preventDefault()
        })
    })
});

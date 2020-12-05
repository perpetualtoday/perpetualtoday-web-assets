$('#onepress-free-main-menu').menuify();
$('#onepress-free-main-menu .widget').addClass('show-menu');
$('.search-toggle').on('click', function() {
    $('body').toggleClass('search-active')
});

function ajaxRelated(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressFollowByEmailTextd) {
    if (onepressFollowByEmailTextd.match('getrelated')) {
        return getAjax(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4)
    }
}


function ajaxFeatured(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressFollowByEmailTextd, onepressAuthorNamesPop) {
    if (onepressFollowByEmailTextd.match('getfeatured')) {
        if (onepressAuthorNamesArray == 'featured') {
            return getAjax(onepressAuthorNames, onepressAuthorNamesArray, onepressMoreLink3, onepressMoreLink4, onepressAuthorNamesPop)
        } else {
            onepressAuthorNames.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function() {
                onepressAuthorNames.html(msgError())
            }, 500)
        }
    }
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
                beforeSend: function(onepressFollowByEmailText5) {
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
                success: function(onepressFollowByEmailText5) {
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
                error: function() {
                    onepressAuthorNames.html(msgServerError())
                }
            })
    }
}

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
        onepressViewAllText3 = 'https://assets.perpetualtoday.now.sh/images/default_article_image.jpg'
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
            onepressMoreLinkd = 'https://assets.perpetualtoday.now.sh/images/default_article_image.jpg'
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
        $('#onepress-free-load-more-link').each(function() {
            var onepressAuthorNames = $(this),
                onepressMoreLinkContent9 = onepressAuthorNames.data('load');
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
    })
});
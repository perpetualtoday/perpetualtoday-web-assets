$('.blog-posts-title a.more,.related-title a.more').each(function () {
    var onepressContent = $(this),
        onepressViewAllText = viewAllText;
    if (onepressViewAllText != '') {
        onepressContent.text(onepressViewAllText)
    }
});
$('.follow-by-email-text').each(function () {
    var onepressContent = $(this),
        onepressFollowByEmailText = followByEmailText;
    if (onepressFollowByEmailText != '') {
        onepressContent.text(onepressFollowByEmailText)
    }
});
$('.post-body strike').each(function () {
    var onepressContent = $(this),
        onepressAdContent = onepressContent.text().trim();
    if (onepressAdContent == '$ads={1}') {
        onepressContent.replaceWith('<div id="onepress-preview-new-before-ad"/>')
    };
    if (onepressAdContent == '$ads={2}') {
        onepressContent.replaceWith('<div id="onepress-preview-new-after-ad"/>')
    }
});
$('#onepress-preview-new-before-ad').each(function () {
    var onepressContent = $(this);
    if (onepressContent.length) {
        $('#before-ad').appendTo(onepressContent)
    }
});
$('#onepress-preview-new-after-ad').each(function () {
    var onepressContent = $(this);
    if (onepressContent.length) {
        $('#after-ad').appendTo(onepressContent)
    }
});
$('#onepress-preview-main-before-ad .widget').each(function () {
    var onepressContent = $(this);
    if (onepressContent.length) {
        onepressContent.appendTo($('#before-ad'))
    }
});
$('#onepress-preview-main-after-ad .widget').each(function () {
    var onepressContent = $(this);
    if (onepressContent.length) {
        onepressContent.appendTo($('#after-ad'))
    }
});
$('#onepress-preview-social-counter ul.social-icons li a').each(function () {
    var onepressContent = $(this),
        onepressSocialContent = onepressContent.find('.count'),
        onepressSocialData = onepressContent.data('content').trim(),
        onepressSocialDataArray = onepressSocialData.split('$'),
        onepressSocialDataArrayData = onepressSocialDataArray[0],
        onepressSocialDataArrayContent = onepressSocialDataArray[1];
    onepressContent.attr('href', onepressSocialDataArrayData);
    onepressSocialContent.text(onepressSocialDataArrayContent)
});
$('.avatar-image-container img').attr('src', function (onepressAuthorContent, onepressAuthorPhoto) {
    onepressAuthorPhoto = onepressAuthorPhoto.replace('//resources.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    onepressAuthorPhoto = onepressAuthorPhoto.replace('//img1.blogblog.com/img/blank.gif', '//assets.perpetualtoday.now.sh/images/default_avatar.jpg');
    return onepressAuthorPhoto
});
$('.post-body a').each(function () {
    var onepressAuthorContent = $(this),
        onepressAuthorNameArray = onepressAuthorContent.text().trim(),
        onepressAuthorNamePath = onepressAuthorNameArray.split('/'),
        onepressAuthorNamePathData = onepressAuthorNamePath[0],
        onepressAuthorNamePathContent = onepressAuthorNamePath[1],
        onepressAuthorNamePathContentPop = onepressAuthorNamePath.pop();
    if (onepressAuthorNameArray.match('button')) {
        onepressAuthorContent.addClass('button').text(onepressAuthorNamePathData);
        if (onepressAuthorNamePathContent != 'button') {
            onepressAuthorContent.addClass(onepressAuthorNamePathContent)
        };
        if (onepressAuthorNamePathContentPop != 'button') {
            onepressAuthorContent.addClass('colored-button').css({
                'background-color': onepressAuthorNamePathContentPop
            })
        }
    }
});
$('.post-body strike').each(function () {
    var onepressAuthorContent = $(this),
        onepressAuthorNameArray = onepressAuthorContent.text().trim(),
        onepressAuthorContentDisplay = onepressAuthorContent.html();
    if (onepressAuthorNameArray.match('contact-form')) {
        onepressAuthorContent.replaceWith('<div class="contact-form"/>');
        $('.contact-form').append($('#ContactForm1'))
    };
    if (onepressAuthorNameArray.match('alert-success')) {
        onepressAuthorContent.replaceWith('<div class="alert-message alert-success short-b">' + onepressAuthorContentDisplay + '</div>')
    };
    if (onepressAuthorNameArray.match('alert-info')) {
        onepressAuthorContent.replaceWith('<div class="alert-message alert-info short-b">' + onepressAuthorContentDisplay + '</div>')
    };
    if (onepressAuthorNameArray.match('alert-warning')) {
        onepressAuthorContent.replaceWith('<div class="alert-message alert-warning short-b">' + onepressAuthorContentDisplay + '</div>')
    };
    if (onepressAuthorNameArray.match('alert-error')) {
        onepressAuthorContent.replaceWith('<div class="alert-message alert-error short-b">' + onepressAuthorContentDisplay + '</div>')
    };
    if (onepressAuthorNameArray.match('left-sidebar')) {
        onepressAuthorContent.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
    };
    if (onepressAuthorNameArray.match('right-sidebar')) {
        onepressAuthorContent.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
    };
    if (onepressAuthorNameArray.match('full-width')) {
        onepressAuthorContent.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
    };
    if (onepressAuthorNameArray.match('code-box')) {
        onepressAuthorContent.replaceWith('<pre class="code-box short-b">' + onepressAuthorContentDisplay + '</pre>')
    };
    var onepressAlertContent = $('.post-body .short-b').find('b');
    onepressAlertContent.each(function () {
        var onepressAlertContentData = $(this),
            onepressContent = onepressAlertContentData.text().trim();
        if (onepressContent.match('alert-success') || onepressContent.match('alert-info') || onepressContent.match('alert-warning') || onepressContent.match('alert-error') || onepressContent.match('code-box')) {
            onepressAlertContentData.replaceWith('')
        }
    })
});
$('.onepress-preview-share-links .window-ify,.entry-share .window-ify').on('click', function () {
    var onepressAuthorContent = $(this),
        onepressArticleShareUrl = onepressAuthorContent.data('url'),
        onepressArticleShareWidth = onepressAuthorContent.data('width'),
        onepressArticleShareHeight = onepressAuthorContent.data('height'),
        onepressArticleShareClientWidth = window.screen.width,
        onepressArticleShareClientHeight = window.screen.height,
        onepressArticleShareActualWidth = Math.round(onepressArticleShareClientWidth / 2 - onepressArticleShareWidth / 2),
        onepressArticleShareActualHeight = Math.round(onepressArticleShareClientHeight / 2 - onepressArticleShareHeight / 2),
        onepressArticleShareDialog = window.open(onepressArticleShareUrl, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + onepressArticleShareWidth + ',height=' + onepressArticleShareHeight + ',left=' + onepressArticleShareActualWidth + ',top=' + onepressArticleShareActualHeight);
    onepressArticleShareDialog.focus()
});
$('.onepress-preview-share-links').each(function () {
    var onepressContent = $(this),
        onepressAlertContentData = onepressContent.find('.show-hid a');
    onepressAlertContentData.on('click', function () {
        onepressContent.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function () {
    var onepressAuthorContent = $(this),
        onepressAuthorDescription = onepressAuthorContent.text().trim(),
        onepressArticleShareUrl = onepressAuthorContent.attr('href');
    onepressAuthorContent.replaceWith('<li class="' + onepressAuthorDescription + '"><a href="' + onepressArticleShareUrl + '" title="' + onepressAuthorDescription + '" target="_blank"/></li>');
    $('.author-description').append($('.author-description span li'));
    $('.author-description').addClass('show-icons')
});

function regxify(onepressAuthorPhoto) {
    var onepressRegex = /[^{\}]+(?=})/g;
    return String(onepressAuthorPhoto.match(onepressRegex)).trim()
}

function msgError() {
    return '<span class="no-posts"><b>Error:</b> No Results Found</span>'
}

function msgServerError() {
    return '<div class="no-posts error-503"><b>Server encountered an error.</b> Check your connection and try again.</div>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink) {
    var onepressRssUrl = '';
    switch (onepressFeedLink) {
    case 'recent':
        onepressRssUrl = '/feeds/posts/summary?alt=json&max-results=' + onepressFeedArticles;
        break;
    case 'comments':
        if (onepressAuthorNameArray == 'list') {
            onepressRssUrl = '/feeds/comments/summary?alt=json&max-results=' + onepressFeedArticles
        } else {
            onepressRssUrl = '/feeds/posts/summary/-/' + onepressFeedLink + '?alt=json&max-results=' + onepressFeedArticles
        };
        break;
    default:
        onepressRssUrl = '/feeds/posts/summary/-/' + onepressFeedLink + '?alt=json&max-results=' + onepressFeedArticles;
        break
    };
    return onepressRssUrl
}

function getPostLink(onepressArticleLink, onepressAuthorPhoto) {
    for (var onepressArticleDescLength = 0; onepressArticleDescLength < onepressArticleLink[onepressAuthorPhoto].link.length; onepressArticleDescLength++) {
        if (onepressArticleLink[onepressAuthorPhoto].link[onepressArticleDescLength].rel == 'alternate') {
            var onepressCommentPhoto = onepressArticleLink[onepressAuthorPhoto].link[onepressArticleDescLength].href;
            break
        }
    };
    return onepressCommentPhoto
}

function getPostTitle(onepressArticleLink, onepressAuthorPhoto) {
    var onepressArticleTitle = onepressArticleLink[onepressAuthorPhoto].title['$t'];
    return onepressArticleTitle
}

function getPostImage(onepressArticleLink, onepressAuthorPhoto) {
    if ('media$thumbnail' in onepressArticleLink[onepressAuthorPhoto]) {
        var onepressArticleImage = onepressArticleLink[onepressAuthorPhoto].media$thumbnail.url;
        if (onepressArticleImage.match('img.youtube.com')) {
            onepressArticleImage = onepressArticleImage.replace('/default.', '/0.')
        };
        var onepressArticleImageResult = onepressArticleImage
    } else {
        onepressArticleImageResult = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    };
    return onepressArticleImageResult
}

function getPostAuthor(onepressArticleLink, onepressAuthorPhoto) {
    var onepressArticleTitle = onepressArticleLink[onepressAuthorPhoto].author[0].name['$t'];
    if (messages.postAuthor == 'true') {
        var onepressArticleAuthor = '<span class="entry-author">' + onepressArticleTitle + '</span>'
    } else {
        var onepressArticleAuthor = ''
    };
    return onepressArticleAuthor
}

function getPostDate(onepressArticleLink, onepressAuthorPhoto) {
    var onepressArticleDate = onepressArticleLink[onepressAuthorPhoto].published['$t'],
        onepressArticleDateDay = onepressArticleDate.substring(0, 4),
        onepressArticleDateMonth = onepressArticleDate.substring(5, 7),
        onepressArticleDateYear = onepressArticleDate.substring(8, 10),
        onepressArticleDateTime = monthFormat[parseInt(onepressArticleDateMonth, 10) - 1] + ' ' + onepressArticleDateYear + ', ' + onepressArticleDateDay;
    if (messages.postDate == 'true') {
        var onepressArticleAuthor = '<span class="entry-time"><time class="published" datetime="' + onepressArticleDate + '">' + onepressArticleDateTime + '</time></span>'
    } else {
        onepressArticleAuthor = ''
    };
    return onepressArticleAuthor
}

function getPostMeta(onepressArticleMetadataEntry, onepressArticleMetadataEntryData) {
    if (messages.postAuthor == 'true' || messages.postDate == 'true') {
        var onepressArticleMetadataEntryArray = '<div class="entry-meta">' + onepressArticleMetadataEntry + onepressArticleMetadataEntryData + '</div>'
    } else {
        onepressArticleMetadataEntryArray = ''
    };
    if (messages.postDate == 'true') {
        var onepressArticleMetadataEntryDate = '<div class="entry-meta">' + onepressArticleMetadataEntryData + '</div>'
    } else {
        onepressArticleMetadataEntryDate = ''
    };
    var onepressArticleAuthor = [onepressArticleMetadataEntryArray, onepressArticleMetadataEntryDate];
    return onepressArticleAuthor
}

function getPostLabel(onepressArticleLink, onepressAuthorPhoto) {
    if (onepressArticleLink[onepressAuthorPhoto].category != undefined) {
        var onepressArticleTags = onepressArticleLink[onepressAuthorPhoto].category[0].term,
            onepressArticleAuthor = '<span class="entry-category">' + onepressArticleTags + '</span>'
    } else {
        onepressArticleAuthor = ''
    };
    return onepressArticleAuthor
}

function getPostComments(onepressArticleLink, onepressAuthorPhoto, onepressCommentPhoto) {
    var onepressArticleTitle = onepressArticleLink[onepressAuthorPhoto].author[0].name['$t'],
        onepressCommenterPhoto = onepressArticleLink[onepressAuthorPhoto].author[0].gd$image.src.replace('/s113', '/w55-h55-p-k-no-nu'),
        onepressArticleDateTime = onepressArticleLink[onepressAuthorPhoto].title['$t'];
    if (onepressCommenterPhoto.match('//img1.blogblog.com/img/blank.gif') || onepressCommenterPhoto.match('//img1.blogblog.com/img/b16-rounded.gif')) {
        var onepressArticleImageResult = '//assets.perpetualtoday.now.sh/images/default_avatar.jpg'
    } else {
        var onepressArticleImageResult = onepressCommenterPhoto
    };
    var onepressArticleAuthor = '<article class="custom-item item-' + onepressAuthorPhoto + '"><a class="entry-image-link cmm-avatar" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleImageResult + '"/></a><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleTitle + '</a></h2><p class="cmm-snippet excerpt">' + onepressArticleDateTime + '</p></article>';
    return onepressArticleAuthor
}

function getCustomStyle(onepressAuthorNameArray, onepressFeedLink, onepressAuthorNamePathContentPop) {
    if (onepressAuthorNamePathContentPop != '') {
        if (onepressAuthorNameArray == 'featured') {
            var onepressArticleAuthor = '.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .entry-category{background-color:' + onepressAuthorNamePathContentPop + ';color:#fff}.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .loader:after{border-color:' + onepressAuthorNamePathContentPop + ';border-right-color:rgba(155,155,155,0.2)}'
        } else {
            onepressArticleAuthor = '.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .title-wrap:after,.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .entry-category{background-color:' + onepressAuthorNamePathContentPop + ';color:#fff}.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .title-wrap > a.more:hover,.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .entry-header:not(.entry-info) .entry-title a:hover{color:' + onepressAuthorNamePathContentPop + '}.id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' .loader:after{border-color:' + onepressAuthorNamePathContentPop + ';border-right-color:rgba(155,155,155,0.2)}'
        }
    } else {
        onepressArticleAuthor = ''
    };
    return onepressArticleAuthor
}

function getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAuthorNamePathContentPop) {
    switch (onepressAuthorNameArray) {
    case 'msimple':
        ;
    case 'featured':
        ;
    case 'block1':
        ;
    case 'col-left':
        ;
    case 'col-right':
        ;
    case 'grid1':
        ;
    case 'videos':
        ;
    case 'list':
        ;
    case 'related':
        if (onepressFeedLink == undefined) {
            onepressFeedLink = 'geterror404'
        };
        var onepressRssUrl = getFeedUrl(onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink);
        $['ajax']({
            url: onepressRssUrl,
            type: 'GET',
            dataType: 'json',
            cache: true,
            beforeSend: function (onepressArticleJsonData) {
                var onepressRssStyle = getCustomStyle(onepressAuthorNameArray, onepressFeedLink, onepressAuthorNamePathContentPop);
                switch (onepressAuthorNameArray) {
                case 'featured':
                    $('#page-skin-2').prepend(onepressRssStyle);
                    onepressAuthorContent.html(beforeLoader()).parent().addClass('id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' show-ify');
                    break;
                case 'block1':
                    ;
                case 'grid1':
                    ;
                case 'videos':
                    $('#page-skin-2').prepend(onepressRssStyle);
                    onepressAuthorContent.html(beforeLoader()).parent().addClass('id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' show-ify');
                    break;
                case 'col-left':
                    $('#page-skin-2').prepend(onepressRssStyle);
                    onepressAuthorContent.html(beforeLoader()).parent().addClass('column-left block-column id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' show-ify');
                    break;
                case 'col-right':
                    $('#page-skin-2').prepend(onepressRssStyle);
                    onepressAuthorContent.html(beforeLoader()).parent().addClass('column-right block-column id-' + onepressAuthorNameArray + '-' + onepressFeedLink + ' show-ify');
                    break;
                case 'list':
                    onepressAuthorContent.html(beforeLoader());
                    break;
                case 'related':
                    onepressAuthorContent.html(beforeLoader()).parent().addClass('show-ify');
                    break
                }
            },
            success: function (onepressArticleJsonData) {
                var onepressAuthorContentDisplay = '';
                switch (onepressAuthorNameArray) {
                case 'msimple':
                    onepressAuthorContentDisplay = '<ul class="mega-widget">';
                    break;
                case 'featured':
                    onepressAuthorContentDisplay = '<div class="featured-posts">';
                    break;
                case 'block1':
                    onepressAuthorContentDisplay = '<div class="content-block-1">';
                    break;
                case 'col-left':
                    ;
                case 'col-right':
                    onepressAuthorContentDisplay = '<div class="column-block">';
                    break;
                case 'grid1':
                    onepressAuthorContentDisplay = '<div class="grid-block-1">';
                    break;
                case 'videos':
                    onepressAuthorContentDisplay = '<div class="videos-block">';
                    break;
                case 'list':
                    onepressAuthorContentDisplay = '<div class="custom-widget">';
                    break;
                case 'related':
                    onepressAuthorContentDisplay = '<div class="related-posts">';
                    break
                };
                var onepressArticleJsonEntry = onepressArticleJsonData.feed.entry;
                if (onepressArticleJsonEntry != undefined) {
                    for (var onepressAuthorPhoto = 0, onepressArticleLink = onepressArticleJsonEntry; onepressAuthorPhoto < onepressArticleLink.length; onepressAuthorPhoto++) {
                        var onepressCommentPhoto = getPostLink(onepressArticleLink, onepressAuthorPhoto),
                            onepressArticleJsonEntryTitle = getPostTitle(onepressArticleLink, onepressAuthorPhoto, onepressCommentPhoto),
                            onepressArticleJsonEntryImage = getPostImage(onepressArticleLink, onepressAuthorPhoto, onepressCommentPhoto),
                            onepressArticleMetadataEntry = getPostAuthor(onepressArticleLink, onepressAuthorPhoto),
                            onepressArticleMetadataEntryData = getPostDate(onepressArticleLink, onepressAuthorPhoto),
                            onepressArticleJsonEntryData = getPostMeta(onepressArticleMetadataEntry, onepressArticleMetadataEntryData),
                            onepressArticleTags = getPostLabel(onepressArticleLink, onepressAuthorPhoto);
                        var onepressJsonEntryResult = '';
                        switch (onepressAuthorNameArray) {
                        case 'msimple':
                            onepressJsonEntryResult += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                            break;
                        case 'featured':
                            switch (onepressAuthorPhoto) {
                            case 0:
                                onepressJsonEntryResult += '<article class="featured-item post item-' + onepressAuthorPhoto + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a>' + onepressArticleTags + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[0] + '</div></div></article><div class="featured-scroll">';
                                break;
                            default:
                                onepressJsonEntryResult += '<article class="featured-item post item-' + onepressAuthorPhoto + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a>' + onepressArticleTags + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></div></article>';
                                break
                            };
                            break;
                        case 'block1':
                            switch (onepressAuthorPhoto) {
                            case 0:
                                onepressJsonEntryResult += '<article class="block-item item-' + onepressAuthorPhoto + '"><div class="block-inner">' + onepressArticleTags + '<a class="entry-image-link before-mask" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[0] + '</div></div></article>';
                                break;
                            default:
                                onepressJsonEntryResult += '<article class="block-item item-' + onepressAuthorPhoto + '"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                                break
                            };
                            break;
                        case 'col-left':
                            ;
                        case 'col-right':
                            switch (onepressAuthorPhoto) {
                            case 0:
                                onepressJsonEntryResult += '<article class="column-item item-' + onepressAuthorPhoto + '"><div class="column-inner">' + onepressArticleTags + '<a class="entry-image-link before-mask" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[0] + '</div></div></article>';
                                break;
                            default:
                                onepressJsonEntryResult += '<article class="column-item item-' + onepressAuthorPhoto + '"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                                break
                            };
                            break;
                        case 'grid1':
                            onepressJsonEntryResult += '<article class="grid-item item-' + onepressAuthorPhoto + '"><div class="entry-image"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                            break;
                        case 'videos':
                            onepressJsonEntryResult += '<article class="videos-item item-' + onepressAuthorPhoto + '"><div class="entry-image"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/><span class="video-icon"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                            break;
                        case 'list':
                            switch (onepressFeedLink) {
                            case 'comments':
                                var onepressArticleAuthor = getPostComments(onepressArticleLink, onepressAuthorPhoto, onepressCommentPhoto);
                                onepressJsonEntryResult += onepressArticleAuthor;
                                break;
                            default:
                                onepressJsonEntryResult += '<article class="custom-item item-' + onepressAuthorPhoto + '"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                                break
                            };
                            break;
                        case 'related':
                            onepressJsonEntryResult += '<article class="related-item post item-' + onepressAuthorPhoto + '"><div class="entry-image"><a class="entry-image-link" href="' + onepressCommentPhoto + '"><span class="entry-thumb" data-image="' + onepressArticleJsonEntryImage + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + onepressCommentPhoto + '">' + onepressArticleJsonEntryTitle + '</a></h2>' + onepressArticleJsonEntryData[1] + '</div></article>';
                            break
                        };
                        onepressAuthorContentDisplay += onepressJsonEntryResult
                    }
                } else {
                    switch (onepressAuthorNameArray) {
                    case 'msimple':
                        onepressAuthorContentDisplay = '<ul class="mega-widget">' + msgError() + '</ul>';
                        break;
                    default:
                        onepressAuthorContentDisplay = msgError();
                        break
                    }
                };
                switch (onepressAuthorNameArray) {
                case 'msimple':
                    onepressAuthorContentDisplay += '</ul>';
                    onepressAuthorContent.append(onepressAuthorContentDisplay).addClass('msimple');
                    onepressAuthorContent.find('a:first').attr('href', function (onepressAuthorContent, onepressListArticles) {
                        switch (onepressFeedLink) {
                        case 'recent':
                            onepressListArticles = onepressListArticles.replace(onepressListArticles, '/search');
                            break;
                        default:
                            onepressListArticles = onepressListArticles.replace(onepressListArticles, '/search/label/' + onepressFeedLink);
                            break
                        };
                        return onepressListArticles
                    });
                    break;
                case 'featured':
                    onepressAuthorContentDisplay += '</div></div>';
                    onepressAuthorContent.html(onepressAuthorContentDisplay);
                    break;
                case 'block1':
                    ;
                case 'grid1':
                    ;
                case 'col-left':
                    ;
                case 'col-right':
                    ;
                case 'videos':
                    onepressAuthorContentDisplay += '</div>';
                    onepressAuthorContent.html(onepressAuthorContentDisplay);
                    break;
                default:
                    onepressAuthorContentDisplay += '</div>';
                    onepressAuthorContent.html(onepressAuthorContentDisplay);
                    break
                };
                onepressAuthorContent.find('span.entry-thumb').lazyify()
            },
            error: function () {
                switch (onepressAuthorNameArray) {
                case 'msimple':
                    onepressAuthorContent.append('<ul>' + msgServerError() + '</ul>');
                    break;
                default:
                    onepressAuthorContent.html(msgServerError());
                    break
                }
            }
        })
    }
}

function ajaxMega(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega) {
    if (onepressAjaxMega.match('getmega')) {
        if (onepressAuthorNameArray == 'msimple') {
            return getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink)
        } else {
            onepressAuthorContent.addClass('has-sub mega-menu').append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}

function ajaxFeatured(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega, onepressAuthorNamePathContentPop) {
    if (onepressAjaxMega.match('getfeatured')) {
        if (onepressAuthorNameArray == 'featured') {
            return getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAuthorNamePathContentPop)
        } else {
            onepressAuthorContent.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function () {
                onepressAuthorContent.html(msgError())
            }, 500)
        }
    }
}

function ajaxBlock(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega, onepressAuthorNamePathContentPop) {
    if (onepressAjaxMega.match('getblock')) {
        if (onepressAuthorNameArray == 'block1' || onepressAuthorNameArray == 'col-left' || onepressAuthorNameArray == 'col-right' || onepressAuthorNameArray == 'grid1' || onepressAuthorNameArray == 'videos') {
            var onepressAjaxBlock = viewAllText,
                onepressAjaxBlockContent = '';
            if (onepressAjaxBlock != '') {
                onepressAjaxBlockContent = onepressAjaxBlock
            } else {
                onepressAjaxBlockContent = messages.viewAll
            };
            onepressAuthorContent.parent().find('.widget-title').append('<a class="more" href="/search/label/' + onepressFeedLink + '">' + onepressAjaxBlockContent + '</a>');
            return getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAuthorNamePathContentPop)
        } else {
            onepressAuthorContent.html(msgError()).parent().addClass('show-ify')
        }
    }
}

function ajaxWidget(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega) {
    if (onepressAjaxMega.match('getwidget')) {
        if (onepressAuthorNameArray == 'list') {
            return getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink)
        } else {
            onepressAuthorContent.html(msgError())
        }
    }
}

function ajaxRelated(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega) {
    if (onepressAjaxMega.match('getrelated')) {
        return getAjax(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink)
    }
}
$('#onepress-preview-main-menu li').each(function (onepressFeedLink) {
    var onepressPreviewMenu = $(this),
        onepressAuthorContent = onepressPreviewMenu,
        onepressPreviewFind = onepressPreviewMenu.find('a'),
        onepressAuthorNamePathData = onepressPreviewFind.attr('href').trim(),
        onepressAjaxMega = onepressAuthorNamePathData.toLowerCase(),
        onepressPreviewResult = onepressAuthorNamePathData.split('$');
    onepressPreviewResult[1] != undefined ? onepressFeedLink = regxify(onepressPreviewResult[1]) : onepressFeedLink = '';
    if (onepressAjaxMega.match('getmega')) {
        onepressAuthorContent.addClass('has-sub mega-menu')
    };
    ajaxMega(onepressAuthorContent, 'msimple', 5, onepressFeedLink, onepressAjaxMega)
});
$('#featured .HTML .widget-content').each(function (onepressFeedLink, onepressAuthorNamePathContentPop) {
    var onepressAuthorContent = $(this),
        onepressAuthorNamePathData = onepressAuthorContent.text().trim(),
        onepressAjaxMega = onepressAuthorNamePathData.toLowerCase(),
        onepressPreviewResult = onepressAuthorNamePathData.split('$');
    onepressPreviewResult[1] != undefined ? onepressFeedLink = regxify(onepressPreviewResult[1]) : onepressFeedLink = '';
    onepressPreviewResult[2] != undefined ? onepressAuthorNamePathContentPop = regxify(onepressPreviewResult[2]) : onepressAuthorNamePathContentPop = '';
    ajaxFeatured(onepressAuthorContent, 'featured', 3, onepressFeedLink, onepressAjaxMega, onepressAuthorNamePathContentPop)
});
$('.onepress-preview-content-blocks .HTML .widget-content').each(function (onepressFeedArticles, onepressFeedLink, onepressAuthorNameArray, onepressAuthorNamePathContentPop) {
    var onepressAuthorContent = $(this),
        onepressAuthorNamePathData = onepressAuthorContent.text().trim(),
        onepressAjaxMega = onepressAuthorNamePathData.toLowerCase(),
        onepressPreviewResult = onepressAuthorNamePathData.split('$');
    onepressPreviewResult[1] != undefined ? onepressFeedArticles = regxify(onepressPreviewResult[1]) : onepressFeedArticles = '';
    onepressPreviewResult[2] != undefined ? onepressFeedLink = regxify(onepressPreviewResult[2]) : onepressFeedLink = '';
    onepressPreviewResult[3] != undefined ? onepressAuthorNameArray = regxify(onepressPreviewResult[3]) : onepressAuthorNameArray = '';
    onepressPreviewResult[4] != undefined ? onepressAuthorNamePathContentPop = regxify(onepressPreviewResult[4]) : onepressAuthorNamePathContentPop = '';
    ajaxBlock(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega, onepressAuthorNamePathContentPop)
});
$('.onepress-preview-widget-ready .HTML .widget-content').each(function (onepressFeedArticles, onepressFeedLink, onepressAuthorNameArray) {
    var onepressAuthorContent = $(this),
        onepressAuthorNamePathData = onepressAuthorContent.text().trim(),
        onepressAjaxMega = onepressAuthorNamePathData.toLowerCase(),
        onepressPreviewResult = onepressAuthorNamePathData.split('$');
    onepressPreviewResult[1] != undefined ? onepressFeedArticles = regxify(onepressPreviewResult[1]) : onepressFeedArticles = '';
    onepressPreviewResult[2] != undefined ? onepressFeedLink = regxify(onepressPreviewResult[2]) : onepressFeedLink = '';
    onepressPreviewResult[3] != undefined ? onepressAuthorNameArray = regxify(onepressPreviewResult[3]) : onepressAuthorNameArray = '';
    ajaxWidget(onepressAuthorContent, onepressAuthorNameArray, onepressFeedArticles, onepressFeedLink, onepressAjaxMega)
});
$('.onepress-preview-related-content').each(function () {
    var onepressAuthorContent = $(this),
        onepressFeedLink = onepressAuthorContent.find('.related-tag').attr('data-label'),
        onepressFeedArticles = relatedPostsNum;
    ajaxRelated(onepressAuthorContent, 'related', onepressFeedArticles, onepressFeedLink, 'getrelated')
});
$('.onepress-preview-blog-post-comments').each(function () {
    var onepressAuthorContent = $(this),
        onepressCommentSystem = commentsSystem,
        onepressCommentSystemFb = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        onepressCommentSystemClass = 'comments-system-' + onepressCommentSystem;
    switch (onepressCommentSystem) {
    case 'blogger':
        onepressAuthorContent.addClass(onepressCommentSystemClass).show();
        $('.entry-meta .entry-comments-link').addClass('show');
        break;
    case 'disqus':
        onepressAuthorContent.addClass(onepressCommentSystemClass).show();
        break;
    case 'facebook':
        onepressAuthorContent.addClass(onepressCommentSystemClass).find('#comments').html(onepressCommentSystemFb);
        onepressAuthorContent.show();
        break;
    case 'hide':
        onepressAuthorContent.hide();
        break;
    default:
        onepressAuthorContent.addClass('comments-system-default').show();
        $('.entry-meta .entry-comments-link').addClass('show');
        break
    };
    var onepressCommentSystemClassClick = onepressAuthorContent.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        onepressSocialDataArrayContent = onepressAuthorContent.find('.comments .toplevel-thread > #top-continue');
    onepressCommentSystemClassClick.on('click', function () {
        onepressSocialDataArrayContent.show()
    });
    onepressSocialDataArrayContent.on('click', function () {
        onepressSocialDataArrayContent.hide()
    })
});
$(function () {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
    $('.mobile-logo').each(function () {
        var onepressContent = $(this),
            onepressMobileMenu = $('#main-logo .header-widget a').clone();
        onepressMobileMenu.find('#h1-tag').remove();
        onepressMobileMenu.appendTo(onepressContent)
    });
    $('#onepress-preview-mobile-menu').each(function () {
        var onepressContent = $(this),
            onepressMobileMenuContent = $('#onepress-preview-main-menu-nav').clone();
        onepressMobileMenuContent.attr('id', 'main-mobile-nav');
        onepressMobileMenuContent.find('.getMega, .mega-widget, .mega-tab').remove();
        onepressMobileMenuContent.find('.complex-tabs').replaceWith(onepressMobileMenuContent.find('.complex-tabs > ul.select-tab').attr('class', 'sub-menu m-sub'));
        onepressMobileMenuContent.find('.mega-menu > a').each(function () {
            var onepressSocialContent = $(this),
                onepressMobileMenuContentLink = onepressSocialContent.attr('href').trim().toLowerCase();
            if (onepressMobileMenuContentLink.match('getmega')) {
                onepressSocialContent.attr('href', '/search')
            }
        });
        onepressMobileMenuContent.find('.mega-tabs ul li > a').each(function () {
            var onepressSocialContent = $(this),
                onepressMobileMenu = onepressSocialContent.text().trim();
            onepressSocialContent.attr('href', '/search/label/' + onepressMobileMenu)
        });
        onepressMobileMenuContent.appendTo(onepressContent);
        $('.show-onepress-preview-mobile-menu, .hide-onepress-preview-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        });
        $('.onepress-preview-mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
        $('.onepress-preview-mobile-menu .mega-menu').find('.submenu-toggle').remove();
        $('.onepress-preview-mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');
        $('.onepress-preview-mobile-menu ul li .submenu-toggle').on('click', function (onepressAuthorContent) {
            if ($(this).parent().hasClass('has-sub')) {
                onepressAuthorContent.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        })
    });
    $('.social-mobile').each(function () {
        var onepressContent = $(this),
            onepressMobileMenu = $('#navbar-social ul.social').clone();
        onepressMobileMenu.appendTo(onepressContent)
    });
    $('#onepress-preview-header-wrapper .headerify').each(function () {
        var onepressAuthorContent = $(this);
        if (fixedMenu == true) {
            if (onepressAuthorContent.length > 0) {
                var onepressTopScroll = $(document).scrollTop(),
                    onepressTopScrollOffset = onepressAuthorContent.offset().top,
                    onepressTopScrollContentHeight = onepressAuthorContent.height(),
                    onepressArticleDateTime = (onepressTopScrollOffset + onepressTopScrollContentHeight);
                $(window).scroll(function () {
                    var onepressArticleTitle = $(document).scrollTop(),
                        onepressArticleDateMonth = $('#footer-wrapper').offset().top,
                        onepressArticleDateYear = (onepressArticleDateMonth - onepressTopScrollContentHeight);
                    if (onepressArticleTitle < onepressArticleDateYear) {
                        if (onepressArticleTitle > onepressArticleDateTime) {
                            onepressAuthorContent.addClass('is-fixed')
                        } else {
                            if (onepressArticleTitle <= 0) {
                                onepressAuthorContent.removeClass('is-fixed')
                            }
                        };
                        if (onepressArticleTitle > onepressTopScroll) {
                            onepressAuthorContent.removeClass('show')
                        } else {
                            onepressAuthorContent.addClass('show')
                        };
                        onepressTopScroll = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $('#main-wrapper,#sidebar-wrapper').each(function () {
        if (fixedSidebar == true) {
            if (fixedMenu == true) {
                var onepressMenuDimen = 90
            } else {
                onepressMenuDimen = 30
            };
            $(this).theiaStickySidebar({
                additionalMarginTop: onepressMenuDimen,
                additionalMarginBottom: 30
            })
        }
    });
    $('.back-top').each(function () {
        var onepressContent = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? onepressContent.fadeIn(250) : onepressContent.fadeOut(250);
            onepressContent.offset().top >= $('#footer-wrapper').offset().top - 32 ? onepressContent.addClass('on-footer') : onepressContent.removeClass('on-footer')
        }), onepressContent.click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    });
    $('p.comment-content').each(function () {
        var onepressContent = $(this);
        onepressContent.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        onepressContent.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
    $('#onepress-preview-load-more-link').each(function () {
        var onepressAuthorContent = $(this),
            onepressAuthorContentData = onepressAuthorContent.data('load');
        if (onepressAuthorContentData) {
            $('#onepress-preview-load-more-link').show()
        };
        $('#onepress-preview-load-more-link').on('click', function (onepressLoadMoreLink) {
            $('#onepress-preview-load-more-link').hide();
            $['ajax']({
                url: onepressAuthorContentData,
                success: function (onepressArticleJsonData) {
                    var onepressLoadMoreData = $(onepressArticleJsonData).find('.blog-posts');
                    onepressLoadMoreData.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append(onepressLoadMoreData.html());
                    onepressAuthorContentData = $(onepressArticleJsonData).find('#onepress-preview-load-more-link').data('load');
                    if (onepressAuthorContentData) {
                        $('#onepress-preview-load-more-link').show()
                    } else {
                        $('#onepress-preview-load-more-link').hide();
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
            onepressLoadMoreLink.preventDefault()
        })
    })
})

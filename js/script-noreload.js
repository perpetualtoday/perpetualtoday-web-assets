$('#onepress-free-main-menu').menuify();
$('#onepress-free-main-menu .widget').addClass('show-menu');
$('.search-toggle').on('click', function () {
    $('body').toggleClass('search-active')
});
        $('.show-onepress-free-mobile-menu, .hide-onepress-free-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        });

        $('.onepress-free-mobile-menu ul li .submenu-toggle').on('click', function (onepressAuthorNames) {
            if ($(this).parent().hasClass('has-sub')) {
                onepressAuthorNames.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        });

    $('#onepress-free-mobile-menu').each(function () {
        var onepressMoreLink = $(this),
            onepressMoreLinkContent4 = $('#onepress-free-main-menu-nav').clone();
        onepressMoreLinkContent4.attr('id', 'main-mobile-nav');
        onepressMoreLinkContent4.appendTo(onepressMoreLink);
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function showPreloader() {
        var preloaderScreen = document.getElementById('preloader');
        preloaderScreen.classList.remove('hide', 'fade-out');
        preloaderScreen.classList.add('fade-in')
    }

    function hideFullPreloader() {
        var preloaderScreen = document.getElementById('preloader');
        preloaderScreen.classList.add('fade-out');
        preloaderScreen.classList.remove('fade-in');
        setTimeout(function() {
                preloaderScreen.classList.add('hide');
            }, 200) //Note that this interval matches the timing of CSS animation
    }

    function hideFullPlaceholder() {
        var placeholders = document.querySelectorAll('.placeholders');
        for (var i = 0; i < placeholders.length; i++) {
            placeholders[i].classList.add('hide');

        };
        showContent();
    }

    async function hidePreloader() {
        document.getElementById('top-content').scrollIntoView({
            behavior: 'smooth'
        });
        await sleep(3000);
        hideFullPreloader();
    }

    async function hidePlaceholder() {
        await sleep(3000);
        hideFullPlaceholder();
    }

    // we want to re-load our main scripts so things such as search and sliders work
    function loadMainScript() {
        (
            function(document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = 'https://assets.perpetualtoday.now.sh/js/script.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
            }
            (document, 'script')
        );
    }


    function loadPrimaryScript() {
        (
            function(document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = 'https://assets.perpetualtoday.now.sh/js/main.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
            }
            (document, 'script')
        );
    }

    function loadPage(newUrl) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            var offlinePage = '/offline';

            if (httpRequest.readyState !== XMLHttpRequest.DONE)
                return;

            var newDocument = httpRequest.responseXML;
            if (newDocument === null)
                window.location.href = '/offline/';

            var newContent = httpRequest.responseXML.getElementById("content");
            if (newContent === null)
                window.location.href = '/offline/';

            document.title = newDocument.title;

            var contentElement = document.getElementById("content");
            contentElement.replaceWith(newContent);
            loadMainScript();
            loadPrimaryScript();
            loadComments();
        }

        httpRequest.responseType = "document";
        httpRequest.open("GET", newUrl);
        httpRequest.send();
    }

    window.onload = function() {
        // Make links load asynchronously
        document.body.addEventListener("click", function(event) {
            var newUrl = '';

            if (event.target.tagName.toLowerCase() == 'img') {
                var newUrl = event.target.parentElement.href;
            } else if (event.target.tagName.toLowerCase() == 'svg') {
                var newUrl = event.target.parentElement.href;
            } else if (event.target.id.toLowerCase() == 'thumb-image') {
                var newUrl = event.target.parentElement.href;
            } else if (event.target.tagName.toLowerCase() == 'button') {
                return;
            } else if (event.target.id.toLowerCase() == 'back-top') {
                return;
            } else if (event.target.id.toLowerCase() == 'search-toggle') {
                return;
            } else if (event.target.id.toLowerCase() == 'mobile-toggle') {
                return;
            } else if (event.target.id.toLowerCase() == 'onepress-free-load-more-link') {
                return;
            } else if (event.target.id.toLowerCase() == 'more-button') {
                return;
            } else if (event.target.tagName.toLowerCase() == 'input') {
                return;
            } else if (event.target.tagName.toLowerCase() != 'a') {
                return;
            } else {
                var newUrl = event.target.href;
            }

            // We don't want AJAX loads on AJAX-loaded content
            if (newUrl === '')
                return;

            if (newUrl === null)
                return;

            // History API needed to make sure back and forward still work
            if (history === null)
                return;

            event.preventDefault();

            // External links should instead open in a new tab

            var domain = window.location.origin;
            var currentPage = window.location.href;

            if (newUrl === undefined) {
                return;
            } else if (newUrl.includes(domain)) {
                    showPreloader();
                    history.pushState(null /*stateObj*/ , "" /*title*/ , newUrl);
                    loadPage(newUrl);
            } else {
                window.open(newUrl, "_blank");
            }
        });
    }

    window.onpopstate = function(event) {
        oldUrl = window.location.href;

        if (oldUrl.indexOf("posts") > -1) {
            navigatePage(oldUrl);
        } else {
            loadPage(window.location);
        };
    }
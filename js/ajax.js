// Quite bad jQuery-less AJAX loader, made for Hugo and Blogger sites.
// 2020 - John Vincent (tensevntysevn)
// Support? Email me tensevntysevn@gmail.com
function sleep(e){return new Promise(t=>setTimeout(t,e))}function closeMobileMenu(){$(".nav-active")[0]&&$("body").toggleClass("nav-active")}function showPreloader(){var e=document.getElementById("preloader");e.classList.remove("hide","fade-out"),e.classList.add("fade-in")}function hideFullPreloader(){var e=document.getElementById("preloader");e.classList.add("fade-out"),e.classList.remove("fade-in"),setTimeout(function(){e.classList.add("hide")},200)}function hideFullPlaceholder(){for(var e=document.querySelectorAll(".placeholders"),t=0;t<e.length;t++)e[t].classList.add("hide");showContent()}async function hidePreloader(){document.getElementById("top-content").scrollIntoView({behavior:"smooth"}),await sleep(3e3),hideFullPreloader()}async function hidePlaceholder(){await sleep(3e3),hideFullPlaceholder()}function loadPrimaryScript(){!function(e,t){var o=e.createElement("script"),n=e.getElementsByTagName("script")[0];o.src="https://assets.perpetualtoday.now.sh/js/main.js",n.parentNode.insertBefore(o,n)}(document)}function loadPage(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){var e=t.responseXML;null===e&&(window.location.href="/offline/");var o=t.responseXML.getElementById("content");null===o&&(window.location.href="/offline/"),document.title=e.title,document.getElementById("content").replaceWith(o),loadPrimaryScript()}},t.responseType="document",t.open("GET",e),t.send()}window.onload=function(){document.body.addEventListener("click",function(e){var t="";if("img"==e.target.tagName.toLowerCase())t=e.target.parentElement.href;else if("svg"==e.target.tagName.toLowerCase())t=e.target.parentElement.href;else if("thumb-image"==e.target.id.toLowerCase())t=e.target.parentElement.href;else{if("button"==e.target.tagName.toLowerCase())return;if("back-top"==e.target.id.toLowerCase())return;if("search-toggle"==e.target.id.toLowerCase())return;if("mobile-toggle"==e.target.id.toLowerCase())return;if("onepress-free-load-more-link"==e.target.id.toLowerCase())return;if("more-button"==e.target.id.toLowerCase())return;if("share-button"==e.target.id.toLowerCase())return;if("input"==e.target.tagName.toLowerCase())return;if("a"!=e.target.tagName.toLowerCase())return;t=e.target.href}if(""!==t&&null!==t&&null!==history){e.preventDefault();var o=window.location.origin;window.location.href;void 0!==t&&(t.includes("feed")?window.open(t,"_blank"):t.includes(o)?(closeMobileMenu(),showPreloader(),history.pushState(null,"",t),loadPage(t)):window.open(t,"_blank"))}})},window.onpopstate=function(e){oldUrl=window.location.href,oldUrl.indexOf("posts")>-1?navigatePage(oldUrl):loadPage(window.location)};

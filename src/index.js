import "normalize.css";
import "./css/main.css";
import "./css/rules.css";
const $ = require("jquery");

$(document).ready(function(){
    $(window).bind("resize", function(){
        if ($(window).outerWidth() > 767.98) {
            $(".sm-nav").css("display", "none");
        }
    });
    $("#toggleMenu").click(function(){
        $("#sm-nav-menu").slideToggle(300);
    });
    $(".sm-nav > .dropdown").click(function(){
        $(".sm-nav > .dropdown > ul").slideToggle(300);
    });
});

var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="https://track.earthmc.net/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', '1']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();




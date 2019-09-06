$(document).ready(function(){

    $(window).bind("resize", function(){
        if ($(window).outerWidth() > 767.98) {
            $(".sm-nav").css("display", "none");
        } else {
        }
    });
    $("#toggleMenu").click(function(){
        $("#sm-nav-menu").slideToggle(300);
    });
    $(".sm-nav > .dropdown").click(function(){
        $(".sm-nav > .dropdown > ul").slideToggle(300);
    });
});

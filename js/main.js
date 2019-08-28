$(document).ready(function(){
    $("#toggleMenu").click(function(){
        $("#sm-nav-menu").slideToggle(300);
    });
    $(".sm-nav > .dropdown").click(function(){
        $(".sm-nav > .dropdown > ul").slideToggle(300);
    });
});

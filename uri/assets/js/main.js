$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });

    var menu = "close";
    $("div#hamburger-1").click(function(){
        if(menu == "close"){
            $("nav.navbar-menu").css("left","0");
            $("body").css("overflow-y","hidden");
            menu = "open";
        }
        else{
            $("nav.navbar-menu").css("left","-100%");
            $("body").css("overflow-y","auto");
            menu = "close";
        }
    })
});
  
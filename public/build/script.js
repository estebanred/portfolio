$(document).ready(function(){function n(){$(window).scrollTop()>e?$("#navmenu").removeClass("e-nav-transparent",{duration:500}):$("#navmenu").addClass("e-nav-transparent",{duration:500})}$(window).scroll(function(){n()});var e=$(".e-header").position().top+$(".e-header").outerHeight()-$("#navmenu").outerHeight();$(document).on("click","#navmenu a",function(n){n.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},700)})});
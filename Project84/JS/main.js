$(document).ready(function(){

    if (
	document.fullscreenEnabled || 
	document.webkitFullscreenEnabled || 
	document.mozFullScreenEnabled ||
	document.msFullscreenEnabled
) {
    var i = document.querySelector("body");

// go full-screen
if (i.requestFullscreen) {
	i.requestFullscreen();
} else if (i.webkitRequestFullscreen) {
	i.webkitRequestFullscreen();
} else if (i.mozRequestFullScreen) {
	i.mozRequestFullScreen();
} else if (i.msRequestFullscreen) {
	i.msRequestFullscreen();
}
}
    
});


$(".theman").mouseenter(function(){
    $(".black-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theman").animate({color:"#111"}, 100);
    $(".themanP").fadeIn(100);
    $(".smallman").animate({opacity:"1"},100);
    
    $(".white-triangle").animate({backgroundColor:"#111"}, 100);
    $(".theplan").animate({color:"#fff"}, 100);
}); 
$(".theman").mouseleave(function(){
    $(".black-triangle").animate({backgroundColor:"#111"}, 100);
    $(".theman").animate({color:"#fff"}, 100);
    $(".themanP").fadeOut(100);
    $(".smallman").animate({opacity:"0"},100);
    
    $(".white-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theplan").animate({color:"#111"}, 100);
});

$(".theplan").mouseenter(function(){
    $(".white-triangle").animate({backgroundColor:"#111"}, 100);
    $(".theplan").animate({color:"#fff"}, 100);
    $(".theplanP").fadeIn(100);
    $(".smallplan").animate({opacity:"1"},100);
    
    $(".black-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theman").animate({color:"#111"}, 100);
}); 
$(".theplan").mouseleave(function(){
    $(".white-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theplan").animate({color:"#111"}, 100);
    $(".theplanP").fadeOut(100);
    $(".smallplan").animate({opacity:"0"},100);
    
    $(".black-triangle").animate({backgroundColor:"#111"}, 100);
    $(".theman").animate({color:"#fff"}, 100);
}); 
 

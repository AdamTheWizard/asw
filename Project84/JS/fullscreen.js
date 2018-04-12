
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

<<<<<<< HEAD

//switch colours with the two triangle divs and nested text on hover
$(".theman").mouseenter(function () {
    $(".black-triangle").animate({ backgroundColor: "#fff" }, 100);
    $(".theman").animate({ color: "#111" }, 100);
    $(".themanP").fadeIn(100);
    $(".smallman").animate({ opacity: "1" }, 100);

    $(".white-triangle").animate({ backgroundColor: "#111" }, 100);
    $(".theplan").animate({ color: "#fff" }, 100);
});
// switch colours back
$(".theman").mouseleave(function () {
    $(".black-triangle").animate({ backgroundColor: "#111" }, 100);
    $(".theman").animate({ color: "#fff" }, 100);
=======
if ($(window).width() > 600) {
        $('*').unbind('mouseenter mouseleave');
        $('*').off('mouseenter mouseleave');
}


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
>>>>>>> e6496f888d1d1fbe25fa102846512005e83328b3
    $(".themanP").fadeOut(100);
    $(".smallman").animate({ opacity: "0" }, 100);

    $(".white-triangle").animate({ backgroundColor: "#fff" }, 100);
    $(".theplan").animate({ color: "#111" }, 100);
});

//switch colours with the two triangle divs and nested text on hover
$(".theplan").mouseenter(function () {
    $(".white-triangle").animate({ backgroundColor: "#111" }, 100);
    $(".theplan").animate({ color: "#fff" }, 100);
    $(".theplanP").fadeIn(100);
    $(".smallPlan").animate({ opacity: "1" }, 100);

    $(".black-triangle").animate({ backgroundColor: "#fff" }, 100);
    $(".theman").animate({ color: "#111" }, 100);
});
// switch colours back
$(".theplan").mouseleave(function () {
    $(".white-triangle").animate({ backgroundColor: "#fff" }, 100);
    $(".theplan").animate({ color: "#111" }, 100);
    $(".theplanP").fadeOut(100);
    $(".smallPlan").animate({ opacity: "0" }, 100);

    $(".black-triangle").animate({ backgroundColor: "#111" }, 100);
    $(".theman").animate({ color: "#fff" }, 100);
});
       

<<<<<<< HEAD
// media queries switch the layout and add a toggle button
// toggle button switches between displaying two divs
$(".toggle-arrows-btn").click(function () {

// show 'The man' section and hide 'The Plan' section if the toggle button is clicked
    if ($(".themanP").css("display") == "none") {

        $("body").animate({ opacity: "0" }, 500, function () {
=======
var theplan = document.querySelector(".theplan");
var theman = document.querySelector(".theman");
>>>>>>> e6496f888d1d1fbe25fa102846512005e83328b3

            $(".black-triangle").css("clip-path", " inherit");

            $(".theplan").css("display", "none");

            $(".themanP").css("color", "#fff");
            $(".themanP").css("display", "block");
            $(".themanP").css("top", "15vh");
            $(".themanP").css("right", "0");
            $(".themanP").css("left", "5vw");
            $(".themanP").css("width", "90vw");

            $(".theman").css("color", "#fff");

            $(".smallman").css("color", "#fff");
            $(".smallman").css("bottom", "initial");
            $(".smallman").css("top", $(".theman").height() * 1.6);
            $(".smallman").css("opacity", "1");

            $("body").animate({ opacity: "1" }, 500);
        });

    } else if ($(".themanP").css("display") == "block") {
        $("body").animate({ opacity: "0" }, 500, function () {
            $(".black-triangle").css("clip-path", "polygon(100vw 0, 0% 100vh, 100vw 0vh)");
            $(".theplan").css("display", "block");
            $(".themanP").css("color", "#111");
            $(".themanP").css("display", "none");

            $(".theman").css("color", "#fff");

            $(".smallman").css("color", "#fff");
            $(".smallman").css("bottom", "initial");
            $(".smallman").css("top", $(".theman").height() * 2);
            $(".smallman").css("opacity", "1");

            $("body").animate({ opacity: "1" }, 500);
        });
    };
});

$(document).ready(function () {
    resizeText();
});
$(window).resize(function () {
    resizeText();
});

<<<<<<< HEAD
// text explaining toggle button (need to make better UI so no need for this)
// TODO TODO TODO
// TODO TODO TODO
// TODO TODO TODO
// TODO TODO TODO
// TODO TODO TODO
function resizeText() {
    if ($(window).width() < 500) {

        $(".themanP").html("<span class='icon icon-mars blue'><i class='fas fa-mars'></i></span><br>If you're reading this, you're probably curious about me or my website. I'd like you to know everything. It's just dificult to know where to start. I suppose telling you my name is Adam is a good way to begin. Maybe, telling you I'm a 26 year old Web developer from London and a dad to one awesome 9 year old would be a good folow up to that? It would probably do me well to tell you I'm not a fan of writing about myself and my writing style needs improving but I assume that's obvious by now. I really would like you to know more but for now I'll just say, I'm a man with a plan and my plan is to help. If you can help me do this, follow the link at the top to get in touch. If you would like to make a difference yourself, please click the toggle button and follow the 'plan' link at the top to see more about how you can.");

        $(".theplanP").html("<span class='icon blue'><i class='fas fa-hands-helping'></i></span><br>If you'd like to read more about the man who made this website, click the toggle button at the top, otherwise, this is where I explain what the ultimate goal is. The Everest I'm trying to climb. The proverbial bull who's horns I am trying to firmly grip. I would love to tell you the whole plan and all of its wonderous intricacies but to be honest, I'm still trying to figure that bit out. Currently, the plan is to help combat the shockingly high levels of suicide in men in the U.K, I'm just not sure of the best way I can contribute to such an impactful problem yet. I would like to be involved with this problem directly and if you have any ideas or ways that I can start making a difference, get in touch.");
    } else {
        $(".themanP").html("<span class='icon icon-mars blue'><i class='fas fa-mars'></i></span><br>If you're reading this, you're probably curious about me or my website. I'd like you to know everything. It's just dificult to know where to start. I suppose telling you my name is Adam is a good way to begin. Maybe, telling you I'm a 26 year old Web developer from London and a dad to one awesome 9 year old would be a good folow up to that? It would probably do me well to tell you I'm not a fan of writing about myself and my writing style needs improving but I assume that's obvious by now. I really would like you to know more but for now I'll just say, I'm a man with a plan and my plan is to help. Follow the link at the bottom to get in touch.")

=======
function resizeText(){
    if ($(window).width() < 500){
        
        $(".themanP").html("<span class='icon icon-mars blue'><i class='fas fa-mars'></i></span><br>If you're reading this, you're probably curious about me or my website. I'd like you to know everything. It's just dificult to know where to start. I suppose telling you my name is Adam is a good way to begin. Maybe, telling you I'm a 26 year old Web developer from London and a dad to one awesome 9 year old would be a good follow up to that? It would probably do me well to tell you I'm not a fan of writing about myself and my writing style needs improving but I assume that's obvious by now. I really would like you to know more but for now I'll just say, I'm a man with a plan and my plan is to help. If you can help me do this, follow the link at the top to get in touch. If you would like to make a difference yourself, please click the toggle button and follow the 'plan' link at the top to see more about how you can.");
        
        $(".theplanP").html("<span class='icon blue'><i class='fas fa-hands-helping'></i></span><br>If you'd like to read more about the man who made this website, click the toggle button at the top, otherwise, this is where I explain what the ultimate goal is. The Everest I'm trying to climb. The proverbial bull who's horns I am trying to firmly grip. I would love to tell you the whole plan and all of its wonderous intricacies but to be honest, I'm still trying to figure that bit out. Currently, the plan is to help combat the shockingly high levels of suicide in men in the U.K, I'm just not sure of the best way I can contribute to such an impactful problem yet. I would like to be involved with this problem directly and if you have any ideas or ways that I can start making a difference, get in touch.");
    } else {
        $(".themanP").html("<span class='icon icon-mars blue'><i class='fas fa-mars'></i></span><br>If you're reading this, you're probably curious about me or my website. I'd like you to know everything. It's just dificult to know where to start. I suppose telling you my name is Adam is a good way to begin. Maybe, telling you I'm a 26 year old Web developer from London and a dad to one awesome 9 year old would be a good follow up to that? It would probably do me well to tell you I'm not a fan of writing about myself and my writing style needs improving but I assume that's obvious by now. I really would like you to know more but for now I'll just say, I'm a man with a plan and my plan is to help. Follow the link at the bottom to get in touch.")
        
>>>>>>> e6496f888d1d1fbe25fa102846512005e83328b3
        $(".theplanP").html("<span class='icon blue'><i class='fas fa-hands-helping'></i></span><br>If you'd like to read more about the man who made this website, hover over the link at the bottom, otherwise, this is where I explain what the ultimate goal is. The Everest I'm trying to climb. The proverbial bull who's horns I am trying to firmly grip. I would love to tell you the whole plan and all of its wonderous intricacies but to be honest, I'm still trying to figure that bit out. Currently, the plan is to help combat the shockingly high levels of suicide in men in the U.K, I'm just not sure of the best way I can contribute to such an impactful problem yet. I would like to be involved with this problem directly and if you have any ideas or ways that I can start making a difference, get in touch. If you would like to make a difference yourself, please follow the link at the top to see more about how you can.");
    }
}




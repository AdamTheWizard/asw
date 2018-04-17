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
    $(".smallPlan").animate({opacity:"1"},100);
    
    $(".black-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theman").animate({color:"#111"}, 100);
}); 
$(".theplan").mouseleave(function(){
    $(".white-triangle").animate({backgroundColor:"#fff"}, 100);
    $(".theplan").animate({color:"#111"}, 100);
    $(".theplanP").fadeOut(100);
    $(".smallPlan").animate({opacity:"0"},100);
    
    $(".black-triangle").animate({backgroundColor:"#111"}, 100);
    $(".theman").animate({color:"#fff"}, 100);
});

var theplan = document.querySelector(".theplan");
var theman = document.querySelector("theman");


$(".toggle-arrows-btn").click(function(){
    
    
    if ($(".themanP").css("display") == "none"){
        
        $("body").animate({opacity:"0"}, 500, function(){
            $(".black-triangle").css("clip-path"," inherit");
            $(".theplan").css("display","none");
            $(".themanP").css("color","#fff");
            $(".themanP").css("display","block");
            $(".themanP").css("top","15vh");
            $(".themanP").css("right","0");
            $(".themanP").css("left","5vw");
            $(".themanP").css("width","90vw");

            $(".theman").css("color","#fff");

            $(".smallman").css("color","#fff");
            $(".smallman").css("bottom","initial");
            $(".smallman").css("top", $(".theman").height() * 1.6);
            $(".smallman").css("opacity","1");

            $("body").animate({opacity:"1"},500);
        });
            
    } else if ($(".themanP").css("display") == "block") {
        $("body").animate({opacity:"0"}, 500, function(){
            $(".black-triangle").css("clip-path","polygon(100vw 0, 0% 100vh, 100vw 0vh)");
            $(".theplan").css("display","block");
            $(".themanP").css("color","#111");
            $(".themanP").css("display","none");

            $(".theman").css("color","#fff");

            $(".smallman").css("color","#fff");
            $(".smallman").css("bottom","initial");
            $(".smallman").css("top", $(".theman").height() * 2);
            $(".smallman").css("opacity","1");

            $("body").animate({opacity:"1"},500);
        });  
    };
});

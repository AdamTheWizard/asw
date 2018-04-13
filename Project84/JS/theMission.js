
// Creates a P element and randomizes location, shade of blue, size, message and sticks it in the container
function createOne(){
  let thoughts = ["What do I do next?", "Is this forever?", "Where should I go?", "What can I do?", "How can I get through this?", "Is this only me?", "Is it just me?", "Where do I get out?", "How do I know it's right?", "Would anyone care?", "Yes?", "No?", "Am I meant to know?", "How could I possible know?", "When will I be ok?", "Will anyone miss me?", "Should I do it?", "Will it hurt?", "Is this for the best?", "Why won't it stop?", "Has anyone been here before?", "Should I tell anyone?", "Will they think I'm crazy?", "Am I crazy?", "Can anyone hear me?", "Is anyone out there?", "Has everyone given up on me?", "Should I give up?", "Can I take this?"]; 
  const container = document.querySelector("#container");
  let newEl = document.createElement("P");
  let text = document.createTextNode(thoughts[Math.floor(Math.random() * thoughts.length)]);
  newEl.appendChild(text);
  container.appendChild(newEl);
  newEl.className = "randomEle";
  newEl.style.fontSize = Math.floor(Math.random() * (50 - 16)) + "px";
  newEl.style.marginTop = Math.floor(Math.random() * (97 - 1)) + "vh";
  newEl.style.marginLeft = Math.floor(Math.random() * (97 - 1)) + "vw";
  newEl.style.color = "rgb(" + 0 + ", " + 0 + ", " + Math.floor(Math.random()*(255-50+1)+50) + ")";
}
 //Fadesout initial screen and starts loading randoms until there are 1000 elements - then calls fadeToBlack() and stops calling createOne() by claering the setInterval() 
const beginBtn = document.getElementById("begin");
beginBtn.onclick = function(){
    $("audio").get(0).play();
    $("#container").animate({opacity:"0"}, 1000, function(){
    $("#container").empty();
    $("#container").animate({opacity:"1"},1000);
  });
    setTimeout(function(){
      
  
  var fastCreate = setInterval(function(){
  createOne();
    if ($("#container .randomEle").length === 1000){
      fadeToBlack();
        window.clearInterval(fastCreate);
    }
}, 10);  
    }, 5000);
    
    
    
    
    
}
//animations for after crazy adding elements section
function fadeToBlack(){ 
  $("#container").remove();
  $("body").animate({backgroundColor:"#000"},1, function(){
    $("body").animate({backgroundColor:"#111"},2500, function(){
      $("#main-text").fadeIn(2500, function(){
        $("#main-text").animate({opacity:"0"},3000,function(){
          $("#main-text").html("84 men will die by suicide every week until the end of the year.");
          $("#main-text").animate({opacity:"1"},5000,function(){
            $("#main-text").animate({opacity:"0"},3000,function(){
              $("#main-text").html("Right now, 84 men need your support.");
              $("#main-text").animate({opacity:"1"},5000,function(){
                $("#main-text").animate({opacity:"0"},3000,function(){
                  $("#main-text").html("<a class='hashtag' src='https://www.thecalmzone.net/get-involved/donate/'>#Project84</a>");
                  $("#main-text").animate({opacity:"1"},5000,function(){
                    $("#main-text").animate({color:"#69C6DD",marginTop:"10vh"},500, function(){
                        $("#stats-box").fadeIn(1000);
                    });
                  });
                }); 
              });
            });
          });
        });
      });
    });
  });
}


var instance = new TypeIt('#begin', {
    cursor: false,
    breakLines: false,
    //-- Other options...
});
new TypeIt('#begin', {
    strings: ["Start", "dechrau", "tús", "tòiseachadh", "start"],
    cursor:false,
    speed: 100,
    breakLines: false,
    autoStart: false
});

$(".sound-text").click(function(){
    
    if ($(".sound-text").hasClass("notClicked")){
        $(this).removeClass("notClicked");
        $(this).animate({opacity:"0"},200,function(){
            $(this).html("<a class='sound-text'>Toggle sound <i class=' soundOff fas fa-volume-off'></i></a>");
            $(this).animate({opacity:"1"});
            $("audio").get(0).muted = true;
        });
        
    } else {
        $(this).animate({opacity:"0"},200,function(){
            $(this).html("<a class='sound-text notClicked'>Toggle sound <i class=' soundOn fas fa-volume-up'></i></a>");
            $(this).animate({opacity:"1"});
            $("audio").get(0).muted = false;
        });
        
    }
    
});
//This was made by @AdamTheWizard to raise awareness around male suicide in the U.K. feel free to use anything but please let me know where it has been used as I'm a curious cat! *peace sign*
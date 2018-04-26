
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
 //Fadesout initial screen and starts loading randoms until there are 1000 elements - then calls fadeToBlack() and stops calling createOne() by clearing the setInterval() 
const beginBtn = document.getElementById("begin");
beginBtn.onclick = function(){
    $("audio").get(0).play();
    $("#container").animate({opacity:"0"}, 5000, function(){
    $("#container").empty();
    $("#container").animate({opacity:"1"},5000);
  });

    setTimeout(function(){
      
        var fastCreate = setInterval(createOne, 10);
        
        setTimeout(function(){
            fadeToBlack();
            window.clearInterval(fastCreate);
        }, 15000);
        
    }, 5000);
        
}

$(".skip").click(function(){
    skipToBlack();
})

function skipToBlack(){
    $("#container").remove();
    $(".skip").css("display", "none");
    $("body").animate({backgroundColor:"#000"},1, function(){
        $("body").animate({backgroundColor:"#111"},500, function(){
            $("#main-text").html("<a class='hashtag' src='https://www.thecalmzone.net/'>#StopTheStigma</a>");
            $("#main-text").fadeIn(500);
            $("#main-text").animate({opacity:"1"},1500,function(){
                $("#main-text").animate({color:"#69C6DD",marginTop:"5vh"},750, function(){
                    $("#stats-box").fadeIn(500, function(){
                        if ($(window).width() > 500){
                            $(".accordion").fadeIn(1000);
                            $(".hover-tut").fadeIn(2000, function(){
                                $(".down-arrow").animate({marginLeft:"350px",marginRight:"350px"},1000,function(){
                                    $(".down-arrow").animate({marginLeft:"10px",marginRight:"10px"}, 1000);
                                });
                            });
                        }
                        if ($(window).width() < 500){
                            $(".btn").css("display", "block");
                            $(".btn").animate({opacity:"1"}, 2000); 
                        }
                        $(".goneButNot").fadeIn(5000);
                        $(".names").fadeIn(5500, function(){
                            rotateNames();
                            var volume = 1;
                            var fadeVolume = setInterval(function(){
                                if (volume > 0){
                                    var vid = document.querySelector("audio");
                                    vid.volume = volume;
                                    volume -= 0.1;
                                } else if (volume <= 0){
                                        window.clearInterval(fadeVolume);
                                }
                                    
                            }, 750);
                        });
                    });
                });
            });
        }); 
    });
}



// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO
// skipToBlack() FUNCTION TODO TODO TODO TODO TODO TODO



//animations for after crazy adding elements section
function fadeToBlack(){ 
  $("#container").remove();
  $("body").animate({backgroundColor:"#000"},1, function(){
    $("body").animate({backgroundColor:"#111"},2500, function(){
      $("#main-text").fadeIn(2500, function(){
        $("#main-text").animate({opacity:"0"},5000,function(){
          $("#main-text").html("84 men will die by suicide every week until the end of the year.");
          $("#main-text").animate({opacity:"1"},3000,function(){
            $("#main-text").animate({opacity:"0"},5000,function(){
              $("#main-text").html("LET'S CHANGE THIS.");
              $("#main-text").animate({opacity:"1"},3000,function(){
                  //Distort effect
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                  $("#main-text").animate({fontSize:"250%"},10);
                  $("#main-text").animate({fontSize:"300%"},10);
                $("#main-text").animate({opacity:"0"},5000,function(){
                  $("#main-text").html("<a class='hashtag' src='https://www.thecalmzone.net/'>#StopTheStigma</a>");
                  $("#main-text").animate({opacity:"1"},3000,function(){
                    $("#main-text").animate({color:"#69C6DD",marginTop:"5vh"},1500, function(){
                        $("#stats-box").fadeIn(1000, function(){
                            if ($(window).width() > 500){
                                $(".accordion").fadeIn(1000);
                                $(".hover-tut").fadeIn(2000, function(){
                                    $(".down-arrow").animate({marginLeft:"350px",marginRight:"350px"},1000,function(){
                                        $(".down-arrow").animate({marginLeft:"10px",marginRight:"10px"}, 1000);
                                    });
                                });
                            }
                            $(".skip").animate({opacity:"0"},1500, function(){
                                $(".skip").css("display", "none");
                            });
                            if ($(window).width() < 500){
                               $(".btn").css("display", "block");
                                $(".btn").animate({opacity:"1"}, 2000); 
                            }
                                                        
                            $(".goneButNot").fadeIn(10000);
                            $(".names").fadeIn(11000, function(){
                                rotateNames();
                                var volume = 1;
                                
                                var fadeVolume = setInterval(function(){
                                    if (volume > 0){
                                        var vid = document.querySelector("audio");
                                        vid.volume = volume;
                                        volume -= 0.1;
                                    } else if (volume <= 0){
                                        window.clearInterval(fadeVolume);
                                    }
                                    
                                }, 750);
                                
                                
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
    });
  });
}


var instance = new TypeIt('#begin', {
    cursor: false,
    breakLines: false,
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

const names = ["", "Christopher Acland, 30", "Stuart Adamson, 43", "David Bairstow, 46", "Paul Bhattacharjee, 53", "Adrian Borland, 41", "Donald Cammell, 62", "Tim Carter, 40", "Ian Curtis, 23", "Justin Fashanu, 37", "Anton Furst, 47", "Jon Lee, 43", "Christopher Hardman, 24", "Billy Mackenzie, 39", "Alexander McQueen, 40", "Terry Newton, 31", "David Rappaport, 38", "Dale Roberts, 24", "Carl Sargeant, 49", "David Scarboro, 20", "Tony Scott, 68", "Gary Speed, 42", "Mark Speight, 42", "David Sutch 58"];
rotateNames();
function rotateNames(){
    
    let namesIndex = 0;
    setInterval(function(){
        
        if (namesIndex < names.length){
            $(".names").animate({opacity:"0"},3000, function(){
                $(".names").html(names[namesIndex]);
                $(".names").animate({opacity:"1"}, 3000);
            });
           
           namesIndex++; 
        } else {
            namesIndex = 0;
        }
        
        
    },12000);
    
    
    
}


//This was made by @AdamTheWizard to raise awareness around male suicide in the U.K. feel free to use anything but please let me know where it has been used solely because I'm a curious cat! *peace sign*
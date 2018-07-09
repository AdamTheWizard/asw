$("#burger-btn").click(function() {
            $(this).animate({
                opacity: "0"
            }, 200);
            $(".nav").slideToggle("slow");
            $("#twitter-icon").animate({
                opacity: "0"
            }, 200);
        });
        $("#close-btn").click(function() {
            $(".nav").slideToggle("slow", function() {
                $("#burger-btn").animate({
                    opacity: "1"
                }, 200);
                $("#twitter-icon").animate({
                    opacity: "1"
                }, 200);
            })
        });

// Animates contact form onto page.
        $(window).ready(function() {
            $("#container").animate({
                opacity: "1"
            }, 1000, function(){
                $(".shoot").slideToggle(500, function(){
                    $(".shoot").css("display", "block");
                    $(".name-input").slideToggle(500, function(){
                        $(".name-input").css("display", "block");
                        $(".email-input").slideToggle(500, function(){
                            $(".email-input").css("display", "block");
                            $(".subject-input").slideToggle(500, function(){
                                $(".subject-input").css("display", "block");
                                $(".message-input").slideToggle(500, function(){
                                    $(".message-input").css("display", "block");
                                    $(".submit-btn").fadeIn(3000);
                                });
                            })
                        })
                    });
                });
            });
        });

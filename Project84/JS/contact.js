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
        $(window).ready(function() {
            $("#container").animate({
                opacity: "1"
            }, 3000, function(){
                $("#Telephone").css("border", "1px solid red !important");
            });
        });
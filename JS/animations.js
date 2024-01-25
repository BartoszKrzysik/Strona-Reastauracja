
$(document).ready(function(){
    
    $("#box h1, main p, main img, .line, #lucky, #godz").hide();

    setTimeout(function(){
        $("#box h1").css("line-height","20px");
        $("#box h1").fadeIn(1000).animate({
            'line-height' : '10px'
        }, 600);;
    },1000);
        
  
    setTimeout(function(){
        $("main p, main img").fadeIn("slow");
    }, 2000);

    setTimeout(function(){
        
        $("#godz").fadeIn(700);
    }, 2400);

    setTimeout(function(){
        $("#lucky").fadeIn(700);
    }, 2800);
    
/*
    $(".nad").hover(function(){
        $(".podlista").slideToggle();
    });*/
});


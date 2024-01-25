count1 = 0;
count2 = 0;
count3 = 0;
count4 = 0;
count5 = 0;
count6 = 0;
count7 = 0;
count8 = 0;

$(document).ready(function(){
    $("#order").hide();
    //$(".min").hide();
    $("#show").click(function(){
        $("#order").slideToggle(600);
    });

    
    $("#d1").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c1").innerText);
        document.getElementById("price").innerText = x;
        count1++;

        if(count1 > 0) $("#m1").css("visibility","visible");
        else $("#m1").css("visibility","hidden");
        
    });

    $("#m1").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c1").innerText);
        document.getElementById("price").innerText = x;
        count1--;

        if(count1 > 0) $("#m1").css("visibility","visible");
        else $("#m1").css("visibility","hidden"); 
    });


    $("#d2").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c2").innerText);
        
        document.getElementById("price").innerText = x;
        count2++;

        if(count2 > 0) $("#m2").css("visibility",'visible');
        else $("m2").css("visibility","hidden");
    });

    $("#m2").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c2").innerText);
        document.getElementById("price").innerText = x;
        count2--;

        if(count2 > 0) $("#m2").css("visibility","visible");
        else $("#m2").css("visibility","hidden"); 
    });


    $("#d3").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c3").innerText);
        
        document.getElementById("price").innerText = x;
        count3++;

        
        if(count3 > 0) $("#m3").css("visibility",'visible');
        else $("#m3").css("visibility","hidden");
    });

    $("#m3").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c3").innerText);
        document.getElementById("price").innerText = x;
        count3--;

        if(count3 > 0) $("#m3").css("visibility","visible");
        else $("#m3").css("visibility","hidden"); 
    });

    $("#d4").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c4").innerText);
        
        document.getElementById("price").innerText = x;
        count4++;

        if(count4 > 0) $("#m4").css("visibility",'visible');
        else $("m4").css("visibility","hidden");
    });

    $("#m4").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c4").innerText);
        document.getElementById("price").innerText = x;
        count4--;

        if(count4 > 0) $("#m4").css("visibility","visible");
        else $("#m4").css("visibility","hidden"); 
    });

    $("#d5").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c5").innerText);
       
        document.getElementById("price").innerText = x;
        count5++;

        if(count5 > 0) $("#m5").css("visibility",'visible');
        else $("m5").css("visibility","hidden");
    });

    $("#m5").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c5").innerText);
        document.getElementById("price").innerText = x;
        count5--;

        if(count5 > 0) $("#m5").css("visibility","visible");
        else $("#m5").css("visibility","hidden"); 
    });

    $("#d6").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c6").innerText);
        
        document.getElementById("price").innerText = x;
        count6++;

        if(count6 > 0) $("#m6").css("visibility",'visible');
        else $("m6").css("visibility","hidden");
    });

    $("#m6").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c6").innerText);
        document.getElementById("price").innerText = x;
        count6--;

        if(count6 > 0) $("#m1").css("visibility","visible");
        else $("#m6").css("visibility","hidden"); 
    });

    $("#d7").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c7").innerText);
        
        document.getElementById("price").innerText = x;
        count7++;

        if(count7 > 0) $("#m7").css("visibility",'visible');
        else $("m7").css("visibility","hidden");
        
    });

    $("#m7").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c7").innerText);
        document.getElementById("price").innerText = x;
        count7--;

        if(count7 > 0) $("#m7").css("visibility","visible");
        else $("#m7").css("visibility","hidden"); 
    });

    $("#d8").click(function(){
        x = Number(document.getElementById("price").innerText) + Number(document.getElementById("c8").innerText);
        
        document.getElementById("price").innerText = x;
        count8++;
        

        if(count8 > 0) {$("#m8").css("visibility",'visible');}
        else $("m8").css("visibility","hidden");
    });

    $("#m8").click(function(){
        x = Number(document.getElementById("price").innerText) - Number(document.getElementById("c8").innerText);
        document.getElementById("price").innerText = x;
        count8--;

        if(count8 > 0) $("#m8").css("visibility","visible");
        else $("#m8").css("visibility","hidden"); 
    });


});


   
    


  

    



    
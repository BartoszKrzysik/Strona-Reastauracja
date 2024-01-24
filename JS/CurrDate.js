const d = new Date();

m = d.getMonth()+1;
let mm = "";

if(m<10) mm = '0' + m.toString();

s = d.getFullYear().toString() + '-' + mm + '-' + d.getDate().toString();

console.log(x);
y=x.toString();
//document.getElementById("l_content").innerHTML= x;
$(document).ready(function(){
    $("#lucky h3").append( s +':');
});




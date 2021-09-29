var wrapper = document.getElementById("client-signature-pad");
var canvas = wrapper.querySelector("canvas");
//window.onload = drawSign;

 setTimeout(function(){ 
    drawSign();
 }, 6000);

function drawSign() {
    var client_name = document.getElementById("client-name").innerHTML;;
    var ctx = canvas.getContext("2d");

    ctx.font = "40px DCWFont"; //Roboto
    ctx.fillText("" + client_name, 20, 40);

    ctx.font = "20px Arial";  
    ctx.fillText("--------------------",20, 90);
    ctx.fillText("Signed By: " + client_name, 20, 110);
}
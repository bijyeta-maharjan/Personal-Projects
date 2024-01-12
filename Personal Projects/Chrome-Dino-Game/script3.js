var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
   setTimeout(function(){
       character.classList.remove("animate");

   } ,500);
}
var checkDead = setInterval(function(){
    var charaterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if (blockleft<28 && blockleft>0 && charaterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("game over");
}
}, 10);
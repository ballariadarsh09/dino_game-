var character = document.getElementById("character");
var block = document.getElementById("block");

 let jump = () =>{
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);

}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation="none";
        block.style.display="none";
        // alert("u lose")
        if(confirm("u lose")) {
            window.location.href = "http://127.0.0.1:5500/dragon.html"
        }
    }
},10)

document.getElementById("game").addEventListener("click",jump);

document.onkeydown = checkKey;

function checkKey(e) {
    
    if (e.keyCode == '38') {
      jump()
    }
}
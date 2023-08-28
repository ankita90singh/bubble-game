var timer = 60;
var score = 0;
var hitrn = 0;

//jispe click karoge vo eliment reise hoga event naa milne par event ke parent par listner dundega waha bhi naaa milne par event parent ke parent ke parent par listner dundega that is event bubbling



function increaseScore(){
    score +=10;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitvalue").textContent=hitrn;
}
function makeBubble(){
    var clutter=""
for(var i=1; i<=171; i++){
    var rn = Math.floor(Math.random()*10)
    clutter+=`<div id="bubble">${rn}</div>`
}

document.querySelector("#pbottom").innerHTML=clutter
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
             timer--;
                 document.querySelector("#timervalue").textContent= timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`
        }
     
  
    },1000)
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();

    }

})
getNewHit();
runTimer();
makeBubble();
// increaseScore();

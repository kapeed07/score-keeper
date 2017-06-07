var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var playingTo = document.getElementById("playingTo");
var reset = document.getElementById("reset");

var p1 = 0;
var p2 = 0;

main();

function main(){
  p1 = 0;
  p2 = 0;
  player1.classList.remove("hide");
  player2.classList.remove("hide");
  reset.classList.add("hide");
  score1.textContent = p1;
  score2.textContent = p2;
  score1.classList.remove("winner");
  score1.classList.remove("looser");
  score2.classList.remove("winner");
  score2.classList.remove("looser");
  reset.textContent = "Play Again?";
}

inc.addEventListener("click", function(){
  playingTo.value++;
  main();
});

dec.addEventListener("click", function(){
  if(playingTo.value > 1 ){
    playingTo.value--;
    main();
  }
});

player1.addEventListener("click", function(){
  if (p1 + p2 < parseInt(playingTo.value)) {
      score1.textContent = ++p1;
      winner();
  }
});

player2.addEventListener("click", function(){
  if (p1 + p2 < parseInt(playingTo.value)) {
      score2.textContent = ++p2;
      winner();
  }
});

reset.addEventListener("click", function(){
  main();
});

function winner(){
  if (p1 + p2 === parseInt(playingTo.value)){
    if( p1 > p2 ){
      score1.classList.add("winner");
      score2.classList.add("looser");
    }else if(p2 > p1){
      score2.classList.add("winner");
      score1.classList.add("looser");
    }else{
      reset.classList.remove("hide");
      reset.textContent = "Draw. Play Again?";
    }
    player1.classList.add("hide");
    player2.classList.add("hide");
    reset.classList.remove("hide");
  }
}

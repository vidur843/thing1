var ball;
var database,position;
var gameState=0;
var playerCount=0;
var player,form,game
var allPlayers;
var cars,car1,car2,car3,car4;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game= new Game();
   game.getstate();
   game.start();
}

function draw(){
    background("white");
   if(playerCount==4){
       game.update(1);
   }
   if(gameState==1){
       clear();
       game.play();
   }
}


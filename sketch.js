var database;
var gamestate = 0;
var playercount;
var form,game,player,allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start()

}

function draw(){
  background("white");
  if(playercount === 5){
       game.update(1);
  }  
  if(gamestate === 1){
       clear();
       game.play();
  }
}




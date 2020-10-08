class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Starts",120,100);
    Player.getPlayerinfo();
    if(allP!==undefined){
      var displayPosition = 130;
     for(var plr in allP){
     if (plr === "player"+player.index){
       fill("red");
     }
     else{
       fill("black");
     }
    
    displayPosition+=20;
    textSize(15);
    text(allP[plr].name+":"+allP[plr].distance,120,displayPosition);
    }
    }
  if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance+=50;
    player.update();
  }
}
}

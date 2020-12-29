class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("gamestate");
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value");
            if(playercountref.exist){
                playercount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(12);
        text("The Game is about to start",200,100);
        Player.getPlayerinfo()
        if(allPlayers!== undefined){
            if(plr=="player"+player.index){
                fill("red");
            }
            else{
                fill(0);
            }
            var display_position = 130;
            display_position = display_position+50;
            textSize = (12);
            text(allPlayers[plr].name+" :"+ allPlayers[plr].distance,120,display_position);            
        }
        if(keyDown(UP_ARROW)&&player.index!== null){
            player.distance = player.distance+5;
            player.update();
        }
    }
}
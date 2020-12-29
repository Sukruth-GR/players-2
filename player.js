class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playercountref = database.ref("playercount");
        playercountref.on("value",function(data){
            playercount = data.val();
        })
    }
    updateCount(playercount){
        database.ref("/").update({
            playercount:playercount
        })
    }
    update(){
        var playerindex = "players/player"+ this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })        
    }
    static getPlayerinfo(){
        var Playerinforef = database.ref("players");
        Playerinforef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}
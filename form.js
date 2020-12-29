class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Click here to Play");
        this.greeting = createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2")
        title.html("Real Car Racing");
        title.position(250,50);

        this.input.position(300,150);

        this.button.position(300,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount = playercount+1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);

            this.greeting.html("Hello "+name+" Welcome to Real Car Racing");
            this.greeting.position(300,300);
        })
    }
}
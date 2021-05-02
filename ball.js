class Ball{
    constructor(x,y,r){

        var options={

            density: 8

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);

        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("red");
        circle(0,0,this.r);
        pop();



    }
} 
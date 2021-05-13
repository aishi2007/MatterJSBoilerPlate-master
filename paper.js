class paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            restituion:0.3,
            friction:0.5,
            density:1.2
        }

        this.body= bodies.circle(x,y,2,options);

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos,y);
        rotate(angle);

        fill("white");
        pop();
    }
};
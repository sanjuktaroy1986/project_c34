class Bob{

    constructor(x,y,r,color){

    var options={
        restitution:1,
        friction:1,
        density:0.5
       
    }    
    this.body=Bodies.circle(x,y,r,options);
    World.add(myworld,this.body);
    this.r=r;
    this.color=color;
    }


    display(){
        push()
     fill(this.color);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
     pop()

    }
}
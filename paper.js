class Paperball{
 constructor(x,y){
     var options={
         isStatic: false,
         restitution:0.3,
         friction:0.5,
         density:0.1
     }
     this.body= Bodies.circle(20,600,60,options);
     this.radius=30;
     World.add(world,this.body);
 }

 display(){
    var pos= this.body.position;
    //circleMode(CENTER);
    circle(pos.x,pos.y,this.radius);
    fill("red");
}
}


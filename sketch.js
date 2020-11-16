
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,ground;
var box1,box2,box3;
var box1sprite,box2sprite,box3sprite,Options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(50,600);
	ground = new Ground(400,height,800,20);


	box1sprite=createSprite(400,665,300,15,Options);
	box1sprite.shapeColor=("red");
	box1= Bodies.rectangle(400,665,50,300,Options);
	World.add(world,box1);
	
	box2sprite=createSprite(250,600,15,150,Options);
	box2sprite.shapeColor=("red");
	box2= Bodies.rectangle(250,600,15,150,Options);
	World.add(world,box2);

	box3sprite=createSprite(550,600,15,150,Options);
	box3sprite.shapeColor=("red");
	box3= Bodies.rectangle(550,600,15,150,Options);
	World.add(world,box3);

	Options={
		isStatic:true
	}

	keyPressed()
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display();
  ground.display();
  drawSprites(); 
}

function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:40,y:-50})
    }
}


